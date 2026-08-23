---
id: synthesis-themint-and-cbn-regulatory-sandbox
type: synthesis
status: active
confidence: medium
source_ids: [src-2026-08-13-001, src-2026-08-13-002]
updated_at: 2026-08-13
---

# theMint and the CBN Regulatory Sandbox

## Question

How does theMint fit the CBN Regulatory Sandbox Cohort 2 announcement?

## Answer

theMint is a plausible fit for the **Data-Enabled Financial Services (Non-VASP) Track**. Its documented core uses consented banking data to analyse transactions, provide financial coaching, and support credit and risk assessment. These functions align with the track's stated areas of financial inclusion, credit, risk management, operational efficiency, and consumer outcomes. [src-2026-08-13-001][src-2026-08-13-002]

The strongest sandbox application would present theMint as a **consent-based financial intelligence and responsible-credit platform**. The application should focus on testing the financial-data and explainability layer, not claim that sandbox participation authorises a full independent lending marketplace. [src-2026-08-13-001][src-2026-08-13-002]

## Current implementation position

The repository currently demonstrates a backend foundation:

- Fastify API routes for health and transaction review-card contracts.
- BullMQ worker queues for sync, review cards, and advice.
- Prisma models for users, connected accounts, transactions, feedback, budgets, and review cards.
- A documented plan for Mono-based account linking and transaction synchronisation.

The repository does not yet demonstrate live bank synchronisation, payment initiation, direct-debit mandates, credit-bureau integration, loan execution, or a mobile client. [src-2026-08-13-001]

## Recommended sandbox scope

1. Obtain user consent for selected financial accounts and data scopes.
2. Synchronise transaction data through a permitted provider.
3. Generate source-grounded financial facts and behavioural signals.
4. Deliver personal financial guidance.
5. Produce an explainable borrower financial profile.
6. Test transparent lender matching based on lender-defined preferences.
7. Measure consumer benefit, data accuracy, user control, complaints, and risk events.

## Keep outside the first claim

The following functions require separate regulatory and partner analysis:

- Holding customer funds or earning float from customer balances.
- Operating payment or virtual-account infrastructure as an unlicensed platform.
- Creating mandates across all accounts discovered through BVN data.
- Using GSI without an eligible participating financial institution.
- Releasing borrower identity directly to retail lenders after default.
- Treating sandbox participation as a lending, payment, or other operating licence.

The CBN release expressly states that sandbox participation is limited to approved testing parameters and does not grant an operating licence. [src-2026-08-13-002]

## Strategic conclusion

TheMint should apply, if the application window is still open, under the Non-VASP track. Its application should describe a controlled test of consent-based financial-data analysis and responsible-credit tooling. Loan origination, payment movement, mandates, bureau reporting, and collections should be handled through approved partners or excluded from the initial sandbox scope until the regulatory position is confirmed. [src-2026-08-13-001][src-2026-08-13-002]

## Open questions

- Which legal entity would submit the application?
- Which financial-data provider and payment partners would be named?
- What exact test limits and user groups would be proposed?
- Would the pilot test coaching only, or also lender-facing credit profiles?
- Which FCCPC, NDPC, CBN, credit-bureau, and state moneylender approvals are required before any live lending activity?
- Can the current repository reach a demonstrable pilot state before the application deadline?
