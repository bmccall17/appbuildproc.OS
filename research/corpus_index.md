# AppBuildProcOS Corpus Index

Generated from the plan file, local repository checks, Git history, manifests, and the two supplied satellite exports.

## Summary

| Project | Type | Evidence Basis | First Dated Evidence | Current Evidence Frontier | Stack Snapshot | Notes |
|---|---|---:|---|---|---|---|
| agent828 | Primary | Git + ADRs + docs + config | 2026-03-12 initial commit `7f76fd7` | 2026-06-03 ship commits in local log sample; 35 ADRs present through ADR-035 | React/Vite, Express, SQLite/Neon/Postgres, Resend, AI providers, Docker, GitHub Actions | Richest lifecycle and operations trail. |
| repOptics | Primary | Git + ADRs + architecture graph + research runs | 2026-01-20 first commit `1ad8a02` | 2026-06-22 weekly research snapshot integrity commits | Next.js, Neon, Upstash, Sentry, NextAuth, Octokit, AI SDK/Gemini, Vitest | Meta-process product; strongest evidence for process becoming explicit. |
| AVLmc | Primary/control | Git + product docs + system registry | 2026-06-04 initial commit `2ebcf07` | 2026-06-18 auth/account-loop and admin commits | Next.js, NextAuth, Postgres/Aiven, Vercel Blob, Spotify, Playwright | Compressed build; useful control for instinctive sequencing. |
| morethanone | Primary | Git + releases/tags + tests/config | 2026-02-07 initial commit `9d76bfa` | 2026-03-03 Supabase security policy commit; tags through v0.0.11 | Next.js, Supabase Realtime, Vercel Analytics, Jest | Operated group-decision product with release progression and admin maturity. |
| TarotTALKS | Secondary | Git + docs + release tags + manifests | 2025-12-07 initial commit `ca5fdf5` | 2026-04-13 Sentry/admin route instrumentation and ship commits; tags through v1.6.5 | Next.js, Supabase, Vercel Postgres, Drizzle, Sentry, Vercel Analytics, Replicate, social tooling | Best public-presentation/social-distribution evidence. |
| fd_demo | Secondary | No Git in local checkout; mtimes + docs + changelog | 2026-01-31 Vite/PartyKit scaffold mtimes; rules PDF 2026-01-27 | 2026-02-22 asset cheatsheet mtime; 2026-02-21 build artifacts | Vite, React, React Three Fiber, XR, PartyKit, Zustand | Must be treated like no-Git archaeology. |
| ids | Secondary | Git + manifest + PartyKit config | 2026-02-15 scaffold commit `fc522a3` | 2026-02-15 final sampled commit `ce384a4`; 10 commits total | Vite, TypeScript, Three.js, PartyKit/Partysocket, Tone.js, Vitest | Compact concept-to-prototype game evidence. |
| bmccall17.github.io / darketype | Secondary | Git + workflows + generated weblog artifacts | 2026-02-05 initial commit `f22daaa` | 2026-06-15 post/index automation commits | Static GitHub Pages, custom weblog build, OG generation, GitHub Actions, Canvas | Meta-publishing and reflection surface. |
| Submission Cockpit | Satellite | Supplied export; Git misleading because fork/uncommitted working tree | 2026-03-20 upstream first commit; Cockpit begins around 2026-06-05 by mtime | 2026-06-22 ADR-007/activity UI in export | Python stdlib local web app, flat files, MCP, LaTeX/Poppler tooling | Local-only human-in-loop operations tool; history mostly outside Git. |
| KintsugiBlackjack | Satellite | Supplied export; no Git | Around 2026-05-27 Vite scaffold mtimes | 2026-06-06 admin dashboards/build artifacts in export | React/Vite, PartyKit, PartySocket, CSS modules, no DB/auth/tests | Creative/agentic game experiment with strong ADR/backlog evidence but no VCS. |

## Verified Local Accessibility

All eight local project paths in `appbuildproc_plan.md` exist under `/home/bam/projects`.

`fd_demo` is not a Git repository at the current path. This is not a blocker, but it changes the evidence standard: commit hashes cannot be used for that project unless a different checkout is later provided.

## Local Repository Evidence Snapshots

### agent828

- **Observed:** Git history starts on 2026-03-12 with `7f76fd7 Initial commit`.
- **Observed:** Infrastructure appears immediately: `e2124a3 setting up dockerfile for could build`, `7bf790b fixing the cloud run port!`, `a9dcc3b ADR-002: Document Cloud Run region mismatch fix`, `06fb6e6 ship v0.2.0 - east1 consolidation`.
- **Observed:** ADRs exist from `docs/adr/001-initial-sprint-baseline.md` through `docs/adr/035-content-freshness-gate.md`.
- **Observed:** Current manifest includes React, Express, SQLite/Postgres, Resend, AI providers, Zod, Vitest, Docker, and GitHub Actions.
- **Inferred:** This is the clearest case of "prototype becomes operated product": deployment, region fixes, CI, security hardening, analytics, CRM, persistence migration, admin review, and operator-run visibility all become explicit over time.

### repOptics

- **Observed:** Git history starts on 2026-01-20 with `1ad8a02 manual commit`.
- **Observed:** Early commits move quickly from report/debugging to generator, dependency audit, ADR log, CODEOWNERS, CI, and architecture diagram by 2026-01-22.
- **Observed:** ADRs exist from `docs/adr/0001-record-architecture-decisions.md` through `docs/adr/0051-weekly-research-snapshot-integrity.md`.
- **Observed:** Current scripts include `arch:generate`, `arch:check`, `arch:impact`, `research:run`, `security:snyk`, and `verify:precommit`.
- **Inferred:** repOptics is the strongest evidence that Brett's process becomes self-aware: the product evolves from scanner/reporting into architecture references, research runs, evidence-aware scoring, trust registries, and claim hygiene.

### AVLmc

- **Observed:** Git history starts on 2026-06-04 with `2ebcf07 initial commit! 100% built by Codex`.
- **Observed:** Persistence and deployment are introduced almost immediately: `6ca2c1e Converted community persistence to Aiven`, `e94cba2 big ass long 2nd sprint to make this thing live`, `9bef8c6 Update deployment docs for Aiven launch`, `c11d9af new URL avlmc.vercel.app`.
- **Observed:** Auth and personalization appear within days: `241cefe auth build`, `212781e spotify auth & backlink working!`, `83d0728 Personalized Discovery Phase 5 - MASSIVE sprint`, `bca888a Impression tracking wired for top visible cards`.
- **Observed:** Admin and presentation follow shortly: `db88f6b admin portal v1 - by Antigravity`, `c0a6cdf new logo & imagery`, `b20ce52 fixing public header layout & branding`, `2c02b2b og image & twitter image`.
- **Inferred:** AVLmc compresses the instinctive sequence into a two-week control sample: live data, deploy, auth, external identity, personalization, analytics, admin, brand/social, then deep account-loop hardening.

### morethanone

- **Observed:** Git history starts on 2026-02-07 with `9d76bfa Initial commit`.
- **Observed:** Supabase Realtime appears during the first sprint on 2026-02-08 through multiple helper and polling-replacement commits.
- **Observed:** Host/admin and algorithmic processing evolve on 2026-02-09 through host participation toggles, processing status, stepped ranked-choice API route, and live reveal.
- **Observed:** Later maturity appears as analytics, sound, metrics, mobile fixes, admin panel, admin test rounds, and Supabase security policies.
- **Observed:** Tags/releases exist through v0.0.11.
- **Inferred:** morethanone is the strongest "operated group tool" evidence: core loop first, realtime reliability next, then admin, analytics, guardrails, and security policies.

### TarotTALKS

- **Observed:** Git history starts on 2025-12-07 with `ca5fdf5 Initial commit`.
- **Observed:** Deployment, database, and content loading appear in the first day: `Phase 0: Vercel Deployment Setup`, `implementing database and uploading cards & talks`, `Database schema pushed to Supabase`, `upload 75 talks into the db`.
- **Observed:** Public presentation and assets are central: design integration, metadata update, favicon, high-res cards, README/backstory, social campaign assets, and social share images.
- **Observed:** Later operations include platform quota monitor, Content Lab, Bluesky metrics cron, admin diagnostics, Sentry route instrumentation, and Snyk-driven security fixes.
- **Inferred:** TarotTALKS is the best evidence that presentation/distribution can become a primary phase, not merely polish.

### fd_demo

- **Observed:** Current local path is not a Git repo.
- **Observed:** Earliest local artifact is `rules/ForbiddenDesertTM-RULES.pdf` mtime 2026-01-27; Vite scaffold files appear around 2026-01-31 16:08; `partykit.json` appears 2026-01-31 19:58; `party/index.ts` appears 2026-01-31 22:56.
- **Observed:** Key docs include `CHANGELOG.md`, `PROJECT_STATUS.md`, `README.md`, `RELEASE_CHECKLIST_v0.5.0.md`, `claudesplan_xrmultiplayerarchitecture_v2.md`, and several devnotes/audit files.
- **Observed:** Current manifest includes React, Three.js, React Three Fiber, XR, PartyKit, PartySocket, Zustand, asset generation scripts, and PartyKit deploy script.
- **Inferred:** fd_demo appears to move from rules ingestion and prototype to XR/multiplayer infrastructure, release checklist, asset pipeline, and rules audit.

### ids

- **Observed:** Git history contains 10 commits, all on 2026-02-15.
- **Observed:** Sequence is unusually clean: scaffold, constants, boid data, simulation, arena/camera, renderer, input, conversion mechanic, HUD, audio.
- **Observed:** Current manifest includes Three.js, Tone.js, PartySocket, PartyKit, Vite, TypeScript, Vitest.
- **Inferred:** ids is a compact prototype/control showing how Brett decomposes a game mechanic into simulation, rendering, input, scoring, and atmosphere before operational layers appear.

### bmccall17.github.io / darketype

- **Observed:** Git history starts on 2026-02-05 with `f22daaa Initial commit`.
- **Observed:** GitHub Actions deployment appears in the second commit.
- **Observed:** The site quickly becomes a meta-reflection surface: manifesto, first entry, signature visuals, experimental toggles, and later automated weblog/OG/rebuild workflows.
- **Observed:** Current scripts include weblog build, OG image generation, Hashnode sync, and static build.
- **Inferred:** darketype is not only a portfolio; it is a public reflection and publication mechanism for process artifacts from other projects.

### Submission Cockpit

- **Observed:** The supplied export says Git is the wrong lens because the project is a fork with the important Cockpit work mostly uncommitted.
- **Observed:** Cockpit evidence begins around 2026-06-05 by `dashboard/run.sh` mtime, with ADRs from 2026-06-07 through 2026-06-22.
- **Observed:** Persistence is flat-file, local-first, and no-auth by design.
- **Observed:** Testing arrives late around 2026-06-21 after shared matching/reconciliation drift created duplicate-application risk.
- **Inferred:** This is the clearest local-only operations example: the product is an operator cockpit whose rigor lives in ADRs, archive snapshots, and MCP surface rather than Git.

### KintsugiBlackjack

- **Observed:** The supplied export says the repository is not a Git repository.
- **Observed:** File mtimes indicate a Vite/React/PartyKit game beginning around 2026-05-27, with 12 ADRs from 2026-05-28 through 2026-06-03.
- **Observed:** The project pivots from Blackjack Victory to Kintsugi with Morty through a reversible theme layer rather than a rewrite.
- **Observed:** Admin/balance dashboards appear by 2026-06-06, while persistence, auth, tests, CI, and security are absent.
- **Inferred:** This is the clearest evidence of creative pivot plus instrumentation-before-content in a game context.

## Corpus Risks

- `fd_demo` lacks Git evidence in the current local checkout.
- Submission Cockpit and KintsugiBlackjack rely on supplied exports, not direct local repository inspection.
- Several repos include installed dependency directories, so broad file scans must exclude `node_modules`, `.next`, `dist`, and generated artifacts.
- Some repository names drift (`bmccall17.github.io` / darketype, `BlackjackVictory` / KintsugiBlackjack, Submission Cockpit inside an upstream fork). Dossiers must preserve the naming drift as evidence, not clean it away.
