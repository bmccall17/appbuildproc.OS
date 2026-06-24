# Submission Cockpit Development Dossier

## Original Problem And Audience

**Observed:** ADR-0001 states the core problem: scraper leads were invisible to the operator and there was no at-a-glance answer to what the scraper had found but had not been acted on.

**Inferred:** The audience is Brett as a visual operator, plus AI agents interacting through the MCP surface.

## Earliest Prototype

**Observed:** The earliest Cockpit artifact is `dashboard/run.sh` around 2026-06-05. The app is local-only, Python stdlib, flat-file backed, and live-editable.

## Major Milestones

- **Inherited framework:** Upstream AI job-search framework supplies apply pipeline and LaTeX/PDF verification conventions.
- **Cockpit prototype:** Local web dashboard around 2026-06-05.
- **MCP exposure:** `submission-cockpit` MCP server registered around 2026-06-06.
- **Found Jobs visibility:** ADR-0001.
- **Source-of-truth repair:** ADR-0002/0003 reconcile scraper/tracker state and UI ownership.
- **Queue mirror reversal:** ADR-0004 introduces `APPLICATION_QUEUE.md`; ADR-0005 retires it because drift was structural.
- **Shared definitions/tests:** ADR-0006 extracts shared matching/fit logic and adds tests after duplicate-risk drift.
- **Activity-aware UI:** ADR-0007 replaces frozen status with last-touch/next-step signals.

## Deployment History

**Observed:** No deployment. The tool binds to loopback and launches locally. Deployment is "run the script."

## Architectural Decisions

**Observed:** Seven ADRs in two weeks show unusually explicit decisions for a local tool. They repeatedly collapse duplicated truth sources back into live views or shared code.

## Admin And Operations Evolution

**Observed:** The Cockpit itself is the operations surface. It shows gauge clusters, validation, package/compile actions, mark-submitted workflow, Found Jobs queue, and agent-accessible tools.

## Testing And Reliability Evolution

**Observed:** Testing arrives late, around 2026-06-21, after drift between matching/reconciliation systems creates duplicate-application risk.

## Presentation And Distribution Evolution

**Observed:** No public presentation. The UX is operator-facing and visual; the success criterion is at-a-glance local action, not sharing.

## Major Direction Changes

- Upstream framework -> Brett's local Cockpit subsystem.
- Manual markdown queue -> live dashboard queue.
- Multiple reconcilers -> shared definitions backbone.
- Frozen age indicator -> action-oriented activity indicators.

## Current State

**Observed:** Submission Cockpit is a local, no-auth, zero-dependency operational tool whose rigor lives in ADRs, flat-file state, tests, and MCP access rather than deployment or Git commits.

## Process Lessons

**Inferred:** Submission Cockpit shows Brett's source-of-truth instinct sharply: when a manually maintained artifact drifts from live state, it gets retired rather than disciplined harder.
