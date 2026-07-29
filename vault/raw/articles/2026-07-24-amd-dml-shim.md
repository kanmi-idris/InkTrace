---
title: AMD DML Shim
kind: paste
captured_at: 2026-07-24 08:38
tags: []
source_url: 
status: inbox
---

# AMD DML Shim

GitHub - santosthegreat/amd-dml-shim: Python interception layer that makes AI training software (Axolotl) believe it has an NVIDIA CUDA GPU while routing compute to AMD card via Microsoft DirectML. No NVIDIA, no Linux, no dual boot.

Hardware tested: Windows 10, AMD Threadripper 2990WX (32c/64t, 64GB RAM), AMD RX 7700 XT (12GB VRAM), Raspberry Pi 5 + Hailo-8 (inference observer over direct ethernet).

How it works: patches torch internals at Python startup via sitecustomize.py. Blocks torch._C._cuda_init() from crashing, spoofs cuda.is_available()=True, spoofs cuda.get_device_name() to return AMD card name, routes device calls to privateuseone:0 (DirectML).

Setup: WSL2 + Ubuntu 22.04, PyTorch 2.4.1 + torch-directml, copy dml_shim.py to site-packages, sed-patch torch/cuda/__init__.py.

Status: GPU detected via DirectML, torch.cuda spoofed, Axolotl loads and starts training, Mistral 7B LoRA fine-tune running.

Author: @santosthegreat (X)
License: MIT
Stars: 1, 5 commits, 2 forks
