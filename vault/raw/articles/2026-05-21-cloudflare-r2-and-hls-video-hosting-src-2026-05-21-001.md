# Cloudflare R2 getting started + user-supplied HLS video hosting walkthrough

Captured from the official Cloudflare R2 documentation and a user-supplied YouTube transcript on 2026-05-21.

Canonical URLs:
- https://developers.cloudflare.com/r2/get-started/
- https://www.youtube.com/watch?v=JEDb0jXhI_k

---

Official Cloudflare R2 framing captured from the docs:

- Cloudflare R2 is described as object storage for large amounts of unstructured data.
- The official docs emphasize:
  - no egress bandwidth fees typical of many cloud storage services
  - multiple access modes
- The `Get started` page lists access patterns including:
  - Workers API
  - S3-compatible API
  - CLI tools
  - Dashboard

Official usage and pricing signals captured from the docs in this session:

- R2 requires a Cloudflare account with an R2 subscription.
- The docs state that R2 is free to get started with included free monthly usage.
- The pricing page visible in this session explicitly says that egressing directly from R2, including through Workers API, S3 API, and `r2.dev` domains, does not incur data transfer charges.

Video-hosting workflow captured from the user-supplied transcript:

- The transcript contrasts:
  - hosting a raw MP4 file
  - hosting an HLS playlist (`.m3u8`) with segmented transport-stream chunks
- The argument in the transcript is that MP4 is convenient but poor for large-video delivery because the whole blob must be fetched and because adaptive quality is missing.
- The transcript presents HLS as the preferred strategy because:
  - the video is split into short chunks
  - different quality levels can be generated
  - the player can adapt quality to the user’s network conditions

Economic and provider-positioning claims captured from the transcript:

- The transcript compares several video or storage providers and lands on Cloudflare R2 as the preferred option.
- The explicit reasoning is:
  - storage is relatively cheap
  - egress is free
  - the broader Cloudflare platform integrates well with Workers, caching, and related application services
- The speaker distinguishes R2 from Cloudflare Stream, preferring the self-managed R2 route when willing to handle encoding manually.

Implementation details captured from the transcript:

- The workflow uses `ffmpeg` to convert uploaded MP4 files into HLS outputs.
- The speaker mentions generating:
  - a master playlist
  - multiple quality variants
  - segmented video chunks
  - thumbnails extracted from a chosen frame
- A local shell script handles the HLS conversion.
- Uploading is then done to R2 using an S3-compatible client flow.
- A small local UI is described for:
  - dragging in MP4 files
  - triggering encoding
  - uploading generated outputs
  - syncing associated metadata to a database

Application-architecture notes captured from the transcript:

- The transcript favors doing the expensive encoding work locally rather than inside the hosting platform runtime.
- It also describes using Cloudflare-side server functions or middleware to gate access to paid videos, while acknowledging that this is practical deterrence rather than perfect anti-piracy.
- The broader architecture described is:
  - local encoding with `ffmpeg`
  - upload HLS outputs to R2
  - store metadata in a database
  - serve playlist URLs through application logic
  - optionally enforce signed-in or subscribed access through server-side checks

Additional architecture variant captured from a later user-supplied note:

- The user described a different production pattern used at their startup:
  1. upload the original MP4 to Cloudflare Stream through its API
  2. wait for Stream to generate multi-quality outputs
  3. upload those generated outputs into R2
  4. delete the asset from Stream
- The user explicitly framed this as:
  - highly scalable
  - cost effective
- Compared with the earlier local-`ffmpeg` pattern, this variant shifts the transcoding burden away from local or self-managed infrastructure and uses Cloudflare Stream as a temporary managed encoding stage while still keeping R2 as the longer-term storage and delivery substrate.

Interpretive note:

- This source is strongest as infrastructure and delivery-pattern guidance. The durable value is the pairing of an official R2 object-storage surface with a practical HLS-on-R2 workflow: Cloudflare R2 is the storage and delivery substrate, while HLS plus local encoding solves adaptive playback and bandwidth efficiency more effectively than serving raw MP4 blobs.
