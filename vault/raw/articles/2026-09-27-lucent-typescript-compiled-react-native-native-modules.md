---
title: "Lucent: TypeScript-compiled React Native native modules"
kind: "paste"
captured_at: "2026-09-27 18:24"
tags: ["react-native", "native-modules", "jsi", "turbo-modules", "typescript", "cpp", "c++20", "compiler", "expo", "ios", "android", "jni", "objective-c++", "hermes", "cross-platform", "experimental", "mit", "github", "site-reported"]
source_url: "https://github.com/Fausto95/lucent"
status: "inbox"
---

# Lucent: TypeScript-compiled React Native native modules

Source checked: 2026-09-27.

## Resolution and repository snapshot
- The supplied shortened URL https://t.co/LVUAV2XLJe resolves to https://github.com/Fausto95/lucent.
- Lucent is a public MIT-licensed repository that describes a TypeScript-based way to write React Native native modules.
- The GitHub API snapshot reports 19 stars, no forks, three open issues, TypeScript as the primary language, and main as the default branch. These metrics are volatile.
- The repository README explicitly labels Lucent experimental and not suitable for production. It warns that the API and supported language subset can change without a migration path.

## Core approach
- Lucent accepts a checked subset of TypeScript and compiles it to C++.
- The generated native code is exposed through React Native's JSI and a pure C++ TurboModule, so the project's stated goal is to avoid writing separate Swift and Kotlin implementations for shared native-module logic.
- The compiler builds a real TypeScript Program and uses TypeScript's checker for types and narrowing instead of reimplementing type inference.
- The compiler lowers TypeScript structures, classes, unions, closures, generators, async functions, and platform branches into C++ representations. The architecture documentation describes C++20 runtime components, JSI conversions, and generated bindings.
- JavaScript receives generated proxy modules. Native module output is placed under .lucent/native and is autolinked into a React Native application.

## Platform integration
- A Lucent module can access typed iOS and Android SDK declarations from one source tree and branch on the target platform.
- The compiler emits only the selected platform branch and supports platform SDK bindings for Objective-C++ message sends and Android JNI calls.
- Split platform files are also supported for modules that need separate iOS and Android implementations.
- The repository README says Lucent works with bare React Native 0.88 or newer and Expo SDK 58 or newer when using development builds.
- The package includes an Expo config plugin, Metro integration, an editor TypeScript plugin, and a CLI. The documented initial workflow installs @lucent-lang/lucent and runs lucent init.
- The architecture documentation says iOS registration uses React Native's global C++ TurboModule map. Android integration uses a pure C++ dependency and React Native's generated C++ autolinking provider.

## Runtime model
- The runtime is header-heavy C++20 with JSI as the boundary and no dependency beyond the standard library plus JSI for the core runtime.
- The runtime provides JavaScript-like strings, arrays, maps, bytes, numbers, regular expressions, promises, timers, generators, and abort signals.
- Lucent async functions use native coroutines. The runtime schedules promise continuations through a microtask queue and serializes Lucent code through one recursive lock.
- Each JavaScript runtime has one Lucent JSI host that owns native references and coordinates access with the JavaScript thread.
- The runtime includes source-location handling so generated C++ errors can point back to the original .lucent.ts file. The documentation connects this to debugger stepping and crash symbolication.

## Development and verification
- The repository documents compiler, runtime, and end-to-end test suites. The end-to-end suite compares compiled modules with the same logic executed as JavaScript and requires Hermes.
- The architecture documentation describes generated native files, binding declarations, loader proxies, and package bundling. It states that the published package includes the compiler, CLI, runtime templates, Metro integration, and declarations needed during compilation.
- No dependency installation, build, test, demo, or benchmark was run for this capture.

## Evidence limits and relevance
- Compiler capabilities, runtime behavior, platform coverage, and compatibility claims are repository and author-reported. They are not independently validated here.
- The explicit experimental warning is the strongest adoption constraint. The current language subset, APIs, generated output, and migration path may change.
- Lucent is relevant to React Native native-module design, JSI and TurboModule architecture, TypeScript compiler tooling, cross-platform SDK bindings, and reducing duplicated platform glue code.
- The design is distinct from a runtime JavaScript-to-C++ translator: the documented model compiles a restricted TypeScript source set ahead of time and leaves generated JavaScript proxies at the app boundary.
