---
title: OpenMinis - Open Source AI Agent App
kind: paste
captured_at: 2026-07-25 19:52
tags: []
source_url: 
status: inbox
---

# OpenMinis - Open Source AI Agent App

https://github.com/OpenMinis/OpenMinis — OpenMinis: fully free/open-source AI agent app for iOS and Android. Your private, on-device AI agent. Bring your own model (Claude, GPT, Gemini via API keys or sign-in). Features: real Linux shell (sandboxed Alpine on-device), device integration (Health, Calendar, Reminders, Contacts, HomeKit, Bluetooth, Clipboard, Media, Alarms), browser automation, extensible skills, persistent memory, workspaces (minis://workspace/), native offloads.

Use cases: photograph meal → log nutrition to Apple Health; wake-up timeline (Shortcuts → X timeline → summarize → TTS → alarm); group chat → tasks (Telegram → Reminders); mount Obsidian vault → research/write notes; Share Sheet → calendar event.

Skills system: SKILL.md folder format, compatible with Claude/Codex/OpenClaw/Hermes Agent skills. Skills adapted for Minis tools reach Linux shell, device integrations, and native offloads directly.

Press: Federico Viticci (MacStories) "the most impressive indie app I've seen in a while"; featured on Zhihu, Appinn.

Stack: iOS (Swift/SwiftUI), Android (Kotlin/Compose). Sandbox: iSH ARM64 fork (iOS), PRoot fork (Android), Alpine Linux minirootfs. Dependencies: FFmpeg, LAME, cppjieba, KaTeX. 12 commits, 452 stars, 31 forks. GPLv3. TestFlight beta available. No PRs accepted (mirror of private dev tree), issues welcome.

Website: openminis.app
