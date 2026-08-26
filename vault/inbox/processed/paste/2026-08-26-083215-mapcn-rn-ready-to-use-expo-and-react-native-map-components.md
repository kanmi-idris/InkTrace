---
title: "mapcn-rn: Ready-to-Use Expo and React Native Map Components"
kind: "paste"
captured_at: "2026-08-26 08:32"
tags: ["mapcn", "react-native", "expo", "maps", "maplibre", "mapbox", "nativewind", "uniwind", "markers", "routes", "heatmaps", "clustering"]
source_url: "https://mapcn-rn.dev/"
status: "inbox"
---

# mapcn-rn: Ready-to-Use Expo and React Native Map Components

## Relation to existing sources
MapCN is already captured in src-2026-05-01-004 and src-2026-05-31-001 for its web and MapLibre component model. This record captures the current React Native and Expo site at https://mapcn-rn.dev/ as a supplemental source.

## Source overview
mapcn-rn presents ready-to-use, customizable map components for Expo and React Native. The site positions the package as zero-configuration mapping primitives built on MapLibre or Mapbox.

The documented setup command is:

npx mapcn-rn init

The site lists NativeWind and Uniwind as styling integrations.

## Use cases and primitives
The site organizes map examples around reusable map moments:
- Analytics layers that preserve the map underneath.
- Delivery routes with markers and contextual stops.
- Heatmaps for density visualization.
- Point clustering for thousands of points with native performance.
- Polygon geometry for static geofences with fill and stroke.
- Place popups for nearby choices such as EV charging.
- Native-feeling user location and camera controls.

The linked examples include markers, routes, heatmaps, clustering, polygons, popups, and controls.

## Positioning
The site presents mapcn-rn as a foundation that can support analytics, turn-by-turn routes, nearby places, and live location without requiring a new map architecture for each feature. Teams can use the examples directly or customize the components.

## Evidence boundary
The site confirms the Expo and React Native positioning, MapLibre and Mapbox options, styling integrations, setup command, and listed example categories. This capture does not independently benchmark native clustering or compare MapLibre and Mapbox performance.

## Related source boundary
The earlier web-focused MapCN records document copy-paste React components, Tailwind and shadcn/ui conventions, MapLibre-style APIs, useMap escape hatches, routes, arcs, controls, popups, and clustered GeoJSON layers. The current site extends the MapCN family into Expo and React Native rather than replacing those records.

## Source
https://mapcn-rn.dev/
