---
title: OSII Mini - Open Source Ultra Low-Field MRI for Education
kind: paste
captured_at: 2026-07-25 19:52
tags: []
source_url: 
status: inbox
---

# OSII Mini - Open Source Ultra Low-Field MRI for Education

https://github.com/LilisProtoLab/osii_MRI — OSII Mini: open source ultra low-field MRI for education. Collaboration initiated by Lili's Proto Lab at Utrecht University (uu.nl/lpl). Aims to prepare hands-on workshop for student teams to replicate an OSII-inspired functioning MRI.

Magnet specs (Halbach Array):
- 120 mm inner diameter
- DSV 100×100×100 mm
- 396 magnets (12×12×12 mm)
- 50 mT
- ~€1,200 for completed magnet
- Glue-free design using lids instead of glue (change from OSII mini by Dr. Joshua Harper / Sustainable MRI Lab)

Key components needed for MRI:
1. Uniform B0 magnetic field (Halbach Array)
2. Gradient coils (x, y, z) for spatial encoding
3. RF coils for send/receive pulses
4. Electronics for imaging pulse sequences
5. Software for control and image reconstruction

Build workflow:
- Verify field uniformity with 3D scanner (convert 3D printer)
- Shimming: correct ~15000 ppm raw uniformity down to <3000 ppm
- Gradient coil construction
- RF coil design
- MRI consoles tested: Kea2 (Magritek), OCRA (STEMlab/Red Pitaya)

Team: Utrecht University (Sanli Faez lead, Zachary Meredith, Low Field Legends class 2024), Universidad Paraguayo Alemana (Joshua Harper, Rodney Rojas), NIST Boulder (Stephen Ogier, Katy Keenan), NYU ITP (Greg Shakar).

License: CERN OHL v2 - Weakly Reciprocal. 222 commits, 75 stars, 13 forks.

Related projects: OSI2 ONE, OCRA Console, Earth-field NMR, Halbach MRI Designer, Table top MRI scanner, Open Source relaxometry.
