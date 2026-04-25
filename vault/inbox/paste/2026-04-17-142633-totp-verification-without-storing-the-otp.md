---
title: TOTP verification without storing the OTP
kind: paste
captured_at: 2026-04-17 14:26
tags: [security, auth, otp, totp]
source_url: 
status: inbox
---

# TOTP verification without storing the OTP

Interviewer:

An OTP is valid for exactly 30-60 seconds. Even though no one stored it anywhere.

how does the server verify it without ever saving it?

That's usually TOTP 😄

No OTP is stored.

Instead both sides share a secret key.

Then:

• Current time window (30s / 60s)  
• Secret key  
• Algorithm (HMAC)

Together they generate the same code independently.

Server just recalculates and compares.

So it verifies the OTP  
without saving the OTP itself 🚀

## Diagram note

The attached diagram shows the TOTP token side and the server side deriving the same time-based OTP from the shared secret and current time, then comparing the presented code to allow or deny authentication.
