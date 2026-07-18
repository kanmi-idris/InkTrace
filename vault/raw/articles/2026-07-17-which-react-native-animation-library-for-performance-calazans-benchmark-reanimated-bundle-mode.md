---
title: Which React Native Animation Library for Performance (Calazans benchmark + Reanimated Bundle Mode)
kind: paste
captured_at: 2026-07-17 11:40
tags: [react-native, reanimated, react-native-ease, animations, performance, bundle-mode, fabric, benchmark]
source_url: https://andrei-calazans.com/posts/2026-07-15-which-react-native-animation-library/
status: inbox
---

# Which React Native Animation Library for Performance (Calazans benchmark + Reanimated Bundle Mode)

Andrei Calazans (@Andrei_Calazans) — X post, Jul 16 2026, + blog post Jul 15 2026

"If you are on Reanimated v4 make sure to turn bundle mode on, it completely removes the memory premium we used to pay to run Reanimated."

Full blog: "Which React Native Animation Library Should You Use for Performance?" (Jul 15 2026)

Methodology: built a reproducible harness (github.com/AndreiCalazans/react-native-animation-performance). Android, release build, New Architecture (Fabric), physical 90 Hz device (11.1 ms frame budget). 60 boxes animate at once. Maestro drives every interaction. Metrics: memory (PSS via adb dumpsys meminfo), FPS on UI + JS threads (native frame-drop observer + JS rAF sampler), JS-thread CPU busyness (per-thread jiffies from /proc). Median of 3 runs. Three libraries: Animated (useNativeDriver), Reanimated 4.5.0 (+ react-native-worklets 0.10.0), Ease (react-native-ease 0.7.3). Four animation types: touch (transient pop), state update (translate+fade), scrub (gesture-driven), 45s loop (60 boxes rotating).

Key findings:
- Only scrubbing loads the JS thread. Touch/state/loop keep JS at idle floor (~4-5%).
  - Animated: PanResponder -> setValue on JS thread every move event -> 29% JS CPU, 26% JS frames dropped. "Never scrub with JS-driven Animated.setValue."
  - Reanimated: gesture + value update entirely on UI thread -> 2.9% JS CPU, 86 fps. The whole reason Reanimated exists.
  - Ease: state update per move event -> 13% JS CPU (gesture-driven is a non-goal per its docs).
- Memory: Reanimated costs ~50 MB more (native heap ~140 MB vs ~98 MB). Ease and Animated tied for lightest.
- At 60 nodes, per-node cost dominates UI thread: Ease drops fewest frames / burns least CPU; Reanimated heaviest (45s loop -> 62% main-thread CPU, 151% process CPU) because useAnimatedStyle mapper runs per node per frame.

Bottom line:
- Gesture-driven (scrub/drag/pinch/swipe) -> Reanimated (only one keeping continuous input off JS thread).
- Declarative state / enter-exit / looping / touch feedback, memory-sensitive -> react-native-ease (lightest, lowest CPU, fewest dropped frames). Don't scrub with it.
- Animated (useNativeDriver) -> dependency-free middle ground for touch/state/loop, never for scrubbing.
- Caveat: 60-node test punishes per-node overhead. For a single hero element, Reanimated's UI cost mostly vanishes while JS-freeness stays -> likely best all-round for interactive single elements.

Update — Reanimated Worklets Bundle Mode (after T.J. Zelawski's suggestion):
- Bundle Mode compiles worklets into a separate bundle instead of serializing as strings compiled at runtime. Build-config change (babel bundleMode + Metro wrapper).
- Cuts Reanimated memory by ~100 MB (~45%), essentially all native heap (~142 MB -> ~32 MB). Erases the ~50 MB premium over Animated/Ease and then some.
- Frame rate / CPU unchanged (bundle mode changes how worklets load, not how they execute per frame).
- Setup gotcha: Bundle Mode writes generated worklet files into node_modules/react-native-worklets/.worklets/; Metro's first build can fail with "Failed to get the SHA-1" because files didn't exist when Metro built its file map. Running bundle once populates them; next build succeeds.
