# Transition Map

This map converts the repo evidence into recurring phase transitions. It is not meant to be linear; projects can skip, repeat, or overlap transitions.

## T1: Idea -> Executable Seed

- **Previous state:** Concept, note, GDD, public need, or vague product impulse.
- **Triggering condition:** The idea can be tested only by making an interaction work.
- **Evidence:** ids GDD before scaffold; fd_demo rules PDF before scaffold; Kintsugi original GDD; AVLmc first Codex-built commit; TarotTALKS immediate app/database work.
- **New work:** Scaffold, core data types, first UI, first game loop, first route.
- **Mode:** Deliberate but fast.
- **Early warning signal:** If a concept has no executable loop after the first build session, force a smaller proof.

## T2: Executable Seed -> Real Runtime

- **Previous state:** Works locally or in a basic scaffold.
- **Triggering condition:** The product depends on live data, public access, multiplayer, or external callbacks.
- **Evidence:** agent828 Cloud Run/Docker on day one; AVLmc Vercel URL by day two; TarotTALKS Vercel setup day one; fd_demo/Kintsugi PartyKit; morethanone new Vercel deployment.
- **New work:** Hosting, deployment config, environment variables, external callback URLs, deployment docs.
- **Mode:** Deliberate for public products, opportunistic for games.
- **Early warning signal:** If the idea relies on external data/auth/webhooks/multiplayer, deploy before polishing UI.

## T3: Real Runtime -> Durable State

- **Previous state:** Runtime exists, but state is local, transient, duplicated, or manually held.
- **Triggering condition:** Users/operators need continuity across sessions, submissions, accounts, or reports.
- **Evidence:** AVLmc Aiven then Neon; agent828 migrations and Neon ADR; TarotTALKS Supabase content DB; morethanone Supabase migrations; repOptics research lake; Submission Cockpit flat-file persistence.
- **New work:** Schema, migrations, flat-file conventions, source-of-truth decisions, data repair.
- **Mode:** Deliberate for public apps, intentionally avoided for ephemeral games.
- **Early warning signal:** If a user can lose progress or an operator must copy data between places, choose a persistence model.

## T4: Durable State -> Identity

- **Previous state:** State exists, but it is not reliably attached to a person/account.
- **Triggering condition:** Personalization, private data, saved state, OAuth, or multi-email recovery matters.
- **Evidence:** AVLmc auth/Spotify/account spine; repOptics GitHub OAuth/private repo scanning; agent828 account lifecycle/contact identity; absence in local/game tools.
- **New work:** Auth provider, account table, OAuth flows, identity reconciliation, recovery/failure UI.
- **Mode:** Deliberate when product value requires continuity.
- **Early warning signal:** Do not add auth by default; add it when saved/private/personal data has real product meaning.

## T5: Working Loop -> Operational Visibility

- **Previous state:** Core product loop works but is hard to inspect, validate, or correct.
- **Triggering condition:** Operator cannot answer "what happened, what is pending, what is broken, what is owed next?"
- **Evidence:** Submission Cockpit; agent828 operator runs/admin panels; AVLmc admin portal/living OS; morethanone admin panel/test rounds; TarotTALKS admin diagnostics; Kintsugi balance dashboards.
- **New work:** Admin pages, dashboards, gauges, diagnostics, calculators, ledgers, test rounds, runbooks.
- **Mode:** Usually reactive to friction.
- **Early warning signal:** Once a product has live state and manual decisions, create the smallest admin view before the operator starts using ad hoc spreadsheets or mental state.

## T6: Operational Visibility -> Source-Of-Truth Consolidation

- **Previous state:** Multiple systems describe the same fact.
- **Triggering condition:** Drift creates wrong UI, duplicate work, bad claims, or operator confusion.
- **Evidence:** Submission Cockpit retiring `APPLICATION_QUEUE.md`; agent828 content queue Neon authority and context lake; AVLmc schema single source and Aiven->Neon; fd_demo rules audit; repOptics evidence states and snapshot integrity.
- **New work:** Shared modules, authoritative tables/files, queues, validators, migration scripts, archived stale artifacts.
- **Mode:** Reactive but high-value.
- **Early warning signal:** If two surfaces can disagree, either define one authority or build reconciliation immediately.

## T7: Useful Product -> Guardrails

- **Previous state:** Product works but mistakes are costly or repeated.
- **Triggering condition:** Security finding, duplicate-risk bug, CI break, account failure, cost spike, or untrustworthy public claim.
- **Evidence:** TarotTALKS Snyk fixes/Sentry; AVLmc cross-browser and real SQL account tests; Submission Cockpit reconciliation tests; agent828 CU-hour gates and integrity ledger; repOptics validators/Snyk; morethanone Supabase policies.
- **New work:** Tests, CI, security policies, Snyk, Sentry, validators, cost monitors.
- **Mode:** Often reactive.
- **Early warning signal:** When a failure would embarrass, charge money, send wrong email, lose data, or make a public claim false, add a guardrail before more features.

## T8: Working Product -> Public Object

- **Previous state:** Product functions but is not yet shareable or legible to outsiders.
- **Triggering condition:** Need to show, recruit, publish, demo, or invite feedback.
- **Evidence:** TarotTALKS metadata/social assets/content lab; AVLmc logo/OG/Twitter imagery; darketype weblog/OG/Hashnode; Kintsugi generated imagery/OG; morethanone demo/FAQ/RCV world.
- **New work:** Brand, copy, OG images, favicons, demos, public docs, campaign assets, blog posts.
- **Mode:** Deliberate once a product wants an audience.
- **Early warning signal:** If you are about to send a link to someone, public presentation is not optional.

## T9: Project Experience -> Process Artifact

- **Previous state:** A project has generated lessons, failures, or reusable workflows.
- **Triggering condition:** The same confusion would slow future humans/agents.
- **Evidence:** darketype posts, repOptics architecture/reference/claim hygiene, agent828 runbooks, AVLmc workflow/master roadmap, fd_demo rules audit, Submission Cockpit ADRs.
- **New work:** ADR, runbook, backlog item, public reflection, agent workflow, generated reference.
- **Mode:** Deliberate in newer projects.
- **Early warning signal:** If a future agent would need the same context, write the artifact while the evidence is fresh.

## Transition Summary

**Inferred:** The important switch is not "phase complete." The important switch is "the current artifact no longer carries enough truth." When the prototype, UI, README, admin panel, schema, or human memory stops being a reliable carrier of truth, Brett creates a new artifact that can carry it.
