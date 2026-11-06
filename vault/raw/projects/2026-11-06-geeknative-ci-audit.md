# GeekNative GitHub Actions run audit

## Source

- Run: https://github.com/GeekyAnts/geeknative/actions/runs/42003141372
- Commit: https://github.com/GeekyAnts/geeknative/commit/5f9607b
- Web job: https://github.com/GeekyAnts/geeknative/actions/runs/42003141372/job/127163152365
- Project-creation job: https://github.com/GeekyAnts/geeknative/actions/runs/42003141372/job/127163152197

## Observed result

The run was triggered by a push on Nov 5, 2026, for commit `5f9607b`. GitHub showed a failed status, with four of six checks successful and two failing.

The CLI tests, Android app, iOS app, and documentation deployment passed. The web app and project-creation smoke test failed. The smoke test created the project and installed its npm dependencies, then failed when it ran the web check.

Both failures show a TypeScript TS2322 error at `src/router.tsx:15:44`. The error says the `on` type from a nested `@tanstack/react-query/node_modules/@tanstack/query-core` path is not assignable to the type from the top-level `@tanstack/query-core` path. This capture does not establish whether the cause is dependency resolution or application code. The run may be followed by later fixes.

This was the project's CI run. I did not run or change any tests.
