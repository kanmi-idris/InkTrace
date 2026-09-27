---
title: "expo-dynamic-notifications: Skia-Based Dynamic Island-Style In-App Notifications"
kind: "paste"
captured_at: "2026-09-19 15:03"
tags: ["expo", "react-native", "dynamic-island", "in-app-notifications", "skia", "reanimated", "gesture-handler", "typescript", "mit"]
source_url: "https://github.com/rit3zh/expo-dynamic-notifications"
status: "inbox"
---

# expo-dynamic-notifications: Skia-Based Dynamic Island-Style In-App Notifications

## Source overview
expo-dynamic-notifications is a React Native/Expo library by rit3zh that renders in-app notifications styled after iOS's Dynamic Island: a small pill-shaped 'island' that morphs into a larger notification card via a liquid/gooey connecting shape, rather than a standard toast or banner. GitHub API metadata checked at capture time reports 94 stars, 7 forks, MIT license, TypeScript as the primary language, and a repository creation date of 2026-09-18 (the day before this capture).

## Setup model
The documented installation is unusual for an npm package: rather than a simple `npm install`, the README instructs cloning the repository directly as a starter template, then running Expo's prebuild and installing dependencies, implying the project is currently distributed as a project template/example to copy from rather than (or in addition to) a standalone installable package. Its documented peer dependencies are @shopify/react-native-skia, react-native-reanimated, react-native-worklets, react-native-gesture-handler, react-native-safe-area-context, expo-blur, expo-image, and expo-symbols — a heavier dependency footprint than most single-purpose UI libraries, reflecting the amount of native rendering/animation/gesture work involved.

## Usage model
A root `<DynamicNotifications>` provider wraps the app (nested inside `GestureHandlerRootView` and `SafeAreaProvider`) and renders its notification overlay above the rest of the app's UI tree. A `useDynamicNotifications()` hook exposes a `trigger()` function that any screen can call with a notification object (title, message, an optional avatar image, a platform-specific icon/symbol, and an accent color) to display it; triggering a new notification while one is already visible replaces it rather than queuing behind it. A `dismiss()` function closes the current notification early and clears anything queued.

## Documented configuration surface
The root component and the notification object together expose a fairly deep configuration surface: auto-dismiss duration (in milliseconds, settable globally or per-notification, with `null` meaning the notification stays until swiped, tapped, or dismissed in code); a set of parameters controlling the visual 'goo'/liquid connector between the island and the card (a single 0-to-1 `strength` value that derives a blur radius, or an explicit blur radius override, plus separate alpha-gain and alpha-threshold values for the underlying color-matrix effect); explicit island and card dimensions, colors, corner radius, and drop-shadow color; a default accent color for titles and icons, overridable per notification; and a spacing value between the island and the card. A notification can also fully replace its default rendered body with custom content via a `render` function while still keeping the library's morph animation, blur reveal, and swipe-to-dismiss gesture behavior; the default body layout is separately exported so it can be reused or extended rather than only fully replaced.

The hook also exposes several read-only Reanimated shared values driving the underlying animation (documented as `drop`, `expand`, `reveal`, `tint`, `dragY`), intended for other UI elements that want to react to the notification's animation state directly rather than only to its visibility.

## Component structure
The README documents the rendered output as a nested tree: an automatically-rendered overlay containing a Skia-based 'Gooey' layer (responsible for the island shape, the connecting 'neck,' and a droplet effect during the morph) and a separate 'Content' layer handling the card surface, its blur, and its dismiss gesture, with a 'Body' component rendering the actual title/message/avatar/icon content inside that card. Each of these sub-components (Gooey, Content, Overlay) accepts its own style or visual-parameter overrides layered on top of the root component's defaults.

## Stack
Documented target stack: Expo SDK 57, React Native 0.86, React Native Skia, Reanimated 4, react-native-worklets, Gesture Handler 2, expo-blur, expo-symbols, react-native-safe-area-context, and Expo Router.

## License
MIT.

## Evidence boundary
The GitHub README was fetched and read directly for this capture, and GitHub API repository metadata was checked separately. No repository was cloned, no dependencies were installed, and no notification was triggered or rendered during this capture; the visual behavior (the morph, the gooey connector, the blur reveal) is described here based on the README's own documentation and a linked screen-recording preview that was not independently played or verified frame-by-frame in this capture.

## Sources
- https://github.com/rit3zh/expo-dynamic-notifications
