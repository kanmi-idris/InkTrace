# React Native performance tactics: Modern strategies and tools

Captured from the user-supplied article text and URL on 2026-05-30.

Canonical URL:
https://blog.sentry.io/react-native-performance-strategies-tools/#1-faster-time-to-interactive-tti-0

Article metadata visible in the supplied text:

- title:
  - `React Native performance tactics: Modern strategies and tools`
- author:
  - Simon Grimm
- publisher:
  - Sentry Blog
- published date:
  - 2025-08-20

Core framing captured from the article:

- The article presents React Native performance as especially important in the era of React Native 0.80+, the New Architecture, Expo Router, Reanimated 4, and production observability.
- It focuses on a practical optimization sequence rather than a single library.
- The major categories are:
  - faster Time to Interactive
  - React optimizations
  - achieving 60 FPS
  - better list performance
  - careful state management
  - Sentry-backed monitoring and tracing

Time to Interactive guidance captured from the article:

- Avoid doing heavy work during startup.
- Use React Native DevTools profiling to inspect component and function cost.
- Use Sentry React Native Profiling to observe real-user performance in production.
- Use Expo Router async routes for route-based lazy loading.
- Use Expo Atlas to inspect bundle size and identify large contributors.

React optimization guidance captured from the article:

- Use React Native DevTools Profiler.
- Enable update highlighting to spot excessive re-renders.
- Use the profiler setting that records why each component rendered.
- Enable React Compiler through Expo experiments when available.
- Clean up common JavaScript memory leaks:
  - event listeners
  - intervals
  - WebSocket connections
  - async operations that should be aborted

60 FPS guidance captured from the article:

- Use the React Native performance monitor during development.
- Avoid blocking the JavaScript thread with heavy computation.
- Break heavy work into chunks when it must run on-device.
- Use React 18 tools such as `startTransition` and `useDeferredValue` for non-urgent work.
- Consider Worklets, Reanimated 4, or React Native Worklets for background or non-JS-thread execution.
- Use Flashlight for Android performance scoring and live metrics.
- Use Sentry tracing and spans to understand slow operations across real user sessions.

List-performance guidance captured from the article:

- Do not map large lists inside `ScrollView`.
- Use `FlashList` or `LegendList` for performance-sensitive lists.
- Preprocess expensive item data outside `renderItem`.
- Keep list-item render functions lightweight.
- Use memoized list-item components where appropriate.
- Avoid mutating arrays in place.
- Use immutable updates so React detects changes correctly.

State-management guidance captured from the article:

- Use React Context carefully because all consumers can re-render when provider values change.
- Split contexts by concern when using Context.
- Consider Jotai or Zustand for fine-grained reactive state when the state model is complex or frequently changing.

Sentry-specific guidance captured from the article:

- Use Sentry profiling for production function-level performance evidence.
- Use Sentry tracing to connect UI slowness with API calls, component behavior, native modules, and other services.
- Use spans to instrument specific operations.
- The article emphasizes real-user performance data rather than relying only on local development tools.

Interpretive note:

- This source is strongest as a React Native performance workflow checklist that combines local profiling, production observability, Expo tooling, animation-thread discipline, list virtualization, and state isolation. Its durable value is the recommendation to profile first, optimize based on observed bottlenecks, and keep measuring in production rather than applying every optimization indiscriminately.
