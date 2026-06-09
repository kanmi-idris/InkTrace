# @ladeologun/react-native-walkthrough

Captured from the user-supplied GitHub README and npm package text on 2026-06-07.

Canonical repository:
https://github.com/Ladeologun/react-native-walkthrough#readme

npm package:
https://www.npmjs.com/package/@ladeologun/react-native-walkthrough

Package metadata captured:
- Package name: `@ladeologun/react-native-walkthrough`
- Version shown: `0.1.2`
- Published: 4 days before capture
- TypeScript declarations: built in
- Repository owner: `Ladeologun`
- License shown in repository: MIT

Core framing captured from README and npm text:

- `@ladeologun/react-native-walkthrough` is a shape-aware React Native walkthrough component for onboarding, feature education, and spotlight flows.
- It highlights a target element, dims the rest of the screen, and shows a tooltip card that follows the target across layouts.
- The component is named `ScreenWalkthrough`.

Capabilities captured:

- Target spotlight with animated highlight ring.
- Optional smokey ripple halo for a cinematic reveal.
- Automatic tooltip placement above or below the target.
- Controlled and imperative usage.
- Optional scroll preparation before measurement.
- Target measurement retries for unstable layouts.
- Customizable text, styles, colors, spacing, and theme tokens.
- Render hooks for custom header, content, and footer UI.

Installation and requirements captured:

- Install:
  - `npm install @ladeologun/react-native-walkthrough`
- Peer dependencies:
  - `react-native-reanimated`
  - `react-native-safe-area-context`
  - `react-native-svg`
- The app must already be correctly set up for Reanimated and Safe Area Context.

Basic usage captured:

- Create a native target ref, for example a `Pressable` or `View`.
- Render `ScreenWalkthrough` with:
  - `visible`
  - `targetRef`
  - `contentTitle`
  - `contentDesc`
  - `nextBtnText`
  - `hidePrevious`
  - `onNext`
- The example closes the walkthrough from `onNext`.

Usage patterns captured:

- Controlled mode:
  - use the `visible` prop when app state decides when the walkthrough opens or closes.
- Imperative mode:
  - use `ScreenWalkthroughRef` methods to open, close, refresh, or measure from code.
- Ref methods:
  - `open()`
  - `close()`
  - `refreshPosition()`
  - `measureTarget()`

Targeting and measurement captured:

- Most usage provides a `targetRef` pointing to the element to highlight.
- Native targets should use `collapsable={false}` for reliable measurement.
- `targetRef` should point to a host/native view supporting `measureInWindow`.
- If children are passed directly into `ScreenWalkthrough`, the wrapper can act as the measurement target when `targetRef` is omitted.
- Multi-step walkthroughs are controlled by the app, not by the library.
- The app updates step-specific values such as `targetRef`, `targetKey`, `contentTitle`, `contentDesc`, button labels, and callbacks.
- `targetKey` tells the component to re-measure when the active target changes.

Scroll-then-highlight support captured:

- `prepareTarget` can run before measurement.
- The README example scrolls before measuring:
  - `scrollRef.current?.scrollTo({ y: 500, animated: true })`
- `prepareTargetDelayMs` waits after preparation before measurement starts.
- This is useful for `ScrollView`, `FlatList`, tabbed or collapsible layouts, and targets created after navigation.

Props captured:

- Content and flow:
  - `visible`
  - `contentTitle`
  - `contentDesc`
  - `nextBtnText`
  - `previousBtnText`
  - `hidePrevious`
  - `onNext`
  - `onPrevious`
  - `onClose`
  - `closeOnBackdropPress`
- Targeting and measurement:
  - `targetRef`
  - `targetKey`
  - `prepareTarget`
  - `prepareTargetDelayMs`
  - `measurementRetryDelayMs`
  - `measurementRetryCount`
  - `targetPadding`
  - `targetBorderRadius`
  - `targetOffsetX`
  - `targetOffsetY`
- Placement and layout:
  - `placement`
  - `width`
  - `minWidth`
  - `maxWidth`
  - `offset`
  - `edgePadding`
  - `disableArrow`
- Appearance:
  - `backgroundColor`
  - `overlayColor`
  - `showPulse`
  - `showRipple`
  - `rippleColor`
  - `theme`
- Render hooks:
  - `renderHeader`
  - `renderContent`
  - `renderFooter`

Exports captured:

- `ScreenWalkthrough`
- `defaultTheme`
- `ScreenWalkthroughProps`
- `ScreenWalkthroughRef`
- `ScreenWalkthroughTarget`
- `ScreenWalkthroughTheme`
- `Placement`
- `Rect`

Interpretive note:

- This source is useful for React Native onboarding and feature-education UI.
- Its strongest implementation detail is not just the spotlight itself, but the measurement model: retries, `targetKey`, scroll preparation, and host-view requirements address common layout instability problems in walkthrough overlays.
