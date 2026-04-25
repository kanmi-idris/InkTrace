# InkTrace Agent Rules

## Core model

- `inbox/` is the low-friction capture layer for pasted content, files, and quick notes.
- `raw/` contains immutable source evidence.
- `sources/` contains canonical source records that point at `raw/`.
- `wiki/` contains synthesized, interlinked markdown pages.
- `index.md` is the primary navigation file.
- `log.md` is append-only and records meaningful operations.

## Writing rules

- Allow fast capture into `inbox/` without requiring full normalization up front.
- Treat `inbox/` as unprocessed intake until items are converted into `raw/` and `sources/`.
- Never modify an existing file in `raw/`.
- Every new source must get a source record in `sources/`.
- Every factual claim in `wiki/` must cite one or more source IDs using `[src-YYYY-MM-DD-NNN]`.
- Do not treat a wiki page as sole evidence for a factual claim.
- If evidence conflicts, write the contradiction explicitly.
- If evidence is weak, convert the claim into an open question or low-confidence note.

## Query rules

- Use `index.md` first for navigation.
- Use `wiki/` pages to narrow the search.
- Verify important claims against `sources/` and, when needed, `raw/`.
- Durable answers can be saved into `wiki/synthesis/`.

## Maintenance rules

- Update `index.md` after meaningful wiki changes.
- Append an entry to `log.md` after ingest, synthesis, lint, or notable maintenance work.
- Keep file names short, lowercase, and slugged.
