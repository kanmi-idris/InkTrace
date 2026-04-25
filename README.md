# InkTrace

InkTrace is a provenance-first personal knowledge system built for Obsidian, markdown, and an LLM maintenance workflow.

## Principles

- `raw/` is immutable evidence.
- `sources/` contains canonical source records.
- `wiki/` contains synthesized knowledge.
- factual claims require source citations.
- contradictions are explicit, not silently merged.

## Quickstart

```bash
npm install
npm run build
npm run bootstrap:vault
npm run doctor
```

## Super-simple capture

Paste whatever is on your clipboard into the inbox:

```bash
node dist/src/cli.js capture paste --title "Interesting article" --tags ai,research
```

Create a quick tagged note:

```bash
node dist/src/cli.js capture note --title "Idea from conversation" --tags idea,follow-up --content "This might be useful later."
```

Drop a file into the inbox:

```bash
node dist/src/cli.js capture file --path "/path/to/file.pdf" --tags paper,ml
```

See what is waiting in the inbox:

```bash
node dist/src/cli.js inbox list
```

Normalize everything in the inbox into `raw/` and `sources/`:

```bash
node dist/src/cli.js inbox process
```

Or do the whole low-friction normalization cycle in one command:

```bash
node dist/src/cli.js ingest inbox
```

Create a source record:

```bash
node dist/src/cli.js new-source --type article --title "LLM Wiki" --url "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
```

Refresh the index and run lint checks:

```bash
node dist/src/cli.js rebuild-index
node dist/src/cli.js lint
```

## Commands

- `inktrace init`
- `inktrace doctor`
- `inktrace capture paste`
- `inktrace capture note`
- `inktrace capture file`
- `inktrace inbox list`
- `inktrace inbox process`
- `inktrace ingest inbox`
- `inktrace new-source`
- `inktrace log`
- `inktrace rebuild-index`
- `inktrace lint`

## Daily workflow

1. Dump content into `vault/inbox/` using `capture paste`, `capture note`, or `capture file`.
2. Use `inbox list` to review what is waiting.
3. Run `ingest inbox` when you want InkTrace to normalize inbox items into `raw/` and `sources/`, refresh the index, and lint the vault in one pass.
4. Ask your LLM agent to ingest the resulting source records into the wiki.

## Obsidian

Open the generated `vault/` directory in Obsidian. The vault includes `system/AGENTS.md` and page templates under `system/templates/`.
