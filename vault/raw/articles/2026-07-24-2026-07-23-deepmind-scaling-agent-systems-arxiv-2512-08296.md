# Towards a Science of Scaling Agent Systems (arXiv 2512.08296)

**URL:** https://arxiv.org/abs/2512.08296
**Authors:** Yubin Kim, Ken Gu, et al. — Google DeepMind (18 authors)
**Submitted:** Dec 9, 2025 (v3: Apr 8, 2026)

## Core Question

How does agent system performance change as these systems scale across key dimensions? 260 configurations, 6 benchmarks, 5 architectures, 3 LLM families.

## Five Canonical Architectures Tested

1. **Single-Agent** — baseline
2. **Multi-Agent Independent** — no coordination
3. **Multi-Agent Centralized** — one coordinator owns the merge
4. **Multi-Agent Decentralized** — peer-to-peer
5. **Multi-Agent Hybrid**

## Key Findings

### Teams Win on Decomposable Work
- Work that splits into independent pieces (research, audits, broad scans): **teams won 80.9% better than a single agent**

### Single Agents Win on Sequential Work
- Step-by-step work where each move depends on the last: **every team configuration lost to a single agent**

### Error Amplification
- Agents working without a coordinator amplified each other's mistakes **17.2x**
- One wrong finding spreads through the team like it was verified
- With one coordinator owning the merge, it barely spreads at all

### Capability-Saturation Effect
- Coordination yields diminishing returns once single-agent baselines exceed certain performance
- Tool-heavy tasks incur multi-agent overhead
- Architectures without centralized verification propagate errors more

### Relative Performance Range
- +80.8% on decomposable financial reasoning (teams)
- -70.0% on sequential planning (teams vs single agent)

## Takeaways

- More agents is not a strategy — the shape of the work decides everything
- Ask one question before adding an agent: does my work split into pieces that never read each other's results?
- If every step needs the full picture, one agent wins
- Never let findings merge without one owner of the merge — uncoordinated teams are error amplifiers
- Framework identifies best architecture for 87% of held-out configurations
- R² = 0.373 across all six benchmarks

## Tags

multi-agent, scaling, deepmind, agent-architecture, coordination, arxiv
