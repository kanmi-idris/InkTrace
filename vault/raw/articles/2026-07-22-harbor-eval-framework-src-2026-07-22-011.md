Source: https://www.harborframework.com
Title: Harbor — Evaluate Agents in Sandboxed Environments
Author: harbor-framework / laude-institute
License: Apache-2.0
Stars: 3,400
Forks: 1,400
Version: v0.20.0 (Jul 18, 2026)
Retrieved: 2026-07-22
Source ID: src-2026-07-22-011

---

Harbor is a framework for evaluating and optimizing agents and models in container environments, from the creators of Terminal-Bench.

## Install

```
uv tool install harbor
```

or

```
pip install harbor
```

## Core Concepts

- **Task**: single instruction, container environment, and test script. Implemented as a directory of files in Harbor task format.
- **Dataset**: collection of tasks. Usually corresponds to a benchmark (Terminal-Bench, SWE-Bench Verified, etc.). Can be distributed via Harbor registry.
- **Agent**: program that completes tasks. Defined by implementing BaseAgent or BaseInstalledAgent interfaces.
- **Container environment**: Docker images via Dockerfile. BaseEnvironment interface provides unified interaction.
- **Trial**: agent's attempt at completing a task. A rollout that produces a reward.
- **Job**: collection of trials. Can consist of multiple datasets, agents, tasks, and models.

## Cloud Sandbox Providers (horizontal scaling)

Daytona, Modal, E2B, Runloop, Tensorlake, LangSmith, Blaxel, Novita Sandbox, EC2, Beam

## Framework Integrations

SkyRL and GEPA for optimizing agents

## Usage

```
harbor run --dataset terminal-bench@2.0 --agent claude-code --model anthropic/claude-opus-4-1 --n-concurrent 4
```

For cloud:
```
harbor run --dataset terminal-bench@2.0 --agent claude-code --model anthropic/claude-opus-4-1 --n-concurrent 100 --env daytona
```

## Supported Agents

Claude Code, OpenHands, Codex CLI, and more. All popular CLI agents pre-integrated.

## Repository Structure

- Python 93.5%, TypeScript 3.7%, Shell 2.1%, Dockerfile 0.5%
- 1,370+ commits
- Includes AGENTS.md, CLAUDE.md, skills/ directory
- Harbor cookbook at github.com/harbor-framework/harbor-cookbook

## Citation

Published on Zenodo: doi:10.5281/zenodo.20953922
