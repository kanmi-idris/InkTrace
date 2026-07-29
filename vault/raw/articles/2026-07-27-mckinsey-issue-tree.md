---
title: McKinsey Issue Tree
kind: paste
captured_at: 2026-07-27 20:07
tags: []
source_url: 
status: inbox
---

# McKinsey Issue Tree

/mckinsey-issue-tree: trees to solve any problem
Many product and business problems go wrong before people even start to study them. This happens because the team has not agreed on what problem they are trying to solve. One question can make people think about the cause, the plan, and the solution all at the same time.
Each person may answer a different question. Finding the cause, making a plan, and choosing a solution are three different jobs. When people mix them together, they can miss important facts or make weak decisions. For example, someone might guess the cause when the team really needs a plan. Or the team might talk about fixes before they know what caused the problem.
A good way to study a problem is to follow one of three clear paths. The team asks questions one step at a time and checks that nothing is repeated or left out. AI can help with these checks. The product manager still decides what problem to study, what the main problem is, and which questions the team should answer.
Untangle the branches of thought
A Why-tree finds causes. Its root asks why something is happening. Its leaves list possible causes. The final output is a set of testable hypotheses.
A What-tree breaks down work. Its root asks which work a deliverable requires. Its leaves list analyses, decisions, commitments, artifacts, or processes. The final output is a plan in the right order.
A How-tree lists possible paths. Its root asks how the team might reach a chosen goal. Its leaves list concrete actions. The final output is a set of ranked options.
Use Why for causes, What for work units, and How for actions. Each leaf type supports a different decision.
Example
Input: "Our new-user activation is underperforming. We need to decide what to do."
The visual below uses placeholders for branch types and contains no findings about a real product.
WHY: Why is new-user activation underperforming?
├── 1. [Candidate cause family A]
├── 2. [Candidate cause family B]
└── 3. [Candidate cause family C]
Output: testable hypotheses
WHAT: What does producing an activation plan require us to unpack?
├── 1. Evidence
│   └── 1.1 [ANALYSIS] Evidence the plan needs
├── 2. Choices
│   └── 2.1 [DECISION] Choice that depends on the analysis
├── 3. Agreements
│   └── 3.1 [COMMITMENT] Ownership or scope to confirm
└── 4. Synthesis
    └── 4.1 [SYNTHESIS] Plan that depends on branches 1-3
Output: sequenced workplan
HOW: How might we raise new-user activation?
├── 1. [Intervention tied to a confirmed cause]
├── 2. [Intervention tied to another confirmed cause]
└── 3. [Intervention family within the stated constraints]
Output: ranked options
I would use Why here because the team knows activation is low but has not found the cause. How would fit if the team knew the cause. What would fit if the team needed to produce an activation plan.
Structural checks cannot prove the tree is true
All three trees use the same MECE rule. 
The branches at each level should not overlap. The branches at each level should cover all the important areas. This check helps a PM identify areas that are covered by more than one branch and areas that are not covered at all. 
When I face a messy problem, I talk through the context with AI. I use the skill to draft branches, build the tree, and run the MECE checks. I keep the result in chat or copy it into Miro or another visual tool. 
Make the method repeatable
One product manager can make one problem tree by hand. But a team has to do the same work again and again. They must make branches, put them in order, check each level, and draw a clear tree for many different problems.
An AI agent can do these steps over and over. The product manager adds details about the product and decides how to describe the problem, name the main issue, and remove branches that are not needed. When everyone uses the same steps, product leaders and reviewers can understand the work more easily. They can see why the team built the tree that way and check that it covers the whole problem without repeating ideas.
When you face a new problem, first decide what answer you need. Do you need to find the causes, make a work plan, or think of different options? Then choose Why, What, or How to match that goal. Build your first tree. Next, look for one branch that is missing and one branch that repeats another idea before you use the tree.
If a product team wants to use this method again and again, it should not ask every product manager to build the whole process and check all the rules by hand. AI can do that repeated work so the team can spend more time solving the problem.
Give your team this skill
mckinsey-issue-tree is one of the 243 PM skills inside AI PM OS, the shared operating system for product teams. It runs in Claude Code, Cowork or Cursor and is updated at least once every 2 weeks, on version 2.5.
Each PM keeps their own product context while the team shares workflows and review standards, so the issue trees and analytical plans come back grounded in your product, your users, and your real constraints instead of generic PM advice.
You don't have to assemble any of it. AI PM OS wires mckinsey-issue-tree into the team operating layer alongside workflows for strategy, research, decisions, stakeholder work, and measurement.
AI PM OS is $499/year for up to 10 PMs. Full onboarding included.
