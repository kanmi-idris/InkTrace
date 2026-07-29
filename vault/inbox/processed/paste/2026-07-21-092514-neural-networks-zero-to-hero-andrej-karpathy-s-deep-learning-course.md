---
title: Neural Networks: Zero to Hero — Andrej Karpathy's Deep Learning Course
kind: paste
captured_at: 2026-07-21 09:25
tags: [deep-learning, neural-networks, backpropagation, gpt, transformer, tokenizer, pytorch, education, course]
source_url: 
status: inbox
---

# Neural Networks: Zero to Hero — Andrej Karpathy's Deep Learning Course

# Neural Networks: Zero to Hero — Andrej Karpathy's Course

**URL**: karpathy.ai/zero-to-hero.html
**Platform**: YouTube (@AndrejKarpathy)
**Discord**: discord.gg/3zy8kqD9Cp
**Prerequisites**: Python, intro-level math (derivatives, Gaussian)

Full course building neural networks from scratch in code. Language model focused — concepts transfer to computer vision.

## Syllabus (total ≈ 12h)

### micrograd (2h25m)
Spelled-out intro to neural networks and backpropagation. Builds micrograd — scalar autograd engine.

### makemore Part 1 — Bigram (1h57m)
Bigram character-level language model. Introduces torch.Tensor, model training, sampling, loss evaluation (NLL).

### makemore Part 2 — MLP (1h15m)
Multilayer perceptron character language model. ML basics: learning rates, hyperparameters, train/dev/test splits, under/overfitting.

### makemore Part 3 — Activations, Gradients, BatchNorm (1h55m)
Forward/backward pass statistics, diagnostic tools, Batch Normalization. Why deep nets are fragile.

### makemore Part 4 — Backprop Ninja (1h55m)
Manual backpropagation through a 2-layer MLP without autograd. Cross-entropy → linear → tanh → batchnorm → linear → embedding.

### makemore Part 5 — WaveNet (56m)
Deeper tree-like architecture → convolutional neural network (WaveNet-style). torch.nn internals, tensor shape tracking.

### Let's Build GPT (1h56m)
Builds a GPT from scratch following "Attention is All You Need" and GPT-2/3. Connections to ChatGPT.

### GPT Tokenizer (2h13m)
Builds the GPT tokenizer (Byte Pair Encoding) from scratch. encode()/decode(). LLM weird behaviors traced to tokenization.

### Ongoing...
More content being added.

**Relevance**: Definitive practical deep learning course. Directly covers LLM internals, backpropagation, transformer architecture, tokenization. Foundation for understanding the models behind agents and LLMs referenced throughout InkTrace.
