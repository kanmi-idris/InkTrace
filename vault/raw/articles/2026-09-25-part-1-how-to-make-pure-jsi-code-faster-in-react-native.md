---
title: "Part 1: How to Make Pure JSI Code Faster in React Native"
kind: "paste"
captured_at: "2026-09-25 15:31"
tags: ["react-native", "jsi", "nitro", "performance", "cpp", "hermes", "host-function", "host-object", "native-state", "stack-allocation", "memory", "microbenchmark"]
source_url: "https://margelo.com/blog/make-jsi-run-faster"
status: "inbox"
---

# Part 1: How to Make Pure JSI Code Faster in React Native

## Source scope
Margelo published this Performance article on April 23, 2026. It is by Alex Shumihin and is Part 1 of a JSI performance series. Part 2 is captured separately as src-2026-09-25-005.

The article focuses on pure JSI modules running in hot paths. It argues that JSI removes the legacy React Native bridge but does not make boundary crossings, property lookup, string conversion, virtual dispatch, or allocation free. Its main recommendation is to select the right API shape before applying lower-level micro-optimizations.

The examples use release builds with Hermes and one million iterations for the main comparisons. The results are controlled microbenchmarks from the article, not independent application benchmarks.

## HostFunction versus HostObject
A module can expose a callable function directly as a HostFunction, or expose a HostObject whose get method resolves a property name and creates or returns the function. The JavaScript API can look similar, but the runtime work differs.

For a HostObject property access, the native runtime may perform virtual dispatch into HostObject::get, convert a PropNameID to a UTF-8 string, compare the property name, and create or retrieve a HostFunction. The article stresses that get runs for each property access unless the implementation provides a more direct path.

The direct HostFunction benchmark reports:

- HostObject: 181.09 ms.
- HostFunction: 26.87 ms.

The measured ratio is about 6.7 times, while the article describes the improvement as roughly 5 times. The important result is architectural: a stateless callable should usually be installed as a direct function rather than hidden behind dynamic property resolution.

If a HostObject is required, the article recommends reducing lookup work by caching stable PropNameID values instead of repeatedly converting names to strings. It also describes hashed or generated dispatch for fixed property sets. The article states that Nitro Modules applies related generated-dispatch and property-caching patterns for its generated objects.

## NativeState versus HostObject
Stateful native objects need a place to keep native data between calls. The article compares a HostObject that resolves an increment method dynamically with a plain JavaScript object that owns a jsi::NativeState instance and exposes a direct HostFunction. The direct function retrieves the native state from thisVal.

The one-million-call benchmark reports:

- HostObject: 188.20 ms.
- NativeState: 38.19 ms.

NativeState is about 4.9 times faster in this test. The article attributes the difference to avoiding HostObject::get, property-name conversion, string comparison, and repeated dynamic method resolution.

The pattern is a good fit when method names are known at construction time, native state is the natural owner of the data, and dynamic property interception is not required. HostObject remains appropriate when an implementation genuinely needs dynamic property behavior.

The article also states that Nitro HybridObjects use a NativeState-backed object model, so Nitro users receive much of this optimization through the framework. This is a framework description from the article, not an independent inspection of every Nitro version.

## Stack buffers versus heap-backed strings
The article next builds a 256-byte ASCII string one million times. It compares a resized std::string with a fixed char array on the stack:

- std::string: 146.70 ms.
- char buffer: 46.64 ms.

The fixed buffer is about 3.1 times faster in the example. The explanation is lower allocation and indirection overhead, better locality, and a known maximum size.

The article qualifies this advice with small-string optimization. Short std::string values can remain inside the string object, but a 256-byte value normally exceeds that internal capacity and requires additional storage. A stack buffer is useful only when the maximum size is known and the stack usage is reasonable.

For ASCII-only output, the article recommends jsi::String::createFromAscii with an explicit length. The length means the local buffer does not need a null terminator. For existing UTF-8 or UTF-16 data, it recommends using the constructor matching the representation already in memory, rather than converting formats without need.

The fixed-buffer technique must include bounds validation before writing. A buffer that is faster in a benchmark is unsafe when input length is not constrained.

## Avoiding a temporary string in a hex conversion
A smaller example converts data into a 32-character hexadecimal result. The baseline creates a temporary std::string and then passes it to the JSI string constructor. The optimized form writes directly into a caller-provided char buffer and passes that buffer with its known length.

The benchmark reports:

- Temporary-string version: 60.36 ms.
- Direct char-buffer version: 45.95 ms.

The direct-buffer form is about 1.3 times faster. The article describes the gain as removal of a temporary string, a copy into that string, and related allocation work. It presents this as a smaller hot-path optimization, not a replacement for good module architecture.

## Reduce JavaScript-to-C++ crossings
Every JSI call has boundary costs: entering native code, reading and validating arguments, converting values, and wrapping the result back for JavaScript. The article recommends checking whether several small calls can become one batched call, or whether intermediate JavaScript-visible values can remain native.

This advice applies beyond JSI. A fast native function can still produce poor total performance if the API invokes it many times with tiny payloads. The right optimization target is the complete call pattern, not only the C++ body.

## Practical decision guide
Use a direct HostFunction when the operation is stateless and can be installed once.

Use a plain JavaScript object with NativeState and direct HostFunctions when the object needs stable native state but not dynamic property interception.

Use a HostObject when dynamic property behavior is required, while caching property identifiers or using generated dispatch where possible.

Use a stack buffer for short-lived strings only when the maximum size is known, bounds are checked, and stack use is acceptable.

Use the JSI string constructor that matches the data already in memory. Do not convert ASCII or UTF-16 data to UTF-8 without a reason.

Batch work across the JS-to-C++ boundary when repeated small calls dominate the profile.

## Relationship to Part 2
Part 2 continues from this article's architecture guidance. It covers data shape when returning numeric data, numeric API parameters, URL string construction, and number-to-string conversion. Together, the two articles form a performance checklist: remove dynamic dispatch first, then reduce allocations, copies, and boundary crossings in the remaining hot paths.

## Evidence boundary
The Margelo article is the primary source for the benchmark values, implementation comparisons, Nitro notes, and recommendations. No independent reproduction was performed. I did not compile the examples, run Hermes, inspect Nitro generated code, or measure a physical React Native application. The ratios are calculated from the article's displayed times where useful.

## Sources
- https://margelo.com/blog/make-jsi-run-faster
- Companion: https://margelo.com/blog/make-jsi-run-faster-2
- Related captured record: src-2026-09-25-005
