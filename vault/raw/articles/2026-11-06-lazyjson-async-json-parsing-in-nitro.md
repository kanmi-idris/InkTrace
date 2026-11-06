---
title: "LazyJSON async JSON parsing in Nitro"
kind: paste
captured_at: "2026-09-19 20:40"
tags: [react-native, nitro, jsi, hermes, performance, json, serialization]
source_url: ""
status: inbox
---

# LazyJSON async JSON parsing in Nitro

just built 𝙻𝚊𝚣𝚢𝙹𝚂𝙾𝙽: a Nitro type that parses & stringifies JSON on a small background 𝚓𝚜𝚒::𝚁𝚞𝚗𝚝𝚒𝚖𝚎, and then transfers the object using the new 𝚓𝚜𝚒::𝙸𝚂𝚎𝚛𝚒𝚊𝚕𝚒𝚣𝚊𝚝𝚒𝚘𝚗 interface. ⚡️
It essentially makes 𝙹𝚂𝙾𝙽.𝚙𝚊𝚛𝚜𝚎(…) async, reducing JS blocking time by ~33% for anything that returns or accepts JSON in Nitro.

There's also ongoing work by Szymon to add faster materialisation to Hermes core:

https://t.co/IMvq8TI0Kf

https://t.co/9CTh372sEF

## Verified related Hermes material

Hermes' own repository documents the `ISerialization` API.

A Hermes engineering note dated December 2, 2025 states that `ISerialization` encodes a JavaScript value into an efficient opaque binary representation that can be deserialized, including deep-cloned, into one or more runtime instances. It also supports optional serialization with ownership transfer and is intended for efficient value passing between runtimes.

Hermes' June 5, 2026 stable-release notes describe `ISerialization` as supporting efficient binary encoding for JS values passed between runtimes, including serialize-with-transfer and external zero-copy `ArrayBuffer` data.

The same release notes also state that `JSON.parse` and `JSON.stringify` received substantial performance improvements in Hermes itself.

Relevant upstream files:

- https://github.com/facebook/hermes/blob/7508017ae267ecffe4c4df38656713034f35d9bf/doc/blog/2025-12-02-iserialization.md
- https://github.com/facebook/hermes/blob/7508017ae267ecffe4c4df38656713034f35d9bf/doc/blog/2026-06-05-new-hermes-stable-release.md

## Retrieval note

The two `t.co` shortened URLs could not be resolved through the available direct web retriever, exact-string web search, alternate fetch attempts, or local network resolution. Their destination pages therefore remain unresolved.

The Hermes material above is independently verified upstream context supporting the captured claims about `ISerialization`, but it should not be treated as proof that either unresolved shortened URL points to those exact pages.
