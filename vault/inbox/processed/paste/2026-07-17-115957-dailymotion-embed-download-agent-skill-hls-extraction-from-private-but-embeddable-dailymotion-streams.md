---
title: dailymotion-embed-download (agent skill: HLS extraction from private-but-embeddable Dailymotion streams)
kind: paste
captured_at: 2026-07-17 11:59
tags: [agent-skill, dailymotion, hls, video-download, yt-dlp, page-evaluate, defensive-tooling]
source_url: file:///Users/olaidris/.aside/u/1/agents/main/skills/user/dailymotion-embed-download/SKILL.md
status: inbox
---

# dailymotion-embed-download (agent skill: HLS extraction from private-but-embeddable Dailymotion streams)

# dailymotion-embed-download (agent skill)

A technician-level method for downloading a video that is *playing* via a Dailymotion embed (anime/donghua aggregators like AnimeCube, or any page with a `geo.dailymotion.com/player/...` iframe or `dailymotion.com/video/...` iframe) when there is no download button and the direct `/video/<id>` URL is "Private Video" / 403s.

## Why the obvious tools fail
- `yt-dlp <dailymotion.com/video/X>` → downloads metadata JSON, then 403s on the `m3u8` manifest. The manifest token is tied to the embed/geo context, not the public API.
- `yt-dlp <geo.dailymotion.com/player/...>` → same: metadata OK, m3u8 403 (specifically on token-bound `cdndirector.dailymotion.com`).
- The player fetches the manifest through a Service Worker / `<script src>` tag — so `page.on('request')`, CDP `Network`, and `page.addInitScript` do NOT capture it. Don't rely on network interception.
- A native `ffmpeg` binary may be SIGKILLed in a sandbox that blocks unsigned binaries from user paths (only system binaries in `/bin`, `/usr/bin` run). If `ffmpeg -version` exits 137, concatenate MPEG-TS segments with `/bin/cat` instead.

## Working method
The stream is HLS. The top-level manifest (`cdndirector…/…m3u8`) is token/geo-bound and 403s from plain curl/yt-dlp, **but** once you read the live player config out of the page you get that exact manifest URL and can fetch it **from inside the page** (browser's own session + IP). That manifest lists *variant* playlists on `vodN.cf.dmcdn.net` whose segments ARE fetchable with a normal curl. MPEG-TS segments concatenate with `cat` into one playable file — no ffmpeg needed.

### Step 1 — get live player config from the page
Dailymotion stores full config in a window global containing the string `embedScriptUrl`. Read with `page.evaluate` (works even when network capture doesn't):
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
Prefer re-reading the live config on the fly (fresh tokens) rather than caching it — the `sec`/`dmTs` params can go stale.

### Step 2 — fetch the top-level manifest FROM INSIDE THE PAGE
A plain curl/REPL fetch 403s. Fetch it with the browser's own context, including cross-site cookies:
```js
const manifest = await page.evaluate(async (u) => {
  const r = await fetch(u, { credentials: 'include', headers: { 'Referer': 'https://www.dailymotion.com/' } });
  return r.ok ? await r.text() : '';
}, cfg.metadata.stream.url);
```
Returns the master playlist: a list of `#EXT-X-STREAM-INF` variants (380/480/720/1080/1440/2160) whose URLs point at `vodN.cf.dmcdn.net/...m3u8`.

### Step 3 — pick the best variant
Default to the highest resolution present. Parse master playlist for `NAME="<res>"` and the variant URL on the following line (absolute: `https://vodN.cf.dmcdn.net/sec2(…)/video/…_3.m3u8#cell=cf3`).
Portable fallback: on a normal machine where yt-dlp works, often skip straight to `yt-dlp -f best "<geo player or embed url>"` (use the embed/geo URL, not the bare `/video/` URL; the bare one is private).

### Step 4 — fetch the variant playlist (bash curl works here)
The `dmcdn.net` variant playlist and its `.ts` segments are fetchable from a normal `curl` (token is in the URL):
```bash
VURL=$(python3 -c "import re,json; t=open('master.m3u8').read(); m=re.search(r'NAME=\"1080\"[^\n]*\n(https?://\S+)', t); print(m.group(1).rstrip())")
curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36" \
  -e "https://www.dailymotion.com/" "$VURL" -o variant.m3u8
```
Variant playlist lists `.ts` segments as relative paths like `../../../frag(N)/video/266/168/<id>_mp4_h264_aac_fhd_3.ts`.

### Step 5 — download and concatenate the segments
Resolve each relative `.ts` against the variant URL with `urllib.parse.urljoin`, download them (threaded, per-segment retry), then concatenate in order with `/bin/cat`. Bundled `scripts/dl.py`:
```bash
python3 scripts/dl.py --master master.m3u8 --res best --out ~/Downloads/<Show>/ep<N>.ts [--mp4]
```
`dl.py` reads master playlist, selects variant (res `best` = highest, or `1080`/`720`/…), fetches variant playlist, downloads every `.ts` (skips already-present files, retries on timeout), concatenates in numeric order, and — if `ffmpeg` is available — also remuxes a `.mp4`. If ffmpeg is SIGKILLed it logs that and leaves the `.ts` (fully playable in VLC/IINA/Infuse).

### Step 6 — verify and report
Sanity-check the result is valid MPEG-TS (sync byte `0x47` every 188 bytes at head/mid/tail) and report path + size.

## Environment gotchas (Aside sandbox specifically)
- REPL variable scope is persistent — never redeclare `url`, `raw`, `caps`, `video`, `cfg` across calls; use fresh names.
- REPL `fetch` carries the user's cookies and is the right tool for cross-origin reads the browser can do; but the token-bound `cdndirector` manifest still needs an **in-page** `fetch` with `credentials:'include'`.
- Native binaries from user paths are SIGKILLed (exit 137). `yt-dlp` (Python) is fine; `ffmpeg` is not. Primary output is `.ts` via `cat`. Don't block on ffmpeg.
- Network capture is dead in this bridge — extract everything via `page.evaluate` + window/DOM inspection.
- Temp dir `./tmp/` may not exist — `fs.mkdir('./tmp', {recursive:true})` before writing.

## Report structure
Always report: file path, size + resolution, integrity (valid MPEG-TS, segment count, 0 missing), format note (`.ts` plays in VLC/IINA/Infuse as-is; `.mp4` via `ffmpeg -i in.ts -c copy out.mp4` where ffmpeg runs), other resolutions available.

Bundled: `SKILL.md` + `scripts/dl.py` (Python HLS downloader: parse_variants → pick best/closest → threaded segment download with retry → cat → optional ffmpeg remux).
