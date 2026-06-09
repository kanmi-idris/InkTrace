# Biometrics authentication for your mobile app

Captured from the user-supplied article text and URL on 2026-05-27.

Canonical URL:
https://thoughtbot.com/blog/biometrics-authentication-for-your-mobile-app

Article metadata visible in the supplied text:

- title:
  - `Biometrics authentication for your mobile app`
- author:
  - Rakesh Arunachalam
- published date:
  - 2026-05-25

Core framing captured from the article:

- The article compares three different biometrics-authentication approaches for React Native mobile apps.
- It explicitly treats the choice as a security architecture tradeoff rather than just a UI or package-selection question.
- The strongest intended audience appears to be teams building apps with sensitive or regulated data, especially finance, healthcare, and similar products.

Approach 1 captured from the article:

- simple biometric prompt
- prompt succeeds
- app then independently reads an auth token from secure storage

Security interpretation captured from the article:

- biometric success and token retrieval are separate, unlinked operations
- there is no cryptographic coupling between biometric success and token access
- the article treats this as an app-level gate rather than hardware-enforced protection

Expo and bare-workflow notes captured for Approach 1:

- Expo managed workflow:
  - `expo-local-authentication`
  - `expo-secure-store`
- React Native CLI / bare:
  - `react-native-biometrics`
  - `react-native-keychain`

Approach 2 captured from the article:

- asymmetric key pair
- private key generated on device and locked behind biometrics
- public key stored on the server
- server issues a one-time challenge
- device signs the challenge after biometric success
- server verifies the signature and issues an access token

Security interpretation captured from the article:

- biometrics and authentication are cryptographically coupled
- replay protection comes from one-time challenge plus expiry
- the article treats this as the approach closest to FIDO2 or WebAuthn among the three
- runtime-hooking bypasses are harder because a valid signature still requires the non-exported private key

Expo and bare-workflow notes captured for Approach 2:

- Expo managed workflow does not support this with the standard SDK surface
- `expo-local-authentication` exposes prompt-style APIs but not key-generation or signature APIs
- React Native CLI can implement this with `react-native-biometrics` and backend endpoints for:
  - public-key enrollment
  - challenge issuance
  - signature verification

Approach 3 captured from the article:

- store the token in iOS Keychain or Android Keystore with biometric access-control flags
- OS shows the biometric prompt as part of the read itself
- app reads the protected token rather than prompting and then separately reading

Security interpretation captured from the article:

- this creates OS or hardware-enforced token release rather than an app-level boolean check
- the article presents it as more secure than Approach 1 while avoiding the backend complexity of Approach 2
- it still does not provide server-side proof of biometric use because the server only sees a normal token-based flow

Expo and bare-workflow notes captured for Approach 3:

- Expo:
  - `expo-secure-store`
  - `requireAuthentication: true`
- React Native CLI:
  - `react-native-keychain`
  - `ACCESS_CONTROL.BIOMETRY_CURRENT_SET`
  - `SECURITY_LEVEL.SECURE_HARDWARE`

Conclusion captured from the article:

- Approach 1 is framed as acceptable for low-sensitivity or convenience-first apps.
- Approach 3 is framed as the practical default for most sensitive apps because it raises protection substantially without backend changes.
- Approach 2 is framed as the strongest option when a team can support the backend complexity and needs stronger assurance or compliance posture.
- The article explicitly states that sensitive-industry teams often start with Approach 3 and move toward Approach 2 when audits or compliance requirements demand server-side verification.

Interpretive note:

- This source is strongest as mobile authentication and storage architecture guidance. Its durable value is the explicit comparison between app-level prompts, hardware-backed challenge-response signing, and OS-enforced secret release, including how those choices interact with Expo managed workflow constraints, React Native bare tooling, server architecture, and runtime-hooking resistance.
