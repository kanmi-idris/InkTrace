# react-native-capture-view

Source ID: src-2026-04-16-001
Canonical URL: https://github.com/radko93/react-native-capture-view
Resource Type: repository
Host: github.com
Mention Count: 1
Original URLs: https://github.com/radko93/react-native-capture-view

## Page Description
Capture a React Native view, screen, or `ScrollView` as an image on iOS and Android. The library is positioned as a New Architecture and Fabric-compatible alternative for view-shot and screenshot capture workflows.

## Captured Text Excerpt
The repository README describes `react-native-capture-view` as a React Native library for capturing a specific view subtree, the currently visible screen, or the full contents of a plain `ScrollView` as an image on iOS and Android.

The README presents three primary entry points:
- `CaptureView` for capturing a rendered view subtree via a ref.
- `CaptureScrollView` for capturing the full content of a plain `ScrollView`.
- `captureScreen()` for capturing the currently visible screen.

The stated requirements are React Native 0.82 or newer, the New Architecture enabled, iOS and Android support, and Expo compatibility through development builds or EAS builds rather than Expo Go.

The README documents PNG and JPG output, temp-file and base64 output modes, and a set of platform-specific error codes for failure cases such as missing windows, invalid sizes, oversized bitmaps, encoding failure, temp-file writes, or out-of-memory conditions.

The listed limitations include compositor-based or externally rendered surfaces such as `SurfaceView`, maps, `WKWebView` or `WebView`, system overlays outside the view hierarchy, and full-content virtualization limits for `FlatList` or `SectionList`.
