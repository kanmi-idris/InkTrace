---
title: Impeccable — The Missing Design Vocabulary for AI Agents
kind: paste
captured_at: 2026-06-27 06:17
tags: [design-ai, agent-skills, ai-frontend, ai-design-tools, claude]
source_url: 
status: inbox
---

# Impeccable — The Missing Design Vocabulary for AI Agents

Impeccable: The missing upgrade to Anthropic's impeccable skill.

The missing design vocabulary for agents.
It's why AI frontends all share one look: no words for hierarchy, contrast, or restraint. Impeccable gives your agent the designer's vocabulary, and gives you the same commands, so you both stop guessing and start directing, live, in your production codebase.

Created by Paul Bakaus. 40k stars on GitHub (github.com/pbakaus/impeccable). Works with Codex CLI, Claude Code, GitHub Copilot, Cursor, Gemini CLI, Antigravity, OpenCode, and Pi.

Key features:
- Desloppification: strips AI slop tells and bad defaults out of every design discipline (type, motion, copy). 44 deterministic rules, no LLM, exit codes the build can read via `npx impeccable detect src/`.
- The Language: 23 commands giving a shared design vocabulary with AI (e.g. /typeset, /colorize, /animate, /bolder, /quieter, /distill, /polish, /adapt, /delight, /overdrive, /layout, /typeset, /colorize).
- Respects your design system: inherits tokens, components, and conventions from your codebase instead of overwriting them.
- Real product context: captures the brief in PRODUCT.md, every command reads it before designing.
- Travels as DESIGN.md: /impeccable document writes in Google Stitch format, making visual system portable.
- Tuned to each agent: plays to each agent's strengths and weaknesses. Different builds for Codex, Claude Code, Gemini CLI, Cursor — including model-tuned slop rules (Gemini build kills image-on-hover motion; Codex build refuses ghost-cards and over-rounding).
- Brand vs Product mode: two registers — brand (story-driven) and product (data-driven) — every command knows which.
- Detect before ship: npx impeccable detect with 44 deterministic rules, JSON output, exit codes for CI.
- Live Mode (beta): pick any element in running dev server, leave comment/stroke, three production-quality variants swap via HMR.
- Accept writes to source: variants land as real file edits, not throwaway mocks.

Install methods:
1. npx impeccable install (recommended) — Node 24+, builds tailored to your harness and model
2. /plugin marketplace add pbakaus/impeccable (Claude Code only)
3. npx skills add pbakaus/impeccable (general-purpose, shared build)

Additional tools:
- Chrome extension for detector overlay on any page
- CLI for CI: npx impeccable detect src/
- Newsletter at impeccablestyle.substack.com
- X: @impeccable_ai
