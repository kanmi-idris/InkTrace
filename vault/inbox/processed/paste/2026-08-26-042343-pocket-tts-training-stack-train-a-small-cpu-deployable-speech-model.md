---
title: "Pocket TTS Training Stack: Train a Small CPU-Deployable Speech Model"
kind: "paste"
captured_at: "2026-08-26 04:23"
tags: ["github", "pocket-tts", "text-to-speech", "tts", "speech", "training", "voice-cloning", "cpu-inference", "gpu-training", "h100", "wer", "utmos"]
source_url: "https://github.com/kyutai-labs/pocket-tts"
status: "inbox"
---

# Pocket TTS Training Stack: Train a Small CPU-Deployable Speech Model

## Source overview
Kyutai's Pocket TTS is a lightweight text-to-speech application designed to run efficiently on CPUs. The repository now includes training code, data preparation scripts, training recipes, evaluation scripts, and documentation for community-trained models.

The inference package reports a 100M-parameter model, audio streaming, approximately 200 ms to the first audio chunk, approximately 6x real-time generation on a MacBook Air M4, two CPU cores, a Python API, a CLI, voice cloning, and browser-capable community implementations. The released runtime supports English, French, German, Portuguese, Italian, and Spanish model variants according to the current repository README.

## Training quickstart
The training README provides a minimal path:
1. Prepare about 200 hours of speech data with training/scripts/prepare_data.py.
2. Run training/train.py with training/configs/lsd_scratch.yaml.
3. Generate samples from a checkpoint with pocket-tts generate.

The 200-hour run is intended to produce intelligible speech. The README recommends about 2,000 hours for quality comparable to the official Pocket TTS model.

Training requires Linux, Python 3.10 or newer, uv, one NVIDIA GPU, and about 60 GB of disk per 1,000 hours of prepared audio. The default batch size wants about 56 GB of GPU memory. A consumer GPU can use batch size 16 with four gradient-accumulation steps in about 16 GB. Official Windows and macOS training support is not provided.

The example data is HiFiTTS-2. The repository also documents bringing another language by using speech paired with transcripts, word-level alignments, a language-specific forced aligner, and a tokenizer. It says 100 hours can produce a working model, while 1,000 or more hours is preferred for a strong model.

## Two-stage training recipe
The official recipe trains a 24-layer teacher from scratch with lsd_scratch.yaml, then distils it into a 6-layer student with lsd_depth_distill.yaml. The README says this performs better than training a 6-layer model from scratch.

The training stack follows the CALM paper. Checkpoints, EMA model weights, optimizer state, machine-readable progress logs, audio samples, and run arguments are saved.

## Reproduced learning curve
For 2,000 hours of HiFiTTS-2 with effective batch size 64, the official README reports:
- Around 2,000 steps: flow loss is expected near 0.35 to 0.4 and decreasing.
- Around 15,000 steps: WER begins dropping.
- Around 50,000 steps: WER reaches about 1% and then stays broadly flat.
- UTMOS rises monotonically to about 3.7 at 150,000 steps and remains stable around 300,000 steps.

The user-provided post paraphrases this as babbling becoming words around 15k, reading arbitrary text with WER under 1% around 50k, and the voice becoming less synthetic around 200k. The first two claims align directionally with the README. The README places the quality stabilization closer to 300k steps, not exactly 200k.

## Official timing estimates
With effective batch size 64, the training README reports:
- 1 x L4 23 GB: about 158 hours to 200k steps and 315 hours to 400k.
- 1 x L40S 46 GB: about 72 hours to 200k and 144 hours to 400k.
- 1 x H100 80 GB: about 29 hours to 200k and 58 hours to 400k.
- 2 x H100: about 17 hours to 200k and 33 hours to 400k.
- 4 x H100: about 11 hours to 200k and 21 hours to 400k.
- 8 x H100: about 8 hours to 200k and 16 hours to 400k.

The user's estimate of 10 to 20 hours on eight H100s is close to the official 8 to 16 hour range, depending on the target step count and overhead. The “week on a beefy consumer GPU” claim is plausible for some hardware, but is not a single official benchmark. The official L4 estimate is about 6.6 days to 200k.

The user's claim that rented hardware can cost under $200, or that local electricity is an order of magnitude cheaper, is not stated in the official README. It depends on provider, region, hardware rate, utilization, and training duration, so it remains unverified.

## Evaluation
The training stack evaluates:
- WER for intelligibility.
- Speaker similarity using WavLM speaker embeddings.
- UTMOS as an estimated 1-to-5 audio-quality score.

In the documented full LibriSpeech test-clean example, a 24-layer model trained on 31,700 hours for 400k steps reached 0.82% WER, 0.929 speaker similarity, and 4.33 UTMOS. A 2,000-hour subset reached 0.94% WER, 0.929 speaker similarity, and 4.32 UTMOS. The released 6-layer Pocket TTS English model is listed at 0.90% WER, 0.922 speaker similarity, and 4.36 UTMOS under the stated evaluation setup.

The README warns that metrics such as WER and UTMOS do not transfer directly to other languages without suitable ASR and evaluation data.

## Inference and device boundary
Training is GPU-based, but the released Pocket TTS inference runtime is CPU-oriented and does not require the GPU build of PyTorch. It can run locally with Python or CLI commands. The README reports CPU performance and documents a manually moved GPU path, but says GPU support is not officially exposed through TTSModel.load_model().

The repository lists community WebAssembly, JavaScript, Rust, ONNX, C++, and other implementations. These are not official Kyutai support. Therefore, “run it on any device's CPU” is a broad user claim, not a guarantee for every device or runtime.

## Language expansion
The training README specifically encourages new languages. A custom language needs aligned speech and transcripts, a language-specific aligner, and a tokenizer. The Czech example uses ParCzech4Speech and a Czech Wav2Vec2 aligner. The official guidance says 100 hours can get something working, while 1,000 or more hours is preferred for a strong model.

## Safety and use policy
The repository prohibits voice impersonation or cloning without explicit and lawful consent, misinformation, deception, fraudulent calls, and other harmful or unauthorized uses. Community model distribution is supported through Hugging Face configuration files.

## User-provided post
The post describes the open-sourced data pipeline, recipes, and evaluations; the training-step curve; consumer-GPU, H100, and cost estimates; language training; feature extensions; accessibility and game NPC use cases; and a Czech Pocket TTS example.

The training stack and most step and timing claims were checked against the official training README. Cost estimates, “any device” coverage, and the exact 200k quality milestone remain unverified or qualified above.

## Sources
- https://github.com/kyutai-labs/pocket-tts
- https://github.com/kyutai-labs/pocket-tts/blob/main/training/README.md
- https://kyutai.org/blog/2026-01-13-pocket-tts
