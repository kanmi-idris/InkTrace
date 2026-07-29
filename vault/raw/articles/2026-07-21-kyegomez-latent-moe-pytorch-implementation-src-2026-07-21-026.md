Source: https://github.com/kyegomez/Latent-MoE
Title: Latent-MoE — PyTorch Implementation of NVIDIA's LatentMoE
Author: kyegomez
Retrieved: 2026-07-21
Stars: 7 | License: Apache-2.0

---

Single-file, dependency-light PyTorch implementation of LatentMoE (Elango et al., NVIDIA 2026). Drop-in replacement for a standard MoE FFN layer.

## Architecture
- Projects tokens from hidden dim `d` to latent dim `l = d / alpha` via shared down-projection
- Runs routed experts inside latent space (reduces all-to-all comm and weight-loading memory by factor `alpha`)
- Projects back up to `d`
- Router and shared experts operate in original `d` (not the bottleneck)

## Two Variants
- `"eff"` — keep top-k `K` fixed → match baseline accuracy at lower cost
- `"acc"` — scale `K' = alpha * K` → match baseline cost, improve accuracy

## Install
```bash
pip install latent-moe
```

## Usage
```python
from latent_moe import LatentMoE, LatentMoEConfig

config = LatentMoEConfig(
    d=2048, m=1408, n_experts=64,
    top_k=6, alpha=4, n_shared=2, variant="acc",
)
layer = LatentMoE(config)
y = layer(x)  # (batch, seq, d)
```

Exposes `layer.cost_summary()` for Table 1 asymptotic costs from the paper.
