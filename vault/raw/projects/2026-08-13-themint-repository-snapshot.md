# theMint repository snapshot

Captured: 2026-08-13
Repository: `/Users/olaidris/Desktop/Code/theMint`
Evidence type: local code and project documentation inspected during InkTrace ingest.

## Product description

theMint is described as a backend-first personal-finance system combining an AI financial coach with a P2P lending marketplace.

The Financial Coach is intended to map a user's banking activity, maintain a source-grounded understanding of financial behaviour, ask targeted questions when evidence is insufficient, and surface personalised ways to improve the user's financial position.

The Borrower Financial Profile is intended to describe financial behaviour for lending assessment. The project documentation distinguishes it from a credit decision or grade.

## Current repository structure

- TypeScript monorepo.
- `apps/api`: Fastify HTTP API.
- `apps/worker`: BullMQ and Redis workers.
- `packages/config`: environment loading and validation.
- `packages/core`: shared domain types and queue names.
- `packages/db`: Prisma client and PostgreSQL schema.
- Supabase PostgreSQL is named in the README.
- Redis and BullMQ are used for background jobs.

## Implemented evidence

- API health endpoint: `GET /health`.
- Demo transaction review card endpoint: `GET /v1/review-cards/demo`.
- Review-card response contract stub: `POST /v1/review-cards/:cardId/respond`.
- The response endpoint states that persistence is not wired yet.
- Worker queues exist for sync, review cards, and advice.
- Worker processors currently log jobs.
- Prisma models include users, connected accounts, transactions, review cards, transaction feedback, budgets, and budget categories.
- The only current transaction provider enum is `MONO`.
- The README lists Mono account authentication and transaction sync, review-card persistence, transaction feedback against budgets and goals, and nightly advice jobs as next steps.

## Lending and governance design recorded in the repository

- The product documents a P2P marketplace model.
- The platform is designed not to hold borrower or lender funds at rest.
- Proposed integrations include account linking, transaction data, identity and KYC, income verification, direct-debit mandates, payment initiation, and credit-bureau data.
- The governance documents identify FCCPC, CBN, NDPC, credit-bureau, state moneylender, payments, and collections issues.
- The documented design prefers consent-based account linking and third-party collection recovery instead of direct borrower-identity release to retail lenders.
- The documented credit design separates an explainable rules-based grade from an internal ML risk score.
- The repository lists the CBN Regulatory Sandbox as an open regulatory question.

## Evidence limits

This is a repository snapshot, not a production audit. The inspected code does not yet demonstrate live bank synchronisation, lending execution, payment initiation, mandate creation, credit-bureau integration, or a mobile client.
