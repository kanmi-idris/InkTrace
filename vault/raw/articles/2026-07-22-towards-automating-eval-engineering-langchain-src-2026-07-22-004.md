Source: https://www.langchain.com/blog/towards-automating-eval-engineering
Title: Towards Automating Eval Engineering / Eval Engineering Skill — Build Evals From Repo Context and Traces
Author: Vivek Trivedy (Viv) — Applied Research Lead @ LangChain Labs
Published: 2026-07-22
Source ID: src-2026-07-22-004
X Post: https://x.com/Vtrivedy10/status/2079976006644072796 (105.3K views)

---

LangChain launched the **Eval Engineering Skill**, a skill that helps coding agents build evals using context from a repository and agent traces.

## How It Works

1. **Inspect the repo** — maps the agent surface: prompts, models, tools, skills, hooks, etc.
2. **Mine traces** (optional) — uses tools like `langsmith-cli` to retrieve traces showing how tools behave in practice (arguments, results, errors)
3. **Propose eval directions** — the skill interviews the user who gives feedback and iteratively approves each eval
4. **Generate Harbor tasks** — the output is executable evals in Harbor format

## Harbor Task Structure

```
evals/<task-id>/
├── task.toml
├── instruction.md    # message given to the agent at start
├── environment/      # Dockerfile with setup
└── tests/            # verifier that scores correctness
```

Each task contains:
- An **Instruction** — start message describing the task
- An **Environment** — Dockerfile with tools, data, setup
- A **Verifier** — scores whether the agent completed the task correctly

## Key Findings

- **Interviewing the user** leads to much better eval acceptance than one-shot generation
- **Eval design is iterative** — first verifier is rarely the final one; run the eval and inspect both the agent trajectory (messages, tool calls, actions) AND the verifier trajectory (evidence, reasoning, final score)
- **Reward hacking** risks: agents may overcite irrelevant sources, claim actions never taken, exploit exposed answer material, or satisfy proxies without completing the task
- When building verifiers, running the eval and observing traces reveals failures in task/environment/verifier design
- **Containerized evals** allow swapping models, tools, prompts, or complete agent versions and comparing results directly; multiple configurations can run in parallel

## The Loop

```
mine traces → identify failure → build eval → improve agent → rerun
```

## Why This Matters

- Evals are **training data for agents** — teams fit agent behavior to them through harness engineering (prompts, tools, fine-tuning)
- Containerized evals provide a **stable target** while agent configuration changes
- Reproducible environments critical for signal — mirrors production tools, data, permissions, state, and failure modes

## Availability

Available in the [`langchain-ai/langchain-skills`](https://github.com/langchain-ai/langchain-skills) repository.
Install the skill in Codex or Claude Code, open the agent repo, point to traces if available, and prompt:

```
Use the eval-engineering skill to create an eval with me. Inspect the agent first, propose a few abilities worth testing, recommend one, and wait for me to choose.
```

## Related

- "The Anatomy of an Agent Harness" (same author, src-2026-06-22-004)
- "Improving Agents is a Data Mining Problem" (Vivek Trivedy, Jul 7, 2026)
