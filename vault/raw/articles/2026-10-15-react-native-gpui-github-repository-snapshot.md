# react-native-gpui GitHub repository snapshot

Captured: 2026-10-15
Source URL: https://github.com/natew/react-native-gpui
Inspected branch: `main`
Latest commit shown: `b225454`, dated 2026-09-27
Repository state shown: 49 stars, 0 forks, 410 commits, 6 branches, no tags, no published GitHub releases, and no published GitHub packages.

## Root README

The README describes `react-native-gpui` as a React Native component surface rendered by GPUI, Zed's GPU-accelerated Rust UI framework. It says a `react-reconciler` drives a GPUI window on Metal. It explicitly says there is no browser, Electron, or mobile host. It lists `npm install react-native-gpui` and says the target is currently macOS arm64. The license is MIT.

## Current TypeScript package documentation

`ts/README.md` describes a React tree reconciled into a GPUI window, with a Rust service and JavaScriptCore. It lists a typed React Native-like component surface, a native WKWebView hybrid, development tooling, and conformance commands. Its status section calls macOS with Metal the validated target and says other GPUI backends are an architectural possibility.

`ts/package.json` reports version `0.1.39` and limits the package to `darwin` and `arm64`. It lists React 19 as a peer dependency and includes React Native Reanimated 4.3.0 and Worklets 0.8.1 among development dependencies.

## Other repository document

The root `react-native-gpui.md` describes a Fabric C++ renderer, a C++ shim, and a Rust platform delegate. It contains an initial seven-day implementation plan. This architecture description differs from the current TypeScript README. I did not resolve whether that document is stale.

## Evidence limits

These are repository statements, not independent verification. I did not install the package, build it, or run its tests or performance commands. The npm registry listing is recorded separately as [src-2026-10-15-005].
