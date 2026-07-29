---
title: Google Magika - AI File Type Detection
kind: paste
captured_at: 2026-07-24 19:39
tags: []
source_url: 
status: inbox
---

# Google Magika - AI File Type Detection

GitHub - google/magika: AI-powered file content type detection using deep learning. Custom optimized model (~few MB), ~5ms inference per file on single CPU. Trained on ~100M samples across 200+ content types, ~99% accuracy.

Key features:
- CLI (Rust), Python API, JS/TS (npm), GoLang (WIP) bindings
- ~5ms inference time after one-off model load
- Near-constant inference time regardless of file size (uses limited subset of file content)
- Per-content-type threshold system (trust prediction vs return generic label)
- Prediction modes: high-confidence, medium-confidence, best-guess
- Supports batch processing and recursive directory scanning

Used at Google scale: Gmail, Drive, Safe Browsing — processing hundreds of billions of samples weekly. Also integrated with VirusTotal and abuse.ch.

Published at IEEE/ACM ICSE 2025. Apache 2.0 license.
Stars: 17.3k, Forks: 1.1k, Commits: 1,753

Install: pipx install magika | brew install magika | cargo install magika-cli
Website: securityresearch.google/magika/
