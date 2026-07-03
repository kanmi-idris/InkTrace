---
title: Kotlin Multiplatform vs React Native (2026 Benchmark) by Software Mansion
kind: paste
captured_at: 2026-07-03 14:56
tags: [kotlin-multiplatform, react-native, benchmark, performance, swmansion, comparison]
source_url: https://swmansion.com/blog/we-built-the-same-app-in-kmp-and-react-native-here-s-what-we-found/
status: inbox
---

# Kotlin Multiplatform vs React Native (2026 Benchmark) by Software Mansion

Software Mansion built the same app in KMP and React Native, published July 2, 2026 by Artur Gęsiarz, Karol Kąkol, Weronika Grzybowska.

App: real-time ride-sharing driver screen (route, map markers, earnings, status updates) — chosen as a typical cross-platform mobile app.

Tech stacks compared:
- KMP: Compose Multiplatform (shared UI) + Ktor (networking) + SQLDelight (local storage) + Voyager (navigation)
- RN: Expo + React Navigation + TanStack Query + Moti (animations) + Zustand (state)

Test devices: Pixel 7 (Android 15), iPhone 14 (iOS 17), iPhone 15 Pro (iOS 17).

Benchmark rounds:

Round 1 — App size (APK/IPA):
- Android APK (arm64): KMP 22.5MB vs RN 22.4MB (tie)
- Android + x86_64: KMP 24.9MB vs RN 22.6MB
- iOS IPA: KMP 24.9MB vs RN 22.9MB
- iOS + simulator: KMP 39.5MB vs RN 23.1MB (not comparable due to KMP simulator arch inclusion)
- Conclusion: comparable on actual devices when accounting for arch

Round 2 — Startup time (cold start, ms):
- Pixel 7: KMP 1,635ms vs RN 1,452ms (RN ~11% faster)
- iPhone 14: KMP 1,081ms vs RN 592ms (RN ~45% faster)
- iPhone 15 Pro: KMP 1,087ms vs RN 565ms (RN ~48% faster)
- RN used Hermes + lazy bundles; KMP had no equivalent lazy-loading

Round 3 — RAM usage (MB):
- iOS: KMP 94.7MB vs RN 66MB (RN ~30% less RAM)
- Android physical + virtual measured separately

Round 4 — UI rendering FPS (60Hz target):
- KMP: stable 60 FPS throughout
- RN: initial jank (40-50 FPS) on first render due to bridge/throttle; stable after
- Pixel 7 RN list scrolling: occasional frame drops, KMP stable

Round 5 — Developer experience / iteration time:
- Android instant run: KMP ~1s vs RN ~2-3s (KMP faster)
- iOS hot reload: KMP ~3-5s vs RN ~1-2s (RN faster)
- Cross-platform code sharing: both ~90%+ shared code

Key takeaways from SWM:
- KMP wins: UI rendering stability (no jank), faster Android iteration, startup closer on Android
- RN wins: startup time (especially iOS), lower RAM, faster iOS iteration, Hermes bytecode advantages
- Both are production-ready; RN has more mature ecosystem, KMP has technical advantages in rendering and Android tooling

Challenges noted: profiling non-trivial across platforms, iOS RAM measurement differences, simulator vs device discrepancies.
