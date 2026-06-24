# Variation And Exception Analysis

## Public Web Apps vs. Local Tools

**Observed:** agent828, AVLmc, morethanone, TarotTALKS, repOptics, and darketype move toward deployment or public access early. Submission Cockpit does not.

**Explanation:** Submission Cockpit is intentionally localhost-only, single-operator, no-auth, zero-dependency. For that project, deployment/auth/CI would add ceremony without matching the risk model. The relevant operational question is not "is it deployed?" but "does the operator have truthful local visibility?"

## Operated Products vs. Creative Games

**Observed:** agent828, AVLmc, repOptics, TarotTALKS, morethanone, and Submission Cockpit develop admin/ops or validation surfaces. KintsugiBlackjack and fd_demo develop design/balance/rules instrumentation instead. ids develops tests/debug/VR/network files rather than admin.

**Explanation:** Games do not need CRM dashboards, but they do need balance calculators, rules audits, XR testing, debug overlays, and asset pipelines. The underlying pattern is the same: once the core loop works, build instruments to reason about it.

## Git-Centered vs. Non-Git Evidence

**Observed:** fd_demo has no Git repository in the local checkout; KintsugiBlackjack has no Git repository in its export; Submission Cockpit's meaningful work is mostly uncommitted; ids has only 10 committed seed commits and a large dirty later state.

**Explanation:** Brett's process sometimes preserves decision chronology outside Git: ADRs, changelogs, backlog entries, file mtimes, queue archives, screenshots, and agent logs. The model must accept non-Git evidence while clearly downgrading confidence.

## Early Testing vs. Post-Friction Testing

**Observed:** repOptics adds tests very early. AVLmc, Submission Cockpit, TarotTALKS, morethanone, and ids show testing/guardrails later or mixed with operational incidents. KintsugiBlackjack explicitly lacks automated tests in the export.

**Explanation:** Testing is not one fixed phase. It appears early when the product is itself an analyzer/generator, but often arrives after concrete risk in user-facing or local-operator projects.

## Auth Is Conditional, Not Default

**Observed:** AVLmc and repOptics need identity for Spotify/GitHub/private data. agent828 has account/contact identity. Submission Cockpit, KintsugiBlackjack, fd_demo, ids, and darketype either omit auth or do not make it central.

**Explanation:** Brett does not add auth as boilerplate. It appears when continuity, privacy, or external identity is core to the product loop.

## Presentation Can Lead Or Lag

**Observed:** TarotTALKS and darketype are presentation-first. AVLmc adds public assets very early. agent828 adds voice/brand soon after deployment. Submission Cockpit has no public presentation because it is local-only. morethanone adds demos/FAQ after core flow. Kintsugi adds presentation as a creative pivot.

**Explanation:** Presentation is not "last mile"; it appears when the product's next proof requires another human to understand or feel it.

## Documentation Forms Differ By Project Type

| Project Type | Documentation Form |
|---|---|
| Operated AI/product systems | ADRs, runbooks, architecture graphs, operator ledgers |
| Public content/presentation apps | README/backstory, campaign docs, release notes, social assets |
| Games/XR | GDDs, changelogs, rules audits, asset pipeline docs, testing checklists |
| Local operator tools | ADRs, queue archives, cheatsheets, MCP tool descriptions |
| Meta-process tools | Generated architecture references, claim validators, research run manifests |

## Exception: repOptics Is Both Product And Process Lab

repOptics breaks simple categorization. It is a product that evaluates repositories, but it also becomes a lab for the exact AppBuildProcOS question: evidence states, architecture drift, claim hygiene, source availability, and research integrity. It should be weighted heavily in synthesis, but not allowed to overfit the model into "everything must have generated architecture graphs."

## Exception: darketype Is A Publication Surface, Not A Normal App

darketype's value is not traditional app functionality. It publishes, packages, and reflects. It reveals a critical outer loop in Brett's process: after building, he turns lessons into public artifacts that then influence the next build.

## Exception: KintsugiBlackjack Has High Decision Rigor Without VCS/Tests

KintsugiBlackjack has 12 ADRs and strong design/backlog discipline but no Git and no automated tests. This contradicts any simple claim that rigor equals conventional engineering controls. The rigor is in creative decision capture and reversible architecture, while safety nets are deferred.

## Exception: ids Has Clean Seed History But Dirty Maturity Evidence

ids looks tiny in Git but larger in the working tree. A Git-only analysis would understate its evolution into network, PartyKit, VR, and tests. The model should warn agents to inspect dirty/untracked state before concluding a repo is immature.

## Practical Implication

**Recommended:** AppBuildProcOS should classify projects by product pressure, not by a universal checklist:

- Public/operated app: deployment, persistence, admin, security, observability matter earlier.
- Local operator tool: source-of-truth and workflow truth matter more than deployment.
- Game/creative prototype: mechanics, feel, balance, rules fidelity, and reversible pivots matter earlier.
- Publication/meta surface: storytelling, artifact packaging, and syndication are product work.
