# React Native Detour docs and repository

Captured from the user-supplied Detour docs URL and GitHub repository on 2026-06-06.

Canonical docs URL:
https://detour.swmansion.com/docs/Fundamentals/introduction

Canonical repository:
https://github.com/software-mansion-labs/react-native-detour

Package:
`@swmansion/react-native-detour`

Repository metadata captured:
- Owner/repo: `software-mansion-labs/react-native-detour`
- Description: SDK for handling deferred deep links in React Native with seamless expo-router integration.
- Visibility: public
- License: MIT
- Stars shown during capture: 223
- Latest release shown during capture: `2.3.0`, dated 2026-06-01
- Primary languages shown: TypeScript and JavaScript

Core framing captured from the repository README:

- React Native Detour is an SDK for handling deferred deep links in React Native.
- A deferred link behaves like a regular deep link but survives an App Store or Play Store install.
- If a user clicks a link before installing the app, Detour can route the user to the intended screen on first launch.
- Detour also handles Universal Links, Android App Links, and custom scheme links through one unified API.
- A Detour account is needed to generate app credentials and configure links.

Installation details captured:

- Install the SDK:
  - `npm install @swmansion/react-native-detour`
- Required peer dependencies listed:
  - `expo-localization`
  - `expo-clipboard`
  - `expo-constants`
  - `@react-native-async-storage/async-storage`
  - `expo-application`
- One device-info provider must be installed:
  - `expo-device`
  - or `react-native-device-info`
- Default persistent storage is `@react-native-async-storage/async-storage`.
- The default storage can be overridden through the `storage` config option.

Provider and navigation model captured:

- `DetourProvider` is mounted at the root of the app and configured with credentials.
- How the resolved link is consumed depends on the navigation library.
- On Expo Web, the SDK is a no-op: `DetourProvider` mounts, link processing is skipped, and `isLinkProcessed` resolves to `true`.

Expo Router integration captured:

- Wrap the root layout with `DetourProvider`.
- Use `useDetourContext` to read `isLinkProcessed`, `link`, and `clearLink`.
- Use the resolved `link.pathname` and `link.params` to drive `expo-router` navigation.
- The README example gates splash-screen hiding on `isLinkProcessed`.
- If an app uses Expo Router's `+native-intent.tsx` for Universal/App links, import `createDetourNativeIntentHandler` from `@swmansion/react-native-detour/expo-router` and set `linkProcessingMode: "deferred-only"` so Detour only handles deferred links.

React Navigation integration captured:

- For version 2.3.0 and later, Detour provides a linking adapter for `NavigationContainer`.
- The adapter exposes `DETOUR_LINKING_PREFIX`, `Detour.getInitialURL()`, and `Detour.addEventListener("url", ...)`.
- React Navigation can then handle routing automatically without `useDetourContext` for basic usage.
- The splash screen can be hidden via `onReady` after `getInitialURL` resolves.
- For versions before 2.3.0, use `useDetourContext` and imperatively call navigation, similarly to the Expo Router approach.

Auth-gated app behavior captured:

- The React Navigation adapter appends `fromDeepLink=true` and `linkType` query params to emitted URLs.
- For auth-gated apps, React Navigation can hold a deep link until the target screen becomes reachable.
- The README recommends rendering screen sets conditionally based on auth/onboarding state and using `UNSTABLE_routeNamesChangeBehavior="lastUnhandled"`.
- A deep link that arrives while signed out can be parsed, found unreachable, remembered, and retried after sign-in or onboarding changes the available routes.

Link processing modes captured:

- `linkProcessingMode` controls which link sources the SDK listens to.
- Modes:
  - `"all"`: deferred links, Universal/App links, and custom scheme links.
  - `"web-only"`: deferred links plus Universal/App links, excluding custom scheme links.
  - `"deferred-only"`: deferred links only.
- `"deferred-only"` is recommended when Expo Router's `+native-intent.tsx` already handles runtime Universal/App links, preventing double processing.

Clearing and analytics captured:

- If an app redirects based on `link`, especially in entry screens, call `clearLink()` after handling the route.
- This prevents repeated redirects when the user returns to the same screen.
- `DetourProvider` automatically tracks app opens for retention.
- Custom analytics events can be logged with `DetourAnalytics` and `DetourEventNames`.
- `DetourAnalytics.logRetention("week_1")` is shown as a retention tracking example.

Types captured:

- `Config` includes:
  - `appID`
  - `apiKey`
  - optional `shouldUseClipboard`
  - optional `linkProcessingMode`
  - optional custom `storage`
- `shouldUseClipboard` is iOS-only.
- On Android, the SDK uses the install referrer for deterministic link matching and does not access the clipboard regardless of `shouldUseClipboard`.
- `DetourContextType` includes:
  - `isLinkProcessed`
  - `link`
  - `clearLink`
- `DetourLink` includes:
  - original `url`
  - full `route`
  - `pathname`
  - parsed `params`
  - `type`
- Link types include:
  - `deferred`
  - `verified`
  - `scheme`

Examples captured:

- Example apps live in `examples/`.
- Listed examples include:
  - minimal Expo Router
  - Expo Router with `+native-intent`
  - Expo Router advanced auth flow
  - Expo bare entry point
  - React Navigation minimal example
  - React Navigation with auth and onboarding gated deep linking
- Running examples produces development builds, which the README recommends over Expo Go for testing deep linking flows on a real device.

Other SDKs captured:

- Android SDK: `software-mansion-labs/android-detour`
- iOS SDK: `software-mansion-labs/ios-detour`
- Flutter SDK: `software-mansion-labs/detour-flutter-plugin`

Interpretive note:

- This source upgrades the earlier landing-page Detour capture by documenting concrete React Native SDK behavior, navigation integration, auth-gated flow handling, link-source filtering, iOS clipboard behavior, Android install-referrer behavior, and analytics support.
