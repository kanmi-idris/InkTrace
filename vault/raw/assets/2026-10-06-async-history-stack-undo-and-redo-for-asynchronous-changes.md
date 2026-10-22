---
title: "Async History Stack: undo and redo for asynchronous changes"
kind: "article (X/Twitter)"
author: "Artem Zakharchenko (@kettanaito)"
source_url: "https://x.com/kettanaito/status/2106826746066821219"
related_urls:
  - "https://github.com/kettanaito/async-history-stack"
posted_at: "2026-10-04T19:20:13Z"
tags: ["javascript", "typescript", "undo-redo", "async", "history-stack", "open-source"]
---

# Async History Stack

## Post claim
Artem Zakharchenko presents Async History Stack as a small, dependency-free way to compose actions into history entries. He names undo, redo, and cancellation. A same-author reply says it is open source.

## Repository details
The README describes a JavaScript and TypeScript library for change history that is separate from a state-management or editor library. Install command: `npm i async-history-stack`. The repository lists an MIT license and version 1.1.1 as its latest release on 2026-06-25.

Each pushed change has an apply function that returns a revert function. Both functions can be asynchronous. The API includes undo, redo, clear, merge, cancellation signals, automatic merging within a time window, and a history limit.

## Evidence limits
I inspected the repository README and release listing. I did not install or test the package. The post's claims about size and dependency count are the author's claims.
