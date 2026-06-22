---
title: Notchprompt - macOS Notch-Adjacent Teleprompter
kind: paste
captured_at: 2026-06-15 04:54
tags: [macos, swift, teleprompter, open-source, github]
source_url: 
status: inbox
---

# Notchprompt - macOS Notch-Adjacent Teleprompter

Notchprompt - macOS Notch-Adjacent Teleprompter

## Overview
Native macOS notch-adjacent teleprompter for presentations and recordings. Hides a distraction-free teleprompter in the MacBook notch area. Open source, MIT licensed.

## Repository
- GitHub: https://github.com/saif0200/notchprompt
- Website: https://notchprompt.vercel.app
- Language: Swift (97.7%), Shell (2.3%)
- Stars: 867, Forks: 80
- Latest release: v1.1.3 (Mar 25, 2026)
- License: MIT

## Features
- Menu bar utility workflow (NP status item)
- Notch-adjacent floating overlay with transport controls
- Start/pause, reset, and jump back 5 seconds
- Adjustable speed, font size, overlay width, and overlay height
- Optional countdown before scrolling starts
- Import/export plain text scripts
- Privacy mode (NSWindow.SharingType, best-effort/app-dependent)

## Keyboard Shortcuts
- Option+Command+P: Start / Pause
- Option+Command+R: Reset scroll
- Option+Command+J: Jump back 5s
- Option+Command+H: Toggle Privacy Mode
- Option+Command+=: Increase speed
- Option+Command+-: Decrease speed

## Requirements
- macOS (current deployment target in notchprompt.xcodeproj)
- Apple Silicon or Intel Mac

## Install
1. Download latest .dmg from GitHub Releases
2. Open DMG and drag notchprompt.app to Applications
3. Launch notchprompt.app

## Build From Source
git clone https://github.com/saif0200/notchprompt.git
cd notchprompt
open notchprompt.xcodeproj

CLI build:
xcodebuild -project notchprompt.xcodeproj -scheme notchprompt -configuration Debug build

## Unsigned Build Note
Build is currently unsigned/unnotarized. If macOS blocks, run:
xattr -cr /Applications/notchprompt.app
open /Applications/notchprompt.app
Or go to System Settings -> Privacy & Security -> Open Anyway.
