---
title: "e2e: Open-source agentic testing framework for web and mobile apps"
kind: "paste"
captured_at: "2026-10-01 17:44"
tags: ["e2e-testing", "agentic-testing", "ui-testing", "web", "mobile", "react-native", "ios", "android", "playwright", "ci", "open-source", "model-cost", "telemetry"]
source_url: "https://tester.army/e2e"
status: "inbox"
---

# e2e: Open-source agentic testing framework for web and mobile apps

## User-provided announcement

“Introducing e2e

The agentic testing framework for any app

~/ npx e2e init

→ Fully Open Source
→ Mix deterministic and agentic APIs
→ Supports web, mobile, and more
→ Bring your own agent and infrastructure
→ Run locally or in CI”

## Product and documentation observations
Inspected on 2026-10-01. The project describes a customizable TypeScript end-to-end testing framework. Its test API combines deterministic steps, such as app navigation and locator assertions, with agent steps such as natural-language actions and screen assertions.

The built-in web engine uses Playwright. The mobile engine supports iOS simulators and Android emulators through agent-device. The documentation also describes custom engines and hosted device providers. Mobile tests require local simulator or emulator tooling unless a device provider is configured.

The README describes verified agent action steps being cached and replayed without another model call until the app changes. Other agent methods, including assertions, waits, and extraction, call the model. Users supply a subscription, API key, or local model. The project supports CI integrations and stores run reports, failures, and artifacts.

The GitHub repository lists an Apache-2.0 license. It says the framework is in active development before 1.0 and that APIs and configuration may change between minor releases. The CLI sends anonymous usage data about commands, engines, and failures; the project documents an opt-out.

## Evidence limits
These details come from project pages and documentation. I did not install the package or run tests. “Any app” is broader than the built-in support shown: the documented built-in engines cover web and iOS/Android, with custom engines as an extension path.

## Relevance
This is an implementation and UX-validation workflow reference. Its mixed deterministic and agentic tests can check real user journeys, including mobile flows, but it is not a visual-design gallery.
