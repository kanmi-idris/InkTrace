---
title: "Legend Chat History v0.0.2: A macOS Demo for Browsing Local Codex/Claude Transcripts"
kind: "paste"
captured_at: "2026-09-09 22:03"
tags: ["legend-apps", "legendapp", "macos", "react-native", "codex", "claude", "chat-transcripts", "local-first", "bun", "mit"]
source_url: "https://github.com/LegendApp/legend-apps/releases/tag/chat-history-v0.0.2"
status: "inbox"
---

# Legend Chat History v0.0.2: A macOS Demo for Browsing Local Codex/Claude Transcripts

## Source overview
Legend Chat History v0.0.2 is a release of one app within Legend Apps, a monorepo of local-first macOS-focused apps built on React Native (with a shared native host and a Bun-based workspace tooling layer) by LegendApp (author jmeistrich). GitHub API metadata checked at capture time reports 41 stars, 1 fork, MIT license for the overall legend-apps repository, and a repository creation date of 2026-06-21. This release, chat-history-v0.0.2, was published 2026-09-08 per the release page timestamp, tagged at commit 9f1f2ce.

## What Legend Chat History is
Per the parent repository's README, Legend Chat History is described as a macOS demo app for browsing recent local Codex and Claude AI assistant chat transcripts already present on the user's own Mac. It discovers existing sessions on disk, groups them by AI provider (Codex or Claude), and renders the selected conversation in a virtualized transcript view intended to stay responsive even for large transcripts. The README is explicit that its message composer is an interaction and performance demo only: it streams a simulated response purely in memory, does not actually send anything to a real AI model, and does not persist any of the generated demo messages. This is therefore a transcript viewer and UI-performance demo, not a functional AI chat client.

## What changed in v0.0.2
The release notes document three changes:
- A startup performance improvement: the app now shows its restored window and sidebar immediately, loading the last-selected chat in the background before the React Native runtime fully starts, rather than waiting for that load to complete before rendering anything.
- A rendering performance improvement for large transcripts and chat switching: faster Codex transcript parsing, reusable list state (implying virtualized-list item recycling rather than full re-renders), and correctly sized images that avoid layout shifts while a transcript is loading.
- A bug fix: reopening the app now refreshes its chat list without creating duplicate windows, restores the previously saved window frame/position, and keeps sidebar content correctly aligned beneath the app's transparent title bar (a macOS-specific windowing detail).

## Broader Legend Apps context
The parent legend-apps repository also documents several sibling apps sharing the same monorepo and native-host infrastructure: Legend Diff (a native macOS diff/PR/patch viewer with merge-conflict resolution), Legend Markdown (a local-first block-based Markdown editor), Legend Music (a folder-based local music player, currently macOS-first with iOS/Android targets in progress), and Legend Code (a read-only, syntax-highlighted TypeScript/TSX viewer). Per the README, Legend Diff is the only app currently packaged and distributed through GitHub Releases with public downloads (Apple Silicon and Intel builds); the README states the repository itself is private, so public source access is not generally available despite MIT licensing being listed for the overall project metadata.

## Evidence boundary
The specific release page and the parent legend-apps repository README were fetched and read directly for this capture; GitHub API metadata for the repository was checked separately. No release binary was downloaded, no app was installed or run, and the described performance improvements were not independently benchmarked in this capture; they are the maintainer's own stated release notes.

## Sources
- https://github.com/LegendApp/legend-apps/releases/tag/chat-history-v0.0.2
- https://github.com/LegendApp/legend-apps
