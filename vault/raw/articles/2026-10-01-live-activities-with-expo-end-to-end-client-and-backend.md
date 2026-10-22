---
title: "Live Activities with Expo, End to End: Client and Backend"
kind: "article"
captured_at: "2026-10-01 16:38"
tags: ["expo", "react-native", "live-activities", "activitykit", "swiftui", "expo-widgets", "apns", "dynamic-island", "backend", "push-notifications", "progress-ui"]
source_url: "https://expo.dev/blog/live-activities-with-expo-end-to-end-client-and-backend"
status: "inbox"
---

# Live Activities with Expo, End to End: Client and Backend

Author: Wahab Balogun, guest author. Published October 1, 2026.

## Article summary
The article demonstrates an end-to-end iOS Live Activity for server-side receipt processing. The activity displays states such as received, processing, completed, and failed on the Lock Screen and Dynamic Island. The article covers Expo client setup, widget UI, push-token registration, backend state mapping, and APNs push-to-start and update flows.

## UI implementation
The widget is a React component using `@expo/ui/swift-ui`; `expo-widgets` compiles it to SwiftUI. The article describes one content-state schema with a stage, progress value, labels, and optional stage-specific content. It uses that shared state to render Lock Screen, compact and minimal Dynamic Island, and expanded regions.

The article treats the activity as a progress surface for work that continues after the app moves to the background. The receipt example progresses from receipt received, through processing, to a summary or failure with a deep link.

## Client and backend flow
The example supports local start or push-to-start. The article states that push-to-start requires iOS 17.2 or later. ActivityKit issues a per-activity push token. The client registers it with the backend, which maps domain events to the fixed widget schema and sends updates through APNs. The article recommends handling token rotation, idempotent registration, and stale-token deletion.

## Evidence limits
This is a guest-author implementation article, not an Expo API specification. The page content and code examples were inspected on 2026-10-01. I did not run the sample, test it on a device, or independently verify the production architecture.

## Related InkTrace sources
- `src-2026-04-12-049` covers Voltra, a JSX-based React Native Live Activity library.
- `src-2026-09-01-001` covers continued background tasks that surface through a Live Activity on iOS.

## Relevance
This source provides both implementation guidance and a useful UI-state pattern for ongoing tasks. It is more specific than a visual gallery and should be treated as an engineering case study.
