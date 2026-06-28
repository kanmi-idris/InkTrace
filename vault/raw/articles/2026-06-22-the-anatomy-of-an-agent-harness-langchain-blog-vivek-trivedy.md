---
title: The Anatomy of an Agent Harness — LangChain Blog (Vivek Trivedy)
kind: paste
captured_at: 2026-06-22 08:13
tags: [agent-harness, harness-engineering, langchain, ai-agents, context-management, agent-architecture]
source_url: 
status: inbox
---

# The Anatomy of an Agent Harness — LangChain Blog (Vivek Trivedy)

# The Anatomy of an Agent Harness — LangChain

## Source
https://www.langchain.com/blog/the-anatomy-of-an-agent-harness

## Overview
Authoritative blog post by Vivek Trivedy (LangChain) defining what an agent harness is and deriving its core components. Core thesis: **Agent = Model + Harness**.

**Published**: March 10, 2026
**Reading time**: 12 min

## Key Definition
"If you're not the model, you're the harness." A harness is every piece of code, configuration, and execution logic that isn't the model itself. Includes: system prompts, tools/skills/MCPs, bundled infrastructure (filesystem, sandbox, browser), orchestration logic (subagent spawning, handoffs, model routing), hooks/middleware (compaction, continuation, lint checks).

## Why Harnesses Exist
Models take in text/images/audio/video and output text. They cannot: maintain durable state, execute code, access realtime knowledge, or setup environments. All these are harness-level features.

## Core Harness Components (Derived from Desired Behaviors)

### 1. Filesystem for Durable Storage
- Most foundational harness primitive
- Agent workspace for reading data/code/docs
- Offload intermediate outputs instead of holding in context
- Natural collaboration surface for multi-agent teams
- Git adds versioning for tracking work, rollback, branching

### 2. Bash + Code as General Purpose Tool
- ReAct loop (reason → act via tool call → observe → repeat)
- Instead of pre-building every tool, give agents bash
- "Giving models a computer" — model designs its own tools via code on the fly

### 3. Sandboxes for Safe Execution
- Isolated environments, pre-installed runtimes, CLIs, browsers
- Allow-listed commands, network isolation
- On-demand creation, fan-out across tasks, tear-down

### 4. Memory & Search for Continual Learning
- AGENTS.md standard for durable memory
- Web Search + MCP tools (e.g., Context7) for up-to-date knowledge beyond cutoff

### 5. Battling Context Rot
- **Compaction**: Summarize/offload when context window fills
- **Tool call offloading**: Keep head/tail tokens, offload full output to filesystem
- **Skills with progressive disclosure**: protect context at startup

### 6. Long-Horizon Autonomous Execution
- Filesystem + git for tracking across sessions
- **Ralph Loop**: Intercept exit attempt, reinject original prompt in clean context
- **Planning**: Decompose goals into steps via plan files in filesystem
- **Self-verification**: Run test suites, loop back on failure

## Future of Harnesses
- Model training and harness design co-evolve (feedback loop)
- Post-training (Claude Code, Codex) includes harness in the loop
- Overfitting: changing tool logic can degrade model performance
- But best harness for YOUR task may not be the one model was trained on (Terminal Bench 2.0 evidence: Opus 4.6 scores vary wildly across harnesses)
- LangChain explores: orchestrating 100s of parallel agents, agents analyzing own traces, just-in-time harness assembly

## Related LangChain Projects
- deepagents — library for building long-running agents for complex tasks
- LangSmith Deployment — 1-click agent deployment

## Tags
agent-harness, harness-engineering, langchain, ai-agents, context-management, agent-architecture
