# Naming Complex Conditions and Magic Numbers

Source ID: src-2026-04-14-004
Canonical URL: 
Resource Type: article
Host: 
Mention Count: 1
Original URLs: 

## Captured Text Excerpt
This source focuses on readability by arguing that complex conditions and unexplained numeric literals should be named explicitly when they carry non-trivial intent.

For complex conditions, the source shows how nested logic involving `filter`, `some`, and compound boolean expressions becomes hard to read when left inline. The proposed fix is to introduce names such as `isSameCategory` and `isPriceInRange` so the reader can understand intent without re-evaluating the raw conditional structure every time.

The source also discusses when naming is useful:
- When logic is complex.
- When the logic is likely to be reused.
- When independent unit testing would be useful.

It also notes when naming may not be necessary:
- When the logic is simple and already obvious.
- When the logic is used only once and is not complex.

For magic numbers, the source argues that unnamed numeric literals such as `300` inside a delay call make intent ambiguous. Naming that value as something like `ANIMATION_DELAY_MS` improves readability by encoding the meaning directly in the code.
