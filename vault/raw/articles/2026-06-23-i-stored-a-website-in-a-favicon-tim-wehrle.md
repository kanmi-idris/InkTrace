---
title: I Stored a Website in a Favicon — Tim Wehrle
kind: paste
captured_at: 2026-06-23 08:26
tags: [favicon, steganography, png, html, web-experiment, data-storage]
source_url: 
status: inbox
---

# I Stored a Website in a Favicon — Tim Wehrle

# I Stored a Website in a Favicon — Tim Wehrle

## Source
https://www.timwehrle.de/blog/i-stored-a-website-in-a-favicon/

## Overview
Fun experimental blog post (June 19, 2026) about encoding a full HTML webpage inside a 9x9 pixel favicon image using direct RGB channel byte storage. Payload: 208 bytes of HTML, fits in 71 pixels (9x9 = 81 pixels, 87% capacity used).

## How It Works
- Favicon is a PNG image
- Pixels are bytes: R, G, B channels = 3 bytes per pixel
- HTML content → TextEncoder → byte array
- Prepend 4-byte length header (so decoder knows where payload ends)
- Fill pixels sequentially: first byte → R, second → G, third → B
- Result: 9x9 pixel image that looks like visual noise

## Decoding
- Bootstrap JS loads favicon as image → draws to canvas
- Canvas API reads pixel data
- Reverse process: read RGB → reconstruct byte array → read 4-byte length → extract payload → decode UTF-8
- Render reconstructed HTML as the page content

## Limitations
- Not useful: tiny capacity (~239 bytes max), requires JS bootstrap
- Content is stored in pixels, not the full site — need decoder script to extract
- Dirty hack, not a distribution strategy

## Alternative Approaches
- Store markup directly in SVG favicon (read on page load)
- Use PNG comment chunks: tEXt, zTXt, iTXt
- Use ICO format (supports multiple resolutions)

## Live Demo
- Site: https://www.timwehrle.de/labs/favicon-site/
- Repo: https://github.com/timwehrle/favicon

## Tags
favicon, steganography, png, html, web-experiment, data-storage
