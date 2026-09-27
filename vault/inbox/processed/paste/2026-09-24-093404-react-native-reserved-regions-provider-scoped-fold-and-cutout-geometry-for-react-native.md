---
title: "react-native-reserved-regions: Provider-Scoped Fold and Cutout Geometry for React Native"
kind: "paste"
captured_at: "2026-09-24 09:34"
tags: ["react-native", "appandflow", "reserved-regions", "iphone-duo", "foldable", "safe-area", "ios", "android", "fabric", "new-architecture", "jetpack-windowmanager", "mit"]
source_url: "https://appandflow.github.io/react-native-reserved-regions/docs/api/"
status: "inbox"
---

# react-native-reserved-regions: Provider-Scoped Fold and Cutout Geometry for React Native

## What it is
react-native-reserved-regions is an App&Flow library that exposes display divisions and occlusions to React Native applications. It is positioned as a sister library to react-native-safe-area-context, but it solves a different layout problem: safe-area insets describe edges that content should avoid, while reserved regions describe obstacles inside an otherwise usable area, such as a fold, hinge, or camera cutout.

GitHub API metadata checked at capture time reports 5 stars, 0 forks, MIT licensing, JavaScript as the primary repository language, repository creation on 2026-09-20, and an update on 2026-09-24.

## API model
ReservedRegionsProvider is a native view that defines the coordinate space for measurements and supplies its active regions to descendants. It accepts normal React Native View props and should cover the content area whose geometry matters. A nested provider creates a separate coordinate space and replaces the context for its descendants. This provider model is necessary because the same physical fold has different local coordinates in a full-screen view, an inset panel, or a smaller content box.

useReservedRegions returns a read-only array of regions from the nearest provider. It initially returns an empty array. useReservedRegionsReady reports whether the nearest provider has completed its first measurement. It becomes true even when the first result is empty, and it does not mean that the device supports folding hardware or that the result arrived before the first visible frame. ReservedRegionsGate can render null until the first measurement completes, then render its children. It adds no native view and does not suspend.

## Region types
The public ReservedRegion type is a tagged union:

- division: a seam, hinge, or fold that divides the usable display. It contains a frame and an occludesContent boolean.
- occlusion: an area where content is hidden, such as a cutout. It contains a frame but does not need the boolean because the region itself represents hidden content.

Frames use logical points relative to the nearest provider's top-left corner. A frame can extend beyond provider edges. Division frames can have zero width or zero height for vertical or horizontal folds. The application receives geometry; it must decide how to reposition, split, or avoid its own UI.

The README documents a practical layout pattern: detect a vertical division, allocate the width before the fold to one pane, leave the fold width empty, and allocate the remaining width to a second pane. The library does not implement that repositioning itself.

## Native data sources
On iOS, the native implementation queries UIKit reserved division and occlusion regions from the provider view. The library guards the calls by SDK and runtime availability. Building with an SDK older than iOS 27.1 compiles the reserved-region observation out, and older runtimes return a known empty list. The documented iOS target is 15.1 or newer, with the reserved-region feature requiring the iOS 27.1 SDK and runtime.

On Android, the library observes Jetpack WindowManager FoldingFeature values and display-cutout rectangles. A separating or fully occluding fold becomes a division, and a full occlusion sets occludesContent to true. Display cutouts become occlusion regions. Android 7.0/API 24 or newer is supported, but folding data requires a device supported by Jetpack WindowManager.

Apple's own iPhone Duo guidance describes reserved regions as a way to reposition content away from the folding region and other reserved areas. Apple's Tech Talk distinguishes division regions from occlusion regions and presents them as layout information, which matches this library's type model.

## Measurement behavior
The first measurement requests synchronous delivery when possible. Later updates arrive as regular events. Android measures after Fabric mounting and during relayout, fold changes, and window-inset changes. Scrolling or moving an ancestor does not trigger a new measurement. On iOS, same-frame delivery depends on a React Native change referenced by the project, so readiness is not a universal first-frame guarantee. The performance guide recommends careful provider placement and optional readiness gating.

## Requirements and limitations
The library requires React Native 0.80 or newer with the New Architecture and Fabric. The example uses React Native 0.88.0-rc.1. iOS reserved regions need the iOS 27.1 SDK and runtime. Android links through React Native autolinking. The package is not described as a general safe-area replacement, and safe-area, system-bar, and keyboard insets remain separate concerns.

The related react-native-hinges library exposes posture and angle without a provider because those values do not depend on a child view's coordinate space. The README recommends using both libraries when an interface needs both physical posture data and provider-scoped layout geometry.

## License and evidence boundary
The official API documentation, GitHub README, and Apple's official HIG and Tech Talk references were inspected. I did not install the package, run it on iPhone Duo, use a foldable Android device, or verify first-frame measurement timing. The behavior described here comes from the project documentation and Apple's primary references.

## Sources
- https://appandflow.github.io/react-native-reserved-regions/docs/api/
- https://github.com/appandflow/react-native-reserved-regions
- https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo
- https://developer.apple.com/videos/play/tech-talks/111463/
