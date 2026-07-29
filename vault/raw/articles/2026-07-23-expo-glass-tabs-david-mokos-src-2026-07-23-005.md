---
source_id: src-2026-07-23-005
captured_at: 2026-07-23T05:49:00Z
url: "https://github.com/davidmokos/expo-glass-tabs"
npm: "expo-glass-tabs"
status: complete
---

# expo-glass-tabs

**Floating liquid-glass tab bar for Expo Router — the Revolut-style bottom bar.**

**Author:** David Mokos
**License:** MIT
**Stars:** 26 | **Forks:** 2
**Language:** TypeScript 100%
**npm:** `expo-glass-tabs`

## Description

Rebuilds iOS 26's Revolut-style liquid-glass tab bar on top of Expo Router's headless tabs. iOS 26's native tab bar minimizes on scroll but collapses to a single icon. Revolut's bar keeps all tabs visible and drops labels, shrinking the pill in both dimensions. This behavior isn't reachable from native UITabBar.

## Features

- 🪟 Real liquid glass — iOS 26 UIGlassEffect via expo-glass-effect: true squircle corners, rim refraction, content lensing. Solid fallback on older iOS and Android.
- 📉 Minimize on scroll — pill shrinks in both dimensions while labels collapse; every icon stays visible. Critically-damped springs, rubber-band overscroll filtered out.
- 🛝 Sliding highlight — active-tab pill physically travels between tabs on an interruptible, transform-only spring.
- 👆 Finger scrubbing — drag along bar: 1:1 tracking, icons light up as finger passes, haptic ticks at each boundary, navigation on release.
- 🌫️ Progressive edge blur — content dissolves gradually behind the bar with no hard blur line. Works for top bars too.
- 🎞️ Subtle screen transitions — fade + micro-scale between tabs via TabSlot renderFn.
- ⚡ UI-thread everything — Reanimated worklets with native gesture recognizers.
- 🧩 Pure TypeScript — no custom native code. Works in Expo Go and dev builds.

## Dependencies

- expo-blur
- expo-glass-effect
- expo-haptics
- expo-symbols
- react-native-gesture-handler
- react-native-reanimated
- react-native-safe-area-context
- react-native-screens

## API

| Export | Kind | Purpose |
|--------|------|---------|
| GlassTabBar | component | Floating pill — use via TabList asChild |
| GlassTabButton | component | One trigger — use via TabTrigger asChild |
| TabBarMinimizeProvider | component | Wrap the Tabs tree once |
| useMinimizeOnScroll() | hook | Scroll handler for Animated.ScrollView |
| useTabBarMinimized() | hook | Raw 0..1 minimize progress, for custom UI |
| renderFadingTabScreen | function | TabSlot renderFn with fade + micro-scale |
| ProgressiveBlur | component | Gradient blur anchored to a screen edge |
| MINIMIZE_SPRING | constant | Spring config for matching |

## Installation

```bash
npx expo install expo-glass-tabs expo-blur expo-glass-effect expo-haptics expo-symbols react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens
```

Requires `GestureHandlerRootView` wrapper in app root layout.

## Architecture

Bar structure declared in JS (Expo Router headless tabs), but runtime is native:
- **Materials** — UIGlassEffect, UIVisualEffectView, SF Symbols, UIFeedbackGenerator
- **Motion** — Reanimated worklets on UI thread; sliding highlight and scrub are transform-only (GPU-composited)
- **Gestures** — native recognizers via react-native-gesture-handler; Pan (scrub) races Tap
