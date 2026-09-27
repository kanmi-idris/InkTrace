---
title: "Four Years of React Native Quick Crypto: From Wallets to Node Parity"
kind: "paste"
captured_at: "2026-09-25 15:28"
tags: ["react-native", "react-native-quick-crypto", "cryptography", "security", "jsi", "nitro", "openssl", "webcrypto", "post-quantum", "crdt", "wallets", "performance", "node-parity"]
source_url: "https://margelo.com/blog/four-years-of-react-native-quick-crypto"
status: "inbox"
---

# Four Years of React Native Quick Crypto: From Wallets to Node Parity

## Source scope
Margelo published this security-category article on June 11, 2026. The page identifies Brad Anderson as the maintainer of react-native-quick-crypto. It presents a four-year project history, the migration from hand-written JSI bindings to Nitro Modules, expanded Node and WebCrypto compatibility, post-quantum algorithms, a maintainer-reported security review, benchmarks, and package adoption.

The article is a project history and maintainer account. It is not an independent security audit, a reproducible benchmark report, or a complete implementation inventory. Claims in those categories remain labelled as self-reported below.

## Project evolution
The project began in February 2022 as react-native-fast-crypto. The initial goal was to replace JavaScript crypto polyfills in React Native wallet and Web3 applications with native C/C++ code exposed through JSI. The article describes early work by Marc Rousavy, followed by Szymon Kapała's OpenSSL integration, worker-thread dispatch, JSI conversion helpers, PBKDF2, HMAC, hashing, random bytes, and streaming support.

Oscar Franco later added cipher support, including AES APIs, and the project changed from fast-crypto to quick-crypto. Subsequent work expanded public-key signing and the WebCrypto subtle API. The article connects this expansion to local-first databases and CRDT systems, which need Ed25519, X25519, authenticated encryption, and key derivation in addition to wallet-oriented hashing and PBKDF2.

The repository history independently confirms the early project direction. PR #11 describes OpenSSL linkage, a worker thread, JSI conversion infrastructure, and the first HMAC and PBKDF2 work. PR #51 is associated with cipher support. These pull requests support the historical outline but do not independently validate every attribution or date in the article.

## Nitro Modules migration
The article describes PR #404, opened in August 2024, as a full migration to the React Native New Architecture, bridgeless mode, Fabric, and Nitro Modules. The migration also added a benchmark facility and required tests for each ported module.

The current repository README confirms the resulting version split: 1.x uses Nitro Modules and the New Architecture, while 0.x supports the older Bridge and JSI model. The README states that v1 aims to preserve API compatibility and requires React Native 0.75 or newer. It also describes the package as C/C++ JSI code using OpenSSL and as a native replacement for crypto-browserify or react-native-crypto.

The architectural benefit described by the article is reduced hand-written binding code. TypeScript specs and generated Nitro interfaces handle much of the JSI conversion, asynchronous dispatch, hybrid objects, shared state, and ArrayBuffer paths. The article reports better small-input throughput and a smaller bug surface after the migration. Those performance and maintainability outcomes are maintainer claims.

## Runtime and threading model
The article separates cheap synchronous operations from expensive operations that can block a frame. Hashing, HMAC, random bytes, and streaming update or digest calls are described as synchronous native calls. PBKDF2, scrypt, key generation, signing, and verification can use asynchronous forms backed by a reusable native thread pool.

This preserves a Node-like choice: synchronous calls avoid dispatch overhead but block the JavaScript caller, while asynchronous calls add dispatch latency but keep expensive work away from the UI path. The correct choice depends on input size and call frequency. Native code does not make a synchronous operation non-blocking.

## Node and WebCrypto compatibility
After the initial wallet focus, the article says the project changed its target from commonly used wallet algorithms to behavior closer to Node's crypto module. It lists compatibility work around key formats, TypedArray offsets, JWK validation, elliptic-curve checks, RSA defaults, X.509 certificates, DOMException behavior, encrypted PEM and DER, SHA-3, cSHAKE, KMAC, TurboSHAKE, KangarooTwelve, DSA, DH, and UUIDv7.

The current README still warns that implementation coverage is incomplete. Therefore, the article's phrase that the package is a drop-in Node crypto replacement should be read as an intended compatibility target, not as proof that every Node API or edge case is supported. Consumers must check the implementation-coverage document and test their required algorithms on their supported React Native versions.

## Post-quantum support
The article states that the project added ML-KEM, ML-DSA, and SLH-DSA through OpenSSL 3.6-era native support. It describes key encapsulation, signing, verification, and selected raw, JWK, and PKCS#8 import or export paths.

These algorithm-coverage statements are claims made by the article. The OpenSSL 3.6 release announcement independently confirms that OpenSSL 3.6 is a real release, but it does not by itself prove that react-native-quick-crypto exposes every listed algorithm on both mobile platforms. The package repository and its implementation-coverage document remain the appropriate verification boundary.

The article correctly highlights mobile-specific constraints: post-quantum keys and signatures can be much larger than classical equivalents, and a pure-JavaScript implementation would face substantial cost on a phone. The practical question is not only algorithm availability but also binary size, memory use, platform provider support, and the behavior of asynchronous APIs under load.

## Maintainer-reported security review
The article describes a six-phase security pass conducted in April 2026. It presents this as a sequence of reviewed pull requests rather than an external certification. Reported findings include:

- Incorrect handling of sliced or offset ArrayBuffer views in timing-safe comparison and AEAD additional-authenticated-data paths.
- A streaming XSalsa20 issue where restarting the keystream for every update could reuse keystream material across chunks.
- Missing explicit validation for DH and ECDH peer keys, including curve and subgroup checks.
- Distinguishable RSA PKCS#1 v1.5 decryption failures that could create a padding-oracle signal.
- Native-resource lifetime cleanup using RAII wrappers.
- TypeScript-boundary validation improvements and expanded regression coverage.
- GitHub Actions hardening, including shell-injection fixes, pinned actions, and restricted permissions.
- A reduced published package containing fewer files and less unpacked data.

These are serious vulnerability classes, but the article does not provide an independent audit report, CVE references, exploit reproductions, or a third-party sign-off. Treat them as maintainer-reported fixes. Applications should still pin reviewed versions, read release notes, run their own tests, and avoid assuming that a native crypto library removes application-level key-management risk.

## Benchmarks
The repository README confirms that the example app contains a benchmark suite comparing native operations with pure-JavaScript alternatives. It also says the comparison is intended to show the React Native trade-off, because server-side Node has a different native crypto environment.

The article reports selected results from a recent iPhone simulator, including very large speedups for DH modp14 key generation, HMAC on large buffers, ECDH, scrypt, HKDF, and buffer encoding. It also argues that smaller wins on repeated encoding operations can matter more to real applications than a single large algorithm multiplier.

The reported numbers are not device-independent facts. They depend on simulator hardware, operation size, warm-up, implementation versions, input representation, synchronous versus asynchronous mode, and the chosen JavaScript comparator. The article does not provide enough information here to reproduce every table row. No benchmark was run during this capture.

## Adoption claims
The article reports growth from approximately 47,000 weekly downloads in June 2025 to approximately 244,000 weekly downloads and more than 851,000 monthly downloads in late May 2026. It attributes visible growth to post-quantum work, X.509 support, Node-parity work, the security review, and the 1.1.x line.

These download figures and causal explanations are promotional or author-reported claims. They were not independently checked against npm download statistics during capture.

## Practical adoption notes
The current repository documents these important boundaries:

- v1 uses the New Architecture and Nitro Modules.
- React Native 0.75 is the minimum supported version stated in the README.
- v0.x is the compatibility path for older React Native setups.
- The package is MIT licensed.
- Not every cryptographic algorithm is supported.
- The example benchmark app is useful for local comparison, not proof of application-level performance.
- A Metro resolver or module-resolver alias can replace crypto-browserify, but dependent libraries still need compatible assumptions about Node APIs, Buffer behavior, and platform support.

## Evidence boundary
The Margelo article, the react-native-quick-crypto repository README, PR #11, PR #51, PR #404, the repository's security-label search result, and the OpenSSL 3.6 release announcement were inspected.

I did not install the package, inspect every implementation-coverage entry, verify every listed algorithm on iOS and Android, reproduce the benchmark table, validate npm download counts, or perform a security audit.

## Sources
- https://margelo.com/blog/four-years-of-react-native-quick-crypto
- https://github.com/margelo/react-native-quick-crypto
- https://github.com/margelo/react-native-quick-crypto/pull/11
- https://github.com/margelo/react-native-quick-crypto/pull/51
- https://github.com/margelo/react-native-quick-crypto/pull/404
- https://github.com/margelo/react-native-quick-crypto/pulls?q=is%3Apr+label%3Asecurity
- https://openssl-library.org/post/2025-10-01-3.6-release-announcement/
