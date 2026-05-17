# expo-phone-number-hint

Captured from the public GitHub repository page and README on 2026-05-07.

Canonical URL:
https://github.com/shubh73/expo-phone-number-hint

---

Repository positioning captured from the public page:

- `shubh73/expo-phone-number-hint`
- Public repository
- Provides a frictionless way to show a user's SIM-based phone numbers as a hint.
- Powered by Google’s Phone Number Hint API.

Public repository metadata captured from the public page:

- Stars shown: 4
- Latest release shown: `v0.4.0`

Core API notes captured from the public page:

- `isAvailableAsync(): Promise<boolean>`
- `showPhoneNumberHintAsync(): Promise<string | null>`
- The picker returns a selected phone number in E.164 format, or `null` if dismissed.

Platform and error notes captured from the public page:

- `ERR_UNAVAILABLE` is explicitly described as covering iOS and web.
- The page therefore frames the feature as Android-only in practice.
- Other documented error conditions include Play Services unavailability, no hint available, launch failures, extraction failures, and in-progress requests.

Setup notes captured from the public page:

- Installation via `npx expo install expo-phone-number-hint`
- Uses `com.google.android.gms:play-services-auth:21.5.1` by default, with an override option through Gradle ext configuration.

Interpretive note:

- This source fits the React Native and Expo notes as an Expo-native bridge to Android’s Phone Number Hint API for onboarding and autofill-style flows.
