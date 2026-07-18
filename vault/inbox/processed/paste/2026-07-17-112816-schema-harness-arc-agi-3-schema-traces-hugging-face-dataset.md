---
title: schema-harness/arc-agi-3-schema-traces (Hugging Face dataset)
kind: paste
captured_at: 2026-07-17 11:28
tags: [arc-agi-3, agent-harness, dataset, hugging-face, benchmark, claude, codex, gpt-5.6]
source_url: https://huggingface.co/datasets/schema-harness/arc-agi-3-schema-traces
status: inbox
---

# schema-harness/arc-agi-3-schema-traces (Hugging Face dataset)

Hugging Face dataset: schema-harness/arc-agi-3-schema-traces

- Modalities: Tabular, Text
- Formats: csv
- Size: < 1K (50 rows, test split)
- Libraries: Datasets, Dask, Polars

Schema (columns):
- task (string, length 4) — e.g. ar25, bp35, cd82, ... (4-char task IDs)
- provider (string, 2 values) — claude | codex-cli
- model (string, 3 values) — claude-opus-4-8, claude-fable-5, gpt-5.6-sol
- effort (string, 2 values) — max | xhigh
- port (float64, null)
- status (string, 2 values) — win | stopped
- win_levels (int64)
- rhae (float64, 60.9–100) — likely "reward / health / accuracy equivalent" score
- level0..level9 (int64/float64) — per-level step or score counts (some null)
- workdir (string, length 36–46) — e.g. ~/agent-dataset/claude-opus-4-8_max_ar25_100.0

Observed results:
- Two providers benchmarked: Claude (claude-opus-4-8, claude-fable-5) and Codex CLI (gpt-5.6-sol).
- Effort levels: max and xhigh.
- Most runs "win" with rhae ~100; some partial: bp35 (gpt-5.6-sol max) = 60.93 win; ka59 (xhigh) = 65.34 stopped; sk48 (max) = 87.8 win; sc25 (max) = 82.72 win; tn36 (max) = 94.74 win; s5i5 (claude-opus) = 89.87 win.
- Same task ID (e.g. ar25, bp35) appears under both providers, implying a controlled cross-model comparison harness on the same ARC-AGI-3 tasks.

Interpretation: "schema-traces" = per-task, per-model rollout traces from an agent harness solving ARC-AGI-3, recording which levels were cleared, final status, and a composite score (rhae). The "schema" framing suggests the agent must learn/emit a schema of the world (state grounding + mechanism discovery) — matching Haven Feng's description of ARC-AGI-3.
