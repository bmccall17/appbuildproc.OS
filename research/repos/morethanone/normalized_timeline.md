# morethanone Normalized Timeline

| Milestone | Date | Evidence | Confidence |
|---|---|---|---|
| Idea / problem recognition | 2026-02-07 or earlier | Initial commit and first sprint | Medium |
| First working prototype | 2026-02-08 | `33a819a` first sprint; `60a29d5` v0.0.1 | High |
| Repository creation | 2026-02-07 | `9d76bfa Initial commit` | High |
| Initial deployment | By 2026-02-12 | `ce54343 Change project URL to new Vercel deployment` | Medium |
| Persistence / data modeling | 2026-02-08 to 2026-02-09 | Supabase migrations and host settings defaults | High |
| Authentication / identity | Not clearly present | No direct auth evidence in inspected logs/manifests | Low |
| External services | 2026-02-08 onward | Supabase Realtime, Vercel Analytics, later Gemini parsing | High |
| ADRs / architecture docs | Not clearly present | No ADR directory found in inspected evidence | Low |
| Admin / operational tooling | 2026-02-21 | Admin panel build and cheatsheet | High |
| Testing / reliability | 2026-02-09 onward | Migration backfills, race fixes, reveal edge cases, Jest config | High |
| Analytics / observability | 2026-02-11 | `85cfb80 Analytics...` | High |
| Social / public presentation | 2026-02-09 onward | `/demo`, FAQ/RCV world, real election scenarios, README updates | High |
| Feedback / stakeholder pressure | 2026-02-10 onward | Reveal edge cases, mobile voting, demo scenario improvements | Medium |
| Scaling / migration / correction | 2026-03-03 | Supabase security policy commit | High |
| Documentation / handoff | 2026-02-09 onward | Notes, admin cheatsheet, README revisions | High |

## Phase Interpretation

morethanone follows a live-loop maturation path:

1. Core ranking session.
2. Realtime replacement of polling.
3. Explainable processing/reveal.
4. Demo and education surface.
5. Moderation/quality controls.
6. Analytics and replay.
7. Admin and test rounds.
8. Security policies.

The dominant loop is live user/session edge case -> realtime or schema change -> host/admin control -> demo/documentation update.
