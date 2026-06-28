---
title: Aside Browser Agent — SOTA Benchmark Results (Online-Mind2Web 99.0%)
kind: paste
captured_at: 2026-06-28 03:42
tags: [browser-agent, web-agent, benchmark, mind2web, odysseys, bu-bench, browser-automation, aside]
source_url: 
status: inbox
---

# Aside Browser Agent — SOTA Benchmark Results (Online-Mind2Web 99.0%)

Aside benchmarks (at-inc/aside-benchmarks) — Benchmark results for the Aside browser agent (asidehq.com). Evaluated on three open-web browser-agent benchmarks: Online-Mind2Web, Odysseys, and BU Bench V1. 29 stars, 2 forks, 3 commits, MIT license. TypeScript 100%.

Online-Mind2Web (136 websites, 300 tasks):
- gpt-5.5 / openai-codex: 297/300 passed (99.0%), 2 failed, 1 impossible
- Excluding impossible: 297/299 = 99.3%
- By difficulty: easy 80/80 (100%), medium 142/143 (99.3%), hard 75/77 (97.4%)
- Config: high thinking, fast mode, concurrency 3-6, 900s timeout, gpt-5.4 grader
- 3 not completed: 1 impossible (Dillard's eGift Card no longer offers "Merry Christmas" design), 2 genuine failures (Mac Studio M4 Max not in stock, QLED monitor search)

Odysseys (200 long-horizon live-web tasks, rubric-graded):
- 200/200 tasks evaluated
- Perfect tasks: 151/200 (75.5%)
- Rubric items passed: 1,050/1,182 (88.8%)
- Task-average rubric score: 86.5%
- Errors: 0
- Model: gpt-5.5 / openai-codex, high thinking, fast mode, gemini-3.1-flash-lite grader, 200-step max trajectory
- By difficulty: easy 84.4% perfect (93.9% rubric), medium 87.0% (96.5%), hard 67.0% (84.6%)

BU Bench V1 (100 hand-selected browser automation tasks from WebBenchREAD, OM2W2, InteractionTests, GAIA, BrowseComp):
- Run 1 (gpt-5.5): 93/100 pass (93.0%), 6 fail, 1 impossible — 93.9% excl. impossible
- Run 2 (kimi-k2.6): 88/100 pass (88.0%), 12 fail, 0 impossible — 88.0%
- Both: high thinking, fast mode, concurrency 6
- gpt-5.5 passed all WebBenchREAD and OM2W2; most failures in GAIA and BrowseComp

SOTA benchmark results. Blog: aside.com/blog/how-we-built-the-sota-browser-agent-that-outperforms-fable
