# TanStack Redact official product page

Captured: 2026-10-26
Source URL: https://tanstack.com/redact/latest

## Product summary

The page describes Redact as a smaller, synchronous runtime for React apps. It lists integrations for TanStack Start, Vite, Vinext, and Next.js. It says Vinext and Next.js keep server rendering, Server Components, caching, and action transport on React, while Redact handles browser hydration and rendering.

The page says Redact renders synchronously, without React's time slicing or interruptible component renders. It describes suspended transitions as a trade-off and links to rendering and API differences.

## Published framework bundle comparisons

The page labels the values as client JavaScript and CSS, gzip. It gives these comparisons:

| Framework | React | Redact | Difference |
| --- | ---: | ---: | ---: |
| TanStack Start | 109,332 bytes | 59,778 bytes with unused features disabled; 62,306 bytes by default | 47.0 KB less; 43.0% smaller |
| Vite | 68,255 bytes | 12,590 bytes with unused features disabled; 20,130 bytes by default | 48.1 KB less; 70.5% smaller |
| Vinext | 138,094 bytes | 98,779 bytes | 39.3 KB less; 28.5% smaller |
| Next.js | 175,610 bytes | 139,872 bytes | 35.7 KB less; 20.4% smaller |

The page says Start and Vite can be smaller when unused optional features are disabled. Vinext and Next.js use the full runtime to keep framework features available. The page links to the source bundle measurements.

## Evidence limits

These are TanStack's published comparisons, not independent measurements. The official blog explains that they sum all emitted client JavaScript and CSS, include lazy chunks, and do not predict one page's download. See [src-2026-10-26-012]. The docs warn that runtime bundle sizes and microbenchmarks do not establish whole-app speedups. See [src-2026-10-26-013].
