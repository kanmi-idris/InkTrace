# TanStack Start RSC use case for CDN-cached content sites

Captured from user-supplied YouTube transcript text on 2026-04-28.

Canonical URL:
https://www.youtube.com/watch?v=t9xB8xvySyo&t=2s

---

Transcript summary captured from the supplied text:

- The speaker argues that React Server Components (RSCs) should be treated as a specialized tool, not a universal solution for every site.
- The concrete example is a content site running through a CDN, where different parts of a page need different cache-busting behavior.
- The main page route is cached at the CDN level, but a trending sidebar needs to refresh more frequently than the rest of the page.
- In the shown TanStack Start example, a client component (`TrendingClient`) requests an RSC payload from the server.
- The server endpoint uses a GET server function so the CDN can cache the request more easily than a POST request.
- TanStack Start's low-level RSC support is shown using `renderServerComponent`, which returns flight data for the client to render.
- The transcript contrasts this with returning JSON: JSON would require shipping and running all rendering logic for the returned UI on the client, while an RSC flight payload can be inserted into the VDOM more directly.
- The example also shows “interactive stories” that contain client-side code. Those components are marked with `"use client"`.
- When an RSC payload references those interactive components, the client only downloads the JavaScript for those specific interactive pieces, rather than bundling everything up front.
- The speaker frames the main value of RSCs as targeted cache control and delayed loading of interactive code for special-purpose cases such as content sites or dashboard widget banks.
