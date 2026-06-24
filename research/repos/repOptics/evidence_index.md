# repOptics Evidence Index

Repository: `/home/bam/projects/repOptics`

## Repository State

- **Observed:** Git repository with 305 commits at inspection time.
- **Observed:** First commit: `1ad8a02|2026-01-20 23:02:45 -0500|manual commit`.
- **Observed:** Working tree clean during inspection.

## Significant Evidence

| Date | Evidence | Type | Why It Matters |
|---|---|---|---|
| 2026-01-20 | `1ad8a02` manual commit | Git | Repository birth. |
| 2026-01-21 | `c680ab4` verified code alignment and added tests | Git | Tests arrive almost immediately. |
| 2026-01-21 | `e7c2a7e`, `2a44741`, `a12f902` scan hang fixes, file tree view, timeouts, logging | Git | Early product pressure is scanner reliability and diagnosability. |
| 2026-01-21 | `8a0df5f` project generator with architecture and infrastructure scaffolding | Git | repOptics becomes generative, not just analytical. |
| 2026-01-21 | `dff40f1` dependency audit and health check | Git | Repository health/security becomes product surface early. |
| 2026-01-22 | `9d4af29` CONTRIBUTING workflows, `ebdd22e` ADR log, `3b1154a` CODEOWNERS and CI | Git | Governance artifacts arrive by day two. |
| 2026-01-22 | `53b1ef3` architecture diagram | Git | System explanation is an early feature. |
| 2026-01-28 | `64350d4` decision intelligence implementation; `a5db1fa` ADR/changelog update | Git | Product begins moving toward decision capture. |
| 2026-02-27 | `815b342` adding Snyk check; `7a8e671` update rollup/mermaid known vulnerabilities | Git | Security tooling becomes formal. |
| 2026-03-05 | `d35e0fc` GitHub Ocean exporter workflow; `1b27fd3` Port.io integration | Git | External platform integration becomes part of the product. |
| 2026-06-10 | MCP trust sandbox and registry snapshot commits | Git | Trust and third-party agent registry visibility become product concerns. |
| 2026-06-11 | Research lake, deterministic freshness, lower-bound evidence, capture throttle commits | Git | Evidence quality and stable claims become operational constraints. |
| 2026-06-12 | ADR-0049 IaC pentest agent; ADR-0050 verifiability/claim hygiene | Git + ADR | Product expands into security agents and public claim discipline. |
| 2026-06-22 | Weekly research snapshot integrity series (`e5d74bb` through `2a2b3d5`) | Git + ADR | Research reports get fail-closed manifests, publication sources, and validators. |
| Current | `docs/adr/0001` through `docs/adr/0051` | Files | Dense ADR trail covering architecture, evidence states, integrations, security, and research integrity. |
| Current | `docs/architecture/architecture-reference.md`, `architecture-graph.json` | Files | Generated architecture reference is a first-class project artifact. |
| Current | `package.json` scripts: `arch:*`, `research:*`, `security:snyk`, `verify:precommit` | Manifest | The process is encoded as runnable commands. |

## Evidence Gaps

- **Gap:** External deployment and analytics state were not inspected; local evidence is sufficient for repository-process analysis but not full production uptime history.
- **Gap:** Some dates in research-run artifacts are generated artifact timestamps, not necessarily feature introduction dates.
