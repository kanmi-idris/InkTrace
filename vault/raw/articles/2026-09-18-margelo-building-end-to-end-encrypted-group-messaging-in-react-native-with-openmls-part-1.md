---
title: "Margelo: Building End-to-End Encrypted Group Messaging in React Native with OpenMLS (Part 1)"
kind: "paste"
captured_at: "2026-09-18 13:14"
tags: ["margelo", "react-native", "openmls", "mls", "rfc9420", "end-to-end-encryption", "nitro-modules", "jsi", "rust", "cryptography", "treekem"]
source_url: "https://margelo.com/blog/building-e2e-encrypted-group-messaging-with-openmls"
status: "inbox"
---

# Margelo: Building End-to-End Encrypted Group Messaging in React Native with OpenMLS (Part 1)

## Source overview
This is a Margelo engineering blog post (part 1 of a series), authored by Adnan Sahinovic, walking through the architecture for building a fully end-to-end encrypted group chat in React Native using OpenMLS, a Rust implementation of the IETF's Messaging Layer Security (MLS) protocol, specified in RFC 9420. GitHub API metadata confirms OpenMLS itself is a real, established project: 1,030 stars, 180 forks, MIT license, Rust as its language.

## Why MLS instead of a traditional backend or Signal's Double Ratchet
The article frames the core problem as trust boundary creep: once a chat backend can read plaintext messages, that trust boundary silently expands to include logs, backups, admin tooling, analytics, and every future server-side vulnerability. End-to-end encryption moves decryption entirely on-device; the server's role shrinks to storing and distributing public key material (KeyPackages), establishing a canonical order for handshake messages, and validating credentials, but it never sees plaintext or private keys.

The article specifically contrasts MLS with Signal's Double Ratchet plus Sender Keys, which was designed around one-to-one conversations first and extended to groups afterward. In a Sender Keys group, the article states that a membership change (someone leaving, for example) requires every remaining member to generate and pairwise-distribute a new sender key to everyone else, so the cost of a membership change grows with group size. MLS instead treats the whole group as a single synchronized cryptographic state machine from the start, built around a ratcheting binary tree structure called TreeKEM: each participant is a leaf, and a membership change only needs to rotate the nodes along that member's path to the root, touching roughly O(log n) nodes instead of updating O(n) pairwise relationships. The article's example: for a 1,000-member group, that is roughly 10 tree-node updates versus roughly 1,000 pairwise relationship updates.

## Core MLS concepts, summarized
- **Identity**: a persistent cryptographic identity (signing keys, credentials, metadata) belongs to a device, not a user; a user with three devices has three separate MLS identities, and multi-device support is built on top of that model rather than baked into it.
- **KeyPackages**: single-use public bundles that let another user add a device to a group asynchronously, without that device needing to be online at the time. The server's core job includes acting as a directory of these public bundles; devices must keep fresh ones stocked since each is consumed once it's used.
- **Groups**: modeled as synchronized state (group state, current epoch, ratchet tree state, encryption secrets) shared by every participant; messages are derived from that shared state rather than being independent encrypted payloads, so a device whose local state diverges from the group's can no longer produce or consume valid messages.
- **Epochs**: a version counter for the group's cryptographic state that advances whenever membership or key material changes (via a Commit). Ordinary application messages do not advance the epoch; they advance a lighter per-sender ratchet within the current epoch instead, keeping routine messaging cheap while membership changes remain the more expensive, strictly ordered events. This gives MLS forward secrecy (compromising today's keys doesn't expose yesterday's messages) and post-compromise security (a later Commit that rotates or removes a compromised device's keys locks an attacker out of future epochs, meaning a breach is not permanent).
- **Commits**: atomic state transitions that apply pending membership/key changes and move every group member to the next epoch together; because two conflicting Commits for the same epoch cannot both apply, the server (the 'Delivery Service' in MLS terminology) must establish a canonical ordering for handshake messages.
- **Welcome messages**: encrypted bundles that let a newly added member reconstruct current group state; a Welcome only grants access from the current epoch forward, so new members cannot decrypt a group's prior history.

## Why this is hard specifically in React Native
The article argues MLS breaks the typical React Native data-fetch/render/update flow because it is binary-heavy, stateful, and mutation-driven: a single message send is really a cryptographic state transition producing ciphertext, possibly Commits, proposals, ratchet-tree updates, and new state snapshots. Running that logic in JavaScript would mean constant binary serialization overhead at the bridge, large encrypted blobs being copied repeatedly, JavaScript's general unsuitability for byte-level manipulation, sensitive key material subject to unpredictable garbage collection timing, and no strong runtime guarantee of constant-time execution or secure memory zeroization. The team's stated decision was to keep all cryptographic logic and MLS state entirely out of JavaScript.

## The four-layer architecture
The described stack has four layers, each existing because the layer above it cannot safely take on that responsibility: Rust and OpenMLS handle all cryptography and hold all MLS state; a thin C layer provides a stable ABI (since Rust does not expose one on its own) and handles memory ownership, panic safety, and error propagation across the FFI boundary; C++ integrates that C layer with JSI via Nitro Modules; and TypeScript exposes a clean developer-facing API on top. The single most important architectural decision described is that all cryptographic state is treated as an opaque serialized binary blob on the JavaScript side — JavaScript never deserializes or directly inspects group state, it only stores and passes back byte buffers.

On the Rust side, the article describes serializing the entire group (state, key store, identity) into one versioned binary snapshot structure, with the version field specifically enabling native-side migrations of old snapshots without JavaScript needing to know the format changed. A key conceptual point emphasized in the post: MLS encryption is not a pure `plaintext → ciphertext` function; it is `state + plaintext → new_state + ciphertext`, meaning every encrypt or decrypt operation both consumes the old state and produces a new one that must be persisted, making state persistence itself security-critical rather than incidental.

At the FFI boundary, the article documents a simple ownership contract (Rust allocates buffers, C++ triggers deallocation by calling back into a Rust-exported free function, so the same allocator that created a buffer is the one that frees it) and wrapping every exported Rust function with panic-catching, since a Rust panic unwinding across an FFI boundary is documented as undefined behavior.

At the Nitro Modules/JSI layer, the article's stated motivation is avoiding the serialization cost of a traditional React Native bridge (which would otherwise mean base64-encoding and copying every binary artifact MLS produces). Instead, raw ArrayBuffers are passed directly between native code and JavaScript with zero-copy transfer, using a native buffer wrapped with a custom deleter so that when the JavaScript garbage collector eventually releases the ArrayBuffer, Rust's own allocator reclaims the underlying memory rather than JavaScript owning or copying it.

## Correct state persistence: the specific failure mode called out
The article walks through a documented anti-pattern: discarding the new state blob an encryption call returns and sending only the ciphertext, which silently breaks the app's cryptographic state going forward. The documented correct pattern is to persist the new state blob first, then send the ciphertext, and in production to make that pair atomic (writing the new state and outgoing ciphertext together, e.g. via an outbox pattern) so a crash between sending and persisting can never happen. The article also states the persisted state blob contains private key material and must be stored encrypted at rest, with the encryption key itself protected by the iOS Keychain or Android Keystore, and that concurrent operations on the same group's state must be serialized rather than run in parallel, since each operation consumes the current state blob and produces the next one. The article describes losing this state as unrecoverable by retry: a device whose state is lost falls out of sync with the group's ratchets, cannot rebuild missing secrets by replaying old ciphertext from the server, and generally must rejoin the group via a fresh KeyPackage from another member, with history from before that rejoin remaining unreadable by design.

## What the server can and cannot see
The article is explicit that even in this architecture, the server is not blind to everything: it cannot read private keys, group secrets, or message bodies, but it can still observe metadata such as which devices are talking to which groups, when, and roughly how much. It frames end-to-end encryption as protecting message content and traffic-pattern privacy as a separate concern requiring separate tools.

## Reported performance figures
The article reports, for application-level messages measured end-to-end through the full stack (TypeScript call, JSI crossing, FFI boundary, OpenMLS execution, state re-serialization, zero-copy buffer return) in their demo app with a small group: encryption at roughly 0.80ms and decryption at roughly 0.66ms. The article explicitly notes these are measured demo-app timings rather than formal benchmarks, and states that handshake operations like Commits and joins do more work and scale with group size, with separate measurement of those promised for a follow-up post. These figures are the author's own reported measurements and were not independently reproduced in this capture.

## What is explicitly deferred to a follow-up post
The article states a second part will cover the group lifecycle in more depth (creating groups, adding/removing members, processing Welcome messages), handling Commits/proposals/epoch synchronization across multiple devices, designing the delivery service's ordering guarantees and KeyPackage distribution/replenishment, and storage, migration, and recovery from state corruption. This capture covers only the architecture and concepts described in this first part; the follow-up content was not captured here.

## Evidence boundary
The Margelo blog post was fetched and read directly for this capture, and GitHub API metadata for the underlying OpenMLS project was checked separately to confirm it is a real, established Rust MLS implementation. No code from the article was run, no OpenMLS integration was built, and the reported encryption/decryption timing figures were not independently reproduced during this capture.

## Sources
- https://margelo.com/blog/building-e2e-encrypted-group-messaging-with-openmls
- https://github.com/openmls/openmls
- https://datatracker.ietf.org/doc/rfc9420/ (the MLS specification referenced in the article)
- https://nitro.margelo.com/ (Nitro Modules, referenced as the native-binding layer used)
