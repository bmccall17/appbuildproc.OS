# Cross-Project Pattern Analysis

## Method

Patterns below are drawn from the ten Cycle 2 repo dossiers and timelines. Frequency counts use this corpus:

1. agent828
2. repOptics
3. AVLmc
4. morethanone
5. TarotTALKS
6. fd_demo
7. ids
8. bmccall17.github.io / darketype
9. Submission Cockpit
10. KintsugiBlackjack

Labels:

- **Observed:** directly supported by per-repo evidence.
- **Inferred:** cross-project interpretation supported by multiple observed facts.
- **Recommended:** improvement for future AppBuildProcOS use.

## Recurring Phases Or States

| Pattern | Frequency | Confidence | Evidence |
|---|---:|---|---|
| Fast functional seed before full requirements | 10/10 | High | Every project has an early scaffold/prototype within the first dated window; AVLmc and ids are especially compressed. |
| Deployment or share surface appears early when the product is public | 6/10 | High | agent828, repOptics, AVLmc, morethanone, TarotTALKS, darketype; Kintsugi also reaches PartyKit early by export. |
| Persistence appears when live state must survive sessions or operators | 6/10 | High | agent828, repOptics, AVLmc, morethanone, TarotTALKS, Submission Cockpit; absent/deferred in game experiments. |
| Admin/operator visibility appears after the core loop becomes useful but opaque | 7/10 | High | agent828, AVLmc, morethanone, TarotTALKS, Submission Cockpit, KintsugiBlackjack, repOptics. |
| Documentation becomes a control plane, not just explanation | 9/10 | High | ADRs/runbooks/PRDs/workflows appear across all except the smallest committed ids seed, which still has GDD/devnotes. |
| Testing arrives either very early or after a concrete risk | 8/10 | High | repOptics early tests; AVLmc reliability tests after auth/account complexity; Submission Cockpit tests after duplicate-risk drift; morethanone after realtime/reveal edge cases; games rely more on manual checks. |
| Social/public presentation is a real phase, not final polish | 5/10 | High | TarotTALKS, AVLmc, darketype, KintsugiBlackjack, agent828 brand/voice work. |
| Reversibility protects exploration | 4/10 | Medium | Kintsugi theme layer, Submission Cockpit queue retirement, morethanone polling-to-realtime migration, agent828 service/provider migrations. |
| Source-of-truth consolidation is a repeated maturity move | 6/10 | High | agent828 Neon authority/context lake, repOptics evidence states/snapshot integrity, AVLmc schema consolidation, Submission Cockpit shared definitions, fd_demo rules audit, morethanone migrations/security policies. |
| Reflection/publication loops feed later process | 3/10 direct, 7/10 indirect | Medium | darketype, repOptics, agent828 directly; other projects feed public or internal docs that shape future work. |

## Dominant Sequence

**Inferred:** The dominant AppBuildProcOS sequence is not waterfall. It is a set of overlapping tracks:

1. **Spark and scaffold:** create the smallest project shell capable of demonstrating the core interaction.
2. **Make it real:** deploy, connect data, or expose the project to a real runtime quickly if publicness matters.
3. **Find the live loop:** identify the user/operator action that proves the concept.
4. **Instrument the blind spots:** build admin, diagnostics, logs, dashboards, or design calculators once the loop is too opaque.
5. **Collapse drift:** remove duplicate sources of truth, consolidate schemas, or formalize shared definitions.
6. **Harden after evidence:** add tests, security, CI, validators, and monitoring after a concrete risk or repeated failure makes the cost visible.
7. **Package for others:** add social images, docs, release notes, public posts, demos, or presentation surfaces when the work needs to be shared.
8. **Reflect and feed forward:** turn hard-won lessons into ADRs, runbooks, backlog items, public essays, or agent-readable workflows.

## Recurring Transition Triggers

| Trigger | What It Usually Means | Evidence |
|---|---|---|
| "It works but I cannot see what it is doing" | Add admin/ops visibility | agent828 operator panels, AVLmc admin OS, Submission Cockpit, Kintsugi dashboards. |
| "Two things disagree about the same fact" | Collapse source of truth | Submission Cockpit tracker/scraper/reconciler, agent828 content queue/context lake, AVLmc schema consolidation, fd_demo rules audit. |
| "The public will see this" | Add brand/social/metadata/presentation | TarotTALKS, AVLmc, darketype, Kintsugi, agent828. |
| "The external service is constraining us" | Add fallback, migration, or cost guard | agent828 Neon/Resend/CU-hour, TarotTALKS Supabase/Vercel quota, AVLmc Aiven->Neon, repOptics GitHub/Port/Sentry. |
| "The agent or human might repeat a mistake" | Add ADR/runbook/test/validator | repOptics validators, Submission Cockpit tests, agent828 runbooks, fd_demo rules audit. |
| "The game/system feels alive but not balanced" | Build design instrumentation | Kintsugi dashboards, fd_demo rules/asset audits, ids debug/test expansion. |

## Technical Choices That Repeat

- **Observed:** Next.js/Vercel/React is the default public web-app stack for AVLmc, morethanone, TarotTALKS, and repOptics.
- **Observed:** PartyKit appears in game/realtime experiments: fd_demo, ids, KintsugiBlackjack.
- **Observed:** Postgres/Neon/Aiven/Supabase appear when state must survive real users or operators.
- **Observed:** ADRs and runbooks appear most strongly in operated products and agent-supported systems.
- **Observed:** Snyk/Sentry/CI appear after publicness/security/observability becomes consequential, not always at scaffold time.

## Late-Arriving Concerns

| Concern | Projects | Interpretation |
|---|---|---|
| Security hardening | agent828, TarotTALKS, morethanone, repOptics | Often follows exposure, platform limits, or scan findings. |
| Test coverage | AVLmc, Submission Cockpit, ids current state, TarotTALKS | Often follows a concrete risk rather than scaffold. repOptics is the exception with early tests. |
| Source-of-truth cleanup | agent828, AVLmc, Submission Cockpit, fd_demo, repOptics | Repeatedly arrives after duplicate state or conflicting evidence becomes painful. |
| Human-facing README | KintsugiBlackjack, Submission Cockpit | In agent-heavy/local projects, agent docs and ADRs can outrun public docs. |
| Auth | AVLmc, repOptics; absent in local/game tools | Auth is added when account continuity matters, not by default. |

## Improvements Across Successive Projects

**Observed:** Later projects encode more process directly:

- agent828: ADRs, runbooks, operator runs, admin ledgers.
- repOptics: architecture generation, research validators, evidence states.
- AVLmc: product workflow, master roadmap, PRDs, system map, focused test scripts.
- Submission Cockpit: ADRs and tests added even to a local-only tool.

**Inferred:** Brett's process has become increasingly agent-readable: decisions, state surfaces, and validation commands are more likely to be explicit in newer repositories.

## Core AppBuildProcOS Hypothesis

**Inferred:** Brett does not primarily move through "requirements -> design -> implementation -> test -> deploy." He moves through:

1. **Make the idea executable.**
2. **Expose it to a real environment.**
3. **Notice where reality creates friction.**
4. **Build the missing instrument or source of truth.**
5. **Record the decision once it becomes expensive to rediscover.**
6. **Package the result for the next human or agent.**

The strength is speed, generative exploration, and high responsiveness to real friction. The recurring risk is that guardrails sometimes arrive only after drift, cost, security, or reliability issues have already surfaced.
