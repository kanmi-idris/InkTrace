---
title: Android biometric prompts and cryptographic keys
kind: article
captured_at: 2026-10-11 15:18
tags: [Android, BiometricPrompt, Keystore, biometrics, cryptographic-signatures]
source_url: https://developer.android.com/identity/sign-in/biometric-auth
status: raw
---

# Android biometric prompts and cryptographic keys

## Source scope
This is the official Android Developers guide, last updated 2026-10-01. I inspected it on 2026-10-11.

## Documented behavior
- Android says apps can use `BiometricPrompt.CryptoObject` with cryptographic objects such as `Signature`, `Cipher`, `Mac`, or `KeyAgreement`. The app can perform the cryptographic operation after successful biometric authentication.
- Android describes auth-per-use keys for high-value actions, such as a large payment or health-record update.
- Android documents `setInvalidatedByBiometricEnrollment(true)` for invalidating a key after a new biometric is enrolled. Its documentation says this setting is true by default and can be called on API level 24 or higher.
- Android lets an app accept device credentials such as PIN, pattern, or password as an authentication type. The app must choose and configure its accepted authenticator types.

## Limits
The OS prompt and key controls are local to the device. A backend verifies the signature it receives; this guide does not say that a signature identifies the human who used the device. The application must define its credential-fallback and transaction-challenge policy.
