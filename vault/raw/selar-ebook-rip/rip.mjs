// selar-ebook-rip/rip.mjs
//
// Reconstructs a Selar flipbook e-book into a PDF, by scraping the page images that
// are ALREADY decoded in the authenticated reader DOM and reassembling them with pdf-lib.
//
// This is the cleaned-up version of the live bypass described in analysis.md (section 2).
// It works ONLY on content you are authorized to access (your own purchase / session).
//
// Usage:
//   1. npm install
//   2. Export your selar.com cookies to cookies.json  (see README.md)
//   3. node rip.mjs "https://selar.com/me/read/<id>/<token>" --out ebook.pdf
//
// Why this defeats Selar's client-side "protection":
//   - The 80 <img class="stf-page-img"> are already decoded in the live page.
//   - page.evaluate runs via the DevTools protocol, which is NOT subject to the page CSP,
//     so we can eval pdf-lib in-page and build the PDF there (no re-hosting / no data: issue).
//   - We trigger a normal <a download> and let Playwright capture + save it.

import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const READER_URL = process.argv[2] || process.env.READER_URL;
const OUT = (process.argv.includes('--out') && process.argv[process.argv.indexOf('--out') + 1]) || process.env.OUT || 'ebook.pdf';

if (!READER_URL) {
  console.error('Usage: node rip.mjs "<READER_URL>" [--out out.pdf]');
  process.exit(1);
}

// pdf-lib UMD source. Fetched once in Node, then injected into the page as a string
// (we can't rely on a <script src> because the reader's CSP blocks inline/external scripts;
// page.evaluate is not CSP-restricted, so eval(...) works).
const PDFLIB_URL = 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js';

// This string is evaluated INSIDE the reader page. It has access to the already-decoded
// <img> elements, so no CSP/data: issues apply.
const BUILD_IN_PAGE = async (pdflibSrc) => {
  eval(pdflibSrc); // defines window.PDFLib
  const PDFLib = window.PDFLib;
  const imgs = Array.from(document.querySelectorAll('img.stf-page-img'));
  if (!imgs.length) throw new Error('No img.stf-page-img found — wrong page or not loaded.');

  const pdf = await PDFLib.PDFDocument.create();
  for (const img of imgs) {
    const w = img.naturalWidth || 1836;
    const h = img.naturalHeight || 2376;
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0);
    const dataUrl = c.toDataURL('image/jpeg', 0.92);
    const b64 = dataUrl.split(',')[1];
    const bytes = Uint8Array.from(atob(b64), (ch) => ch.charCodeAt(0));
    const jpg = await pdf.embedJpg(bytes);
    const page = pdf.addPage([612, 792]); // US Letter
    page.drawImage(jpg, { x: 0, y: 0, width: 612, height: 792 });
  }
  const out = await pdf.save();
  return URL.createObjectURL(new Blob([out], { type: 'application/pdf' }));
};

async function main() {
  const cookiesPath = path.join(__dirname, 'cookies.json');
  const cookies = JSON.parse(await fs.readFile(cookiesPath, 'utf8'));
  const pdflibSrc = await (await fetch(PDFLIB_URL)).text();

  const browser = await chromium.launch();
  const context = await browser.newContext();
  await context.addCookies(cookies);
  const page = await context.newPage();

  console.log('[1/5] Loading reader:', READER_URL);
  await page.goto(READER_URL, { waitUntil: 'domcontentloaded' });

  console.log('[2/5] Waiting for flipbook images...');
  await page.waitForSelector('img.stf-page-img', { timeout: 30000 });
  await page.waitForFunction(() => {
    const imgs = Array.from(document.querySelectorAll('img.stf-page-img'));
    return imgs.length > 0 && imgs.every((i) => i.naturalWidth > 0);
  }, { timeout: 60000 });

  const count = await page.evaluate(() => document.querySelectorAll('img.stf-page-img').length);
  console.log(`[3/5] Found ${count} page images. Building PDF in-page...`);

  const blobUrl = await page.evaluate(BUILD_IN_PAGE, pdflibSrc);
  console.log('[4/5] PDF built. Triggering download...');

  const dlPromise = page.waitForEvent('download', { timeout: 60000 });
  await page.evaluate((u) => {
    const a = document.createElement('a');
    a.href = u;
    a.download = 'ebook.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, blobUrl);
  const dl = await dlPromise;
  await dl.saveAs(OUT);

  console.log(`[5/5] Saved -> ${OUT} (${count} pages)`);
  await browser.close();
}

main().catch((e) => {
  console.error('FAILED:', e.message || e);
  process.exit(1);
});
