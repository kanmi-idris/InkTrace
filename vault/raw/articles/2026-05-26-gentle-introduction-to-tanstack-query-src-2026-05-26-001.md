# A gentle introduction to TanStack Query

Captured from the user-supplied article text and URL on 2026-05-26.

Expanded with a second user-supplied pasted copy of the same article on 2026-05-30.

Canonical URL:
https://neciudan.dev/a-gentle-introduction-to-tanstack-query

Article metadata visible in the supplied text:

- title:
  - `A gentle introduction to TanStack Query`
- author:
  - Neciu Dan
- published date:
  - 2026-05-24

Core framing captured from the article:

- The article is positioned as an introductory explanation for experienced React developers who may still be unfamiliar with TanStack Query.
- The author explains that this framing came from giving a "How NOT to use TanStack Query" talk to audiences with very different levels of TanStack Query familiarity.
- React Paris is described as a room where nearly everyone had used TanStack Query, while JSHeroes Cluj had far fewer users, motivating a version that assumes less prior knowledge.
- It starts from hand-rolled `useState` plus `useEffect` data fetching and uses that baseline to motivate TanStack Query as a higher-level abstraction.

Problems with hand-rolled React fetching identified in the article:

- repeated loading, error, and data state boilerplate across components
- risk of race conditions when inputs change during in-flight requests
- no shared cache between mounts, leading to avoidable spinners and repeated fetching

Introductory TanStack Query model captured from the article:

- `useQuery` is introduced as the basic abstraction for:
  - data fetching
  - loading state
  - pending state
  - error state
- `queryKey` is emphasized as the central cache identity mechanism.
- The article highlights deduplicated in-flight requests and shared cache reuse across components that ask for the same key.
- The example compares a navbar and sidebar both reading the same user data through the same query key, with TanStack Query attaching both consumers to one in-flight request rather than sending duplicate network calls.

Root setup captured from the article:

- The article explains root wiring with:
  - `QueryClient`
  - `QueryClientProvider`
- It frames the `QueryClient` as the long-lived cache and orchestration layer for queries across the app.
- It also notes that the same client can be accessed directly through `useQueryClient()` or held as a reference for operations such as prefetching and invalidation.

Important defaults and options discussed in the article:

- retries and exponential backoff
- custom `retry` functions
- `retryDelay`
- forwarding the provided `signal` into `fetch` for actual request cancellation
- `enabled`
- `skipToken`
- `staleTime`
- `gcTime`

Scaling guidance captured from the article:

- The article argues against wrapping every query in custom React hooks once applications grow.
- It recommends using `queryOptions` instead of ad hoc wrapper hooks so the same query definition can be reused in:
  - `useQuery`
  - `useSuspenseQuery`
  - prefetching
  - route loaders
- It recommends organizing query definitions by domain, for example grouped `productQueries`.

Code-generation and larger-app guidance captured from the article:

- The article recommends generating TanStack Query integrations from OpenAPI schemas with Orval rather than hand-writing repetitive CRUD query layers.
- It frames generated fetchers, hooks, keys, and request or response types as mechanical boilerplate that should stay synchronized with backend schemas.

Advanced usage patterns discussed in the article:

- `useQueries` for dynamic parallel queries
- `combine` for consolidating multiple query results
- `useInfiniteQuery` for paginated or infinite-scroll flows
- mutation handling with optimistic updates
- batching invalidation when concurrent optimistic mutations overlap
- use of `queryClient.isMutating()` to avoid flicker from repeated invalidation and refetch cycles

References explicitly named in the article:

- TanStack Query official documentation
- TkDodo’s writing on:
  - query options API
  - concurrent optimistic updates
- Orval for OpenAPI-based code generation

Interpretive note:

- This source is strongest as React data-fetching architecture guidance. Its durable value is not just the beginner introduction, but the progression from hand-rolled fetching to cache identity, cancellation, freshness semantics, reusable query option factories, domain organization, generated query layers, and concurrency-safe optimistic-update patterns.
