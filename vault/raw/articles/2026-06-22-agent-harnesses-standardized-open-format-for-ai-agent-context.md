---
title: Agent Harnesses — Standardized Open Format for AI Agent Context
kind: paste
captured_at: 2026-06-22 06:27
tags: [agent-harnesses, ai-agents, agent-skills, specification, open-format, progressive-disclosure]
source_url: 
status: inbox
---

# Agent Harnesses — Standardized Open Format for AI Agent Context

# Agent Harnesses — Standardized Open Format for AI Agent Context

## Source
https://agentharnesses.io/home

## Overview
A lightweight, open format for defining the complete context an AI agent needs to fulfill a role. Bundles skills and reference material into a single, portable, structured directory. Related to the Agent Skills standard (github.com/agentskills/agentskills).

## Structure
```
my-harness/
├── HARNESS.md        # Required: identity + overview (YAML frontmatter + markdown body)
├── skills/           # Optional: Agent Skills bundles (SKILL.md per skill)
└── references/       # Optional: cross-skill documentation
```

## Key Details
- **Progressive disclosure**: HARNESS.md loaded at startup, skills/references loaded on demand per task
- **Grouping**: Skills and references can be organized into subdirectories with SKILLS.md / REFERENCES.md summary files for efficient agent routing
- **HARNESS.md** uses YAML frontmatter (name, description) + free-form markdown body (role summary, skill index, reference index)
- **Skills** follow the Agent Skills standard exactly
- **References** are cross-cutting docs (brand guidelines, infra overviews, style guides)

## Loading Model
1. **Load** (session start) — full HARNESS.md injected into context
2. **Discovery** (task received) — agent reads SKILLS.md / REFERENCES.md summaries
3. **Activation** (description aligns) — agent reads full skill/reference content
4. **Execution** (action required) — agent runs scripts bundled within a skill

## Analogy
"Harness is a job title, skills are the job requirements." A "technical support" harness might have "database management", "ticket response", and "spreadsheet modification" skills.

## Why This Exists
Harnesses emerged organically but lacked a defined structure, making it hard to optimize agents. This standard aims to make harness creation easier and agent usage more efficient.

## Related Pages
- Specification, Quickstart, Best Practices, Evaluating, Client Support, Organizing Large Harnesses, Using Scripts

## Tags
agent-harnesses, ai-agents, agent-skills, specification, open-format, progressive-disclosure
