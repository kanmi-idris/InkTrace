---
title: react-native-ease — Platform-Native Declarative Animations (App&Flow)
kind: paste
captured_at: 2026-07-21 14:30
tags: [react-native, animations, ease, core-animation, fabric, new-architecture, app-and-flow, ease-view]
source_url: 
status: inbox
---

# react-native-ease — Platform-Native Declarative Animations (App&Flow)

# react-native-ease — Lightweight Platform-Native Animations

**Repo**: github.com/appandflow/react-native-ease
**Author**: App&Flow (Janic Duplessis), Montreal
**Stars**: 943★ | **License**: MIT | **Version**: v0.7.3 (10 releases)
**Languages**: TypeScript 55.5%, Kotlin 20.6%, Obj-C++ 20.1%, Swift 1.4%
**Requirements**: RN 0.76+ (New Arch/Fabric), iOS 15.1+, Android minSdk 24+

**Docs**: appandflow.github.io/react-native-ease/

## Overview
Declarative animations running entirely on native platform APIs — Core Animation (CAAnimation/CASpringAnimation) on iOS, ObjectAnimator/SpringAnimation on Android. No JS animation loop, no worklets, no shared values. Zero JS thread overhead during animation.

## API
- `<EaseView>` — single component replacing View with `animate`, `initialAnimate`, `transition` props
- **animate**: opacity, translateX/Y, scale/scaleX/scaleY, rotate/rotateX/rotateY, borderRadius, backgroundColor, borderWidth/Color, shadowOpacity/Radius/Color/Offset (iOS), elevation (Android)
- **transition**: `{ type: 'timing' | 'spring' | 'none' }` with duration, easing (preset or cubic bezier), damping, stiffness, mass, delay, loop
- **Per-property maps**: different transition configs per category (transform, opacity, borderRadius, backgroundColor, border, shadow, default)
- **initialAnimate**: enter animations (mount at initial → animate to target)
- **Interruptible**: changing values mid-animation smoothly redirects
- **transformOrigin**: 0–1 fraction pivot point for scale/rotate
- **transformPerspective**: 3D perspective for rotateX/rotateY (default 1280)
- **useHardwareLayer** (Android): rasterize to GPU texture during animation
- **onTransitionEnd**: callback with `{ finished: boolean }`
- **NativeWind v4+** support via `import 'react-native-ease/nativewind'`
- **Uniwind** support via `import { EaseView } from 'react-native-ease/uniwind'`

## Agent Skill
Includes `react-native-ease-refactor` agent skill — scans codebase for Reanimated/Animated code, classifies migratable vs non-migratable, generates migration report, applies changes preserving non-animation logic.
```
npx skills add appandflow/react-native-ease
```

## Benchmarks
- **Android** (release, emulator, M4 MacBook Pro): UI thread ms/frame — at 500 views: Ease 0.60ms avg vs Reanimated SV 8.31ms, Reanimated CSS 5.50ms, RN Animated 1.60ms
- **iOS** (release, iPhone 16 Pro sim): display link callback ms/frame — at 500 views: Ease ~0.01ms avg vs Reanimated SV 6.84ms, Reanimated CSS 4.16ms, RN Animated 4.91ms
- Ease stays near zero on both platforms because all work is offloaded to platform render servers

## Non-Goals
- Gesture-driven animations (pan/pinch) → use Reanimated
- Layout animations (width/height changes)
- Shared element transitions → use Reanimated or RN Navigation

## Cross-reference
- Complements benchmark sources `src-2026-07-20-006` (Expo blog) and `src-2026-07-17-007` (Andrei Calazans benchmark)
