---
title: "Agents-cli: Define Quality Before Self-Improving Agent Loops"
kind: "paste"
captured_at: "2026-08-11 17:40"
tags: ["user-provided", "agents-cli", "google-cloud", "agent-evaluation", "evals", "observability", "quality-metrics", "adk", "coding-agents"]
source_url: "user-provided://conversation/2026-08-11-agents-cli-evaluation-loop"
status: "inbox"
---

# Agents-cli: Define Quality Before Self-Improving Agent Loops

## Source overview
The article argues that coding agents can now write and improve other agents. The loop is: write instructions, run the agent, find failures, revise instructions, and repeat. The engineering task that remains human-owned is defining what good means.

The article presents agents-cli as an open-source CLI and skills package for building agents on Google Cloud with the Agent Development Kit (ADK). Official documentation: https://google.github.io/agents-cli/

## Core thesis
A self-improving loop optimizes the metric it receives. It cannot distinguish a meaningful target from a shallow target that produces a high score while making the agent worse in practice.

The metric is therefore the engineering artifact. It should encode organization-specific quality, such as a refund policy, escalation rule, compliance line, or customer tone. Public benchmarks cannot know these local requirements.

The article gives a support-agent example. A support agent may call the correct tool and hold the correct reasoning state, yet omit the retention offer in the final reply. Only an evaluation that grades the final reply against a custom metric can detect this failure. The example metric is retention_offered, returning pass or fail with a one-line reason.

## Loop commands
The documented setup command is:

uvx google-agents-cli setup

The article then describes this cycle:

agents-cli eval generate \
  --dataset tests/eval/datasets/cancellation_cases.json \
  -o artifacts/traces/

agents-cli eval grade \
  --traces artifacts/traces/ \
  --config tests/eval/eval_config.yaml

agents-cli eval compare \
  artifacts/grade_results/results_baseline.json \
  artifacts/grade_results/results_after_fix.json

The coding agent generates traces, grades them against a fixed metric, edits the agent instructions, reruns the cases, and compares baseline and after-fix results. The held-out set prevents the proposer from moving the evaluation bar.

## Seven rules
1. Start with one failing case, not a large suite. Expect five to ten iterations before it passes. Add another case only after the first one holds.
2. Make judges explain their scores. The reason provides the direction for the next iteration. Deterministic checks explain themselves through their assertions.
3. Use code when the answer is deterministic. For example, check a required tool-call order with a Python function. Reserve model judges for tone, completeness, or quality that cannot be expressed exactly.
4. Score behavior, not exact paths. A different valid tool order is not automatically a failure.
5. Treat flaky cases as findings. Repeat identical cases to determine whether the agent or the judge is nondeterministic. Do not delete the case merely because it is inconvenient.
6. Do not let the proposer move the bar. Lowering thresholds, editing expected output, or dropping cases can create fake gains. Held-out cases expose this behavior.
7. Auto-optimize prompts once, near the end. Prompt optimization can fix wording, but it cannot replace missing tools. Repeated prompt optimization can waste time that failure reasons already explain.

## Development and production loop
The article says the evaluation set becomes a durable record of organizational quality. It can run during development and in CI. After deployment, the same metric can run over production traces stored in BigQuery.

The article treats evaluation and observability as one loop sampled in two places: written test cases and real conversations. A production failure becomes a new evaluation case. Scores are signals about direction, not absolute truth. Movement between runs matters more than one isolated score.

## Human control
The coding agent performs the iteration. The human defines the quality standard, owns the metric, holds the evaluation set, and protects the held-out slice. The article recommends keeping the quality definition somewhere the optimization loop cannot modify.

The suggested first session is one metric, one failing case, and one improvement loop. The agent does not need to be perfect. It needs to be improvable.

## User-provided article text
When coding agents write the code, defining what's good is the real engineering job.
Coding agents can now build and improve other agents. Write the instructions, run the agent, find where it fails, rewrite, repeat. That self-improving loop ships today. Automating it is most of what agents-cli, our open-source CLI and skills for building agents on Google Cloud, does.

But the loop has a blind spot.
Give it a shallow target and it will optimize your agent into something that scores well and works worse. Then it reports success. Because by its own measure, it succeeded.
The loop can automate everything except telling you what "better" means.
The metric is the artifact you now write. Defining what good means, and measuring it well enough that a loop can improve toward it, is where the engineering judgment went.

The metric is what you now author. Software teams have always known you get what you measure. The loop makes it literal. It improves whatever number you give it, and nothing inside it can tell the difference between a target that reflects what you want and one that merely scores well.

Quality is specific, and it belongs to you. The definition of good that matters is rarely the one a public benchmark measures. It's the refund policy. The escalation rule. The compliance line. The tone your customers recognize.

The article's support-agent example uses a retention rule. The agent must offer the retention path before confirming a cancellation. An agent can follow that rule internally, call the right tool, and still return a final reply that omits it. A custom metric that grades the reply catches the error.

The loop in practice is trace generation, grading, fixing, and comparison. The coding agent reads the metric's failure reason, edits the instructions, and reruns. The held-out set remains outside the proposer’s control.

The article ends with this guidance: write the quality definition before starting the loop, keep it outside the loop’s reach, choose one behavior, express it as a pass-or-fail metric with a one-line reason, add one failing case, and start small.
