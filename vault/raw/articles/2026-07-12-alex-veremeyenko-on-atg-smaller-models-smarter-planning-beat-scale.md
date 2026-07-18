---
title: Alex Veremeyenko on ATG: Smaller Models + Smarter Planning Beat Scale
kind: paste
captured_at: 2026-07-12 20:38
tags: [atomic-task-graph, agentic-planning, llm-agents, tsinghua, open-source-ai]
source_url: 
status: inbox
---

# Alex Veremeyenko on ATG: Smaller Models + Smarter Planning Beat Scale

## Alex Veremeyenko on Atomic Task Graph (ATG)

Source: https://x.com/alex_verem/status/2075994424484732984 (X/Twitter thread)
Author: Alex Veremeyenko (@alex_verem)

### Key Points
- Researchers from Tsinghua and South China University of Technology built ATG
- Turns 7B-8B open-source models into GPT-4 competitors on complex agent benchmarks
- Beats GPT-4 on 2 out of 3 benchmarks
- No fine-tuning, no extra training, zero parameter updates

### Problem ATG solves
- Current agents plan linearly (step 1, 2, 3…)
- When step N fails, the whole chain breaks
- Longer chains → more hallucination (reasoning over ballooning text history)
- ReAct hit 43% hallucination rate on household tasks

### ATG vs Old Way
| Aspect | Traditional (ReAct) | ATG |
|--------|--------------------|-----|
| Planning | Linear chain | Directed acyclic graph |
| Execution | Sequential | Parallel independent branches |
| Failure | Full replan from scratch | Subgraph localization + repair |
| Hallucination | 43% on household tasks | 12% |

### Related Source
- src-2026-07-12-?? (the arXiv paper 2607.01942)
