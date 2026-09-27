---
title: "react-native-better-maps: A Nitro-Native MapView for Apple MapKit and Google Maps"
kind: "paste"
captured_at: "2026-09-19 07:45"
tags: ["react-native", "maps", "nitro-modules", "new-architecture", "apple-mapkit", "google-maps", "geojson", "clustering", "expo", "typescript", "mit"]
source_url: "https://github.com/gmi-software/react-native-better-maps"
status: "inbox"
---

# react-native-better-maps: A Nitro-Native MapView for Apple MapKit and Google Maps

## Relation to existing source
This vault already has a placeholder-only record for react-native-better-clustering (src-2026-06-28-004), described in its own title as C++ marker clustering via Nitro for react-native-maps — a companion/clustering add-on for the older, bridge-based react-native-maps library, but that record was never filled in beyond boilerplate. react-native-better-maps, captured here, is a distinct and more comprehensive project by the same gmi-software organization: a full MapView replacement built exclusively for React Native's New Architecture (Fabric + TurboModules) via Nitro Modules, rather than an add-on for the older library. The two are related in spirit (both target map performance on Nitro) but are separate packages, and this record does not assume the earlier placeholder describes the same codebase.

GitHub API metadata checked at capture time reports 94 stars, 8 forks, MIT license, TypeScript as the primary language, and a repository creation date of 2026-06-25.

## What it is
react-native-better-maps is a typed MapView component wrapping native Apple MapKit (iOS) and Google Maps SDK (iOS and Android) behind one unified React API, built entirely on Nitro Modules and JSI rather than React Native's older bridge, and requiring the New Architecture with no bridge-based fallback. The README frames its main comparison point as marker-clustering performance against react-native-maps combined with a separate JS-side clustering library (react-native-clusterer), showing native MapKit- or Google Maps-backed clustering handled by the map provider itself rather than clustering logic computed in JavaScript.

## Requirements and platform support
Documented minimums: React Native 0.78+ with the New Architecture enabled, react-native-nitro-modules 0.35.0+, iOS 16.0+, Android minSdkVersion 24+, and Expo SDK 56+ (verified through SDK 57) using a development build, since Expo Go cannot load native Nitro modules. Default map providers are Apple Maps on iOS and Google Maps on Android, with iOS additionally able to opt into the Google Maps SDK; Android only supports the Google provider. Two provider names, `openstreetmap` and `mapbox`, are documented as reserved in the public type for future native implementations but not yet functional; selecting them throws before a map view is created. Custom React Native marker child views (embedding an arbitrary `<View>` as a marker) are explicitly not supported; only bitmap marker images are.

## Core capabilities
- A unified `MapView` component with markers (supporting title/subtitle callouts and drag), polylines, polygons, circles, and GeoJSON `FeatureCollection` overlays converted to that same overlay pipeline in JavaScript (no native GeoJSON parser).
- Native handling of provider-owned points of interest (restaurants, parks, schools, etc. surfaced by Apple Maps or Google Maps themselves) through a dedicated `onPoiPress` event, kept distinct from app-defined marker presses.
- Declarative camera/region props plus an imperative camera-animation API via a ref.
- Native marker clustering for large point sets, with configurable native 'entering animations' for both individual markers and clusters (fade, fade-scale, or falling back to each platform's own default behavior), including automatic respect for the OS-level Reduced Motion accessibility setting.
- Provider-aware TypeScript: a `MapViewPropsForProvider<P>` type narrows which props are valid for a given provider at the type level (for example, a scale-control prop is accepted for Apple Maps but rejected for Google Maps, since the Google Maps SDK has no native scale control).
- An Expo config plugin that writes the required Google Maps API keys and location-permission strings into native iOS/Android project files during `expo prebuild`, removing a category of manual native configuration.
- A documented re-render optimization: because Nitro's underlying JSI bridge compares props by reference identity, the library does its own field-by-field comparison of overlay arrays (markers, polylines, polygons, circles) and animation config objects before crossing into native code, so passing a freshly rebuilt-but-content-identical array from a parent re-render does not trigger unnecessary native prop updates; the README is explicit that mutating a coordinate or descriptor object in place is not detected by this comparison, and a new object must be constructed instead.

## Migration notes from react-native-maps
The README documents direct prop-name mappings for markers (image, anchor, centerOffset, rotation, flat, opacity all map 1:1; custom child-view markers have no equivalent and must switch to bitmap images) and for GeoJSON overlays (color becomes markerColor; a custom markerComponent and lineDashPattern have no equivalent; onPress on an overlay now receives the underlying GeoJSON Feature directly; polygon holes are supported).

## Capability matrix and current gaps
The README's own capability matrix marks nearly all core features (region/camera control, gestures, user location, markers/overlays, custom marker images, callouts/dragging, overlay press events, GeoJSON, clustering) as supported across all three provider/platform combinations (Apple iOS, Google iOS, Google Android). Documented gaps: scale control is Apple-only (unsupported on either Google Maps configuration, since the SDK itself has no equivalent), Google Map ID styling is Google-only (unsupported on Apple Maps), and custom map styling differs by provider (a curated subset on iOS 16+'s Apple Maps versus full Google Maps JSON styles on the Google provider).

## License
MIT.

## Evidence boundary
The GitHub README was fetched and read directly for this capture, and GitHub API repository metadata was checked separately. No package was installed, no Expo config plugin was applied, and no map was rendered on either platform during this capture. The clustering-performance comparison against react-native-maps plus react-native-clusterer is illustrated in the README via linked GIF recordings rather than numeric benchmarks, and was not independently reproduced in this capture.

## Sources
- https://github.com/gmi-software/react-native-better-maps
- https://github.com/gmi-software/react-native-better-maps/blob/main/docs/architecture.md
- https://github.com/gmi-software/react-native-better-maps/blob/main/docs/roadmap.md
- Related, still-unfilled placeholder in this vault: src-2026-06-28-004 (react-native-better-clustering, a separate clustering add-on for react-native-maps)
