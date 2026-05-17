# Nigerian Fintech Money Modeling: Kobo vs Decimals

Captured from a user-supplied advisory post plus follow-up commentary on 2026-05-03.

Source type:

- User-supplied social-style post and response about financial data modeling.

---

Primary post framing captured from the supplied text:

- The post warns that storing Nigerian money amounts as decimal or float values can create ledger drift.
- It gives an example of a ledger reportedly off by `₦47,300` over three months, attributed to amounts stored as `DECIMAL(10,2)` and float arithmetic across services.

Primary recommendations captured from the supplied text:

1. Store every amount in kobo as `BIGINT`.
2. Convert to naira only at the display boundary.
3. Wrap money in a `Money` type with integer amount plus currency.
4. Round explicitly and differently depending on the use case.
5. Reconcile in kobo against payment-provider or bank settlement files.
6. Stress-test with adversarial fractional values.

Examples and rationale captured from the supplied text:

- `₦150.50` would be stored as `15050`.
- The text argues that code should not “touch a decimal” except at formatting boundaries.
- It frames provider and bank reconciliation files as integer minor-unit systems that should match internal records exactly.

Follow-up commentary captured from the supplied text:

- A second voice pushes back against the strongest version of the advice.
- The follow-up argues that some retail or financial use cases need storage precision beyond two decimal places.
- It gives examples such as:
  - storing up to four decimals for accuracy
  - very small per-item profit values
  - quantities where cost must be apportioned across many individual units
- It argues that frontend display and printed receipts can still hide extra precision while back-office systems retain it.
- It also claims some retail situations round down rather than up, to avoid over-crediting change or overstating value.

Interpretive note:

- The source contains a real modeling disagreement:
  - one side argues for integer minor units everywhere
  - the other argues for higher internal precision in some domains
- That means downstream synthesis should not flatten this into a single universal rule.
