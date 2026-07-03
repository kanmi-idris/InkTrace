---
title: AI Builder Club Skills — Claude Code Plugin Marketplace for Loop Engineers
kind: paste
captured_at: 2026-06-30 14:55
tags: [claude-code, plugin, loop-engineer, codebase-harness, ai-agents, skills]
source_url: https://github.com/AI-Builder-Club/skills
status: inbox
---

# AI Builder Club Skills — Claude Code Plugin Marketplace for Loop Engineers

AI-Builder-Club/skills — Claude Code plugin marketplace for building "loop engineers" (compounding agent loops). 625 stars, 100 forks, 22 commits. By Jason Zhou (AI Jason).

Two flagship skill sets:

1. Codebase Harness — make any repo agent-ready:
   - setup-codebase-harness: orchestrator that sets up dev-local, e2e, crabbox, pr skills
   - dev-local-setup: one-command local dev stack (scripts/dev-local.sh up)
   - e2e-setup: add real per-PR test gate
   - crabbox-setup: isolated cloud box per agent for parallel code shipping (needs crabbox CLI + Daytona provider)
   - pr: sub-agent verifies feature works, opens PR with proof

2. Loops — shared file-based knowledge base for compounding agent loops:
   - new-loop: bootstraps knowledge base (ARCHITECTURE.md, LOG.md, signals/docs/domains/ folders, CLAUDE.md section), scaffolds loop, does test run
   - After setup, agent reads CLAUDE.md + domain README, does work, writes artifacts, appends to LOG.md
   - Multiple loops (support, SEO, product, ads) read/write same folders — compounding effect

Concept: agents triggered by cron/webhook/incident do work and write findings to shared file-based memory. Next run reads memory and continues. Compounding across loops.

Install: /plugin marketplace add AI-Builder-Club/skills

Requirements: Claude Code, git. crabbox-setup optional (needs crabbox CLI + Daytona).

Repo layout: skills/ as Claude Code plugin with marketplace.json, plugin.json. Skills under skills/ dir as individual skill folders.
