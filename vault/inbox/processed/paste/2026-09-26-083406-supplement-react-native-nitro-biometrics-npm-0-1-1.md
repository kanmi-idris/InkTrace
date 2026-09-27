---
title: "Supplement: react-native-nitro-biometrics npm 0.1.1"
kind: "paste"
captured_at: "2026-09-26 08:34"
tags: ["react-native", "nitro-modules", "biometrics", "authentication", "face-id", "touch-id", "optic-id", "biometric-prompt", "android", "ios", "typescript", "security", "npm", "supplemental-capture"]
source_url: "https://www.npmjs.com/package/react-native-nitro-biometrics"
status: "inbox"
---

# Supplement: react-native-nitro-biometrics npm 0.1.1

## Relation to existing coverage
InkTrace already contains src-2026-05-21-002 for a different project with the same package name. That earlier source points to frankudoags/nitro-modules/tree/main/nitro-biometrics and describes a small Nitro wrapper with Expo config-plugin support.

This record covers the newer public npm package owned by yashnandha at github.com/yashnandha/react-native-nitro-biometrics. The two projects must remain separate because they have different repositories, authors, package structures, APIs, and release histories.

## Package identity
The npm package is react-native-nitro-biometrics version 0.1.1. Registry metadata identifies the package author as Yash Nandha, the repository as github.com/yashnandha/react-native-nitro-biometrics, the license as MIT, and react-native-nitro-modules ^0.37.1 as its peer dependency. The published package metadata also lists React Native 0.86.2 in its development environment and uses React Native Builder Bob plus Nitrogen for generated outputs.

The package describes itself as a React Native New Architecture biometric-authentication library powered by Nitro Modules. Version 0.1.1 is an early release. The package page's speed and compatibility language is promotional unless supported by independent tests.

## Native architecture
The package connects JavaScript to Apple's LocalAuthentication framework on iOS and AndroidX BiometricPrompt on Android through Nitro Modules. Its README positions direct JSI bindings and generated TypeScript specifications as alternatives to legacy bridge serialization.

The README compares claimed call latency and architecture with older bridge-based packages. It does not provide a reproducible benchmark protocol, device matrix, or measured latency data. The claims that calls are zero-overhead, instantaneous, or microsecond-level are therefore author claims, not verified performance results.

## Supported modalities
The README documents these modality labels:

- Face ID on iOS.
- Touch ID on iOS and iPadOS.
- Optic ID recognition on visionOS or compatible Apple platforms.
- Fingerprint, face, and iris biometric prompts on Android where the device and platform support them.
- Device PIN, pattern, or passcode fallback.

The package exposes a normalized BiometryType union with `none`, `touchId`, `faceId`, `opticId`, `fingerprint`, `face`, and `iris`. Actual availability depends on operating-system APIs, hardware class, enrollment state, device policy, and the platform version. The README's modality table is not an independent compatibility test.

## Functional API
The documented imperative API includes:

- `canAuthenticate(allowDeviceCredentials?)` returns availability, primary and detected modalities, enrollment state, device security state, and an optional error.
- `authenticate(options)` opens the native biometric prompt and returns success, the modality used, an optional error, and an optional warning.
- `getBiometryType(allowDeviceCredentials?)` returns the primary detected modality.
- `isSensorAvailable(allowDeviceCredentials?)` returns a boolean.

Authentication options include a prompt message, Android subtitle and description, cancel and fallback labels, device-credential fallback, and Android confirmation-required behavior. The `allowDeviceCredentials` option changes availability semantics so a device PIN, pattern, or passcode can satisfy the check when enabled.

## React hook
`useBiometrics()` wraps the functional API for declarative React screens. The README documents automatic status checks, availability, primary and all detected modalities, enrollment state, device security state, loading state, errors, a manual status refresh, and an `authenticate` method.

This supports app-lock and login screens without requiring each screen to implement its own loading and status state. The hook does not remove the need to handle cancellation, lockout, unavailable hardware, and account-session rules.

## Error model
The README documents normalized error identifiers including user cancellation, user fallback, system cancellation, missing enrollment, missing device passcode, temporary or permanent lockout, hardware unavailability, unsupported devices, unavailable Android activity, and unknown errors.

A consistent error vocabulary can simplify UI handling across iOS and Android. The application still needs to decide which errors are silent, which errors should show recovery guidance, and when a non-biometric login path is required.

## Platform setup
The package requires the React Native New Architecture. The README notes that this is standard in React Native 0.76 and newer.

For iOS, the app must declare `NSFaceIDUsageDescription` in Info.plist and run CocoaPods installation. The README describes simulator enrollment and matching or non-matching Face ID or Touch ID test flows.

For Android, the README documents `USE_BIOMETRIC` and the backwards-compatibility `USE_FINGERPRINT` permission. It expects a ReactActivity-derived host activity and describes an emulator fingerprint command for testing.

These setup instructions describe the package's expected environment. They do not prove that every listed modality or fallback works on every device.

## Security and privacy statements
The README states that the app does not receive biometric images or raw biometric vectors, and that the operating system handles verification through platform security mechanisms. It also states that biometric data is not serialized or sent over a network. These statements match the normal abstraction exposed by LocalAuthentication and BiometricPrompt, but they remain package documentation claims until the implementation and platform behavior are audited.

The package recommends treating biometrics as local user-presence authentication. For high-value transactions, it recommends signing a server challenge with a hardware-backed private key in the platform Keychain or Keystore. This is an important boundary: a successful biometric prompt alone is not a remote transaction signature.

The example recipes include app locking when returning from the background, high-security transaction confirmation, and passcode fallback. The transaction recipe allows passcode fallback to be disabled when strict biometric verification is required. Product teams should define their threat model before choosing that setting.

## Testing and example app
The package documents Jest mocks for the functional API and hook, allowing JavaScript unit tests without native binaries. It also includes an example app intended to demonstrate modalities, error states, and hook usage. The documented example commands run Metro and native iOS or Android builds.

I did not install the npm package, build the example app, run a biometric prompt, inspect the native Swift or Kotlin implementation, or test the Jest mocks.

## Project maturity and boundary
The package is a new 0.1.x release. It should be evaluated as an early library rather than a mature security boundary. Before production use, verify native behavior on supported devices, inspect failure and lockout handling, review the native implementation, test app lifecycle transitions, confirm New Architecture compatibility, and decide whether biometric success must be bound to a server challenge or hardware-backed key operation.

## Evidence boundary
The npm package page, npm registry metadata, and linked GitHub README were inspected. The package metadata supports version 0.1.1, MIT licensing, repository ownership, peer dependency, and published package structure. The README supports the documented API, platform setup, modality labels, testing guidance, and security statements.

Performance, modality coverage, hardware-enclave behavior, and cross-platform error normalization were not independently reproduced.

## Sources
- https://www.npmjs.com/package/react-native-nitro-biometrics
- https://registry.npmjs.org/react-native-nitro-biometrics
- https://github.com/yashnandha/react-native-nitro-biometrics
- Existing distinct source: src-2026-05-21-002
