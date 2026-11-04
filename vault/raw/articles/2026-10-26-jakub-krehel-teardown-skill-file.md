# `/teardown` `SKILL.md` snapshot

Captured: 2026-10-26
Source URL: https://github.com/jakubkrehel/skills/blob/main/skills/teardown/SKILL.md
Repository: https://github.com/jakubkrehel/skills
Latest file commit shown: `a70b0bf`, titled `refactor: rename /technical-drawing to /teardown`
File size shown: 129 lines, 10.3 KB

## Purpose and evidence handling

The skill says it creates technical illustrations from objects, descriptions, photographs, CAD models, or concepts. It tells agents to distinguish supplied geometry and dimensions from features estimated from photos. For hidden or unspecified construction, it says to omit details, request evidence, or label them illustrative. For a fictional object, it says to label the sheet as a concept.

## View and model guidance

The skill says to choose the smallest view set that explains the requested construction. Its examples include exploded axonometric views, assembled views, aligned orthographic views, and sections. It says all views and any parts list should come from one model.

It recommends building the silhouette and major volumes first, then interfaces, cavities, fasteners, and functional details. It says to remove lines that do not explain shape, manufacture, or assembly. It points to bundled geometry helpers, linework, view, and annotation references.

## Rendering and delivery workflow

The skill directs an agent to render and inspect the deliverable, correct visible failures, and test the standalone preview page and its downloaded bytes. It says to report reconstruction assumptions, verified output size, unavailable formats, and unresolved defects. It asks the author to deliver the preview page and drawing files.

## Evidence limits

This is a capture of the skill file’s instructions. I did not follow the instructions, run scripts, generate drawings, or test downloads. The repository README is [src-2026-10-26-007]. The interactive preview is [src-2026-10-26-009].
