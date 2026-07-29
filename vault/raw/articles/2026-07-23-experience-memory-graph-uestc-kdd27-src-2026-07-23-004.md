---
source_id: src-2026-07-23-004
captured_at: 2026-07-23T05:49:00Z
url: "https://arxiv.org/abs/2607.13884"
status: complete
---

# Experience Memory Graph: One-Shot Error Correction for Agents

**Authors:** Wenjun Wang, Yuchen Fang, Fengrui Liu, Zibo Liang, Kai Zheng
**Affiliation:** University of Electronic Science and Technology of China (UESTC)
**Published:** arXiv:2607.13884v1, July 15, 2026
**Conference:** KDD '27 (33rd SIGKDD Conference, August 1-5, 2027, San Jose, United States)
**Keywords:** Large Language Models, Agent, Agent memory

## Abstract

Large Language Model (LLM) agents have shown remarkable capabilities in autonomous decision-making by generating sequential trajectories of states, actions, and observations. However, in complex, long-horizon tasks, these agents frequently suffer from compounding errors and struggle to recover from failures. Existing self-correction mechanisms rely on prompt-based reflection, which is inherently brittle, incurs heavy time and API costs due to iterative trial-and-error loops, and produces task-specific memory that may be hard to generalize to new scenarios. To address this, we propose Experience Memory Graph (EMG), a framework that reformulates agent failure recovery as a graph matching problem. At training time, we convert both failed exploration trajectories and successful expert trajectories into directed action decision graphs. By matching these graphs, we extract common subgraphs (successful workflows) and graph edit paths that explicitly indicate how to correct failures (e.g., which actions to add, delete, or relabel under a given observation), and store them in a memory graph with intra-task nodes and cross-task edges. At test time, EMG retrieves relevant insights and guides the agent in a single, loop-free execution. Experiments on ALFWorld and ScienceWorld show that EMG consistently outperforms state-of-the-art reflection baselines in success rate and average reward, while requiring no test-time trial-and-error.

## 1 Introduction

LLM agents generate long-horizon trajectories containing rich, reusable experience. Prior approaches extract workflows from successful trajectories only, or use prompt-based reflection to correct failures. Three limitations of the reflect–replay paradigm:

1. **Dependence on LLM capabilities** — prompt-based reflection is brittle; smaller LLMs struggle to break repetitive error cycles or identify root causes in long trajectories.
2. **High inference cost** — iterative looping multiplies latency and API costs.
3. **Limited cross-task generalization** — memory is task-specific, not transferable to unseen scenarios.

EMG shifts from online LLM reflection to offline deterministic graph computation.

## 2 Method

### 2.1 Preparation

**Collecting exploration trajectories.** For each training task, an LLM agent produces one exploration trajectory (may succeed or fail). An expert successful trajectory is assumed (available from datasets like ETO).

**Transforming trajectories into action decision graphs.** Each raw trajectory is converted into a directed action decision graph where:
- Nodes = actions, normalized as tuple (type, object, receptacle), with node reuse (same action = same node)
- Edges = preceding observation, with edge labels
- Virtual INIT node provides incoming edge for first action
- Consecutive invalid actions are parallelized from the same prior valid node

### 2.2 Construction of Experience Memory Graph

**Memory graph G_m = (V, E):**
- **Nodes** ν_i = (q_i, embed_i, I_intra_i, G_i, G*_i, r_i) — stores intra-task insights
- **Edges** ϵ_ij = (s_ij, I_cross_ij) — connects similar tasks (cosine similarity ≥ τ, top-k neighbors)

**Intra-task node insights** via graph matching between exploration graph G_i and expert graph G*_i:
- Common subgraph G_c_i (successful workflow) — actions correct under same observation
- Graph edit path G_e_i (correction instructions) — which actions to delete/insert/relabel under specific observations
- Uses Fused Gromov-Wasserstein (FGW) optimal transport + FGWAlign solver (O(|V|³·|L|))
- Both converted to natural language via LLM

**Cross-task edge insights** via graph matching between expert graphs of similar tasks.

### 2.3 Retrieval

At test time: embed query → cosine similarity to memory nodes → top-K nodes + top-T neighbor edges → retrieve node insights + edge insights → feed to agent prompt. One-shot execution without trial-and-error.

## 3 Results

| Method | ALFWorld Seen SR | ALFWorld Unseen SR | ScienceWorld Seen SR | ScienceWorld Unseen SR |
|--------|-----------------|-------------------|--------------------|----------------------|
| **Qwen3-4B** | | | | |
| ReAct | 29.29 | 21.64 | 11.86 | 8.53 |
| Reflexion | 34.29 | 39.55 | 14.95 | 8.06 |
| ExpeL | 38.57 | 39.55 | 13.40 | 11.85 |
| CDMem | 27.14 | 32.84 | 13.92 | 8.53 |
| MemP | 37.86 | 42.54 | 9.28 | 8.53 |
| **EMG** | **53.57** | **60.45** | **17.53** | **16.11** |
| **DS-V4-Flash** | | | | |
| ReAct | 86.43 | 88.06 | 17.53 | 13.74 |
| Reflexion | 82.86 | 90.30 | 12.89 | 8.06 |
| ExpeL | 81.43 | 83.58 | 19.07 | 15.17 |
| CDMem | 95.71 | 90.30 | 15.46 | 8.53 |
| MemP | 85.71 | 85.82 | 10.31 | 11.37 |
| **EMG** | **96.43** | **97.76** | **28.87** | **24.17** |

### Key Findings

1. EMG outperforms all iterative self-reflection baselines (Reflexion, ExpeL, CDMem at 5 iterations) while requiring only 1 test-time pass.
2. Performance gap larger for smaller models (Qwen3-4B): structured memory bridges model scale gap.
3. Ablation: node memory alone gives substantial gains; cross-task edges help small models more than large.
4. EMG achieves highest success rate among one-shot methods vs iterative methods at multiple rounds.
5. EMG inference time substantially lower than all iterative baselines.
6. Robust to hyperparameter k (number of retrieved nodes) across wide range.
7. Even under worst-case graph matching (completely wrong node alignment), Algorithm 3 produces a valid edit path (fallback: "follow the entire expert trajectory").
