# selar-ebook-rip

Reference implementation of the bypass described in `analysis.md` (section 2).

It reconstructs a Selar flipbook e-book into a PDF by scraping the page images that
are **already decoded in the authenticated reader DOM** and reassembling them with
[pdf-lib](https://pdf-lib.js.org/). No exploit, no vulnerability — the "protection" is
client-side display obfuscation, and the pixels are already on screen.

> ⚠️ For authorized / educational use only. Only run this against content you own or
> are licensed to access. See `analysis.md` §4 and §3 (how to *harden* such a system).

## Requirements

- Node.js 18+
- `npx playwright install chromium` (downloads the browser)

## Setup

```bash
npm install
npx playwright install chromium
```

## Export your cookies

The reader is behind `/me/` (authentication), so the script needs your session
cookies. Export them as `cookies.json` in this folder, Playwright format:

```json
[
  {
    "name": "session",
    "value": "REPLACE_WITH_YOUR_VALUE",
    "domain": ".selar.com",
    "path": "/",
    "httpOnly": true,
    "secure": true,
    "sameSite": "Lax"
  }
]
```

Easiest way to get real values: open the reader in your browser, open DevTools →
Application → Cookies (or Network → any request → Cookies), and copy the relevant
`selar.com` cookies. Or use a "cookie editor" browser extension to export
`selar.com` cookies as JSON and trim to the needed fields. See `cookies.example.json`.

## Run

```bash
node rip.mjs "https://selar.com/me/read/<productId>/<token>" --out ebook.pdf
```

The script will:
1. Load your cookies and open the reader.
2. Wait for all `img.stf-page-img` to decode.
3. Build the PDF in-page with pdf-lib (bypasses CSP because `page.evaluate` is not
   CSP-restricted).
4. Trigger a download and save it as `ebook.pdf`.

## Files

- `rip.mjs` — the script.
- `analysis.md` — full write-up: how Selar's system is built (§1), how the bypass works
  (§2), and how to harden it (§3).
- `cookies.example.json` — cookie template.

## How Selar could stop this (summary)

Client-side can't withhold already-decoded pixels. Real fixes are server-side:
per-user/per-session **watermarking**, **short-lived signed image URLs**, **lazy 1-page
loading**, **rate limiting + anomaly detection**, plus client hardening (canvas
tainting via CORS, WebGL `preserveDrawingBuffer:false`, encrypted tiles, WASM reader).
Details in `analysis.md` §3.
