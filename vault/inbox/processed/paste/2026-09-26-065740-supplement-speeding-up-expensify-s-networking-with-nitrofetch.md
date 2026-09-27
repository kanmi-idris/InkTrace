---
title: "Supplement: Speeding up Expensify's Networking with NitroFetch"
kind: "paste"
captured_at: "2026-09-26 06:57"
tags: ["margelo", "expensify", "react-native", "nitro-fetch", "networking", "cronet", "urlsession", "prefetching", "authentication", "certificate-pinning", "performance", "startup", "supplemental-capture"]
source_url: "https://margelo.com/blog/speeding-up-expensifys-networking-with-nitro-fetch"
status: "inbox"
---

# Supplement: Speeding up Expensify's Networking with NitroFetch

## Relation to existing coverage
InkTrace already contains a raw HTML capture and a placeholder source record for this article: src-2026-08-26-005. This supplemental record adds a paraphrased, structured summary and preserves the earlier raw evidence.

Margelo published the article on August 25, 2026. It is by Christoph Pader and describes Expensify's migration from the React Native networking stack to react-native-nitro-fetch, plus optional startup prefetching for a critical authenticated request.

## NitroFetch scope
NitroFetch is presented as a WHATWG-compatible Fetch implementation built with Nitro Modules. Its Android transport uses Cronet, and its iOS transport uses URLSession. It keeps the familiar Fetch API and adds optional prefetching, streaming, and WebSocket support.

The article distinguishes two changes:

- Global transport replacement: native fetch, Headers, Request, and Response are replaced with NitroFetch while web keeps the browser implementation.
- Startup prefetching: selected requests are persisted and started by native code before the React Native JavaScript bundle is ready.

The first change is the normal migration path. The second change requires application-specific work around request identity, authentication, lifecycle, and failure handling.

The NitroFetch repository independently confirms the drop-in Fetch design, Cronet and URLSession backends, app-start prefetching, optional WebSockets, and the React Native 0.75 minimum stated in its README. Its documentation also confirms that prefetch requests are matched with a prefetchKey and that app-start prefetching is best-effort.

## Expensify migration
Expensify's networking layer already handled middleware, authentication, file uploads, certificate pinning, offline recovery, and startup hydration. The integration used a native-only polyfill at the shared application boundary instead of changing every call site.

The polyfill replaces all four Fetch primitives together. The article stresses that import order matters: the replacement must run before dependencies evaluate and capture the old globals. A web-specific stub keeps the same entry import safe for web builds.

The complete integration is Expensify/App pull request #97069. The article states that the pull request changed 56 files, with most changes supporting app-specific prefetching and validation rather than the basic Fetch replacement. The pull request description confirms the native global replacement and the prefetching of OpenApp or ReconnectApp before React Native JavaScript is ready.

## Startup prefetch flow
Expensify hydrates startup data with OpenApp on an initial authenticated launch and ReconnectApp on later cold starts. Only ReconnectApp is suitable for the described persisted prefetch flow.

During one app session, JavaScript registers the eligible request for the next app start. On the next cold start, native code reads the persisted request and begins it while the JavaScript runtime and bundle load. Later, the ordinary JavaScript Fetch call uses the same prefetchKey. NitroFetch can return the prefetched response, wait for the matching in-flight request, or fall back to a new network request.

The prefetchKey is the matching mechanism. It is not enough for the URL to look similar. The effective URL, method, body, headers, and key must describe the same request. An allowlist limits prefetching to the startup request that unlocks the first useful screen.

The article warns against prefetching many requests at launch. Excessive work can compete for bandwidth, CPU, and server capacity. Prefetching is most useful when it moves one high-value request earlier.

## Native startup setup
The article describes automatic native handling on iOS. Android requires AutoPrefetcher.prefetchOnStart in Application.onCreate before React Native loads. The native setup is deliberately non-fatal. A missing or corrupt prefetch should not prevent the app from opening, and the normal Fetch path remains available.

The current NitroFetch documentation confirms the same general model: prefetchOnAppStart queues a request for a later app start, remove functions manage the queue, and a prefetched response can be identified through the NitroFetch response marker.

## Authentication before JavaScript
The critical startup request is authenticated, but the normal JavaScript authentication code cannot run before the JavaScript runtime exists. Expensify therefore uses NitroFetch's native token-refresh configuration.

The persisted startup request contains enough information for native code to perform the authentication request, map the returned token into the target request, and continue with ReconnectApp. The article describes JSON response mapping, form data for authentication, and a fallback to stored headers when refresh fails.

Persisting only the current access token would eventually produce an unauthorized startup request. Native refresh configuration avoids treating an expiring token as permanent. This configuration is specific to Expensify's authentication system and is not required for a normal NitroFetch migration.

## Account isolation and logout cleanup
Persisted prefetch state can outlive a JavaScript session and a user login. A key containing only ReconnectApp could allow a response for one account to be considered for another account. Expensify therefore scopes the prefetchKey to the account identifier.

The integration clears the stored prefetch queue and token-refresh configuration during logout and authentication transitions. The article describes cleanup before and after a full local-state reset because a request could be registered while old credentials remain visible.

This is a security boundary, not only a performance detail. Any persisted request metadata, response cache, authentication configuration, or identity-derived key must be cleared when account context changes.

## Certificate pinning and transport changes
Expensify already used certificate pinning. Android NitroFetch uses Cronet, which owns a different TLS and networking path from React Native's OkHttp client. Existing OkHttp pins and Android Network Security Configuration settings do not automatically transfer to Cronet.

Expensify added an app-specific certificate-pinning implementation and a NitroFetch patch that applies public-key pins to the Cronet engines. The article says the integration covers ordinary requests, streaming, startup prefetches, and token refreshes.

This is not a normal NitroFetch requirement. It is a transport-assumption audit that becomes necessary when an app depends on client-specific TLS behavior. Apps migrating a custom networking stack should recheck DNS, proxies, cookies, redirects, TLS, pinning, observability, and debugging.

## Testing and rollout
The article describes focused unit tests for authentication prefetching, request preparation, sessions, and the shared network layer. It also describes release testing on native Android, native iOS, mobile web, and desktop web, including offline behavior and high-traffic accounts. Web remains on browser Fetch.

The rollout is designed to fail open. Registration errors are logged, cleanup errors should not block sign-out, and a prefetch miss becomes a normal network request. The performance optimization must not become a startup availability dependency.

## Reported performance
The article reports two separate effects:

- Ordinary NitroFetch requests were approximately 15 to 30 percent faster across request types and network conditions.
- Startup prefetching moved the critical request earlier, overlapping network work with React Native and JavaScript startup.

For warm starts measured 100 times per binary on an iPhone 14 Pro and Samsung Galaxy S10e over a stable 200 Mbit/s connection, the article reports:

- iOS P50: 1,676 ms without prefetching versus 1,409 ms with it, a 267 ms or 15.93 percent reduction.
- Android P50: 3,223.5 ms without prefetching versus 2,573 ms with it, a 650.5 ms or 20.18 percent reduction.

The ordinary request result is not a fixed latency guarantee. Network conditions, endpoint behavior, cache state, payload size, TLS reuse, and device transport all affect it. The startup result measures one Expensify journey and should not be generalized to every app. All figures remain author-reported.

## Reusable migration rules
The article's engineering guidance is:

- Replace Fetch primitives at one shared boundary.
- Replace fetch, Headers, Request, and Response together.
- Load the native polyfill before dependencies capture global networking objects.
- Prefetch only the request that unlocks the first useful screen.
- Include account identity in persisted request keys.
- Clear persisted prefetch and token-refresh state at every authentication boundary.
- Keep the ordinary request path as the source of truth.
- Treat native prefetch failure as non-fatal.
- Recheck certificate pinning when the underlying transport changes.
- Test complete user journeys, not only Fetch unit calls.

## Evidence boundary
The Margelo article, Expensify pull request #97069, the react-native-nitro-fetch repository README, and the NitroFetch prefetch documentation were inspected. The repository and documentation support the library capabilities and integration shape. The article is the source for Expensify's internal design, test setup, and performance measurements.

I did not build Expensify, install NitroFetch, inspect the full 56-file pull request, run the device tests, validate certificate pins, or reproduce the reported request and startup measurements.

## Sources
- https://margelo.com/blog/speeding-up-expensifys-networking-with-nitro-fetch
- https://github.com/Expensify/App/pull/97069
- https://github.com/margelo/react-native-nitro-fetch
- https://fetch.margelo.com/docs/prefetch
- Existing placeholder: src-2026-08-26-005
- Existing raw capture: raw/articles/2026-08-26-expensify-networking-with-nitrofetch-startup-prefetching-auth-and-pinning.md
