---
title: BuilderIO/skills — Composable Skills for Coding Agents
kind: paste
captured_at: 2026-06-28 03:34
tags: [agent-skills, coding-agents, claude-code, codex, builder-io, visual-plan, agent-native]
source_url: 
status: inbox
---

# BuilderIO/skills — Composable Skills for Coding Agents

BuilderIO/skills — Small, composable skills for coding agents (2.8k stars, MIT license). Built by BuilderIO (agent-native.com). 67 commits on main.

These skills are for teams that want the agent to stay sharp where judgment matters: orchestration, review, planning, validation, docs discipline, and clear communication. Not a giant process framework — install the pieces you want, adapt them to your project.

Install: npx @agent-native/skills@latest add (interactive picker, preselects /visual-plan and /visual-recap). Also installable as a Claude Code plugin marketplace.

Skills catalog:

1. /visual-plan — Turn text plans into rich interactive visual plans with diagrams, file maps, annotated code, open questions, UI/prototype review. Output is MDX, customizable with own components, viewed with Agent-Native plans app.

2. /visual-recap — Turn a branch, commit, or PR diff into an interactive visual recap with annotated diffs, diagrams, API/schema summaries, file maps, UI state summaries, focused review notes. Also available as a GitHub Action for automatic PR generation.

3. /agent-watchdog — Audit another agent's work from Codex session, Claude Code transcript, PR, branch, or run summary. For cross-agent handoffs.

4. /plan-arbiter — Compare competing agent plans and choose one executable direction. Output is a decision memo with winning/hybrid plan, rejected alternatives, verification gates, executor recommendation.

5. /plow-ahead — Keep working through ordinary ambiguity and finish with a clear decision recap. Converts routine questions into assumptions, proceeds with conservative choices, validates, and recaps.

6. /efficient-fable — Use Claude Fable as orchestrator/architect/synthesizer/final judge while lighter agents handle token-heavy research, coding, testing, log reduction. Prevents expensive-model waste.

7. /efficient-frontier — Same orchestration pattern as efficient-fable for any high-cost frontier model. Preserve expensive model for planning/tradeoffs/integration/validation; use cheaper agents for bounded heavy lifting.

8. /stay-within-limits — Check current 5-hour and weekly usage before substantial work and between parallel waves, pause new execution at 95% until active window is clear. Prevents exhausting budget mid-task.

9. /quick-recap — Add a concise final status block convention so every completed response ends with a green/yellow/red work-state signal. Done / Pending non-routine step / Blocked on user.

10. /read-the-damn-docs — Make agents web-search for authoritative docs before they guess from stale model memory. For version drift, API folklore, package installs, framework config, SDK imports, provider limits, auth, security, billing, data, migrations, deploys.

CLI: npx @agent-native/skills@latest add (recommended installer with managed AGENTS.md/CLAUDE.md blocks, PR Visual Recap GitHub Action support). Fallback: npx skills@latest add BuilderIO/skills --skill <name> (Vercel skills CLI, no instruction blocks).

Also installable as Claude Code plugin marketplace: /plugin marketplace add BuilderIO/skills then /plugin install builder-skills@builder-skills. Skills namespaced under plugin (e.g. /builder-skills:quick-recap).

Written in JavaScript. No releases published.
