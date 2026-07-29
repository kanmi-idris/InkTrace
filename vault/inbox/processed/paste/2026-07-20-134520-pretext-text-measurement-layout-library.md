---
title: Pretext — text measurement & layout library
kind: paste
captured_at: 2026-07-20 13:45
tags: [text, layout, measurement, canvas, svg, library, javascript, typescript, font, ui]
source_url: https://github.com/chenglou/pretext
status: inbox
---

# Pretext — text measurement & layout library

# Pretext — Fast, accurate & comprehensive text measurement & layout

Source: https://github.com/chenglou/pretext (README)
Live demos: https://chenglou.me/pretext/ ; extra: https://somnai-dreams.github.io/pretext-demos/
npm: `npm install @chenglou/pretext`
License: MIT
Author: Cheng Lou (chenglou). Repo: 49.2k★, 2.7k forks, TypeScript 91%.
Architecture credit: seeded by Sebastian Markbáge's `text-layout` (canvas measureText for shaping, bidi from pdf.js, streaming line breaking).

## What it is
Pure JS/TS library for multiline text measurement & layout. Fast, accurate, supports many languages/scripts. Renders to DOM, Canvas, SVG, and soon server-side. Side-steps DOM measurement (getBoundingClientRect, offsetHeight) that triggers layout reflow (one of the most expensive browser ops). Implements its own text measurement using the browser's font engine as ground truth (AI-friendly iteration).

## Two use cases
### 1. Measure paragraph height WITHOUT touching DOM
import { prepare, layout } from '@chenglou/pretext'
const prepared = prepare('AGI 春天到了. بدأت الرحلة 🚀', '16px Inter')
const { height, lineCount } = layout(prepared, 320, 20) // pure arithmetic, no reflow

- `prepare()` — one-time: normalize whitespace, segment text, apply glue rules, measure segments with canvas; returns opaque handle.
- `layout()` — cheap hot path: pure arithmetic over cached widths. On resize, only rerun `layout()`, NOT `prepare()`.
- Options: `{ whiteSpace: 'pre-wrap' }` (textarea-like, keeps spaces/tabs/newlines), `{ wordBreak: 'keep-all' }` (CSS-like), `{ letterSpacing: n }` (px).
- Use: virtualization/occlusion without guesstimates, masonry/flexbox-like userland layouts, dev-time (AI) overflow verification browser-free, prevent layout shift on text load.

### 2. Lay out paragraph lines manually (Canvas/SVG/WebGL/server)
- `prepareWithSegments` + `layoutWithLines(prepared, 320, 26)` → { height, lineCount, lines }.
- `measureLineStats(prepared, 320)` → { lineCount, maxLineWidth } — enables multiline "shrink wrap" (tightest container width), missing from web.
- `walkLineRanges` / `layoutNextLineRange` — variable-width manual layout (e.g. flow text around floated image, one row at a time). `materializeLineRange` turns a range back into a line string.
- `measureNaturalWidth` — widest forced line when width isn't the wrap cause.
- Hyphenation: insert soft hyphens before prepare; Pretext treats as optional break points. Automatic hyphenation NOT built in.
- Rich-text inline helper: `@chenglou/pretext/rich-inline` — materializeRichInlineLineRange, prepareRichInline, walkRichInlineLineRanges. Inline-only, white-space: normal only; supports code spans, mentions, chips, `break: 'never'` atomic items, caller-owned `extraWidth` for pill chrome. NOT a nested markup tree / general CSS inline engine.

## API glossary (key)
- prepare(text, font, options?) → PreparedText
- layout(prepared, maxWidth, lineHeight) → { height, lineCount }
- prepareWithSegments(text, font, options?) → PreparedTextWithSegments
- layoutWithLines / walkLineRanges / measureLineStats / measureNaturalWidth / layoutNextLine / layoutNextLineRange / materializeLineRange
- prepareRichInline / layoutNextRichInlineLineRange / walkRichInlineLineRanges / materializeRichInlineLineRange / measureRichInlineStats
- clearCache() — release shared internal caches
- setLocale(locale?) — sets locale for future prepare() (also calls clearCache())

Types: LayoutLine { text, width, start, end }, LayoutLineRange { width, start, end }, LayoutCursor { segmentIndex, graphemeIndex }, RichInlineItem { text, font, letterSpacing?, break?, extraWidth? }, RichInlineFragment, RichInlineLineRange, etc.

## Caveats / supported scope
- `white-space: normal` & `pre-wrap`; `word-break: normal` & `keep-all`; `overflow-wrap: break-word` (very narrow widths break at grapheme boundaries); `line-break: auto`; numeric `letter-spacing`; default `tab-size: 8`.
- `system-ui` is UNSAFE for layout() accuracy on macOS — use a named font. See PLATFORM_BUGS.md (Chrome/Firefox issues).
- Requires `Intl.Segmenter` + Canvas 2D text measurement. Runtimes without Intl.Segmenter unsupported.
- Not a full font rendering engine (yet). CSS features outside canvas `font` shorthand (font-optical-sizing, font-feature-settings, standalone font-variation-settings) not modeled separately. Variable-font axes only help when reflected in canvas font string (e.g. via weight).
- Note: layout() with empty string returns { lineCount: 0, height: 0 }; browsers size empty block to one line-height → clamp with Math.max(1, lineCount) * lineHeight if needed.

## Relevance
Useful for React Native / web dev when you need accurate text height before render (virtualized lists, canvas/SVG text, no-layout-shift, AI-driven UI verification). Note: RN doesn't have Canvas 2D / Intl.Segmenter the same way — primarily a web/Canvas/server library.
