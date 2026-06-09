# Software Mansion Agentic Engineering Guide

Captured from the public Software Mansion guide referenced by the user on 2026-05-23.

Canonical URL:
https://agentic-engineering.swmansion.com/

---

Guide framing captured from the public site:

- The site presents itself as:
  - `Software Mansion Agentic Engineering Guide`
- The introduction says:
  - the book collects practical insights from applying agentic engineering patterns in Software Mansion’s own projects and in clients’ work
  - it is a public snapshot of the state of the art
  - last revised April 2026

Definition of agentic engineering captured from the introduction:

- The guide defines agentic engineering as professional software development with AI agents as active collaborators.
- It distinguishes this from “vibe coding” by emphasizing:
  - human responsibility for outcomes
  - reviewable changes
  - quality gates
  - clear prompts
  - project structure
  - repeatable team practices

Learning-path and structure details captured from the public site:

- The guide is divided into:
  - `Getting Started`
  - `Becoming Productive`
  - `Expanding Horizons`
- It explicitly supports both:
  - greenfield projects
  - mature existing codebases

Core workflow and context-management ideas captured from the guide:

- The `Workflow` section highlights:
  - knowledge cutoff
  - agents cannot truly learn the project on their own
  - context rot
  - non-determinism
  - human-model misalignment
  - context as a scarce resource
- The guide emphasizes durable improvement through:
  - prompts
  - docs
  - lints
  - tests
  - tooling
  rather than hoping a model simply “remembers”

Harness-engineering concepts captured from the guide:

- The `Harness engineering` chapter explicitly frames output quality as something shaped by the surrounding software, not just by prompts.
- Topics listed include:
  - `AGENTS.md`
  - skills
  - MCP
  - subagents
  - hooks
  - when to use what

Evaluation and reliability ideas captured from the guide:

- The `Evaluation` chapter argues that non-deterministic outputs require more than binary pass-fail assertions.
- It lists evaluation strategies such as:
  - deterministic metrics
  - semantic similarity
  - LLM-as-a-judge
  - human evaluation
- The guide positions evaluation pipelines as the line between experimentation and engineering.

Parallelism and organizational scale captured from the guide:

- The `Going 10x` and `High-level harnesses` sections emphasize parallel agents, work queues, and git worktrees.
- The guide explicitly describes a shift from managing a single agent turn by turn to orchestrating fleets of agents and reviewing their output queue.
- It also discusses:
  - scheduled and recurring agents
  - review dashboards
  - one-human-company or code-factory patterns

Other useful operational themes captured from the guide:

- model pricing as an engineering concern
- first steps in mature projects
- practical environment setup for new repos
- recommended further reading and signal sources

Interpretive note:

- This source is strongest as a comprehensive operational guide to agent-enabled software development. Its durable value is not only agent advocacy, but the concrete framing of context management, harness engineering, evaluation, review discipline, and parallel-agent orchestration as the real substance of “agentic engineering.”
