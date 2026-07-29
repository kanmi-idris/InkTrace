---
title: UniSE Speech Enhancement
kind: paste
captured_at: 2026-07-24 08:37
tags: []
source_url: 
status: inbox
---

# UniSE Speech Enhancement

Hugging Face Space: hugging-apps/unise-speech-enhancement — UniSE: Unified Speech Enhancement model.

Paper: "UniSE: A Unified Framework for Decoder-only Autoregressive LM-Based Speech Enhancement" (arXiv:2510.20441).

Supported tasks:
- Speech Enhancement (SE): denoising, clarity improvement (noise, reverb, packet loss)
- Target Speaker Extraction (TSE): extract target speaker from mixture using reference enrollment audio
- Speech Separation (SS): separate mixed speakers into individual streams

Architecture:
1. Extract hidden states from WavLM layers, average across layers for unified representation
2. Decoder-only autoregressive LM predicts speech tokens autoregressively
3. Tokens decoded to audio via BiCodec neural audio codec

SDK: Gradio 6.15.1, Python 3.12.
Reference model: QuarkAudio/QuarkAudio-UniSE on HF.
Source code: github.com/alibaba/unified-audio/tree/main/QuarkAudio-UniSE
Stars/likes: 68
