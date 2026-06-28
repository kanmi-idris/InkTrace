---
title: agentOS by Rivet — In-Process Operating System for AI Agents
kind: paste
captured_at: 2026-06-28 03:41
tags: [agent-os, agent-sandbox, agent-infrastructure, rivet-dev, v8, wasm, acp, agent-orchestration]
source_url: 
status: inbox
---

# agentOS by Rivet — In-Process Operating System for AI Agents

agentOS (rivet-dev/agentos) — A portable open-source operating system for AI agents. 3.3k stars, 159 forks, 158 commits, Apache 2.0 license. Built by Rivet (agentos-sdk.dev). Rust (73.5%) + TypeScript (22.4%) + Shell/HTML/Just/Dockerfile.

Key pitch: Near-zero cold starts (~6ms), up to 32x cheaper than sandboxes. Built-in ACP agents: Pi, Claude Code, and OpenCode.

Why agentOS vs Sandboxes:
- Runs inside your process: No VMs to boot, no containers to pull. Agents start in milliseconds.
- Embeds in your backend: Agents call your functions directly via bindings. No network hops.
- Granular security: Deny-by-default permissions for filesystem, network, and process access.
- Deploy anywhere: Just an npm package. Works on laptop, Rivet Cloud, Railway, Vercel, Kubernetes.
- Works with sandboxes when needed via sandbox extension (E2B, Daytona, etc.).

Benchmarks (vs E2B/Daytona):
- Cold start: p50 4.8ms vs 440ms (92x faster), p99 6.1ms vs 3,150ms (516x faster)
- Memory: ~131MB vs ~1,024MB for full coding agent (8x smaller), ~22MB vs ~1,024MB for simple shell (47x smaller)
- Cost: 3-17x cheaper self-hosted vs Daytona

Install: npm install @rivet-dev/agentos-core @agentos-software/common @agentos-software/pi

Usage:
- import { AgentOs } from "@rivet-dev/agentos-core"
- AgentOs.create({ software: [common, pi] })
- vm.createSession("pi", { env: { ANTHROPIC_API_KEY } })
- vm.prompt(sessionId, "Write a hello world script")
- vm.readFile("/home/agentos/hello.js")
- Runs Node.js and shell scripts inside the VM

Architecture: Built on an in-process OS kernel managing virtual filesystem, process table, pipes, PTYs, virtual network stack. Everything runs inside the kernel — nothing executes on the host.

Features:
- Multi-agent support: Pi, Claude Code, OpenCode with unified API, plus registry command packages (Codex as VM software)
- Sessions via ACP (Agent Communication Protocol): create, manage, resume agent sessions
- Universal transcript format across all agents for debugging/auditing
- Automatic persistence: every conversation saved and replayable
- Mount external storage: S3, Google Drive, host directories, overlay filesystems
- Bindings: JS functions agents call as CLI commands inside VM
- Cron, webhooks, and queues
- Multiplayer: multiple clients observe/collaborate with same agent in real-time
- Agent-to-agent: agents delegate work via host-defined bindings
- Workflows: chain agent tasks into durable workflows with retries, branching, resumable execution
- Auth: API keys, OAuth, JWTs
- Deny-by-default permissions, programmatic network control, resource limits, VM isolation

WASM Command Packages (npm @agentos-software/*): codex-cli, coreutils (80+ commands), curl, diffutils, duckdb, fd, file, findutils, gawk, git, grep, gzip, http-get, jq, make (planned), ripgrep, sed, sqlite3, tar, tree, unzip, wget, yq, zip. Meta-packages: common, build-essential, everything.

v0.2.4 latest (Jun 27, 2026), 11 releases. Has AGENTS.md and CLAUDE.md files.
