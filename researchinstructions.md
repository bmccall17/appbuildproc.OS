# Research Assignment: Reconstruct My Application-Building Process

## Purpose

Conduct an evidence-based investigation across a ranked collection of my software repositories to identify how I actually move from an initial idea to a functioning, deployed, operated, and evolving application.

This is not primarily a technical audit, repository summary, or portfolio overview. The purpose is to reconstruct my real product-development process from dated evidence and determine whether there are recurring phases, decision patterns, transition signals, habits, and omissions across the projects.

I often build instinctively. I recognize when something needs to change, when a prototype needs infrastructure, when an internal tool is required, or when a product is ready to become public. Much of that judgment is currently implicit. This research should make those instincts more visible, explainable, teachable, and repeatable without replacing useful experimentation with an artificial or overly rigid process.

## Desired Outcome: What Done Looks Like

Done means we have produced a defensible, evidence-backed model of how I repeatedly move software from an initial concept through prototyping, repository creation, deployment, persistence, productization, administration, instrumentation, distribution, operation, and continued refinement.

The completed research must:

* Identify the recurring phases or states in my application-building process.
* Determine the activities, decisions, tools, and artifacts that typically appear during each phase.
* Identify the evidence that signals when I switched from one kind of work to another.
* Show which phases are sequential, which overlap, and which recur as loops.
* Compare the process across projects rather than treating each repository as an isolated story.
* Identify meaningful differences based on product type, audience, technical architecture, and maturity.
* Distinguish observed facts from reasonable interpretations and future recommendations.
* Identify patterns of late-arriving work, rework, avoidable chaos, and repeated decisions.
* Preserve the strengths of my exploratory and instinctive approach.
* Convert the findings into a reusable workflow for me, collaborators, students, and AI development agents.

The final result should allow a person or agent to understand not only what steps I tend to take, but what conditions indicate that it is time to switch gears.

## Research Principles

### Use evidence, not memory

Base findings on dated or otherwise sequenceable evidence wherever possible, including:

* ADR documents and decision logs
* Git commit history
* Repository creation dates
* Branches, pull requests, issues, and release tags
* README and documentation history
* Changelogs and planning documents
* Package and dependency history
* Database schemas and migrations
* Deployment configuration
* CI/CD workflows
* Environment-variable examples
* Hosting-provider configuration
* Authentication and authorization changes
* Administrative routes and internal tools
* Analytics, logging, monitoring, and error reporting
* Tests and test infrastructure
* Social metadata, Open Graph images, favicons, and sharing features
* Security changes
* API integrations
* Data migrations
* Architecture diagrams
* Dated screenshots, notes, and research documents
* Evidence from Vercel, Render, PartyKit, GitHub, or other connected services when available

Do not rely solely on the current repository structure. Use file and commit history to determine when capabilities appeared.

### Do not force a generic development lifecycle onto the evidence

Begin with possible categories, but allow the actual phase model to emerge from the repositories.

The process may be nonlinear. A project may return to prototyping after deployment, add administrative tooling before authentication, or build social-sharing capabilities before operational maturity. Preserve those variations rather than forcing every project into the same sequence.

### Separate three kinds of conclusions

Every meaningful conclusion should be identified as one of the following:

1. **Observed:** Directly supported by repository or project evidence.
2. **Inferred:** A reasonable interpretation supported by several pieces of evidence.
3. **Recommended:** A proposed improvement to the future process.

## Initial Questions to Investigate

For each project, determine:

* What is the earliest evidence of the idea?
* What was the smallest working version?
* When was the repository created?
* When did the project become usable locally?
* When was it first deployed?
* What deployment target was selected, and did that target later change?
* When did persistent data become necessary?
* When were authentication and user identity introduced?
* When were external APIs or services added?
* When did ADRs or architectural documentation begin?
* What kinds of decisions caused ADRs to be written?
* When was an administrative backend, dashboard, or inspection tool introduced?
* What operational problem appears to have motivated that tooling?
* When were analytics, logging, monitoring, tests, or security controls introduced?
* When did social sharing, public presentation, Open Graph metadata, favicons, or promotional features become important?
* When did another user, collaborator, tester, or stakeholder begin affecting development?
* When did the project move from proving the idea to operating the product?
* What work repeatedly arrived late?
* What decisions were revisited or reversed?
* What events appear to have caused major changes in direction?
* What evidence suggests that I had intuitively recognized a new phase before formally naming it?
* Which parts of the process have become more disciplined in newer projects?

## Initial Phase Hypothesis

Use the following only as a starting coding framework. Revise or replace it based on the evidence:

1. Problem recognition and opportunity exploration
2. Concept definition and use-case discovery
3. Fast proof of concept
4. Functional prototype
5. Repository and environment stabilization
6. Initial deployment
7. Persistence and data modeling
8. Authentication and identity
9. External service integration
10. Architecture and decision documentation
11. Administrative and operational tooling
12. Testing, security, and observability
13. Product presentation and social sharing
14. User feedback and behavioral measurement
15. Scaling, migration, or architectural correction
16. Documentation, handoff, and maintainability
17. Research, reflection, and process improvement

Determine whether these are phases, layers, recurring loops, or several different process tracks.

## Required Deliverables

### 1. Research Method and Evidence Standard

Document how repositories were inspected, how dates were established, how conflicting evidence was handled, and how confidence was assigned.

### 2. Repository Evidence Index

For every repository, provide a structured index of significant evidence with dates, paths, commit references, and a short explanation of why each item matters.

### 3. Project Development Dossier

Create a consistent case study for every project containing:

* Original problem and intended audience
* Earliest prototype
* Major technical and product milestones
* Deployment history
* Architectural decisions
* Administrative and operational evolution
* Testing and reliability evolution
* Presentation and distribution evolution
* Major changes in direction
* Current state
* Important evidence gaps

### 4. Normalized Timeline

Create a timeline for every project using the same milestone categories so projects can be compared directly.

### 5. Cross-Project Pattern Analysis

Identify recurring:

* Phases
* Sequences
* Loops
* Decisions
* Transition triggers
* Artifacts
* Technical choices
* Operational problems
* Sources of rework
* Late-arriving concerns
* Improvements across successive projects

Include frequency and confidence rather than presenting every apparent similarity as a universal pattern.

### 6. Transition Map

For every major phase transition, explain:

* The previous state
* The triggering condition
* Evidence of the transition
* The new kind of work that began
* Whether the transition was deliberate, reactive, or ambiguous
* What future projects could use as an earlier warning or readiness signal

### 7. Variation and Exception Analysis

Identify projects that do not follow the dominant pattern and explain why. Consider product type, audience, collaboration model, infrastructure, real-time requirements, mobile versus web development, and whether the project was self-built or managed through an outside development team.

### 8. Chaos and Rework Analysis

Identify where exploration was productive and where missing structure appears to have caused unnecessary rework.

Do not equate nonlinear development with failure. The goal is to distinguish generative exploration from avoidable confusion.

### 9. Brett Build OS

Produce a reusable application-building operating system containing:

* Named phases or states
* Purpose of each phase
* Entry signals
* Exit criteria
* Required and optional artifacts
* Key questions
* Common risks
* Decisions that should remain reversible
* Decisions that require explicit documentation
* Signals that the project should switch gears
* Suggested human and agent responsibilities
* Lightweight and full versions of the process

The workflow should help structure future projects without forcing every project through unnecessary ceremony.

### 10. Agent-Readable Specification

Represent the final workflow in a structured format that can be used by AI development agents. It should allow an agent to:

* Determine the likely current phase of a project
* Explain the evidence for that classification
* Identify missing artifacts or unresolved decisions
* Recommend the next appropriate kind of work
* Avoid prematurely adding infrastructure
* Recognize when a prototype has become an operated product
* Recognize when administrative visibility, documentation, testing, or distribution work is warranted

### 11. Presentation

Create a presentation that tells the story of the research and can be shared with collaborators, students, or prospective employers.

It should show:

* How the investigation was performed
* What the projects reveal
* The recurring development pattern
* The role of intuition
* The productive and unproductive forms of chaos
* Important transition signals
* How the proposed operating system improves future work
* How another person or agent can participate in the process

## Definition of Done

The research is complete only when:

* Every included project has been examined using a consistent method.
* Major claims are connected to specific evidence.
* Dates are provided where available.
* Uncertain dates and interpretations are clearly labeled.
* Current files are not mistaken for evidence of when a capability was introduced.
* Observations, inferences, and recommendations are separated.
* Cross-project patterns are supported by more than one project.
* Exceptions and contradictory evidence are included.
* The result explains transitions and decision signals, not just chronological events.
* The final workflow is usable by someone who does not share my instincts.
* The workflow can be applied to a new repository.
* The workflow can be presented visually and represented in an agent-readable format.
* The resulting model feels recognizably based on how I actually work rather than a generic software-development framework.

## Initial Ranked Research Corpus

Rank projects by their usefulness for discovering the process, not by commercial importance.

### Primary research projects

1. **agent828**
   Likely the richest source of explicit ADRs and architectural evolution. It includes intake and scheduling, contact-to-lead progression, CRM behavior, inbound email, persistence, deployment, security, analytics, automation, enrichment, and administrative review.

2. **repOptics**
   Particularly valuable because the product itself concerns repository quality, project operations, decision capture, release readiness, research, and maintainability. Its evolution from scanner toward reports, starter tools, playbooks, research, and repository intelligence may reveal how my development process became more self-aware.

3. **AVL Music Companion / AVLmc**
   A recent and compressed example involving public event discovery, Spotify integration, email authentication, listener personalization, community features, analytics, social metadata, administrative architecture, database migration, and operational visibility.

4. **Ghost Job Detector**
   Useful for studying the movement from a product concept into ingestion systems, analysis pipelines, queues, persistent storage, job state, database architecture, deployment constraints, and administrative inspection.

5. **thirtysix**
   Useful as a smaller, experience-driven product that may reveal how I approach interaction design, multiplayer or real-time infrastructure, rapid prototyping, and the transition from a game concept into an operated application.

### Secondary research projects

6. **TarotTALKS**
   Useful for examining public presentation, deployment, visual identity, hero imagery, social previews, and the point at which a working application becomes something intended to be shared.

7. **Submission Cockpit**
   Treat as a separate project if it has an independent repository or development history. Otherwise analyze it as a major product subsystem within agent828. It may be especially valuable for understanding workflow automation, application-state management, local data, and human-in-the-loop agent behavior.

8. **YESYESNO Bot**
   Useful as a focused conversational-AI project and as a comparison with larger products containing infrastructure, persistent data, and administrative systems.

### Contrast project

9. **sidexside**
   This should not be treated as pure evidence of my personal implementation sequence because much of the engineering was performed by an outside development team. It is still valuable as a contrast case for product leadership, QA, field testing, analytics, privacy, app-store preparation, repository handoff, documentation, and determining when a product is ready to leave development.

### Control group

10. **Portfolio repository and selected small experiments**
    Select several smaller, abandoned, or minimally developed repositories. These may reveal what differentiates an experiment that remains a prototype from a project that progresses into a maintained product.

Before beginning the full comparison, verify repository boundaries and determine whether Ghost Job Detector, Submission Cockpit, agent828, or other named products are separate repositories, subsystems, renamed projects, or successive versions.

## Final Research Question

Based on the evidence, what is my actual application-building operating system—and how can it be made explicit enough that another person or AI agent can recognize the current state of a project, understand why it reached that state, and help move it forward without destroying the flexibility and intuition that made the project possible?
