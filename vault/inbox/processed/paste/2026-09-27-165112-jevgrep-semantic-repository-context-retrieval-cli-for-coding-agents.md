---
title: "jevgrep: Semantic Repository Context Retrieval CLI for Coding Agents"
kind: "paste"
captured_at: "2026-09-27 16:51"
tags: ["coding-agents", "code-search", "context-retrieval", "semantic-search", "developer-tools", "typescript", "cli", "jev", "agent-skills", "vercel-ai-gateway", "open-source", "mit", "site-reported"]
source_url: "https://github.com/dzhng/jevgrep"
status: "inbox"
---

# jevgrep: Semantic Repository Context Retrieval CLI for Coding Agents

Source checked: 2026-09-27.

## Repository snapshot
- dzhng/jevgrep is a public MIT-licensed TypeScript repository for a CLI named jg.
- The GitHub API snapshot reports 523 stars, 29 forks, five open issues, and TypeScript as the primary language. These repository metrics are volatile.
- The README describes the project as a way to find relevant code by asking what it does.

## Product behavior
- A user gives jg a repository question and a search root.
- The CLI explores the repository hierarchy, identifies relevant files and declarations, and returns a summary, reading leads, file locations, and selected verbatim source excerpts.
- It keeps useful file locations even when it cannot confidently produce an excerpt. It marks incomplete results instead of forcing every search into a fixed result count.
- The output is retrieval evidence for the coding agent. It is not a generated implementation or a guarantee that every relevant file was found.
- Direct reads or ordinary search tools remain appropriate when the user already knows the exact path or symbol.

## Retrieval design
- The architecture uses a directory frontier instead of uploading the entire repository root before discovery.
- Directory decisions use child names and metadata. Reached files are classified from content fragments rather than names alone.
- A local lookahead can cross a thin wrapper directory, and an additional anchor pass can reconsider related code around a selected candidate.
- Python and TypeScript/JavaScript receive declaration-aware handling. Other or unparsable text uses a fallback chunk strategy.
- The design keeps usefulness, declaration locations, and immediately included source as separate decisions.
- The project states that traversal keeps every file that passes its relevance criteria. It does not impose a top-two result rule.

## Agent integration
- The repository includes a canonical agent skill that tells an agent when to call jg, how to read returned excerpts, how to scope a search, and how to handle incomplete results.
- Installing the npm CLI is separate from installing the skill. The documented commands are jg skill or npx skills add dzhng/jevgrep --skill jevgrep.
- The skill says to check for jg first, avoid repeated searches when the required context is already known, and fall back to ordinary discovery when setup or credentials block retrieval.
- The skill does not install itself or edit agent configuration during a normal search.

## Setup and data handling
- The CLI requires Node.js 22 or newer on macOS or Linux.
- Authentication selects a provider and saves the key in an owner-only configuration file. Documented providers include Vercel AI Gateway, TypeSafe, OpenRouter, and OpenCode Zen.
- Searches send eligible source content to the saved provider. Default filesystem filtering excludes hidden, dependency/build, binary, and obvious credential files, but the project warns that filtering is not a guarantee that sensitive content is removed.
- Evaluation answers are cached locally by default. jg writes its result to stdout and does not create report files.
- No package installation, authentication, repository checkout, or runtime execution was performed for this capture.

## Performance evidence and limits
- The README reports about 40% lower full coding-agent cost in one ten-task SWE-bench repeat, with Sol cost falling from $7.62 to $4.52 when Jev costs were excluded.
- That repeat solved seven of ten tasks with jg and eight of ten with the saved baseline. The project presents this as a cost reduction with a quality tradeoff, not as equal or better solve quality.
- The repository records an earlier separate run at six of ten tasks and $5.54. Results were not pooled, and the baseline was not rerun.
- The evaluation used a tuned Python subset, one fixed baseline, and one model and harness. The project explicitly says this does not establish general savings, faster execution, language-wide performance, or better results for every coding agent.
- The architecture treats Jev as a relevance classifier and retrieval component. The caller still owns explanation, implementation, testing, and verification.

## Relevance to InkTrace
- Jevgrep is relevant to agent-assisted codebase discovery and provenance-aware context retrieval.
- Its distinction between evidence, reading leads, and generated answers aligns with InkTrace's rule that retrieved material must not be mistaken for synthesized truth.
- Its source-transfer warning is important for any workflow that sends repository content to an external model provider.
