---
title: Notification Actions in Expo: Let Users Respond Without Opening Your App
kind: paste
captured_at: 2026-07-12 20:46
tags: [expo, push-notifications, notification-actions, react-native, ios, android, background-task, expo-notifications]
source_url: 
status: inbox
---

# Notification Actions in Expo: Let Users Respond Without Opening Your App

## Notification Actions in Expo

Source: https://codewithbeto.dev/blog/expo-notification-actions
Author: Alberto Moedano (Beto, @betomoedano) — Code with Beto
Published: July 9, 2026
Access: Public

### What it covers
Adding action buttons to Expo notifications so users can respond in the background without opening the app. Pure JS, no native code, no config plugins.

### Three pieces
1. **Notification category** — defines action buttons (registered once at app launch via `setNotificationCategoryAsync`)
2. **Category + data on scheduled notifications** — reference the category, carry payload (e.g. habitId)
3. **Response handler** — runs when user taps the action button

### Key code patterns
- `options: { opensAppToForeground: false }` — key flag for background handling
- Category identifiers must avoid `:` and `-` (silent misbehavior)
- Handle both cold start (`getLastNotificationResponse()`) + foreground listener (`addNotificationResponseReceivedListener`)
- Guard on `actionIdentifier` — distinguish button taps from default notification opens
- Idempotent handlers (e.g. `INSERT OR IGNORE`) — same response can fire twice

### Reliability by app state
- **Foreground/background**: rock solid (listener fires immediately)
- **App killed (iOS)**: headless launch, response via `getLastNotificationResponse()` — tested from Apple Watch
- **App killed (Android)**: less reliable via listener; use `Notifications.registerTaskAsync` + `expo-task-manager` for guaranteed delivery

### Also mentioned
- **QuickPush** — Beto's macOS menu bar tool for testing Expo push notifications
- **Rich Notifications (iOS)** — free lesson on Notification Service Extension via Expo Apple Targets (image in push notifications)
- Code with Beto: learning platform (React Native, React, TS, Git) with courses, Platano template, lifetime access

### Related Sources
- src-2026-06-28-010 (Callstack — Expensify uses agent-device for mobile bug evidence; notification/debugging patterns)
