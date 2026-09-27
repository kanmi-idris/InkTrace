---
title: "Legend Diff v0.0.4: Release Notes for the Native macOS Diff/PR Viewer"
kind: "paste"
captured_at: "2026-09-09 22:24"
tags: ["legend-apps", "legendapp", "legend-diff", "macos", "diff-viewer", "github-pull-requests", "react-native", "sparkle-updater"]
source_url: "https://github.com/LegendApp/legend-apps/releases/tag/diff-v0.0.4"
status: "inbox"
---

# Legend Diff v0.0.4: Release Notes for the Native macOS Diff/PR Viewer

## Relation to existing source
Legend Diff is a sibling app within the same LegendApp legend-apps monorepo already documented in this vault via the Legend Chat History v0.0.2 capture (src-2026-09-09-001), which also summarized the parent repository's README description of Legend Diff: a native macOS viewer for reviewing changes across repositories, files, patches, GitHub pull requests, and commits, including merge-conflict resolution (choosing ours/theirs/both per conflict) and support for opening content via dialogs, drag and drop, paste, launch arguments, or an optional `ldiff` command-line helper. This record captures the specific v0.0.4 release notes and distributable assets.

## Release details
Legend Diff 0.0.4 was published by jmeistrich (the same maintainer as the chat-history release) on 2026-09-09, at commit 4744fb8, roughly the same day as the chat-history-v0.0.2 release from the same repository. The release notes document two changes:
- A startup performance improvement: diff windows now appear sooner at launch, already restored to their prior size, position, theme, and sidebar layout, rather than appearing after that state is fully reconstructed.
- A bug fix: progressive loading and document/view changes now reliably populate visible rows and (per the truncated remainder of the note) keep some other UI state correctly in sync, mirroring the kind of rendering-consistency fix documented in the chat-history release.

## Distribution
The release ships as signed application bundles for both Apple Silicon (arm) and Intel (x86) Macs, roughly 9.7MB and 10.3MB respectively, alongside smaller delta-update packages for both architectures (used for incremental in-place updates rather than full re-downloads, consistent with the parent repository's documented use of a Sparkle-based updater feed for macOS releases) and standard GitHub-generated source code archives (zip and tar.gz). This is consistent with the parent README's note that Legend Diff is currently the only app in the monorepo packaged and distributed through public GitHub Releases.

## Evidence boundary
The release page was inspected directly via the browser accessibility tree for this capture; no release asset was downloaded and the app was not installed or run. Performance and reliability claims in the release notes are the maintainer's own stated changes, not independently benchmarked or verified in this capture.

## Sources
- https://github.com/LegendApp/legend-apps/releases/tag/diff-v0.0.4
- https://github.com/LegendApp/legend-apps (parent repository, already documented via src-2026-09-09-001)
