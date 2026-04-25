# InkTrace Agent Guide

This repository powers **InkTrace**, a provenance-first personal knowledge system built around:

- a TypeScript CLI
- an Obsidian-compatible markdown vault
- an inbox-first capture workflow
- strict source grounding for synthesized knowledge

Use this file as the primary project-level operating guide when helping with implementation, maintenance, or content workflows.

---

## 1. Project layout

### Application code

- `src/cli.ts` — CLI entrypoint and command routing
- `src/commands/` — user-facing commands
- `src/services/` — domain/use-case logic
- `src/adapters/` — filesystem, markdown, and frontmatter helpers
- `src/utils/` — path/date/output helpers
- `templates/` — canonical file templates copied into the vault
- `scripts/` — development helpers

### Knowledge vault

- `vault/inbox/` — fast capture area for pasted text, files, and quick notes
- `vault/raw/` — immutable source evidence
- `vault/sources/` — canonical source records
- `vault/wiki/` — synthesized knowledge pages
- `vault/index.md` — primary navigation layer
- `vault/log.md` — append-only operations log
- `vault/system/AGENTS.md` — vault-local content maintenance rules

---

## 2. Core architectural model

InkTrace has a **two-stage knowledge flow**:

### Stage A: low-friction capture

Users should be able to quickly dump information into:

- `vault/inbox/paste/`
- `vault/inbox/files/`
- `vault/inbox/notes/`

This stage should be frictionless.
Do not force users to provide full metadata, source IDs, or perfect file placement up front.

### Stage B: normalization and synthesis

Inbox content is later normalized into:

- `vault/raw/` for immutable evidence
- `vault/sources/` for source records
- `vault/wiki/` for synthesized knowledge pages

The current one-command normalization flow is:

```bash
inktrace ingest inbox
```

---

## 3. Non-negotiable knowledge rules

When working on the vault or any future automation, preserve these rules:

1. **`raw/` is immutable**
   - never rewrite existing evidence files
   - corrections should happen in source records or wiki pages, not by silently mutating evidence

2. **Every normalized source must have a source record**
   - all ingested material must land in `vault/sources/`
   - use stable source IDs like `src-YYYY-MM-DD-NNN`

3. **Wiki claims require citations**
   - factual claims in `vault/wiki/` must cite one or more source IDs like:
     - `[src-2026-04-12-001]`

4. **No citation laundering**
   - a wiki page is not sufficient evidence for a factual claim
   - synthesized pages may guide navigation, but important claims must still trace to real sources

5. **Contradictions must be explicit**
   - do not silently reconcile conflicting evidence
   - write contradictions into the relevant page or create an open question page

6. **Weak evidence becomes uncertainty, not fact**
   - use open-question or low-confidence patterns instead of overstating uncertain claims

---

## 4. Current command model

Primary commands:

```bash
inktrace init
inktrace doctor
inktrace capture paste
inktrace capture note
inktrace capture file
inktrace inbox list
inktrace inbox process
inktrace ingest inbox
inktrace new-source
inktrace log
inktrace rebuild-index
inktrace lint
```

### Preferred user workflow

1. capture quickly
2. review inbox if needed
3. run `inktrace ingest inbox`
4. use an agent to convert source records into wiki pages
5. rebuild index / lint as needed

When adding new commands, optimize for this low-friction workflow instead of making ingestion more complicated.

---

## 5. Implementation guidance for coding agents

### Good changes

- reducing friction in capture
- improving source normalization
- improving citation checks
- improving wiki maintenance workflows
- making Obsidian usage smoother
- adding safe automation that preserves provenance guarantees

### Risky changes

- anything that mutates `raw/` files after ingest
- anything that bypasses source record creation
- anything that writes uncited facts into `wiki/`
- anything that makes the user do more manual metadata work at capture time

### Style guidance

- keep the codebase simple and inspectable
- prefer small command/service functions
- keep path logic centralized in `src/utils/paths.ts`
- keep IO logic in adapters where possible
- avoid adding unnecessary infrastructure, databases, or background services unless clearly justified

---

## 6. If you are asked to generate or update knowledge content

When helping with content generation inside the vault:

1. read `vault/index.md` first
2. inspect relevant `vault/sources/` files
3. inspect `vault/raw/` only when deeper verification is needed
4. update `vault/wiki/` conservatively and with citations
5. update `vault/index.md` if new durable pages are added
6. append a useful summary to `vault/log.md`

---

## 7. If you are asked to improve ingestion UX

Bias toward:

- fewer required arguments
- better defaults
- inbox-first capture
- deferred normalization
- clear command output
- zero data loss

Bias against:

- complex setup
- heavyweight services
- fragile automation
- forcing users to classify content too early

---

## 8. First principle for InkTrace

**Capture should feel effortless. Knowledge should remain traceable.**

If a design improves one of these while damaging the other, rethink it.
