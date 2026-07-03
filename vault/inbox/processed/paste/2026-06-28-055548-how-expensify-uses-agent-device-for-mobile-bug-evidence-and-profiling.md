---
title: How Expensify Uses Agent-Device for Mobile Bug Evidence and Profiling
kind: paste
captured_at: 2026-06-28 05:55
tags: [callstack, expensify, agent-device, testing, qa, mobile, react-native, profiling]
source_url: https://www.callstack.com/blog/how-expensify-uses-agent-device-for-mobile-bug-evidence-and-profiling
status: inbox
---

# How Expensify Uses Agent-Device for Mobile Bug Evidence and Profiling

Callstack blog post by Kacper Mikołajczak and Bartłomiej Obudziński (Jun 26, 2026). How Expensify uses agent-device to automate mobile bug evidence, Sentry performance measurement, and React profiling.

Core problem: AI coding agents can read code and draft fixes, but can't see whether a fix works on a real mobile screen. Each platform has its own tooling interface. agent-device solves this with a consistent API over adb/simctl, returning structured accessibility trees (not screenshots) — semantically richer and cheaper in tokens.

Three use cases from Expensify:

1. Bug-fix evidence (agent-device-evidence skill):
- Builds evidence collection into the development loop.
- Takes a PR or issue link, parses repro steps and platform checkboxes.
- Two phases: warm-up (drives steps autonomously from cold start, distills successful actions into an .ad script) and recording (replays script to collect MP4s + stills + manifest per platform).
- Saves developers from manually recording screenshots/videos on every affected platform for each PR.
- Real example: Issue #89526 — workspace Categories > More > Settings flow.
- .ad scripts are human-readable action sequences reusable across platforms.
- Developer brings judgment; agent brings hands.

2. Sentry performance span measurement:
- Sentry emits consistent log lines: [Sentry][<SpanName>] Ending span (<N>ms)
- Agent watches console, captures durations across multiple runs, produces structured summary.
- One warm-up replay + N measured replays.
- Real result: 5 runs — first run 638ms (cold cache), remaining 4 tight at 85–88ms, median 87ms.
- Multiple runs reveal distribution shape; single measurement can lie.

3. React profiler integration:
- agent-device integrates with react-devtools to start/stop React profiler programmatically mid-session.
- Agent navigates app autonomously, triggers profiling at right moment, returns structured summary with component names, render counts, and what was expensive.
- Enables before/after comparison after fixes.

Key insight: agent-device replaces manual repeated workflows (boot simulator, navigate, record, average numbers) with a single prompt. Open source: https://oss.callstack.com/agent-device
