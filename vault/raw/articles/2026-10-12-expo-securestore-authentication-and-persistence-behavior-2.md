---
title: Expo SecureStore authentication and persistence behavior
kind: article
captured_at: 2026-10-11 15:18
tags: [Expo, SecureStore, biometrics, React-Native, mobile-security]
source_url: https://docs.expo.dev/versions/latest/sdk/securestore/
status: raw
---

# Expo SecureStore authentication and persistence behavior

## Source scope
This is the official Expo SecureStore documentation as displayed on 2026-10-11. It describes storage behavior and platform differences. I did not install the package or test an app.

## Documented behavior
- Expo describes SecureStore as encrypted key-value storage on the device. Android uses SharedPreferences encrypted with Android Keystore; iOS uses Keychain services.
- With `requireAuthentication: true`, data becomes inaccessible after changes to the user's biometric settings, such as adding a fingerprint.
- The docs say Android requires authentication for operations using this option. On iOS, the system prompts when reading or updating an existing value, not when initially saving it.
- Expo says this option is not supported in Expo Go when biometric authentication is available, because Expo Go lacks the required `NSFaceIDUsageDescription` key.
- Expo says not to rely on SecureStore as the only source of critical, irreplaceable data. It notes that iOS Keychain values may persist across reinstall with the same bundle ID, but this behavior is not guaranteed.

## Comparison with the Medium article
The article says `getItemAsync` returns `null` after biometric changes. Expo's docs say the value becomes inaccessible. Confirm the exact error or return behavior in the app's SDK version. The article correctly distinguishes local storage access from server-verifiable challenge signing; SecureStore does not provide a signature to the server.
