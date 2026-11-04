# TanStack Redact compatibility and measurement docs

Captured: 2026-10-26
Source URL: https://tanstack.com/redact/latest/docs/compatibility
Related overview: https://tanstack.com/redact/latest/docs/overview

## Compatibility framing

The overview describes Redact as an alternative runtime option within the React ecosystem, not a replacement for React as a project. It says React's APIs and behavior are the reference. The compatibility guide says the default Vite configuration uses synchronous rendering, so some APIs behave differently from React's concurrent behavior.

The overview points out API differences around pending transitions, actions, and optimistic state. The product page says Redact does not provide React's time slicing or interruptible component renders.

## Documentation limits

The docs say runtime bundle sizes are not whole-app sizes and microbenchmarks do not establish whole-app speedups.

The compatibility guide says native animation is not exhaustive visual parity. It lists production animation, hidden-tab behavior, broader resource/navigation races, and Safari/Firefox as unverified at capture time.

## Evidence limits

These are TanStack documentation statements captured on 2026-10-26. I did not install, test, or measure Redact. The launch blog is [src-2026-10-26-012].
