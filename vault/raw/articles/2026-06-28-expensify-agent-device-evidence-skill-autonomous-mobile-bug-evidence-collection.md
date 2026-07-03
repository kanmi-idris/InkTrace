---
title: Expensify agent-device-evidence Skill — Autonomous Mobile Bug Evidence Collection
kind: paste
captured_at: 2026-06-28 06:08
tags: [expensify, agent-device, skill, mobile-testing, qa, react-native]
source_url: https://github.com/Expensify/App/blob/main/.claude/skills/agent-device-evidence/SKILL.md
status: inbox
---

# Expensify agent-device-evidence Skill — Autonomous Mobile Bug Evidence Collection

Expensify's agent-device-evidence skill (SKILL.md) — an autonomous, non-interactive skill that records iOS/Android native MP4 evidence for test/repro flows extracted from an Expensify GitHub PR or issue.

Architecture:
- Specializes the agent-device parent skill. Delegates device lifecycle (bundle ID, Metro, device pick, session, open) to parent's bring-up.
- HybridApp-only (standalone builds out of scope).
- Inputs: GitHub PR or issue URL (first positional arg). Optional --platforms flag, -e step-param overrides.
- Triage gates (run in order before device work):
  1. Detect source kind (PR vs issue) from URL
  2. Fetch source body via gh CLI (title, body, labels)
  3. Platform resolution: --platforms arg > PR prose markers > issue checkbox list > default both ios/android
  4. Steps parsing from PR ### Tests or ## Action Performed: blocks

Capture loop (per flow per platform):
- Setup: agent-device bring-up → resolve bundle ID, start Metro, pick/confirm device, manage session, open app. Always reset sessions (cold start).
- Phase 1 (Warm-up): Drives steps autonomously from cold start. For each step, sends step text to agent-device LLM driver, records successful actions into .ad script (excluding retries/dead ends). Saves snapshots as candidate stills. Caches .ad scripts keyed by sha256(precondition + json(steps) + platform).
- Phase 2 (Recording): Opens app fresh, replays setup silently, then records MP4 of test-flow portion only (no snapshots, no retries). Android capped at 3min per flow (adb screenrecord limit). Outputs per-flow MP4s + manifest.

Phase 1 cache: ~/.cache/agent-device-evidence/.ad-cache/<fingerprint>.ad. Hit → skip Phase 2 warm-up. Miss → run Phase 1, write to cache on success.

Output layout:
~/.cache/agent-device-evidence/
  .ad-cache/<fingerprint>.ad + .meta.json
  <source-kind>-<source-num>/<run-ts>/
    manifest.json
    ios/flow-1.mp4 + per-step stills
    android/flow-2.png (still-only flows)

Exit codes: 0 (all artifacts), 3 (NO_FLOWS), 4 (PLATFORM_UNSUPPORTED), 5 (PHASE1_TOTAL_FAILURE), 6 (PHASE2_TOTAL_FAILURE), 7 (BRING_UP_FAILED), 8 (BAD_INPUT).

Cost guards: 5min per flow Phase 1 timeout, 3min per flow Phase 2 timeout, max 50 driver actions per flow.

Multi-flow chunking: Multiple flows in one PR share a single Phase 2 session, with record start/stop per flow. Flows with requires_cold_start: true get separate sessions.

Out of scope: mobile web/desktop (delegate to playwright-app-testing), standalone builds, device lifecycle (delegated to parent), editing PR bodies, interactive prompts, test data cleanup.
