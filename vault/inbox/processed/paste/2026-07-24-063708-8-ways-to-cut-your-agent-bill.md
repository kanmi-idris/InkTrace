---
title: 8 ways to cut your agent bill
kind: paste
captured_at: 2026-07-24 06:37
tags: []
source_url: 
status: inbox
---

# 8 ways to cut your agent bill

8 ways to cut your agent bill:

1) Prompt caching — system prompt and tool schemas never change between calls. Use the moment you have more than one turn.

2) Model routing — send classification, extraction and formatting to a small model, keep the frontier one for the hard step. Use when most of your calls are not the call that actually needs the intelligence.

3) Skip the model entirely — parsing a date, checking a regex, sorting a list. Code does this for free and never hallucinates. Use every time you catch yourself asking a model to do arithmetic.

4) Early exit — stop the loop when the check passes instead of running to the turn cap out of habit. Use when your loop has a real success condition.

5) Retry budget — two attempts, then hand it to a human. The third try rarely differs from the second. Use when a failing run can quietly retry all night.

6) Tool result cache — the same file read twice in one run returns the same bytes, and you paid for both. Use when your agent walks the same repo or hits the same endpoint repeatedly.

7) Batch what is patient — nothing running overnight needs to be instant. Queue it and send it as one job. Use for backfills, evals, and anything nobody is waiting on.

8) Cap the output — ask for json, not prose. Output tokens cost more than input tokens and prose is mostly filler. Use anywhere the answer is consumed by code rather than read by a person.

The cheapest token is the one you never send. The second cheapest is the one you send once. Most bills are not one expensive call, they are the same cheap call ten thousand times.
