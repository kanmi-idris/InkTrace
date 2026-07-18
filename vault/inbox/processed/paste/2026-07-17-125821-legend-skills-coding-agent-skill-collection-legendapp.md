---
title: Legend Skills — coding-agent skill collection (LegendApp)
kind: paste
captured_at: 2026-07-17 12:58
tags: [agent-skills, coding-workflow, legend-list, legend-state, react-native, performance, diagnose, git, mit]
source_url: https://github.com/LegendApp/legend-skills
status: inbox
---

# Legend Skills — coding-agent skill collection (LegendApp)

# Legend Skills (LegendApp/legend-skills)

A collection of focused coding-agent skills from the Legend App team (creators of Legend List and Legend State). MIT licensed, 7 stars, 45 commits, Shell-based skill definitions. Repo: github.com/LegendApp/legend-skills.

Install: `npx skills add LegendApp/legend-skills` (all), or `-g` global, or `--skill <name>` for selected. `--list` to preview without installing.

## Two groups
1. **Legend library skills** — for building fast, correct apps with Legend List and Legend State.
2. **General development skills** — evidence-first debugging, complete fix loops, safe Git changes, minimal implementation, high-performance React/RN apps.

## The 9 skills
| Skill | What it does |
|-------|--------------|
| `commit` | Inspects whole working tree for context but commits ONLY the current agent's changes in the current task. Groups into clean, reviewable/revertible commits following repo conventions. |
| `commit-confirm` | `commit` in approval-first mode, defaults to whole working tree: proposes groups/messages/files, waits for explicit approval. Requires `commit`. |
| `diagnose` | Evidence-first loop to prove root cause with 100% operational confidence: (1) find likely areas, (2) instrument with logging, (3) reproduce (auto if safe/deterministic, else give user exact repro step), (4) collect + analyze logs, (5) if not fully confident, repeat. For unclear/intermittent/platform-specific/performance bugs. |
| `diagnose-fix-loop` | Iterative: diagnose top opportunities → implement top fix → verify → repeat until no evidence-backed improvement remains. Requires `diagnose`. |
| `git-integrate` | Safely start/continue rebase, merge, cherry-pick, revert through verified completion. Active Git operation always takes priority; stops only when next action/resolution unclear. Not a general Git runner. |
| `legend-list-best-practices` | Build/audit/tune `@legendapp/list` + `LegendList`: data identity + invalidation, row rendering, recycling safety, measurement, chat/scroll behavior. Prevents blanking, stale rows, state leakage, needless re-renders. Applies automatically on Legend List usage. |
| `legend-state-best-practices` | Audit/fix `@legendapp/state` in React/RN/TS: observable ownership, narrow reactive boundaries, field-level subscriptions, persistence, settings stores. Applies automatically on Legend State usage. |
| `react-coding-style` | Guide React/RN/TS to render less, less often. Reduce render work without trading correctness or adding unused memoization. |
| `simplify` | Keep code/tests/docs/config tight, clear, minimal — minimize concepts + moving parts, not line count. Prefers existing ownership over speculative abstraction. Runs during construction, after a behavior slice, and before handoff/merge. |

## Dependency notes (selected installs don't auto-resolve)
- `commit-confirm` requires `commit`.
- `diagnose-fix-loop` requires `diagnose`.

## Positioning
Fits the "agent skills for coding workflow" cluster in the vault: complements Taste Skill (src-2026-06-21-008 / src-2026-07-13-004) and Emil Kowalski / Jakub Krehel design skills (src-2026-07-13-005/006), BuilderIO skills (src-2026-06-28-002), softaworks agent-toolkit (src-2026-06-22-003), and the agent-harness engineering resources (LangChain src-2026-06-22-004, eyad_khrais src-2026-06-24-002, walking-labs src-2026-06-21-009). Also relevant to our React Native performance sources (react-native-optimization guide, Margelo profiling src-2026-06-28-006, Calazans animation benchmark src-2026-07-17-007) — `react-coding-style` + `legend-list-best-practices` directly target RN perf.
