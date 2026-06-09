# Running Multiple Instances of React Native in Sandbox

Captured from the public Callstack article referenced by the user on 2026-05-20.

Canonical URL:
https://www.callstack.com/blog/running-multiple-instances-of-react-native-in-sandbox

---

Article metadata captured from the supplied text:

- Title: `Running Multiple Instances of React Native in Sandbox`
- Publisher: `Callstack`
- Author: `Aliaksandr Babrykovich`
- Published date shown in the supplied text: `7/31/2025`

Core problem framing captured from the article:

- The article starts from a React Native super-app or micro-frontend architecture based on Module Federation and tools like Re.Pack.
- It argues that code splitting and independent bundle delivery do not automatically provide runtime isolation.
- The stated risks without isolation include:
  - unauthorized data access
  - dependency conflicts
  - plugin interference with host behavior
  - one feature crashing the entire host app

Library introduction captured from the article:

- Callstack introduces `react-native-sandbox`.
- The package name shown in the article is:
  - `@callstack/react-native-sandbox`
- The library is described as a way to run multiple fully isolated React Native instances inside one application.

Primary guarantees and features captured from the article:

- true isolation
  - each sandbox runs in its own JavaScript runtime
- configurable security and permissions
  - native access can be restricted through an `allowedTurboModules` whitelist
- crash containment
  - plugin-level failures are contained inside the sandbox
- controlled host-sandbox communication
  - communication happens through an explicit message-passing API

API surface captured from the article:

- The host primarily uses `SandboxReactNativeView`.
- The example API includes:
  - `jsBundleSource`
  - `moduleName`
  - `onMessage`
  - `onError`
- Bundle loading is described as flexible:
  - named bundles
  - local files
  - remote URLs

Communication model captured from the article:

- The sandbox exposes globally available functions:
  - `postMessage(message)`
  - `setOnMessage(handler)`
- The article explicitly compares this to a web `postMessage` style API and positions it as a safe, bounded way to communicate with the host.

Implementation and platform notes captured from the article:

- Under the hood, communication between host and sandbox uses Fabric Native Components.
- The FAQ states:
  - iOS is supported at the moment
  - each sandbox instance has its own JS runtime, so there is overhead
  - sandbox-to-sandbox communication is not yet supported

Demonstration scenario captured from the article:

- The article presents a deliberately destructive demo comparing code run directly in the host with the same code run in a sandbox.
- Failure modes tested include:
  - calling undefined globals
  - overwriting globals
  - accessing blocked TurboModules
  - infinite loops
- The point of the demo is that the host app stays alive when these happen in the sandboxed instance.

Interpretive note:

- This source is strongest as super-app and plugin-runtime architecture guidance for React Native. Its durable value is the move from bundle-level modularity to runtime-level isolation, with explicit framing around security boundaries, fault containment, and controlled capability exposure.
