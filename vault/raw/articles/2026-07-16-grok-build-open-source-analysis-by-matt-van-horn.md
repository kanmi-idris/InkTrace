---
title: Grok Build Open Source Analysis by Matt Van Horn
kind: paste
captured_at: 2026-07-16 21:14
tags: [grok-build, xai, open-source, coding-agents, security, privacy]
source_url: https://x.com/mvanhorn/status/2077548703410540669
status: inbox
---

# Grok Build Open Source Analysis by Matt Van Horn

# I Had My Agent Read All 1.3M Lines of Open-Source Grok Build. It Found That Grok Doesn't Trust Grok.

**Author:** Matt Van Horn (@mvanhorn)
**Date:** July 16, 2026
**URL:** https://x.com/mvanhorn/status/2077548703410540669

Matt Van Horn pointed his own coding agent at the entire open-source Grok Build repository (~1.3M lines of Rust across ~79 crates) and told it to read everything and surface the cleverest code and prompts inside.

The most surprising finding: **Grok Build does not trust Grok.**

## Context

- On July 14, 2026, SpaceXAI open-sourced Grok Build (their terminal coding agent) under Apache 2.0
- This followed a privacy controversy where Grok Build was discovered uploading entire Git repositories (including unread files, SSH keys, password databases, full commit history) to xAI's Google Cloud Storage buckets
- Researcher cereblab demonstrated the upload channel was separate from the model API — on a 12GB repo the model traffic was ~192KB while the storage channel moved 5.10 GiB
- Elon Musk responded: "all user data that was uploaded to SpaceXAI before now will be completely and utterly deleted"
- xAI open-sourced the harness (CLI, agent runtime, tools, TUI) in a single sync commit

## Key Finding: "Grok Build does not trust Grok"

The agent analyzed the system prompts and code and found evidence that Grok Build's own architecture treats the underlying Grok model as untrusted — with guardrails, sandboxing, and prompt-level restrictions that imply the model is not trusted to be safe or correct on its own.
