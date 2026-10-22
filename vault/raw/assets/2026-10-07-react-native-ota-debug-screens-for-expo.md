---
title: "React Native OTA Debug Screens for Expo"
kind: "project capture"
author: "Colin Hunt"
source_url: "https://github.com/colin-hunt/react-native-ota-debug-screens"
origin_url: "https://t.co/ndD9CvciW3"
tags: ["Expo", "React-Native", "expo-updates", "EAS", "OTA-updates", "debug-tools", "MIT", "early-stage"]
---

# react-native-ota-debug-screens

## Project description
The README describes drop-in debug screens for over-the-air updates in Expo apps. The screens show the running bundle, channel, runtime version, and update details. They can check, download, and reload an update, switch among configured channels, or deliberately crash an app to test crash reporting.

## Requirements and behavior
- The project says it requires Expo SDK 56 or newer, `expo-updates`, and an EAS-built app. It does not work in a React Native app without Expo.
- It uses `@expo/ui` and `expo-clipboard`. The README says these native modules can change the app fingerprint and require a new build when added.
- Channel switching changes the `expo-channel-name` request header. The build must already have a channel configured in `eas.json`. A channel only serves updates for the runtime version it supports.
- Only channels listed in the `channels` prop are available by default. `allowCustomChannel` enables arbitrary channel names; the README says to leave it off in builds held by external testers.
- The deliberate crash option is `showCrashTest`. The screens disable update actions when Expo Updates is unavailable or using a development server.

## License and repository status
The README lists an MIT license. At inspection, GitHub showed one commit, no published releases, and no GitHub packages. I did not check the npm registry or install the package.

## Evidence limits
I inspected the GitHub README and repository page. I did not build an app, publish an OTA update, switch channels, or test the crash feature. Treat the behavior and requirements as maintainer documentation, not independent test results.
