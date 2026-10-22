---
title: "react-native-file-hash: Native Streaming Hashes for React Native"
kind: "paste"
captured_at: "2026-09-27 18:17"
tags: ["react-native", "native-modules", "file-hashing", "checksums", "sha-256", "hmac", "blake3", "xxh3", "jsi", "new-architecture", "zig", "performance", "ios", "android", "expo", "github", "mit", "site-reported"]
source_url: "https://github.com/Preeternal/react-native-file-hash"
status: "inbox"
---

# react-native-file-hash: Native Streaming Hashes for React Native

Source checked: 2026-09-27.

## Repository snapshot
- Preeternal/react-native-file-hash is a public MIT-licensed React Native native module for hashing files and strings.
- The GitHub API snapshot reports seven stars, one fork, no open issues, TypeScript as the primary language, and master as the default branch. These repository metrics are volatile.
- Starting with version 3.0.0, the package supports React Native's New Architecture only. Projects that still require the legacy bridge should use the 2.x line according to the README.

## Core design
- fileHash streams file data in native chunks instead of loading an entire file into JavaScript memory.
- The design keeps long-running work off the JavaScript thread and gives each concurrent operation its own native hash state.
- stringHash is intended for small strings or base64 payloads that are already in JavaScript memory.
- File inputs include local paths, file URLs, Android content URIs, and provider-backed iOS file URLs when the application has access.
- Results are lowercase hexadecimal digests. SHA-256 is the default when no algorithm is selected.
- AbortController-style cancellation is supported for long-running file hashes and stops at chunk boundaries.

## Algorithms and security use
- The README lists SHA-2 variants, HMAC variants, MD5 and SHA-1 for legacy compatibility, XXH3-64 and XXH3-128 for fast non-cryptographic checksums, and BLAKE3 with optional keyed mode.
- HMAC algorithms require a key. Keyed BLAKE3 requires a decoded 32-byte key.
- XXH3 seeds provide reproducible namespaces but are not secrets and do not make XXH3 cryptographic.
- The project recommends SHA-256 for general integrity checks, HMAC-SHA-256 for shared-secret authentication, and XXH3 for fast non-security checksums.
- The README warns against MD5 and SHA-1 for new security-sensitive designs.

## Platform status
- iOS and Android are marked stable. The native engine is the default, with an optional Zig engine.
- React Native macOS and Windows support are marked experimental and use the Zig engine only.
- Expo Go is not supported because the module contains native code. The README points users toward a Development Build, EAS Build, or Expo prebuild.
- The package supports Android content URIs and iOS provider-backed files, which makes it suitable for document-picker and cloud-provider workflows.

## Engines and file handling
- The default native engine uses platform APIs and native C implementations for BLAKE3 and XXH3.
- The optional Zig engine aims to provide a portable hashing core across platforms and can route some path or file-descriptor operations through one native call.
- An opt-in mmap option is available for stable regular local files on supported paths. The README warns against using it while another process can change or truncate the file because a mapped file may fault.
- XXH3-128 is currently native-only according to the README.
- Package users do not need a local Zig toolchain because release artifacts include Zig prebuilts.

## Benchmark evidence and limits
- The repository includes release measurements for a 200 MiB file on physical Android and iOS devices, plus Zig-only macOS and Windows snapshots.
- The benchmark page says current iOS Zig is faster than native for several SHA-2, HMAC, BLAKE3, and XXH3-64 cases, while native remains faster for SHA-1 and the SHA-384 and SHA-512 families in that measurement set.
- On Android, Zig is substantially faster for SHA-512/224 and SHA-512/256 in the reported run, while native is faster for several other algorithms including BLAKE3 and XXH3-64.
- Desktop results use an Apple M4 Max for macOS and an ARM64 QEMU virtual machine for Windows. The Windows figures are not physical-hardware comparisons.
- The project says these are engine-selection snapshots, not release-to-release speedup claims. It recommends measuring the target device, file size, storage, build mode, and algorithm before enabling options such as mmap.
- Benchmark values are repository-reported. No benchmark or package build was run for this capture.

## Relevance to InkTrace
- This library is relevant to React Native file integrity, media fingerprinting, upload deduplication, cache-key generation, HMAC authentication, and native performance design.
- Its streaming boundary avoids moving large file contents through JavaScript and provides a clear example of native work coordinated through a React Native module.
- Its engine matrix also shows why performance claims must keep the algorithm, platform, device, build mode, and input size attached to the result.
