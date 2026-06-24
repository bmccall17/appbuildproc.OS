# morethanone Evidence Index

Repository: `/home/bam/projects/morethanone`

## Repository State

- **Observed:** Git repository with 107 commits at inspection time.
- **Observed:** First commit: `9d76bfa|2026-02-07 20:50:05 -0500|Initial commit`.
- **Observed:** Working tree clean during inspection.
- **Observed:** No Git tags were returned by `git tag --sort=creatordate`, despite release-version commits.

## Significant Evidence

| Date | Evidence | Type | Why It Matters |
|---|---|---|---|
| 2026-02-07 | `9d76bfa` Initial commit | Git | Repository birth. |
| 2026-02-08 | `33a819a` first sprint massive commit | Git | Large first functional sprint. |
| 2026-02-08 | `9038e52` kicking off `/ship` capability | Git | Ship workflow appears early. |
| 2026-02-08 | `60a29d5` phase 1 complete for v0.0.1 | Git | First named release/phase. |
| 2026-02-08 | Realtime helper and polling replacement commits (`d8cfa17` through `1c9953b`) | Git | Supabase Realtime becomes essential to host/player flow. |
| 2026-02-09 | `035aa4c` migration to backfill host settings defaults | Git | Data model evolves after host settings are introduced. |
| 2026-02-09 | Host participation, show processing, stepped ranked-choice API, participant processing view | Git | Core loop matures from voting to explainable processing/reveal. |
| 2026-02-09 | `3342988` added `/demo`; `2a2a93a` v0.0.4 demo release | Git | Public/demo presentation appears early. |
| 2026-02-10 | Demo scenarios, reveal animation, timers, profanity filter, host removal controls | Git | Usability, moderation, and demo quality are iterated together. |
| 2026-02-11 | `85cfb80` Analytics, mobile sounds/haptics, quality, Run It Again | Git | Analytics and retention loop arrive after core flow. |
| 2026-02-12 | `ce54343` project URL to new Vercel deployment | Git | Deployment URL changes after initial release. |
| 2026-02-21 | `bc3090b` admin panel build; `f9f8d55` admin cheatsheet; `f4277ce` admin dashboard improvements | Git | Admin tooling arrives after real/demo complexity grows. |
| 2026-02-22 | `cf422ca` Gemini update; `aedd15c` admin test round capability; `58f1261` ship v0.0.10 | Git | AI parsing and admin test capability support operations. |
| 2026-02-23 | `4df3f49` ship v0.0.11 | Git | Planned maturity release in plan evidence. |
| 2026-03-03 | `dcb8140` new security policies for Supabase | Git | Security hardening arrives after product maturity. |
| 2026-03-11 | `32bee93` v0.0.12 | Git | Release sequence continues beyond plan's v0.0.11 note. |

## Supporting Files

- `supabase/schema.sql` and migrations for realtime, host settings, processing columns, reveal state, privacy, events, admin tables, related content, test flags, and policies.
- `jest.config.ts` and `package.json` test script.
- `package.json` includes Next.js, Supabase SSR/client, Vercel Analytics, drag-and-drop, QR code, HTML canvas/export dependencies, and Jest.

## Evidence Gaps

- **Gap:** Version releases are commit messages, not Git tags.
- **Gap:** Earliest deployment target is inferred from Next/Vercel and later URL commit; exact first live URL is not yet directly identified.
