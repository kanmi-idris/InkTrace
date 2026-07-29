---
title: Autoresearch and Meta-Harness Primer
kind: paste
captured_at: 2026-07-25 21:58
tags: []
source_url: 
status: inbox
---

# Autoresearch and Meta-Harness Primer

https://aman.ai/primers/ai/autoresearch-and-metaharness/ — Comprehensive primer by Aman Agarwal on autonomous research loops and meta-harness optimization.

Autoresearch: turning experimental ML research into an agent-run optimization loop where an AI coding agent proposes changes, edits executable research artifacts, runs bounded experiments, reads metrics, and repeats until budget exhausted. Based on karpathy/autoresearch: agent edits train.py in a compact LLM training setup, runs fixed 5-min training experiments, evaluates val_bpb (validation bits per byte).

Meta-Harness (Lee et al. 2026, arXiv:2603.28052): generalization of autoresearch from "optimize training code" to "optimize the harness around an LLM system." A harness is code that controls what info to store/retrieve/present to a fixed language model. Uses coding-agent proposer that inspects prior source code, scores, and execution traces before proposing new harness code.

Key concepts: editable artifact (train.py or harness code), evaluator (fixed-budget experiment), proposer agent (coding agent with shell/file access), instruction layer (research org code), durable memory/experiment history, validation gates, Pareto evaluation, population-based search, trace-driven diagnosis.

Harness objective: H* = argmax_H E[r(τ,x)] where M is frozen model, H is harness, τ is rollout trajectory.

References: Pryzant et al. "Automatic Prompt Optimization with Gradient Descent and Beam Search" (2023), Yuksekgonul et al. "TextGrad" (2024), Lewis et al. "RAG for Knowledge-Intensive NLP Tasks" (2020), Khattab et al. "DSPy" (2023), Lehman et al. "Evolution through Large Models" (2022), Novikov et al. "AlphaEvolve" (2025), Hu et al. "Automated Design of Agentic Systems" (2025), Agrawal et al. "GEPA" (2025).

Covers: system architecture, evaluator design, proposer agents, instruction layers, memory/experiment history, validation gates, multi-objective research, Pareto frontiers, harness optimization, single-GPU research substrate, autonomous research agent design, safety, scaling, practical blueprint.
