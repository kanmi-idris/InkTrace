---
title: "apk-reverse: Agent skill for Android APK analysis"
kind: "paste"
captured_at: "2026-09-27 18:26"
tags: ["android", "apk", "reverse-engineering", "static-analysis", "dynamic-analysis", "dex", "native-code", "packers", "flutter", "dart-aot", "frida", "adb", "security-research", "ctf", "authorized-testing", "python", "mit", "github", "site-reported"]
source_url: "https://github.com/newliver666/apk-reverse"
status: "inbox"
---

# apk-reverse: Agent skill for Android APK analysis

Source checked: 2026-09-27.

## Repository snapshot
- newliver666/apk-reverse is a public MIT-licensed Python repository that packages an Agent Skill for Android APK reverse engineering and analysis.
- The GitHub API snapshot reports 2,617 stars, 546 forks, no open issues, Python as the primary language, and main as the default branch. These repository metrics are volatile.
- The repository is organized as a skill under skills/apk-reverse/, with a short entry-point SKILL.md, on-demand reference documents, helper scripts, test fixtures, and an evidence record.
- The README says the repository has no build step for the installed skill and uses progressive disclosure rather than loading every reference at once.

## Scope and method
- The skill is intended to help an agent classify an APK task, choose a safe analysis layer, keep a live evidence record, and stop when the requested deliverable is blocked.
- Its documented coverage includes Android manifest and DEX reconnaissance, native shared libraries, packers and custom loaders, tamper responses, Flutter/Dart AOT, split APK and App Bundle handling, protocol analysis beyond REST, and selected dynamic-analysis routes.
- The repository also documents fallback forms when repacking is blocked, such as module-side delivery, local RPC, emulated execution, or an honest report with an explicit boundary.
- The workflow emphasizes gates, symptom-based routing, bounded waits, two-strike stopping rules, and graded conclusions instead of treating a clean log as proof of success.
- The repository separates the installed skill from maintenance tooling and from executable tests. Tests check script behavior and CLI contracts, while benchmark records describe what happened on selected real targets.

## Analysis layers
- Static-analysis material covers package identity, manifest data, DEX and native-code locations, cross-references, decompilation, byte-level patch review, and APK repack verification.
- Native-analysis material covers loaded libraries, JNI boundaries, custom linkers, native tamper behavior, and the difference between a real memory dump and an extraction shell.
- Runtime-analysis material covers environment self-checks, device or emulator requirements, Frida-based observation, instruction-level tracing, protocol formats, and on-device workflows.
- Framework-specific references include Flutter and Dart AOT. The README explicitly excludes Unity/IL2CPP logic recovery and React Native/Hermes bytecode internals.
- The README also says the skill does not defeat server-side authority. A client-side gate and an account-scoped server resource are treated as different problems.

## Tooling and prerequisites
- The repository includes a doctor script that reports available tools and detects executables outside PATH.
- The documented toolchain can include Python 3.9 or newer, Android build tools, Java and dex tooling, ADB, Frida, and a rooted device or emulator for work beyond static analysis.
- Optional analysis tools are presented as query-oriented ways to locate classes, references, strings, and package identity before attempting a full decompile.
- The skill is intended to work across Windows, macOS, and Linux, with explicit tool paths when a tool is not on PATH.
- No tool installation, APK download, device connection, build, or runtime analysis was performed for this capture.

## Evidence and limitations
- The README states that the repository contains both measured and inferred material. The docs/tool-verification area records what was actually tested, on which target, and with what independent cross-check.
- Extension topics are documented separately and are mostly inferred unless their evidence record says otherwise.
- Benchmark rows identify the public target, exercised scripts, observed result, and evidence strength. An unverified row describes the repository's evidence status, not proof that the underlying mechanism works.
- The repository warns that tool versions, target versions, device state, signing behavior, and server behavior can change results. It recommends preserving originals and verifying the output artifact before trusting it.

## Authorized-use boundary
- The README states that the material is for learning, research, authorized security testing, owned applications, public CTF material, and controlled sandboxes.
- It says the repository ships no exploit payloads, target data, or third-party binaries. The capture records the method at a high level and omits operational attack commands, payloads, credential testing, brute-force procedures, and exploitation instructions.
- Users remain responsible for permission to analyze a target, local law, backups, and consequences of modifying an APK, native library, or device data.

## Relevance to InkTrace
- This repository is relevant to Android security research, APK provenance, static and dynamic analysis planning, reverse-engineering evidence management, and safe reporting of tool limitations.
- Its strongest reusable idea is procedural discipline: classify the target, choose the deliverable form, record independent evidence, and stop rather than apply a nearest-match procedure outside the documented coverage.
- The skill is Android-only and should not be treated as a general mobile reverse-engineering guide.
