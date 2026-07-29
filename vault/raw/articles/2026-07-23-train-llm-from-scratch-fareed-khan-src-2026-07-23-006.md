---
source_id: src-2026-07-23-006
captured_at: 2026-07-23T05:49:00Z
url: "https://github.com/FareedKhan-dev/train-llm-from-scratch"
status: complete
---

# train-llm-from-scratch

**Author:** Fareed Khan (@FareedKhan-dev)
**License:** MIT
**Stars:** 8,500 | **Forks:** 1,200
**Language:** Python

"A straightforward method for training your LLM, from downloading data to generating text."

## Pipeline

raw text → tokens → Transformer → next-token loss → base model → SFT → Reward Model → {PPO, DPO} → GRPO → evaluation and chat

## Setup

```bash
git clone https://github.com/FareedKhan-dev/train-llm-from-scratch.git
cd train-llm-from-scratch
pip install -e .
pip install -e ".[train]"   # datasets + wandb
pip install -e ".[ui]"      # streamlit control panel
pip install -e ".[docs]"    # mkdocs site
pip install -e ".[all]"     # everything
```

## Code Structure

```
train-llm-from-scratch/
├── src/
│   ├── models/                  # Transformer built from small pieces
│   │   ├── mlp.py               # feed-forward block
│   │   ├── attention.py         # single head + multi head attention
│   │   ├── transformer_block.py # attention + MLP + residuals
│   │   └── transformer.py       # full model
│   └── post_training/           # SFT, reward, PPO, DPO, GRPO, eval
├── config/                      # config.py + post_training_config.py + loader
├── configs/                     # JSON per stage (+ smoke/)
├── data_loader/                 # batch iterators
├── scripts/                     # runnable steps
├── ui/                          # Streamlit control panel
├── docs/                        # MkDocs site
└── images/                      # diagrams
```

## Model Sizes

| Config | Params |
|--------|--------|
| Small (n_embed=128, n_head=8, n_blocks=1) | 13,142,656 |
| Tutorial base (n_embed=512, n_head=8, n_blocks=8) | 77,031,552 |
| Post-training default (n_embed=1024, n_head=16, n_blocks=24) | 406,359,168 |

## Training Pipeline

### 1. Data Preparation

Four data streams:
- **Pretraining:** The Pile, tokenized → HDF5 flat array
- **SFT:** Alpaca + Dolly + GSM8K → packed with loss mask
- **Preference:** HH-RLHF + UltraFeedback → {prompt, chosen, rejected}
- **RL prompts:** GSM8K + arithmetic → {prompt, gold}

Tokenizer: r50k_base (tiktoken, same as GPT-3). Single special token `<|endoftext|>` (id 50256).

Chat format with loss mask — only assistant tokens are trained:
```
<|user|>{content}<|endoftext|><|assistant|>{content}<|endoftext|>
```

Math/reasoning format with `<think>` and `<answer>` tags for verifier reward.

### 2. Transformer Architecture

- **MLP:** Linear(4x) → ReLU → Linear(1x) — per-token "thinking"
- **Single Head Attention:** Q/K/V projections → scaled dot-product → causal mask → weighted sum
- **Multi-Head Attention:** n_head parallel heads → concat → proj
- **Block:** Pre-norm LN → attention → residual → Pre-norm LN → MLP → residual
- **Full Transformer:** token embed + position embed → N blocks → final LN → lm_head

Key detail: `.reshape()` not `.view()` on targets (non-contiguous slice on CPU).

### 3. Pretraining

```bash
# Legacy
python scripts/train_transformer.py
python scripts/train_transformer.py --amp --grad-checkpointing --grad-accum 8
# Modern (DDP)
python scripts/pretrain_base.py
torchrun --standalone --nproc_per_node=2 scripts/pretrain_base.py
```

Memory opts: `--amp`, `--grad-checkpointing`, `--grad-accum N`.

Example training log (77M on 2x L40):
```
step 0    | loss 11.1393 | lr 7.50e-06 | 0 tok/s
step 100  | loss 6.3108  | lr 6.00e-04 | 150,609 tok/s
step 500  | loss 4.5317  | lr 5.39e-04 | 137,334 tok/s
step 1900 | loss 3.7725  | lr 6.36e-05 | 151,488 tok/s
eval: train 3.7345 | dev 3.7607
```

### 4. Post-Training

**SFT:** `scripts/train_sft.py` — next-token prediction masked to assistant tokens only.

**Reward Model:** `scripts/train_reward.py` — Bradley-Terry loss on preference pairs. ~0.574 accuracy.

**DPO/ORPO/KTO:** `scripts/train_dpo.py --loss_type dpo|orpo|kto`. DPO: compare policy vs reference log-probabilities on chosen/rejected pairs. ORPO: reference-free, folds SFT + alignment. KTO: unpaired desirable/undesirable signal.

**PPO:** `scripts/train_ppo.py --reward_source verifier|rm`. GAE advantage, clipped policy + value loss, shared backbone via small value head.

**GRPO/RLVR:** `scripts/train_grpo.py --group_size 8`. Group-relative advantage (no critic), k3 KL penalty, verifiable reward. Arithmetic warm-up → GSM8K.

### 5. Evaluation

Greedy GSM8K accuracy across all stages:

```bash
for s in base_pretrained sft dpo ppo grpo; do
  python scripts/eval_post_training.py --ckpt models/$s.pt --label $s --limit 200
done
```

## Key Design Choices

- **Wrap, don't rewrite:** All post-training composes around `forward_hidden()`.
- **Config merging:** defaults < base.json < stage.json < CLI overrides.
- **Loss mask:** chat format masks out user tokens from cross-entropy.
- **Causal mask:** triangular matrix prevents peeking ahead.
- **Smoke configs:** fast CPU tests for every stage.
