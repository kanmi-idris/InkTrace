---
title: "iOS Builder by MobAI: Remote iOS build and simulator CLI"
kind: "repository capture"
source_url: "https://github.com/MobAI-App/ios-builder"
short_url: "https://t.co/7qLKXaPWQS"
tags: ["ios-development", "xcode", "github-actions", "codemagic", "bitrise", "react-native", "expo", "flutter", "code-signing", "testflight", "simulator", "mobai"]
status: "inbox"
---

# iOS Builder by MobAI: Remote iOS build and simulator CLI

## Product summary
The short link redirects to the public `MobAI-App/ios-builder` GitHub repository. Its README describes Builder as a CLI for building and developing iOS apps without a local Mac. It uses GitHub Actions by default, with Codemagic and Bitrise as alternatives. It supports native iOS, React Native, Expo, Flutter, Kotlin Multiplatform, and Cordova/Ionic projects.

The CLI can trigger remote builds, download IPAs, and submit builds to TestFlight or App Review. The README also describes simulator access and hot reload through a separate MobAI app. The simulator session is described as free with a MobAI account, uses a `MOBAI_API_KEY` repository secret, and closes after 30 minutes by default when unused.

## Working-tree and credential handling
The README says `builder ios build` uploads a snapshot of the current working tree, including uncommitted and untracked files. `.gitignore` applies. The snapshot is a temporary commit on a hidden ref, which the project says it deletes when the build finishes. Review the working tree and ignore rules before any build. I did not check GitHub Actions artifact or log retention.

The README says signing setup can upload signing secrets to the GitHub repository. It also says App Store Connect API keys stay on the user's machine and the local IPA upload happens after the remote build. These are project claims. Keep private keys and credentials out of tracked files.

## Requirements and limits
Remote iOS builds still need a cloud macOS runner. TestFlight and App Store signing need a paid Apple Developer Program membership. The README describes unsigned development builds and optional MobAI re-signing as alternatives.

The repository displays an MIT license. I did not install or run the CLI, connect a provider, or build an app. I did not inspect MobAI's separate privacy or retention terms.
