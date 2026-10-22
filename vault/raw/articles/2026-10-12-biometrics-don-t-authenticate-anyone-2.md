---
title: Biometrics Don’t Authenticate Anyone
kind: article
captured_at: 2026-10-11 15:18
tags: [biometrics, authentication, React-Native, Expo, mobile-security, fintech]
source_url: https://medium.com/@pelumiogundipe905/biometrics-dont-authenticate-anyone-a029c5304f9c
status: raw
---

# Biometrics Don’t Authenticate Anyone

## Source details
- Author: Pelumiogundipe
- Medium displayed “Oct, 2026” and “5 min read.” It showed “1 hour ago” when inspected on 2026-10-11.
- Tags shown: React Native, Biometrics, Biometric Authentication, Android, iOS.

## Article thesis
The author argues that a local biometric prompt is not server-side authentication by itself. A boolean returned to JavaScript can be altered on a compromised client, and a passcode or newly enrolled biometric may satisfy the device prompt without the server knowing which person acted.

## Proposed key-based flow
The author recommends enrolling a device key only after a full password or OTP login. The device creates a private/public key pair; the private key stays in the iOS Keychain or Android Keystore and requires biometric approval for use. The app sends the public key to the server. For login or a transfer, the server sends a random challenge. The device signs it through the OS biometric-gated key, and the server checks the signature.

The author says challenges should be random, single-use, short-lived, stored only until use, and rejected after expiry. For high-value actions, the article recommends a fresh signed challenge. It also recommends deleting stored public keys after password changes or lost-device reports, and requiring full login before enrolling a new device.

## Biometric-set changes and Expo
The article recommends binding the key to the biometric set present at enrollment. It names iOS `biometryCurrentSet` and Android `setInvalidatedByBiometricEnrollment(true)`. It says a changed biometric set should invalidate the key and trigger full login before re-enrollment.

For Expo, the article describes `expo-secure-store` with `requireAuthentication: true` as a local protection option. It says this does not give the server proof that biometrics were checked, because the server still sees a refresh token. It recommends signed challenges for transfers.

## Library status claim
The author says the original `react-native-biometrics` package has not been maintained since 2022 and advises pinning and testing it. Current package metadata and its own API guidance are recorded in `src-2026-10-11-011`.

## Interpretation and limits
The title is broad. Platform biometrics can authenticate locally and gate access to a key. A server-side signature proves that a registered key signed a challenge; it does not send the biometric data to the server or by itself identify which human used the device. The article does not discuss hardware-backed key attestation or binding all transaction details to the challenge. Verify these controls in a real implementation.

The article's accessible text showed labels for client/server code, but not the code blocks themselves. I recorded the prose only. This is the author's advice, not an independent security audit.
