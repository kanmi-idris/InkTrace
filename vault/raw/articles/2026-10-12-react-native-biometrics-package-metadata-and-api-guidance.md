---
title: react-native-biometrics package metadata and API guidance
kind: article
captured_at: 2026-10-11 15:18
tags: [React-Native, biometrics, npm, cryptographic-signatures, maintenance]
source_url: https://www.npmjs.com/package/react-native-biometrics
status: raw
---

# react-native-biometrics package metadata and API guidance

## Source scope
This is the npm page for the unscoped package `react-native-biometrics`, not similarly named forks. npm displayed version 3.0.1 and “Published 4 years ago” on 2026-10-11.

## Package documentation
The README says the package generates a public/private key pair in native iOS and Android keystores. It says the private key is unlocked after biometric authentication and used to sign a payload for server verification.

The README distinguishes `simplePrompt()` from `createSignature()`. It explicitly says not to use `simplePrompt()` to log a user in or authenticate with a server; it says to use `createSignature()` for server verification. `simplePrompt()` only reports whether the local biometric prompt succeeded.

The README documents an `allowDeviceCredentials` option that permits device passcode credentials in supported OS versions. Review this fallback if the application requires biometric-only approval.

## Maintenance metadata
npm displayed package version 3.0.1 and a last publish date of four years earlier. This supports the article's concern about stale releases, but package metadata alone does not prove the full maintenance status of the repository.

## Limits
This is package-owner documentation and registry metadata. I did not install the package, inspect its native source, audit its security, or test its behavior. A separately scoped package, `@sbaiahmed1/react-native-biometrics`, is a different package and is captured in `src-2026-10-11-015`.
