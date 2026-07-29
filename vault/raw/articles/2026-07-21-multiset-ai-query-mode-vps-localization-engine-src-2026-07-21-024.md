Source: https://docs.multiset.ai/multiset/basics/localization/query-mode
Title: Multiset AI — Query Mode (VPS Localization Engine Selection)
Author: Multiset (docs.multiset.ai / multiset.gitbook.io)
Retrieved: 2026-07-21

---

Query mode selects which localization engine handles a **Single Frame Query** (`/vps/map/query` and `/vps/map/query-form`). Trade latency for accuracy per-request without changing the map or rest of the request.

## Modes

| Mode | Speed | Accuracy | Use for |
|------|-------|----------|---------|
| `vps-1` (default) | Fastest (~2s) | Standard | Real-time, interactive localization |
| `vps-2` | Slower (~3-4s) | Up to **15% higher recall** + improved accuracy | Offline/background workflows, difficult scenes |

### VPS-1 (Default)
- Returns pose in ~2 seconds
- For live AR, in-app navigation, continuous re-localization
- Best for well-textured, non-repetitive scenes

### VPS-2 (Deep Search)
- Searches more of the map before estimating pose
- Up to 15% higher recall, improved accuracy
- For challenging environments (long corridors, basements, warehouses, transit stations)
- Recommended pattern: try `vps-1` first, fall back to `vps-2` when `poseFound: false` or low confidence

## API Usage
- Pass `queryMode` parameter alongside usual query parameters
- Optional, defaults to `vps-1`
- Allowed values: `vps-1`, `vps-2`
- JSON body: `{"queryMode": "vps-2", "mapCode": "...", "queryImage": "...", "cameraIntrinsics": {...}}`
- Form-data: `queryMode: vps-2` as plain form field
- Only affects Single Frame Query; no effect on Multi Frame Query
