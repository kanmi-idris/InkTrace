# Ooyaa live app and proof page snapshot

Captured: 2026-11-01
Sources: https://ooyaa.vercel.app/ and https://ooyaa.vercel.app/proof

## Homepage snapshot

The app labels itself USDC payroll on Arc and says it is live on Arc mainnet. It showed a demo payroll with three payees, 0.01 USDC per payee, an hourly period, and a 0.01 USDC runner tip. At capture, the UI said “24 paydays waiting” and “Funded for 58 more paydays.”

## Proof page snapshot

The proof page says it reads Arc mainnet and runs eight checks. It lists checks for the local build, bytecode match, verified source, factory creation, ordered exactly-once payments, USDC payslips, accounting, and refusal of a second run.

During inspection, the page was still scanning mainnet blocks. Checks C1, C2, and C3 showed PASS, but the proof run had not completed. No overall VERIFIED result was observed.

The page displayed project-reported test counts: 89 Foundry unit and invariant tests, six real-USDC fork tests, and 228 app tests. I did not run these tests.

## Evidence limits

The counters are a live app snapshot and may change. They do not confirm the author's earlier 72 outsider runs and seven self-tests. I did not connect a wallet, initiate a transaction, or wait for all eight proof checks to finish.
