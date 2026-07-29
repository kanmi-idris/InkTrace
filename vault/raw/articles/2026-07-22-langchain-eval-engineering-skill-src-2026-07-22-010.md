Source: https://github.com/langchain-ai/langchain-skills/tree/main/config/skills/eval-engineering
Title: LangChain Eval Engineering Skill
Author: LangChain AI (langchain-ai)
Repo: langchain-skills (934★, 79 forks)
Retrieved: 2026-07-22
Source ID: src-2026-07-22-010

---

The official LangChain eval-engineering skill. Iteratively inspect an agent repository, interview the user, and create, run, and audit Harbor evals.

## Workflow

Build evals iteratively:

```
inspect agent and interview user -> propose directions -> user chooses
-> approve runtime and environment -> build, run, audit -> review and repeat
```

## Step 1: Map the Agent

Inspect the active agent and code reachable from its public entrypoint. Find:

- **runtime**: entrypoint, input/output, prompts, models, routing, retries, hooks, middleware, and memory
- **actions**: tools, inputs, outputs, failures, external dependencies, and effects
- **backing data**: documents, records, indexes, files, policies, schemas, and source/version when available
- **state**: identity, permissions, filesystem, network, time, sessions, and mutable state
- **purpose**: intended users, jobs, and what a good result provides
- **evidence**: tests, fixtures, issues, existing evals, and documented failures

Mapping is read-only. Do not start the target or services, install packages, or use external credentials before user approval.

Summarize in conversation:

```
Agent: target and entrypoint
Purpose: users and jobs
Abilities: work it is expected to perform
Tools and data: actions, backing data, and dependencies
Effects: reads, writes, and state changes
Evidence: tests, failures, or traces
```

### Optional Traces

Use traces only when the user provides a source or asks to use them. Reference: trace-sourcing.md. Never treat a recorded target answer as truth.

## Step 2: Discuss and Choose an Eval Direction

Propose 2-3 capabilities grounded in the map. Each includes: Name, Example request, Tests the eval distinguishes, Needs obstacle/data/environment.

Recommend one and ask the user which to build. Do not implement until the user chooses.

## Step 3: Approve Runtime and Environment

Recommend a target runtime:
- **Active entrypoint**: preserve the repository's agent behavior (recommended when it can run safely)
- **Reconstruction**: use only when active entrypoint cannot run in controlled eval

Before implementation, give user one proposal under 150 words: Task, Runtime, Dependencies and backing data (live/frozen/simulated), Success criteria.

User approves or revises. Never write to production; isolate mutations.

## Step 4: Build One Harbor Task

Structure:
```
evals/<task-id>/
├── task.toml
├── instruction.md
├── environment/
└── tests/
```

- Adapter may translate I/O and inject approved dependencies; must not make target decisions or contain answers
- Use LLM judge for semantic success, deterministic checks for execution/parsing/files/state
- Emit one primary reward

## Step 5: Test, Run, and Audit

Start minimum environment before completing scenario. Test verifier with one passing and one failing result. Run through Harbor. Inspect target response, harness-observed actions, verifier evidence/verdict/reason/reward, resolved config. Fix and rerun on issues.

## Step 6: Review with User

Explain: task path and run command, capability/scenario, runtime/dependency boundary, target behavior, verifier decision, limitation. Ask user to approve, revise, drop, or choose next direction.

## Invariants

- One capability per Harbor task under `evals/`
- No production writes; reset mutable state between trials
- Keep hidden truth and judge credentials unavailable to the target
- Treat build, credential, reset, timeout, judge, and verifier failures as infrastructure errors

## References (in skill directory)

- references/harbor.md
- references/task-design.md
- references/environment-building.md
- references/trace-sourcing.md
- references/verifier-design.md

## Repo Context

- langchain-ai/langchain-skills: 934★, 79 forks
- Other skills in the repo (from config/skills/ directory): likely includes other LangChain skills
