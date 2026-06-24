# AppBuildProcOS Agent Specification

## Purpose

This file lets an AI agent classify the current state of a project, explain the evidence, identify missing artifacts, and recommend the next appropriate work without prematurely adding infrastructure.

## Input Evidence To Inspect

Inspect in this order:

1. User request and current goal.
2. Repo instructions such as `AGENTS.md`, `CLAUDE.md`, `.agent` workflows, or project-specific runbooks.
3. Git state: first commits, recent commits, tags, dirty/untracked files.
4. Current manifests: `package.json`, `pyproject.toml`, `requirements.txt`, deployment config, environment examples.
5. Docs: README, ADRs, PRDs, GDDs, backlog, changelog, ship log, architecture reference, runbooks.
6. Persistence: migrations, schema files, flat-file data contracts, storage adapters.
7. Runtime surfaces: routes/pages, admin panels, health endpoints, dashboards, scripts.
8. Tests/verification: test files, CI workflows, Snyk/Sentry/observability config, validators.
9. Public presentation: metadata, OG images, favicons, landing/demo pages, publishing scripts.

If Git is absent or misleading, say so and use file mtimes, changelogs, ADRs, and supplied exports with lower confidence.

## Evidence Labels

Use these labels in all reports:

- **Observed:** directly supported by inspected evidence.
- **Inferred:** reasonable conclusion from multiple observed facts.
- **Recommended:** proposed future action.
- **Gap:** evidence missing, weak, contradictory, or not inspected.

## State Classifier

Classify projects into one or more active states. A project can occupy several states at once.

### State: Executable Seed

**Evidence**

- Scaffold, first route, first game loop, first runnable command.
- Early GDD/problem note.
- Few or no operational artifacts.

**Likely Missing**

- Source-of-truth docs.
- Deployment/persistence.
- Tests beyond smoke checks.

**Recommended Next Work**

- Prove the smallest loop.
- Add run instructions.
- Avoid database/auth/admin unless specific pressure exists.

### State: Real Runtime

**Evidence**

- Deployment config, live URL, PartyKit config, local run script, external callback path.
- Environment examples or deployment docs.

**Likely Missing**

- Smoke test.
- Runtime troubleshooting notes.
- Production data model.

**Recommended Next Work**

- Verify live path.
- Document env/run/deploy.
- Add minimal observability if external service failures would block use.

### State: Durable State

**Evidence**

- Schema/migrations, database adapter, flat-file contract, persisted JSON/CSV, storage bucket.

**Likely Missing**

- Named authority.
- Migration/rollback note.
- Reconciliation behavior.

**Recommended Next Work**

- Declare source of truth.
- Add migration or data contract.
- Add a focused integrity test if duplicate state exists.

### State: Identity And Access

**Evidence**

- Auth library/provider, OAuth routes, sessions, account tables, private data access.

**Likely Missing**

- Recovery/failure cases.
- Multi-account or linking rules.
- Privacy boundaries.

**Recommended Next Work**

- Map identity model.
- Test account loop.
- Do not add auth if the product is local/ephemeral and has no identity pressure.

### State: Operational Visibility

**Evidence**

- Admin route, dashboard, diagnostic endpoint, operator ledger, runbook, design/balance calculator.

**Likely Missing**

- Clear status vocabulary.
- Pending/failure queues.
- Actionable next-step signals.

**Recommended Next Work**

- Build the smallest surface answering "what happened, what is pending, what is broken, what is owed next?"
- Prefer live/generated state over manual mirrors.

### State: Truth Consolidation

**Evidence**

- Duplicate state, retired artifact, shared definitions module, validator, reconciliation script, authoritative table/queue.

**Likely Missing**

- Tests around the drift case.
- Archive note for retired manual artifact.

**Recommended Next Work**

- Name the authority.
- Remove or generate stale copies.
- Add regression guard.

### State: Guardrails

**Evidence**

- Tests, CI, Snyk, Sentry, rate limits, security policies, cost monitors, validators, incident runbooks.

**Likely Missing**

- Direct mapping from guardrail to risk.
- Coverage for the actual failure.

**Recommended Next Work**

- Add narrow checks for known costly failures.
- Avoid broad ceremony if no risk is named.

### State: Public Object

**Evidence**

- README, landing/demo page, OG/Twitter metadata, favicon, social images, campaign assets, public post.

**Likely Missing**

- Current product name.
- Non-stock README.
- Accurate public claim/source alignment.

**Recommended Next Work**

- Update name/copy/metadata before sharing.
- Add screenshot or generated image if visual inspection matters.

### State: Reflection And Transfer

**Evidence**

- ADR, runbook, ship log, public reflection, agent workflow, generated architecture reference, presentation.

**Likely Missing**

- Evidence references.
- Current source-of-truth pointer.

**Recommended Next Work**

- Record hard decisions while fresh.
- Convert repeated process pain into a workflow/checklist.

## Infrastructure Restraint Rules

Do not recommend a database unless one of these is true:

- State must survive across sessions/users.
- Multiple agents/tools need shared state.
- Manual file state is already drifting.
- External reporting requires a durable historical record.

Do not recommend auth unless one of these is true:

- State belongs to a person/account.
- Private data or OAuth access is needed.
- Saved/personalized experience is core product value.

Do not recommend admin unless one of these is true:

- Operator cannot inspect pending/failed/owed work.
- Live state requires correction/moderation.
- Debugging requires database spelunking.
- For games, balance/rules/fidelity cannot be reasoned about from play alone.

Do not recommend CI/test expansion unless one of these is true:

- A known failure is costly.
- Public claims depend on generated data.
- Auth/data/email/payment/external-service behavior can regress.
- Multiple agents will modify the same behavior.

## Output Template

```markdown
## Project State

- Active states: [state names]
- Confidence: High/Medium/Low

## Evidence

- **Observed:** ...
- **Observed:** ...
- **Gap:** ...

## Missing Truth Carriers

- ...

## Recommended Next Work

1. ...
2. ...
3. ...

## Avoid For Now

- ...
```

## Completion Checks By State

| State | Completion Evidence |
|---|---|
| Executable Seed | Core loop runs; run command documented. |
| Real Runtime | Live/local runtime verified; env/deploy notes exist. |
| Durable State | Authority named; schema/contract exists; migration/reconcile path known. |
| Identity And Access | Account model and failure/recovery path tested or documented. |
| Operational Visibility | Operator can answer pending/broken/owed-next questions. |
| Truth Consolidation | Duplicate state retired or generated; regression guard exists. |
| Guardrails | Known costly failure is covered by focused check/monitor/policy. |
| Public Object | Public name/copy/metadata/assets match current product. |
| Reflection And Transfer | Decision/lesson captured with evidence and source-of-truth pointer. |

## Agent Behavior Rules

- Inspect current files and Git state before relying on memory.
- Treat dirty/untracked files as current-state evidence, not dated history.
- Preserve user changes; do not revert unrelated work.
- Prefer repo-native patterns over new abstractions.
- Use observed transition signals to choose next work.
- State uncertainty instead of smoothing over weak evidence.
- Keep public-facing artifacts separate from internal/operator notes.

## One-Line Policy

Add structure where truth is at risk; keep exploration loose where the idea is still searching.
