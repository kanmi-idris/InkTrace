# Arc official documentation: USDC as the gas token

Captured: 2026-11-01
Source URL: https://docs.arc.io/arc/references/contract-addresses
Publisher: Arc documentation

Arc's documentation says USDC is Arc's native EVM asset and is used to pay gas fees. It lists the optional ERC-20 USDC interface at `0x3600000000000000000000000000000000000000`, with six decimals.

The documentation distinguishes the native gas balance, which uses 18 decimals, from the ERC-20 interface, which uses six decimals. It says both interfaces share the same underlying balance.

This supports the post's general statement about gas on Arc. It does not verify any specific Ooyaa runner's fee or tip. See [src-2026-11-01-004].
