# fd_demo Evidence Index

Repository: `/home/bam/projects/fd_demo`

## Repository State

- **Observed:** Current local path is not a Git repository. `git` chronology is unavailable.
- **Observed:** Dating relies on file mtimes, `CHANGELOG.md`, `PROJECT_STATUS.md`, `README.md`, release checklist, PartyKit config, and devnotes.

## Significant Evidence

| Date | Evidence | Type | Why It Matters |
|---|---|---|---|
| 2026-01-27 | `rules/ForbiddenDesertTM-RULES.pdf` mtime | File mtime | Official rules source appears before app scaffold. |
| 2026-01-31 | Vite/TypeScript scaffold files around 16:08 | File mtime | Project scaffold. |
| 2026-01-31 | `.agent/workflows/design_audit.md`, `feature_implementation.md`, `CHEATSHEET.md` | File mtime | Agent workflow scaffolding appears at project start. |
| 2026-01-31 | `partykit.json` mtime 19:58; `party/index.ts` mtime 22:56 | File mtime | Multiplayer/deployment infrastructure appears on day one. |
| 2026-01-31 | `CHANGELOG.md` v0.1.0 foundation and v0.2.0 core/multiplayer entries | Changelog | Foundation and rules engine/sprint structure. |
| 2026-01-31 | Changelog v0.3.0 XR support, PartyKit deployment pipeline, Quest 3 testing | Changelog | XR/multiplayer transition and manual device verification. |
| 2026-02-01 | `README.md`, `claudesplan_xrmultiplayerarchitecture_v2.md`, `.agent/phases/PRD.md` | Files | Public project framing and architecture planning. |
| 2026-02-01 | `RELEASE_CHECKLIST_v0.5.0.md` | File | Release checklist appears by early sprint. |
| 2026-02-02 | `PROJECT_STATUS.md`, asset inventory, asset decoupling sprint | Files + changelog | Asset correctness and IP-safe future implementation become process concerns. |
| 2026-02-10 | `CHANGELOG.md` v0.6.1/v0.6.2, game polish, XR control parity, bug fixes | Changelog | Polish, XR parity, and stability phase. |
| 2026-02-11 to 2026-02-15 | Rules audit checklist, video transcript, audit log | Devnotes | Rule correctness becomes a formal audit process. |
| 2026-02-18 | `3DAssetPipelineforForbiddenDesertXR.md` | Devnote | Asset pipeline becomes a structured implementation plan. |
| 2026-02-19 | `package.json` mtime | File mtime | Current manifest appears after earlier scaffold dates; treat as mtime evidence, not original package creation. |

## Supporting Files

- `README.md`: "Cross-platform XR multiplayer tabletop game"; quick start includes PartyKit server.
- `package.json`: Vite, React, React Three Fiber, React Three XR, PartyKit, PartySocket, Three.js, Zustand, asset generation scripts.
- `partykit.json`: PartyKit deployment config.
- `CHANGELOG.md`: v0.1.0 through v0.6.2 entries, sprint roadmap, XR support, multiplayer, PartyKit pipeline, Quest 3 testing.
- `devnotes/rulesauditlog.md`: documents rule-source drift and the need for a single authoritative audit.

## Evidence Gaps

- **Gap:** No Git history means no commit hashes, branch history, or reverted work.
- **Gap:** File mtimes are last-modified dates, not guaranteed creation dates.
- **Gap:** Current package mtime is later than scaffold evidence; dependency introduction sequence needs caution.
