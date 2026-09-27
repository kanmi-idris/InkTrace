---
title: "Nitro Direct Hermes APIs: Author-Reported Almost 2x Performance Gain in react-native-mmkv"
kind: "paste"
captured_at: "2026-09-23 02:56"
tags: ["react-native", "nitro-modules", "hermes", "jsi", "react-native-mmkv", "performance", "native-modules", "margelo", "benchmark-claim"]
source_url: "https://x.com/mrousavy/status/2102373879964455345"
status: "inbox"
---

# Nitro Direct Hermes APIs: Author-Reported Almost 2x Performance Gain in react-native-mmkv

## Source type
This capture records a post by Marc Rousavy and its reply on X. The post describes an experiment in which Nitro Modules moved from higher-level JSI APIs to Hermes APIs directly. The reported test target was react-native-mmkv, a widely used Nitro Module. The post claims almost 2x faster performance, but does not publish the benchmark workload, device, Hermes version, sample count, statistical spread, or raw measurements. I therefore record the speedup as an author-reported experiment, not an independently verified benchmark.

## What changed
The follow-up reply says the underlying converter changed from JSIconverter<T> to HermesConverter<T>, while application code in react-native-mmkv remained unchanged. The intended architectural benefit is that Nitro keeps the public native-module interface stable while allowing its internal JavaScript engine integration to change underneath it. If the converter boundary is compatible, a library consumer may receive the runtime improvement without a source-level migration in the MMKV package.

## Relationship to the existing technologies
The current react-native-mmkv V4 README describes MMKV as a synchronous C++ key-value storage library with direct JavaScript bindings, encryption, multiple instances, ArrayBuffer support, and iOS, Android, and Web support. It identifies V4 as a Nitro Module and says it uses JSI and C++ NitroModules instead of the old React Native Bridge. The same README advertises approximately 30x faster performance than AsyncStorage, which is a separate project-level comparison and should not be confused with this new almost-2x converter experiment.

Nitro's official README describes statically compiled bindings to JSI, a C++ core library, generated JavaScript-to-C++ type converters, and native implementations in C++, Swift, Kotlin, or Java. The new experiment appears to target the converter/runtime layer beneath that public module API: the post does not claim that MMKV's storage engine, data format, or JavaScript API changed.

## Why the claim matters
The experiment suggests a potential performance path for Nitro modules that avoids requiring each downstream module to rewrite its source. The likely target is conversion and boundary overhead for values crossing between JavaScript and native code. This is especially relevant to MMKV because its public API performs synchronous native calls and supports strings, numbers, booleans, and ArrayBuffers. However, the post does not state which MMKV operations were measured or whether the gain applies equally to all value types.

## Evidence boundary
The X post and reply were inspected directly. The official react-native-mmkv README and the official Nitro README were also inspected. GitHub API metadata checked at capture time reports 8,507 stars and 342 forks for react-native-mmkv, and 1,951 stars and 117 forks for margelo/nitro; both repositories report MIT licensing.

The almost-2x result is not independently verified here. No repository checkout, Hermes build, device test, benchmark harness, or raw result table was inspected. The post also does not establish whether the result applies to production builds, debug builds, iOS, Android, or a specific class of operations. Treat the compatibility claim as the author's description of the experiment, not as proof that every Nitro module can switch converters without changes.

## Related records
InkTrace already contains Nitro-related captures, including react-native-nitro-biometrics (src-2026-05-21-002), a Margelo article about rewriting Rive React Native with Nitro Modules (src-2026-07-10-001), and the fast-jev-compaction record, which uses TypeSafe rather than Nitro. No existing MMKV-specific capture was found before this record.

## Sources
- https://x.com/mrousavy/status/2102373879964455345
- https://github.com/margelo/react-native-mmkv
- https://github.com/margelo/nitro
