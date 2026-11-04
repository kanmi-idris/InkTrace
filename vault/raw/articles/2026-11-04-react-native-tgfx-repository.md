# margelo/react-native-tgfx GitHub repository snapshot

Captured: 2026-11-04
Repository: https://github.com/margelo/react-native-tgfx
Inspected branch: `main`

## Architecture from the repository README

The project describes a custom React reconciler that converts the component tree into an immutable scene and compact draw program. A Nitro `TgfxView` receives the scene. Swift/Kotlin host the native GPU surface; shared drawing code is C++. The rendering runs on the platform display-link/choreographer thread.

The repository lists React Native 0.78+ with the New Architecture, iOS Xcode 16.4+ and Metal, and Android NDK 27+ and compileSdk 34+. It says the MIT-licensed React Native package wraps Tencent tgfx (BSD-3-Clause) and Nitro (MIT).

## Repository snapshot details

The GitHub page showed release 0.1.0 dated November 2, 2026. The repository was public, with 52 stars and 2 forks at capture. The latest displayed main-branch commit was November 3, 2026, and its check showed failure during the snapshot. This is a point-in-time page status, not a local build or test run.

The repository ROADMAP contains known limitations and work items. It notes that only arm64-v8a is run on a device and built in CI among the four Android ABIs, and it lists multi-ABI verification, iOS device packaging, and further tests as work items. Its roadmap and documentation may not all reflect the same release state.
