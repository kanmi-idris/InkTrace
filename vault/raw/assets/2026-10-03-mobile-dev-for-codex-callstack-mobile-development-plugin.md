---
title: "Mobile Dev for Codex: Callstack mobile development plugin"
kind: "repository capture"
tags: ["codex", "plugin", "mobile-development", "react-native", "expo", "ios", "android", "simulator", "device-inspection", "mcp", "performance", "telemetry", "sentry"]
source_url: "https://github.com/callstackincubator/codex-mobile-dev-plugin"
status: "inbox"
---

# Mobile Dev for Codex: Callstack mobile development plugin

## Repository summary
The public `callstackincubator/codex-mobile-dev-plugin` repository describes Mobile Dev as a Codex plugin for iOS and Android development. It supports Expo, React Native, SwiftUI, and other native mobile projects.

## Capabilities described by the README
The plugin can show iOS simulators, Android emulators, and connected physical devices beside the Codex chat. It provides device controls, accessibility inspection, screen and element annotations, native and Metro logs, and performance tools for CPU, memory, display FPS, recording, and comparison. Android recordings include frame-pacing and jank statistics.

The README states that the app project's own tools build, install, and launch the app. The plugin supplies the device panel, inspection, logs, and performance tools.

## Requirements and privacy
The prebuilt plugin targets Codex desktop on an Apple Silicon Mac. iOS simulators require Xcode 26 or later. Physical iPhones and iPads require Xcode 27 or later, device pairing, and Developer Mode. Android needs the SDK platform tools, emulator, or a configured device.

The plugin reports errors, crashes, and aggregate performance data to Sentry. The README says it excludes app logs, screenshots, input content, tool payloads, and device performance recordings. It documents `MOBILE_DEV_TELEMETRY=off` as an opt-out.

## Installation note and evidence limits
The README gives a Codex plugin marketplace install command and says no local plugin build or `npm install` is needed. It also says GitHub read access is required while the repository is private. At inspection, GitHub marked the repository Public, so that private-repository note may be stale.

These are repository claims. I did not install or run the plugin. The prebuilt Apple Silicon requirement may limit use on Intel Macs.
