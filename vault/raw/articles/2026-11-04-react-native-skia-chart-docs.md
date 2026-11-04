# react-native-skia-chart official docs snapshot

Captured: 2026-11-04
Publisher: Baraa Rasheed / react-native-skia-chart project
Sources:
- https://baraa-rasheed.github.io/react-native-skia-chart/
- https://baraa-rasheed.github.io/react-native-skia-chart/docs/intro
- https://baraa-rasheed.github.io/react-native-skia-chart/docs/gpu

The homepage describes the charts as drawn by Skia Graphite on Metal and Vulkan via React Native Skia 3.8. It says Reanimated shared values feed Skia props directly, without a React re-render per frame, and that gestures run as worklets on the UI thread.

The GPU documentation describes a mixed CPU/GPU pipeline. Skia rasterizes chart paths and shapes on the GPU. Text shaping, data scaling, path building, and gesture handling still use CPU work, often in JS or UI-thread worklets. The documentation says the UI thread applies animated values while Graphite replays frames on a native thread pool.

The getting-started page lists chart families, one-prop-shape styling, touch interaction, and agent-support files such as AGENTS.md and llms.txt. It requires Expo development builds, not Expo Go, and specifies Android minSdk 26 with Vulkan 1.1 and iOS 15.1+.

These are project documentation claims. No independent performance benchmark was captured for this library in these pages.
