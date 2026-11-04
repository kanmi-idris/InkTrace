# Ooyaa GitHub README and security threat model snapshot

Captured: 2026-11-01
Sources: https://github.com/ramakrishnanhulk20/Ooyaa and `docs/security/threat-model.md`

## Repository and deployment details

The public repository describes Ooyaa as USDC payroll on Arc. It lists Arc mainnet chain ID 5042 and these addresses:

- PaydayFactory: `0x18C7c54b0E521B7a34D79608ac8CfA91466eDc9b`
- Demo payroll: `0xf03714EA422237BCb5d1B0BDd40B4Ff22B13717A`
- USDC ERC-20 interface: `0x3600000000000000000000000000000000000000`

The README says the demo has three payees, 0.01 USDC per payee, hourly periods, and a 0.01 USDC tip. It documents permissionless `run()` calls, sequential exactly-once periods, and a tip to the runner. It reports 89 unit/fuzz/invariant tests, six real-USDC fork tests, and 228 app tests as of 2026-10-31. These are project-reported results.

## Security and limitations

The README and threat model state that no external audit has been done. The threat model says Circle can blocklist addresses, which could freeze funds held by an affected payroll. It also describes Arc's validator set as permissioned and recognizes transaction delay or censorship as an assumption. Salaries and payee addresses are public on chain.

The README says the contracts have no admin, pause, or upgrade path. This is a project statement, not an independent audit finding.

## Evidence limits

Repository documentation is author-provided. I did not install dependencies, run tests, inspect every source file, or submit a transaction. The live proof page was still scanning. The factory explorer record is [src-2026-11-01-004].
