---
title: Selar E-book Reader: Protection, Bypass & Hardening (security analysis)
kind: paste
captured_at: 2026-07-17 08:12
tags: [security, drm, ebook, defensive, watermarking, csp, web]
source_url: https://selar.com/me/read/S1M616Z486311/i8tz72s84a
status: inbox
---

# Selar E-book Reader: Protection, Bypass & Hardening (security analysis)

# Selar E-book Reader — Protection, Bypass & Hardening (analysis.md)

**Source:** selar-ebook-rip artifact (educational/defensive security analysis)
**URL:** https://selar.com/me/read/S1M616Z486311/i8tz72s84a (inspected target)
**Type:** Security analysis — how Selar's flipbook e-book protection works, how it's trivially bypassed, and how to harden it

## Core Thesis

Selar does not serve a PDF. It ships an e-book as 80 inline JPEGs painted into a flipbook UI. The "protection" is the absence of a download button and presenting bytes as display images rather than a file. This is **security by obscurity** — anything painted into the DOM as a readable `<img>` is already decrypted and decoded on the user's machine.

## Observed Facts (evidence from live page)

- Route `/me/read/...` behind authentication
- 80 pages, each an `<img class="stf-page-img">`
- Image source: inline `data:image/jpeg;base64,...` (no external URL, no file endpoint)
- Image size 1836 × 2376 px (US-Letter proportion, 8.5" × 11")
- No PDF endpoint, no `<iframe>`/`<embed>`/`<object>`, no separate image files
- CSP: `data:` images render in main reader doc but not in freshly generated `blob:` doc
- DevTools `page.evaluate` is NOT subject to page CSP — libraries can be injected

## §1 — How to Build Selar's System (anti-download flipbook)

Architecture: authenticated GET `/me/read/<product>/<token>` → server checks session owns product → returns reader HTML + inlines page JPEGs as base64 → flipbook SPA mounts `<img>` elements, shows 1-2 pages (spread) at a time, no download control.

Backend steps:
1. Store source once (PDF or high-res JPEGs) in private storage
2. Gate access: verify session owns/licensed product
3. Render pages as images server-side (pdftoppm/ImageMagick) so client only gets raster
4. Inline or sign base64 JPEGs (Selar inlined all 80 at once — the weak choice)
5. Omit any download route

Frontend steps:
1. Load flipbook library (class `stf-page-img`)
2. Show one/two pages with page-turn animation
3. Add TOC, zoom, search, thumbnails
4. Set CSP forbidding `data:` in secondary contexts, blocking inline script
5. Optionally lazy-load current ±1 page (Selar didn't)

The inherent flaw: client-side scheme can only obscure the file, not withhold pixels from someone who can run JS in the page.

## §2 — How the Bypass Works

Threat model: authenticated, authorized reader who can run JS in the page (dev console, Playwright, browser extension). Wants 80 page images out of DOM reassembled into a file. Selar withholds download button/URL but cannot withhold decoded image bytes.

**Attempt A (failed):** built HTML doc of images + `page.pdf()`. Result: blank 51KB PDF — `data:` images never loaded in blob doc (`naturalWidth === 0`) due to stricter CSP. CSP blocks some re-hosting tricks but is a speed bump, not a wall.

**Attempt B (succeeded):** build PDF *inside* the already-rendered reader page.
1. `querySelectorAll('img.stf-page-img')` — all 80 already decoded
2. `page.evaluate(...)` injects pdf-lib (DevTools protocol not subject to CSP)
3. For each image: canvas draw → `toDataURL('image/jpeg', 0.92)` → base64 decode → `embedJpg` → `addPage([612,792])` → `drawImage`
4. `PDFDocument.save()` → blob → `<a download>` click → Playwright download

Result: **80-page, 31MB, valid PDF-1.7**. Quality = faithful raster copy at Selar's chosen resolution (1836×2376), not vector/original.

## §3 — How to Harden It

**Honest ceiling:** You cannot stop someone with decoded pixels from capturing them (screenshots, camera, OS framebuffer grab all bypass web techniques). Web protection = raise cost + add traceability + legal deterrence.

Server-side measures (the ones that matter):
1. **Per-user, per-session, per-page watermarking** — burn buyer email + timestamp + session/order ID into every page server-side. Leaked pages traceable to account.
2. **Short-lived, signed, session-bound image URLs** — HMAC-signed, expire in seconds, bound to session cookie/IP. Kills URL sharing.
3. **Lazy-load one page at a time** — client holds only current ±1 page; scraper must navigate 80 times, exposed to rate-limiting.
4. **Rate limiting + anomaly detection** — flag sessions fetching pages faster than human, auto-revoke.
5. **Don't inline base64** — stream signed images instead.

Client hardening (each individually bypassable):
1. **Taint the canvas** via CORS so `toDataURL()/getImageData()` throw SecurityError — directly defeats Attempt B's canvas step (but screenshot still works; pair with watermarking)
2. **WebGL with `preserveDrawingBuffer: false`** — `toDataURL/readPixels` return blank
3. **Encrypted tiles + client-only decryption shader** — no full decoded image as single `<img>`; raises cost substantially
4. **WASM/obfuscated reader** — slows reverse-engineering
5. **Weak/cosmetic only** (don't rely): disabling right-click, blocking text selection, DevTools-open detection — all trivially bypassed

Real "stop copying" options: native app with platform DRM (Widevine/FairPlay), stream-only watermarked preview through DRM-capable client, or legal + watermarking combo.

Recommended layered design:
```
Server: auth → watermark (user+session+time) → encrypt tiles → sign expiring URLs
Client: WebGL composite (preserveDrawingBuffer:false) + WASM reader + lazy 1-page load
Network: per-page rate limit + anomaly detection → session revoke
Deterrence: visible + invisible watermark + ToS + takedown enforcement
```

## §4 — Responsible Use

Only run against content you own/are licensed to access. Respect ToS + applicable law (DMCA §1201 etc.). Hardening section is the point: design better systems, not attack others.

## Companion files in artifact

- `README.md` — setup/usage for reference implementation
- `rip.mjs` — the Playwright script that reconstructs the flipbook into a PDF
- `cookies.example.json` — cookie template for authenticated session
- `package.json` — depends on pdf-lib + playwright
