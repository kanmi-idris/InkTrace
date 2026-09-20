---
title: "expo-infinite-media npm package"
kind: paste
captured_at: "2026-09-20 16:26"
tags: [expo, react-native, media, npm, video, caching, preloading, avfoundation, media3]
source_url: "https://www.npmjs.com/package/@rbayuokt/expo-infinite-media"
status: inbox
---

# expo-infinite-media npm package

NPM: https://www.npmjs.com/package/@rbayuokt/expo-infinite-media

Repository: https://github.com/rbayuokt/expo-infinite-media

Package: `@rbayuokt/expo-infinite-media`

## Verified package metadata

The package repository declares version `0.1.0`, MIT licensing, and describes the package as a native paged media feed for Expo and React Native CLI supporting mixed videos and images, vertical or horizontal paging, pooled players, predictive preloading, and bounded caching.

The implementation uses AVFoundation on iOS and Media3 on Android. The repository states that playback, player management, visibility decisions, preloading, and cache management run natively rather than depending on the JavaScript thread.

## Requirements

- Expo SDK 55
- React Native 0.83 with New Architecture
- iOS 15.1+
- Android API 24+
- Web is not supported
- Expo Go is not supported because this is a native module; a development build is required

Install in Expo:

```bash
npx expo install @rbayuokt/expo-infinite-media
npx expo prebuild
```

For React Native CLI, the README instructs users to add Expo Modules first, then install the package and pods.

## Architecture and behavior

According to the repository README:

- A small native player pool serves feeds of arbitrary length.
- The next video is prepared before navigation reaches it.
- Only one video plays and owns audio at a time.
- Downloads for media that the user scrolls past are cancelled rather than blindly completing.
- Video and image caches have bounded budgets and LRU-style eviction behavior.
- Current playback takes priority over speculative preloading.
- The native side directly observes scroll state and controls playback transitions.
- JavaScript primarily provides the item list, overlays, and event handling.

Default caching described in the README is 500 MB for video and 200 MB for images.

The preload policy adapts based on scroll direction/speed, current buffer health, network state, memory pressure, thermal state, and device tier.

## Scrubbing

An optional scrubber uses React Native Reanimated and Gesture Handler. The README says dragging and playhead animation stay on the UI thread, while native playback progress is bridged at a lower frequency.

## Repository-published benchmark notes

The README includes real-device stress tests over a 1200-post feed. It reports two pooled players and five mounted surfaces rather than one player per list item. It also reports cold/warm cache measurements on an OPPO Reno5 F and iPhone 11 Pro.

These are project-published benchmark results and should be treated as the repository author's measurements rather than independent verification.

## Notable production guidance from the README

- Use stable item IDs.
- Use `cacheKey` for URLs that change, such as signed URLs.
- Supply posters for videos.
- Prefer fast-start MP4 for progressive playback.
- Disable inactive feeds with `active={false}`.
- Keep overlays lightweight/memoized.
- Handle recoverable errors explicitly.
- Profile release builds on real lower-end devices before shipping.

## Retrieval note

The npm website itself was blocked by the direct web retriever. The package was located through GitHub and its README and package.json were retrieved directly from `rbayuokt/expo-infinite-media`, providing the package metadata and implementation details above.
