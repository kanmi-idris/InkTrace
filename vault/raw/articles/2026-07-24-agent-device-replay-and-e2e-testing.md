---
title: agent-device replay and e2e testing
kind: paste
captured_at: 2026-07-24 06:38
tags: []
source_url: 
status: inbox
---

# agent-device replay and e2e testing

agent-device Replay & E2E Testing docs from Callstack OSS.

Two-pass workflow:
1. Agent pass: discover and interact with refs (snapshot -> click @e.. / fill @e..)
2. Deterministic pass: run recorded .ad script with replay

Record: agent-device open Settings --platform ios --session e2e --save-script; snapshots, clicks, close. Script written to ~/.agent-device/sessions/

Run replay: agent-device replay <file>.ad --session e2e-run

Maestro compatibility: can run a subset of Maestro YAML through typed runtime. Supported: launchApp, runFlow, tapOn, doubleTapOn, longPressOn, inputText, eraseText, openLink, hideKeyboard, pressKey, back, assertVisible, assertNotVisible, scroll, scrollUntilVisible, swipe, takeScreenshot, waitForAnimationToEnd, stopApp. Boundaries: iOS/Android only, no evalScript, no repeat.while.

Export .ad to Maestro YAML: agent-device replay export ./workflow.ad --out ./maestro/checkout.yaml

Lightweight .ad suite: agent-device test ./workflows --platform android --timeout 60000 --retries 1 --reporter default --reporter junit:./tmp/junit.xml

Custom reporters: CLI-only, module-based with hooks: onSuiteStart, onTestStart, onTestStep, onTestResult, onSuiteEnd, getExitCode.

Parameterization: ${VAR} tokens in .ad scripts. Precedence: CLI -e KEY=VALUE > AD_VAR_* shell env > script env KEY=VALUE > built-ins (AD_PLATFORM, AD_SESSION, AD_FILENAME, AD_DEVICE, AD_ARTIFACTS). Fallback: ${VAR:-default}. Escape: \${VAR}.

Replay divergence: failing step returns REPLAY_DIVERGENCE with step index, screen snapshot, suggestions (up to 5 ranked candidates), resume info. Resume: replay --from <n> --plan-digest <sha256>. --update/-u flag retired (no-op).

Troubleshooting: repair selectors by hand after UI changes; use resume for state repair with unchanged plan; validate quoting in .ad files.
