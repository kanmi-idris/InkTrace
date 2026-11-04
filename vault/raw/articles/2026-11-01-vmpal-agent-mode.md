# VMPal official description of AI agent control

Captured: 2026-11-01
Source URL: https://vmpal.com/blog/give-your-ai-agent-a-whole-computer
Publisher: VMPal / TablePlus team

## Product description

VMPal describes agent control inside a virtual machine. The agent can view the VM screen, use its mouse and keyboard, run commands as the VM user or administrator, install software, and test applications in the VM. VMPal says this avoids granting the agent macOS Accessibility and Screen Recording permissions on the host.

The post says the user approves the agent connection, after which the agent can work in that machine. The product says an agent working with VM accounts and files is limited by the VM's configured access, network, shared folders, and accounts. Users can take snapshots and revert the VM.

## Relevance to the port

This explains how Daniel Nguyen says Claude could inspect and operate Windows and macOS environments through VMPal. The product description does not verify his specific port or tests.

## Evidence limits

These are VMPal's own product claims. They do not establish isolation guarantees for every configuration. The port report is [src-2026-11-01-006].
