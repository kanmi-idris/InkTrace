---
title: Fingerprint Identification — Product Demo, Webinar Transcript & Mobile SDK Docs
kind: paste
captured_at: 2026-07-03 20:07
tags: [fingerprint, device-intelligence, fraud-detection, visitor-id, smart-signals, mobile-sdk, ios, android]
source_url: https://docs.fingerprint.com/
status: inbox
---

# Fingerprint Identification — Product Demo, Webinar Transcript & Mobile SDK Docs

Collection of Fingerprint commercial product materials:

1. Playground Demo (demo.fingerprint.com/playground):
   - Visitor ID: ccvfWyaqxRGIsKrtMd90
   - Confidence Score: 1 (99.5% accuracy claimed)
   - Browser: Chromium-Based (Mac OS X 10.15.7)
   - IP: 102.88.113.107 (Lagos, Nigeria, MTN)
   - Smart Signals: Incognito not detected, Bot not detected, VPN not detected, Browser Tampering not detected, Developer Tools not detected, Virtual Machine not detected, Privacy Settings not detected
   - IP Blocklist: IP used by residential proxy provider NetNut (medium confidence)
   - Velocity: 4 IPs, 1 Linked ID in 24h
   - Suspect Score: 4
   - Raw device attributes: fonts, canvas, WebGL, screen resolution, audio fingerprint, plugins, system fonts, timezone, etc.

2. Webinar Transcript (Fingerprint overview by Dewey Tran & John George):
   - Core product: device/browser identification via visitor ID (starts with unique string, NOT PII)
   - ~120 signals collected on web, <100 on mobile
   - Accuracy: 99.5%
   - Works across incognito, VPN, cookie deletion
   - Three major use case buckets: prevent fraud (account takeover, payment fraud, signup fraud, account sharing), improve UX (skip MFA/KYC for trusted devices), user insights (marketing attribution)
   - Smart Signals: bot detection, incognito detection, IP geolocation, VPN detection, browser tampering detection, IP blocklist matching, privacy settings detection, raw device attributes, Android emulation/root detection, virtual machine detection, cloned app detection, jailbroken/Frida detection (iOS), factory reset detection
   - Customer examples: Dropbox (prevented 3 large-scale attacks, 80% account takeover reduction), Jumia (reduced SMS OTP fraud costs)
   - Architecture: JavaScript agent for web, native SDKs for mobile, server-side processing + extended result API
   - 4.1.1 JS agent version, integrations with CloudFront, React
   - Server API provides 90-day historical lookup per visitor ID
   - GDPR/CCPA: fraud use cases have carve-outs (no consent needed), UX/insights require consent. No PII collected by Fingerprint (IP may be PII in some regions)
   - Does NOT match devices across platforms (desktop → mobile) — each device/browser gets unique visitor ID

3. Mobile Device Identification (docs.fingerprint.com/docs/mobile-identification):
   - Mobile SDKs: Android (native), iOS (native), Flutter, React Native
   - For websites: visitor ID identifies the browser (each browser on same device = different ID)
   - For mobile apps: visitor ID identifies the device (all browsers same device = same ID)
   - Mobile accuracy higher than browser due to OS-level signal access
   - Smart Signals available for mobile: proximity detection, location spoofing, VPN (mobile), MITM attack, tampered request, cloned app (Android), emulator (Android), rooted device (Android), jailbroken device (iOS), iOS simulator, factory reset timestamp, Frida detection
   - Evading ad blockers via proxy integration
   - Privacy: Apple privacy manifest file required for App Store, Data Safety section for Google Play
   - Demo apps available on App Store and Google Play
