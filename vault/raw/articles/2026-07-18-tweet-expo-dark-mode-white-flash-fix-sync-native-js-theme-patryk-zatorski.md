---
title: Tweet: Expo dark mode white-flash fix — sync native + JS theme (Patryk Zatorski)
kind: paste
captured_at: 2026-07-18 01:14
tags: [tweet, expo, dark-mode, liquid-glass, theming, rn, ios, patryk-zatorski]
source_url: https://x.com/patzatorski/status/2078209372069454325
status: inbox
---

# Tweet: Expo dark mode white-flash fix — sync native + JS theme (Patryk Zatorski)

# Tweet: Expo dark mode white-flash fix — sync native + JS theme (Patryk Zatorski)

Patryk Zatorski (@patzatorski), Jul 17 2026 (1.2K views):
"💡 If you're building dark mode with @expo and your native components briefly flash white (especially Liquid Glass on iOS), your native theme is probably out of sync with your JS theme. Sync both, and the flashes disappear. ✨ P.S. Tell your AI agents about it... mine didn't catch that one. 😂"

Linked image (pbs.twimg.com/media/HNdIJvdXkAA2smf) — not text-accessible; likely a code/config snippet showing the native+JS theme sync. The user attached a PNG that could not be read by the capture model (no image input), so only the tweet copy is recorded as evidence.

## The fix (from tweet text)
- Symptom: native components briefly flash white on dark mode in Expo, especially iOS Liquid Glass.
- Root cause: native theme out of sync with the JS theme.
- Fix: sync BOTH the native theme and the JS theme so they flip together — flashes disappear.

## Positioning
Fits the Expo/RN theming + Liquid Glass cluster already in the vault:
- `src-2026-07-12-008` — bottom tabs + drawer + liquid glass aesthetic (Expo SDK 54, Reanimated 4)
- `src-2026-07-12-009` — Expo blog: nesting tabs and drawers with Expore Router (flash-free theming, gesture conflict avoidance)
- `src-2026-07-16-006` — Margelo: native-feeling AI chat app with Liquid Glass composer

This is a concrete, reusable gotcha for any Expo dark-mode work — a good candidate for a wiki "Expo dark mode / Liquid Glass theming" note. Cross-link the above.

## Caveat
- The embedded code screenshot was not captured (image not readable). Treat the "sync native + JS theme" as the actionable claim; verify the exact API (e.g. `Appearance`, `useColorScheme`, native module theming) against the image/source before relying on it.
