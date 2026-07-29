---
title: 10 agent evals for AI engineers
kind: paste
captured_at: 2026-07-24 06:36
tags: []
source_url: 
status: inbox
---

# 10 agent evals for AI engineers

10 agent evals for AI engineers:

1) golden set → a fixed set of cases you never edit, run on every single change. Use as the baseline that tells you whether anything moved at all.

2) llm as judge → a second model scores the output against a written rubric. Use when the answer is open-ended and there is no string to match against.

3) rubric scoring → one number per dimension: correctness, tone, safety, cost. Use when a single score hides which part actually got worse.

4) trajectory eval → grade the path the agent took, not only the answer it landed on. Use when the right answer for the wrong reason is going to bite you later.

5) tool unit tests → test each tool on its own, with fixtures, no model in the loop. Use always. Most agent bugs are tool bugs wearing a costume.

6) regression suite → replay past runs against the new prompt or model and diff the results. Use before every prompt change, because prompts have no type system.

7) a/b in prod → split live traffic between two versions and compare outcomes, not vibes. Use when offline scores stopped predicting what users actually do.

8) human review → sample a slice of runs and have a person grade them honestly. Use to calibrate your judge, because a judge nobody checks quietly drifts.

9) shadow run → the candidate runs on real traffic in parallel and its output is shown to nobody. Use before a risky rollout, when one bad answer would be expensive.

10) red team → deliberately attack it: jailbreaks, injection, exfil, tool abuse. Use before anyone external can reach it, not after.

Offline evals tell you it works. Online evals tell you it still works. Both sides matter, but not all ten do. Run the two that would have caught your last outage.
