# The Go-To Guide for Understanding Keyboards in React Native (Part 1)

Captured from the user-supplied article text and URL on 2026-05-28.

Canonical URL:
https://blog.margelo.com/deep-dive-in-keyboard-handling

Article metadata visible in the supplied text:

- title:
  - `The Go-To Guide for Understanding Keyboards in React Native (Part 1)`
- author:
  - Kirill Zyusko
- publisher:
  - Margelo
- published date:
  - 2026-05-26
- tags visible in the article:
  - keyboard
  - React Native
  - animations

Core framing captured from the article:

- The article explains why keyboard handling in React Native often feels inconsistent across iOS and Android.
- It frames keyboard behavior as one of the most important native-feel details in mobile apps because keyboards appear in auth, chat, search, comments, checkout, and many other common flows.
- The article argues that Android 15 materially changes the keyboard-layout contract because edge-to-edge is forced by default for apps targeting SDK 35.

iOS model captured from the article:

- iOS exposes scheduled keyboard notifications.
- UIKit sends `keyboardWillShow` and `keyboardDidShow` style notifications with:
  - final keyboard frame
  - animation duration
  - animation curve
- iOS does not provide intermediate keyboard frames.
- The app schedules its own layout animation using the same timing contract, and UIKit interpolates both the keyboard and app content together.

Android model captured from the article:

- Android treats the keyboard as an IME system window and exposes keyboard behavior through window layout and insets rather than a single keyboard event model.
- The article distinguishes:
  - system-driven layout via `windowSoftInputMode`
  - app-driven layout via edge-to-edge and insets
- Pre-Android 11 does not provide a native per-frame keyboard API.
- Android 11 to 14 allow edge-to-edge as an opt-in runtime mode.
- Android 15 and later force edge-to-edge for SDK 35 targets, so relying on the OS to resize the app window is no longer safe.

`windowSoftInputMode` points captured from the article:

- `adjustResize`
  - system shrinks the available app layout area when the keyboard appears
- `adjustPan`
  - system pans the window up to keep focused input visible without resizing
- This is the legacy system-driven model where the JS layer does not need to know about the keyboard directly.

Edge-to-edge and animation points captured from the article:

- Edge-to-edge breaks the old `adjustResize` contract because the app now draws under system bars and the keyboard.
- The system hands the app keyboard insets and expects the app to react.
- `WindowInsetsAnimationCallback` provides Android per-frame keyboard animation hooks:
  - `onPrepare`
  - `onStart`
  - `onProgress`
  - `onEnd`

React Native default behavior captured from the article:

- `Keyboard.addListener` exposes a symmetric-looking API, but Android does not fire `keyboardWillShow` and `keyboardWillHide`.
- React Native's built-in `KeyboardAvoidingView` works better on iOS because it can use the scheduled animation model.
- On Android it relies on later events such as `keyboardDidShow`, lacks per-frame inset tracking, and can snap or fail under edge-to-edge constraints.

Architectural recommendation captured from the article:

- The article argues that the correct abstraction is to map platform keyboard behavior into a single animated value:
  - Android writes per-frame values from `WindowInsetsAnimationCallback`
  - iOS schedules the value using its notification timing contract
- Downstream layout, padding, translation, and scroll logic can then consume the same animated primitive without caring which platform produced it.

`react-native-keyboard-controller` guidance captured from the article:

- The library's `KeyboardAvoidingView` is presented as a drop-in replacement for React Native's built-in component.
- Migration is shown as a one-line import swap:

```diff
- import { KeyboardAvoidingView } from "react-native"
+ import { KeyboardAvoidingView } from "react-native-keyboard-controller"
```

- On Android, the library enables edge-to-edge behavior and subscribes to `WindowInsetsAnimationCallback`.
- On older Android versions, it polyfills per-frame behavior.
- On iOS, it keeps the native scheduled-animation contract.
- Both platforms drive shared animated values.

Component selection guidance captured from the article:

- Use `KeyboardAvoidingView` when the layout should make room for the keyboard.
- Use `KeyboardAwareScrollView` for scrollable forms where the focused input or caret must remain visible.
- Use `KeyboardStickyView` for a footer, chat input, toolbar, or action button that should ride above the keyboard without resizing the rest of the layout.

`KeyboardAwareScrollView` details captured from the article:

- It tracks:
  - the currently focused `TextInput`
  - input layout and size
  - selection and caret movement
  - keyboard frame
- It re-evaluates whether the focused input or caret is visible above the keyboard and scrolls the minimum required amount.

`KeyboardStickyView` details captured from the article:

- It translates a child element by the keyboard height rather than resizing the whole screen.
- This avoids flex recomputation, broad layout changes, and unnecessary interaction with the rest of the screen.

Interpretive note:

- This source is strongest as React Native platform-behavior and interaction-polish guidance. Its durable value is the mental model that iOS and Android expose fundamentally different keyboard primitives, plus a practical component-selection model for making modern edge-to-edge Android and iOS keyboard interactions feel consistent.
