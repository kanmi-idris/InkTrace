# react-native-otp-verify

Captured from the public GitHub repository page and README on 2026-05-07.

Canonical URL:
https://github.com/faizalshap/react-native-otp-verify

---

Repository positioning captured from the public page:

- `faizalshap/react-native-otp-verify`
- Public repository
- Framed primarily around Android SMS Retriever API support for automatic OTP verification.
- Also explicitly includes phone-number retrieval using Google’s Phone Number Hint API.

Public repository metadata captured from the public page:

- Stars shown: 286
- Forks shown: 109
- Latest release shown: `1.1.8`

Phone hint notes captured from the public page:

- The README documents `requestHint(): Promise<string>`.
- It describes the method as getting a phone number in a frictionless way to show a user’s SIM-based phone numbers as a hint.

Broader library scope captured from the public page:

- `getHash()`
- `startOtpListener()`
- `getOtp()`
- hook-based `useOtpVerify`
- SMS Retriever-based Android OTP listening without extra permissions

React Native integration notes captured from the public page:

- Install with `npm install react-native-otp-verify` or `yarn add react-native-otp-verify`.
- Auto-linking is described for React Native `>= 0.60`.
- Manual Android linking steps are also documented.

Interpretive note:

- This source fits the React Native notes as a pure React Native CLI path for Android phone-number hints, but inside a broader OTP verification library rather than as a narrowly scoped dedicated module.
