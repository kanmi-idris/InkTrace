---
title: DigUp repository README and privacy claims
kind: article
captured_at: 2026-10-11 14:53
tags: [DigUp, GitHub, privacy, EmbeddingGemma, local-search, macOS]
source_url: https://github.com/ARahim3/DigUp
status: raw
---

# DigUp repository README and privacy claims

## Source scope
This capture records the DigUp GitHub README as displayed on the repository's `main` branch on 2026-10-11. Product, privacy, performance, and model details remain project claims unless independently tested.

## Product and model described by the project
The README describes DigUp as a native Mac app for semantic search across selected folders. It names images, screenshots, PDFs, documents, recordings, videos, and optional code search. It says model embeddings place text, images, audio, and video in a shared 768-dimensional space and use exact-word matching as an added signal.

The README says DigUp uses an 8-bit build of Google's EmbeddingGemma 2 through llama.cpp on the Mac GPU. It describes the model as 740 million parameters and says it supports more than 100 languages. The README says its own evaluation covers English, Bengali, and Arabic, and notes that model quality is not equal across languages. It says Apple Vision text recognition covers about 25 languages and that languages without spaces, such as Chinese, Japanese, and Thai, are not split into words for exact-word search.

The README says the model download is 865 MB, with a 310 MB text component and 555 MB image/audio encoders. It says the app is about 20 MB. The Reddit post instead says the text encoder is about 250 MB when searching. The sources do not reconcile these different size figures. The Reddit post also claims indexing peaks under 2 GB; the README does not state that exact peak. See `src-2026-10-11-001`.

## Privacy and file handling claims
The README says indexed content stays on the Mac. It says the app connects online to download the model once and check for updates once a day. It says the update check sends no file information and can be disabled, and that the app has no account or telemetry.

The README says DigUp reads only selected folders, never uploads, changes, or moves files, and does not fetch iCloud-only files. It says it skips credentials, certificates, password files, hidden folders such as `~/.ssh`, app bundles, caches, and folders that look like datasets. Code search is off until the user enables it and chooses folders; code results use a separate index.

## Installation and platform claims
The README says DigUp requires an Apple Silicon Mac with macOS 14 or later. It describes installing from the DMG in Releases or with `brew install --cask arahim3/tap/digup`. It says the first model download is 865 MB. I did not download or install the app.

## License claims
The README lists DigUp as MIT-licensed. It says EmbeddingGemma 2 is Apache 2.0, llama.cpp is MIT, and Sparkle is MIT. It says third-party notices ship inside the app. I did not inspect the packaged license notices.

## Source limitations
These are README statements from the project owner. They do not independently verify the privacy behavior, memory use, search latency, notarization, or model quality. The Reddit post is captured separately in `src-2026-10-11-001`; the 0.6.0 release metadata is in `src-2026-10-11-003`.
