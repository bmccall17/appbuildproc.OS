# agent828 Development Dossier

## Original Problem And Audience

**Observed:** The repository begins as a public-facing agent828 web/app surface on 2026-03-12, then rapidly expands into scheduling, contact capture, CRM, AI-assisted sales/marketing, email, persistence, admin review, and operational visibility.

**Inferred:** The audience shifts from external visitors/prospects to a dual audience: public users who encounter the agent828 surface, and internal operators/agents who need reliable state, review queues, and guardrails.

## Earliest Prototype

**Observed:** `7f76fd7` is the initial commit. Within hours, commits add local deployment/AI Studio config, 404 reporting, modal behavior, Dockerfile setup, Cloud Run port fixes, and system logs. The smallest usable version appears to be a deployed marketing/contact/scheduling surface rather than a throwaway local prototype.

## Major Milestones

- **Deployment:** Day-one Docker/Cloud Run work (`e2124a3`, `7bf790b`) and `ship v0.2.0 - east1 consolidation` (`06fb6e6`) show rapid movement into hosted operation.
- **Decision docs:** ADRs begin immediately (`425123d`, `a9dcc3b`), with a long ADR trail through ADR-035.
- **Scheduling:** Cal.com migration appears by `e903c7a` on 2026-03-14.
- **Brand/presentation:** `ship v0.2.4 - declassified brand kit` appears on 2026-03-15.
- **Persistence/CRM:** April and May migrations cover contact submissions, account lifecycle, drafts, email events, meetings, scope proposals, lead warming, relationship tiering, operator runs, and AI bench/lane observability.
- **Admin/operator tooling:** Admin API helpers, operator-run panels, lead chips, pending counts, and integrity audit ledgers appear heavily in May.
- **Observability/cost:** Bench Lab, AI telemetry lane attribution, freshness gate, Neon CU-hour throttles, and visibility-gated admin polling appear in late May/early June.

## Deployment History

**Observed:** Deployment is not a late concern. Docker, Cloud Run, region alignment, domain mapping, and CI enter the history within the first two days. Later operations tune scheduler cadence and Neon autosuspend behavior.

**Inferred:** agent828 crosses into operated-product mode almost immediately. The system has to survive external hosting, inbound contact, scheduling, AI-provider behavior, and data persistence rather than merely demonstrate a concept.

## Architectural Decisions

The ADR trail shows repeated transitions:

- Initial architecture and feature baseline.
- Cloud Run region alignment.
- Governance/docs remediation and GitHub Actions CI.
- Security hardening and GCP alignment.
- Calendar service migration.
- Marketing-agent architecture.
- Admin data integrity and lead pipeline expansion.
- Entity-to-CRM pipeline.
- Contact dedup and merge.
- Lead context/action engines.
- Persistence migration to Neon.
- Multi-provider AI and cluster repair.
- Single-writer context lake.
- Architecture knowledge graph.
- Content queue Neon authority and content freshness gate.

## Admin And Operations Evolution

**Observed:** Admin work is not generic polish. It appears when operational state becomes hard to trust: lead pipeline integrity, pending approval chips, operator-run ledgers, admin API helpers, cost guards, warming pause dashboards, and content freshness gates.

**Inferred:** The transition signal is "the system can do useful work, but the operator cannot safely see or correct what it is doing."

## Testing And Reliability Evolution

**Observed:** CI and test scripts exist early. Later commits reference CI fixes, rollup test coverage, fixture seeds, schema sync, fallback paths, and cost measurement. Reliability evolves from build hygiene into operational correctness and cost containment.

## Presentation And Distribution Evolution

**Observed:** Brand kit, dual-voice guidelines, public page copy, scheduling modal polish, and social/content work appear soon after deployment. Later content queue/freshness decisions formalize public publishing.

## Major Direction Changes

- Calendly to Cal.com migration.
- SQLite/local persistence toward Neon Postgres.
- Marketing agent to sales/marketing OS framing.
- Multi-provider AI and cluster repair.
- Content queue becoming Neon-authoritative.
- Cost/throughput tuning after Neon CU-hour pressure.

## Current State

**Observed:** agent828 is a mature operated product with local and cloud components, migrations, ADRs, admin surfaces, AI-provider lanes, content pipeline, inbound email, and operator-run history.

**Gap:** Current dirty files indicate recent operational work that should not be treated as committed chronology.

## Process Lessons

**Inferred:** agent828 shows Brett's full lifecycle loop: ship a working public system early, let operational friction expose missing visibility, then add ADRs, migrations, admin tooling, guardrails, and cost controls as concrete problems appear.
