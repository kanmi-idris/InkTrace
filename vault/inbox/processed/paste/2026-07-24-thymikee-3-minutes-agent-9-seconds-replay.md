# Michał Pierzchała: "3 minutes with an agent. 9 seconds on replay."

**URL:** https://x.com/thymikee/status/2080297621491483014
**Author:** Michał Pierzchała (@thymikee) — Principal Engineer for Open Source @callstackio, Core React Native Community contributor, building agent-device
**Published:** Jul 23, 2026 — 10.2K views

## Core Message

"3 minutes with an agent. 9 seconds on replay."

The key economic insight of agent-device's interactive replay: **reusable `.ad` scripts collapse the per-step model-turn cost toward zero on the happy path** and pay only where reality diverged from the recording.

## Supporting ADR Evidence

Referenced ADR 0012 — Interactive Replay (callstack/agent-device, accepted Jul 10, 2026):

- **Benchmark**: react-navigation Maestro suite: 38/38 flows green in 539s, zero model turns
- **Settle improvement**: snapshot captures per interaction dropped from 3.67 to 1.00 (the 1-snapshot floor) with `--settle`
- **Commands per task**: 14.3 (settled) vs 23.3 / 26.7 (unsettled)
- **Cost model**: agent-driven QA = O(steps) model turns; deterministic replay = O(divergences) model turns

## Key ADR Decisions

### Decision 1: Retire silent `--update` healing → ranked suggestions for agent-in-loop
### Decision 2: Disclose disambiguation (unique vs heuristic resolution)
### Decision 3: Versioned `.ad` target-binding evidence (`target-v1` annotations)
### Decision 4: Structured divergence wire contract + `--from N` replay resume
### Decision 5: Replay-only resume (`--from N`)
### Decision 6: Agent-supervised re-record repair (heal-by-doing)

## Related Conversation

- **@AntaripBytes**: "agent-device has made debugging so much easier. Today my agent decided it required network logs but could not use http_proxy, so it used agent-device and manually went though my settings and setup a proxy on my connected wifi. It was so cool watching it happen live."
- **@interlap01**: "Reusable scripts are the way! Had them in MobAI from day one" — links to `MobAI-App/mobile-harness`

## Tags

agent-device, replay, testing, mobile-automation, callstack, react-native
