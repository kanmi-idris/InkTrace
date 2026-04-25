# Keeping Files That Are Modified Together in the Same Directory

Source ID: src-2026-04-14-002
Canonical URL: 
Resource Type: article
Host: 
Mention Count: 1
Original URLs: 

## Captured Text Excerpt
This source argues for directory structures that keep files modified together in the same place, framing the issue primarily as one of cohesion and dependency visibility.

The problem example is a codebase organized only by module type:
- `components`
- `constants`
- `containers`
- `contexts`
- `remotes`
- `hooks`
- `utils`

The stated drawback is that type-based grouping makes dependencies hard to see. Developers have to inspect the code manually to understand which files belong together, and when a feature is deleted, related code may remain behind as unused leftovers.

The proposed improvement is to keep truly project-wide code in shared top-level directories, while putting feature- or domain-specific code into directories such as `domains/Domain1` and `domains/Domain2`, each with their own `components`, `containers`, `hooks`, `utils`, and related files.

The source argues that this structure makes incorrect cross-domain imports easier to detect and allows whole features to be deleted cleanly by removing a single directory.
