---
title: Pear by Holepunch — Peer-to-Peer Desktop App Framework (Hypercore/Hyperswarm)
kind: paste
captured_at: 2026-07-02 12:08
tags: [p2p, hypercore, hyperswarm, dht, electron, bare, peer-to-peer, desktop, ota]
source_url: https://docs.pears.com/getting-started/
status: inbox
---

# Pear by Holepunch — Peer-to-Peer Desktop App Framework (Hypercore/Hyperswarm)

Pear — peer-to-peer desktop app framework by Holepunch (same team behind Keet, PearPass). Builds on Hypercore stack (Hypercore, Hyperswarm, Autobase, Corestore). Electron + Bare runtime architecture.

Stack layers:
- Electron — desktop shell (window, menus, IPC)
- pear-runtime — npm library to embed Bare workers inside Electron
- Bare workers — separate processes running peer-to-peer code (npm packages work in both Bare and Node)
- Hyperswarm — DHT-based peer discovery with end-to-end encrypted connections
- Hypercore/Corestore — append-only logs, persisted to disk
- Autobase — multi-writer CRDT-like data structure on top of Corestore

Architecture: Electron main process → PearRuntime.run() spawns Bare worker → worker owns P2P logic (Hyperswarm, Corestore) → preload bridge (contextBridge) is the only door from sandboxed renderer to worker. Renderer is a plain web page (HTML + JS).

4-part getting-started path builds a P2P chat app:
1. Build a peer-to-peer chat — 5 files (package.json, electron/main.js, electron/preload.js, renderer/index.html, renderer/app.js, workers/main.mjs). Uses PearRuntime.run() simplest form. Dependencies: pear-runtime, hyperswarm, b4a, electron. Topic-based chat via DHT.
2. Reshape into production app — adds dedicated workers for OTA updater + Corestore persistence, Autobase-backed room persistence
3. Ship — electron-forge make, pear build, pear stage, pear provision links, pear seed for seeding
4. Deploy OTA updates — live OTA cycle: npm version patch → make → pear build → pear stage → pear provision. pear.updater emits updating/updated events; applyUpdate() + appAfterUpdate() for hot swap.

Production release model:
- Stage link vs provision link: stage keeps full append-only history; provision is lean snapshot peers poll
- Multisig: quorum-based write access (e.g., 2-of-3 signers) so no single laptop can push malicious update
- Release lines: development → staging → rc → prerelease → production

Bare runtime: prebuilt binary (bare-sidecar), nothing to compile. ESM for workers (.mjs), CommonJS for Electron (.js). Bare.IPC for worker↔main process communication. Bare.argv for passing args.

Pear CLI: pear build, pear stage, pear provision, pear seed, pear touch, pear multisig, pear link.

Key concepts: blind peering, availability and distribution (swarming), release pipeline (bootstrap → OTA → stage/provision → multisig), Corestore-based persistence, OTA update event lifecycle.

Reference templates: hello-pear-electron (Electron scaffold), hello-pear-bare (CLI-only). Pear Desktop architecture supports workers for background tasks.
