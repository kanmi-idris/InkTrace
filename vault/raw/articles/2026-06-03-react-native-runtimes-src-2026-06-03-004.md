# react-native-runtimes

Captured from the user-supplied GitHub README text on 2026-06-03.

Canonical repository:
https://github.com/margelo/react-native-runtimes

Project site:
https://runtimes.margelo.com

Repository metadata captured:
- Owner/repo: `margelo/react-native-runtimes`
- Description: Run heavy React Native components and business logic in isolated Hermes runtimes without freezing the main JavaScript thread.
- Stars shown in pasted page: 262
- Repository age shown: 2 weeks old
- License: MIT
- Collaboration mentioned: Margelo and Callstack
- Topics shown: library, performance, react-native, parallel, threading, nitro, runtimes, worklets

Core framing captured from the README:

- React Native normally gives a product one main JavaScript runtime.
- Expensive feeds, chat screens, editors, reducers, hydration jobs, and route surfaces can monopolize that runtime.
- `react-native-runtimes` adds a multi-runtime layer for React Native New Architecture apps.
- Selected React components can be mounted in named secondary Hermes runtimes.
- Whole screens, headless tasks, and typed functions can run away from the main runtime.
- State can be shared across isolated JavaScript heaps through a native C++ singleton.
- Runtimes can be prewarmed before navigation to reduce cold-start latency.
- Metro and an Expo config plugin wire up the runtime transformation.

Core packages captured:

- `@react-native-runtimes/core`
  - Mount React components in secondary runtimes.
  - Includes Metro transform, `OnRuntime`, `ThreadedScreen`, headless tasks, and cross-runtime function calls.
- `@react-native-runtimes/state`
  - Zustand-style shared store backed by a process-wide C++ singleton.
  - Supports synchronous reads and commits from every runtime.

Core capabilities captured:

- `OnRuntime` wraps a component and renders it in a named Hermes runtime.
- `ThreadedScreen` and `threadedComponent` support full-screen threaded routes.
- `ThreadedRuntime.prewarm` can start a runtime before the user navigates.
- `registerThreadedHeadlessTask` and `ThreadedRuntime.runHeadlessTask` support background hydration, decoding, reducers, and similar work without mounting a view.
- `runtimeFunction` plus `call(...).on(runtimeName)` supports typed cross-runtime function calls with JSON-serialized inputs and outputs.
- Function directives such as `'background'` can pin helper functions to a fixed runtime through Metro rewriting.
- `createSharedStore` exposes native-backed shared state with path handles and selector subscriptions that work across runtimes.
- Shared stores can add native persistence through a `persist` option.
- `prewarmBusinessRuntime` supports app-lifetime business runtimes that can access the same native modules as the main runtime.

When to use:

- One or two expensive features repeatedly monopolize the main JS runtime.
- A chat, feed, editor, map sidebar, or media-heavy route should stay alive and warm.
- Business logic or cache hydration needs to run without blocking interaction.
- The app is already on React Native New Architecture with Hermes, or the team is willing to move there.

When not to use:

- The app is simple enough that memoization, virtualization, or moving work off render fixes the issue.
- The app needs the legacy architecture or a non-Hermes JavaScript engine.
- The team wants to pass large mutable objects or non-serializable props directly between runtimes; the README recommends passing IDs or keys and reading shared data from native-backed state instead.

Requirements captured:

- React Native 0.76+
- New Architecture required.
- Hermes required.
- Android and iOS supported.
- Expo support through the `@react-native-runtimes/core` config plugin.

Getting-started details captured:

- Install command:
  - `npm install @react-native-runtimes/core @react-native-runtimes/state react-native-nitro-modules`
- Metro uses `withThreadedRuntime` from `@react-native-runtimes/core/metro`.
- Generated runtime entry is loaded from `.threaded-runtime/entry`.
- Example render:
  - `<OnRuntime name="my-runtime"><HeavyComponent /></OnRuntime>`

Interpretive note:

- This source belongs in the React Native performance and architecture cluster.
- It is more invasive than ordinary memoization or list virtualization because it changes where React components and business logic execute.
