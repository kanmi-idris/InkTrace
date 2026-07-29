---
title: Oskar Kwasniewski - Stop Keeping Laptop Open for Agents
kind: paste
captured_at: 2026-07-25 21:11
tags: []
source_url: 
status: inbox
---

# Oskar Kwasniewski - Stop Keeping Laptop Open for Agents

https://x.com/o_kwasniewski/status/2080989722361397291 — Oskar Kwaśniewski (@o_kwasniewski, Co-Founder/CTO @TesterArmy YC P26, ex-Callstack): "This week I had a couple of interesting in-person meetings in Warsaw. At a few of them, the most cracked people kept running agents in the background while we were talking. This prompted me to write this article: Stop keeping your laptop open to keep your agents running."

Links to Medium article by Radek Maciaszek: "Close the lid. Your AI coding agent belongs on a box that never sleeps." — Run coding agents on an always-on box (Mac Mini, mini-PC, VPS, old laptop) via Tailscale + SSH + tmux. Three-level setup: basic (SSH + tmux, survives disconnect/lid close), reboot-survival (tmux-resurrect + tmux-continuum + stable UUID script for Claude Code --session-id/--resume), hardening (dedicated claude user, agent-vault-proxy, SandVault/bwrap sandbox). The Business Insider article about AI coders carrying half-open laptops is referenced.

Related tools: LidGuard (github.com/airtaxi/lidguard) — agent-aware sleep prevention for Codex, Claude Code, Copilot CLI. macbook-24x7-agents (github.com/apoorvdarshan/macbook-24x7-agents) — pmset disablesleep 1 + lid-display-off.sh watcher for closed-lid running on macOS.
