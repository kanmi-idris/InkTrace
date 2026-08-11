---
title: "shuohao-skills: Novel Characters Skill for AI Coding Agents"
kind: "paste"
captured_at: "2026-08-09 20:31"
tags: ["github", "agent-skills", "claude-code", "codex", "novel-characters", "character-design", "ai-workflows"]
source_url: "https://github.com/eternityspring/shuohao-skills"
status: "inbox"
---

# shuohao-skills: Novel Characters Skill for AI Coding Agents

## Repository overview
shuohao-skills is a collection of skills for AI coding agents. The repository states that the skills work with Claude Code and Codex.

The inspected repository contains one skill, novel-characters. It converts a novel into a character bible with character profiles, visual or cartoon-design prompts, voice prompts, and turnaround-sheet prompts or outputs. The repository README says the report language and image style can be selected.

## Installation
- Clone the repository and run ./scripts/install.sh.
- The installer detects whether Claude Code or Codex is installed and symlinks the skills into the corresponding global skill directory.
- Run ./scripts/install.sh novel-characters to install one skill.
- Use --codex to install only to Codex.
- Use --uninstall to remove the symlinks.
- Manual symlinks can target ~/.claude/skills/novel-characters or ~/.codex/skills/novel-characters.

## Prerequisites
- Node.js 18 or newer is required. The scripts use the standard library and have no npm dependencies.
- The skill uses the current model session quota and does not require an API key.
- Codex CLI is optional for image generation through its built-in image generation capability. Other outputs can be produced without it.

## Skill repository contract
Each skill is self-contained under skills/<skill-name> and should include:
- SKILL.md for the agent workflow.
- README.md for human-readable documentation.
- scripts with deterministic, zero-dependency tools.
- scripts/selftest.mjs that does not call a model and covers deterministic logic.
- references, examples, and assets when needed.

The repository requires every skill to include SKILL.md and scripts/selftest.mjs. Before adding a skill, run all self-tests with a shell loop. The README says there is no CI because the self-tests run quickly. The project was tested on macOS with Node 24; Linux and older Node versions are theoretical targets, not verified targets.

## License
Apache License 2.0.
