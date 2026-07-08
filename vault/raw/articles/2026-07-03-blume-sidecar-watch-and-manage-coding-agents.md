---
title: Blume Sidecar — Watch and Manage Coding Agents
kind: paste
captured_at: 2026-07-03 15:55
tags: [ai-agents, agent-harness, coding-agents, agent-observability, sidecar, claude-code, cursor, codex]
source_url: https://blume.codes/
status: inbox
---

# Blume Sidecar — Watch and Manage Coding Agents

Blume is a desktop sidecar app that watches coding agents (Claude Code, Cursor, Codex, omp, Pi) and provides visibility into what agents are doing, the hidden files shaping their behavior, and suggestions for improvement.

Key features:
- Agent Overview: see when agents finish, are working, or need approval
- Hidden Files & Rules: track skills, hooks, rules that shape agent behavior
- Usage Tracking: monitor remaining token/usage across Claude, Codex, Cursor
- Setup Management: all agent files in one place
- Auto-fixes (coming soon): detect mismatches between agent setups and chat instructions, proposes fixes
- Analytics (coming soon): see if agent setup is improving over time
- Local Domain Model (coming soon): single source of truth for intent

Improvement engine analyzes agent activity and suggests:
- 'Preserve public behavior on refactors' — appends public-API stability rule to AGENTS.md
- 'Typecheck before every commit' — adds PostToolUse typecheck hook
- 'Skill: debug flaky retries' — creates on-demand skills from debugging patterns
- 'Align indent rule with chats' — updates cursor rules based on recent chat patterns

Works with: Cursor, Claude Code, Codex, Copilot, omp, Pi

Upcoming: central domain model, conflict resolution across teams, intent harvesting from Slack/meetings/code reviews, auto-improve mode.

Site shows live example with 2 active agents:
- commerce-platform (Cursor, refactoring catalog sync)
- customer-portal (Cursor, fixing billing settings)

Tagline: 'Are your coding agents running amok?' — 'Keep every agent moving in the right direction.'

Contact: hello@blume.codes, X: @BlumeDotCodes
