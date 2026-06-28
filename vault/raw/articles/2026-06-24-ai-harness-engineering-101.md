---
title: AI Harness Engineering 101
kind: paste
captured_at: 2026-06-24 09:44
tags: [harness-engineering, ai-agents, varick-agents]
source_url: 
status: inbox
---

# AI Harness Engineering 101

Article

See new posts
Conversation
Eyad

@eyad_khrais
AI Harness Engineering 101
If an AI model is the brain of an agent, the harness is the body. You can call a model via APIs, but the body has to be built by yourself – which is why harness engineering is the most important concept to learn right now if you're interested in developing agents.
Cursor, Codex, and Claude Code are all examples of harnesses that are designed for coding tasks. Claude Code's brain is Opus, but the rest of the product is the harness.
We've spent the past year building harnesses like Claude Code, but for back-office enterprise work that large companies want automated. This article outlines everything we've learned about the entire process of building effective agent bodies and getting them enterprise ready.
It starts with 4 questions every engineer has to answer when building their first harness:
1) How does the agent actually take action? (tool execution)
2) How does it know what's relevant to the task? (context management)
3) How does it remember what happened? (state and memory)
4) How do you stop it from doing something it shouldn't do? (guardrails)
And then putting it all together and running it, end to end.
By the end, you should understand every component of building the body of the agent.
What makes a harness necessary
When you call an API to an LLM, it usually takes in and returns only text. This means that on its own, the model can describe the action it needs to take but can't perform any of it. Words can't execute anything.
The first step in building a harness is to close that gap by taking what the model says it wants to do and turning it into something that actually happens – that starts with tool execution.
Tool execution
When you build an agent, you're just presenting the model with a list of available tools that it can be used. Each tool gets a name, a description of what it does, and a schema for the inputs it expects. The API delivers all of this into the model's context, so from the model's perspective it's still just text sitting alongside the user's request – a list of tools it's allowed to ask for.
When the model decides to act, it responds with a tool call: a structured block containing the tool's name and arguments
Example: update_record with {"id": 4521, "status": "approved"}
The model can request the action, but it can't perform it. That's the harness's job. It takes the call, runs the real operation against your systems (writing to the database, sending the email, etc) and writes the result back into the context: {"success": true, "record": {"id": 4521, "status": "approved"}}. The model reads that result the same way it reads everything else, and continues.
This is the full cycle of an agent taking an action: the model requests, the harness executes, the result returns as text. The model only ever reads and writes; the harness does everything else.
Context management
Every tool menu, tool call, and tool result lands in the context window as text. But the context window is finite – meaning the harness has to filter out what stays in the context window and what gets left out.
There's a lot of data coming into a model. Take for instance an agent that's verifying vendor invoices against purchase orders. It might pull a vendor list, get back two hundred rows, call a tool for each invoice, and then get back even more data.
Ten minutes into the task, the context window is now holding dozens of tool results and that alone fills up the entire context window. Context management is crucial because it makes sure that the vendor list from the beginning of the task isn't still sitting there at step forty, taking up space in the context window.
Context management is the harness deciding, at every step, what the model needs in front of it to take the next action. The task definition and the relevant recent results need to stay, but everything else either gets summarized or removed. The goal of context management is to control what the agent is looking at right now.
How to do this
It does this through three steps:
1) It compresses old history into a running summary, so a hundred lines of vendor data become a single line.
2) Then summarizes where to find each vendor so that the model can semantically query and find what it's looking for without parsing through everything.
3) And finally, it drops tool results that have already been used to create space in the context window.
It's important you store all the data outside the context window (in a vector DB for example) where it can pull context back for a later step if needed. More on this in the section below.
State and Memory
Every API call to a model is completely stateless. When you send a request to an LLM, the harness is sending all the previous messages as a single full piece of text in the request, because the model doesn't retain information between calls.
This means that everything the agent "remembers" lives in a place where the harness can easily access it and provide it to the model. It's a database or file store of everything the task has produced.
In our case, we're dealing with the invoices that have already been processed, the approvals collected, the decisions made, etc. The record is the state. When a step needs something from it, the harness pulls the relevant piece and places it into the context window – so that the model can read it the same way it reads everything else.
The state is also important because if an agent crashes on the 30th invoice, the model knows to resume from step thirty and not start all over again. You can even swap or upgrade the model mid-task and the agent will just continue, because the agent's memory never lived inside the model.
Context is what the agent is looking at right now, and state is everything it knows but isn't looking at. The harness' job is moving information between the two at the right moments.
Guardrails
The model produces a wrong tool call with exactly the same confidence as a right one – both are just text. Nothing inside the model fires an alarm when the JSON it wrote pays an invoice twice or emails the wrong vendor. It will report success either way. So the judgment that an action is dangerous has to live in the harness, because the harness is the only thing that touches anything before it goes to the model.
Because every action already passes through the harness on its way to the model, that gives you a checkpoint between when the model requested it and when it happened. Guardrails are rules that run at that checkpoint.
The harness validates before executing. It checks if the record exists, if the amounts are within limits, and if the action already ran once.
It also scopes what each agent can touch (so the invoice agent holds permissions to the invoice system and physically can't send a wire). And for actions that need to be handled by a human, it'll reroute the request to them. The approval comes back into the context as text, and the agent continues.
The full agent loop
The harness rebuilds the model's view from state, trims it down through context management, and sends the request. The model returns text. When that text is a JSON tool call, the guardrails check it, the harness executes it, writes the result into state and into the context, and the loop goes again.
The loop ends the same way everything else in the agent happens – the model writes text. That's all it can do. After all the steps have been completed, it'll stop emitting text to call tools and instead emit a final answer.
The harness recognizes the model has stopped asking for actions and exits the loop.
A model is the same API everyone can call, but good harness engineering allows for that model to be deployed and own tasks instead of just operating with text.
A model can just read and write, but the harness gives it the hands that execute, the eyes that focus on the context window, and the memory that gives it state.
Varick is in the business of building harnesses and deploying them into billion dollar companies. We're solving the massive problem of implementing AI that actually works into these businesses, and a big part of that job is developing the harness. If you're interested and want to work on harnesses with the most cracked team in Applied AI, apply here: https://varickagents.com/careers
