---
title: "expo-paste-input: Native Paste Wrapper for React Native TextInput"
kind: "paste"
captured_at: "2026-08-28 22:20"
tags: ["expo", "react-native", "textinput", "clipboard", "paste", "ios", "android", "stickers", "gif", "expo-module", "mit"]
source_url: "https://expo.dev/blog/pasting-images-into-textinput-should-not-be-this-hard"
status: "inbox"
---

# expo-paste-input: Native Paste Wrapper for React Native TextInput

## Source overview
expo-paste-input is a native Expo module that wraps an existing React Native TextInput to fire an onPaste event with pasted text or local file URIs for images, GIFs, screenshots, and iOS stickers. It is maintained by Arunabh Verma, founder of Powstac, and grew out of a real production requirement in a chat application his consultancy was building.

GitHub API metadata checked on 2026-08-28 reports 329 stars, 10 forks, 2 open issues, Swift as the primary repository language, and MIT license. The repository was created 2025-11-25.

## Origin story (Expo guest blog post)
The Expo blog post, written as a guest post by Arunabh Verma, documents the project's history:
- Powstac initially used Mattermost's react-native-paste-input (the same library Bluesky was using at the time) to add image-paste support to a chat composer.
- That library broke unevenly across iOS and Android after migrating to React Native's New Architecture, and became increasingly hard to patch and maintain.
- The author considered adopting react-native-enriched (Software Mansion's richer input project) or building a fully custom TextInput, but rejected both: react-native-enriched solves a broader rich-content-editing problem, and building a custom input would mean reimplementing years of native TextInput behavior (selection, cursor management, autofill, accessibility, IME support, and more) just to get paste support.
- Reading Fernando Rojo's write-up on how the v0 app handled paste (wrap TextInput rather than rebuild it) reframed the approach: a thin wrapper component around the existing TextInput, adding only paste intelligence.
- The blog post's code example uses a component named PasteInputWrapper; the current published GitHub README instead documents the component as TextInputWrapper. This naming difference between the blog post and the current README is recorded as a discrepancy rather than silently resolved.

## Platform implementation details (per the blog post)
iOS:
- Clipboard access is deliberately deferred: the wrapper only reads from UIPasteboard after the user explicitly performs a paste action, to avoid triggering iOS's clipboard-access privacy prompts on every focus.
- After a paste, the native layer inspects clipboard contents (text, images, GIFs, WebP, HEIC, and similar formats), writes any media to temporary files, and returns local file URIs to JavaScript.
- iOS stickers are handled separately, since newer iOS versions can insert stickers through NSTextAttachment and NSAdaptiveImageGlyph (iOS 18) rather than standard clipboard image formats. The wrapper extracts the underlying image data, strips the inserted attachment content from the text field, preserves cursor position, writes the sticker image to temporary storage, and emits it as a normal image-paste event. Static stickers were supported first; animated sticker support was added afterward.

Android:
- The proper native path for Android 12 and above is OnReceiveContentListener, which lets native views receive rich content such as images and media.
- The library also hooks into native paste actions (insertion menus, selection menus, clipboard managers) through Android's text-editing APIs, because OnReceiveContentListener alone was not sufficient for reliable behavior.
- Text pastes behave normally; media pastes are intercepted, saved to cache storage, and emitted as file URIs, avoiding a broken "Can't paste image" experience.

## Documented edge cases
The blog post describes several edge cases that required additional handling beyond the initial implementation: multiple pasted images, GIFs that must remain animated rather than becoming static images, transparent PNGs that must keep their alpha channel (falling back to JPEG only when appropriate), and screenshots, which behave differently depending on whether they were copied from the Photos app or directly from the system screenshot UI.

## Current GitHub README technical reference
The published README (which uses TextInputWrapper as the component name, differing from the blog post's PasteInputWrapper) documents:

Features:
- Paste text, images, stickers, and multiple GIFs.
- Works on iOS and Android.
- A true wrapper around TextInput, so the app supplies its own input component.
- No custom UI or opinionated styling.
- Returns local file URIs for pasted media.
- Safe to import on Web, where it is a no-op rather than a crash.
- Also supports Expo's SwiftUI TextField.

Installation:
npx expo install expo-paste-input
The library uses native code, so the app must be rebuilt with npx expo run:ios or npx expo run:android. It explicitly does not work inside Expo Go.

Usage pattern (per current README):
import { TextInputWrapper } from "expo-paste-input";
import { TextInput } from "react-native";

<TextInputWrapper onPaste={(payload) => { console.log(payload); }}>
  <TextInput placeholder="Paste here..." />
</TextInputWrapper>

Props:
- children (React.ReactElement): the TextInput or custom input being wrapped.
- onPaste ((payload: PasteEventPayload) => void): callback fired on a detected paste event.

Payload type:
type PasteEventPayload =
  | { type: "text"; value: string }
  | { type: "images"; uris: string[] }
  | { type: "unsupported" };

Platform behavior summary in the README:
- iOS: intercepts native paste(_:), extracts images from UIPasteboard, saves to temp files, preserves GIFs and stickers, and adds native sticker handling (including adaptive image glyph insertion) since stickers are not always exposed as normal clipboard image data.
- Android: uses OnReceiveContentListener plus ActionMode, prevents the Android "Can't paste images" toast, saves pasted media to cache, and routes stickers and images through regular clipboard/content APIs.

Operational notes from the README:
- Image URIs point to temporary files; the app must move them if persistence is needed.
- Text-paste events fire after the text has already been inserted into the input.
- Image-paste events prevent the default paste, since a plain TextInput cannot render an inline image.
- The Web implementation is currently a no-op.

## Relationship to prior art
The project explicitly credits two prior influences: Mattermost's react-native-paste-input (the library originally used, and the same one Bluesky was using), and Fernando Rojo's write-up on the v0 app's wrapper-based paste approach, which shaped the final wrapper design. Software Mansion's react-native-enriched project (already recorded separately in this vault) is mentioned as a considered but rejected alternative, since it solves rich-content editing rather than plain attachment-style paste. The author also states he reached out to the Bluesky team, who were interested, and contributed changes back toward that Mattermost-based approach.

## License
The repository and npm package are MIT licensed per the GitHub repository metadata and README.

## Execution boundary
The Expo blog post and the current GitHub README were inspected, along with GitHub API repository metadata. No package was installed, no Expo project was rebuilt, and no clipboard paste was tested during this capture.

## Sources
- https://expo.dev/blog/pasting-images-into-textinput-should-not-be-this-hard
- https://github.com/arunabhverma/expo-paste-input
- https://github.com/mattermost/react-native-paste-input
- https://github.com/software-mansion/react-native-enriched-html
