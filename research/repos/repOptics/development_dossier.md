# repOptics Development Dossier

## Original Problem And Audience

**Observed:** repOptics begins as a repository scanning/reporting app. Early commits focus on scan hangs, file tree views, detailed logging, dependency audits, and report rendering.

**Inferred:** The intended audience is builders and agents trying to understand repository health, architecture, dependencies, and readiness. Over time the audience expands to include the system itself: repOptics becomes an instrument for making process evidence explicit.

## Earliest Prototype

**Observed:** The initial working surface existed by the first commits on 2026-01-20/21. Within the first day the code was already being verified, tests were added, scan hangs were debugged, and report pages got timeouts/logging.

## Major Milestones

- **Scanner/report reliability:** Early scan hang fixes, file tree view, and Octokit timeout handling.
- **Generator expansion:** `8a0df5f` adds architecture and infrastructure scaffolding to the project generator.
- **Governance:** CONTRIBUTING, ADR log, CODEOWNERS, CI, and architecture diagram by 2026-01-22.
- **Decision intelligence:** 2026-01-28 commits add decision intelligence and ADR/changelog updates.
- **Security:** Snyk check and dependency remediation appear in February; later IaC and pentest agents expand security coverage.
- **External integrations:** Port.io, GitHub Ocean workflows, Vertex/Gemini, MCP trust registry, Sentry, Neon, and Upstash appear in manifests/ADRs.
- **Research lake:** Weekly research runs, public/maintainer briefs, claim decisions, and snapshot integrity appear as productized research workflow.

## Deployment History

**Observed:** Local evidence shows GitHub workflows (`ci.yml`, `main.yml`, architecture audit, Port sync, Port repOptics scan) and Next.js application structure. Deployment target is not exhaustively verified from local files in this pass.

## Architectural Decisions

repOptics has one of the clearest ADR trails in the corpus:

- Record architecture decisions.
- Single-service architecture.
- GitHub API defaults.
- Client-side zip generation.
- Decision-driven generator.
- Report progressive disclosure/export.
- Port dashboard/API integration.
- Vertex AI/Gemini intelligence.
- GitHub OAuth/private repo scanning.
- Pentesting orchestration.
- Diagram staleness indicator.
- Optional AI summaries.
- Unified scan execution.
- Generated architecture reference/knowledge graph.
- Snyk precommit and dependency remediation.
- Evidence-aware scoring states.
- Owner-level report index and lake-sourced public index.
- Runtime-aligned freshness.
- Diagnosable scan failures.
- Engine-version partitioned public claims.
- MCP trust registry sandbox.
- Lower-bound scoring and capture throttle.
- IaC pentest agent.
- Verifiability, honest evidence, and claim hygiene.
- Weekly research snapshot integrity.

## Admin And Operations Evolution

**Observed:** repOptics does not simply add an admin panel; it turns operational concerns into product primitives: architecture graphs, scoring states, report indexes, run histories, research lake panels, and validators.

**Inferred:** The operational transition signal is "the report is being used to make claims, so the evidence and source freshness must be inspectable."

## Testing And Reliability Evolution

**Observed:** Tests arrive almost immediately. Later scripts add architecture impact checks, architecture generation/checks, research validation, Snyk security checks, and precommit verification.

## Presentation And Distribution Evolution

**Observed:** Public owner indexes, publication drafts, public briefs, and darketype cross-post material show that repOptics outputs become public-facing research and narrative assets, not just internal scans.

## Major Direction Changes

- Scanner/report -> generator/scaffolder.
- Static report -> decision/governance and architecture intelligence.
- Repo scan -> platform integrations and Port visibility.
- Security checks -> pentest/IaC agents.
- Weekly research -> snapshot-consistent public claim pipeline.

## Current State

**Observed:** repOptics is a mature meta-tool with generated architecture references, ADRs, CI, Snyk, research runs, evidence-state semantics, and validators for public claims.

## Process Lessons

**Inferred:** repOptics is the clearest case where Brett's process reflects on itself. Friction in evidence quality becomes product design: unknown vs. not applicable, freshness, source availability, claim hygiene, and architecture drift are named and encoded.
