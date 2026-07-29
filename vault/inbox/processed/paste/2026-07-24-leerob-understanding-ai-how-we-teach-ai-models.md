# Understanding AI — How We Teach AI Models

**URL:** https://leerob.com/ai
**Author:** Lee Robinson, Head of AI Education @ Cursor
**Published:** November 2024 (updated 2026)
**X Post:** https://x.com/leerob/status/2080467752897146898 — 42.6K views

## Core Premise

"Humans try hard things, fail, learn, and get better through repetition. AI models aren't as different as you might think."

A comprehensive primer written for engineers new to neural networks, deep learning, and transformers.

## Key Concepts Covered

### Machine Learning
- Software is deterministic (explicit code for each case)
- AI models are probabilistic — trained on patterns from data, not explicit instructions

### Neural Networks
- Built on layers of interconnected neurons: input layer → hidden layers → output layer
- Hidden layers apply weights to input, pass through activation functions (sigmoid, ReLU)
- Output layer produces logits → probabilities (next token prediction)
- "It's just math" — linear algebra, calculus, statistics

### Deep Learning
- Neural networks with many layers (hundreds, not 1-2)
- Enables learning complex patterns across multiple languages, modalities

### Tokenization
- Text → numerical tokens via Byte Pair Encoding (BPE)
- Subword tokenization handles rare words, misspellings, math/code syntax

### Pretraining
- Large-scale next-token prediction on internet data
- Key steps: Forward Pass → Loss Function → Backpropagation → Gradient Descent
- GIGO: garbage in, garbage out — data quality matters
- Scaling laws: more data + compute + parameters → better performance (predictably)
- **2026 update**: pretraining scaling continues working, but test-time compute is the bigger story

### Transformers
- "Attention Is All You Need" (2017) — self-attention mechanism
- Considers entire input sequence at once (vs word-by-word)
- Word embeddings capture semantic relationships (king:queen :: man:woman)

### Fine-tuning
- Adjusting a pretrained model for specific tasks/domains
- Uses smaller, high-quality, human-reviewed datasets
- Domain-specific: coding models fine-tuned on code, docs, standards

### Reinforcement Learning from Human Feedback (RLHF)
1. Model generates multiple candidate responses
2. Humans rank them (accuracy, helpfulness, alignment)
3. Reward model trained to predict response quality
4. Original model fine-tuned via RL guided by reward model
- Effective with hundreds to thousands of high-quality rated examples

### Inference
- Post-training prediction/generation
- Temperature controls randomness vs determinism
- Chain of thought reasoning (now trained directly into models, not just prompted)

### Distillation
- Smaller "student" model trained to mimic larger "teacher" model
- Trade-off: small quality decrease for significant efficiency gain

### Evaluation
- Evals are essential (like tests for code)
- Standardized benchmarks (Terminal-Bench) + custom domain evals

### Example: Building Cursor Composer
1. Start with pretrained coding model (Kimi K2.5)
2. Fine-tune on domain-specific code data
3. RLHF + general RL (automated rewards: does code compile? pass tests?)
4. RL environment must match real product environment (same tools, commands, IDE)
5. Continuous evaluation via automated + internal benchmarks

## Architecture Update (2026)

**Mixture of Experts (MoE)** changes parameter counting:
- Only fraction of total parameters active per token
- Router dispatches each token to relevant expert sub-networks
- Example: 1T total params, 32B active per token — knowledge of large model, speed of small one

## Tags

ai-education, neural-networks, transformer, pretraining, rlhf, fine-tuning, inference, cursor, coding-agent
