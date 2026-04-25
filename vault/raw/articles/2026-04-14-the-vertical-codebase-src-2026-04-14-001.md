# The Vertical Codebase

Source ID: src-2026-04-14-001
Canonical URL: https://tkdodo.eu/blog/the-vertical-codebase
Resource Type: article
Host: tkdodo.eu
Mention Count: 1
Original URLs: https://tkdodo.eu/blog/the-vertical-codebase

## Captured Text Excerpt
This article argues against horizontal project structures such as `components / hooks / types / utils`, because they group code by technical type rather than by what the code actually does. The author’s claim is that this scales poorly: related code ends up split across arbitrary directories, while large top-level folders become difficult to navigate or reason about.

The proposed alternative is a vertical structure: group code by functionality, domain, route, page, or other logical unit so that code that changes together lives together. In this framing, a “vertical” can contain components, hooks, types, utils, constants, and anything else that belongs to the same functional area.

The article emphasizes several supporting ideas:
- Code colocation reduces cognitive load because a reader does not need to jump across many folders to understand or modify a logical unit.
- High cohesion and low coupling are improved when code is grouped by meaningful boundaries instead of technical layer.
- Shared code does not invalidate the model; it can become its own vertical, or live inside a design-system vertical.
- Boundaries still need enforcement, for example through monorepos, package exports, or lint rules such as `eslint-plugin-boundaries`.

The author also explicitly argues that AI agents benefit from the same conditions humans benefit from: boundaries, constraints, fast feedback loops, linting, TypeScript, and tests. The claim is that agents work better in codebases that are easy to navigate and that vertical structure helps provide those conditions.
