Source: https://arxiv.org/abs/2601.18089
Title: LatentMoE: Toward Optimal Accuracy per FLOP and Parameter in Mixture of Experts
Authors: Venmugil Elango, Nidhi Bhatia, Roger Waleffe, Rasoul Shafipour, Tomer Asida, Abhinav Khattar, Nave Assaf, Maximilian Golub, Joey Guman, Tiyasa Mitra, Ritchie Zhao, Ritika Borkar, Ran Zilberstein, Mostofa Patwary, Mohammad Shoeybi, Bita Rouhani (NVIDIA)
Retrieved: 2026-07-21
License: CC-BY 4.0
Submitted: 26 Jan 2026

---

NVIDIA paper introducing LatentMoE, a new MoE architecture optimized for accuracy per FLOP and per parameter via hardware-software co-design.

## Core Idea
Project input tokens from hidden dimension d into a lower-dimensional latent space ℓ before expert routing and computation. This reduces memory bandwidth costs (weight loading) and all-to-all communication volume by factor α = d/ℓ, while enabling proportional increases in expert count N and active top-k K at iso-inference-cost.

## Two Variants
- **ℓ-MoE_eff**: Matches baseline accuracy, reduces inference cost (fewer active params, less communication)
- **ℓ-MoE_acc** (recommended): Maintains iso-inference-cost, improves accuracy via increased expert diversity and combinatorial sparsity

## Key Results
- **Ablations (16BT-2BA)**: α=4 compression optimal. ℓ-MoE_acc achieves lower validation loss than baseline.
- **Scaling (95BT-8BA, 300B tokens)**: ℓ-MoE_acc improves over baseline: MMLU Pro 34.91 vs 29.26, MMLU 62.23 vs 58.95, Code 41.50 vs 40.33, Math 64.88 vs 64.39, Commonsense 75.18 vs 74.32. ℓ-MoE_eff matches or slightly exceeds baseline with only 5.62B active params (vs 8.47B).
- **Hybrid Mamba-Attention MoE (73BT-8BA, 1T tokens)**: ℓ-MoE_acc: MMLU Pro 52.87 vs 48.30, MMLU 72.11 vs 70.10, Code 55.14 vs 51.95, Math 80.19 vs 78.32, Commonsense 82.10 vs 81.73.
- **Effective Parameter Multiplier (EPM)**: ~1.35× for Kimi-K2-1T-LatentMoE. Accuracy-matched baseline requires ~350B more parameters.
- **Projected serving speedup**: 1.24×–3.46× over iso-accuracy standard MoE at trillion-parameter scale.
- **Inference performance**: ℓ-MoE_acc within ~6% throughput of standard MoE (measured on 2× H100, vLLM FP8).
- Down-projection overhead is modest (<~9%).

## Five Design Principles
1. Memory bandwidth is dominant bottleneck in low-latency serving (maximize accuracy per parameter).
2. All-to-all communication is dominant in throughput settings (minimize routed hidden dim d or active K).
3. Preserve effective nonlinear budget K·m (don't reduce active experts or intermediate dim).
4. Task-specific feature rank r_eff imposes lower bound on d.
5. Scaling N and K exponentially increases expert combination diversity.

## Architecture Details
- Down-projection: W↓ ∈ ℝ^{ℓ×d}
- Up-projection: W↑ ∈ ℝ^{d×ℓ}
- Expert weights: W_FC1, W_gate ∈ ℝ^{m×ℓ}, W_FC2 ∈ ℝ^{ℓ×m}
- Shared experts operate in original dimension d
- Routing weights computed from original token x ∈ ℝ^d
- Default ℓ=512 for 2B active, ℓ=1024 for 8B active (both α=4)

## Adoption
Architecture adopted by flagship **Nemotron-3 Super and Ultra** models (Nvidia et al., arXiv:2512.20856).

## Related Work Comparison
- Contrasted with **MoLAE** (post-training low-rank compression): LatentMoE couples compression with increased expert count/expressivity; MoLAE forfeits communication savings and limits memory bandwidth reduction.
- Orthogonal to pruning, quantization, and mHC (Manifold-Constrained Hyper-Connections).
