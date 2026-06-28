---
title: pkg-skills — Callstack Incubator (CLI for agent skills from dependencies)
kind: paste
captured_at: 2026-06-23 08:28
tags: [agent-skills, callstack, react-native, cli, dependency-management, ai-agents]
source_url: 
status: inbox
---

# pkg-skills — Callstack Incubator (CLI for agent skills from dependencies)

# pkg-skills — Callstack Incubator

## Source
https://github.com/callstackincubator/pkg-skills

## Overview
CLI by Callstack for recommending and managing React Native agent skills from detected project dependencies. Scans package.json files, compares libraries against a curated lookup table, and uses Vercel's `skills` CLI underneath to report/install/remove skills.

## Features
- Dependency scan across all package.json files in project
- Curated mappings linking RN packages to skills (Callstack, Software Mansion, Vercel, etc.)
- Report mode (dry-run with recommendations)
- Interactive mode (choose action groups, pick skills)
- Auto mode (non-interactive update/install/prune)
- Monorepo-ready (workspace-only, path ignores, per-package details)
- Config files: .pkg-skillsignore, .pkg-skillspreserve, .pkg-skillsdeter
- CI-friendly: --json, --dry-run, --no-mapping-update flags
- Live catalog with offline fallback

## Skills Sources
- Callstack Agent Skills
- Callstack Agent Device Skills
- Software Mansion's Skills
- React Native Testing Library Skills
- Vercel Agent Skills

## Tags
agent-skills, callstack, react-native, cli, dependency-management, ai-agents
