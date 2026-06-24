# AppBuildProcOS Evidence Traceability Matrix

## Purpose

This matrix connects the final AppBuildProcOS states back to the evidence package. It is designed for review: a human or agent should be able to see which claims are strongly supported, which are conditional, and where to inspect the underlying project evidence.

The matrix uses the evidence labels from `methodology.md`:

- **Observed:** directly supported by inspected repository evidence or supplied satellite export evidence.
- **Inferred:** a cross-project conclusion supported by multiple observed facts.
- **Gap:** evidence is absent, weak, contradictory, or intentionally not applicable.

## Source Chain

The traceability chain is:

1. `appbuildproc_plan.md` defines the research goal and deliverables.
2. `methodology.md` defines evidence rules and confidence labels.
3. `repos/<project>/evidence_index.md` records project-specific source evidence.
4. `repos/<project>/development_dossier.md` turns evidence into a case study.
5. `repos/<project>/normalized_timeline.md` maps each project into common milestones.
6. `cross_project_patterns.md`, `transition_map.md`, `variation_and_exceptions.md`, and `chaos_and_rework.md` synthesize cross-project patterns.
7. `brett_build_os.md` and `brett_build_os_agent.md` express the final human and agent operating models.

## State-Level Traceability

| AppBuildProcOS State | Core Claim | Strongest Supporting Evidence | Counterexamples Or Limits | Confidence | Audit Path |
|---|---|---|---|---|---|
| Spark To Executable Seed | Brett tends to learn by making the smallest runnable loop rather than by completing requirements first. | `cross_project_patterns.md` reports fast functional seed in 10/10 projects. Normalized timelines show early prototypes in agent828, repOptics, AVLmc, morethanone, TarotTALKS, fd_demo, ids, darketype, Submission Cockpit, and KintsugiBlackjack. | Some earliest dates are lower confidence where Git is absent or current state is uncommitted, especially fd_demo, ids, Submission Cockpit, and KintsugiBlackjack. | High | Read `cross_project_patterns.md`, then sample `repos/*/normalized_timeline.md` rows for "First working prototype." |
| Real Runtime | Brett moves projects into real runtime early when external constraints, publicness, multiplayer, callbacks, or stakeholder visibility matter. | agent828 reaches Docker/Cloud Run immediately; AVLmc reaches Vercel by day two; TarotTALKS includes day-one Vercel/Supabase work; morethanone reaches Vercel; fd_demo, ids, and KintsugiBlackjack use PartyKit or PartySocket; darketype deploys through GitHub Pages. | Submission Cockpit is intentionally localhost-only. This is not a failure of runtime pressure; its real environment is the local operator cockpit. | High for public/realtime projects; Medium for universal claim | Read `transition_map.md` T2 and `variation_and_exceptions.md` "Public Web Apps vs. Local Tools." |
| Durable State | Persistence appears when facts must outlive a session, operator memory, or a single UI surface. | agent828 migrations/Neon, repOptics research lake/schema, AVLmc Aiven then Neon, morethanone Supabase, TarotTALKS Supabase/Drizzle, Submission Cockpit tracker/per-role JSON and reconciler evidence. | Games often defer durable state. fd_demo and ids do not show a central database; KintsugiBlackjack relies on in-memory PartyKit and localStorage in the export. | High for operated/data products; Medium as a general state | Read `transition_map.md` T3 and each normalized timeline "Persistence / data modeling" row. |
| Identity And Access | Auth is conditional. It appears when product value depends on private data, account continuity, saved state, or external identity. | AVLmc has auth, Spotify, and account-spine work; repOptics has GitHub OAuth/private repo scanning; agent828 has account/contact identity. | Submission Cockpit, KintsugiBlackjack, fd_demo, ids, and darketype omit or minimize auth by design. morethanone and TarotTALKS do not show identity as a central inspected milestone. | High | Read `variation_and_exceptions.md` "Auth Is Conditional, Not Default" and `transition_map.md` T4. |
| Operational Visibility | Once the core loop works but becomes opaque, Brett builds surfaces that answer what happened, what is pending, what is broken, and what is owed next. | agent828 operator panels and ledgers; AVLmc admin OS; morethanone admin panel/test rounds; TarotTALKS admin diagnostics/quota monitor; Submission Cockpit dashboard; KintsugiBlackjack balance dashboards; repOptics Port/research panels. | Games often use balance, debug, rules, or asset instrumentation rather than business-admin panels. ids has debug/test expansion, not a conventional admin system. | High | Read `transition_map.md` T5, `variation_and_exceptions.md` "Operated Products vs. Creative Games," and development dossier "Admin And Operations Evolution" sections. |
| Truth Consolidation | When multiple surfaces describe the same fact, Brett eventually names or builds an authority. | Submission Cockpit retires `APPLICATION_QUEUE.md` in favor of live panel/shared definitions; agent828 consolidates content queue/context lake authority; repOptics develops evidence states and snapshot integrity; AVLmc consolidates schema and migrates Aiven to Neon; fd_demo runs rules audits. | This move is often reactive. Evidence shows value, but also shows the cost of waiting until drift is painful. | High | Read `transition_map.md` T6 and `chaos_and_rework.md` "Duplicate Sources Of Truth." |
| Guardrails After Evidence | Tests, security, CI, validators, monitors, and cost controls tend to arrive when risk becomes specific rather than at scaffold time. | repOptics has unusually early tests and later validators; AVLmc adds account-loop SQL/cross-browser tests after auth complexity; Submission Cockpit adds tests after duplicate-risk drift; TarotTALKS adds Snyk/Sentry; agent828 has CI, fallback work, CU-hour gates, and integrity ledger; morethanone adds security policies. | KintsugiBlackjack lacks automated tests in the export. Game projects lean more on manual/rules/debug validation. | High for pattern; Medium for timing precision | Read `transition_map.md` T7, `chaos_and_rework.md` "Late Guardrails After Known Risk," and normalized timeline "Testing / reliability" rows. |
| Public Object | Presentation, metadata, demos, social assets, and publication surfaces are part of the product, not decorative afterthoughts. | TarotTALKS is presentation-heavy from early stages; AVLmc adds logo/OG/Twitter imagery; darketype is a publication surface; KintsugiBlackjack has generated imagery/OG metadata; morethanone has demo/FAQ/RCV-world materials; agent828 has voice/brand/content queue work. | Submission Cockpit is intentionally not public-facing. ids has no inspected public/OG evidence. | High | Read `transition_map.md` T8, `variation_and_exceptions.md` "Presentation Can Lead Or Lag," and normalized timeline "Social / public presentation" rows. |
| Reflection And Transfer | Mature projects convert hard-won lessons into ADRs, runbooks, workflows, public reflections, generated references, or agent handoff artifacts. | agent828 has ADRs/runbooks/backlog/AI workload handoff; repOptics has architecture references, validators, and research run artifacts; darketype publishes reflections and workflow artifacts; AVLmc has workflow/master roadmap/PRDs; fd_demo has changelog, rules audits, and agent workflows; Submission Cockpit has ADRs and queue archives. | The form varies by project type. morethanone and TarotTALKS show handoff and docs but less formal ADR evidence. ids has GDD/devnotes/ship log rather than mature process artifacts. | High | Read `transition_map.md` T9, `variation_and_exceptions.md` "Documentation Forms Differ By Project Type," and dossier "Process Lessons" sections. |

## Project Coverage Map

Legend:

- `Y`: strong evidence for the state.
- `P`: partial, indirect, or project-type-specific evidence.
- `N`: no meaningful inspected evidence.
- `NA`: intentionally not applicable to the project pressure.

| Project | Seed | Runtime | Durable State | Identity | Ops Visibility | Truth Consolidation | Guardrails | Public Object | Reflection |
|---|---|---|---|---|---|---|---|---|---|
| agent828 | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| repOptics | Y | P | Y | Y | Y | Y | Y | Y | Y |
| AVLmc | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| morethanone | Y | Y | Y | N | Y | P | Y | Y | P |
| TarotTALKS | Y | Y | Y | P | Y | P | Y | Y | P |
| fd_demo | Y | Y | P | NA | P | Y | P | P | Y |
| ids | Y | P | N | NA | P | N | P | N | P |
| darketype | Y | Y | P | NA | P | P | P | Y | Y |
| Submission Cockpit | Y | Y | Y | NA | Y | Y | Y | NA | Y |
| KintsugiBlackjack | Y | Y | P | NA | Y | P | P | Y | Y |

## Claims That Are Strong Enough To Teach

These claims are supported strongly enough to use in the human and agent models:

1. The process starts by making the idea executable.
2. Real runtime appears early when runtime pressure is intrinsic to the idea.
3. Durable state is pressure-driven, not automatic.
4. Auth is conditional, not boilerplate.
5. Operational visibility is a recurring maturity move.
6. Source-of-truth consolidation is one of the most important rework-reduction moves.
7. Guardrails work best when tied to named risks.
8. Public presentation is product work when the project needs an audience.
9. Reflection and documentation become stronger in later and more agent-mediated projects.

## Claims That Should Stay Conditional

These claims need caveats in teaching or agent use:

1. "Deploy early" should not be applied blindly to local tools like Submission Cockpit.
2. "Add admin" should include game-specific instrumentation such as balance dashboards, debug overlays, rules audits, and asset inventories.
3. "Add tests" should be tied to concrete risk; KintsugiBlackjack shows decision rigor without automated tests.
4. Git history is not always the full history; dirty working trees, satellite exports, ADRs, file mtimes, and changelogs must be considered.
5. Public packaging is essential for shareable work, but not for private local operator tools.

## Falsifiability Checks

The model would need revision if future evidence shows any of the following:

1. Multiple rich Brett projects that begin with heavy formal requirements and infrastructure before an executable loop.
2. Public or operated projects that succeed without early runtime exposure, durable state, visibility, or source-of-truth work.
3. A consistent pattern of auth being added as boilerplate before identity pressure exists.
4. Evidence that public presentation work is usually unrelated to product progress.
5. Agent-mediated projects where explicit docs, ADRs, runbooks, or validators do not improve continuation quality.

## Reviewer Use

Use this file while reviewing `brett_build_os.md` and `brett_build_os_agent.md`.

For each state, ask:

1. Is the evidence strong enough for the model to teach this as a real Brett pattern?
2. Are the exceptions clear enough to prevent rigid checklist behavior?
3. Does the agent spec preserve these caveats?
4. Does the human OS keep the useful speed and exploration intact?
