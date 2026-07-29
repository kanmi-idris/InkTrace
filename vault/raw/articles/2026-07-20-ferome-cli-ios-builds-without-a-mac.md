---
title: Ferome CLI — iOS builds without a Mac
kind: paste
captured_at: 2026-07-20 13:28
tags: [ios, react-native, expo, flutter, ci, github-actions, build, cli, devtools]
source_url: https://github.com/crane04/ferome-cli
status: inbox
---

# Ferome CLI — iOS builds without a Mac

# Ferome — iOS builds for Windows developers (No Mac required)

Primary source: https://github.com/crane04/ferome-cli (README)
Project site: https://ferome.dev/ (JS-rendered; tagline "Ship iOS Apps Without a Mac")
npm: `npm i -g @ferome/cli`
License: MIT
Author: Crane04 (repo has 36 stars, 0 forks, TypeScript 94%)

## What it is
A CLI that lets Windows (and non-Mac) developers build signed iOS `.ipa` files without owning a Mac. It uses GitHub Actions macOS runners in YOUR OWN repo to perform the actual build. Requires a free account at ferome.dev (sign in with GitHub).

## Workflow
1. `ferome login` — opens https://api.ferome.dev/auth/github?cli=1 in browser, runs a short-lived local server on http://localhost:9898 to receive the GitHub OAuth token (2-min timeout). Token saved to OS app-config dir via `conf`; reused by all commands.
2. `ferome init` (alias `ferome workflow`) — detects project type and writes a GitHub Actions workflow to `.github/workflows/`:
   - expo-ios-build.yml
   - flutter-ios-build.yml
   - react-native-ios-build.yml
   - xcode-ios-build.yml
   Flags: `--force` (overwrite), `--type <EXPO|FLUTTER|REACT_NATIVE|XCODE>` (skip detection).
   Commit/push the workflow; Ferome dispatches it via `workflow_dispatch` in your repo.
   Expo projects also need `EXPO_TOKEN` GitHub secret (`ferome expo token` shows setup).
3. `ferome build` — zips cwd, uploads, triggers build on the macOS runner, polls every 15s (up to 30 min), prints signed `.ipa` download URL.
   Flags: `--project-name`, `--bundle-id`, `--repo <owner/repo>`, `--apple-key-id`, `--scheme`, `--auto-submit` (Expo only; submits to App Store Connect).
   Successful build settings remembered in `.ferome/config.json`. Upload excludes node_modules/, .git/, .ferome/, ios/Pods/, android/, build/, *.ipa, *.zip, etc.

## Other commands
- `ferome status <buildId>` — status, type, project, run link, .ipa URL, last logs if failed
- `ferome builds` — last 20 builds (id, status, type, date, project)
- `ferome projects` — list Ferome projects with recent build status
- `ferome keys add/list/rename/remove <keyId>` — manage Apple App Store Connect API keys (--name, --key-id, --issuer-id, --file AuthKey_*.p8)
- `ferome expo token` — show EXPO_TOKEN secret setup
- `ferome reset` — clear local `.ferome/config.json` only (keeps login + saved keys)

## Project detection
- EXPO: `eas.json`, or `app.json`/`app.config.js`/`app.config.ts` with `expo` field
- FLUTTER: `pubspec.yaml` + `ios/` Xcode project
- REACT_NATIVE: `package.json` w/ `react-native` + `ios/` Xcode project
- XCODE: `.xcodeproj` / `.xcworkspace` at root
Bundle ID: Expo from app.json/app.config; else `PRODUCT_BUNDLE_IDENTIFIER` in project.pbxproj.

## Notes / relevance to React Native
Directly useful for RN/Expo developers on Windows or Linux who need real iOS builds + App Store submission without a Mac. Builds run in the user's own GitHub repo via Actions, so code never leaves the user's infrastructure beyond the upload to Ferome's API.

## Known gaps (from README)
- No published npm release version pinned; no GitHub Releases.
- `--auto-submit` only works for Expo projects (others build + upload .ipa but don't submit).
