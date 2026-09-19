---
title: "LazyJSON async JSON parsing in Nitro"
kind: paste
captured_at: "2026-09-19 20:40"
tags: [react-native, nitro, jsi, hermes, performance, json]
source_url: ""
status: inbox
---

# LazyJSON async JSON parsing in Nitro

just built 𝙻𝚊𝚣𝚢𝙹𝚂𝙾𝙽: a Nitro type that parses & stringifies JSON on a small background 𝚓𝚜𝚒::𝚁𝚞𝚗𝚝𝚒𝚖𝚎, and then transfers the object using the new 𝚓𝚜𝚒::𝙸𝚂𝚎𝚛𝚒𝚊𝚕𝚒𝚣𝚊𝚝𝚒𝚘𝚗 interface. ⚡️
It essentially makes 𝙹𝚂𝙾𝙽.𝚙𝚊𝚛𝚜𝚎(…) async, reducing JS blocking time by ~33% for anything that returns or accepts JSON in Nitro.

There's also ongoing work by Szymon to add faster materialisation to Hermes core:

https://t.co/IMvq8TI0Kf

https://t.co/9CTh372sEF
