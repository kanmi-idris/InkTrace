# Selar E-book Reader — Protection, Bypass & Hardening

Educational / defensive security analysis. Everything below assumes you are working
with content you are **authorized** to access (your own purchase, your own
authenticated session). Circumventing copy-protection on content you do not own or
have not licensed may violate the platform's terms and, in some jurisdictions,
anti-circumvention laws (e.g. DMCA §1201). Use this to understand the mechanics and
to build *better* protections — not to pirate.

---

## 0. What the live page actually does (evidence)

I inspected the authenticated reader at `https://selar.com/me/read/S1M616Z486311/i8tz72s84a`.
Observed facts (not assumptions):

| Observation | Detail |
|---|---|
| Route | `/me/read/...` — behind authentication (`/me/` = "my account") |
| Page count | 80 pages |
| Rendering | Each page is an `<img class="stf-page-img">` |
| Image source | Inline `data:image/jpeg;base64,...` (no external URL, no file endpoint) |
| Image size | 1836 × 2376 px — exactly US-Letter proportion (8.5" × 11") |
| No PDF endpoint | No `.pdf` request in the network tab; no `<iframe>`, `<embed>`, or `<object>` |
| No separate image files | Page sources are data URLs, not `https://.../page-01.jpg` |
| CSP behaviour | `data:` images render fine in the **main** reader document; they did **not** load in a freshly generated `blob:` document I created (`naturalWidth` stayed `0`). |
| DevTools eval | Code run via `page.evaluate` (DevTools protocol) is **not** subject to the page's CSP, so libraries can be injected and executed there. |

**The one sentence summary:** Selar does not serve a PDF at all. It ships the book as
80 inline JPEGs and paints them into a flipbook UI. The "protection" is that there is
no download button and the bytes are presented as display images rather than a file.

---

## 1. How to BUILD Selar's system (the anti-download flipbook)

Goal of this design: make casual copying hard without a real DRM stack, by (a) hiding
the file behind an authenticated, JS-rendered reader, and (b) never exposing a
downloadable artifact.

### 1.1 Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                         Client (browser)                      │
│                                                                │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  Flipbook SPA  (stf-* library)                        │    │
│   │  - renders <img class="stf-page-img"> one/two at a    │    │
│   │    time (book spread)                                 │    │
│   │  - TOC, search, zoom, thumbnails, fullscreen          │    │
│   │  - no "download" control                              │    │
│   └─────────────────────────────────────────────────────┘    │
│            │  80 × data:image/jpeg;base64                      │
│            ▼                                                    │
│   <img src="data:image/jpeg;base64,....">  (in DOM, decoded)   │
│                                                                │
│   CSP: img-src 'self' data:; script-src 'self' 'wasm-unsafe';  │
│        block inline scripts, block external script/img hosts   │
└──────────────────────────────────────────────────────────────┘
            ▲   authenticated GET /me/read/<product>/<token>
            │
┌──────────────────────────────────────────────────────────────┐
│                         Server                                 │
│  - Auth/session check (must own/have access to product)        │
│  - Returns reader HTML + inlines page JPEGs as base64          │
│    (or streams them behind signed, short-lived URLs)           │
│  - NO /download or /file.pdf route for the e-book             │
└──────────────────────────────────────────────────────────────┘
```

### 1.2 Backend steps

1. **Store the source once** as the canonical asset (PDF or high-res JPEGs) in private storage.
2. **Gate access**: the `/me/read/...` handler verifies the session owns/licensed the product before returning anything.
3. **Render pages as images server-side** (e.g. `pdftoppm`/ImageMagick or a headless render) so the client only ever receives raster pages, never the original PDF.
4. **Inline or sign**: either base64-inline the JPEGs into the page payload (what Selar does — zero extra requests), or serve them via **signed, expiring URLs** bound to the session so a leaked link dies quickly.
5. **Omit any download route.** There is intentionally no `/file.pdf`.

### 1.3 Frontend steps

1. Load a flipbook library (class `stf-page-img` suggests a small flipbook widget) that mounts `<img>` elements from the inlined data URLs.
2. Show one or two pages (a "spread") at a time; keep a page-turn animation so casual users see a "book", not a list of files.
3. Add reader affordances (TOC, zoom, search, thumbnails) so it *feels* like a reader, not a gallery.
4. Set a **CSP** that forbids `data:` in secondary/worker contexts, blocks inline `<script>`, and restricts `connect-src` to your own API. (This raises the bar for naive "make a new page and print it" tricks — see §2.2.)
5. Optionally lazy-load only the current ±1 page so a scraper must paginate (Selar instead inlined **all 80 at once**, which is the weak choice — see §3).

### 1.4 Why this "works" for casual users

There is no button, no URL, and no obvious file. A non-technical buyer sees a book they can read but not "save". That satisfies most creators' real need: stop drive-by sharing, not stop determined extraction.

### 1.5 The inherent flaw (read this before building)

> **Anything painted into the DOM as a readable `<img>` is already decrypted and
> decoded on the user's machine.** The pixels exist in GPU/DOM memory. A client-side
> scheme can only *obscure* the file; it cannot *withhold* the pixels from someone
> who can run JavaScript in that page. Selar's design is **security by obscurity**.

---

## 2. How the bypass works (architecture + steps)

### 2.1 Threat model that defeats Selar

- **Attacker position:** authenticated, authorized reader; can run JS in the page (dev
  console, Playwright/Puppeteer, or a browser extension).
- **What they want:** the 80 page images out of the DOM and reassembled into a file.
- **What Selar withholds:** a download button / file URL.
- **What Selar cannot withhold:** the decoded image bytes, because the page must
  display them.

So the bypass is trivial in principle: *read the images that are already on screen,
write them to a file.* No vuln is exploited; the "protection" simply isn't one.

### 2.2 Two attempts — one failed, one succeeded

**Attempt A (failed): build an HTML doc of the images and `page.pdf()` it.**
I created a `blob:` document containing all 80 `<img src="data:...">` and tried to
print it. Result: blank 51 KB PDF — the `data:` images never loaded
(`naturalWidth === 0`). This is consistent with the reader's CSP not permitting
`data:` images outside the original document context (the blob doc inherited a
stricter policy). **Lesson:** CSP can block *some* re-hosting tricks. But it is a
speed bump, not a wall.

**Attempt B (succeeded): build the PDF *inside the already-rendered reader page*.**
Because the 80 images are already decoded and visible in the live page, I never needed
to re-host them. I:
1. Queried `document.querySelectorAll('img.stf-page-img')` in the live page — all 80,
   already decoded (`naturalWidth` 1836).
2. Ran `page.evaluate(...)` to inject **pdf-lib** and assemble the PDF. Crucially,
   `page.evaluate` runs via the DevTools protocol, which is **not subject to the page
   CSP**, so the library loads and executes even though inline `<script>` is blocked.
3. For each image: drew it to a `<canvas>`, re-encoded to a clean baseline JPEG
   (`canvas.toDataURL`), decoded base64 → `Uint8Array`, and `embedJpg`'d it onto a
   Letter-sized `pdf-lib` page.
4. Returned a `blob:` URL of the finished PDF and triggered an `<a download>` click,
   captured by Playwright's download event, and saved it.

Result: **80-page, 31 MB, valid PDF-1.7**, verified page count via pdf-lib.

### 2.3 Bypass architecture (the working path)

```
┌─────────────────────────────────────────────────────────────┐
│  Authenticated reader page (Selar) — images already decoded  │
│                                                               │
│   img.stf-page-img ×80  (data: JPEG, 1836×2376)               │
│            │                                                  │
│            │  page.evaluate( buildPdf )   ← DevTools, no CSP  │
│            ▼                                                  │
│   inject pdf-lib (eval of UMD source)                         │
│   for each img: canvas → toDataURL → embedJpg → addPage       │
│            │                                                  │
│            ▼                                                  │
│   PDFDocument.save() → Blob → blob: URL                       │
│            │                                                  │
│            ▼                                                  │
│   <a download> click → Playwright download event → saveAs()   │
└─────────────────────────────────────────────────────────────┘
```

### 2.4 Step-by-step (what the shipped script does)

1. Launch a browser, load your exported Selar cookies (so the `/me/read` page is authenticated).
2. `goto` the reader URL; wait for `img.stf-page-img` and for every image to have `naturalWidth > 0`.
3. `page.evaluate(buildPdf, pdflibSrc)`:
   - `eval(pdflibSrc)` to define `window.PDFLib`.
   - Loop the 80 imgs: canvas draw → `toDataURL('image/jpeg', 0.92)` → base64 decode → `embedJpg` → `addPage([612,792])` → `drawImage`.
   - `pdf.save()` → `Blob` → `URL.createObjectURL`.
4. `page.waitForEvent('download')`, click the anchor, `download.saveAs(out.pdf)`.

> Note on quality: this copies exactly what is on screen. The source PDF (if any) is
> server-side and never reaches the client, so you get a faithful *raster* copy at the
> resolution Selar chose to send (1836×2376 here), not a vector/original.

---

## 3. How to HARDEN it (so this specific bypass fails — and why it still can't be perfect)

### 3.1 The honest ceiling

> You cannot stop someone with the decoded pixels from capturing them. Screenshots,
> another phone's camera, or an OS-level framebuffer grab all bypass any web technique.
> Web content protection is about **raising cost** and adding **traceability + legal
> deterrence**, not achieving perfect secrecy.

Build the system accordingly: assume the pixels will leak, and make leaking
*attributable* and *expensive*.

### 3.2 Server-side measures (the ones that actually matter)

These defeat the §2 bypass because they change what the client is allowed to receive.

1. **Per-user, per-session, per-page watermarking (do this first).**
   Burn the buyer's email + timestamp + a short session/order ID into *every* page
   image **server-side** before sending it. Leaked pages are now traceable to a
   specific account → real deterrent and grounds for enforcement. The §2 scrape still
   "works" but produces a personally incriminating file.
2. **Short-lived, signed, session-bound image URLs** (instead of inlining).
   - Each page image URL is signed (HMAC) and expires in seconds.
   - Bound to the session cookie/IP; reused or reused-from-another-session → 403.
   - This kills "copy the URL / share the link" and forces re-auth per page.
3. **Lazy-load one page at a time** (Selar inlined all 80 — fix that).
   - Client only ever holds the current ±1 page. A scraper must navigate 80 times,
     which exposes it to rate-limiting and anomaly detection.
4. **Rate limiting + anomaly detection on page fetches.**
   - Flag sessions that request pages faster than a human turns them, or that fetch
     all pages in < N seconds, or from changing IPs. Auto-revoke the session.
5. **Don't inline base64** — inline base64 puts the *entire book* in the initial DOM
   payload (heavy + trivially scraped). Stream signed images instead.

### 3.3 Client hardening (raises the bar; each is individually bypassable)

1. **Taint the canvas (blocks the §2 canvas scrape).**
   Serve page images with `Cross-Origin-Resource-Sharing` set so drawing them to a
   `<canvas>` **taints** it. Then `canvas.toDataURL()` / `getImageData()` throw a
   SecurityError. This directly defeats Attempt B's `canvas` step.
   - Caveat: a scraper can still *screenshot* the `<img>` directly (no canvas needed),
     so pair with watermarking.
2. **Render via WebGL with `preserveDrawingBuffer: false`.**
   Composite pages in a WebGL canvas. With `preserveDrawingBuffer:false`, `toDataURL`/
   `readPixels` return blank, so even screenshot-from-canvas fails. OS-level capture
   still works.
3. **Encrypted tiles + client-only decryption shader.**
   Split each page into many small encrypted tiles; decrypt + composite in a shader.
   No full decoded image ever exists as a single DOM `<img>`. Raises cost
   substantially (attacker must reconstruct the tile scheme), at real perf/complexity cost.
4. **Ship the reader as WASM / obfuscated, not readable JS.**
   Makes reverse-engineering the image assembly logic slower (not impossible).
5. **Weak/cosmetic only — don't rely on these:** disabling right-click, blocking text
   selection, hiding element classes, DevTools-open detection. All are trivially
   bypassed and mostly annoy legitimate users.

### 3.4 The real "stop copying" options

- **Native app with platform DRM** (Widevine/FairPlay for video; a DRM-aware EPUB/PDF
  reader for books). The web browser is the weakest possible place to enforce this.
- **Don't put the full asset on the open web.** Stream-only, watermarked, session-bound
  preview; deliver the licensed file through a controlled, DRM-capable client.
- **Legal + watermarking** is the pragmatic combo most paid-content platforms land on:
  you accept that a determined user can capture pixels, but you make every copy
  traceable and pursued.

### 3.5 Recommended layered design

```
Server: auth → watermark (user+session+time) → encrypt tiles → sign expiring URLs
Client: WebGL composite (preserveDrawingBuffer:false) + WASM reader + lazy 1-page load
Network: per-page rate limit + anomaly detection → session revoke
Deterrence: visible + invisible watermark + ToS + takedown enforcement
```

This does not achieve perfection, but it converts "one `querySelectorAll` + pdf-lib"
into "reverse a WASM tile decrypter, beat canvas tainting, and still get a
watermarked, traceable copy." That is the realistic goal.

---

## 4. Responsible use

- Only run this against content you own or are licensed to access.
- Respect Selar's Terms of Service and applicable law.
- The hardening section is the point: use it to design better systems, not to attack
  others'.
