# fd_demo Development Dossier

## Original Problem And Audience

**Observed:** fd_demo is Forbidden Desert XR, a cross-platform XR multiplayer tabletop game.

**Inferred:** The audience is players/testers experiencing a tabletop rules system in browser/XR, plus the builder/agents who need to maintain rule fidelity, multiplayer behavior, and asset correctness.

## Earliest Prototype

**Observed:** The project appears to begin from the official rules PDF, Vite scaffold, agent workflows, PartyKit config, and early game rules implementation around 2026-01-31.

## Major Milestones

- **Rules source:** Official Forbidden Desert rules PDF appears before scaffold.
- **Foundation:** v0.1.0 establishes Vite/React/Three/XR-ready foundation.
- **Core game:** v0.2.0 adds rules engine and multiplayer/AI sprint.
- **XR:** v0.3.0 delivers core XR experience, controller movement, wrist HUD, Quest 3 testing, and PartyKit deployment pipeline.
- **Manual storm phase:** v0.4.0 changes storm logic and turn flow.
- **Asset decoupling:** v0.5.1 imports placeholder assets and adds raw/negu toggle for IP-safe future work.
- **XR parity/polish:** v0.6.1/v0.6.2 complete XR controls and stability work.
- **Rule audit:** Rules audit documents drift across five-plus rules sources and creates a single audit checklist.
- **3D asset pipeline:** A structured asset plan appears for source files, GLBs, generated placeholders, and registry changes.

## Deployment History

**Observed:** PartyKit config appears day one. Changelog verifies PartyKit deployment pipeline with `npm run build && npx partykit deploy`.

## Architectural Decisions

**Observed:** No ADR directory was inspected. Architecture is documented in `claudesplan_xrmultiplayerarchitecture_v2.md`, `.agent` workflows/phases, changelog, and devnotes.

## Admin And Operations Evolution

**Observed:** This project does not show CRUD-style admin. Its operational tooling is release checklists, XR testing workflow, rules audits, asset inventory, and asset pipeline planning.

## Testing And Reliability Evolution

**Observed:** Verification is manual/device-oriented: Quest 3 testing, release checklists, rules audits, and known limitation lists. Automated test presence was not established in this pass.

## Presentation And Distribution Evolution

**Observed:** README, live demo notes, release checklist, and asset correctness are the main presentation/distribution surfaces. Public distribution is constrained by placeholder asset licensing.

## Major Direction Changes

- 2D/web game foundation to XR support.
- Core rules implementation to PartyKit multiplayer.
- Placeholder assets to asset-decoupled/IP-safe pipeline.
- Multiple rule sources to single authoritative audit process.

## Current State

**Observed:** fd_demo is a process-rich XR/multiplayer prototype with changelog-driven releases, agent workflows, manual XR verification, and rule/asset audits. The lack of Git history limits chronological confidence.

## Process Lessons

**Inferred:** fd_demo shows a game-specific AppBuildProcOS variant: rules/source ingestion first, playable system next, XR/multiplayer infrastructure early, then audits and asset pipelines when fidelity and distribution risk become visible.
