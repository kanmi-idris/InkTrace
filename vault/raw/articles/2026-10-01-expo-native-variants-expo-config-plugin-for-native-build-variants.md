---
title: "expo-native-variants: Expo config plugin for native build variants"
kind: "paste"
captured_at: "2026-10-01 16:08"
tags: ["expo", "react-native", "config-plugin", "build-variants", "xcode", "android-studio", "app-identifiers", "icons"]
source_url: "https://github.com/chrispader/expo-native-variants"
status: "inbox"
---

# expo-native-variants: Expo config plugin for native build variants

## Repository observations
Checked on 2026-10-01. The repository describes a community-maintained Expo config plugin for generating native app variants in one Expo prebuild. It creates Xcode schemes and Android product flavors for development, preview, and production builds. Selecting a generated variant does not require another prebuild. Native dependency or configuration changes do require a new prebuild.

The plugin supports separate application identifiers, display names, URL schemes, and icons per variant. The README says it targets Expo SDK 57 and is an early release. It describes one iOS application target, optional configured extension targets, and one Android flavor dimension.

The repository documents an important identifier detail: debug and release builds of the same variant share an application identifier, so installing one replaces the other. I did not install the plugin or run its validation steps.

## User-provided announcement
The user supplied this announcement text: “I made expo-native-variants, an Expo config plugin. It sets up Xcode schemes and Android Studio flavors. Prebuild your app once per native change, then build dev, preview or prod without running it again. Separate app IDs, names, URL schemes and icons.” The original post URL and author were not supplied.

## Evidence limits
The GitHub repository is owned by the account chrispader. This does not confirm the author of the supplied announcement. Feature and compatibility details above come from the repository README. The repository links to separate compatibility and validation documents, which were not reviewed here.

## Relevance
This is an Expo build-configuration and release-engineering reference. It does not provide visual UI examples.
