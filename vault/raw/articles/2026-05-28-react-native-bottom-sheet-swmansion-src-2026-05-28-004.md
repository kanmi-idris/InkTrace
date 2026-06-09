# React Native Bottom Sheet

Captured from the public GitHub repository supplied by the user on 2026-05-28.

Canonical URL:
https://github.com/software-mansion-labs/react-native-bottom-sheet

Package URL visible in the repository:
https://www.npmjs.com/package/@swmansion/react-native-bottom-sheet

Repository framing captured from the public README:

- `React Native Bottom Sheet` provides bottom-sheet components for React Native.
- The package name shown in the README is:
  - `@swmansion/react-native-bottom-sheet`

Highlights captured from the README:

- native implementation for performance
- inline and modal sheet components
- bring-your-own sheet surface
- dynamic, content-based sizing
- automatic handling of vertically scrollable children
- position tracking for UI tied to sheets
- programmatic-only detents for snap points unreachable by dragging

Installation notes captured from the README:

```bash
npm i @swmansion/react-native-bottom-sheet
npm i react-native-safe-area-context@^4.0.0
```

Provider setup captured from the README:

```tsx
const App = () => <BottomSheetProvider>{/* ... */}</BottomSheetProvider>;
```

Core component model captured from the README:

- `BottomSheet`
  - renders inline within a screen layout
- `ModalBottomSheet`
  - renders above other content
  - supports an optional scrim
  - tapping the scrim collapses the sheet

State and detent model captured from the README:

- The components are controlled through:
  - `detents`
  - `index`
  - `onIndexChange`
- `onSettle` is available for post-snap observability and side effects.
- Detents can be:
  - fixed pixel heights
  - `'content'`
- Default detents are described as:
  - `[0, 'content']`
- Detents can change over time while the sheet keeps its current index and animates to the updated height when needed.

Programmatic detent behavior captured from the README:

- Programmatic-only detents can be created with the object form or the `programmatic` helper.
- These detents are excluded from drag snapping but can still be targeted through controlled `index` updates.

Scrollable behavior captured from the README:

- The sheet coordinates vertical gestures with nested scrollable children such as:
  - `ScrollView`
  - `FlatList`
- The `disableScrollableNegotiation` prop can be used when gestures that start inside nested scrollables should remain with the scrollable.

Position tracking captured from the README:

- `onPositionChange` exposes the sheet's current position as a distance in pixels from the bottom of the screen to the top of the sheet.
- The README shows this value being copied into a Reanimated shared value, making it usable for UI tied to sheet movement.

Public project signals visible in this session:

- repository owner:
  - `software-mansion-labs`
- roughly 47 GitHub stars
- latest visible release:
  - `v0.10.0`, May 22, 2026
- language mix includes:
  - TypeScript
  - Kotlin
  - Swift
  - Objective-C++
  - C++

Interpretive note:

- This source is strongest as a native bottom-sheet implementation reference for React Native. Its durable value is the component and control model around inline versus modal sheets, detents, dynamic content sizing, scrollable negotiation, and position tracking rather than merely the existence of another bottom-sheet component.
