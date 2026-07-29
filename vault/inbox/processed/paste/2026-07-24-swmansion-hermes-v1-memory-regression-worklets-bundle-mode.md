# How Worklets Bundle Mode Accidentally Fixed Hermes V1 Memory Regression

**URL:** https://swmansion.com/blog/how-worklets-bundle-mode-accidentally-fixed-Hermes-v1-memory-regression/
**Author:** Tomasz J. Żelawski (Software Mansion)
**Published:** Jul 21, 2026
**Source URL:** https://x.com/swmansion/status/2080306300269768772

## TL;DR

Some apps using Reanimated and Worklets started using a lot more memory after switching to Hermes V1. The cause was in Hermes itself: it quietly attached half a megabyte (512KB) of extra debugging data to every worklet function. The Hermes team fixed it; the fix ships with RN 0.87. The Worklets Bundle Mode avoids the problem entirely.

## Backstory

Reports came in that Reanimated uses significantly more memory on Hermes V1 compared to legacy Hermes. Investigation traced the root cause to Hermes V1's `eval` implementation storing debug metadata in production builds.

## The Problem

- Hermes V1 stores extra debugging metadata for `eval` invocations that return a function — even in production builds
- Worklets' Legacy Eval Mode sends animation code as strings to secondary JS runtimes via `eval`
- Hermes V1 allocates **512KB per unique worklet function** evaluated at runtime

## The Scale

| Metric | Value |
|--------|-------|
| Expensify app worklet count | 1,000+ unique worklets |
| Potential max memory | 0.5GB if all evaluated |
| Worklets at startup | 100+ worklets = ~50MB at app startup |

## Four Fixes (Ranked)

### 1. Bundle Mode (Recommended)
- Exposes whole JS bytecode bundle to secondary runtimes (not individual strings)
- Uses Hermes `mmap` — comes at next to no cost
- Enables latest Worklets features going forward
- Docs: https://docs.swmansion.com/react-native-worklets/docs/bundleMode/setup

### 2. Bytecode for Legacy Eval Mode (Experimental)
- Sends pre-compiled Hermes Bytecode instead of code strings to secondary runtimes
- Drop-in replacement, almost no code changes
- Marked experimental due to limited testing window
- Plugin option: `hermesBytecode: true` in babel.config.js

### 3. Pin Hermes Version
- Backported fix to Hermes **0.15** (250829098.0.15)
- No changes to Worklets behavior
- Works across different RN versions

### 4. Wait for RN 0.87
- Hermes fix ships with React Native **0.87** (scheduled Aug 8, 2026)

## Additional Notes

- Reanimated 4 CSS animations are NOT affected (implemented solely in C++)
- Bundle Mode was being prepared for stable release with Worklets 0.10.0 when the regression was reported
- Software Mansion created a comprehensive AI skill to enable Bundle Mode: https://github.com/software-mansion-labs/skills
- Reanimated versions compatible with Worklets 0.10.0 released same day

## Cross-Reference

- GitHub issue: https://github.com/software-mansion/react-native-reanimated/issues/9650
- Hermes fix PR: https://github.com/facebook/hermes/pull/2090
- Hermes bytecode PR: https://github.com/software-mansion/react-native-reanimated/pull/9705
- Worklets 0.11.0 release: experimental bytecode in Legacy Eval Mode

## Tags

react-native, hermes, worklets, reanimated, memory, performance, bundle-mode, eval
