---
title: DigUp announcement on Reddit
kind: article
captured_at: 2026-10-11 14:53
tags: [DigUp, Reddit, LocalLLaMA, EmbeddingGemma, local-search, macOS]
source_url: https://www.reddit.com/r/LocalLLaMA/comments/1x2eeds/opensource_mac_app_that_runs_embeddinggemma_2/
status: raw
---

# DigUp announcement on Reddit

## Source details
- Subreddit: r/LocalLLaMA
- Author: u/A-Rahim
- Title: “Open-source Mac app that runs EmbeddingGemma 2 locally to search your files by what’s in them.”
- Reddit displayed “1d ago” when inspected on 2026-10-11.
- The post contains a 22-second video. I did not view or infer its contents.

## Author's claims
The author presents DigUp as a free, MIT-licensed Mac app that uses Google DeepMind's EmbeddingGemma 2 to search local files by meaning. The post says it can search text, images, audio, and video in one shared space. Examples include finding a zebra in a video, a podcast moment about sleep, a lease clause, a beach-dog photo, cross-language matches in Bengali or Arabic, and code when code search is enabled.

The author says DigUp uses ggml-org's Q8_0 GGUF model (865 MB) with llama.cpp and Metal in a native Swift app, without Python. The post claims searches load only the text encoder (~250 MB), return results about 0.1 seconds after typing stops, and keep indexing under 2 GB. It says audio and video use 30-second windows and one frame per shot. It says the app works locally except for the model download and an optional update check. The post lists Apple Silicon and macOS 14+. It labels the linked download signed and notarized; I did not verify that claim.

## Evidence limits
These are claims in the author's Reddit post, not independently measured facts. The linked README reports a 310 MB text component within the 865 MB model download; it does not reconcile that size with the post's ~250 MB search-time figure. The README also does not state the exact under-2-GB indexing peak. See `src-2026-10-11-002`. I did not install or run DigUp.
