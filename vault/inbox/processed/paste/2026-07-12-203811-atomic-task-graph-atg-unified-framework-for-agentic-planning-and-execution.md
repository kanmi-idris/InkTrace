---
title: Atomic Task Graph (ATG): Unified Framework for Agentic Planning and Execution
kind: paste
captured_at: 2026-07-12 20:38
tags: [arxiv, agentic-planning, dag, llm-agent, task-decomposition, ai-research, tsinghua]
source_url: 
status: inbox
---

# Atomic Task Graph (ATG): Unified Framework for Agentic Planning and Execution

## Atomic Task Graph (ATG)

Source: https://arxiv.org/abs/2607.01942 (arXiv:2607.01942, cs.AI)
Authors: Yue Zhang, Sihan Chen, Ziwen Huang, Hanyun Cui, Kangye Ji, Zhi Wang
Affiliation: Tsinghua University, South China University of Technology

### What it is
ATG is a unified control framework for LLM-based agent planning and execution that uses an explicit directed acyclic graph (DAG) to represent task dependencies — instead of linear textual trajectories.

### How it works
1. **Recursive Decomposition** — high-level task broken into subtasks recursively until each node is one atomic tool call, forming a traceable DAG
2. **Thought Experiment** — lightweight internal simulation before execution to catch bad dependencies and missing steps early
3. **Parallel Execution** — independent branches execute concurrently instead of sequentially
4. **Failure Localization & Repair** — traces failure to the exact subgraph, repairs only affected region, validated regions stay frozen

### Key Results (7B-8B models vs GPT-4 with ReAct)
- **ALFWorld**: ATG (8B Llama) = 63.65 vs GPT-4 ReAct = 41.24
- Hallucinated actions dropped to **12%** vs ReAct's **43%** on household tasks
- No fine-tuning, no extra training, zero parameter updates

### Significance
Training-free prompt-based control that generalizes across tasks without task-specific fine-tuning. Small open-source models rival GPT-4 on complex agent benchmarks through better planning architecture, not scale.
