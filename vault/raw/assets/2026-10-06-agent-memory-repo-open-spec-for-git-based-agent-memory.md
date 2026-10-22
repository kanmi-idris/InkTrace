---
title: "Agent Memory Repo: open spec for Git-based agent memory"
kind: "project capture"
author: "Cognition / AgentMemoryRepo"
source_url: "https://cognition.com/agent-memory-repo"
related_url: "https://github.com/AgentMemoryRepo/agentmemoryrepo"
tags: ["agent-memory", "git", "open-spec", "agent-skills", "team-memory", "provenance", "memory-management"]
---

# Agent Memory Repo

## Spec summary
Cognition presents Agent Memory Repo as an open specification for keeping agent memory in a Git repository. A short `MEMORY.md` file is the entry point. It links to other Markdown notes, SQL queries, scripts, and files. The repo provides history, merge support, and permissions.

The suggested session loop is to clone the latest memory, search for relevant information, update entries, and then save changes. The Cognition page says to push after each edit. The GitHub README says to commit after each edit.

## Format and maintenance
Markdown entries use one bullet per line, with optional metadata such as `[source: URL; added: YYYY-MM-DD]`. Cross-links use `[[path]]` from the memory root. The spec says to keep `MEMORY.md` short and link to detail files.

A periodic "Dreaming" agent can add patterns across sessions, merge duplicates, remove outdated entries, and check sources to resolve contradictions. The page describes updates without a human in the loop.

## Sharing and installation
The spec describes personal memory, agent swarms, team memory, and multiple users' separate memory folders in one session. It says a user's memory is cloned only if they choose to share it. Repositories retain separate ownership and history.

The GitHub README gives `npx skills add AgentMemoryRepo/agentmemoryrepo --skill agent-memory-repo`. It also gives a Devin plugin command. The README says local memory stays on the same machine unless the user connects a private repository. I did not install the skill or run a trial.

## License and InkTrace boundary
The GitHub README lists an MIT license. This spec allows memory entries to be updated or removed. InkTrace keeps `vault/raw/` immutable. Do not apply a mutable memory-cleanup loop to InkTrace raw evidence without separate safeguards.

## Evidence limits
I inspected the Cognition page and linked GitHub README. I did not install the skill or test its behavior. The page and README describe a specification, not measured performance.
