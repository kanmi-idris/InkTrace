---
title: "Native crash reporting in Expo EAS Observe"
kind: "article"
author: "Kadi Kraman / Expo"
source_url: "https://expo.dev/changelog/native-crash-reporting-in-eas-observe"
origin_url: "https://t.co/Ocp9NlcTw4"
related_url: "https://docs.expo.dev/eas/observe/errors/"
published_at: "2026-10-07"
tags: ["Expo", "EAS-Observe", "expo-observe", "native-crashes", "error-reporting", "Android", "iOS", "preview", "AI-handoff"]
---

# Native crash reporting in Expo EAS Observe

## Announcement
Expo says EAS Observe now records native crashes alongside JavaScript errors on Android and iOS. The changelog says native crash reporting requires SDK 57 and `expo-observe` 57.0.21 or later. Error reporting is in preview.

## Documented platform coverage
- Android: uncaught Java and Kotlin exceptions; on Android 11 and later, crash records kept by the operating system, including some native crashes.
- iOS: MetricKit crash reports, including Mach exceptions and Unix signals. Uncaught Objective-C and Swift exceptions are included on iOS 17 and later.
- Native crash reports are stored on-device and sent on the app's next launch.
- tvOS and the iOS Simulator are not supported for native crash reporting. ANRs and out-of-memory terminations are not recorded.

## Investigation and source maps
Crashes appear in the EAS Observe Errors page with JavaScript errors. The dashboard can show stack traces, session records before the crash, and breakdowns by app version, OS, device, and country.

Expo documents `uploadSourceMaps: true` for EAS Build. It says the upload removes `sourcesContent`, but keeps file names and position mappings. Local EAS builds do not upload source maps. Source maps for EAS Update are not available yet. Native symbolication uploads, such as dSYMs and ProGuard mappings, are also not available yet.

The changelog describes a "Hand off to AI" action that prepares a prompt with crash details and context for Claude Code or Codex. The docs say developers can send it to those agents or copy it elsewhere. Review the prompt before sending it to an external model.

## Privacy and evidence limits
The docs warn that reported errors are visible in the dashboard and sent off-device. They tell developers to avoid personally identifiable information in error messages. I inspected the announcement and official docs. I did not enable EAS Observe, upload source maps, or test crash reporting. These are Expo documentation statements, not independent test results.
