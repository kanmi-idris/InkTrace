---
title: Complete Guide to AGENTS.md — Progressive Disclosure for AI Coding Agents
kind: paste
captured_at: 2026-07-21 09:25
tags: [AGENTS.md, CLAUDE.md, coding-agents, progressive-disclosure, instruction-budget, monorepo]
source_url: 
status: inbox
---

# Complete Guide to AGENTS.md — Progressive Disclosure for AI Coding Agents

# A Complete Guide To AGENTS.md — aihero.dev

**URL**: aihero.dev/a-complete-guide-to-agents-md
**Updated**: Jan 18 2026

Guide to writing effective AGENTS.md (or CLAUDE.md) for AI coding agents.

## Key principles
- **Instruction budget**: Frontier LLMs follow ~150–200 instructions. Every token in AGENTS.md loads on every request — keep it small
- **Progressive disclosure**: Root AGENTS.md → separate domain files → nested documentation tree
- **Staleness danger**: File paths/structures change; describe capabilities not paths
- **Monorepo support**: Subdirectory AGENTS.md files merge with root

## What goes in root AGENTS.md (minimum)
1. One-sentence project description (role-based prompt)
2. Package manager if not npm
3. Non-standard build/typecheck commands

## What moves out
- Language conventions → docs/TYPESCRIPT.md
- Testing patterns → docs/TESTING.md
- Build config → docs/BUILD.md
- Agent skills → skills/

## Fix prompt included
Refactoring prompt to decompose a bloated AGENTS.md via progressive disclosure.

**Relevance**: Directly applicable to maintaining InkTrace's AGENTS.md. Aligns with progressive disclosure patterns.
