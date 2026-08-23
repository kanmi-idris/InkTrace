---
title: "React Native Animation Samples: 0.86.2 and Latest API Migration"
kind: "paste"
captured_at: "2026-08-12 23:07"
tags: ["github", "react-native", "animations", "reanimated", "gesture-handler", "worklets", "skia", "typescript", "expo"]
source_url: "https://github.com/Aashu-Dubey/react-native-animation-samples"
status: "inbox"
---

# React Native Animation Samples: 0.86.2 and Latest API Migration

## Source overview
Aashu Dubey's React Native Animation Samples repository contains challenging gesture-driven animation examples. The repository README lists five main samples:
1. Custom Toolbar: a playful interactive toolbar with gesture-based interruptible animations.
2. Color Swatch: a circular rotation driven by user gestures.
3. Grid Magnification: a grid list with magnification near the touch area during long press and drag.
4. Rope Physics: a gesture-controlled Bezier rope UI implementation and related samples.
5. Custom Cursor/Caret: a customizable text-field cursor or caret with validation animations for maximum length and password strength.

The repository also lists an incomplete Cards Swap sample with drag and swipe behavior.

The README links to an Expo Snack, YouTube tutorial playlist, individual sample READMEs, and demo videos. Local setup uses yarn install, optional iOS pod installation, and React Native run-ios or run-android commands.

## User-reported 0.86.2 upgrade
The user reports upgrading the project to React Native 0.86.2, updating dependencies, and migrating implementations to current APIs.

Reported changes:
- Gesture Handler v3: migrated from deprecated builder-based methods to hook-based APIs.
- Reanimated v4: replaced runOnJS with the corresponding API from react-native-worklets.
- Reanimated v4: fixed implementations to reduce sharedValue.value usage while components render.
- SafeAreaView imports now use react-native-safe-area-context.
- Removed StyleSheet.absoluteFillObject usage and replaced it with StyleSheet.absoluteFill.
- Grid Magnification: updated withSpring options for Reanimated v4 spring behavior.
- Rope Physics: updated rope-path code to use Skia's new Path APIs.
- Custom Caret: fixed hidden TextInput behavior on iOS that caused incorrect cursor positioning. Added a Text-based alternative.
- Updated types, including support for new strict TypeScript APIs in React Native.
- Removed redundant styles and applied other refactors.
- Updated CI/CD workflows to current action versions and approaches.

These upgrade details are user-provided. This capture did not independently inspect the commit diff or run the project.

## Technology migration themes
The update reflects several React Native maintenance patterns:
- Replace deprecated gesture APIs when major library versions change.
- Move cross-runtime work to react-native-worklets.
- Avoid reading shared values during render when Reanimated warns against it.
- Use platform-safe-area context rather than legacy SafeAreaView imports.
- Update native drawing APIs such as Skia paths.
- Test hidden input and cursor layout on real iOS devices.
- Align strict TypeScript types and CI actions with current React Native releases.

## User-provided release note
Upgraded my React Native animations project to the latest v0.86.2.

Repo: https://github.com/Aashu-Dubey/react-native-animation-samples

Also upgraded the dependencies to their latest versions and updated the implementations to use the latest APIs.

Here are some of the changes:
- gesture-handler v3: Migrated from deprecated builder-based methods to hook-based APIs.
- reanimated v4: Replaced runOnJS with the corresponding API from the helper react-native-worklets package.
- reanimated v4: Improved implementations to fix reanimated's sharedValue.value usage while component is rendering warnings.
- Updated SafeAreaView imports to use react-native-safe-area-context.
- Replaced the removed StyleSheet.absoluteFillObject usage with StyleSheet.absoluteFill.
- Grid Magnification: Updated withSpring animation options based on the changes in Reanimated v4's spring behavior.
- Rope Physics: updated the rope path implementation to use Skia's new Path APIs.
- Custom Caret: Fixed hidden TextInput behavior on iOS that was causing incorrect cursor positioning. Also added an alternative approach based on the Text component.
- Updated types, including supporting the new Strict TypeScript APIs for react-native.
- Removed some redundant styles and other code refactors.
- Updated CI/CD workflows to use the latest action versions and approaches.
