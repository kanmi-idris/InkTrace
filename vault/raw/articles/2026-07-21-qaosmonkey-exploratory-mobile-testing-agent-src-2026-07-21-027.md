Source: https://github.com/schmidi000/qaos-monkey
Title: QAosMonkey — Exploratory Mobile Testing Agent
Author: schmidi000
Retrieved: 2026-07-21
Stars: 5 | License: MIT-0 | npm: qaosmonkey

---

Tech-agnostic exploratory mobile testing agent. Drives iOS and Android emulators via agent-device, uses a configurable Vision-Language Model (CLI or API) to decide what to try next, pauses when human help is needed, and writes reproducible bug reports with screenshots and step traces.

## Why It Exists
- Traditional UI tests (Appium/Maestro) break on minor UI tweaks (e.g., button moves 10px → XPath fails)
- Existing "Autonomous AI" testing tools crash on real-world blockers (Captcha, 2FA, OTP)
- QAosMonkey bridges the gap: VLMs to see UI like a human + OS accessibility tree (immune to minor tweaks) + LangGraph state machines with HITL breakpoints

## Key Features
- **Vision-Language Model** — sees screenshots + accessibility tree, decides next action
- **Human-in-the-Loop** — pauses at blockers (Captcha, login, OTP), resumes with `/resolved`
- **Configurable providers** — Codex CLI, Claude Code, OpenAI-compatible, Anthropic API
- **Reproducible bug reports** — per-run directory with `report.md`, `report.json`, `state.json`, `state.jsonl` (append-only event trace), `screenshots/`
- **LangGraph state machine** — guides exploration with guardrails
- **Natural-language test guidance** — `goal`, `persona`, `mustTest` instead of fragile selectors

## Supported Model Actions
`tap`, `type`, `scroll`, `swipe`, `press_back`, `dismiss_overlay`, `wait`, `ask_human`, `log_bug`, `finish`

## Config
Config file exports a plain object with sections: `app`, `device` (agent-device/Maestro), `model` (CLI or API), `credentials` (env-based, redacted from artifacts), `exploration` (maxSteps, timeLimit, destructiveLevel, mustTest, excludedScreens), `humanInput`, `reporting`.

## Requirements
- Node.js 22.6+
- iOS: Xcode + booted simulator
- Android: running emulator
- agent-device (global or npx)
- One model provider (CLI command or API key)

## Quick Start
```bash
npm install --save-dev qaosmonkey
npx qaosmonkey init
npx qaosmonkey run --config qaos-monkey.config.ts
```

## Architecture
- Published as `qaosmonkey` (npm), `qaos-monkey` (files/dirs)
- TypeScript (87.9%), JavaScript (8.3%), CSS (3.8%)
- Dependencies: agent-device (default driver), Maestro (optional), OpenAI/Anthropic APIs, CLI providers
- Website: qaosmonkey.com (Docusaurus)
