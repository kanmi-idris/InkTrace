# Seven cool JavaScript libraries You should know about

Captured from the user-supplied URL and pasted article text on 2026-05-31.

Canonical URL:
https://neciudan.dev/7-cool-javascript-libraries-you-might-want-to-use

Article metadata captured:
- Title: Seven cool JavaScript libraries You should know about
- Author: Neciu Dan
- Published: May 9, 2026
- Category/tag: JavaScript
- Length shown on page: 16 min read

Core framing captured from the article:

- The article presents seven focused JavaScript and TypeScript libraries that solve recurring frontend or full-stack development problems.
- The author explicitly says he is not associated with the projects.
- The article is positioned as a practical scan: each library has a clear job and a payoff that should be felt quickly.

Libraries captured:

## Knip

- Purpose: find unused files, exports, dependencies, and devDependencies in JavaScript and TypeScript projects.
- Suggested command: `npx knip`.
- Recommended config points to real entry points and project files.
- The article highlights `--production` for scoping analysis to production code, excluding tests and Storybook stories.
- CI usage is suggested with `--reporter compact`.
- Caveats: best for simpler single-package projects; complex monorepos, dynamic loading, or custom loaders can cause false positives.

## Nuqs

- Purpose: manage React URL state through query parameters.
- Example API: `useQueryState`, `parseAsInteger`, and `parseAsString`.
- The article frames Nuqs as a way to make filters, pagination, sort order, modal state, and tabs survive refreshes and remain shareable.
- It supports parsers for numbers, booleans, dates, JSON, arrays, and string enums.
- It supports throttling, batching, server-side rendering, shallow updates, and several routers including Next.js, React SPA, Remix, React Router, and TanStack Router.
- Caveat: SSR and multi-router setups need care so query state is available consistently during hydration.

## ts-pattern

- Purpose: exhaustive, type-safe pattern matching and type narrowing in TypeScript.
- The article highlights `.exhaustive()` as the key value: adding a new union variant breaks the build until all cases are handled.
- It contrasts ts-pattern with the manual TypeScript `never` exhaustiveness trick.
- It notes pattern support through the `P` namespace, including nested object shapes and predicate matches.
- Main use cases: reducer actions, multiple-shape API responses, and UI state rendering.

## Orval

- Purpose: generate typed API clients, hooks, schemas, and mocks from OpenAPI specifications.
- Example output mode: `tags-split`.
- The article frames Orval as a way to remove schema drift between backend OpenAPI definitions and frontend API clients.
- It notes generation for React Query, SWR, Vue Query, optional Zod validation, and MSW mocks.
- The article describes a pipeline where backend schema changes produce TypeScript errors at affected frontend call sites.

## Zod

- Purpose: runtime validation and TypeScript type inference from reusable schemas.
- The article emphasizes the schema-as-type pattern: define the schema once and infer the TypeScript type.
- It recommends parsing at application boundaries: API responses, form input, and localStorage reads.
- It mentions integrations with React Hook Form, tRPC, Astro, and Next.js Server Actions.
- Caveat: bundle size can be larger than expected.
- It contrasts Zod with Valibot, which is described as smaller and more tree-shakeable but with a less mature ecosystem.

## Biome

- Purpose: faster unified linting and formatting as a replacement for ESLint plus Prettier in many projects.
- Suggested setup: install `@biomejs/biome`, run `npx biome init`, then use `biome check` and `biome check --write`.
- The article emphasizes Rust implementation and much faster feedback loops than ESLint plus Prettier.
- It notes Biome 2.x features such as `useExhaustiveDependencies`, type-aware linting, domain-grouped rules, and GritQL-based custom rule patterns.
- Caveat: ESLint still has broader niche plugin coverage, so some projects may temporarily run both tools.

## ofetch

- Purpose: lightweight fetch wrapper with JSON handling, error handling, retries, timeouts, base URLs, and interceptors.
- The article frames ofetch as the common wrapper teams write themselves around native `fetch`.
- It auto-stringifies request bodies, sets JSON headers, parses responses, and throws on non-2xx responses.
- `FetchError` exposes parsed error bodies through `error.data`.
- It supports browsers, Node, Workers, and Bun.
- The article pairs ofetch with Orval and Zod: Orval generates call sites and schemas, ofetch handles transport behavior, and Zod validates edge cases outside the generated path.

Interpretive note:

- This source is useful as a frontend tooling checklist rather than a deep benchmark or independent comparative study.
- Orval already has a separate official-docs source in the vault; this article is useful mainly because it shows how Orval fits into a broader frontend workflow.
