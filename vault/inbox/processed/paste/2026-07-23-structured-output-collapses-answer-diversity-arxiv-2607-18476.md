# Structured Output Collapses Answer Diversity Across 44 Language Models (arXiv 2607.18476)

**URL:** https://arxiv.org/abs/2607.18476
**Authors:** Tapan Parikh, Cornell
**Submitted:** Jul 20, 2026

## Core Question

Teams treat structured output as a formatting choice with no effect on content. This paper tests that assumption across 44 models and finds the format itself reshapes the answers.

## Method

Re-runs the One-Word Census (arXiv:2607.12796): 31 wide-answer-space category prompts asked of 44 models, with the reply requested in JSON — no schema enforcement, no constrained decoding, only the request.

## Key Results

### Convergence deepens sharply
- **"Pick a word" prompt**: modal answer rises from 41% to 64% of responses
- Distinct answers fall from 52 to 36
- Mean answer-choice surprisal drops from 1.80 to 1.58 bits

### The tax is progressive
- Six of 44 models move individually (BH-FDR q=.10), all toward the mode
- Led by the most distinctive models — the conformist floor is immobile
- It is a sharpener, not a re-indexer — the plain-chat modal answer survives in 28 of 31 categories

### Defaults are register-indexed
- Within-run re-sample (n=20): JSON shifts 53% of a model's stable chat defaults, mostly back to the crowd
- Installs defaults absent from chat (e.g., Claude Fable 5 answers "cerulean" for colour 0% in chat, 100% in JSON)

### Register Gradient
- Compression is significant and specific to answer-delivery formats models are trained to speak:
  - JSON: -0.22 bits (p=.0002)
  - XML: -0.19 bits (p=.002)
  - YAML: absent
  - CSV: absent
  - Arbitrary bracket wrapper: reversed (+0.13 bits, p=.009)
- Mechanism points toward tool-use post-training

### Decoder Enforcement
- Enforcing schema at the decoder (response_format) compresses no further than the request (-0.03 bits)
- The collapse lives in the model's response to the register, not the decoder

## Implications

- "Structured output is how software consumes language models, and that surface is served by a measurably more homogeneous model than the chat surface on which models are evaluated, compared, and chosen"
- Any pipeline leaning on JSON mode for variety is sampling from a smaller pool than it thinks
- JSON mode = homogeneity tax on structured output

## Tags

structured-output, llm-diversity, json-mode, llm-evaluation, arxiv
