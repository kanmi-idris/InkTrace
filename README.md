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
- `inktrace new-source`
- `inktrace log`
- `inktrace rebuild-index`
- `inktrace lint`

## Daily workflow

1. Capture a source into `vault/raw/` or let `new-source` create a placeholder.
2. Create a source record with `new-source`.
3. Ask your LLM agent to ingest the source into the wiki.
4. Run `rebuild-index` and `lint` after meaningful changes.

## Obsidian

Open the generated `vault/` directory in Obsidian. The vault includes `system/AGENTS.md` and page templates under `system/templates/`.
