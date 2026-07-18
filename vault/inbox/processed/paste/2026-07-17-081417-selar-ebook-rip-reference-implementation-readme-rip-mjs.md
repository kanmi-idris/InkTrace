---
title: selar-ebook-rip — Reference implementation (README + rip.mjs)
kind: paste
captured_at: 2026-07-17 08:14
tags: [security, drm, ebook, defensive, playwright, pdf-lib, tool]
source_url: https://selar.com/me/read/S1M616Z486311/i8tz72s84a
status: inbox
---

# selar-ebook-rip — Reference implementation (README + rip.mjs)

# selar-ebook-rip — Reference Implementation (README + script)

**Source:** selar-ebook-rip artifact (companion to analysis.md)
**URL:** https://selar.com/me/read/S1M616Z486311/i8tz72s84a
**Type:** Defensive security tool — reference implementation of the bypass described in analysis.md §2
**License/ethics:** "For authorized / educational use only. Only run against content you own or are licensed to access."

## What it is

A Playwright script (`rip.mjs`) that reconstructs a Selar flipbook e-book into a PDF by scraping the page images already decoded in the authenticated reader DOM and reassembling them with pdf-lib. No exploit — the "protection" is client-side display obfuscation and the pixels are already on screen.

## How it works (rip.mjs)

1. Loads user's exported `selar.com` session cookies, opens the authenticated reader.
2. Waits for all `<img class="stf-page-img">` to decode (`naturalWidth > 0`).
3. Runs `BUILD_IN_PAGE` via `page.evaluate` — injects pdf-lib (DevTools protocol not CSP-restricted), loops the 80 imgs: canvas draw → `toDataURL('image/jpeg', 0.92)` → base64 decode → `embedJpg` → `addPage([612,792])` (US Letter) → `drawImage`.
4. Returns a blob URL of the finished PDF and triggers `<a download>` click captured by Playwright.

Key detail: `page.evaluate` runs via the DevTools protocol, which is NOT subject to the page CSP, so pdf-lib loads and executes even though inline `<script>` is blocked.

## Setup

- Node.js 18+, `npm install`, `npx playwright install chromium`
- Export cookies to `cookies.json` (Playwright format, `.selar.com` session cookie)
- Run: `node rip.mjs "https://selar.com/me/read/<productId>/<token>" --out ebook.pdf`

## Files in artifact

- `rip.mjs` — the script (Playwright + pdf-lib, 114 lines)
- `README.md` — setup/usage
- `analysis.md` — full write-up: how the system is built (§1), how the bypass works (§2), how to harden it (§3)
- `cookies.example.json` — cookie template
- `package.json` — depends on pdf-lib + playwright

## How Selar could stop this (summary)

Client-side can't withhold already-decoded pixels. Real fixes are server-side: per-user/per-session watermarking, short-lived signed image URLs, lazy 1-page loading, rate limiting + anomaly detection, plus client hardening (canvas tainting via CORS, WebGL `preserveDrawingBuffer:false`, encrypted tiles, WASM reader). Details in analysis.md §3.

Companion to: src-2026-07-17-001 (analysis.md)
