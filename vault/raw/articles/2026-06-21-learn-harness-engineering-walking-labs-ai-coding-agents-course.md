---
title: Learn Harness Engineering — Walking Labs (AI Coding Agents Course)
kind: paste
captured_at: 2026-06-21 07:47
tags: [harness-engineering, ai-agents, coding-agents, codex, claude-code, agent-engineering]
source_url: 
status: inbox
---

# Learn Harness Engineering — Walking Labs (AI Coding Agents Course)

# Learn Harness Engineering — Walking Labs

## Source
https://walkinglabs.github.io/learn-harness-engineering/en/

## Overview
A course dedicated to the engineering of AI coding agents. Teaches systematic environment design, state management, verification, and control systems to make agentic coding tools (Codex, Claude Code) truly reliable. Available in 14 languages.

## Core References
- OpenAI: Harness engineering: leveraging Codex in an agent-first world
- Anthropic: Effective harnesses for long-running agents
- Anthropic: Harness design for long-running application development
- Awesome Harness Engineering (github.com/walkinglabs/awesome-harness-engineering)

## Course Structure
- 12 lectures (theory behind effective harnesses)
- Hands-on projects
- Resource library with copy-ready templates (AGENTS.md, feature_list.json)

## Key Concepts (from Lecture 1)
- **Capability Gap**: Gulf between model benchmark performance (50-60% on SWE-bench) vs real-world performance
- **Harness**: Everything outside the model — instructions, tools, environment, state, verification
- **Harness-Induced Failure**: Model has capability but execution environment has structural defects
- **Verification Gap**: Gap between agent confidence and actual correctness
- **Diagnostic Loop**: Execute → observe failure → attribute to harness layer → fix → re-execute
- **Definition of Done**: Verifiable completion conditions (tests pass, lint clean, type checks)

## Five Defense Layers for Failure Attribution
1. Task specification (was the task unclear?)
2. Context provision (was context insufficient?)
3. Execution environment (misconfigured?)
4. Verification feedback (no verification methods?)
5. State management (state loss between sessions?)

## Core Principle
"When things fail, don't swap the model first — check the harness." One AGENTS.md file may be more effective than upgrading to a more expensive model.

## The Million-Line Experiment (OpenAI 2025)
Three engineers, 5 months, 1M+ lines of code generated entirely by Codex. 1,500 PRs (3.5/person/day). Pattern: break goals into small building blocks, assemble one by one. Problems were never "not trying hard enough" — always "what is the agent still missing."

## Key Takeaways
- Same model produces fundamentally different output with vs without a complete harness
- Agents suffer from "context anxiety" — when context runs low, they rush to finish
- Cross-session state loss spikes failure rates on tasks exceeding 30 minutes
- Implicit conventions not written down = agent has no way to comply

## Tags
harness-engineering, ai-agents, coding-agents, codex, claude-code, agent-engineering
