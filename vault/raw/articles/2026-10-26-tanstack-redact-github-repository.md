# TanStack/redact GitHub repository snapshot

Captured: 2026-10-26
Source URL: https://github.com/TanStack/redact
Branch shown: `main`
Repository visibility: Public
Repository page showed: 450 stars, 15 forks, 82 commits

## README description and setup

The README describes Redact as an alternative runtime for React apps, with a smaller footprint and synchronous rendering. It says Redact explores runtime trade-offs within the React ecosystem, not a new direction for or replacement of React as a project.

The README quick start gives `pnpm add @tanstack/redact`. It documents Vite integrations for TanStack Start and Vite, plus separate Vinext and Next.js integrations. It says React stays on the server for Vinext and Next.js, while Redact runs in the browser.

## Historical README benchmarks

The README labels the performance comparisons as Redact 0.1.0 with React 19.3.0, recorded on 2026-09-11. It lists runtime bundle sizes of 69,162 gzip bytes for React, 23,311 bytes for Redact's default Vite configuration, and 28,159 bytes with native animation enabled. The README says these are runtime bundles, not whole applications.

The README also includes microbenchmarks with mixed results. Some workloads are faster with Redact and others are slower, including hydration and Suspense-related cases. It cautions that small differences need care.

## Current release context

The current npm registry tag and TanStack launch blog list Redact 0.2.0. The README's detailed performance comparisons are explicitly historical 0.1.0 measurements, not the current 0.2.0 framework bundle comparisons. See [src-2026-10-26-012] and [src-2026-10-26-015].

## Evidence limits

This is a repository snapshot. The README documents `pnpm add @tanstack/redact`, which I did not run. I did not reproduce the measurements.
