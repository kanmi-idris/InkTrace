---
title: react-native-better-clustering — C++ Marker Clustering via Nitro for react-native-maps
kind: paste
captured_at: 2026-06-28 03:42
tags: [react-native, react-native-maps, clustering, nitro-modules, new-architecture, react-native-worklets]
source_url: 
status: inbox
---

# react-native-better-clustering — C++ Marker Clustering via Nitro for react-native-maps

react-native-better-clustering (gmi-software) — A faster drop-in replacement for react-native-map-clustering. Same API, same react-native-maps workflow, but clustering runs in C++ via Nitro instead of JavaScript on the RN bridge. 77 stars, 2 forks, 5 commits, MIT license. Built with Nitro Modules for high-performance native clustering. TypeScript (66.2%) + C++ (22.6%) + JavaScript (5.1%) + Kotlin (2.4%) + Ruby (2.0%) + Swift (1.2%).

Migration: just change import from 'react-native-map-clustering' to 'react-native-better-clustering'. Everything else stays the same.

Supported platforms: iOS, Android, Web. Requires React Native 0.78+ with New Architecture. Does not work in Expo Go — requires dev build.

Install: npm install react-native-better-clustering react-native-nitro-modules react-native-maps react-native-reanimated react-native-worklets. Plus Worklets Babel plugin.

Key props: radius (~6% screen width), minPoints (2), minZoom/maxZoom, clusteringEnabled, spiralEnabled, clusterColor/clusterTextColor, animationEnabled, onClusterPress, renderCluster (custom cluster UI), preserveClusterPressBehavior, superClusterRef, clusterUpdateIntervalMs (100ms default).

Per-marker opt-out via <Marker cluster={false} />.

Fixes over react-native-map-clustering:
- Crash on NaN zoom — guarded with finite zoom fallback
- Map size can't be 0 on Android — layout-aware fitToCoordinates
- maxZoom/spiralEnabled ignored — implemented
- Unstable clusters on zoom — stable cluster references
- Per-marker cluster={false} — supported

Advanced APIs (subpath exports):
- hooks: useClusterer (own the MapView)
- clusterer: Clusterer (declarative renderItem)
- engine: Supercluster, createClusterEngine, geometry helpers
- geojson: GeoJSON types and conversion
- utils: packPoints, distance helpers

Roadmap:
- Tier 1 (near term): image-based cluster bubbles, caching, marker pooling — 3-5x FPS improvement at mid zoom
- Tier 2 (months): native clustered map view rendering annotations in single native pass instead of one React <Marker> per cluster — 1000+ markers at ~60 FPS

Has AGENTS.md, CLAUDE.md, CONTEXT.md for AI coding agents.
