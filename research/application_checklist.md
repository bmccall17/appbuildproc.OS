# AppBuildProcOS Application Checklist

## Purpose

Use this checklist when applying AppBuildProcOS to a new or existing repository. It converts the model into a practical inspection and next-action routine for humans and AI agents.

This is not a generic project-management checklist. It is a way to ask: what state is this project actually in, what evidence proves that, and what kind of work is now warranted?

## Step 1: Establish Evidence

Inspect these sources before recommending work:

1. Current user goal or product question.
2. Repo instructions: `AGENTS.md`, `CLAUDE.md`, runbooks, workflow docs.
3. Git status, first commits, recent commits, tags, releases, and dirty files.
4. README, GDD, PRD, ADRs, changelog, backlog, ship log, architecture docs.
5. Manifests and configuration: package files, deployment config, environment examples.
6. Persistence evidence: migrations, schemas, storage adapters, flat-file contracts.
7. Runtime surfaces: routes, pages, admin panels, dashboards, scripts, health endpoints.
8. Verification surfaces: tests, CI, Snyk, Sentry, validators, smoke scripts.
9. Public surfaces: metadata, OG images, favicons, landing pages, demos, publishing workflows.

Record facts as:

- **Observed:** directly supported by inspected evidence.
- **Inferred:** reasonable interpretation from several observed facts.
- **Recommended:** future action.
- **Gap:** evidence absent, weak, contradictory, or not inspected.

## Step 2: Classify Active States

Select every state that currently applies. Projects can occupy several states at once.

| State | Active When |
|---|---|
| Spark To Executable Seed | The smallest runnable interaction, route, game loop, parser, scanner, or workflow is still being proven. |
| Real Runtime | The next truth requires deployment, callbacks, multiplayer, local operator runtime, or external service behavior. |
| Durable State | Facts must survive reloads, sessions, agents, users, submissions, or operator memory. |
| Identity And Access | State belongs to a person/account, private data, OAuth identity, or recovery path. |
| Operational Visibility | The system works but the operator cannot see what happened, what is pending, what is broken, or what is owed next. |
| Truth Consolidation | Two surfaces can disagree about the same fact. |
| Guardrails After Evidence | A known failure would be costly, public, repeated, unsafe, or hard to recover from. |
| Public Object | The work needs to be sent, shown, shared, published, recruited around, or trusted by outsiders. |
| Reflection And Transfer | A future human or agent would need the same context to continue safely. |

## Step 3: Identify The Current Pressure

Ask which pressure is real right now:

- **Idea pressure:** The core interaction is not proven.
- **Runtime pressure:** Local behavior cannot answer the next question.
- **State pressure:** Data can be lost, duplicated, or misremembered.
- **Identity pressure:** The product cannot keep ownership or privacy straight.
- **Visibility pressure:** Humans or agents cannot inspect the system's real status.
- **Truth pressure:** Duplicate sources of state or logic are drifting.
- **Risk pressure:** A known failure would be expensive or embarrassing.
- **Audience pressure:** The project must make sense to someone outside the build loop.
- **Transfer pressure:** The next operator or agent will need context.

Do not add structure for imagined pressure. Add it where evidence shows the current artifact no longer carries enough truth.

## Step 4: Choose The Smallest Next Artifact

| Pressure | Smallest Useful Artifact |
|---|---|
| Idea pressure | Smaller executable proof, local run command, GDD clarification, first route or loop. |
| Runtime pressure | Deployment path, callback test, PartyKit room, local operator run script, smoke check. |
| State pressure | Schema, migration, flat-file contract, source-of-truth note, backup/rollback note. |
| Identity pressure | Auth model, account table, OAuth flow, recovery case, privacy boundary. |
| Visibility pressure | Admin view, dashboard, diagnostic script, status vocabulary, operator runbook. |
| Truth pressure | Shared definition, authoritative table/file, retired mirror, validator, reconciliation script. |
| Risk pressure | Focused test, Snyk/Sentry/CI check, cost guard, rate limit, incident note. |
| Audience pressure | README update, metadata, demo, favicon, OG image, public copy, launch checklist. |
| Transfer pressure | ADR, runbook, ship log, agent workflow, generated reference, retrospective note. |

## Step 5: Apply Restraint Rules

Do not recommend a database unless one is needed for surviving state, shared agent/human state, drift reduction, or historical reporting.

Do not recommend auth unless state belongs to a person/account, private data is involved, or saved personalization is core to value.

Do not recommend admin unless the operator cannot inspect pending, failed, broken, owed, or corrective work.

Do not recommend broad test expansion unless there is a named failure, public claim, auth/data/email/payment/external-service risk, or repeated regression.

Do not recommend public polish unless a link is about to be shared, trust matters, or the project needs an outside audience.

## Step 6: Produce The Decision

A useful AppBuildProcOS report should include:

1. Active states.
2. Evidence for each state.
3. Gaps or weak evidence.
4. Current pressure.
5. Recommended next artifact.
6. Why this is the smallest appropriate move.
7. What should remain reversible.
8. What now requires explicit documentation.
9. Verification command or review action.

## Step 7: Stop Conditions

Stop adding process when:

- The idea is still too early and the next answer requires interaction.
- The pressure is hypothetical.
- The suggested artifact would outlive its usefulness.
- A lighter note, script, or checklist would carry enough truth.

Escalate structure when:

- A second source of truth appears.
- A failure repeats.
- A public claim depends on generated data.
- An external service starts constraining behavior.
- A human or agent can no longer safely infer current state.

## Output Template

```markdown
## AppBuildProcOS Classification

Active states:
- [State]: [Observed/Inferred evidence]

Current pressure:
- [Pressure]

Recommended next artifact:
- [Artifact]

Why this move:
- [Reason tied to evidence]

Do not do yet:
- [Infrastructure or ceremony that evidence does not justify]

Verification:
- [Command, review action, or artifact to inspect]
```
