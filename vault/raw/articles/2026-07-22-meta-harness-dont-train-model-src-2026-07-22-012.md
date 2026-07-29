Source: https://huggingface.co/spaces/joelniklaus/harness-optimization
Title: Don't Train the Model, Evolve the Harness
Author: Joel Niklaus (Hugging Face ML Engineer)
Based on: Meta-Harness paper (Yoonho Lee, Roshen Nair, Qizheng Zhang, Kangwook Lee, Omar Khattab, Chelsea Finn)
Retrieved: 2026-07-22
Source ID: src-2026-07-22-012

---

"Don't Train the Model, Evolve the Harness" — interactive HF Space by Joel Niklaus demonstrating Meta-Harness on Harvey's Legal Agent Benchmark (LAB).

## Core Experiment

- **Model**: DeepSeek-V4-Pro, weights frozen throughout, no fine-tuning
- **Variable**: Only the Agent Harness (the framework layer handling tool calling, memory, reasoning flow orchestration)
- **Benchmark**: Harvey's Legal Agent Benchmark (LAB) — 100 held-out test tasks

## Key Results

| Metric | Value |
|--------|-------|
| Score range across 5 harnesses | 3.5% ~ 80.1% |
| Gap | 76 points |
| Best harness score after optimization | 80.1% |
| Comparison model | Claude Sonnet 4.6 (same score) |
| Operating cost | 1/7 of original |
| Auto-iteration rounds | ~22 |
| Pooled score improvement | 63.4% → 80.1% (+16.7pp) |
| All-pass rate improvement | 0% → 5.0% |
| Migration to DeepSeek-V4-Flash | +14.4 points |

## Meta-Harness Paper (arXiv 2603.28052)

### Key Difference from Prior Methods
Meta-Harness gives the proposer a filesystem with full source code, scores, and execution traces of every prior candidate — up to 10M tokens per step vs ≤26K for all prior methods (Self-Refine, OPRO, TextGrad, MIPRO, AlphaEvolve, GEPA, Feedback Descent, TTT-Discover).

### Results

**Text Classification** (GPT-OSS-120B):
- Best discovered harness: 48.6% vs ACE's 40.9% (+7.7 points, 4× fewer tokens)
- LawBench (215 classes): +16 points
- 10× fewer evaluations than OpenEvolve/TTT-Discover to match accuracy

**Math Reasoning** (200 IMO-level problems):
- +4.7 points average across 5 held-out models (GPT-5.4n, GPT-5.4m, Gem-3.1FL, Gem-3F, GPT-20B)
- 34.1% → 38.8% average

**Agentic Coding (TerminalBench-2)**:
- Claude Haiku 4.5: 37.6% — #1 among all Haiku 4.5 agents (next best: Goose 35.5%)
- Claude Opus 4.6: 76.4% — #2 among all Opus 4.6 agents (best: ForgeCode 81.8%)
- Surpasses Terminus-KIRA (74.7%) and Terminus 2 (62.9%)

### Repositories
- Meta-Harness framework: github.com/stanford-iris-lab/meta-harness
- Joel Niklaus fork/demo: github.com/JoelNiklaus/harness-optimization (40★, MIT)
- TB2 artifact: github.com/stanford-iris-lab/meta-harness-tbench2-artifact

## Related: Karpathy's Loop Engineering

Andrej Karpathy's AutoResearch project ran 700 automatic iterations, identifying 20 code improvements overlooked by humans. Shopify CEO tested overnight → 19% quality improvement with half model size. Core: 5-step loop (propose → train → evaluate → retain good → refine bad).

## Harness Portability

Optimized harness migrated from DeepSeek-V4-Pro to V4-Flash (smaller, cheaper) still delivers +14.4 points. Harness optimization is easier to codify and transfer across models than prompt tuning.
