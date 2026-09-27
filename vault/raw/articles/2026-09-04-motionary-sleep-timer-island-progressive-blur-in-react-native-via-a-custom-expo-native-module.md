---
title: "Motionary Sleep Timer Island: Progressive Blur in React Native via a Custom Expo Native Module"
kind: "paste"
captured_at: "2026-09-04 22:59"
tags: ["react-native", "expo", "reanimated", "motionary", "dynamic-island", "expo-modules", "swift", "progressive-blur", "paid-component", "ios"]
source_url: "https://motionary.dev/animations/sleep-timer-island"
status: "inbox"
---

# Motionary Sleep Timer Island: Progressive Blur in React Native via a Custom Expo Native Module

## Relation to existing source
This product is by mahdidavoodi7 (mehdi_made), sold through Motionary, the same creator and platform already referenced in the earlier react-native-continued-task capture (src-2026-09-01-001), where the author described react-native-continued-task as having grown out of separate Motionary work. This record is a new, distinct product page (a paid animation 'drop'), not a duplicate.

## What it is
Sleep Timer Island is a paid React Native component/animation ($4 standalone, or included in a $79 lifetime-access bundle covering the seller's full catalog) recreating iOS's Dynamic Island sleep-timer interaction: a horizontal ruler-style slider for picking a 0-120 minute duration, with a glowing trail that follows the drag pointer, and a spring-open morph from a small pill (sitting exactly over the physical sensor cutout) into the full sleep-timer island UI. The stated intended use case is dropping it into a music, podcast, or sleep-focused app that needs a timer picker.

## What's included in the purchase
Per the site's own file listing: TypeScript source files (a main SleepTimerIsland component, a SleepPage screen, and a Backdrop component), a specification file with dimension and color values reportedly measured from a recording of the real iOS feature, a custom Expo native module (written in Swift) specifically for the progressive-blur edge fade on the ruler, a demo app entry point, and an additional generic multi-activity 'island shell' component with its own demo screen. The package is listed at about 0.21 MB.

## Progressive blur implementation (the specific technical claim in the user's post)
The author's own product-page description states that the ruler's blurred edge fade is implemented through a local Expo Modules Swift view wrapping a native UIKit variable blur effect, which is why this specific module is described as iOS-only (stated minimum iOS 16.4) and as requiring a development build rather than working in Expo Go. This matches the framing in the user's post: progressive blur brought to React Native via a custom Expo native module, built specifically to solve a rendering need for this component (a smooth blur gradient rather than a single uniform blur intensity across the whole edge).

## Other implementation details described on the product page
The page describes several additional implementation choices, presented here as the author's own stated design rather than independently verified: all interactive state is kept in Reanimated 4 shared values on the UI thread; a pan gesture drives the selected minute value using a rubber-band formula intended to mimic native scroll-view overscroll behavior, handing off to a decay-based release animation with a final snap to the nearest whole minute; a frame callback low-passes drag velocity to drive a glow/heat effect that tracks the pointer and fades out over a stated 0.4 seconds once movement stops; the minute-tick marks are implemented as a reused pool of 46 views moved via worklets rather than being recreated per frame; the live numeric readout is described as being written via setNativeProps on a text input each frame, with the stated rationale that Fabric can otherwise drop some rapid text updates; and the blur shown during the open/close morph animation is described as a fixed-intensity blur view that is crossfaded via opacity rather than having its blur intensity itself animated, with the author stating that animating intensity directly caused dropped UI frames. The page states this was tested against Expo SDK 56, React Native 0.85, and Reanimated 4.3.

## Access and licensing
This is a commercial product, not an open-source release: it is sold as a $4 individual purchase or bundled into an advertised $79 lifetime-access catalog pass (the page notes a price increase to $99 after a stated promotional window). A 'View source on GitHub' link on the page points to the author's general GitHub profile (github.com/mahdidavoodi7) rather than to a dedicated public repository for this specific component, consistent with the source code being gated behind purchase rather than freely available. No purchase was made and no source file was obtained during this capture.

## Evidence boundary
The live product page was inspected directly via the browser accessibility tree. All implementation and design claims (the rubber-band gesture formula, the frame-callback-driven glow effect, the setNativeProps text-update workaround, the fixed-intensity-blur-with-opacity-crossfade approach, and the stated tested versions) are the seller's own description of their own product and were not independently verified by inspecting or running actual source code in this capture, since the code is paywalled.

## Sources
- https://motionary.dev/animations/sleep-timer-island
- https://motionary.dev/ (Motionary platform, already referenced via src-2026-09-01-001)
- https://github.com/mahdidavoodi7 (author profile)
