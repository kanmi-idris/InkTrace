---
title: Pure CSS Auto-Contrast Text via Relative Color LCH Syntax
kind: paste
captured_at: 2026-08-05 21:43
tags: []
source_url: 
status: inbox
---

# Pure CSS Auto-Contrast Text via Relative Color LCH Syntax

Pure CSS trick that auto-switches text color to black or white based on any background color, using relative color syntax:

.magic {
  --bg: #ff0000;
  background: var(--bg);
  color: lch(from var(--bg) calc((49.44 - l) * infinity) 0 0);
}

- No JS, no media queries.
- Light background -> black text.
- Dark background -> white text.
- Perfect contrast every time.
