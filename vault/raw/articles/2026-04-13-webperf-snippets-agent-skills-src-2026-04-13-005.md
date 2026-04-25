# WebPerf Snippets and Agent SKILLs: deterministic audits with Chrome DevTools MCP

Source ID: src-2026-04-13-005
Canonical URL: https://joanleon.dev/en/webperf-snippets-agent-skills/
Resource Type: article
Host: joanleon.dev
Mention Count: 1
Original URLs: https://joanleon.dev/en/webperf-snippets-agent-skills/

## Captured Text Excerpt
This article argues for turning performance-analysis snippets into deterministic AI-agent capabilities by keeping the executable JavaScript in separate script files inside a SKILL, while leaving instructions, thresholds, and script indexes in `SKILL.md`.

The core implementation claim is that inline JavaScript inside markdown costs tokens on every invocation and also allows an LLM to reinterpret or mutate the code. By contrast, keeping scripts as `.js` files inside the SKILL directory lets the agent load only the script it needs and execute the validated code exactly as written.

The article presents two main objectives:
- Deterministic tools: the agent reads the fixed script and executes it directly, instead of improvising JavaScript.
- Token savings: only the relevant script enters context when needed.

The structure is organized across multiple SKILLs such as `webperf-core-web-vitals`, `webperf-loading`, `webperf-interaction`, `webperf-media`, `webperf-resources`, and a meta-SKILL router. The article also emphasizes decision trees and workflows, such as drilling into TTFB sub-parts when the top-level metric crosses a threshold.

Chrome DevTools MCP is described as the execution layer: navigate to a page, load the relevant script, execute it via `evaluate_script`, capture console output, compare to thresholds, and trigger follow-up workflows when needed.

The article positions this approach as a practical alternative that works today, without waiting for future browser support, and contrasts it with a more text-only or browser-standardized path.
