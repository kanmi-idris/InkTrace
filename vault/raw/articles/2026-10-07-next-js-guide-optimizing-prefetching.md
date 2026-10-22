---
title: "Next.js guide: Optimizing prefetching"
kind: "documentation capture"
author: "Vercel / Next.js documentation"
source_url: "https://nextjs.org/docs/app/guides/optimizing-prefetching#defer-work-to-a-later-stage"
origin_url: "https://t.co/rjPjJPjMFw"
related_url: "https://nextjs.org/docs/app/guides/optimizing-prefetching"
tags: ["Next.js", "App-Router", "prefetching", "Cache-Components", "Partial-Prefetching", "navigation", "performance", "server-rendering"]
---

# Optimizing prefetching

## Guide summary
The Next.js App Router prefetches route assets and server-rendered payloads before navigation. With Cache Components and Partial Prefetching, the guide describes three stages: the shared App Shell, optional per-link URL data, and the remaining work during navigation.

A default `<Link>` prefetches the App Shell. A route that reads `cookies()` or `headers()` can include session-specific UI there. `<Link prefetch={true}>` can also resolve URL-specific data, such as `params` or `searchParams`, before the click.

## Defer expensive work
The linked section explains two functions from `next/cache`:
- `prefetch()` defers work until a per-link prefetch or navigation.
- `navigation()` defers work until navigation.

Both apply during runtime rendering. They defer the component that awaits the function and its descendants. The nearest `<Suspense>` boundary supplies fallback UI until that work runs. The guide says these functions do not make the work request-dependent, so code inside can still use `use cache`.

For expensive session-specific content, the example places `await prefetch()` before a ranking query. The shared shell keeps the fallback. A link with `prefetch={true}` can resolve the ranking before the user clicks.

## Trade-offs
The guide says each per-link prefetch can cause one server invocation. It recommends opting in per link. Static pages may use the static cache instead. A cold cache can still require computation on the first visit; later visits can be immediate while the cache remains warm.

## Evidence limits
I inspected the official Next.js documentation, which showed version 16.4.0 and an update date of October 6, 2026. I did not run the examples or test their performance.
