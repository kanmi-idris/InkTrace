# Jack Dorsey is taking on Slack with Buzz, a group chat platform for teams and their AI agents

**Source:** TechCrunch
**Author:** Amanda Silberling
**Date:** July 21, 2026
**URL:** https://techcrunch.com/2026/07/21/jack-dorsey-is-taking-on-slack-with-buzz-a-group-chat-platform-for-teams-and-their-ai-agents
**X Post:** https://x.com/jack/status/2080056638820450400 ("why we're buzzing" — 250.9K views)

---

Twitter and Block co-founder Jack Dorsey announced a new app on Tuesday called Buzz. Positioned as a challenger to Slack and GitHub, Buzz is a group chat platform for the workplace that puts humans and their AI agents in the same conversations.

Dorsey wrote on X that Buzz is "model-agnostic, decentralized, self-sovereign, and open source." This product seems to be more than just a Dorsey passion project. According to its website, Buzz was built by Dorsey's company Block, which also operates products like Square, Cash App, Afterpay, and Tidal.

As startups increasingly rely on AI agents to get work done, it can be challenging for employees to collaborate on various tasks across different platforms. Buzz's utility is that it merges several different workflows into one workspace. It looks a lot like Slack, but with native AI agents and the ability to manage GitHub projects all from the same window.

Since the platform is open source, developers can make their own Buzz instance feel more customized to the needs and workflows of their specific team. If a team needs a new feature, they can build it and deploy it on their own, since they have full access to the source code.

Dorsey isn't the only entrepreneur trying to pursue AI-native alternatives or additions to Slack. Paradigm partner and CTO Georgios Konstantopoulos recently unveiled a similar open source product called Centaur, which he describes as a "virtual employee" that runs either inside of Slack or via an API.

For newer startups that are using AI agents and don't have an established presence on Slack, Buzz (or its competitors) could be worth investigating. But Buzz itself admits that it is in its "early stages," so it's probably not a good idea to port your team over just yet.

Buzz's free desktop app is available now for macOS, Windows, and Linux, and the code for the app has been uploaded to GitHub.

---

## Additional details (from explainx.ai and other coverage)

- **Version:** 0.4.21 at launch, Apache 2.0 license
- **GitHub:** github.com/block/buzz
- **Website:** buzz.xyz
- **Built on Nostr protocol** — every message, reaction, workflow step, code event, and approval stored as a cryptographically signed Nostr event
- **AI agents get real accounts** — own key pair, channel memberships, audit trail, same identity structure as humans
- **Built by Block** (Jack Dorsey's company — also Square, Cash App, Afterpay, Tidal)
- **Purpose:** reduce Block's own dependency on Slack and GitHub
- **Harnesses:** Goose, Codex, and Claude Code integration
- **Bradley Axen** (Head of AI Capabilities at Block): "Every company is going to need a place where humans and agents work together. The question is whether that place is proprietary or open. We built Buzz because we believe it should be open."
- **Competitors:** Centaur (Paradigm/Gorgios Konstantopoulos), and Anthropic hiring Zulip leadership team signals category forming
- **Key open problem:** multiplayer agent permission model — what an agent can say across channels it has access to but a given human doesn't
