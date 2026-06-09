# mapcn API Reference

Captured from the user-supplied docs URL and pasted API-reference text on 2026-05-31.

Canonical URL:
https://www.mapcn.dev/docs

Specific docs surface captured:
- API Reference

Relationship to earlier source:
- This is a companion source to `src-2026-05-01-004`, which captured the high-level `mapcn` repository and docs positioning.
- This record focuses on the detailed component anatomy and API surface.

Core framing captured from the API reference:

- `mapcn` is built on top of MapLibre GL JS.
- Most components extend native MapLibre options.
- The docs explicitly refer readers to the MapLibre Map API for additional options beyond the documented component props.

Component anatomy captured from the API reference:

```tsx
<Map>
  <MapMarker longitude={...} latitude={...}>
    <MarkerContent>
      <MarkerLabel />
    </MarkerContent>
    <MarkerPopup />
    <MarkerTooltip />
  </MapMarker>

  <MapPopup longitude={...} latitude={...} />
  <MapControls />
  <MapRoute coordinates={...} />
  <MapArc data={...} />
  <MapClusterLayer data={...} />
</Map>
```

Root `Map` component details captured from the API reference:

- Initializes MapLibre GL and provides context for child components.
- Automatically handles light and dark theme switching.
- Extends `MapOptions` from MapLibre GL, excluding `container` and `style`.
- Relevant props include:
  - `children`
  - `className`
  - `theme`
  - `styles`
  - `projection`
  - `viewport`
  - `onViewportChange`
  - `loading`
- Controlled viewport mode is supported through `viewport` plus `onViewportChange`.
- Globe mode can be configured through `projection` with `{ type: "globe" }`.

`useMap` hook details captured from the API reference:

- Must be used inside a `Map`.
- Returns:
  - `map`
  - `isLoaded`
- The `map` value is the underlying MapLibre map instance.

Controls details captured from the API reference:

- `MapControls` renders map control buttons.
- Supported controls include:
  - zoom
  - compass
  - locate
  - fullscreen
- It supports positioning through:
  - `top-left`
  - `top-right`
  - `bottom-left`
  - `bottom-right`
- `onLocate` receives user coordinates when location is resolved.

Marker and popup details captured from the API reference:

- `MapMarker` positions marker-related child components and extends MapLibre `MarkerOptions` excluding `element`.
- Marker callbacks include:
  - click
  - mouse enter
  - mouse leave
  - drag start
  - drag
  - drag end
- `MarkerContent` renders custom marker visuals and defaults to a blue dot.
- `MarkerPopup` opens on marker click.
- `MarkerTooltip` appears on hover and auto-dismisses on hover out.
- `MarkerLabel` renders a label above or below marker content.
- `MapPopup` provides standalone popups that do not need to be attached to markers.
- Popup components intentionally exclude some MapLibre popup styling props to prevent style conflicts and use component-level styling instead.

Route details captured from the API reference:

- `MapRoute` renders line routes from coordinate arrays.
- It supports:
  - custom IDs
  - color
  - width
  - opacity
  - dash patterns
  - click and hover interactions
  - an `interactive` flag

Arc details captured from the API reference:

- `MapArc` renders curved lines between coordinate pairs using a quadratic Bezier in longitude/latitude space.
- It is implemented as a MapLibre line layer.
- It accepts MapLibre line paint and layout props.
- It supports MapLibre expressions for per-feature styling.
- It supports:
  - `curvature`
  - `samples`
  - `paint`
  - `layout`
  - `hoverPaint`
  - click and hover callbacks
  - `beforeId` layer insertion

Cluster details captured from the API reference:

- `MapClusterLayer` renders clustered point data using native MapLibre GL clustering.
- It accepts GeoJSON data or a URL to fetch GeoJSON.
- It supports:
  - `clusterMaxZoom`
  - `clusterRadius`
  - cluster colors
  - cluster thresholds
  - unclustered point color
  - point click callbacks
  - cluster click callbacks
- If no cluster click callback is provided, clicking a cluster zooms into it.
- It supports generic typing for feature properties, for example `MapClusterLayer<MyProperties>`.

Interpretive note:

- This source is strongest as API-surface evidence. It confirms that `mapcn` is not just a styled map wrapper; it exposes a composable component tree around MapLibre primitives while still keeping escape hatches to raw MapLibre behavior, feature-state styling, controlled viewport state, and native clustering.
