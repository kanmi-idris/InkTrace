---
title: Expo Blog - Deferred Deep Linking the Right Way
kind: paste
captured_at: 2026-07-24 08:38
tags: []
source_url: 
status: inbox
---

# Expo Blog - Deferred Deep Linking the Right Way

Expo blog post (2026-07-22): "From Expo Router to Detour: Deferred deep linking the right way"

Standard deep links (Universal Links on iOS, App Links on Android) work when app is installed. Problem: when a new user clicks a link before installing, the URL context is lost across the App Store/Play Store boundary — the "Installation Gap."

Detour (Software Mansion) solves this by integrating with Expo Router's own extension points — resolves links before the first screen renders, avoiding post-mount useEffect races and manual URL parsing.

Key integration points:
- +native-intent.tsx: pre-routing middleware that intercepts and transforms URLs before routing begins. Detour checks if it's a deferred link, resolves the original URL, feeds it to the router before any screen mounts.
- DetourProvider + useDetourContext: holds link intent in memory until auth gate passes. clearLink() ensures it fires only once.
- Auth gate handling: link stays in memory until isSignedIn becomes true, then router.replace(link.route) fires exactly once.

Matching:
- Android: deterministic via Install Referrer API (1:1 click_id match, 100% accuracy)
- iOS: probabilistic (Apple treats App Store as privacy boundary — no Install Referrer API equivalent). Uses non-identifying signal snapshots from browser click vs app launch.

Detour built by Software Mansion (Reanimated, Gesture Handler, parts of EAS). Contribution to Expo ecosystem since 2017.
See also: detour.swmansion.com, previous coverage in src-2026-06-06-001 and src-2026-04-12-044.
