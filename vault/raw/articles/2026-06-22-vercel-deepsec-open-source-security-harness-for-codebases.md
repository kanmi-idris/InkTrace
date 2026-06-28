---
title: Vercel deepsec — Open-Source Security Harness for Codebases
kind: paste
captured_at: 2026-06-22 06:10
tags: [security, code-analysis, ai-agents, open-source, vercel, vulnerability-detection]
source_url: 
status: inbox
---

# Vercel deepsec — Open-Source Security Harness for Codebases

# Vercel deepsec — Open-Source Security Harness for Codebases

## Source
https://vercel.com/blog/introducing-deepsec-find-and-fix-vulnerabilities-in-your-code-base

## Overview
Open-source security harness powered by coding agents. Finds and fixes vulnerabilities in large codebases by using Claude/GPT to perform tailored security investigations. Runs on your own infrastructure.

**Published**: May 4, 2026
**Author**: Malte Ubl
**License**: Open source (github.com/vercel-labs/deepsec)

## Pipeline
1. **Scan** — Regex-only scan of all files for security-sensitive areas
2. **Investigate** — Agents investigate each identified file (tracing data flows, checking mitigations)
3. **Revalidate** — Second agent run validates findings, removes false positives, reclassifies severity
4. **Enrich** — Uses git metadata to identify contributors responsible for fixing each issue
5. **Export** — Formats findings as instructions for tickets for humans and coding agents

## Key Details
- Uses Opus 4.7 (max effort) and GPT 5.5 (xhigh reasoning)
- False positive rate: ~10-20
