---
title: Web Font Fallback CLS Prevention
kind: paste
captured_at: 2026-07-25 22:07
tags: []
source_url: 
status: inbox
---

# Web Font Fallback CLS Prevention

Technique to prevent Cumulative Layout Shift (CLS) when web fonts load late.

Wrong approach: pick a fallback font that looks visually similar.
Right approach: make the fallback occupy exactly the same space using @font-face size-adjust, ascent-override, descent-override, and line-gap-override. When the web font swaps in, letterforms change but nothing moves — 0px layout shift.

Example:
@font-face {
  font-family: "brand-fallback";
  src: local("Verdana");
  size-adjust: 87.6%;
  ascent-override: 95.2%;
  descent-override: 24.1%;
  line-gap-override: 0%;
}

h1 { font-family: "Brand Font", "brand-fallback", sans-serif; }

The size-adjust and override values are tuned so the fallback's glyph metrics (advance widths, baseline, line height) match the web font exactly. Use tools like FontFace API or the `size-adjust` calculator in Chrome DevTools to find the right percentages.
