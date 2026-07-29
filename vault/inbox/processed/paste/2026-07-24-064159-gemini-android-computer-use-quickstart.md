---
title: Gemini Android Computer Use Quickstart
kind: paste
captured_at: 2026-07-24 06:41
tags: []
source_url: 
status: inbox
---

# Gemini Android Computer Use Quickstart

Google Gemini Android Computer Use Demo — reference implementation for controlling an Android emulator using Gemini 3.6 Flash Computer Use API (mobile environment) via Google GenAI SDK.

Agent loop:
1. Capture screenshot of virtual device via ADB
2. Send screenshot + user task to Gemini 3.6 Flash
3. Model returns structured tool commands: click, type, long_press, drag_and_drop, press_key, go_back, wait, list_apps, open_app, take_screenshot
4. Client maps normalized coordinates (0-999) to actual screen resolution, executes via ADB
5. Loop repeats until task complete

Files: agent.py, setup_emulator.sh (macOS AVD setup), requirements.txt
Setup: Homebrew, uv, run setup_emulator.sh, export GEMINI_API_KEY, uv venv + uv pip install, python agent.py "task"

CLI options: --model / -m (default gemini-3.6-flash), --thinking-level / -t (minimal/low/medium/high)
Supported models: gemini-3.6-flash, gemini-3.5-flash-lite, gemini-3.5-flash

License: Apache 2.0 (software), CC-BY 4.0 (materials). Not an official Google product.
Stars: 54
