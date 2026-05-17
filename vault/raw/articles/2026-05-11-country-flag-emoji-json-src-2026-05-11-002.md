# country-flag-emoji-json

Captured from the public JSON payload on 2026-05-11.

Canonical URL:
https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json

---

Dataset shape captured from the public payload:

- JSON array of country or territory records.
- Each visible record includes:
  - `name`
  - `code`
  - `emoji`
  - `unicode`
  - `image`

Examples visible in the payload:

- `{"name":"Andorra","code":"AD",...,"image":".../AD.svg"}`
- `{"name":"United Arab Emirates","code":"AE",...,"image":".../AE.svg"}`
- `{"name":"Nigeria","code":"NG",...}` (expected in the dataset by pattern, though not visible in the first displayed slice)

Observed characteristics:

- The payload is versioned at `2.0.0`.
- The `image` field points to SVG assets under the same jsDelivr package path.
- The `unicode` field stores regional-indicator code points in `U+...` format.
- The `emoji` field appeared empty in the visible portion of the payload captured from the CDN response.

Interpretive note:

- This source fits the catalog as a lightweight country-and-flag dataset for frontends, onboarding forms, localization utilities, or any code path that needs ISO-style country codes paired with display assets.
