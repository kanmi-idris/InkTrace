# react-native-nitro-biometrics

Captured from the public GitHub subproject referenced by the user on 2026-05-21.

Canonical URL:
https://github.com/frankudoags/nitro-modules/tree/main/nitro-biometrics

---

Repository and package framing captured from the public README:

- Package name shown in the README:
  - `react-native-nitro-biometrics`
- The package describes itself as:
  - “A Simple Nitro module to authenticate users with biometrics on iOS and Android.”

Dependency and integration details captured from the README:

- The package requires:
  - `react-native-nitro-modules`
- Installation shown in the README:
  - `pnpm install react-native-nitro-biometrics react-native-nitro-modules`
  - `cd ios && pod install && cd ..`

Expo and React Native integration notes captured from the README:

- The package ships with an Expo config plugin.
- The README shows Expo configuration via `app.json` with:
  - plugin name `react-native-nitro-biometrics`
  - configurable `faceIDPermission` string
- For bare React Native usage, the README documents platform permissions manually.

Platform permission details captured from the README:

- iOS:
  - requires `NSFaceIDUsageDescription` in `Info.plist`
- Android:
  - requires `android.permission.USE_BIOMETRIC`
  - requires `android.permission.USE_FINGERPRINT`

Project-structure clues visible in the repository tree:

- `android/`
- `ios/`
- `nitrogen/ generated`
- `plugin/`
- `src/`
- `NitroBiometrics.podspec`
- `app.plugin.js`
- `nitro.json`

Lineage and implementation note captured from the README:

- The package explicitly credits `expo-local-authentication`.
- The README says some code was copied verbatim and some adapted to fit the author’s preferences.
- The license is MIT.

Interpretive note:

- This source is strongest as a focused React Native native-module reference rather than as a general biometrics guide. Its durable value is that it shows a minimal Nitro Modules approach to biometric authentication with both Expo-plugin support and bare React Native setup, while also making its relationship to `expo-local-authentication` explicit.
