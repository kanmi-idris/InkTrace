---
title: "@rbayuokt/expo-adaptive-glass: Adaptive Native Glass Surfaces for Expo and React Native"
kind: "paste"
captured_at: "2026-09-23 02:55"
tags: ["expo", "react-native", "adaptive-glass", "liquid-glass", "glassmorphism", "ios", "android", "metal", "agsl", "native-ui", "performance", "mit"]
source_url: "https://x.com/rbayuokt/status/2102377932094398867"
status: "inbox"
---

# @rbayuokt/expo-adaptive-glass: Adaptive Native Glass Surfaces for Expo and React Native

## Source type and relationship to existing coverage
This capture records an X post by @rbayuokt announcing the open-source package @rbayuokt/expo-adaptive-glass, plus the author's follow-up posts and the official npm package page. InkTrace already contains several separate glass or liquid-glass UI records, including expo_nativetab_liquidglass (src-2026-07-12-008), expo-glass-tabs (src-2026-07-23-005), react-native-effects (src-2026-05-16-003), and NativeBloom Liquid Blocks (src-2026-08-08-005). This package is distinct: it is a general adaptive glass-surface system with native iOS and Android renderers, not only a tab bar or a collection of web-style visual blocks.

## What the post announces
The author presents @rbayuokt/expo-adaptive-glass as a cross-platform glass UI layer for Expo and React Native. The intended API begins with one GlassSurface component, while the package chooses the strongest glass renderer the current device can sustain. The stated motivation is to avoid an iOS-first design where older iPhones and Android devices receive a poor fallback.

The official npm package page and registry metadata confirm the package and its GitHub repository at https://github.com/rbayuokt/expo-adaptive-glass, latest version 0.2.0, MIT license, and description: native glass surfaces that scale blur, refraction, and highlights according to device capability and live frame performance. The registry identifies the package author as rbayuokt.

## Renderer strategy
According to the package documentation, the renderer is selected internally rather than by application code:

- iOS 26 and later: Apple's public UIGlassEffect API.
- iOS 15.1 through iOS 25: native blur materials with additional tint, sheen, and rim layers.
- Android 13 and later: a backdrop RenderNode, RenderEffect blur, and an AGSL RuntimeShader lens.
- Android 12: native RenderEffect blur without the AGSL lens.
- Android 11 and older, or low-RAM devices: acrylic, using an opaque or semi-opaque fill, sheen, gradient edge, and static highlight.

The package states that an AGSL shader compilation failure falls back to plain blur instead of crashing. It also says that no private Apple or Google API is used and that the project is not affiliated with either company. These are package-author statements, not independently audited claims in this capture.

## Adaptive quality policy
GlassProvider defaults to quality auto. The package first scores device characteristics such as memory, operating-system version, refresh rate, supported renderers, and Android performance class. During runtime it can lower quality in response to dropped frames, thermal state, Low Power Mode, Battery Saver, and memory pressure, then raise quality again after conditions improve. The documentation says scrolling freezes allocation changes while a list is moving, so surfaces do not repeatedly change material during the scroll.

The documented quality tiers are:

- ultra: strongest available glass, including full edge refraction and a finger-following highlight where supported.
- high: glass with reduced edge bending.
- medium: system glass on iOS 26, or plain blur where available, without refraction or a moving highlight.
- low: static acrylic without live blur.
- minimal: lightest flat acrylic treatment.

A priority value (critical, high, normal, low, or decorative) determines which surfaces step down first when the screen contains more live glass than the device can draw. Surfaces with the same priority are intended to change together, avoiding a partially glass and partially acrylic list.

The package also documents accessibility behavior: Reduce Transparency switches to an opaque material, and Reduce Motion disables springs and lens motion. These details are documented implementation behavior, not independently tested here.

## Main components
Besides GlassSurface, the package documents:

- GlassBackdrop: marks the content Android should blur. It must sit behind the glass as a sibling, not inside the glass surface.
- GlassTabBar: a native animated tab bar with a selected pill and an optional magnifying lens.
- GlassNavigationTabBar: a drop-in tab bar for React Navigation 7 and Expo Router tabs.
- GlassGroup: merges nearby surfaces into one connected glass shape.
- GlassSwitch and GlassSlider: native controls with a glass lens effect while pressed or dragged.
- GlassMenu: an expanding menu with nested submenus and press-drag-release selection.
- GlassLens: magnifies content under the user's finger.

The navigation entry is optional, so applications that do not use React Navigation do not pay for that integration. The documentation says touch handling, springs, and lens motion run in Swift or Kotlin, with no Reanimated or Gesture Handler requirement and no animation waiting on the JavaScript thread. This is a documentation claim, not a performance benchmark independently reproduced here.

## Expo and platform limitations
The package ships native Swift and Kotlin code, so the full implementation needs a development build, expo run, or EAS Build. Expo Go renders only a static translucent View with a development warning. Web also receives a static translucent fallback. A config plugin is not required, and the package requests no permissions. Bare React Native is described as potentially supported after installing Expo Modules, but the package documentation marks that path as not tested.

On Android, a GlassBackdrop is required for live background blur because Android's blur path operates on a view's own content rather than automatically sampling the content behind a separate view. This is an important integration constraint that is easy to miss when migrating from iOS.

## Evidence boundary
The announcement post, its follow-up posts, the official npm package page, and npm registry metadata were inspected. I did not install the package, run an Expo development build, render the components, inspect the native Swift or Kotlin source, or measure frame rates. Claims such as every phone gets the best glass it can handle, smooth operation on old Android devices, and the exact quality adaptation behavior remain author or documentation claims in this capture. The package metadata and version information are verified from npm.

## Sources
- https://x.com/rbayuokt/status/2102377932094398867
- https://www.npmjs.com/package/@rbayuokt/expo-adaptive-glass
- https://registry.npmjs.org/@rbayuokt/expo-adaptive-glass
- https://github.com/rbayuokt/expo-adaptive-glass

## Related records
- src-2026-07-12-008: expo_nativetab_liquidglass, native bottom tabs with liquid glass
- src-2026-07-23-005: expo-glass-tabs, floating liquid-glass tab bar for Expo Router
- src-2026-05-16-003: react-native-effects, separate React Native effects library
- src-2026-08-08-005: NativeBloom Liquid Blocks, separate visual block collection
