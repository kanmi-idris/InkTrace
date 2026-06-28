---
title: Softaworks Agent Toolkit — 40+ Agent Skills for Coding Agents
kind: paste
captured_at: 2026-06-22 07:58
tags: [agent-skills, claude-code, coding-agent, skills, qa-testing, test-cases]
source_url: 
status: inbox
---

# Softaworks Agent Toolkit — 40+ Agent Skills for Coding Agents

# Softaworks Agent Toolkit — Curated Agent Skills Collection

## Source
https://github.com/softaworks/agent-toolkit

## Overview
A curated collection of 40+ skills for AI coding agents (Claude Code, Codex, Cursor). Skills are packaged instructions and scripts extending agent capabilities across development, documentation, planning, QA, design, and professional workflows. Follows the Agent Skills format (agentskills.io).

**Stars**: 2.1k | **Forks**: 198 | **License**: MIT
**Author**: @leonardocouy
**Languages**: Python (67.2%), CSS, Shell (10.9%), TypeScript, PLpgSQL

## Skill Categories
- **AI Tools**: codex (GPT-5.2 analysis), gemini (200k+ context review), perplexity (web search)
- **Meta**: agent-md-refactor, command-creator, plugin-forge, skill-judge
- **Documentation**: C4 architecture, draw.io, Excalidraw, Mermaid, Marp slides, README crafting, API handoff docs
- **Design & Frontend**: MUI v7, React 18-19, OpenAPI-to-TypeScript, design-system-starter
- **Development**: database-schema-designer, dependency-updater, naming-analyzer, session-handoff
- **Planning**: game-changing-features, gepetto (implementation planning), requirements-clarity
- **Testing**: qa-test-planner
- **Professional**: daily-meeting-update, feedback-mastery, professional-communication
- **Utilities**: datadog-cli, humanizer, jira, meme-factory, web-to-markdown, domain-name-brainstormer

## Featured: qa-test-planner / generate_test_cases.sh
An interactive bash script (302 lines) for creating comprehensive manual test cases. Walks through 7 steps:
1. Test Case Basics (ID, title, priority P0-P3, type: Functional/UI/Integration/Regression/Performance/Security)
2. Test Objective (what and why)
3. Preconditions (multi-line input)
4. Test Steps (action + expected result pairs)
5. Test Data
6. Figma Design Validation (if UI test type — layout, spacing, typography, colors, component states)
7. Edge Cases & Additional Info

Outputs a structured markdown test case file with execution history table and attachment checklist.

## Install
npx skills add softaworks/agent-toolkit

## Tags
agent-skills, claude-code, coding-agent, skills, qa-testing, test-cases
