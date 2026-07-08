---
title: react-native-shiki-engine — Native Oniguruma Syntax Highlighting for React Native
kind: paste
captured_at: 2026-07-03 19:13
tags: [react-native, shiki, syntax-highlighting, oniguruma, jsi, turbo-modules, native-module, cpp]
source_url: https://github.com/skiniks/react-native-shiki-engine
status: inbox
---

# react-native-shiki-engine — Native Oniguruma Syntax Highlighting for React Native

GitHub repo by skiniks. 82 stars, MIT license. Shiki syntax highlighting engine for React Native using a native Oniguruma regex engine via JSI bridge — zero bridge overhead.

Key features:
- High-performance native regex engine using Oniguruma, optimized for syntax highlighting
- Fully synchronous pattern matching — no async/await, no Promises, no Bridge
- Uses JSI and C++ TurboModules for direct JS-to-native communication
- Smart pattern caching (L1: JSI host objects, L2: native memory with LRU eviction)
- Memory efficient with automatic cleanup
- Full compatibility with Shiki's regex engine requirements
- Written in modern C++

Architecture (3-layer):
1. JS Layer: TypeScript interfaces, pattern lifecycle management, Shiki API integration
2. JSI Bridge: zero-copy JS↔native communication, smart pointer memory mgmt, thread-safe LRU caching
3. Oniguruma Core: vendored, non-backtracking algorithm, full Unicode (UTF-8/16)

Requirements: React Native 0.73+ (New Architecture), TurboModules enabled

Platform support: iOS (x86_64 sim, arm64 sim, arm64 device), Android (arm64-v8a, armeabi-v7a, x86, x86_64)

Installation:
- React Native: pnpm add react-native-shiki-engine @shikijs/core + pod install
- Expo: npx expo install ... + npx expo prebuild
- Web (Expo): separate .web.tsx with @shikijs/engine-oniguruma WASM engine

Usage: createHighlighterCore with createNativeEngine() — maintain single instance at app level.

Languages: C 77.2%, C++ 10%, Shell 6.4%, TypeScript 2.1%, Java 1.2%, JavaScript 1.2%
17 releases (latest v0.3.12, Jun 6, 2026), 191 commits, 3 forks.
