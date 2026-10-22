---
title: "Paradee: 8M-parameter single-voice text-to-speech model"
kind: "project capture"
author: "Sahil Mahendrakar"
source_url: "https://huggingface.co/spaces/sahilmahendrakar/paradee"
origin_url: "https://huggingface.co/spaces/sahilmahendrakar/paradee"
related_urls: ["https://huggingface.co/sahilmahendrakar/Paradee-8M-v1.0", "https://github.com/sahilmahendrakar/paradee", "https://github.com/sahilmahendrakar/paradee/blob/main/paper/Paradee-Mahendrakar-2026.pdf"]
tags: ["text-to-speech", "TTS", "ONNX", "Kokoro", "model-distillation", "Apache-2.0", "speech"]
---

# Paradee

## Product description
Paradee is an English text-to-speech model distilled from Kokoro-82M. The model card lists 8.07 million parameters and one voice, Kokoro's `af_heart`. The Hugging Face Space exposes a text box, speed controls, a phoneme view, and an audio-generation button. The model card says the int8 ONNX file is about 9 MB and runs without a GPU.

The model card limits the model to American English and one voice. It says that number handling and unusual words depend on its phonemizer, and that a faint buzz can remain on some voiced sounds.

## Reported evaluation
The linked September 2026 paper evaluates 200 held-out sentences. It reports UTMOS 4.41 for Paradee and 4.52 for Kokoro-82M. UTMOS is an automatic neural predictor of naturalness, not a human listening test. The author reports informal listening, not a formal panel. The paper warns that UTMOS can miss audible degradations.

The paper reports 25x real-time speed for the PyTorch model and 17.8x for the released ONNX file, using one CPU thread on an Apple M4 Pro. The Space's roughly 18x claim matches the ONNX figure, not the PyTorch figure.

The paper reports 5.7% Whisper WER for the PyTorch model and 6.0% for the released ONNX file. The Space's “same word error rate (5.7%)” wording does not match the ONNX result. The model card says its WER script uses different text normalization.

## Training and license
The author says training used 12,000 English sentences from WikiText-103, rendered by the Kokoro teacher. The model and code are marked Apache-2.0. The repository says the WikiText-103 sentences used for training are CC BY-SA 3.0. These are separate license notices; this capture does not assess their legal interaction.

The model card says the model is not deployed by a Hugging Face Inference Provider. The Space itself showed a Running status. I did not submit text or generate audio.

## Evidence limits
I inspected the Space page, model card, GitHub README, and the author's linked paper PDF. I did not install or run code, download model weights, compare audio samples, or independently reproduce the benchmarks. The performance figures are author-reported results from one machine and a small test set.
