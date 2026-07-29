---
title: bitchat - Decentralized P2P Mesh Chat
kind: paste
captured_at: 2026-07-25 20:08
tags: []
source_url: 
status: inbox
---

# bitchat - Decentralized P2P Mesh Chat

https://github.com/permissionlesstech/bitchat — Decentralized P2P messaging app. Dual transport: Bluetooth LE mesh (offline) + Nostr protocol (internet). iOS/macOS native (Swift). 28.6k stars, 4.2k forks, 983 commits. Public domain (Unlicense).

Features: Bluetooth mesh with multi-hop relay (max 7 hops), Noise Protocol E2EE with forward secrecy, Nostr global relay network (290+ relays), location-based channels via geohash (block/neighborhood/city/province/country), IRC-style commands (/slap, /msg, /who), private messages with intelligent transport selection (Bluetooth first → Nostr fallback → smart queuing), LZ4 compression, adaptive battery modes, emergency wipe (triple-tap).

Channel types: mesh #bluetooth (offline, local multi-hop), location channels on Nostr (block #dr5rsj7, neighborhood #dr5rs, country #dr). Ephemeral keys per geohash area. NIP-17 gift-wrapped private messages.

App Store: bitchat.free
App: https://apps.apple.com/us/app/bitchat-mesh/id6748219622
Build: Xcode project, Swift, justfile for macOS run.
