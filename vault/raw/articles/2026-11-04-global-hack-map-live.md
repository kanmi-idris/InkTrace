# Global Hack Map live site snapshot

Captured: 2026-11-04
URL: https://globalhackmap.vercel.app/

## Site purpose and features

The site presents cybersecurity incidents on a globe and in live lists. Its UI includes vulnerabilities, breaches, malware, and outages; a search box; product and vendor selection; a daily brief; and “Am I affected?” workflows. It links to agent runbooks and a read-only MCP server. The site says one-click links only pre-fill a prompt for a coding agent; they do not execute a fix by themselves.

The site says incident locations use the city named in reporting, the organisation's headquarters, or the country, and are not placed more precisely than the sources allow. It says an absent result is not proof of safety.

## Status definitions

The site defines statuses as follows:
- Confirmed: acknowledged by the organisation, a regulator, or a filing.
- Reported: covered by the press, but not confirmed by the organisation.
- Claimed: asserted by attackers on a leak site, unverified.
- Precautionary: systems taken offline as a precaution, with no compromise stated.
- Disputed: reported and denied by the organisation.

## Point-in-time live view

During inspection, the interface used the 7-day window and showed 224 sourced incidents. The lists showed 71 CVEs, 224 breaches, 40 malware records, and 5 outages. The organisation summary showed 141 confirmed, 13 reported, 68 claimed, 1 precautionary, and 1 disputed organisation. The site notes that one organisation can appear under multiple statuses. Its update indicator showed a refresh within a few minutes. These are volatile site values, not independently audited totals.

## Observed status mismatch

The map displayed a Harvard University marker as “Confirmed · 850.5K”. The breach list described the item as “ShinyHunters claims Harvard breach exposing 850,500 accounts”. This is an apparent UI status mismatch. It may reflect different sources or stale classification; the underlying event was not independently verified during this capture. Check the linked original evidence before treating the breach as confirmed.

A second visible example, Minutes Quick Services, appeared as “Claimed · 2M”. This is consistent with the site's definition of “Claimed” as an unverified attacker statement.
