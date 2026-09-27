---
title: "Part 2: Making JSI Faster with More Efficient Data Structures"
kind: "paste"
captured_at: "2026-09-25 15:30"
tags: ["react-native", "jsi", "nitro", "performance", "cpp", "hermes", "arraybuffer", "mutablebuffer", "native-modules", "data-layout", "microbenchmark"]
source_url: "https://margelo.com/blog/make-jsi-run-faster-2"
status: "inbox"
---

# Part 2: Making JSI Faster with More Efficient Data Structures

## Source scope
Margelo's Part 2 article, published April 28, 2026, is by Alex Shumihin. It follows the earlier JSI article about HostFunction versus HostObject, NativeState, stack allocation, and JavaScript-to-C++ boundary crossings. This article focuses on data representation, API contracts, native string construction, and number-to-string conversion.

All reported benchmarks use a release build with Hermes. Each function runs 100,000 times, and the result is averaged over five runs. These are controlled microbenchmarks, not application-level benchmarks.

## Main principle
The article argues that a poor data representation can dominate the cost of an otherwise simple native algorithm. Repeated JSI calls, JavaScript heap allocations, garbage-collection pressure, copying, string conversion, and branching can cost more than the actual loop. The right representation depends on call frequency, data size, safety requirements, and whether the data must remain convenient to use from JavaScript.

## Returning native data to JavaScript
The example models 50 two-dimensional points produced by native code. The article compares three return shapes:

1. An array of JavaScript objects, where every point becomes an object with x and y properties.
2. A flat JavaScript number array containing alternating x and y values.
3. An ArrayBuffer backed by native memory, read from JavaScript through an Int32Array view.

The measured totals are:

- Array of objects: 1036.50 ms.
- Flat array: 311.78 ms, about 3.3 times faster than objects.
- ArrayBuffer: 34.81 ms, about 30 times faster than objects and about 9 times faster than the flat array.

The article attributes the object-array cost to many JavaScript allocations and property writes across the JSI boundary. The flat array removes object creation but still writes each number into a JavaScript array. The ArrayBuffer path moves one contiguous native allocation into JavaScript and avoids per-element boxing or JSI calls.

The native buffer uses JSI MutableBuffer. The native owner keeps the memory alive, and the JavaScript side views it through a typed array. This can provide a zero-copy path, but the C++ layout and JavaScript typed-array type must agree. The article specifically warns that int32_t, float, and double require matching typed views, and that struct padding or mixed fields require explicit offset handling or DataView use.

The practical recommendation is to use ArrayBuffer or MutableBuffer for high-frequency numeric data such as camera landmarks, sensor samples, or other frame-associated values. The trade-off is a less descriptive JavaScript API and more responsibility for memory layout, lifetime, bounds, alignment, and endianness.

## Parameter representation and lookup
The second example maps a JavaScript data-type parameter to several native enum values. The article compares a string-based if/else chain, a numeric switch, and an indexed lookup table. The measured totals are:

- String comparisons and conversion: 12.88 ms.
- Numeric switch: 9.13 ms, about 1.4 times faster.
- Lookup table: 8.67 ms, about 1.5 times faster than the string path.

The article explains that converting a JSI string to UTF-8 allocates or copies data before the native comparisons begin. A numeric contract removes that conversion and makes the mapping cheaper. A lookup table can replace a predictable switch when the numeric value directly represents a valid index.

The safety rule is important: validate the number before indexing. An invalid JavaScript value must not become an out-of-bounds native read. Numeric enums improve hot-path performance only when the boundary contract remains explicit and checked.

The article does not claim that numeric parameters are always better. Strings remain easier to inspect and safer as an external or loosely typed API. The recommendation applies to stable, high-frequency native contracts where the allowed values are controlled.

## Building strings in native code
The third example constructs a GitHub-style release URL from a user name and repository name. It compares format-library construction, reserved std::string concatenation, and a fixed-size character buffer. The measured totals are:

- std::format: 21.35 ms.
- Reserved std::string concatenation: 12.38 ms, about 1.7 times faster.
- Fixed char buffer with direct copies: 7.78 ms, about 2.7 times faster than std::format and about 1.6 times faster than concatenation.

The article attributes the difference to format parsing, type dispatch, temporary allocations, and the number of intermediate operations. Reserving the final string reduces reallocations. A stack buffer avoids dynamic allocation when the maximum size is known.

The fixed-buffer option has the highest safety risk. The code must validate the complete output length before copying. Arbitrary input cannot be written into a fixed buffer without a bounds check. For ordinary application paths, the article recommends the readability and safety of a reserved std::string. It presents a character buffer as a targeted hot-path optimization only when the size constraint is real and enforced.

## Number-to-string conversion
The final example converts the same integer twice while building a result string. The article compares std::to_string with C++17 std::to_chars:

- std::to_string: 16.27 ms.
- std::to_chars: 9.75 ms, about 1.7 times faster.

std::to_chars writes directly into caller-provided storage and avoids temporary string objects. It is useful for compact IDs, counters, timestamps, sizes, and protocol fields when the output format is simple and the buffer size is known. Production code must check the returned error code for a buffer that is too small.

The article recommends std::to_string for normal code where clarity is more important than a small conversion cost. It recommends to_chars for measured hot paths where allocation avoidance matters.

## Performance interpretation
The largest result is the data-shape change, not the branch or string micro-optimization. Returning an ArrayBuffer changes the number of boundary operations and allocations. The numeric lookup and string-construction changes save smaller absolute times and matter only when called frequently enough to accumulate.

The article's results should not be generalized into claims that ArrayBuffer is always faster or that stack buffers are always correct. The benchmark uses a small fixed point structure, a fixed invocation count, a release Hermes build, and one implementation environment. Real applications also pay for native work, scheduling, buffer lifetime, typed-array access, cache behavior, synchronization, and downstream JavaScript processing.

## Engineering checklist
For a high-frequency JSI path:

- Choose the data shape before optimizing the loop.
- Use contiguous typed data for large numeric sequences when the contract permits it.
- Avoid creating many JavaScript objects per native call.
- Keep numeric enum contracts validated at the native boundary.
- Use lookup tables only after checking the index.
- Reserve std::string capacity when constructing predictable output.
- Use fixed buffers only with a verified maximum size and bounds checks.
- Use std::to_chars when allocation-free numeric formatting is measured to matter.
- Profile release builds with the target JavaScript engine.
- Re-test after changing the data contract because readability and safety can degrade while microbenchmarks improve.

## Evidence boundary
The article itself is the primary source for the benchmark values, benchmark setup, implementation comparisons, and recommendations. The companion Part 1 article is cited for the broader JSI architecture context. No independent reproduction was performed during capture. I did not install a native module, compile the snippets, run Hermes, or compare the results on a physical device.

## Sources
- https://margelo.com/blog/make-jsi-run-faster-2
- Companion: https://margelo.com/blog/make-jsi-run-faster
