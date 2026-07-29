---
title: RNRepo - React Native Pre-Built Artifacts
kind: paste
captured_at: 2026-07-24 08:53
tags: []
source_url: 
status: inbox
---

# RNRepo - React Native Pre-Built Artifacts

RNRepo (rnrepo.org) — a repository for React Native pre-built artifacts by Software Mansion. Speeds up builds by avoiding compiling native libraries from scratch.

Key features:
- Up to 2x faster builds
- 100% open source
- GPG-signed artifacts
- Minimal setup

Setup:
- Expo Prebuild (CNG): install @rnrepo/expo-config-plugin, add to app.config.ts plugins
- Standard RN: install @rnrepo/build-tools, add Maven repo + gradle plugin to android/build.gradle, add Podfile plugin + post-install hook to ios/Podfile
- Expo Fingerprint: add **/.rnrepo-cache/**/* to .fingerprintignore

How it works:
1. Curated library list in libraries.json + react-native-versions.json
2. Cron job monitors for new releases, schedules builds automatically
3. Isolated GitHub workflow builds per library per RN version
4. GPG-signed artifacts published to public Maven repository
5. Client plugin fetches pre-built artifacts instead of compiling from source

Supported: RN 0.80+, plus latest patches for 0.77.3, 0.78.3, 0.79.7.
Automatic fallback to source compilation if version not supported.

Security: isolated GitHub workflows, transparent build logs, GPG signing, traceable artifacts.
No action needed from library maintainers.

Enterprise/brownfield: custom setups including self-hosted Maven, private access, custom builds.

GitHub: github.com/software-mansion/rnrepo
Built by Software Mansion.
