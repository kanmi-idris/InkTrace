---
title: Gemini Computer Use API docs
kind: paste
captured_at: 2026-07-24 06:45
tags: []
source_url: 
status: inbox
---

# Gemini Computer Use API docs

Google AI - Gemini API Computer Use documentation.

Computer Use tool lets you build browser, mobile, and desktop control agents that interact with and automate tasks. Using screenshots, the model can "see" a computer screen and "act" by generating specific UI actions.

How it works (continuous loop):
1. Send request to model with Computer Use tool, config, user prompt, and screenshot
2. Model returns suggested function_call (action like click, scroll, keystroke) + reasoning intent + safety_decision (regular/allowed, require_confirmation, or blocked)
3. Client parses function_call, scales normalized coordinates (0-999) to viewport, executes action via automation tool (Playwright etc.)
4. Capture new screenshot, send back as function_result

Supported environments (Gemini 3.x):
- Browser: move, type, drag_and_drop, wait, press_key, key_down, key_up, hotkey, take_screenshot, scroll, go_back, navigate, go_forward
- Mobile (Android-optimized): wait, go_back, type, click, long_press, drag_and_drop, press_key, go_home, open_app, take_screenshot, list_apps
- Desktop: mouse clicks, keyboard, drag, scroll, type

Safety: built-in safety categories (require_confirmation/blocked), opt-in prompt injection detection scanning screenshots for adversarial instructions.

Supported models:
- Gemini 3.6 Flash (recommended, default)
- Gemini 3.5 Flash-Lite (low-latency, cost-effective)
- Gemini 3.5 Flash
- Gemini 3 Flash Preview
- Gemini 2.5 Computer Use Preview (legacy, browser-only)

Key features: multi-environment support, streamlined actions with intents, configurable safety policies, prompt injection detection, thinking levels (minimal/low/medium/high).

Requires: google-genai Python SDK >= 2.7.0, secure execution environment (sandboxed VM/container recommended), client-side action handler.

Client maps normalized 1000x1000 coordinates to actual screen resolution.
