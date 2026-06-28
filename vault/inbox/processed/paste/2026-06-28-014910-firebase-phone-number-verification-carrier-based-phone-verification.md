---
title: Firebase Phone Number Verification — Carrier-Based Phone Verification
kind: paste
captured_at: 2026-06-28 01:49
tags: [firebase, phone-verification, carrier-api, android, authentication, firebase-pnv, ai-agent]
source_url: 
status: inbox
---

# Firebase Phone Number Verification — Carrier-Based Phone Verification

Firebase Phone Number Verification (Firebase PNV) is a faster and more secure method for verifying phone numbers. Unlike SMS-based verification (which requires users to receive and input a code from a text message), Firebase PNV works by getting the phone number assigned to the SIM in the device directly from the connected carrier with a single tap. This reduces friction for the user, improves reliability by not depending on SMS message delivery, and eliminates abuse vectors commonly exploited when using SMS (e.g. SMS phishing attacks).

Key capabilities:
- Carriers are the source of truth: Google obtains the verified phone number for the SIM directly from the carrier, telling you what number is on the device running your app right now. SMS OTPs can only tell you if the user has access to the phone number.
- Use standalone or with an identity provider: can be used on its own, or as a sign-in method with Firebase Authentication (via custom auth, since Firebase Auth token support is still under development) or your own auth system.
- Automatically use available carriers: SDK detects compatibility and can fall back to SMS when Firebase PNV is not yet supported. Gradually rolls out to carriers worldwide.
- Eliminate SMS phishing attacks: no SMS messages sent, so users cannot be phished for one-time passcodes used in account takeover attacks.

How it works:
1. Checks that the user's device and mobile carrier are supported.
2. Gets consent from the user to share their phone number with your app.
3. Works with the mobile carrier assigned to the SIM to obtain the verified phone number.
4. Returns a signed token containing the verified phone number, typically in 1-3 seconds from user consent.

Implementation path:
1. Set up Firebase project in Firebase console — enable billing and the Firebase PNV API.
2. Install the SDK and initialize — requires OAuth brand verification.
3. Design an explainer screen (recommended) — explain SIM selection, speed/security vs SMS OTPs.
4. Check for device and carrier compatibility (recommended) — use SDK to check, fall back to SMS if incompatible.
5. Request the verified phone number — triggers user consent, returns signed token.
6. Verify the response token — on backend, verify token signature to extract verified phone number.

Codelab: Add Firebase PNV to Android app
- Builds a "Restaurant Finder" AI voice agent using Firebase AI Logic + Firebase PNV.
- Uses Gemini Live (gemini-live-2.5-flash-native-audio) for voice interaction.
- Test mode: join Google system services beta, generate test token from Firebase console (expires 7 days).
- Production mode: requires Blaze pricing plan, SHA-256 fingerprint, OAuth brand verification (24h+ review).
- SDK version: firebaseBom = "34.13.0", dependency: com.google.firebase:firebase-pnv.
- Single-call API: FirebasePhoneNumberVerification.getInstance().getVerifiedPhoneNumber(context).await()
- Test mode: fpnv.enableTestSession("TOKEN")
- Migration to production: delete test session line, update AI Logic to use Vertex AI backend.

Pricing: pay-as-you-go, carriers supported list available in Firebase console.
