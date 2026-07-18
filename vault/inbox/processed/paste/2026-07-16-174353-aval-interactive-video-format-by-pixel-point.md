---
title: AVAL — Interactive Video Format by Pixel Point
kind: paste
captured_at: 2026-07-16 17:43
tags: [interactive-video, web-format, animation, codec, web-components]
source_url: https://github.com/pixel-point/aval
status: inbox
---

# AVAL — Interactive Video Format by Pixel Point

# AVAL — Interactive Video Format for the Web

**URL:** https://github.com/pixel-point/aval
**Site:** https://pixelpoint.io/aval
**Stars:** 982
**License:** MIT
**Author:** Pixel Point

AVAL is a web format and runtime for short prerendered motion with continuous loops, named application states, authored triggers, bounded transitions, reversals, and packed transparency.

## Key Features

- One logical animation published as a codec bundle (AV1, VP9, H.265/HEVC, H.264)
- State machine with named states — no media seeking code needed
- Built-in frame-accurate transitions
- Packed-alpha transparency
- SSR-safe custom element: `<aval-player>`
- Browser selects the first supported codec

## Packages

- `@pixel-point/aval-graph` — deterministic state and route engine
- `@pixel-point/aval-format` — wire format 1.0 parser, validator, writer
- `@pixel-point/aval-compiler` — authoring API and bundle compiler (uses FFmpeg)
- `@pixel-point/aval-player-web` — loader, codec probing, decoder scheduling, renderer
- `@pixel-point/aval-element` — markup-first public browser component

## Quick Start

```
npm install @pixel-point/aval-element@1.0.0
npm install --save-dev @pixel-point/aval-compiler@1.0.0
npx avl init my-motion
npm run dev
```

## Use Case

Interactive animations with state-based transitions (e.g., hover → active → success states) without JavaScript animation logic. Designed for short prerendered motion content on the web.
