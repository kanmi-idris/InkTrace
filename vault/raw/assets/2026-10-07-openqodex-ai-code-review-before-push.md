---
title: "OpenQodex: AI code review before push"
kind: "project capture"
author: "openqodex maintainers"
source_url: "https://github.com/openqodex/openqodex"
related_urls: ["https://github.com/openqodex/openqodex/blob/main/SECURITY.md", "https://github.com/openqodex/openqodex/blob/main/docs/security.md"]
tags: ["code-review", "application-security", "static-analysis", "AI-agents", "Claude-Code", "Codex", "pre-push", "Apache-2.0", "security-boundary"]
---

# OpenQodex

## Project description
OpenQodex describes itself as open-source code review for Claude Code and Codex. Its CLI reviews unpushed commits and uncommitted changes. It runs scanners that fit the changed files, then starts a separate Claude Code or Codex reviewer. The project says the reviewer checks every scanner finding and receives every changed line. It creates terminal, Markdown, JSON, and SARIF reports.

The repository lists an Apache-2.0 license. The security policy says the project is still before 1.0 and only the newest release receives security fixes.

## Requirements and limits
The README lists Node 22+, Git, macOS, and Linux. Windows requires WSL. Full review requires Claude Code or Codex, logged in. The README says it uses the user's existing plan and needs no separate API key for local review. It says there is no Cursor reviewer and no MCP server.

The repo lists 13 built-in scanners. A scanner runs only when the change includes a file it reads. A push gate and pre-push hook can check whether a review exists; they warn by default and block only when configured. The GitHub Action needs `ANTHROPIC_API_KEY` for full AI review. Without it, the action runs scanners only.

## Security and data handling
The security guide says OpenQodex and built-in scanners do not send source code. The separate reviewer sends its brief and the files it reads to the model provider used by the user's Claude Code or Codex login. Reviewer web access is on by default; the docs say `reviewer_web: off` disables it.

The dependency scanner sends package names and versions to `osv.dev`. Semgrep fetches rules from its registry. Custom scanners are arbitrary commands and can run on the user's machine. The tool requires the user to approve each custom scanner entry with `openqodex trust` before use. Do not approve an unreviewed scanner.

The README says the reviewer checks every scanner finding and changed line, but also states that no review finds everything. These are project design claims, not independent security test results.

## Evidence limits
I inspected the GitHub README, `SECURITY.md`, `docs/security.md`, and the repository license listing. I did not install or run OpenQodex, scan a repository, inspect its implementation, or test its privacy or security claims.
