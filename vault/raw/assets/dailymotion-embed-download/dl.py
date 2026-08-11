#!/usr/bin/env python3
"""Download a Dailymotion HLS episode from a saved MASTER playlist.

The master playlist is obtained from inside the playing page (the token-bound
`cdndirector` manifest 403s from a plain curl/yt-dlp, so it must be
fetched with an in-page `fetch(..., {credentials:'include'})` and saved
to a file). This script only handles the bash side, which DOES work:
the variant playlists and `.ts` segments live on `vodN.cf.dmcdn.net`
and are fetchable with a normal requests/curl.

Usage:
  python3 dl.py --master master.m3u8 --res best --out ~/Downloads/Show/ep1.ts [--mp4]
  python3 dl.py --master master.m3u8 --res 1080  --out ep1.ts
"""
import argparse, os, re, sys, time, urllib.parse, urllib.request, concurrent.futures as cf

HDR = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
    'Referer': 'https://www.dailymotion.com/',
}

def get(url, timeout=45):
    req = urllib.request.Request(url, headers=HDR)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()

def parse_variants(master_text):
    """Return list of (height, name, url) from a master playlist."""
    out = []
    lines = master_text.splitlines()
    for i, line in enumerate(lines):
        if line.startswith('#EXT-X-STREAM-INF'):
            m = re.search(r'RESOLUTION=(\d+)x(\d+)', line)
            nm = re.search(r'NAME="([^"]+)"', line)
            height = int(m.group(2)) if m else 0
            name = nm.group(1) if nm else str(height)
            if i + 1 < len(lines):
                nxt = lines[i + 1].strip()
                if nxt and not nxt.startswith('#'):
                    out.append((height, name, nxt))
    return out

def pick(variants, res):
    if res == 'best' or not res:
        return max(variants, key=lambda v: v[0])
    # try exact height or NAME match
    for v in variants:
        if str(v[0]) == str(res) or v[1] == str(res):
            return v
    # fallback: closest height <= requested
    try:
        want = int(res)
        cand = [v for v in variants if v[0] <= want]
        return max(cand, key=lambda v: v[0]) if cand else max(variants, key=lambda v: v[0])
    except ValueError:
        return max(variants, key=lambda v: v[0])

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--master', required=True)
    ap.add_argument('--res', default='best')
    ap.add_argument('--out', required=True)
    ap.add_argument('--mp4', action='store_true', help='also remux to .mp4 if ffmpeg is available')
    args = ap.parse_args()

    master = open(args.master, encoding='utf-8', errors='replace').read()
    variants = parse_variants(master)
    if not variants:
        print('NO variants found in master playlist', file=sys.stderr); sys.exit(1)
    height, name, variant_url = pick(variants, args.res)
    print(f'picked variant: {name} ({height}p), {len(variants)} variants total', flush=True)

    vpl = get(variant_url).decode('utf-8', 'replace')
    segs = [urllib.parse.urljoin(variant_url, l.strip())
             for l in vpl.splitlines()
             if l.strip() and not l.startswith('#') and l.lower().endswith('.ts')]
    print(f'segments: {len(segs)}', flush=True)

    outdir = os.path.join(os.path.dirname(args.out), '_segs')
    os.makedirs(outdir, exist_ok=True)
    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)

    def dl(i, u, tries=4):
        p = os.path.join(outdir, f'{i:05d}.ts')
        if os.path.exists(p) and os.path.getsize(p) > 0:
            return i
        for t in range(tries):
            try:
                data = get(u, timeout=60)
                if len(data) > 1000:
                    open(p, 'wb').write(data)
                    return i
            except Exception:
                if t < tries - 1:
                    time.sleep(2)
        print(f'  FAILED seg {i}', flush=True)
        return i

    with cf.ThreadPoolExecutor(max_workers=12) as ex:
        futs = [ex.submit(dl, i, u) for i, u in enumerate(segs)]
        done = 0
        for f in cf.as_completed(futs):
            try:
                f.result()
            except Exception as e:
                print('  worker err', e, flush=True)
            done += 1
            if done % 100 == 0:
                print(f'  {done}/{len(segs)}', flush=True)

    # concatenate in order
    with open(args.out, 'wb') as fo:
        ok = miss = 0
        for i in range(len(segs)):
            p = os.path.join(outdir, f'{i:05d}.ts')
            if os.path.exists(p):
                fo.write(open(p, 'rb').read())
                ok += 1
            else:
                miss += 1
    size = os.path.getsize(args.out)
    print(f'DONE {args.out} size={size} (~{size/1e9:.2f} GB) ok={ok} missing={miss}', flush=True)

    if args.mp4:
        mp4 = os.path.splitext(args.out)[0] + '.mp4'
        ff = None
        import shutil
        for cand in ('ffmpeg', '/usr/bin/ffmpeg', '/usr/local/bin/ffmpeg'):
            if shutil.which(cand) or os.path.exists(cand):
                ff = cand if os.path.exists(cand) else shutil.which(cand)
                break
        if ff:
            try:
                import subprocess
                r = subprocess.run([ff, '-i', args.out, '-c', 'copy', '-y', mp4],
                                     capture_output=True, timeout=600)
                if r.returncode == 0 and os.path.exists(mp4):
                    print(f'MP4 written {mp4} ({os.path.getsize(mp4)} bytes)', flush=True)
                else:
                    print('mp4 remux failed (ffmpeg rc=%s); keeping .ts' % r.returncode, flush=True)
            except Exception as e:
                print(f'ffmpeg unavailable/sandbox-killed ({e}); keeping .ts', flush=True)
        else:
            print('ffmpeg not found; skipped mp4 (keeping .ts)', flush=True)

if __name__ == '__main__':
    main()
