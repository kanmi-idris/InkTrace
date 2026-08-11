---
title: "Kakulukian/youtube-transcript"
kind: "paste"
captured_at: "2026-08-09 08:22"
tags: ["github", "youtube", "transcript", "nodejs", "typescript", "npm"]
source_url: "https://github.com/Kakulukian/youtube-transcript"
status: "inbox"
---

# Kakulukian/youtube-transcript

## Source overview
A Node package for extracting YouTube transcripts. The repository was created because the author found a Python script but wanted a Node implementation.

## Technical notes
- The package uses an unofficial YouTube API and may break if YouTube changes its endpoints.
- Install with npm, Yarn, or pnpm.
- Usage imports fetchTranscript from youtube-transcript and calls fetchTranscript with a video ID or URL.
- The main method is fetchTranscript(videoId, options), returning a Promise of transcript responses.
- The repository contains example and src directories, TypeScript configuration, lint configuration, and a package manifest.
- The project is licensed under MIT.
