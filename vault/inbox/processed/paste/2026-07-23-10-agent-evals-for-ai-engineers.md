# 10 Agent Evals for AI Engineers

**Captured:** 2026-07-23

A reference guide to ten evaluation techniques for AI agent systems.

## The Ten Evals

### 1. Golden Set
→ A fixed set of cases you never edit, run on every single change.
→ Use as the baseline that tells you whether anything moved at all.

### 2. LLM as Judge
→ A second model scores the output against a written rubric.
→ Use when the answer is open-ended and there is no string to match against.

### 3. Rubric Scoring
→ One number per dimension: correctness, tone, safety, cost.
→ Use when a single score hides which part actually got worse.

### 4. Trajectory Eval
→ Grade the path the agent took, not only the answer it landed on.
→ Use when the right answer for the wrong reason is going to bite you later.

### 5. Tool Unit Tests
→ Test each tool on its own, with fixtures, no model in the loop.
→ Use always. Most agent bugs are tool bugs wearing a costume.

### 6. Regression Suite
→ Replay past runs against the new prompt or model and diff the results.
→ Use before every prompt change, because prompts have no type system.

### 7. A/B in Prod
→ Split live traffic between two versions and compare outcomes, not vibes.
→ Use when offline scores stopped predicting what users actually do.

### 8. Human Review
→ Sample a slice of runs and have a person grade them honestly.
→ Use to calibrate your judge, because a judge nobody checks quietly drifts.

### 9. Shadow Run
→ The candidate runs on real traffic in parallel and its output is shown to nobody.
→ Use before a risky rollout, when one bad answer would be expensive.

### 10. Red Team
→ Deliberately attack it: jailbreaks, injection, exfil, tool abuse.
→ Use before anyone external can reach it, not after.

## Framework Distinction

- **Offline evals** tell you it works
- **Online evals** tell you it still works
- Run the two that would have caught your last outage

## Tags

agent-evals, testing, quality-assurance, evaluation-framework, ai-engineering
