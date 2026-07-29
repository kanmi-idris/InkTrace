---
title: DeepMind agent teams research
kind: paste
captured_at: 2026-07-24 06:36
tags: []
source_url: 
status: inbox
---

# DeepMind agent teams research

Google DeepMind researchers built 180 different agent team setups, gave every single one the same budget, and let them compete on the same tasks.

Key findings:
1. On work that splits into independent pieces (research, audits, broad scans), teams won clearly — 80.9% better than a single agent
2. On step-by-step work where each move depends on the last one, every single team version lost to one agent working alone
3. Agents working without a coordinator amplified each other's mistakes 17.2x — one wrong finding spreads through the team like it was verified; with one coordinator owning the merge it barely spreads at all

Takeaways:
- More agents is not a strategy — the shape of the work decides everything
- Ask: does my work split into pieces that never read each other's results?
- If every step needs the full picture, one agent wins
- Never let findings merge without one owner of the merge — uncoordinated teams are error amplifiers

Paper: https://arxiv.org/abs/2512.08296
