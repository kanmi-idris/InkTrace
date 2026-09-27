---
title: "React Native Motion: Stack Toast Component and the Broader Animation Gallery"
kind: "paste"
captured_at: "2026-09-05 06:59"
tags: ["react-native", "react-native-motion", "reanimated", "gesture-handler", "toast", "animation", "expo", "spring", "free", "open-source"]
source_url: "https://rnmotion.dev/animations/spring-toast"
status: "inbox"
---

# React Native Motion: Stack Toast Component and the Broader Animation Gallery

## Source overview
React Native Motion (rnmotion.dev) is a free, open-source gallery of React Native/Expo animation components, built and maintained by a developer named Nathan (SchroederNathan). Unlike the paid Motionary catalog captured separately in this vault, this project is presented as free with a public GitHub repository. GitHub API metadata checked at time of capture reports 167 stars, 19 forks, no detected recognized open-source license, and a repository creation date of 2026-03-21. The homepage advertises the project as having reached a v1.0 milestone and frames itself as built for either a human developer or their coding agent to ship directly.

Other named entries visible in the gallery at time of capture include Aurora Curtain (a Skia-shader light effect), Blurred Text Morph (a character-diffing text swap rendered through Skia), a recreated ChatGPT attachment menu, Gallery Stack Carousel, a Linear-app-inspired frosted tab bar, and a long-press Radial Menu, in addition to the Stack Toast component documented in detail below.

## Stack Toast component
Stack Toast is a toast-notification system that stacks multiple toasts from either the top or bottom edge of the screen. A `position` prop on a `ToastProvider` sets the default edge for the stack, and each individual `showToast()` call can override that default, so a bottom stack and a top stack can both be active at once. Each newly shown toast springs in from off-screen past its edge; toasts already in the stack step back by a small fixed offset (14px) beyond the front toast's outer edge and shrink slightly per position back in the stack (5% per slot), a design intended to keep toasts of different heights (one to three lines of text) stacking evenly rather than misaligning.

The frontmost toast in a stack responds to drag gestures: dragging it toward its edge follows the finger directly (the dismiss direction), while dragging it away from the edge is resisted with a rubber-band effect rather than moving freely. A drag past a documented 56px threshold, or a fast flick past roughly 800 pixels per second, commits a dismiss with a light haptic tap, and the remaining toasts spring forward to fill the gap. Toasts auto-dismiss after 3 seconds by default and can carry an optional action button in addition to a close button.

## Documented dependencies
The component requires react-native-reanimated, react-native-gesture-handler, react-native-worklets, expo-haptics, react-native-safe-area-context, and @expo/vector-icons, installed via the standard `npx expo install` command for those packages.

## Notable implementation details (summarized, not verbatim)
The page's 'Common pitfalls' section documents a number of specific implementation choices behind the component, condensed here rather than reproduced in full: a toast's position in the stack is derived at render time by counting other non-exiting toasts with a higher ID, rather than relying on raw array index, so the stack stays correct as toasts are added and removed; toast heights are measured via layout callbacks and used to offset each toast's stacked position from the front toast's actual measured edge, rather than assuming a fixed height, so toasts of different line counts still align cleanly; a single directional multiplier flips all of the animation's offsets and gesture math between the top and bottom stacking modes, rather than maintaining two separate code paths; a toast is marked as 'exiting' the moment its dismiss animation begins (rather than waiting for the animation to finish) so the remaining stack can spring forward immediately instead of waiting out the exit animation; the auto-dismiss timer is paused while a toast is being touched and restarted afterward, so a toast being interacted with cannot expire mid-gesture; and the implementation favors reading current state through refs inside the dismiss timer's closure, since a plain timeout closure would otherwise reference stale state from when it was originally scheduled. The page also notes it uses Reanimated's newer `.get()`/`.set()` accessor pattern on shared values (rather than `.value`) for React Compiler compatibility, and `scheduleOnRN` from react-native-worklets in place of the deprecated `runOnJS` helper when invoking JS callbacks from gesture and animation-completion handlers, and that the component respects the OS reduced-motion accessibility setting by snapping animated values into place while still running opacity fades.

## Evidence boundary
The live page (accessed via the browser and via a direct fetch) and the project's homepage were inspected directly, and GitHub API metadata for the underlying repository was checked separately. No package was installed and the demo code was not run during this capture. The repository's license status should be confirmed directly on GitHub before reuse, since no recognized SPDX license was detected on it at the time of this check, despite the project being described as free.

## Sources
- https://rnmotion.dev/animations/spring-toast
- https://rnmotion.dev/
- https://github.com/SchroederNathan/react-native-motion
