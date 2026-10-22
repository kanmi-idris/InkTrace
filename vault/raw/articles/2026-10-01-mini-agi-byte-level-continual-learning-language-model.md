---
title: "mini-AGI: Byte-level continual-learning language model"
kind: "paste"
captured_at: "2026-10-01 17:42"
tags: ["continual-learning", "language-model", "byte-level", "modular-experts", "gpu-training", "catastrophic-forgetting", "model-training", "research-replication"]
source_url: "https://github.com/volotat/mini-AGI"
status: "inbox"
---

# mini-AGI: Byte-level continual-learning language model

## Repository observations
Inspected the repository on 2026-10-01. The README describes mini-AGI as a byte-level language model that trains from scratch on a single 8 GB VRAM GPU. It stores expert weights as files on disk and pages selected experts onto the GPU. It is designed for continual, streamed training.

The README explicitly calls the project a small toy-level model and says not to expect frontier-level capability. It also says the main run's weights are not published yet. A separate undertrained snapshot is linked.

The README's forgetting experiment uses the PG19 corpus of 19th-century novels. It describes reading 1,048,576 consecutive characters at batch size 1, then comparing held-out loss across eight other subjects. These are repository-reported experiments, not an independent reproduction.

## User-provided description

“mini-AGI is an open-source language model you can train from absolute zero on a single consumer GPU, and it's designed to never stop learning. Instead of training once and freezing, it reads text one chunk at a time, stores each of its experts as a separate file on disk, and loads only the ones it needs, so the model can be bigger than your graphics card. We put it to the test on an M2 Max MacBook, teaching it English with children's stories and then feeding it Quentin Tarantino screenplays to see if it could learn something new without forgetting the old.”

## Evidence limits
The inspected README supports the broad architecture description, but it does not describe the M2 Max, children's-story, or Tarantino-screenplay test from the supplied text. The README instead describes an 8 GB VRAM GPU target and a PG19 forgetting experiment. Treat the supplied hardware and corpus details as unverified until their original post or run record is inspected.

The README describes the model as toy-level and says the main weights are not yet published. No code was run, no weights were downloaded, and no experiment was independently reproduced.
