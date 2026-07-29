---
title: How Worklets Bundle Mode accidentally fixed Hermes V1 memory regression
kind: paste
captured_at: 2026-07-21 16:17
tags: [react-native, hermes, worklets, reanimated, memory-leak, performance, swmansion]
source_url: https://swmansion.com/blog/how-worklets-bundle-mode-accidentally-fixed-Hermes-v1-memory-regression/
status: inbox
---

# How Worklets Bundle Mode accidentally fixed Hermes V1 memory regression

Article by Tomasz J. Żelawski (Jul 21, 2026) on Software Mansion blog explaining a memory regression in Hermes V1 and Worklets.

Key Findings:
- Cause: Hermes V1 attached ~512KB of debug metadata to every worklet function evaluated dynamically on secondary runtimes (UI thread) via Legacy Eval Mode.
- Scale: 100+ worklets at app startup consumed >50MB extra memory; apps with 1,000+ worklets (like Expensify) faced up to 0.5GB potential allocation.
- Fix 1 (Recommended): Worklets Bundle Mode (Worklets 0.10.0+), exposing full JS bytecode bundle to secondary runtimes via mmap lazy loading.
- Fix 2: Hermes Bytecode option in Babel plugin for Legacy Eval Mode.
- Fix 3: Pin Hermes version to 0.15 (250829098.0.15).
- Fix 4: Upgrade to React Native 0.87 (releasing Aug 8, 2026 with upstream fix).
