---
title: "Appduct: Secure Function Calls into Running React Native, iOS, and Android Apps"
kind: "paste"
captured_at: "2026-09-23 04:58"
tags: ["callstack", "appduct", "react-native", "ios", "android", "mcp", "e2e-testing", "developer-tools", "debugging", "security", "agents", "mit"]
source_url: "https://incubator.callstack.com/appduct/"
status: "inbox"
---

# Appduct: Secure Function Calls into Running React Native, iOS, and Android Apps

## What it is
Appduct is an open-source Callstack Incubator tool that lets a terminal, test runner, or AI agent call explicitly registered functions inside a running React Native, iOS, or Android app. It is designed to remove repetitive E2E setup actions such as login, onboarding dismissal, cart seeding, feature-flag changes, screen navigation, and state inspection. The app exposes only the functions its developers register; Appduct does not provide a hidden debug menu or arbitrary code execution.

GitHub API metadata checked at capture time reports 32 stars, 0 forks, MIT licensing, TypeScript as the primary repository language, repository creation on 2026-03-23, and a latest update on 2026-09-23. The repository's latest visible release commit is v0.11.1.

## Tool registration and invocation
In React Native, a component registers a named tool with a description, a Zod input schema, and an async handler through useAppductTool from @appduct/react-native. The hook registers once per mount and is documented to keep the handler connected to current closed-over state. Native apps register equivalent tools from Swift or Kotlin.

A registered tool can be called from the CLI with appduct invoke and JSON input, or from a test through the appduct/client connect and call APIs. The CLI and MCP server discover the app's deep-link scheme from app.json, Info.plist, or build.gradle, so the basic setup does not require a separate manual scheme configuration.

## Agent integration
Appduct exposes the running app to MCP clients such as Claude Code and Cursor through one MCP server configuration. The repository says the agent interacts through three fixed MCP tools: appduct_list_tools, appduct_describe_tool, and appduct_call_tool. This avoids registering every app-specific tool as a separate MCP definition. A CLI-oriented alternative is the Appduct agent skill, installed through the callstackincubator/appduct skill package.

## Architecture
The architecture document describes a long-lived daemon on the operator machine. The CLI, MCP server, and other local clients communicate with the daemon through a Unix-domain socket. The daemon manages device sessions, creates bootstrap links, hosts the TLS listener, provides the MCP proxy, and applies policy and audit behavior. Connected devices reach the daemon over pinned wss:// connections. One daemon can serve multiple device sessions at the same time.

The design aims to survive Metro reloads, app backgrounding, and network flaps without requiring a new host process or deep link during the native app process's reconnect grace period. If the app process dies, a fresh bootstrap is required because resume credentials are not persisted to disk.

The project supports three app integration paths:

- React Native through @appduct/react-native. The official site documents iOS 15.1+ and Android with the New Architecture, using Expo development builds or bare apps.
- Native iOS through AppductCore, written for Swift and installable with Swift Package Manager or CocoaPods.
- Native Android through com.callstack.appduct:core, written for Kotlin and distributed through Maven Central.

The README also documents Android 7.0/API 24+ for the native Android path, Node 20+ for the CLI, and a no-op Android artifact used when the native functionality is excluded from release builds.

## Build inclusion
Appduct is included in debug builds by default and is compiled out of release builds by default. The build-variants documentation says this is a real linking or compilation decision, not a runtime flag that leaves the full implementation inside every binary. APPDUCT_ENABLED can opt the native implementation into a release or internal build, or exclude it from debug and release variants. The JavaScript half also needs the withAppduct Metro helper for complete bundle-time replacement with the no-op entry. appduct doctor checks the built artifact instead of trusting configuration alone.

This distinction matters: disabling trust or registering no tools is not the same as removing Appduct from the binary. The documentation says removing the native module and swapping the JavaScript entry both matter when a build must not carry the feature.

## Security model
The security documentation describes TLS over wss:// and SHA-256 SPKI pinning for the daemon's certificate key. With pinned trust, the app accepts only configured host-key fingerprints. Bootstrap links carry short-lived, single-use session data and are not intended to act as permanent credentials. The documented private-LAN restriction can require bootstrap links to target local IPv4 addresses.

The security model has important limits. A compromised operator machine can read the daemon key or Unix socket and control connected sessions. A malicious app build can register any tools its own code chooses. Appduct does not defend against either case. The documentation also describes a weaker trust: link mode, which trusts a pin delivered in the bootstrap link when no embedded pins are configured. The project recommends embedded pins for production or internal-distribution builds.

Tool registration is the app-side allowlist. A tool can be enabled or disabled through an app-owned build flag, and the documentation warns against using __DEV__ as the only gate for destructive tools because release-signed internal testing builds may still need controlled tools. Destructive tools should be withheld from the build when appropriate, not merely denied by daemon policy.

The daemon can apply policy and write JSONL audit records for tool calls. The security documentation explicitly treats daemon policy and audit as operator conveniences, not protection against a hostile process on the operator's own machine. The local Unix socket is protected by filesystem permissions, and any same-user process that can reach it has the daemon's effective access.

## Intended use and boundaries
Appduct targets faster setup and controlled app inspection. It does not replace all end-to-end UI testing, expose arbitrary code execution, provide anonymous remote access, or treat a deep link alone as proof of authority. The intended model is a small, explicit tool surface that agents and tests can discover and call.

## Evidence boundary
The official Appduct landing page, GitHub README, architecture document, security document, and build-variants document were inspected. GitHub API repository metadata was checked separately. I did not install Appduct, run its CLI, connect a device, inspect a built artifact, or test the TLS/pinning flow. Claims about surviving reloads, backgrounding, and flaky Wi-Fi are documented project behavior, not independently reproduced here.

## Sources
- https://incubator.callstack.com/appduct/
- https://github.com/callstackincubator/appduct
- https://github.com/callstackincubator/appduct/blob/main/docs/ARCHITECTURE.md
- https://github.com/callstackincubator/appduct/blob/main/docs/SECURITY.md
- https://github.com/callstackincubator/appduct/blob/main/docs/BUILD-VARIANTS.md
