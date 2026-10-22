---
title: "BrewKeg: NGN-priced AI inference gateway"
kind: "project capture"
source_url: "https://brewkeg.dev/"
tags: ["ai-inference", "api-gateway", "claude", "openai", "gemini", "cost", "ngn", "paygo", "token-billing", "privacy", "data-retention", "api-compatibility"]
status: "inbox"
---

# BrewKeg: NGN-priced AI inference gateway

## Product summary
BrewKeg presents itself as an AI inference and billing gateway. It offers OpenAI-compatible chat completions and Anthropic-compatible Messages endpoints. Users create a BrewKeg key, route requests through its base URL, and select a model ID. The site lists Claude, GPT, and Gemini models and coding-agent integrations. I did not create an account or send a request.

## Pricing shown on the site
The pages list Starter at ₦7,000/month for 30M weighted tokens and 20,000 requests; Pro at ₦16,000/month for 120M weighted tokens and 80,000 requests; and Scale at ₦27,500/month for 210M weighted tokens and 130,000 requests. PAYGo starts at ₦5,000 and is priced at ₦1,000 per million weighted tokens. The site says cache reads count at 0.1× and other token costs use model multipliers. These are site-published prices, not independently checked against billing.

The site copy is inconsistent about credit rollover. The homepage says monthly plan allocation resets each billing cycle, while the pricing page says unused credit rolls over. The API documentation says PAYGo has no expiry and no rollover. Confirm how plan credit and top-ups work before payment.

## Privacy and data handling
The privacy policy says BrewKeg stores full request and response content by default. This includes system prompts, messages, tool definitions, model responses, reasoning, and tool calls. It says content logging can be disabled, but the policy points to an in-app setting and that link led to the login page. I did not log in, so I could not inspect or change the setting.

The policy says content is retained with usage records for as long as the account is active and as needed for legal, tax, and accounting duties. It says there is no automatic time-based deletion. Requests are forwarded to the selected model provider under that provider's own terms and retention rules. BrewKeg says it does not use request content to train third-party models. The named subprocessors include Supabase, Paystack, and Sendly.

## Evidence limits
I inspected the homepage, API docs, pricing page, and privacy policy. Pricing, supported model IDs, retention, security, and compatibility details are company statements. I did not create an account, test a model, verify output quality, compare intelligence per naira, or make a payment.
