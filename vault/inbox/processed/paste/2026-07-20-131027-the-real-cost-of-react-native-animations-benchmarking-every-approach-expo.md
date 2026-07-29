---
title: The real cost of React Native animations: benchmarking every approach (Expo)
kind: paste
captured_at: 2026-07-20 13:10
tags: [react-native, expo, animations, reanimated, performance, benchmark, ease]
source_url: https://expo.dev/blog/the-real-cost-of-react-native-animations-benchmarking-every-approach
status: inbox
---

# The real cost of React Native animations: benchmarking every approach (Expo)

The real cost of React Native animations: benchmarking every approach — Expo blog (by Janic Duplessis, App&Flow), Jun 26 2026

Guest post benchmarking per-frame UI thread cost of 4 RN animation approaches. Origin: expo.dev/blog (JS-rendered, unreadable) → captured from dev.to cross-post (same canonical content).

Setup (April 2026): Expo SDK 55, RN 0.83, Reanimated 4.3.0, react-native-ease 0.7.0.

Four approaches compared:
- **Ease** (react-native-ease): drives platform APIs directly (Core Animation on iOS, ObjectAnimator on Android). No per-frame JS, no worklets, no shadow-tree commit.
- **Reanimated (Shared Values)**: worklet-based, values on UI thread via C++ worklet runtime; still commits prop updates through shadow tree each frame.
- **Reanimated (CSS Animations)**: newer declarative CSS API, still backed by Reanimated engine.
- **RN Animated** (`useNativeDriver: true`): native-driven, but carries per-node bookkeeping overhead.

Method: benchmark animates N views in a loop (translateX, 2s, linear, repeating). Custom Expo native module measures per-frame overhead:
- iOS: swizzle CADisplayLink factory, measure wall-clock per callback by frame timestamp.
- Android: Window.OnFrameMetricsAvailableListener (ANIMATION_DURATION, LAYOUT_MEASURE_DURATION, DRAW_DURATION).
5-second windows per test, multiple configs (worst/best case).

Key results:
- **Debug vs Release is the biggest variable.** In debug, Reanimated SV/CSS blow past 16.67ms frame budget at just 50 views (dropping frames); same animation in release ≈ 11ms. "Debug builds lie."
- **Feature flags** `ANDROID/IOS_SYNCHRONOUSLY_UPDATE_UI_PROPS` skip the shadow-tree commit for non-layout props (transform/opacity), adding 11–19% on top. Opt-in (can cause visual bugs). At 50 views on Moto G8+: Reanimated SV 11.87→10.57ms (-11%), CSS 11.20→9.06ms (-19%).
- **Android (Moto G8 Plus), release, all flags, avg ms:** at 10–100 views all stay under budget but Reanimated/RN Animated sit within 5ms of it (little headroom). At 500 views only Ease stays under budget; Reanimated SV hits 36ms (2× budget) even optimized.
- **iOS (iPhone 15 Pro):** Ease shows ~0.01ms across the board — Core Animation runs in a separate OS render-server process, completely outside the app thread. Other approaches keep doing work every frame. Tradeoff: Core Animation animations can't be read/interrupted from JS mid-flight → gesture-driven animations still belong to Reanimated.

Why they differ — the "shadow tree tax": each frame Reanimated's worklet computes values and commits a prop update through the shadow tree (Yoga layout + prop diffing + view mutations). For transform/opacity (zero layout effect) that work is wasted. Feature flags bypass it for visual props. RN Animated lacks those shadow-tree optimizations → scales worse than Reanimated CSS as view count climbs.

When it matters in production:
- Long-running/slow animations (skeleton loaders, drifting backgrounds, ambient effects) — a dropped frame in a 5s animation is noticeable; other work usually concurrent.
- Anything in a list (hundreds of animated items on screen).
- Low-end devices — small per-frame overhead compounds fast.
- Short one-shot transitions (button, toast, modal): overhead negligible, any library fine.
- Ease is purpose-built ONLY for declarative trigger-based animations on visual properties; gesture-driven / layout-changing (width/height/padding) still need Reanimated or RN Animated.

RN 0.85: experimental Shared Animation Backend (Meta + Software Mansion) — unified engine in the renderer. Once Reanimated integrates, SYNCHRONOUSLY_UPDATE_UI_PROPS becomes unnecessary (shadow-tree bypass default). But Ease still has zero per-frame engine, so architectural gap remains (Reanimated still computes + pushes props every frame, just smaller).

Run it yourself: clone react-native-ease, `yarn example ios/android`, tap Benchmark (source: example/src/demos/BenchmarkDemo.tsx, native module example/modules/frame-metrics/). Use release builds.

Related vault sources: src-2026-07-17-007 (Andrei Calazans RN animation benchmark + Reanimated Bundle Mode), src-2026-07-03-004 (SWM KMP vs RN).
