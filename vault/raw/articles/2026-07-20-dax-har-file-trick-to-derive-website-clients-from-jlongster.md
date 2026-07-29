---
title: dax — HAR-file trick to derive website clients from @jlongster
kind: paste
captured_at: 2026-07-20 14:35
tags: [agents, browser-automation, har, cli, web-scraping, llm]
source_url: https://x.com/thdxr/status/2078727284865827140
status: inbox
---

# dax — HAR-file trick to derive website clients from @jlongster

# dax (@thdxr) — HAR-file trick for deriving website clients

Source: https://x.com/thdxr/status/2078727284865827140
Author: dax (@thdxr), Jul 19 2026 (443K views)

Trick (credited to @jlongster): instead of having an agent control a browser every time, ask it to record network requests into a HAR file, then derive a client for any website from that HAR. This is more efficient than browser-controlling the site on every call.

dax used it to build a quick Uber Eats CLI.

## Implication
- Browser automation is slow/expensive per call. Capturing the HAR once, then generating a typed API client from the recorded requests, gives a far cheaper recurring path for agent-driven site interaction.
- Related to the "agent-native CLI from a website" pattern (see Printing Press, src-2026-07-20-014).
