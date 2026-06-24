# AppBuildProcOS: Brett Build OS

## Core Thesis

**Observed/Inferred:** Brett's strongest application-building process is a reality-seeking loop:

1. Make the idea executable fast.
2. Put it in a real environment early when publicness, data, multiplayer, or external services matter.
3. Watch where the system stops telling the truth.
4. Build the missing instrument, admin surface, source-of-truth rule, or guardrail.
5. Record the decision so a future human or agent does not have to rediscover it.
6. Package the result for users, collaborators, operators, or public reflection.

The process is not linear, and it should not be made rigid. It is best understood as a set of states a project can enter and revisit.

## State 1: Spark To Executable Seed

**Purpose:** Turn an idea, GDD, source document, or product impulse into the smallest working loop.

**Entry Signals**

- A concept cannot be evaluated without interaction.
- A rules document, dataset, public need, or workflow pain exists.
- The idea is still easier to learn from by building than by planning.

**Exit Criteria**

- One core interaction runs locally.
- The main domain object or game mechanic exists.
- A future agent can identify what the project is trying to prove.

**Required Artifacts**

- Minimal scaffold.
- README stub or GDD/problem note.
- One command to run locally.

**Optional Artifacts**

- Early design note.
- Screenshot.
- ADR only if an irreversible choice is made.

**Common Risks**

- Overbuilding infrastructure before the loop exists.
- Letting a scaffold name survive after the real product identity changes.

**Evidence Examples**

- ids scaffold-to-audio sequence.
- fd_demo rules PDF to Vite/PartyKit scaffold.
- KintsugiBlackjack original GDD and DeckManager.

## State 2: Real Runtime

**Purpose:** Move the seed into the environment that can expose real constraints.

**Entry Signals**

- The product needs external callbacks, public links, multiplayer, production data, OAuth, or stakeholder review.
- A local-only prototype cannot answer the next question.

**Exit Criteria**

- There is a working deployed URL, live PartyKit room, local operator runtime, or reliable external-service callback path.
- Environment variables and run/deploy steps are discoverable.

**Required Artifacts**

- Deployment config or local run script.
- Environment example.
- Deployment/run notes.

**Optional Artifacts**

- CI.
- Deployment checklist.
- Smoke test.

**Common Risks**

- Premature polish before platform constraints are known.
- Missing docs for external service setup.

**Evidence Examples**

- agent828 Docker/Cloud Run day-one work.
- AVLmc Vercel URL by day two.
- TarotTALKS Vercel/Supabase day-one work.
- Submission Cockpit local loopback runtime.

## State 3: Durable State

**Purpose:** Preserve the facts that must outlive a session, reload, or operator memory.

**Entry Signals**

- Users save, submit, favorite, rank, apply, or return.
- Operators need historical records.
- Multiple agents/tools need the same data.

**Exit Criteria**

- The authoritative storage location is named.
- Migrations or flat-file contracts exist.
- Reconciliation behavior is explicit.

**Required Artifacts**

- Schema, migration, or flat-file contract.
- Source-of-truth note.
- Backup/rollback consideration for production data.

**Optional Artifacts**

- Seed data.
- Data repair script.
- Admin view.

**Common Risks**

- Two sources of truth.
- Manual mirrors that drift.
- Data model hidden in UI assumptions.

**Evidence Examples**

- agent828 migrations and Neon ADR.
- AVLmc Aiven->Neon migration.
- morethanone Supabase migrations.
- Submission Cockpit tracker/per-role JSON and reconcile ADRs.

## State 4: Identity And Access

**Purpose:** Attach durable state to the right person, account, or external identity only when product value requires it.

**Entry Signals**

- Private repo scanning, Spotify identity, saved favorites, account recovery, or contact ownership matters.
- Anonymous/local use no longer matches the product promise.

**Exit Criteria**

- Auth provider and account model are explicit.
- Failure/recovery paths are tested or documented.
- Privacy and account-linking boundaries are clear.

**Required Artifacts**

- Auth architecture note or PRD.
- Account table/model.
- Recovery/failure cases.

**Optional Artifacts**

- Cross-browser auth tests.
- Email template.
- Admin account inspector.

**Common Risks**

- Adding auth before identity matters.
- Under-testing account-linking edge cases.

**Evidence Examples**

- AVLmc Spotify/auth and multi-email account spine.
- repOptics GitHub OAuth/private repo scanning.
- agent828 account/contact identity.

## State 5: Operational Visibility

**Purpose:** Make the system inspectable once it does useful work.

**Entry Signals**

- The operator asks: what happened, what is pending, what is broken, what is owed next?
- Useful state exists but is invisible, stale, or scattered.
- Debugging requires database spelunking or manual memory.

**Exit Criteria**

- The operator can answer the core operational questions from a surface, log, report, or dashboard.
- Pending/failed/retry states are visible.
- The system exposes enough context for agents to help safely.

**Required Artifacts**

- Admin/dashboard/diagnostic view or equivalent.
- Status vocabulary.
- Operational runbook for recurring actions.

**Optional Artifacts**

- Operator ledger.
- Health endpoint.
- Design/balance calculator for games.

**Common Risks**

- Building a pretty admin panel that does not answer real questions.
- Letting operators maintain separate spreadsheets or queue files.

**Evidence Examples**

- Submission Cockpit.
- AVLmc admin operating system.
- agent828 operator runs/admin panels.
- Kintsugi balance dashboards.

## State 6: Truth Consolidation

**Purpose:** Collapse drift when the same fact lives in more than one place.

**Entry Signals**

- Two systems disagree.
- A manual mirror goes stale.
- A public claim depends on ambiguous evidence.
- Multiple functions implement the same matching/ranking rule.

**Exit Criteria**

- One authoritative source is named.
- Duplicates are removed, generated, or reconciled.
- Tests or validators protect the consolidation.

**Required Artifacts**

- Source-of-truth decision.
- Migration/reconciliation plan.
- Regression test or validator for the drift case.

**Optional Artifacts**

- Archive of retired artifact.
- Admin repair tool.
- Data integrity report.

**Common Risks**

- Treating structural drift as discipline failure.
- Keeping a stale manual artifact because it feels useful.

**Evidence Examples**

- Submission Cockpit retires `APPLICATION_QUEUE.md`.
- repOptics evidence states and snapshot integrity.
- fd_demo rules audit.
- agent828 content queue/context lake authority.

## State 7: Guardrails After Evidence

**Purpose:** Add reliability, security, cost, and correctness controls once the risk is specific.

**Entry Signals**

- A bug could duplicate work, lose data, send wrong email, leak private info, create false public claims, or burn platform budget.
- A failure has repeated or become expensive.

**Exit Criteria**

- The known failure has a test, monitor, policy, or runbook.
- The guardrail is narrow enough to maintain.
- The next agent knows how to verify it.

**Required Artifacts**

- Test, CI check, Snyk scan, Sentry config, cost monitor, security policy, or validator.
- Short note connecting guardrail to the risk.

**Optional Artifacts**

- Incident note.
- Dashboard.
- Retry/fallback path.

**Common Risks**

- Adding broad test ceremony without covering the actual failure.
- Waiting for a second production incident when the first one already named the risk.

**Evidence Examples**

- AVLmc account-loop SQL and cross-browser tests.
- Submission Cockpit shared matching tests.
- agent828 CU-hour gates and integrity audit ledger.
- TarotTALKS Snyk/Sentry.

## State 8: Public Object

**Purpose:** Make the work legible, inspectable, and shareable by people outside the build loop.

**Entry Signals**

- A link will be sent.
- A product needs testers, users, collaborators, employers, or public readers.
- The app's value depends on first impression, story, or trust.

**Exit Criteria**

- Public name, headline, metadata, favicon, OG/social image, and basic explanation match the actual product.
- Demo path or public entry point works.
- The visual identity is aligned with the product's maturity and audience.

**Required Artifacts**

- README or public landing copy.
- Metadata/OG/favicons.
- Screenshot or share image where relevant.

**Optional Artifacts**

- Blog post.
- Launch checklist.
- Campaign assets.
- Demo scenarios.

**Common Risks**

- Stock README after a product identity pivot.
- Social images that lag the current product.
- Public story that overclaims beyond evidence.

**Evidence Examples**

- TarotTALKS social campaign/content lab.
- AVLmc OG/Twitter event images.
- darketype publishing pipeline.
- Kintsugi visual identity and OG metadata.

## State 9: Reflection And Transfer

**Purpose:** Convert the project lesson into reusable context for future humans and agents.

**Entry Signals**

- A decision was hard, reversed, or likely to recur.
- An agent needed context that was not obvious from code.
- A public story or teaching artifact would sharpen the lesson.

**Exit Criteria**

- The lesson exists as ADR, runbook, ship log, public post, generated architecture reference, or workflow.
- The artifact points to evidence and current source of truth.

**Required Artifacts**

- ADR/runbook/post/workflow.
- Evidence references.

**Optional Artifacts**

- Presentation slide.
- Agent checklist.
- Public article.

**Common Risks**

- Internal notes leaking into public story.
- Public story detached from evidence.
- Repeating the same lesson without turning it into process.

**Evidence Examples**

- repOptics research/claim integrity.
- darketype project reflections.
- agent828 runbooks and ADRs.
- AVLmc product workflow.

## Lightweight Version: Solo Weekend Project

Use this when the project is exploratory, low-risk, or local-only.

1. Write a one-paragraph intent note.
2. Create the smallest executable loop.
3. Add one run command.
4. If sharing a link, add name, screenshot/OG image, and short README.
5. If state exists in more than one place, name the source of truth.
6. If a bug would cause repeated manual work, add one focused test.
7. End the session with a dated note: what works, what is fake, what is next.

Do not add auth, CI, a database, or admin unless the project has a real signal for them.

## Full Version: Operated Product

Use this when the product has live users, external services, persistent data, public claims, or agent/human operators.

1. Define the core loop and public/runtime target.
2. Deploy early enough to expose platform constraints.
3. Define persistence and source-of-truth rules.
4. Add identity only when saved/private/personal state requires it.
5. Build the smallest admin/ops surface that answers real operator questions.
6. Add ADRs for irreversible choices, migrations, providers, and source-of-truth decisions.
7. Add tests/CI/security/observability tied to concrete risks.
8. Add public presentation assets before inviting outsiders.
9. Maintain a backlog/ship log with done/parked/follow-up states.
10. Publish or record process lessons when they will help the next project.

## Decisions To Keep Reversible

- Creative framing and visual identity.
- Theme/skin layer.
- Demo scenarios.
- Provider choice before data lock-in.
- Admin layout before operational questions stabilize.
- Prototype persistence for local-only tools.

## Decisions That Need Explicit Documentation

- Deployment target.
- Persistence/source-of-truth choice.
- Auth/account model.
- External provider migrations.
- Public claims based on generated data.
- Security exceptions.
- Manual artifact retirement.
- Agent workflow contracts.

## Switch-Gear Signals

| Signal | Switch To |
|---|---|
| Core loop still unclear | Executable Seed |
| Local prototype cannot answer next question | Real Runtime |
| State must survive | Durable State |
| State belongs to a person/account | Identity And Access |
| Operator cannot see truth | Operational Visibility |
| Two facts disagree | Truth Consolidation |
| Failure is costly/repeated | Guardrails |
| Link will be shared | Public Object |
| Lesson will recur | Reflection And Transfer |

## Human And Agent Responsibilities

**Human**

- Name the real product pressure.
- Decide which risks matter now.
- Approve public claims and creative pivots.
- Say when a lightweight project should stay lightweight.

**Agent**

- Inspect current evidence before acting.
- Classify the current state and cite why.
- Avoid adding infrastructure without a transition signal.
- Propose the smallest artifact that carries missing truth.
- Preserve generative exploration while reducing state ambiguity.
- Update docs/runbooks/ADRs when a decision becomes durable.

## Final Operating Rule

Build fast where the idea is uncertain. Become rigorous where the system must tell the truth.
