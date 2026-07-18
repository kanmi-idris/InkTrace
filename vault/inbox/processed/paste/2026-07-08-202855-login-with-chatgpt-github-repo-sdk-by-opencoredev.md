---
title: login-with-chatgpt GitHub Repo — SDK by opencoredev
kind: paste
captured_at: 2026-07-08 20:28
tags: [oauth, openai, chatgpt, device-code-flow, open-source, sdk, agent-skill, mit]
source_url: 
status: inbox
---

# login-with-chatgpt GitHub Repo — SDK by opencoredev

## login-with-chatgpt — GitHub Repository

Source: https://github.com/opencoredev/login-with-chatgpt (59 stars, 8 forks, MIT)
Author: @leodev (Leo) / opencoredev

### Monorepo Packages
| Package | npm | Purpose |
|---------|-----|---------|
| @opencoredev/loginwithchatgpt-core | yes | OAuth, token refresh, model discovery |
| @opencoredev/loginwithchatgpt-server | yes | Backend handler: login, session, logout, models, responses proxy |
| @opencoredev/loginwithchatgpt-react | yes | <LoginWithChatGPT /> button and hook |
| @opencoredev/loginwithchatgpt-ai | yes | Vercel AI SDK providers |

### Structure
- packages/ — the 4 npm packages
- examples/demo/ — demo app (deployed at login-with-chatgpt-demo.vercel.app)
- docs/ — documentation site (deployed at log-in-chatgpt.vercel.app)
- skills/login-with-chatgpt/ — agent skill for Claude Code / Cursor / Codex

### Agent Skill
Can be installed via:
```sh
npx skills add opencoredev/login-with-chatgpt
```
The skill ensures AI agents wire the SDK correctly: no invented API keys, no assuming one model slug works for every account. Also on skills.sh.

### Key Lines
- "Users bring their own ChatGPT subscription"
- "Tokens never touch the browser: HttpOnly cookie only"
- "Works with the Vercel AI SDK: streamText() straight from the client"
- "Open source, MIT licensed"
- "The handler keeps tokens behind the proxy path by default."

### Related Sources
- src-2026-07-08-003 (demo app at login-with-chatgpt-demo.vercel.app)
- src-2026-07-08-004 (SDK docs at log-in-chatgpt.vercel.app)
