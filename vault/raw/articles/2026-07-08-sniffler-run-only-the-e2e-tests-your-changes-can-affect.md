---
title: Sniffler — Run Only the E2E Tests Your Changes Can Affect
kind: paste
captured_at: 2026-07-08 20:31
tags: [callstack, e2e-testing, test-selection, dependency-graph, javascript, typescript, monorepo, open-source, react-native]
source_url: 
status: inbox
---

# Sniffler — Run Only the E2E Tests Your Changes Can Affect

## Sniffler — Callstack's E2E Test Impact Analyzer

Source: https://github.com/callstackincubator/sniffler
Author: Szymon Chmal (Callstack)

### What it is
Sniffler identifies which E2E tests are affected by your changes by analyzing import/export dependency graphs. You give it changed files (Git diff or explicit list), it traces the dependency chain to find which E2E tests could be impacted.

### Why it matters
- AI-assisted workflows mean changes land faster (minutes vs hours)
- Running full E2E suites on every PR is wasteful — CI tax on velocity
- Skipping tests is not the answer either
- Sniffler lets you run only relevant tests while keeping confidence high

### How it works
1. Scans source files for import/export statements (no full AST parsing — faster)
2. Builds a dependency graph of module relationships
3. Traces impact of changed files through the graph to connected E2E tests
4. **Entity-level precision** — tracks which exported entities are used by imports, so changes to one export from a barrel file don't flag all consumers

### Configuration
```json
{
  "source": {
    "roots": ["apps", "packages"],
    "ignore": ["**/*.test.*", "**/*.spec.*", "**/__tests__/**"]
  },
  "tests": {
    "manifest": ".sniffler/test-map.json"
  }
}
```

### Test Map (manual — maintained by developers)
- Maps E2E test files to the source modules they depend on
- Glob patterns supported (e.g., `packages/checkout/src/**`)
- Required because E2E tests don't directly import app modules (they interact via UI)

### Commands
- `npx sniffler impact --base origin/main --head HEAD` — inspect affected tests
- `npx sniffler run --base origin/main --head HEAD -- npx vitest run` — pass affected tests to any command that accepts file params
- Works with any test runner/linter/formatter that takes file arguments

### Escape hatch
Configure files that should always trigger the full suite (e.g., lockfile changes) — skips analysis, runs everything.

### Limitations
- Only analyzes JS/TS — no native code (Kotlin, Swift, Java, ObjC, C++)
- Test map is manual (planned fix: React Native instrumentation that auto-builds test-to-module relationships from E2E test runs)

### Related Context
- Callstack (React Native core contributors) — also created React Native AI SDK, Agent Device, React Native Harness
- Part of Callstack's "Agentic Infrastructure" / AI-Driven QA & Testing lane
- Complements Agent React DevTools (AI agents accessing React internals for debugging)
