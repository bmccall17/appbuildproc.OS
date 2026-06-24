# TarotTALKS Normalized Timeline

| Milestone | Date | Evidence | Confidence |
|---|---|---|---|
| Idea / problem recognition | 2025-12-07 or earlier | Initial commit plus archived concept docs | Medium |
| First working prototype | 2025-12-07 | Phase 0/2 commits and deployment tests | Medium |
| Repository creation | 2025-12-07 | `ca5fdf5 Initial commit` | High |
| Initial deployment | 2025-12-07 | `eabcf21 Phase 0: Vercel Deployment Setup` | High |
| Persistence / data modeling | 2025-12-07 to 2025-12-08 | Database implementation, Supabase schema push, Drizzle config | High |
| Authentication / identity | Not primary | No direct auth milestone in inspected evidence | Low |
| External services | 2025-12-11 onward | YouTube API, Supabase, Vercel, Replicate, AT Protocol, Sentry | High |
| ADRs / architecture docs | Not explicit | No ADR trail found; docs archives/completion plans stand in | Low |
| Admin / operational tooling | 2026-02 to 2026-03 | Admin pages, diagnostics, platform quota monitor | High |
| Testing / reliability | 2025-12 onward, stronger in 2026 | Early disabled lint/type validity; later tests, Snyk, Sentry | Medium |
| Analytics / observability | 2026-02 to 2026-04 | Bluesky metrics cron, platform quota monitor, Sentry tags | High |
| Social / public presentation | 2025-12 onward | Metadata, favicon, high-res cards, social share images, videos | High |
| Feedback / stakeholder pressure | 2026-02 onward | Campaign workflows, Content Lab, admin lag fixes | Medium |
| Scaling / migration / correction | 2026-02 to 2026-03 | Supabase egress reduction, pooled connection fixes, admin performance | High |
| Documentation / handoff | 2025-12 onward | README/backstory, content rules, workflow docs, archived plans | High |

## Phase Interpretation

TarotTALKS follows a public-content product path:

1. Deploy and load content.
2. Build visual identity and card/talk experience.
3. Fill and correct content.
4. Add external media/API enrichment.
5. Build social share and campaign tooling.
6. Add admin diagnostics and platform cost controls.
7. Add Sentry/security/performance hardening.

The dominant loop is public presentation need -> asset/content tooling -> admin/campaign operation -> platform cost or observability correction.
