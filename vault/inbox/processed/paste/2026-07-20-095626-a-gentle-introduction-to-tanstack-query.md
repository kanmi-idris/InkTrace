---
title: A Gentle Introduction to TanStack Query
kind: paste
captured_at: 2026-07-20 09:56
tags: [react, tanstack-query, data-fetching, cache, frontend]
source_url: https://neciudan.dev/a-gentle-introduction-to-tanstack-query?ref=dailydev
status: inbox
---

# A Gentle Introduction to TanStack Query

A Gentle Introduction to TanStack Query — neciudan.dev (2026-05-24)

A beginner-friendly intro to TanStack Query (React Query) by Neciudan, spun out of his "How NOT to use TanStack Query" talk (React Paris / JSHeroes Cluj). Assumes no prior knowledge.

Core concepts:
- Replaces hand-rolled useEffect + 3x useState (data/loading/error) data fetching, which has 3 problems: copy-paste inconsistency across components, race conditions on param change, and cache loss on unmount/remount.
- `useQuery({ queryKey, queryFn })` — queryKey does the heavy lifting via a shared cache across all components.
- **Shared cache**: two components requesting `['users', 42]` fire ONE network request; the second attaches to the in-flight one. Cache outlives the component (no spinner on revisit; quiet background refetch).
- One-time setup: `QueryClient` (the cache/brain) + `QueryClientProvider` at app root. Reach via `useQueryClient()` for prefetch/invalidate.

Key options:
- **retry** (default 3, exponential backoff, capped 30s) — function form lets you skip retry on 404.
- **AbortSignal**: every queryFn gets a context `signal`; TanStack cancels stale requests on unmount/key-change/supersede. Stops wasted bandwidth (e.g. search-as-you-type).
- **enabled**: keep a query idle until a dependency (e.g. userId) is ready. TS caveat: `userId` still `string | undefined` inside queryFn → need `userId!` assertion.
- **skipToken**: assign to queryFn instead of a separate `enabled` flag → real type narrowing (no non-null assertion needed).
- **staleTime** (default 0): how long to *trust* data before background refetch. `0` = refetch on every mount/tab-refocus/reconnect. Set per data volatility (stock ticker `0`, country codes `Infinity`).
- **gcTime**: how long an *unused* query is kept before discarded ("when to forget", vs staleTime = "when to refetch").

Scaling patterns:
- **Stop wrapping useQuery in custom hooks** — they grow `Partial<UseQueryOptions>` and lose TS inference (data → unknown) unless you thread 4 generics. Instead use **queryOptions** (plain function, not a hook): call anywhere (component, useSuspenseQuery, route loader prefetch). Composition moves to call site.
- **Domain grouping**: gather option fns into `productQueries` objects → `useQuery(productQueries.detail(id))`; centralizes query keys so a typo can't silently break invalidation.
- **Orval**: generate the whole data layer (fetch fns, hooks, query keys, TS types) from an OpenAPI schema (`client: 'react-query'`, `mode: 'tags-split'`). Removes mechanical boilerplate; regenerate on schema change.
- **useQueries**: for a *dynamic* list of queries (useQuery-in-a-loop violates rules of hooks). Array of configs → array of results, fire in parallel, dedupe via shared cache. `combine` option merges results.
- **useInfiniteQuery**: for "load more" / infinite scroll. Holds every page, `getNextPageParam` returns next cursor (`undefined` = no more pages). Data is `pages[]`; flatten with `flatMap`.
- **Batched invalidation for optimistic updates**: calling `invalidateQueries` in each mutation's `onSettled` causes flicker (3 mutations → 3 refetches). Fix: only invalidate when `queryClient.isMutating() === 1` (last in-flight mutation). onMutate cancels in-flight queries, snapshots previous, writes optimistic update; onError rolls back.

Verdict: "should be in every React / React Native / Solid / Svelte project."

References: TanStack important defaults, query cancellation, disabling queries; TkDodo's Query Options API + Concurrent Optimistic Updates; Orval.
