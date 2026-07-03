---
title: Nigeria Telecom Identity Risk — SIM Swap, Number Recycling & Fintech Architecture Gap
kind: paste
captured_at: 2026-07-01 04:17
tags: [nigeria, sim-swap, fraud, fintech, telecom, ncc, cbn, chenosis]
source_url: https://x.com/smartnakamoura
status: inbox
---

# Nigeria Telecom Identity Risk — SIM Swap, Number Recycling & Fintech Architecture Gap

Thread by Smart (@smartnakamoura) on telecom identity risk in Nigerian financial services.

NCC data: Nigerians lost ~₦12.5 billion to telecom-related financial crimes (2019–2023). SIM-swap gets attention but number recycling is the underdiscussed problem.

Two fraud mechanisms:

1. Classic SIM swap — fraudster convinces MNO to issue replacement SIM using stolen/socially engineered info. Once number moves to their SIM, they receive OTPs and verification messages.

2. Number recycling — if a number stays inactive long enough, regulations allow it to be recycled and assigned to a new subscriber. Banks/services not aware → new owner receives banking SMS, transaction notifications. No exploit, no malware. Just two systems that no longer agree on who controls the number.

Core assumption many systems quietly make: a phone number is a permanent identifier.

MTN's position: subscribers don't permanently own numbers — they continue using numbers allocated by the operator as long as they remain active under applicable rules. Different security model than what banks assume.

Architecture problem — visibility gap:
- Telcos know when SIM is swapped
- Telcos know when number is recycled
- Banks know which customer registered that number
- Customers assume everyone shares same information
- They don't. That's the gap fraudsters exploit.

MTN says the missing piece already exists through Chenosis (API platform). Banks can query: Has this SIM recently been swapped? Is this number still active? Has it been recycled? Those signals could trigger additional verification before sensitive actions.

Policy response: CBN and NCC announced Telecom Identity Risk Management Portal (TIRM) rollout to help banks and telecom operators verify recycled, swapped, and blacklisted numbers.

Lendsqr CEO Adedeji Olowe: some solutions don't require new technology — better inactivity reminders, email recovery linked to phone numbers, routine bank-side checks for number status, customer awareness before recycling.

Key insight: phone numbers gradually became a core identity layer for Nigerian financial services, even though they weren't designed for that purpose. Authentication can no longer rely on assumptions acceptable 10 years ago.
