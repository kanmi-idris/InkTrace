---
title: "Claude S40: Unofficial Claude Client for Nokia Series 40"
kind: "paste"
captured_at: "2026-09-27 18:02"
tags: ["ai", "claude", "nokia", "java-me", "j2me", "series-40", "retro-mobile", "go", "legacy-protocols", "llm-client", "github", "mit", "unofficial", "site-reported"]
source_url: "https://github.com/emir/claude-s40"
status: "inbox"
---

# Claude S40: Unofficial Claude Client for Nokia Series 40

Source checked: 2026-09-27.

## Resolution
- The supplied shortened URL https://t.co/NC088SLdHR resolves to https://github.com/emir/claude-s40.
- The destination is a public GitHub repository named Claude S40.

## Repository snapshot
- The GitHub API snapshot reports 20 stars, one fork, no open issues, Java as the primary language, and an MIT license. Repository metrics and language summaries can change.
- The project is an unofficial Claude client for Nokia Series 40 phones, plus a small Go server.
- The README says it was tested on a Nokia 6300 with firmware V06.60. Other Series 40 phones are possible targets but remain untested by the author.

## Phone application
- The phone side targets Java ME CLDC 1.1 and MIDP 2.0, with a 240 by 320 screen model and English and Turkish interfaces.
- The interface provides keypad-first chat, message history, pinned and searchable chats, reading mode, long replies split into parts, message actions, saved text replies, calendar and to-do entry forms, quick prompts, usage counters, and a pairing wizard.
- The client can request server-side web searches for news, weather, and exchange-rate queries. The old phone does not perform the modern web connection itself.
- The README describes light and dark themes, text-size choices, sound, vibration, backlight behavior, and screen fitting across several small resolutions.

## Server architecture
- A Go binary or Docker image terminates the legacy phone connection and communicates with the Claude API over modern HTTPS.
- The phone-facing connection uses TLS 1.0 and a private certificate authority because the documented Nokia hardware cannot complete current public-cloud TLS handshakes.
- The server uses per-device access tokens, pairing, daily request and output-token limits, web-search limits, SQLite chat storage, and a localhost-only admin API.
- The README describes a roughly 30-day chat retention period, longer retention for pinned chats, and an optional last-chat copy on the phone.

## Privacy and cost boundaries
- The repository states that the Claude API key stays on the server and the phone receives a revocable per-device token.
- User notes are stored on the phone and sent with each message. Server logs are described as excluding message text.
- Each message is a Claude API call billed to the server owner's key. Web searches also create usage and token costs. The server limits paid usage and does not automatically retry paid calls.
- These privacy, retention, and billing statements are repository claims. They were not independently tested.

## Evidence and limits
- The project is explicitly unofficial and is not endorsed by Anthropic or Nokia.
- The repository includes setup and deployment material, but this capture intentionally omits operational deployment commands, credentials, certificates, and server exposure steps.
- No repository checkout, build, emulator run, phone connection, API-key entry, or deployment was performed.

## Relevance to InkTrace
- Claude S40 is a useful example of adapting a modern AI client to severe legacy hardware constraints.
- It combines a keypad-first interface, server-side protocol translation, constrained response rendering, per-device access control, and explicit AI cost limits.
- The project is also relevant to offline-tolerant interfaces, retro mobile development, and gateway design for clients that cannot speak current web protocols.
