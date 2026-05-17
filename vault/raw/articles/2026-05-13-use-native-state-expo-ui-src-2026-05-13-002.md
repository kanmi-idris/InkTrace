# Understanding useNativeState in Expo UI

Captured from the public article page on 2026-05-13.

Canonical URL:
https://codewithbeto.dev/blog/use-native-state-expo-ui

---

Article metadata captured from the supplied article text:

- Title: `Understanding useNativeState in Expo UI`
- Publisher/site: `Code with Beto`
- Byline: `Beto`
- Date shown on page: `May 2026`

Core claims captured from the article:

- The article says Expo SDK 56 introduces the `useNativeState` hook in Expo UI.
- The visible summary describes `useNativeState` as creating a lightweight reference or pointer to a value that lives in native memory.
- The same preview says that native UI on the SwiftUI or Compose side can read and write that value without involving the JavaScript thread.
- The article frames this as especially valuable in places where React state has historically felt slow.

Explanation of the problem case captured from the article:

- The public preview contrasts `useNativeState` with controlled React state in a `TextField`.
- The page describes the controlled-input loop as:
  1. native `TextField` emits an event to the JS thread
  2. JS updates React state
  3. the component re-renders
  4. the native `TextField` receives a new prop and updates again
- The page explicitly argues that this four-step cycle on every keystroke is what makes fast typing feel laggy.

Implementation notes captured from the article:

- The minimal example uses `Host`, `TextField`, and `useNativeState` from `@expo/ui/swift-ui`, plus ordinary React Native `Button` components.
- The article shows `const name = useNativeState("")` as the shared native state object for a text field.
- It says the state should be created with a constant seed value; if the initial argument changes across renders, the hook tears down and recreates the native object.
- The article says `.value` is the read/write API:
  - JS can synchronously read `name.value` on demand without forcing a re-render.
  - JS can also write `name.value = ""` or similar values to push changes back into the field.
- The article says `onChangeText` is not needed in the minimal case and should only be added when JavaScript actually needs to react to changes.
- For fast-path callbacks, the article recommends marking the callback `"worklet"` so it runs on the UI thread without a JS-thread hop.

Use cases explicitly listed in the article:

- Long-form text fields such as chat boxes, search inputs, and AI prompts
- Sliders, steppers, and dials with frequent updates
- Pickers such as color, date, and time pickers
- Selection ranges and cursor tracking inside a text field
- Forms with many inputs, where each field can own its own native state

Underlying model captured from the article:

- The article says `useNativeState` returns a `SharedObject`.
- It describes `SharedObject` as an Expo Modules primitive for keeping a long-lived native instance in native memory while JavaScript holds only a handle or ticket to it.
- The article compares this to how Expo can hold decoded bitmaps or open file handles natively.

Interpretive note:

- This source is now strong enough to treat as a practical conceptual guide to `useNativeState`, especially around native-shared state, controlled-input lag avoidance, `.value` access patterns, worklet callbacks, and the SharedObject mental model.
