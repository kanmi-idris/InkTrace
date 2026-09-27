---
title: "Google ARTEMIS: Natural-Language Android Automation and AI-Assisted Mobile Testing"
kind: "paste"
captured_at: "2026-09-26 06:59"
tags: ["google", "artemis", "android", "mobile-testing", "test-automation", "ai-agents", "mcp", "adb", "androidworld", "python", "claude-code", "codex", "antigravity", "windsurf"]
source_url: "https://github.com/google/artemis"
status: "inbox"
---

# Google ARTEMIS: Natural-Language Android Automation and AI-Assisted Mobile Testing

## Source scope
ARTEMIS is Google's open-source Android automation and testing repository. The README describes it as a system that turns natural-language instructions into Android workflows, drives real devices or emulators, captures diagnostics, and integrates with AI coding assistants through Model Context Protocol (MCP).

The repository is public, uses Python, defaults to the main branch, and is licensed under Apache License 2.0. The GitHub API snapshot inspected during capture reported 9,992 stars, 995 forks, 114 open issues, and an active repository. These counters are time-sensitive. The repository also states that some source code originated from Minitap, Inc.

I inspected the README, MCP server README, testing rules, repository metadata, and license. I did not clone, install, run, connect a device, or execute the startup scripts.

## What ARTEMIS does
ARTEMIS accepts a natural-language task such as opening an Android settings page, checking a value, reproducing a bug, or running a multi-step test. It observes the device UI, chooses actions, executes them through Android tooling, and returns structured status and diagnostics.

The repository supports physical Android devices and emulators. USB debugging must be enabled for a physical device. It can target a device by serial number or select an available device automatically. The project documents per-device execution locks and parallel work across different devices.

Its scope is broader than scripted taps. It combines accessibility hierarchies, OCR, visual models, and coordinate fallback to locate controls in ordinary views, Canvas interfaces, Jetpack Compose interfaces, and Flutter interfaces. It can capture screenshots, Logcat output, execution traces, action timelines, and optional video or replay data.

## Main interfaces
ARTEMIS exposes four primary ways to use the system:

- Web visual console: `uv run artemis ui` provides device projection, natural-language task dispatch, live reasoning telemetry, action trajectories, task queues, and execution replay.
- Developer CLI: `uv run artemis run` executes direct automation tasks, exploratory stability checks, and AndroidWorld runs with structured terminal output.
- MCP server: IDE assistants can call mobile automation, device state, trace inspection, task management, and environment diagnosis tools.
- Python SDK: `packages/artemis-client` provides a thin client with structured Pydantic results and assertion-friendly task outcomes for pytest or CI integration.

The MCP server README lists these core tools:

- `mobile_run_task` starts an asynchronous Flash or Pro task.
- `mobile_manage_task` checks, stops, or injects instructions into a task.
- `mobile_get_device_state` returns screenshots or OCR and XML hierarchy data.
- `mobile_inspect_trace` inspects actions, reasoning, screenshots, and device assignment.
- `mobile_diagnose` checks Python, configuration, credentials, ADB, devices, emulators, video tools, MCP hosting, and recent task failures.

The server can run over stdio or SSE. It also has background task execution and notification adapters for desktop notifications, files, webhooks, custom scripts, and Antigravity agent wakeups.

## Flash and Pro execution profiles
ARTEMIS has two execution profiles with different guarantees.

### Flash
Flash is a reactive observe-think-act loop. One model observes the current device state, selects an action, and continues until the task finishes. The README reports approximately 3 to 5 seconds per step. Flash is intended for routine and deterministic UI work.

Flash uses compressed history and can chain actions for transient controls such as fading video buttons or toasts. The repository states that Flash does not provide a persistent task plan, pre-execution safety net, checkpoint verification, final report, or ADB shell access.

### Pro
Pro is a planning and verification workflow for complex, long-running, or diagnostic tasks. A Planner maintains a Markdown task plan with milestones and assertions. An Operator executes actions and can use notes, history recall, video analysis, ADB diagnostics, and deeper element exploration. A Safety Net checks individual actions against the live UI tree and pixels before dispatch. A Checker verifies declared checkpoints and performs a final review against the original task.

Pro supports verification levels such as off, final, checkpoints, and strict. It also supports continuous monitoring loops and optional written reports. The README reports approximately 15 to 40 seconds per step for the Pro workflow.

These timings are project claims and depend on model, device, network, UI complexity, and selected perception mode.

## Element targeting and recovery
The repository describes a dynamic-first targeting strategy. It prefers accessibility identifiers, resource IDs, text, semantics, OCR, and UI hierarchy data. Coordinates and visual locating are fallbacks for custom or inaccessible interfaces.

The included testing rules tell connected AI assistants to explore the real application before writing test code. They emphasize verified transitions, explicit waits, stable locators, coordinate fallback, and diagnosis before repeated retries. This is a repository testing methodology, not an independently validated guarantee of test stability.

If an action fails, Pro records an execution incident in the Operator context and keeps it available for recovery until a later action succeeds. The MCP documentation also recommends `mobile_diagnose` before guessing when a task fails, a device is missing, or the MCP environment is unhealthy.

## Device helper
On the first task for a device, ARTEMIS can install an Artemis Accessibility Helper. The README describes it as a small accessibility service that reads the screen layout without taking the UiAutomation connection. It can fall back to UIAutomator2 if the helper fails.

The helper creates an accessibility-service entry and a collapsed notification on the phone. The repository claims that the helper listens only on the phone's local loopback and sends no data elsewhere. That privacy statement is a repository claim, not a security audit. Users should inspect the service, permissions, network behavior, and installation scripts before using it on sensitive devices.

The helper can be installed, inspected, or removed through ARTEMIS commands. Automatic installation can be disabled with the documented environment setting.

## MCP and IDE integration
The repository includes a native MCP server for Antigravity, Codex, Claude Code, Cursor, Windsurf, VS Code, Cline/Roo, and OpenClaw. The installer can add global MCP configuration and global testing rules to user configuration directories. Manual configuration is also available.

The included rules file teaches an AI assistant to explore the live app before authoring tests, select Flash or Pro based on the task, separate model latency from deterministic test timing, prefer dynamic locators, and run environment diagnosis when failures occur.

This integration is powerful but has broad local effects. The one-click startup and MCP installation flows can install system toolchains, configure global IDE files, install rules, start local services, and connect to Android devices. These are side effects to review before execution.

## Quick start and dependencies
The README provides a macOS/Linux `start.sh` flow and a Windows `start.bat` flow. The startup script can detect or install ADB, scrcpy, FFmpeg, Python `uv`, and project dependencies. It can open a local web console at `http://localhost:8000`. The CLI can run a task directly with `uv run artemis run`.

The repository also documents a Python SDK installation from the repository's `packages/artemis-client` subdirectory. The client is described as a thin host-side layer, while ADB, agents, models, and image processing remain on the device host.

The project requires an authorized Android device or a running emulator for real execution. An Android emulator must be installed and booted, or a physical phone must be connected and authorized.

## AndroidWorld result
The README claims a 99% or higher task-completion rate on Google Research's AndroidWorld benchmark, covering more than 100 multi-step tasks across more than 20 apps. This is a project-reported benchmark result. The repository page does not provide enough information in the inspected sections to independently reproduce the benchmark, compare model versions, or determine the full evaluation protocol.

The result should not be read as a 99% guarantee for arbitrary applications. Performance will depend on app accessibility data, visual design, task wording, device state, model access, credentials, and the selected Flash or Pro profile.

## Roadmap
The repository lists future work for Android Studio integration, iOS devices and simulators, lightweight on-device vision models, and real-time duplex voice interaction. iOS support is therefore a roadmap item, not a current platform capability in the inspected README.

## License and provenance
ARTEMIS is licensed under Apache License 2.0. The repository credits Minitap, Inc. for included source code. Users should review the NOTICE or third-party attribution files and the repository history before redistributing modified builds.

## Evidence boundary
The GitHub repository README, MCP server README, mobile testing rules, GitHub API metadata, repository tree, and Apache license were inspected. The README and MCP documentation support the described interfaces, profiles, installation behavior, helper behavior, roadmap, and benchmark claim.

I did not clone the repository, install dependencies, run `start.sh` or `start.bat`, configure an IDE, install the accessibility helper, connect a phone, run AndroidWorld, or execute an MCP task. The benchmark, timing, performance, and privacy claims remain project-reported.

## Sources
- https://github.com/google/artemis
- https://github.com/google/artemis/blob/main/README.md
- https://github.com/google/artemis/blob/main/mcp_server/README.md
- https://github.com/google/artemis/blob/main/mcp_server/rules.md
- https://api.github.com/repos/google/artemis
- https://github.com/google/artemis/blob/main/LICENSE
