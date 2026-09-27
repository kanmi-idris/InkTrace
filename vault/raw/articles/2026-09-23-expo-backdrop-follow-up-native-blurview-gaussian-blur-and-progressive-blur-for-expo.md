---
title: "expo-backdrop Follow-up: Native BlurView, Gaussian Blur, and Progressive Blur for Expo"
kind: "paste"
captured_at: "2026-09-23 02:57"
tags: ["expo", "react-native", "blur", "progressive-blur", "android", "ios", "native-module", "kotlin", "mit", "placeholder-supplement"]
source_url: "https://github.com/rit3zh/expo-backdrop"
status: "inbox"
---

# expo-backdrop Follow-up: Native BlurView, Gaussian Blur, and Progressive Blur for Expo

## Relation to existing coverage
InkTrace already contains a placeholder-only record for this repository: src-2026-07-28-005, titled Expo Backdrop. That record has no useful summary or extracted evidence. This supplemental capture fills the gap without overwriting the earlier raw evidence or source record. The package is also distinct from rit3zh/expo-progressive-blur, which uses expo-blur, MaskedView, Reanimated, and gradients for an iOS-style header effect rather than this package's native iOS and Android blur views.

## What it is
expo-backdrop is a native blur package for React Native and Expo. The repository README documents three components:

- BlurView blurs content behind the component.
- GaussianBlurView blurs its own children.
- ProgressiveBlurView applies a directional blur that is strongest at one edge and fades toward the opposite edge.

GitHub API metadata checked at capture time reports 237 stars, 10 forks, MIT licensing, Kotlin as the primary repository language, creation on 2026-07-28, and a repository description of Native blur views for React Native + Expo.

## Progressive blur
ProgressiveBlurView accepts top, bottom, left, or right as the strongest edge. Its documented controls include intensity, a start offset that keeps full strength for part of the view before fading, a system material tint, an optional tint color, and a scroll fallback. The README says it automatically detects the scroll view behind it and fades in as content moves under the edge, matching the visual pattern of a modern scroll-edge blur. When the underlying scroll view moves quickly, scrollFallback can replace the blur with a gradient to reduce visual or processing cost. The supplied post highlights this component as Progressive blur, while the repository README provides the actual API and platform details.

The component is intended to sit above the content and should normally use pointerEvents set to none, so touches pass through to the content below.

## BlurView
BlurView exposes a general intensity value, a system material tint or custom tint color, a blurEnabled switch, and uniform or per-corner radii. On Android, the README adds controls for blur-radius mapping, explicit radius, downsampling, the number of blur passes, and whether the backdrop should update continuously. These controls allow developers to trade softness and visual quality against rendering cost. Setting autoUpdate to false can freeze the backdrop when the content is static.

## GaussianBlurView
GaussianBlurView applies a Gaussian blur to its own child content. Its blur radius is expressed in points on iOS and density-independent pixels on Android. The opaque option controls whether the blur fades at its edges or remains solid. The README requires Android 12, API 31 or later, for this component.

## Platforms and setup
The package supports iOS 13 and later. BlurView is documented for all supported Android versions, while GaussianBlurView requires Android 12 or later. Web is not supported, and the components throw rather than provide a web fallback.

The package includes native code, so it requires an Expo development build or a bare workflow. Expo Go is not supported. The documented setup uses expo install followed by expo prebuild.

## License and evidence boundary
The repository README and GitHub API metadata were inspected directly. The repository was not installed, and no iOS or Android build was run. The Android preview linked by the repository was not independently benchmarked or inspected frame by frame. Claims about smoothness, automatic scroll detection, and the benefit of the gradient fallback remain documentation claims in this capture.

## Sources
- https://github.com/rit3zh/expo-backdrop
- Existing placeholder: src-2026-07-28-005
- Related but separate project: https://github.com/rit3zh/expo-progressive-blur
