---
title: "mobilecode: A Fork of opencode That Embeds Live iOS Simulator and Android Emulator Previews"
kind: "paste"
captured_at: "2026-09-06 06:24"
tags: ["mobilecode", "opencode", "ai-coding-agent", "ios-simulator", "android-emulator", "serve-avd", "serve-sim", "mobile-development", "xcode", "gradle", "mit"]
source_url: "https://github.com/hsandhu/mobilecode"
status: "inbox"
---

# mobilecode: A Fork of opencode That Embeds Live iOS Simulator and Android Emulator Previews

## Source overview
mobilecode is an open-source fork of opencode (the AI coding agent by thdxr/anomalyco), created by Rob Sandhu (hsandhu), specifically adapted for mobile app development. When it detects an iOS or Android project in the working session, it can run a live simulator or emulator preview server and render the running device directly inside the coding-agent interface, alongside the chat session, rather than requiring the developer to switch to a separate window for Xcode's Simulator or Android Studio's emulator.

GitHub API metadata checked at capture time reports mobilecode itself at 47 stars, 6 forks, MIT license, TypeScript as the primary language, and a creation date of 2026-09-05 (the same day as this capture, indicating a brand-new release). The two underlying streaming components it depends on are separately maintained projects with their own metadata: serve-avd (Android emulator streaming, also by hsandhu) shows 9 stars and an Apache-2.0 license; serve-sim (iOS Simulator streaming, by Evan Bacon/EvanBacon) shows 2,756 stars and an Apache-2.0 license, indicating serve-sim is a substantially more established project that mobilecode is building on top of.

## Platform detection and streaming
For iOS, mobilecode detects Xcode projects and workspaces, CocoaPods setups, and Expo apps, then runs serve-sim to embed a live iOS Simulator stream. For Android, it detects Gradle projects and Expo apps, then runs serve-avd to embed a live Android Emulator stream. Everything else about opencode is preserved unchanged per the README: the terminal UI, desktop app, web UI, model-provider flexibility, MCP integration, plugins, and skills.

When a session is opened inside a detected mobile project, a device pane is documented as opening automatically alongside the chat, starting the appropriate preview server (`npx serve-sim` or `npx serve-avd`) on the machine running the mobilecode server, with Start, Stop, Reload, and Open-in-browser controls. Project detection is documented as searching up to two directory levels below the session root, so a mobile app nested in a subfolder of a larger repository is still found.

## Build and run integration
The session interface is documented as including an Xcode-style run control per detected platform, with build status shown alongside it. A documented 'Play' action builds the native project (via `xcodebuild` against the first shared scheme on iOS, or `./gradlew :<module>:assembleDebug` on Android), installs the result on the running simulator/emulator (`simctl install`/`simctl launch` on iOS, `adb install -r -g` plus an explicit launch intent on Android), and reports build status through documented stages (Building, Installing, Launching, Running), surfacing the first compiler or Gradle error inline with the full log available in the device pane. A 'Stop' action either cancels an in-flight build or terminates the running app. The same start/stop/run controls are also documented as available over a local HTTP API (`/api/device-preview/*` endpoints).

## Requirements
Documented requirements are macOS with Xcode for iOS support (serve-sim itself needs Node 20 or newer), and the Android SDK platform-tools plus at least one configured AVD for Android support, with a JDK version matching whatever the target project's Gradle version requires. The Android package name is documented as being read from the built APK via `aapt2` when the Android SDK build-tools are installed.

## Installation and configuration
The README documents an install script (fetched and run via curl, placing the binary in `~/.mobilecode/bin` and adding it to the shell PATH) as well as a from-source path using Bun. Because mobilecode is a fork rather than a wrapper, it is documented as preserving opencode's existing configuration format and file locations verbatim: an existing `opencode.json`, provider credentials, installed plugins, and skills are described as working unchanged, with configuration living in `~/.config/opencode`, data in `~/.local/share/opencode`, and environment variables retaining the `OPENCODE_` prefix.

The README also documents a one-command macOS desktop app build (`bun run build:macos`) that installs dependencies, bundles the server, builds an Electron-based desktop app, and produces an app bundle plus `.dmg` and `.zip` installers; the default build is unsigned (requiring a one-time manual 'right-click, Open' step on macOS), with an optional `--sign` flag plus Apple Developer ID/notarization credentials documented for producing a signed and notarized build.

## License
mobilecode is MIT licensed, explicitly stated in the README as inheriting and preserving the MIT license of the upstream opencode project it forks (copyright opencode, 2025). Its two integrated preview-streaming dependencies (serve-avd and serve-sim) are separately licensed under Apache-2.0.

## Evidence boundary
The GitHub README was fetched and read directly for this capture, and GitHub API metadata for mobilecode and its two dependency repositories (serve-avd, serve-sim) was checked separately. No package was installed, no simulator or emulator preview was started, and no mobile project build was run during this capture.

## Sources
- https://github.com/hsandhu/mobilecode
- https://github.com/hsandhu/serve-avd
- https://github.com/EvanBacon/serve-sim
- https://github.com/anomalyco/opencode (upstream project mobilecode forks)
