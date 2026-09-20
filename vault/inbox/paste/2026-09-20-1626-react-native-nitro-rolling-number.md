---
title: "react-native-nitro-rolling-number"
kind: paste
captured_at: "2026-09-20 16:26"
tags: [react-native, nitro-modules, jsi, animation, native-ui, performance, accessibility]
source_url: "https://github.com/ronickg/react-native-nitro-rolling-number"
status: inbox
---

# react-native-nitro-rolling-number

Source: https://github.com/ronickg/react-native-nitro-rolling-number

Repository: `ronickg/react-native-nitro-rolling-number`

## Summary

A native rolling-number component for React Native built with Nitro Modules. According to the repository README, digit animations are driven by a shared C++ engine on iOS and Android, while value updates cross JSI. The project targets React Native 0.78+ with the New Architecture and Nitro Modules 0.37+.

## Notable capabilities

- Native rolling-digit animations on iOS and Android.
- JSI-based value updates with animation work continuing independently of a busy JS thread.
- Fraction digits, grouping and decimal separators, currency prefixes/suffixes, zero padding, and negative values.
- Easing, spring, staggered animation, and jackpot-style reveal modes.
- Accessibility support including VoiceOver / TalkBack and Reduce Motion behavior.
- Fabric recycling support for long lists.
- Imperative APIs including `jumpTo`, `animateTo`, and `revealTo`.
- Repository also contains `react-native-nitro-input`, a native morphing text/amount input.

## Performance claims from README

The README reports release-build benchmarks using 24 components receiving a new value every frame:

- iPhone 13 Pro Max: Nitro Rolling Number reported at 120 fps with 0 dropped frames.
- Pixel 10: Nitro Rolling Number reported at 60 fps with 0 dropped frames.

These are repository-published benchmark claims and should be verified against `BENCHMARKS.md` before treating them as independently established results.

## Install

```sh
bun add react-native-nitro-rolling-number react-native-nitro-modules
cd ios && pod install
```

## Related

- Docs and live demos are linked from the repository README.
- Built using Nitro Modules.
- The repository's docs compile the same C++ engines to WebAssembly for browser demos.
