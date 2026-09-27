---
title: "expo-share-link: Native Share Sheets with a Title and Icon Instead of a Generic Link Preview"
kind: "paste"
captured_at: "2026-09-12 11:17"
tags: ["expo", "react-native", "share-sheet", "ios", "android", "lplinkmetadata", "share-api", "mit"]
source_url: "https://github.com/onoja123/expo-share-link"
status: "inbox"
---

# expo-share-link: Native Share Sheets with a Title and Icon Instead of a Generic Link Preview

## Source overview
expo-share-link is a small native Expo module by onoja123 that replaces React Native's built-in `Share.share()` for sharing a URL with a version that shows a custom title and icon in the OS share sheet header, instead of the generic 'Link' placeholder with a compass icon that `Share.share` produces by default. GitHub API metadata checked at capture time reports 9 stars, 0 forks, MIT license, JavaScript as the primary detected language, and a repository creation date of 2026-09-10 (the same day as this capture).

## The problem it addresses
The README explains that React Native's stock `Share.share({ message: url, url })` only hands iOS a plain string, so the share-sheet header falls back to a generic 'Link' (or 'N Links') label with no app-specific branding, because iOS only draws a custom header when the shared item supplies Apple's `LPLinkMetadata` type, which requires native code to construct. Android's native share sheet has an equivalent gap: a preview title and thumbnail require an `EXTRA_TITLE` value plus a content URI the sheet is granted permission to read, neither of which the plain JS Share API supplies.

## What the module provides
A single function, `shareLink({ url, title, icon })`, opens the native share sheet with the supplied icon and title shown alongside the link, on both iOS and Android; the icon is ignored on web. The function returns whether the share flow completed and, if so, an `activityType` string identifying which target app or action the user chose (for example a Copy-to-Pasteboard action on iOS, or a flattened Android component name). A companion `isAvailable()` function reports whether sharing is supported: true on iOS and Android, and true on web only when the browser exposes the Web Share API (`navigator.share`).

An important side effect noted in the README: because only the URL itself (not a duplicated text-plus-URL string) is handed to the receiving app, apps like messaging clients that would otherwise receive redundant repeated text now receive just the one clean link.

## Platform implementation details
Per the README: on iOS, the module presents a `UIActivityViewController` backed by a custom `UIActivityItemSource` whose metadata method supplies an `LPLinkMetadata` object carrying the URL, title, and icon; the icon is loaded off the main thread ahead of time so the header renders complete from its very first frame. On Android, it constructs a standard `ACTION_SEND` intent carrying `EXTRA_TEXT` and `EXTRA_TITLE`, plus `ClipData` pointing at a cached copy of the icon exposed through a dedicated `FileProvider` (given its own authority to avoid clashing with any `FileProvider` an app might already declare), and reports which app the user picked via a chooser `IntentSender`. On web, it simply calls the standard `navigator.share()` API.

## Requirements and installation
The module requires a development build or a prebuilt native project; it explicitly does not work inside Expo Go, since it is native code. Documented minimum support is Expo SDK 52, with the bundled example app and CI specifically running against SDK 54. Installation is the standard `npx expo install expo-share-link` followed by `npx expo prebuild` and `npx expo run:ios` or `run:android`; no separate Expo config plugin or manual native configuration step is documented as being required.

## Error handling
The function is documented as rejecting with a coded error in two specific cases: an empty or invalid URL, or (web only) a browser that lacks the Web Share API entirely.

## License
MIT.

## Evidence boundary
The GitHub README was fetched and read directly for this capture, and GitHub API repository metadata was checked separately. No package was installed, no development build was created, and no share sheet was actually triggered on any platform during this capture; the described native implementation behavior is the author's own documented design, not independently verified against the actual source code.

## Sources
- https://github.com/onoja123/expo-share-link
