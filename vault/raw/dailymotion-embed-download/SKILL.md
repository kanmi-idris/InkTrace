---
name: dailymotion-embed-download
description: >-
  Download a video you are already watching/streaming when the page has no download button and the source is a Dailymotion embed (anime/donghua sites like AnimeCube, or any page whose player is a Dailymotion iframe/geo player). Use this whenever the user says "download this anime/episode/show", the direct https://www.dailymotion.com/video/… URL is private or 403s, yt-dlp reports "No video formats found" or "Failed to download m3u8 … 403", or the player streams a geo/private-but-embeddable video. Works both inside the Aside sandbox (no ffmpeg, network capture dead) and on a normal machine (yt-dlp/ffmpeg). Produces a playable .ts and, when possible, an .mp4.
---

# Dailymotion embed download

## When this applies

The user is on a page that plays video through a Dailymotion player (common on anime/donghua aggregators such as AnimeCube, and on any site that embeds `geo.dailymotion.com/player/...` or a `dailymotion.com/video/...` iframe). They want the file locally. There is no download button. The direct `dailymotion.com/video/<id>` URL shows "Private Video" and 403s, because the video is *private but embeddable* — the stream URL is token/geo-bound to the browser session that's actually playing it.

Why the obvious tools fail (so you don't waste time re-discovering this):

- **`yt-dlp <dailymotion.com/video/X>`** → downloads the *metadata* JSON fine, then 403s on the `m3u8` manifest. The manifest token is tied to the embed/geo context, not the public API.
- **`yt-dlp <geo.dailymotion.com/player/...>`** → same: metadata OK, m3u8 403. The 403 is on the token-bound `cdndirector.dailymotion.com` manifest host specifically.
- **The player fetches the manifest through a Service Worker / `<script src>` tag**, so `page.on('request')`, CDP `Network` events, and `page.addInitScript` (if unavailable in your bridge) will NOT capture it. Do not rely on network interception.
- **A native `ffmpeg` binary may be SIGKILLed** in a sandbox that blocks executing unsigned binaries from user paths (only system binaries in `/bin`, `/usr/bin` run). If `ffmpeg -version` exits 137, you cannot merge HLS with ffmpeg here — concatenate MPEG-TS segments with `/bin/cat` instead, which is a system binary and works.

## The working method

The stream is an HLS manifest. The top-level manifest (`cdndirector…/…m3u8`) is token/geo-bound and 403s from a plain `curl`/yt-dlp, **but** once you read the live player config out of the page, you get that exact manifest URL and can fetch it **from inside the page** (the browser's own session + IP). That manifest lists *variant* playlists on `vodN.cf.dmcdn.net` whose segments ARE fetchable with a normal `curl`. MPEG-TS segments concatenate with `cat` into one playable file — no ffmpeg needed.

### Step 1 — get the live player config from the page

The Dailymotion player stores its full config in a window global that contains the string `embedScriptUrl`. Read it with `page.evaluate` (this works even when network capture doesn't):

```js
const cfg = await page.evaluate(() => {
  for (const k in window) {
    try {
      const v = window[k];
      if (v && typeof v === 'object' && JSON.stringify(v).includes('embedScriptUrl')) return v;
    } catch (e) {}
  }
  return null;
});
// cfg.metadata.stream.url  -> cdndirector manifest (token-bound)
// cfg.metadata.stream.formats -> {'380':'mpegts','480':'mpegts','720':'mpegts','1080':'mpegts','1440':'mpegts', ...}
// cfg.metadata.info.url -> the REAL media id, e.g. https://www.dailymotion.com/video/x9nm6ji
```

The config's `metadata.stream.url` is the `cdndirector…m3u8?sec=…` manifest. **Prefer re-reading the live config on the fly** (fresh tokens) rather than caching it — the `sec`/`dmTs` params can go stale.

### Step 2 — fetch the top-level manifest FROM INSIDE THE PAGE

A plain `curl`/REPL `fetch` of that `cdndirector` URL 403s (token/geo). Fetch it with the browser's own context, including cross-site cookies:

```js
const manifest = await page.evaluate(async (u) => {
  const r = await fetch(u, { credentials: 'include', headers: { 'Referer': 'https://www.dailymotion.com/' } });
  return r.ok ? await r.text() : '';
}, cfg.metadata.stream.url);
```

This returns the **master playlist**: a list of `#EXT-X-STREAM-INF` variants (380/480/720/1080/1440/2160) whose URLs point at `vodN.cf.dmcdn.net/...m3u8`. Save it to a file — you'll parse it in bash.

### Step 3 — pick the best variant

Default to the **highest resolution present** (the user asked for best quality). Parse the master playlist for the `NAME="<res>"` line and the variant URL on the following line. The variant URL is absolute (`https://vodN.cf.dmcdn.net/sec2(…)/video/…_3.m3u8#cell=cf3`).

> Portable fallback: on a normal machine where yt-dlp works, you can often skip straight to `yt-dlp -f best "<geo player or embed url>"`. Use the **embed/geo player URL**, not the bare `/video/` URL (the bare one is private). Only fall back to the manual method below when yt-dlp 403s the m3u8.

### Step 4 — fetch the variant playlist (bash curl works here)

Unlike the top-level manifest, the `dmcdn.net` variant playlist and its `.ts` segments are fetchable from a normal `curl` (the token is in the URL). Fetch it:

```bash
VURL=$(python3 -c "import re,json; t=open('master.m3u8').read(); m=re.search(r'NAME=\"1080\"[^\n]*\n(https?://\S+)', t); print(m.group(1).rstrip())")
curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36" \
  -e "https://www.dailymotion.com/" "$VURL" -o variant.m3u8
```

The variant playlist lists `.ts` segments as **relative** paths like `../../../frag(N)/video/266/168/<id>_mp4_h264_aac_fhd_3.ts`.

### Step 5 — download and concatenate the segments

Resolve each relative `.ts` against the variant URL with `urllib.parse.urljoin`, download them (threaded, with per-segment retry), then **concatenate in order** with `/bin/cat` (or `type` on Windows). Use the bundled `scripts/dl.py`:

```bash
python3 scripts/dl.py --master master.m3u8 --res best --out ~/Downloads/<Show>/ep<N>.ts [--mp4]
```

`dl.py` reads the master playlist, selects the variant (res `best` = highest, or `1080`/`720`/…), fetches the variant playlist, downloads every `.ts` (skips already-present files, retries on timeout), concatenates in numeric order, and — if `ffmpeg` is available — also remuxes a `.mp4`. If `ffmpeg` is SIGKILLed it logs that and leaves the `.ts` (which is fully playable in VLC/IINA/Infuse).

### Step 6 — verify and report

Sanity-check the result is a valid MPEG-TS (sync byte `0x47` every 188 bytes at head/mid/tail) and report the path + size. Example:

```bash
python3 - <<'PY'
import os
p=os.path.expanduser('~/Downloads/<Show>/ep<N>.ts'); sz=os.path.getsize(p); f=open(p,'rb')
h=f.read(564); hok=sum(1 for i in range(0,len(h),188) if h[i]==0x47)
f.seek(sz//2); m=f.read(564); mok=sum(1 for i in range(0,len(m),188) if m[i]==0x47)
f.seek(max(0,sz-188)); t=f.read(188)
print(f'{sz} bytes, head sync {hok}/3, mid {mok}/3, tail {t[0]==0x47} ->', 'VALID' if hok==3 and mok==3 and t[0]==0x47 else 'CHECK')
PY
```

## Environment gotchas (Aside sandbox specifically)

- **REPL variable scope is persistent** — never redeclare `url`, `raw`, `caps`, `video`, `cfg` across calls; use fresh names each time or you'll hit `Identifier 'x' has already been declared`.
- **REPL `fetch` carries the user's cookies** and is the right tool for cross-origin reads the browser can do; but the token-bound `cdndirector` manifest still needs an **in-page** `fetch` with `credentials:'include'`.
- **Native binaries from user paths are SIGKILLed** (exit 137). `yt-dlp` (Python) is fine; `ffmpeg` is not. So the primary output is `.ts` via `cat`. Don't block on ffmpeg.
- **Network capture is dead in this bridge** (`page.on('request')`, CDP, `addInitScript` either unavailable or silent). Extract everything you need via `page.evaluate` + window/DOM inspection instead.
- **Temp dir `./tmp/` may not exist** — `fs.mkdir('./tmp', {recursive:true})` before writing.

## Report structure

Always report:
- **File path** (e.g. `~/Downloads/<Show>/ep<N>_<res>.ts`)
- **Size** and **resolution**
- **Integrity** (valid MPEG-TS, segment count, 0 missing)
- **Format note**: `.ts` plays in VLC/IINA/Infuse as-is; to get `.mp4`, run `ffmpeg -i in.ts -c copy out.mp4` on a machine where ffmpeg runs.
- **Other resolutions available**, in case they want a smaller/larger file.
