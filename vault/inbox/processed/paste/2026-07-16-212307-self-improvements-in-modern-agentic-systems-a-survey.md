---
title: Self-Improvements in Modern Agentic Systems: A Survey
kind: paste
captured_at: 2026-07-16 21:23
tags: [self-improvement, agentic-systems, survey, ai-agents, meta-learning, schmidhuber]
source_url: https://arxiv.org/abs/2607.13104
status: inbox
---

# Self-Improvements in Modern Agentic Systems: A Survey

# Self-Improvements in Modern Agentic Systems: A Survey

**Authors:** Zhe Ren, Yimeng Chen, Dandan Guo, Guowei Rong, Tonghui Li, R.B. Xiong, Qingfeng Lan, Wenyi Wang, Li Nanbo, Yibo Yang, Mingchen Zhuge, Jürgen Schmidhuber
**Date:** July 14, 2026 (submitted)
**URL:** https://arxiv.org/abs/2607.13104
**Pages:** 97 pages, 12 figures
**Project:** https://selfimproving-agent.github.io/
**Repo:** https://github.com/selfimproving-agent/awesome-Self-Improving-Agents

## Summary

A comprehensive survey of self-improving autonomous agents — systems that convert experience into accumulated capability gains with minimal or no human input. The paper frames self-improvement as a formal problem and taxonomizes approaches across two primary pathways.

## Key Framework

**Agent = Foundation Model (θ) + Scaffold (Σ)**

Where scaffold = prompts (p), memory (m), tools (T), and control logic. Self-improvement is formalized as a self-induced update operator that modifies either:
- **Model parameters** (θ → θ') — foundation model improvement
- **Scaffold components** (Σ → Σ') — scaffolding improvement

## Two Improvement Pathways

### 1. Foundation Model Improvement
Updates model parameters using:
- **Intrinsic generative demonstrations** — model generates its own training data (self-play, self-augmentation)
- **Intrinsic evaluative feedback** — rubric feedback, consistency feedback, corrective feedback
- **Extrinsic exploratory experience** — interaction with grounded task environments or simulated proxy environments

### 2. Scaffolding Improvement
Non-parametric changes to the operational scaffold:
- **Prompt optimization** — scalar-feedback optimization, qualitative-feedback refinement, population-based evolution, textual gradient optimization
- **Memory** — memory objects (episodic, semantic, procedural), memory structures, memory processing (C-R-U-D)
- **Tools** — dynamic tool routing, iterative tool refinement, autonomous tool creation
- **Full scaffolding** — end-to-end scaffold evolution

## Applications Covered
- Software Engineering (self-debugging, self-repair, agentic swe)
- Web Navigation and Automation
- Games and Strategic Reasoning
- Scientific Discovery
- Embodied AI and Robotics
- General Computer Control

## Historical Scope
Traces self-improvement concepts from 1790s (Condorcet's jury theorem) through symbolism (1960s), connectionism/meta-learning (1980s–2000s), formal architecture-level improvement (2000s–2020s), to scalable foundation models and agentic systems (2020s–present).

## Evaluation
- Metric-based and judge-based measurement
- Mechanism benchmarks vs. domain benchmarks
- Attribution across improvement mechanisms

## Notable Authors
Includes Jürgen Schmidhuber (pioneer of meta-learning, Gödel machines — formal self-improving systems since 2000s)
