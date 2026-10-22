# SnapCN GitHub repository capture

Captured: 2026-10-12
Repository: https://github.com/shadcn-labs/snapcn
User-supplied URL: https://github.com/shadcn-labs/snapcn?utm_source=x&utm_medium=social&utm_campaign=snapcn_launch
Evidence inspected: repository overview, README, and LICENSE on GitHub. No clone, install, or code audit was performed.

## Repository metadata at capture

- Public repository: `shadcn-labs/snapcn`.
- Main branch: `main`.
- GitHub showed 255 stars, 16 forks, 18 branches, 0 tags, and 433 commits.
- Latest visible commit: `a7120dc`, dated 2026-10-12; GitHub described it as a merge of PR #52.
- The repository contains app, components, registry, docs/content, skills, and a Remotion-related source directory.

## README claims

- SnapCN is a registry of React/Remotion components for product-demo videos, including AI chat streams, terminal sessions, device frames, captions, and scenes.
- The shadcn CLI copies component source and dependencies into the user's project. The README says there is no runtime package to keep as a dependency.
- Example command: `npx shadcn@latest add @snapcn/text-reveal`.
- A project using the components needs Remotion. The README also gives `npx create-video@latest` as a project-creation command.
- The README says a new `create-video` project needs `components.json` and an `@/` alias in both `tsconfig.json` and `remotion.config.ts`.
- The browser editor can compose a video and export MP4 without installing anything. This is a README claim; it was not tested.
- The README lists 21 components: 3 AI chat input, 3 screens/devices, 6 text/title, 2 captions, 3 scenes, 2 logos, 1 social-proof, and 1 effect. It also describes `snap-cn-ui` timeline-driven atoms.
- The README describes an agent skill and gives `npx skills add snapcndev/snapcn --skill snapcn --yes`. This command was not run.
- The README states that SnapCN is MIT licensed and that sponsorship supports continued free components.

## License

GitHub's `LICENSE` page identifies the repository license as MIT. It names copyright holder Sri Nath (snap-cn), 2026. The listed conditions require preserving copyright and license notices. The license disclaims warranty and liability. This capture is not legal advice.

## Evidence limits

The count on this README is 21 components. The product website showed a different count. The inspected pages do not explain the difference, so it is left unresolved. Repository metadata such as stars and commit time can change. No source code was installed, run, or audited.
