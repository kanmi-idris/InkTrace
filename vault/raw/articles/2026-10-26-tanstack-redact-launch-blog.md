# Introducing TanStack Redact launch blog

Captured: 2026-10-26
Source URL: https://tanstack.com/blog/introducing-tanstack-redact
Author: Tanner Linsley (@tannerlinsley)
Published: 2026-10-26

## Release and project context

The post describes Redact as a smaller replacement for React and React DOM in the browser. It implements the React APIs an app uses to render and update its UI. Tanner Linsley says the experiment began as a smaller implementation for TanStack's own websites, and TanStack now plans to maintain it. The post says Redact 0.2.0 is available for TanStack Start, Vite, Vinext, and Next.js.

## Bundle method and results

The blog says the team built the same small app with React and Redact in each framework, then added the gzip sizes of all emitted client JavaScript and CSS:

| Framework | React | Redact | Saved |
| --- | ---: | ---: | ---: |
| TanStack Start | 109.3 KB | 62.3 KB | 47.0 KB, 43.0% |
| Vite | 68.3 KB | 20.1 KB | 48.1 KB, 70.5% |
| Vinext | 138.1 KB | 98.8 KB | 39.3 KB, 28.5% |
| Next.js | 175.6 KB | 139.9 KB | 35.7 KB, 20.4% |

The post says these are default Redact builds. Start and Vite can go smaller when optional features unused by the app and dependencies are disabled. Vinext's separate benchmark across six rounds went from 154.9 KB to 115.5 KB, saving 39.4 KB. The post says production build times were effectively the same.

The blog explicitly says the totals include lazy chunks. Percentages can change with an app, and the figures do not promise the download size of one page.

## Rendering trade-off

The blog says Redact renders synchronously, without React's time slicing or interruptible component renders. It calls this a scheduling trade-off and links to the compatibility guide.

## Evidence limits

These are publisher measurements and descriptions. I did not reproduce the benchmarks. The product page is [src-2026-10-26-011]. Compatibility details are [src-2026-10-26-013].
