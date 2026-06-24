const states = [
  {
    id: "seed",
    index: 1,
    short: "Seed",
    chip: "Seed",
    title: "Spark To Executable Seed",
    color: "var(--seed)",
    purpose: "Turn an idea, GDD, source document, or product impulse into the smallest working loop.",
    trigger: "The idea can be tested only by making an interaction work.",
    artifact: "Minimal scaffold, README stub or GDD note, and one command to run locally.",
    risk: "Overbuilding infrastructure before the loop exists, or letting a scaffold name survive after the real identity changes.",
    examples: ["ids scaffold-to-audio sequence", "fd_demo rules PDF to Vite/PartyKit scaffold", "KintsugiBlackjack original GDD and DeckManager"],
    source: "research/brett_build_os.md"
  },
  {
    id: "runtime",
    index: 2,
    short: "Runtime",
    chip: "Run",
    title: "Real Runtime",
    color: "var(--runtime)",
    purpose: "Move the seed into the environment that exposes real constraints.",
    trigger: "The product needs external callbacks, public links, multiplayer, production data, OAuth, or stakeholder review.",
    artifact: "Deployment config, local run script, environment notes, or a reliable external-service callback path.",
    risk: "Polishing before platform constraints are known, or missing setup docs for external services.",
    examples: ["agent828 Docker and Cloud Run on day one", "AVLmc Vercel URL by day two", "TarotTALKS Vercel/Supabase day-one work", "Submission Cockpit local loopback runtime"],
    source: "research/transition_map.md"
  },
  {
    id: "durable",
    index: 3,
    short: "State",
    chip: "Data",
    title: "Durable State",
    color: "var(--durable)",
    purpose: "Preserve the facts that must outlive a session, reload, or operator memory.",
    trigger: "Users save, submit, favorite, rank, apply, or return; operators need history; agents need shared data.",
    artifact: "Schema, migration, flat-file contract, source-of-truth note, and backup or rollback consideration.",
    risk: "Two sources of truth, manual mirrors that drift, or a data model hidden in UI assumptions.",
    examples: ["agent828 migrations and Neon ADR", "AVLmc Aiven to Neon migration", "morethanone Supabase migrations", "Submission Cockpit tracker/per-role JSON"],
    source: "research/brett_build_os.md"
  },
  {
    id: "identity",
    index: 4,
    short: "Identity",
    chip: "ID",
    title: "Identity And Access",
    color: "var(--identity)",
    purpose: "Attach durable state to the right person, account, or external identity only when product value requires it.",
    trigger: "Private repo scanning, Spotify identity, saved favorites, account recovery, or contact ownership matters.",
    artifact: "Auth architecture note, account model, OAuth flow, recovery case, and privacy boundary.",
    risk: "Adding auth before identity matters, or under-testing account-linking edge cases.",
    examples: ["AVLmc Spotify/auth and account spine", "repOptics GitHub OAuth/private repo scanning", "agent828 account/contact identity"],
    source: "research/variation_and_exceptions.md"
  },
  {
    id: "visibility",
    index: 5,
    short: "Visibility",
    chip: "Ops",
    title: "Operational Visibility",
    color: "var(--visibility)",
    purpose: "Make the system inspectable once it does useful work.",
    trigger: "The operator cannot answer what happened, what is pending, what is broken, or what is owed next.",
    artifact: "Admin view, dashboard, diagnostic script, status vocabulary, or operator runbook.",
    risk: "Building a pretty admin panel that does not answer real questions, or keeping operator state in spreadsheets and memory.",
    examples: ["Submission Cockpit dashboard", "AVLmc admin operating system", "agent828 operator panels", "Kintsugi balance dashboards"],
    source: "research/transition_map.md"
  },
  {
    id: "truth",
    index: 6,
    short: "Truth",
    chip: "Truth",
    title: "Truth Consolidation",
    color: "var(--truth)",
    purpose: "Collapse drift when the same fact lives in more than one place.",
    trigger: "Two systems disagree, a manual mirror goes stale, or a public claim depends on ambiguous evidence.",
    artifact: "Authority decision, reconciliation plan, retired mirror, shared definition, validator, or regression guard.",
    risk: "Treating structural drift as discipline failure, or preserving a stale manual artifact because it feels useful.",
    examples: ["Submission Cockpit retires APPLICATION_QUEUE.md", "repOptics evidence states and snapshot integrity", "fd_demo rules audit", "agent828 queue/context lake authority"],
    source: "research/chaos_and_rework.md"
  },
  {
    id: "guard",
    index: 7,
    short: "Guardrails",
    chip: "Risk",
    title: "Guardrails After Evidence",
    color: "var(--guard)",
    purpose: "Add reliability, security, cost, and correctness controls once the risk is specific.",
    trigger: "A bug could duplicate work, lose data, send wrong email, leak private info, create false public claims, or burn platform budget.",
    artifact: "Focused test, CI check, Snyk/Sentry config, cost monitor, security policy, validator, or incident note.",
    risk: "Adding broad test ceremony without covering the actual failure, or waiting for a second incident after the first one named the risk.",
    examples: ["AVLmc account-loop tests", "Submission Cockpit reconciliation tests", "agent828 CU-hour gates", "TarotTALKS Snyk/Sentry"],
    source: "research/brett_build_os.md"
  },
  {
    id: "public",
    index: 8,
    short: "Public",
    chip: "Pub",
    title: "Public Object",
    color: "var(--public)",
    purpose: "Make the work legible, inspectable, and shareable by people outside the build loop.",
    trigger: "A link will be sent, a product needs testers, or trust depends on first impression and story.",
    artifact: "README or public copy, metadata, favicon, OG image, screenshot, demo path, or launch checklist.",
    risk: "Stock README after an identity pivot, stale social images, or a public story that overclaims beyond evidence.",
    examples: ["TarotTALKS social campaign and content lab", "AVLmc logo and OG/Twitter imagery", "darketype publishing pipeline", "Kintsugi visual identity"],
    source: "research/transition_map.md"
  },
  {
    id: "reflect",
    index: 9,
    short: "Transfer",
    chip: "Note",
    title: "Reflection And Transfer",
    color: "var(--reflect)",
    purpose: "Convert project lessons into reusable context for future humans and agents.",
    trigger: "A decision was hard, reversed, likely to recur, or needed agent context that was not obvious from code.",
    artifact: "ADR, runbook, ship log, public post, generated architecture reference, workflow, or presentation.",
    risk: "Internal notes leaking into public story, or public story drifting away from evidence.",
    examples: ["repOptics research and claim integrity", "darketype reflections", "agent828 runbooks and ADRs", "AVLmc product workflow"],
    source: "research/brett_build_os_agent.md"
  }
];

const projects = [
  {
    id: "agent828",
    name: "agent828",
    folder: "agent828",
    type: "Operated AI product",
    evidenceBasis: "Git + ADRs + docs + config",
    stack: "React/Vite, Express, SQLite/Neon/Postgres, Resend, AI providers, Docker, GitHub Actions",
    start: "2026-03-12",
    frontier: "2026-06-03",
    summary: "The richest lifecycle and operations trail: deployment, region fixes, CI, security hardening, persistence migration, CRM, admin review, operator-run visibility, and cost/freshness controls.",
    loop: "Operational friction -> ADR/runbook -> schema or admin change -> release note -> new guardrail.",
    caveat: "Dirty working tree during inspection; uncommitted files are current-state evidence, not dated history.",
    coverage: ["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"],
    milestones: [
      milestone("seed", "2026-03-12", "Initial commit and early app loop", "Medium"),
      milestone("runtime", "2026-03-12", "Docker/Cloud Run and region stabilization", "High"),
      milestone("public", "2026-03-13", "Dual voice, brand kit, and public copy", "High"),
      milestone("durable", "2026-04-01", "Migrations and later Neon authority", "High"),
      milestone("identity", "2026-04-01", "Account lifecycle and CRM records", "Medium"),
      milestone("visibility", "2026-04-15", "Admin data integrity and operator panels", "High"),
      milestone("truth", "2026-05-15", "Content queue and context lake authority", "High"),
      milestone("guard", "2026-05-24", "CU-hour gates, integrity ledgers, and fallback work", "High"),
      milestone("reflect", "2026-03-12", "ADRs, runbooks, backlog, AI workload handoff", "High")
    ]
  },
  {
    id: "repOptics",
    name: "repOptics",
    folder: "repOptics",
    type: "Meta-process product",
    evidenceBasis: "Git + ADRs + architecture graph + research runs",
    stack: "Next.js, Neon, Upstash, Sentry, NextAuth, Octokit, AI SDK/Gemini, Vitest",
    start: "2026-01-20",
    frontier: "2026-06-22",
    summary: "The strongest evidence that the build process becomes self-aware: scanners and reports evolve into architecture references, research runs, evidence-aware scoring, trust registries, and claim hygiene.",
    loop: "Repository evidence -> generated reference -> claim hygiene -> validator -> research snapshot.",
    caveat: "It should be weighted heavily, but not allowed to overfit the model into generated architecture graphs for every project.",
    coverage: ["Y", "P", "Y", "Y", "Y", "Y", "Y", "Y", "Y"],
    milestones: [
      milestone("seed", "2026-01-20", "First commit, report/debugging, and generator work", "High"),
      milestone("runtime", "2026-01-22", "External GitHub and service behavior becomes relevant", "Medium"),
      milestone("durable", "2026-01-22", "Research lake and schema direction", "High"),
      milestone("identity", "2026-01-22", "GitHub OAuth and private repo scanning", "High"),
      milestone("visibility", "2026-01-22", "Architecture references and scoring panels", "High"),
      milestone("guard", "2026-01-22", "Early tests, CODEOWNERS, CI, and validators", "High"),
      milestone("public", "2026-02-01", "Public research and publication surface", "High"),
      milestone("truth", "2026-06-22", "Weekly research snapshot integrity", "High"),
      milestone("reflect", "2026-06-22", "AppBuildProcOS research and claim integrity", "High")
    ]
  },
  {
    id: "AVLmc",
    name: "AVLmc",
    folder: "AVLmc",
    type: "Compressed public app",
    evidenceBasis: "Git + product docs + system registry",
    stack: "Next.js, NextAuth, Postgres/Aiven, Vercel Blob, Spotify, Playwright",
    start: "2026-06-04",
    frontier: "2026-06-18",
    summary: "A two-week control sample: live data, deploy, auth, external identity, personalization, analytics, admin, brand/social, then account-loop hardening.",
    loop: "Live feature -> behavioral signal -> admin visibility -> benchmark/test -> migration or guardrail.",
    caveat: "Compressed chronology makes sequence vivid, but it should not imply every project needs all operated-product layers.",
    coverage: ["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"],
    milestones: [
      milestone("seed", "2026-06-04", "Initial Codex-built app", "High"),
      milestone("durable", "2026-06-04", "Community persistence converted to Aiven", "High"),
      milestone("runtime", "2026-06-05", "Vercel URL and launch docs", "High"),
      milestone("identity", "2026-06-05", "Auth build and Spotify identity", "High"),
      milestone("public", "2026-06-08", "Logo, imagery, header, OG/Twitter assets", "High"),
      milestone("visibility", "2026-06-08", "Admin portal v1 and living OS", "High"),
      milestone("reflect", "2026-06-15", "Workflow, roadmap, PRDs, backlog", "High"),
      milestone("truth", "2026-06-16", "Schema consolidation and Aiven to Neon path", "High"),
      milestone("guard", "2026-06-17", "Discovery benchmarks and account-loop tests", "High")
    ]
  },
  {
    id: "morethanone",
    name: "morethanone",
    folder: "morethanone",
    type: "Operated group tool",
    evidenceBasis: "Git + releases/tags + tests/config",
    stack: "Next.js, Supabase Realtime, Vercel Analytics, Jest",
    start: "2026-02-07",
    frontier: "2026-03-03",
    summary: "Core loop first, realtime reliability next, then admin, analytics, guardrails, and Supabase security policies.",
    loop: "Group decision flow -> realtime correctness -> host/admin control -> release guardrails.",
    caveat: "Identity is not central in the inspected evidence, even though public/operated pressure is real.",
    coverage: ["Y", "Y", "Y", "N", "Y", "P", "Y", "Y", "P"],
    milestones: [
      milestone("seed", "2026-02-07", "Initial commit and core voting loop", "High"),
      milestone("runtime", "2026-02-08", "Vercel deployment and Supabase Realtime", "High"),
      milestone("durable", "2026-02-08", "Supabase migrations and live session state", "High"),
      milestone("visibility", "2026-02-09", "Host participation, processing status, and admin panel", "High"),
      milestone("public", "2026-02-12", "Demo, FAQ, and RCV explanation world", "High"),
      milestone("truth", "2026-02-20", "Realtime and ranking logic corrections", "Medium"),
      milestone("guard", "2026-03-03", "Supabase security policy maturity", "High"),
      milestone("reflect", "2026-03-03", "Release progression and handoff docs", "Medium")
    ]
  },
  {
    id: "TarotTALKS",
    name: "TarotTALKS",
    folder: "TarotTALKS",
    type: "Public content app",
    evidenceBasis: "Git + docs + release tags + manifests",
    stack: "Next.js, Supabase, Vercel Postgres, Drizzle, Sentry, Vercel Analytics, Replicate",
    start: "2025-12-07",
    frontier: "2026-04-13",
    summary: "The best evidence that presentation and distribution can be primary product phases, not final polish.",
    loop: "Content experience -> public presentation -> quota/diagnostic visibility -> security and observability.",
    caveat: "Presentation leads here because the product depends on story, imagery, metadata, and public sharing.",
    coverage: ["Y", "Y", "Y", "P", "Y", "P", "Y", "Y", "P"],
    milestones: [
      milestone("seed", "2025-12-07", "Initial app and card/talk loading", "High"),
      milestone("runtime", "2025-12-07", "Vercel deployment setup", "High"),
      milestone("durable", "2025-12-07", "Supabase database and talk uploads", "High"),
      milestone("public", "2025-12-08", "Design, metadata, favicon, high-res cards, social assets", "High"),
      milestone("identity", "2026-02-01", "Partial identity/admin surfaces", "Medium"),
      milestone("visibility", "2026-04-13", "Quota monitor, Content Lab, Bluesky metrics, admin diagnostics", "High"),
      milestone("truth", "2026-04-13", "Content and metrics diagnostics", "Medium"),
      milestone("guard", "2026-04-13", "Sentry instrumentation and Snyk-driven fixes", "High"),
      milestone("reflect", "2026-04-13", "Release notes and public handoff material", "Medium")
    ]
  },
  {
    id: "fd_demo",
    name: "fd_demo",
    folder: "fd_demo",
    type: "XR/game prototype",
    evidenceBasis: "No Git in local checkout; mtimes + docs + changelog",
    stack: "Vite, React, React Three Fiber, XR, PartyKit, Zustand",
    start: "2026-01-31",
    frontier: "2026-02-22",
    summary: "A no-Git archaeology case: rules ingestion and prototype evolve into XR/multiplayer infrastructure, release checklists, asset pipeline, and rules audit.",
    loop: "Rules/prototype -> multiplayer/XR runtime -> asset and rules instrumentation -> release checklist.",
    caveat: "Commit hashes cannot be used from the current checkout, so confidence depends on mtimes and docs.",
    coverage: ["Y", "Y", "P", "NA", "P", "Y", "P", "P", "Y"],
    milestones: [
      milestone("seed", "2026-01-31", "Vite scaffold from rules source", "Medium"),
      milestone("runtime", "2026-01-31", "PartyKit and multiplayer architecture", "High"),
      milestone("durable", "2026-02-01", "Rules and state persistence are partial/project-specific", "Medium"),
      milestone("visibility", "2026-02-21", "Rules, asset, and release audit surfaces", "Medium"),
      milestone("truth", "2026-02-21", "Rules audit after source divergence", "High"),
      milestone("guard", "2026-02-21", "Release checklist and manual validation", "Medium"),
      milestone("public", "2026-02-22", "Asset cheatsheet and public-facing materials", "Medium"),
      milestone("reflect", "2026-02-21", "Changelog, project status, architecture docs", "High")
    ]
  },
  {
    id: "ids",
    name: "ids",
    folder: "ids",
    type: "Compact game prototype",
    evidenceBasis: "Git + manifest + PartyKit config",
    stack: "Vite, TypeScript, Three.js, PartyKit/Partysocket, Tone.js, Vitest",
    start: "2026-02-15",
    frontier: "2026-02-15",
    summary: "A compact prototype/control showing decomposition from simulation, rendering, input, scoring, and audio before operational layers appear.",
    loop: "Mechanic idea -> simulation -> renderer -> input -> HUD/audio -> later dirty-state expansion.",
    caveat: "Only 10 committed seed commits are visible, but the working tree shows larger later evolution.",
    coverage: ["Y", "P", "N", "NA", "P", "N", "P", "N", "P"],
    milestones: [
      milestone("seed", "2026-02-15", "Scaffold, constants, boids, simulation, renderer, input, HUD, audio", "High"),
      milestone("runtime", "2026-02-15", "PartyKit/PartySocket evidence", "Medium"),
      milestone("visibility", "2026-02-15", "Debug/test expansion in current state", "Medium"),
      milestone("guard", "2026-02-15", "Vitest and small validation surface", "Medium"),
      milestone("reflect", "2026-02-15", "GDD/devnotes/ship-log style evidence", "Medium")
    ]
  },
  {
    id: "darketype",
    name: "bmccall17.github.io / darketype",
    folder: "bmccall17.github.io",
    type: "Publication surface",
    evidenceBasis: "Git + workflows + generated weblog artifacts",
    stack: "Static GitHub Pages, custom weblog build, OG generation, GitHub Actions, Canvas",
    start: "2026-02-05",
    frontier: "2026-06-15",
    summary: "A public reflection and publication mechanism that packages lessons from other projects into reusable process artifacts.",
    loop: "Project lesson -> publication artifact -> OG/build workflow -> next project context.",
    caveat: "Its value is not normal app functionality; it is an outer loop for reflection and packaging.",
    coverage: ["Y", "Y", "P", "NA", "P", "P", "P", "Y", "Y"],
    milestones: [
      milestone("seed", "2026-02-05", "Initial site and first entries", "High"),
      milestone("runtime", "2026-02-05", "GitHub Pages workflow appears immediately", "High"),
      milestone("public", "2026-02-05", "Manifesto, entries, visuals, and publication surface", "High"),
      milestone("durable", "2026-02-06", "Generated weblog artifacts and static indexes", "Medium"),
      milestone("visibility", "2026-06-15", "Weblog/OG/rebuild automation", "Medium"),
      milestone("truth", "2026-06-15", "Publishing pipeline and sync authority", "Medium"),
      milestone("guard", "2026-06-15", "Build automation and generated asset checks", "Medium"),
      milestone("reflect", "2026-02-05", "Public process reflections", "High")
    ]
  },
  {
    id: "SubmissionCockpit",
    name: "Submission Cockpit",
    folder: "SubmissionCockpit",
    type: "Local operator tool",
    evidenceBasis: "Supplied satellite export; Git misleading",
    stack: "Python stdlib local web app, flat files, MCP, LaTeX/Poppler tooling",
    start: "2026-06-05",
    frontier: "2026-06-22",
    summary: "The clearest local-only operations example: an operator cockpit whose rigor lives in ADRs, archive snapshots, shared definitions, tests, and MCP surface rather than deployment.",
    loop: "Operational invisibility -> dashboard -> drift discovered -> one source of truth -> guardrail test.",
    caveat: "The meaningful Cockpit work is mostly outside Git, so the satellite export is the evidence basis.",
    coverage: ["Y", "Y", "Y", "NA", "Y", "Y", "Y", "NA", "Y"],
    milestones: [
      milestone("seed", "2026-06-05", "Local dashboard prototype", "Medium"),
      milestone("runtime", "2026-06-05", "Local-only loopback runtime", "High"),
      milestone("visibility", "2026-06-05", "Cockpit dashboard as operating surface", "High"),
      milestone("durable", "2026-06-07", "Tracker CSV, per-role JSON, scraper JSON", "High"),
      milestone("reflect", "2026-06-07", "ADR sequence and queue archives", "High"),
      milestone("truth", "2026-06-13", "Retire queue mirror and introduce shared definitions", "High"),
      milestone("guard", "2026-06-21", "Shared matching and reconciliation tests", "High")
    ]
  },
  {
    id: "KintsugiBlackjack",
    name: "KintsugiBlackjack",
    folder: "KintsugiBlackjack",
    type: "Creative game experiment",
    evidenceBasis: "Supplied satellite export; no Git",
    stack: "React/Vite, PartyKit, PartySocket, CSS modules, no DB/auth/tests",
    start: "2026-05-27",
    frontier: "2026-06-06",
    summary: "The clearest evidence of creative pivot plus instrumentation-before-content in a game context.",
    loop: "Playable mechanic -> creative reframing -> reversible architecture -> tuning instrumentation.",
    caveat: "High decision rigor appears through ADRs and backlog, even without VCS or automated tests.",
    coverage: ["Y", "Y", "P", "NA", "Y", "P", "P", "Y", "Y"],
    milestones: [
      milestone("seed", "2026-05-27", "Vite scaffold, DeckManager, and combat loop by mtime", "Medium"),
      milestone("reflect", "2026-05-28", "GDD, ADR-0001 through ADR-0012, backlog", "High"),
      milestone("runtime", "2026-06-03", "PartyKit config and multiplayer host", "Medium"),
      milestone("truth", "2026-06-03", "Reversible theme layer preserves Blackjack mode", "Medium"),
      milestone("durable", "2026-06-03", "In-memory PartyKit and localStorage only", "Medium"),
      milestone("visibility", "2026-06-06", "Audio admin, koan editor, balance dashboards", "High"),
      milestone("public", "2026-06-06", "OG/Twitter metadata, favicon, generated imagery", "High"),
      milestone("guard", "2026-06-06", "Manual live-server testing and tuning dashboards", "Medium")
    ]
  }
];

const patterns = [
  pattern("Fast functional seed before full requirements", 10, "High", "Every project has an early scaffold/prototype within the first dated window; AVLmc and ids are especially compressed.", "research/cross_project_patterns.md", "var(--seed)"),
  pattern("Documentation becomes a control plane", 9, "High", "ADRs, runbooks, PRDs, workflows, changelogs, and generated references appear across almost the full corpus.", "research/cross_project_patterns.md", "var(--reflect)"),
  pattern("Testing arrives early or after concrete risk", 8, "High", "repOptics is early; AVLmc, Submission Cockpit, TarotTALKS, morethanone, and ids show risk-triggered guardrails.", "research/cross_project_patterns.md", "var(--guard)"),
  pattern("Admin/operator visibility follows opacity", 7, "High", "agent828, AVLmc, morethanone, TarotTALKS, Submission Cockpit, KintsugiBlackjack, and repOptics develop inspectability surfaces.", "research/transition_map.md", "var(--visibility)"),
  pattern("Runtime/share surface appears early when public", 6, "High", "Public apps, realtime tools, games, and publishing systems reach real runtime or shareability early.", "research/transition_map.md", "var(--runtime)"),
  pattern("Persistence appears when live state must survive", 6, "High", "agent828, repOptics, AVLmc, morethanone, TarotTALKS, and Submission Cockpit have durable state pressure.", "research/evidence_traceability_matrix.md", "var(--durable)"),
  pattern("Source-of-truth consolidation is a maturity move", 6, "High", "agent828, repOptics, AVLmc, Submission Cockpit, fd_demo, and morethanone show consolidation or reconciliation work.", "research/chaos_and_rework.md", "var(--truth)"),
  pattern("Social/public presentation is product work", 5, "High", "TarotTALKS, AVLmc, darketype, KintsugiBlackjack, and agent828 make presentation part of the product surface.", "research/variation_and_exceptions.md", "var(--public)"),
  pattern("Reversibility protects exploration", 4, "Medium", "Kintsugi theme layer, Submission Cockpit queue retirement, morethanone realtime migration, and provider migrations preserve optionality.", "research/cross_project_patterns.md", "var(--identity)"),
  pattern("Reflection loops feed later process", 7, "Medium", "darketype, repOptics, and agent828 show direct reflection loops; several others contribute indirectly through docs and handoff artifacts.", "research/cross_project_patterns.md", "var(--reflect)")
];

const pressures = [
  pressure("Idea pressure", "The core interaction is not proven.", "Smaller executable proof, local run command, GDD clarification, first route or loop.", "seed"),
  pressure("Runtime pressure", "Local behavior cannot answer the next question.", "Deployment path, callback test, PartyKit room, local operator run script, smoke check.", "runtime"),
  pressure("State pressure", "Data can be lost, duplicated, or misremembered.", "Schema, migration, flat-file contract, source-of-truth note, backup or rollback note.", "durable"),
  pressure("Identity pressure", "The product cannot keep ownership or privacy straight.", "Auth model, account table, OAuth flow, recovery case, privacy boundary.", "identity"),
  pressure("Visibility pressure", "Humans or agents cannot inspect real system status.", "Admin view, dashboard, diagnostic script, status vocabulary, operator runbook.", "visibility"),
  pressure("Truth pressure", "Duplicate sources of state or logic are drifting.", "Shared definition, authoritative table/file, retired mirror, validator, reconciliation script.", "truth"),
  pressure("Risk pressure", "A known failure would be expensive, public, repeated, unsafe, or hard to recover from.", "Focused test, Snyk/Sentry/CI check, cost guard, rate limit, incident note.", "guard"),
  pressure("Audience pressure", "The project must make sense to someone outside the build loop.", "README update, metadata, demo, favicon, OG image, public copy, launch checklist.", "public"),
  pressure("Transfer pressure", "The next operator or agent will need context.", "ADR, runbook, ship log, agent workflow, generated reference, retrospective note.", "reflect")
];

const statusLabels = {
  Y: "Strong evidence",
  P: "Partial or project-specific",
  N: "No meaningful inspected evidence",
  NA: "Intentionally not applicable"
};

const sources = {
  exec: {
    title: "Executive summary",
    file: "research/executive_summary.md",
    role: "Orientation",
    summary:
      "The fastest complete read of AppBuildProcOS: the one-sentence model, the reality-seeking loop, the nine states, the strongest evidence patterns, and how to use the package as a human or an agent.",
    inside: [
      "One-sentence model and the recurring loop",
      "The nine states in brief",
      "Strongest evidence patterns",
      "Productive chaos vs. avoidable rework",
      "How to read the package, and caveats"
    ],
    related: [{ href: "research/visual_model.md", label: "Open the visual model" }]
  },
  human: {
    title: "Human operating model",
    file: "research/brett_build_os.md",
    role: "Core model",
    summary:
      "The full human-facing model. Each of the nine states is defined by its entry signal, the smallest useful artifact it produces, the common risk, and the signal to switch states.",
    inside: [
      "Core thesis: build fast, then become rigorous where truth matters",
      "States 1-9 with triggers, artifacts, and risks",
      "Switch signals between states",
      "A lightweight version for a solo weekend project"
    ],
    related: [{ href: "research/transition_map.md", label: "Open the transition map" }]
  },
  agent: {
    title: "Agent specification",
    file: "research/brett_build_os_agent.md",
    role: "Agent spec",
    summary:
      "The same model rewritten for an agent: which evidence to inspect and in what order, how to label confidence, how to classify active states, restraint rules, and a fixed output template.",
    inside: [
      "Input evidence to inspect and evidence labels",
      "State classifier logic",
      "Infrastructure restraint rules",
      "Output template: state, evidence, missing carriers, next work"
    ],
    related: [{ href: "research/application_checklist.md", label: "Open the application checklist" }]
  },
  matrix: {
    title: "Traceability matrix",
    file: "research/evidence_traceability_matrix.md",
    role: "Audit",
    summary:
      "The audit spine. It ties every state-level claim to its supporting evidence and counterexamples, maps coverage across the ten projects, and separates teachable claims from conditional ones.",
    inside: [
      "Source chain and state-level traceability",
      "Project coverage map",
      "Claims strong enough to teach",
      "Claims that should stay conditional",
      "Falsifiability checks"
    ],
    related: []
  },
  transition: {
    title: "Transition map",
    file: "research/transition_map.md",
    role: "Sequence",
    summary:
      "The nine transitions (T1-T9) that move a project from one truth carrier to the next: the trigger that forces each move and the artifact that resolves it.",
    inside: [
      "T1 Idea to executable seed",
      "T3 Runtime to durable state",
      "T5 Working loop to operational visibility",
      "T6 Visibility to source-of-truth consolidation",
      "T9 Project experience to process artifact"
    ],
    related: [{ href: "research/cross_project_patterns.md", label: "Open cross-project patterns" }]
  },
  patterns: {
    title: "Cross-project patterns",
    file: "research/cross_project_patterns.md",
    role: "Patterns",
    summary:
      "The frequency analysis behind the pattern bars: recurring states, the dominant sequence, repeated transition triggers, technical choices that repeat, and late-arriving concerns across the corpus.",
    inside: [
      "Method and recurring phases or states",
      "Dominant sequence across projects",
      "Recurring transition triggers",
      "Technical choices that repeat",
      "The core AppBuildProcOS hypothesis"
    ],
    related: [{ href: "research/chaos_and_rework.md", label: "Open chaos and rework analysis" }]
  },
  variations: {
    title: "Variations and exceptions",
    file: "research/variation_and_exceptions.md",
    role: "Counterpoint",
    summary:
      "The guardrail against overfitting. It shows where project types diverge and documents named exceptions that the single model must accommodate rather than flatten.",
    inside: [
      "Public web apps vs. local tools",
      "Operated products vs. creative games",
      "Auth is conditional, not default",
      "Presentation can lead or lag",
      "Named exceptions: repOptics, darketype, KintsugiBlackjack, ids"
    ],
    related: []
  },
  checklist: {
    title: "Application checklist",
    file: "research/application_checklist.md",
    role: "Practice",
    summary:
      "The practical routine for applying the model to a new or existing repository: establish evidence, classify active states, identify the current pressure, and choose the smallest next artifact.",
    inside: [
      "Step 1 Establish evidence",
      "Step 2 Classify active states",
      "Step 3 Identify the current pressure",
      "Step 4 Choose the smallest next artifact",
      "Steps 5-7 Restraint, decision, and stop conditions"
    ],
    related: [{ href: "research/brett_build_os_agent.md", label: "Open the agent specification" }]
  }
};

const chaos = {
  source: "research/chaos_and_rework.md",
  summary:
    "Not all churn is failure. This analysis separates the chaos that productively surfaces reality from the rework that a small earlier artifact would have prevented.",
  productive: [
    {
      title: "Fast exposure to reality",
      detail: "Shipping a runnable loop early surfaces real constraints before they are guessed at."
    },
    {
      title: "Creative pivots with reversibility",
      detail: "Reframing the product while keeping the old mode reachable preserves optionality."
    },
    {
      title: "Instrumentation before full content",
      detail: "Building dashboards and tuning surfaces first makes later content decisions measurable."
    },
    {
      title: "Public reflection as build fuel",
      detail: "Turning lessons into public artifacts feeds context back into the next project."
    }
  ],
  avoidable: [
    {
      title: "Duplicate sources of truth",
      detail: "Two systems holding the same fact drift until one has to be retired."
    },
    {
      title: "Late guardrails after known risk",
      detail: "Waiting for a second incident after the first already named the failure mode."
    },
    {
      title: "Stale human-facing docs",
      detail: "READMEs and social copy left behind after an identity pivot overclaim or mislead."
    },
    {
      title: "Dirty working trees as hidden history",
      detail: "Uncommitted state read as dated history hides what actually happened when."
    }
  ]
};

const stateById = new Map(states.map((state) => [state.id, state]));
const projectById = new Map(projects.map((project) => [project.id, project]));
const timelineStart = new Date("2025-12-01T00:00:00");
const timelineEnd = new Date("2026-06-24T00:00:00");
let activeFilter = "all";
let tooltipTimer = null;
const TOOLTIP_INTENT_MS = 1100;

function milestone(stateId, date, label, confidence) {
  return { stateId, date, label, confidence };
}

function pattern(title, frequency, confidence, evidence, source, color) {
  return { title, frequency, confidence, evidence, source, color };
}

function pressure(title, signal, artifact, stateId) {
  return { title, signal, artifact, stateId };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function listHtml(items) {
  return `<ul class="drawer-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function linkList(links) {
  if (!links.length) return "";
  return `<div class="drawer-links">${links
    .map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
    .join("")}</div>`;
}

function datePosition(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  const span = timelineEnd.getTime() - timelineStart.getTime();
  const raw = ((date.getTime() - timelineStart.getTime()) / span) * 100;
  return Math.max(1.5, Math.min(98.5, raw));
}

function positionMilestones(milestones) {
  const ySlots = [50, 26, 74, 38, 62, 20, 80, 32, 68];
  const xJitter = [0, -1.6, 1.6, -3.2, 3.2, -4.8, 4.8, -6.4, 6.4];
  const positioned = [];
  const sorted = milestones
    .map((item, index) => ({ ...item, originalIndex: index, baseX: datePosition(item.date) }))
    .sort((a, b) => a.baseX - b.baseX);

  let cluster = [];
  const flushCluster = () => {
    cluster.forEach((item, slot) => {
      const x = Math.max(1.5, Math.min(98.5, item.baseX + xJitter[slot % xJitter.length]));
      positioned[item.originalIndex] = {
        ...item,
        x,
        y: ySlots[slot % ySlots.length]
      };
    });
    cluster = [];
  };

  sorted.forEach((item) => {
    const first = cluster[0];
    if (!first || Math.abs(item.baseX - first.baseX) <= 2.35) {
      cluster.push(item);
      return;
    }
    flushCluster();
    cluster.push(item);
  });
  flushCluster();

  return positioned;
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${month}/${day}/${year}`;
}

function projectLinks(project) {
  return [
    { href: `research/repos/${project.folder}/normalized_timeline.md`, label: "Normalized timeline" },
    { href: `research/repos/${project.folder}/development_dossier.md`, label: "Development dossier" },
    { href: `research/repos/${project.folder}/evidence_index.md`, label: "Evidence index" }
  ];
}

function openDrawer(kicker, title, body, links = [], side = "right") {
  const drawer = document.getElementById("detailDrawer");
  const content = document.getElementById("drawerContent");
  const backdrop = document.getElementById("drawerBackdrop");
  drawer.classList.toggle("is-left", side === "left");
  document.getElementById("drawerKicker").textContent = kicker;
  content.innerHTML = `<h2 id="drawerTitle">${escapeHtml(title)}</h2>${body}${linkList(links)}`;
  drawer.scrollTop = 0;
  document.querySelector(".drawer-body").scrollTop = 0;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  backdrop.hidden = false;
  document.getElementById("drawerClose").focus();
}

function closeDrawer() {
  const drawer = document.getElementById("detailDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  backdrop.hidden = true;
}

function openState(stateId) {
  const state = stateById.get(stateId);
  const body = `
    <p>${escapeHtml(state.purpose)}</p>
    <div class="detail-stat-grid">
      <div><strong>${escapeHtml(state.short)}</strong><span>State shorthand</span></div>
      <div><strong>${escapeHtml(state.trigger)}</strong><span>Entry signal</span></div>
      <div><strong>${escapeHtml(state.artifact)}</strong><span>Smallest useful artifact</span></div>
      <div><strong>${escapeHtml(state.risk)}</strong><span>Common risk</span></div>
    </div>
    <h3>Evidence examples</h3>
    ${listHtml(state.examples)}
  `;
  openDrawer(`State ${state.index}`, state.title, body, [
    { href: state.source, label: "Open source analysis" },
    { href: "research/evidence_traceability_matrix.md", label: "Open traceability matrix" }
  ]);
}

function openPattern(patternItem) {
  const body = `
    <p>${escapeHtml(patternItem.evidence)}</p>
    <div class="detail-stat-grid">
      <div><strong>${patternItem.frequency}/10</strong><span>Corpus frequency</span></div>
      <div><strong>${escapeHtml(patternItem.confidence)}</strong><span>Confidence</span></div>
    </div>
  `;
  openDrawer("Pattern", patternItem.title, body, [{ href: patternItem.source, label: "Open source analysis" }]);
}

function openPressure(pressureItem) {
  const state = stateById.get(pressureItem.stateId);
  const body = `
    <p>${escapeHtml(pressureItem.signal)}</p>
    <div class="detail-stat-grid">
      <div><strong>${escapeHtml(state.title)}</strong><span>Related AppBuildProcOS state</span></div>
      <div><strong>${escapeHtml(pressureItem.artifact)}</strong><span>Smallest useful artifact</span></div>
    </div>
    <h3>Why this matters</h3>
    <p>${escapeHtml(state.purpose)}</p>
  `;
  openDrawer("Pressure", pressureItem.title, body, [
    { href: "research/application_checklist.md", label: "Open application checklist" },
    { href: state.source, label: "Open state evidence" }
  ]);
}

function openProject(projectId) {
  const project = projectById.get(projectId);
  const coverageTags = project.coverage
    .map((status, index) => {
      const state = states[index];
      return `<span class="tag">${escapeHtml(state.short)}: ${escapeHtml(status)}</span>`;
    })
    .join("");
  const miniTimeline = project.milestones
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((item) => {
      const state = stateById.get(item.stateId);
      return `
        <div class="mini-timeline-row">
          <time>${escapeHtml(formatDate(item.date))}</time>
          <span>
            <strong>${escapeHtml(state.title)}</strong>
            <small>${escapeHtml(item.label)} (${escapeHtml(item.confidence)} confidence)</small>
          </span>
        </div>
      `;
    })
    .join("");
  const body = `
    <p>${escapeHtml(project.summary)}</p>
    <div class="detail-stat-grid">
      <div><strong>${escapeHtml(project.type)}</strong><span>Project type</span></div>
      <div><strong>${escapeHtml(project.evidenceBasis)}</strong><span>Evidence basis</span></div>
      <div><strong>${escapeHtml(formatDate(project.start))}</strong><span>First dated evidence</span></div>
      <div><strong>${escapeHtml(formatDate(project.frontier))}</strong><span>Current evidence frontier</span></div>
    </div>
    <h3>Dominant loop</h3>
    <p>${escapeHtml(project.loop)}</p>
    <h3>Stack snapshot</h3>
    <p>${escapeHtml(project.stack)}</p>
    <h3>Caveat</h3>
    <p>${escapeHtml(project.caveat)}</p>
    <h3>State coverage</h3>
    <div class="tag-row">${coverageTags}</div>
    <h3>Timeline specifics</h3>
    <div class="mini-timeline">${miniTimeline}</div>
  `;
  openDrawer("Project evidence", project.name, body, projectLinks(project));
}

function openMilestone(projectId, milestoneItem) {
  const project = projectById.get(projectId);
  const state = stateById.get(milestoneItem.stateId);
  const body = `
    <p>${escapeHtml(milestoneItem.label)}</p>
    <div class="detail-stat-grid">
      <div><strong>${escapeHtml(project.name)}</strong><span>Project</span></div>
      <div><strong>${escapeHtml(state.title)}</strong><span>State</span></div>
      <div><strong>${escapeHtml(formatDate(milestoneItem.date))}</strong><span>Date used for timeline</span></div>
      <div><strong>${escapeHtml(milestoneItem.confidence)}</strong><span>Confidence</span></div>
    </div>
    <h3>Project context</h3>
    <p>${escapeHtml(project.summary)}</p>
  `;
  openDrawer("Timeline point", `${project.name}: ${state.short}`, body, projectLinks(project));
}

function renderStates() {
  const target = document.getElementById("stateRail");
  target.innerHTML = states
    .map((state) => {
      return `
        <button class="state-card" style="--state-color: ${state.color};" type="button" data-state="${state.id}">
          <span class="index">State ${state.index}</span>
          <h3>${escapeHtml(state.title)}</h3>
          <p>${escapeHtml(state.purpose)}</p>
          <div class="tag-row">
            <span class="tag">${escapeHtml(state.short)}</span>
            <span class="tag">${escapeHtml(state.artifact.split(",")[0])}</span>
          </div>
        </button>
      `;
    })
    .join("");
  target.querySelectorAll("[data-state]").forEach((button) => {
    button.addEventListener("click", () => openState(button.dataset.state));
  });
}

function renderFilters() {
  const target = document.getElementById("timelineFilters");
  const options = [
    { id: "all", label: "All", color: "var(--ink)", ink: "#ffffff" },
    ...states.map((state) => ({
      id: state.id,
      label: state.chip,
      color: state.color,
      ink: state.id === "guard" ? "var(--ink)" : "#ffffff"
    }))
  ];
  target.innerHTML = options
    .map((option) => {
      const active = option.id === activeFilter ? " is-active" : "";
      return `<button class="filter-button${active}" style="--filter-color: ${option.color}; --filter-ink: ${option.ink};" type="button" data-filter="${option.id}">${escapeHtml(option.label)}</button>`;
    })
    .join("");
  target.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderTimeline();
    });
  });
}

function milestoneForDot(dot) {
  const project = projectById.get(dot.dataset.project);
  const item = project.milestones.find((milestoneItem) => {
    return milestoneItem.stateId === dot.dataset.state && milestoneItem.date === dot.dataset.date;
  });
  return { project, item };
}

function nudgeNeighbors(hovered) {
  const track = hovered.closest(".lane-track");
  if (!track) return;
  const influence = 64;
  const maxNudge = 13;
  const hr = hovered.getBoundingClientRect();
  const hcx = hr.left + hr.width / 2;
  const hcy = hr.top + hr.height / 2;
  track.querySelectorAll(".timeline-dot").forEach((dot) => {
    if (dot === hovered) return;
    const r = dot.getBoundingClientRect();
    const dx = Math.abs(r.left + r.width / 2 - hcx);
    if (dx >= influence) {
      dot.style.setProperty("--nudge", "0px");
      return;
    }
    const closeness = 1 - dx / influence;
    const direction = r.top + r.height / 2 >= hcy ? 1 : -1;
    dot.style.setProperty("--nudge", `${(direction * closeness * maxNudge).toFixed(1)}px`);
  });
}

function resetNudge(dot) {
  const track = dot.closest(".lane-track");
  if (!track) return;
  track.querySelectorAll(".timeline-dot").forEach((other) => {
    other.style.setProperty("--nudge", "0px");
  });
}

function getTooltipEl() {
  let el = document.getElementById("timelineTooltip");
  if (!el) {
    el = document.createElement("div");
    el.id = "timelineTooltip";
    el.className = "timeline-tooltip";
    el.setAttribute("role", "tooltip");
    document.body.appendChild(el);
  }
  return el;
}

function showTooltip(dot) {
  const { project, item } = milestoneForDot(dot);
  if (!item) return;
  const state = stateById.get(item.stateId);
  const el = getTooltipEl();
  el.style.setProperty("--tt-color", state.color);
  el.innerHTML = `
    <span class="tt-kicker">${escapeHtml(project.name)} &middot; ${escapeHtml(state.chip)}</span>
    <strong>${escapeHtml(state.title)}</strong>
    <span class="tt-date">${escapeHtml(formatDate(item.date))} &middot; ${escapeHtml(item.confidence)} confidence</span>
    <span class="tt-detail">${escapeHtml(item.label)}</span>
  `;
  const dr = dot.getBoundingClientRect();
  const tr = el.getBoundingClientRect();
  let top = dr.top - tr.height - 10;
  if (top < 8) top = dr.bottom + 10;
  let left = dr.left + dr.width / 2 - tr.width / 2;
  left = Math.max(8, Math.min(window.innerWidth - tr.width - 8, left));
  el.style.top = `${Math.round(top)}px`;
  el.style.left = `${Math.round(left)}px`;
  el.classList.add("is-visible");
}

function hideTooltip() {
  clearTimeout(tooltipTimer);
  tooltipTimer = null;
  const el = document.getElementById("timelineTooltip");
  if (el) el.classList.remove("is-visible");
}

function renderTimeline() {
  const target = document.getElementById("projectTimeline");
  target.innerHTML = projects
    .map((project) => {
      const start = datePosition(project.start);
      const endRight = 100 - datePosition(project.frontier);
      const dots = positionMilestones(project.milestones)
        .map((item) => {
          const state = stateById.get(item.stateId);
          const dimmed = activeFilter !== "all" && activeFilter !== item.stateId ? " is-dimmed" : "";
          return `
            <button
              class="timeline-dot${dimmed}"
              type="button"
              style="left: ${item.x}%; --dot-y: ${item.y}%; --dot-color: ${state.color}; --dot-ink: ${state.id === "guard" ? "var(--ink)" : "#ffffff"};"
              data-project="${project.id}"
              data-state="${item.stateId}"
              data-date="${item.date}"
              aria-label="${escapeHtml(project.name)} ${escapeHtml(state.title)} ${escapeHtml(formatDate(item.date))}: ${escapeHtml(item.label)}"
            >
              <span>${escapeHtml(state.chip)}</span>
            </button>
          `;
        })
        .join("");
      return `
        <div class="timeline-lane">
          <button class="lane-label" type="button" data-project="${project.id}">
            <strong>${escapeHtml(project.name)}</strong>
            <span>${escapeHtml(project.type)}</span>
          </button>
          <div class="lane-track">
            <span class="life-bar" style="--start: ${start}%; --end: ${endRight}%;"></span>
            ${dots}
          </div>
        </div>
      `;
    })
    .join("");

  target.querySelectorAll(".lane-label").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
  target.querySelectorAll(".timeline-dot").forEach((button) => {
    button.addEventListener("click", () => {
      hideTooltip();
      const { project, item } = milestoneForDot(button);
      openMilestone(project.id, item);
    });
    button.addEventListener("mouseenter", () => {
      nudgeNeighbors(button);
      clearTimeout(tooltipTimer);
      tooltipTimer = setTimeout(() => showTooltip(button), TOOLTIP_INTENT_MS);
    });
    button.addEventListener("mouseleave", () => {
      resetNudge(button);
      hideTooltip();
    });
    button.addEventListener("focus", () => {
      nudgeNeighbors(button);
      showTooltip(button);
    });
    button.addEventListener("blur", () => {
      resetNudge(button);
      hideTooltip();
    });
  });
}

function renderPatterns() {
  const target = document.getElementById("patternBars");
  target.innerHTML = patterns
    .map((item, index) => {
      const width = Math.min(100, Math.round((item.frequency / 10) * 100));
      return `
        <button class="pattern-button" type="button" data-pattern="${index}">
          <div class="bar-meta">
            <h3>${escapeHtml(item.title)}</h3>
            <span class="frequency">${item.frequency}/10</span>
          </div>
          <span class="bar-track" aria-hidden="true">
            <span class="bar-fill" style="--width: ${width}%; --bar-color: ${item.color};"></span>
          </span>
          <p>${escapeHtml(item.evidence)}</p>
        </button>
      `;
    })
    .join("");
  target.querySelectorAll("[data-pattern]").forEach((button) => {
    button.addEventListener("click", () => openPattern(patterns[Number(button.dataset.pattern)]));
  });
}

function renderPressureGrid() {
  const target = document.getElementById("pressureGrid");
  target.innerHTML = pressures
    .map((item, index) => {
      const state = stateById.get(item.stateId);
      return `
        <button class="pressure-button" type="button" data-pressure="${index}" style="border-top: 6px solid ${state.color};">
          <span class="tag">${escapeHtml(state.short)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.signal)}</p>
          <span class="artifact">${escapeHtml(item.artifact)}</span>
        </button>
      `;
    })
    .join("");
  target.querySelectorAll("[data-pressure]").forEach((button) => {
    button.addEventListener("click", () => openPressure(pressures[Number(button.dataset.pressure)]));
  });
}

function renderCoverageTable() {
  const target = document.getElementById("coverageTable");
  const header = `
    <thead>
      <tr>
        <th>Project</th>
        ${states.map((state) => `<th>${escapeHtml(state.short)}</th>`).join("")}
      </tr>
    </thead>
  `;
  const body = `
    <tbody>
      ${projects
        .map((project) => {
          return `
            <tr>
              <td><button class="text-button" type="button" data-project="${project.id}">${escapeHtml(project.name)}</button></td>
              ${project.coverage
                .map((status) => {
                  const className = `status-${status.toLowerCase()}`;
                  return `<td><span class="status-pill ${className}" title="${escapeHtml(statusLabels[status])}">${escapeHtml(status)}</span></td>`;
                })
                .join("")}
            </tr>
          `;
        })
        .join("")}
    </tbody>
  `;
  target.innerHTML = header + body;
  target.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
}

function renderProjects() {
  const target = document.getElementById("projectBrowser");
  target.innerHTML = projects
    .map((project) => {
      return `
        <button class="project-card" type="button" data-project="${project.id}">
          <span class="project-type">${escapeHtml(project.type)}</span>
          <h3>${escapeHtml(project.name)}</h3>
          <p>${escapeHtml(project.loop)}</p>
          <div class="tag-row">
            <span class="tag">${escapeHtml(formatDate(project.start))}</span>
            <span class="tag">${escapeHtml(project.evidenceBasis.split(";")[0])}</span>
          </div>
        </button>
      `;
    })
    .join("");
  target.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
}

function openSource(sourceId) {
  const source = sources[sourceId];
  if (!source) return;
  const body = `
    <p>${escapeHtml(source.summary)}</p>
    <div class="detail-stat-grid">
      <div><strong>${escapeHtml(source.role)}</strong><span>Role in the package</span></div>
      <div><strong>${escapeHtml(source.file.split("/").pop())}</strong><span>Research file</span></div>
    </div>
    <h3>Inside this file</h3>
    ${listHtml(source.inside)}
  `;
  openDrawer("Research file", source.title, body, [
    { href: source.file, label: `Open ${source.title.toLowerCase()}` },
    ...source.related
  ]);
}

function openChaos() {
  const column = (heading, items, accent) => `
    <h3>${escapeHtml(heading)}</h3>
    <div class="chaos-detail">
      ${items
        .map(
          (item) => `
            <div class="chaos-detail-row" style="--chaos-accent: ${accent};">
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.detail)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
  const body = `
    <p>${escapeHtml(chaos.summary)}</p>
    ${column("Productive chaos", chaos.productive, "var(--truth)")}
    ${column("Avoidable rework", chaos.avoidable, "var(--visibility)")}
  `;
  openDrawer(
    "Pattern strength",
    "Productive chaos vs. avoidable rework",
    body,
    [{ href: chaos.source, label: "Open chaos and rework analysis" }],
    "left"
  );
}

function bindSources() {
  document.querySelectorAll("#sourceGrid [data-source]").forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      openSource(card.dataset.source);
    });
  });
  const chaosLink = document.querySelector(".chaos-panel .text-link");
  if (chaosLink) {
    chaosLink.addEventListener("click", (event) => {
      event.preventDefault();
      openChaos();
    });
  }
}

function renderEditStamps() {
  const stamps = document.querySelectorAll("[data-edited]");
  if (!stamps.length) return;
  const raw = document.lastModified ? new Date(document.lastModified) : null;
  const d = raw && !Number.isNaN(raw.getTime()) && raw.getFullYear() > 2000 ? raw : new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const pad = (n) => String(n).padStart(2, "0");
  const label = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  stamps.forEach((node) => {
    node.innerHTML = `<span class="stamp-k">Last edited</span> ${escapeHtml(label)}`;
    node.setAttribute("title", `Last edited ${label}`);
  });
}

// Base opacity of each section's two splatter decals [::before, ::after],
// matching the values declared in styles.css.
const DECAL_BASE = {
  hero: [0.3, 0.22],
  "story-band": [0.2, 0.26],
  "timeline-band": [0.34, 0.36],
  "pattern-band": [0.34, 0.33],
  "pressure-band": [0.34, 0.36],
  "evidence-band": [0.34, 0.33],
  "source-band": [0.34, 0.36]
};

function setupParallax() {
  const sections = Array.from(document.querySelectorAll(".hero, .band"));
  if (!sections.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // One decal per section pseudo (slot 0 = ::before, 1 = ::after).
  const decals = [];
  Object.keys(DECAL_BASE).forEach((key) => {
    const el = document.querySelector(`.${key}`);
    if (!el) return;
    DECAL_BASE[key].forEach((base, slot) => decals.push({ el, slot, base, effect: "none", amp: 0 }));
  });

  // Randomly animate ~50% of the background ink images; each animated decal
  // gets a random effect from vertical drift, horizontal drift, or fade.
  if (!reduce) {
    const effects = ["vy", "vx", "fade"];
    const shuffled = decals.slice().sort(() => Math.random() - 0.5);
    const animateCount = Math.round(decals.length * 0.5);
    shuffled.slice(0, animateCount).forEach((d) => {
      d.effect = effects[Math.floor(Math.random() * effects.length)];
      const sign = Math.random() < 0.5 ? -1 : 1;
      if (d.effect === "vy") d.amp = (170 + Math.random() * 210) * sign;
      else if (d.effect === "vx") d.amp = (150 + Math.random() * 190) * sign;
    });
  }

  // Expose the randomized assignment for inspection/debugging.
  const keyOf = (el) => Object.keys(DECAL_BASE).find((k) => el.classList.contains(k));
  window.__parallax = decals.map((d) => ({ section: keyOf(d.el), slot: d.slot === 0 ? "before" : "after", effect: d.effect, amp: Math.round(d.amp) }));

  // p is centered at 0 (section centered in viewport), ranging about -1.2..1.2.
  const setDecal = (d, p) => {
    let tx = 0, ty = 0, op = d.base;
    if (d.effect === "vy") ty = p * d.amp;
    else if (d.effect === "vx") tx = p * d.amp;
    else if (d.effect === "fade") op = d.base * Math.max(0.06, 1 - Math.abs(p) * 1.15);
    const pre = d.slot === 0 ? "--b-" : "--a-";
    d.el.style.setProperty(`${pre}tx`, `${tx.toFixed(1)}px`);
    d.el.style.setProperty(`${pre}ty`, `${ty.toFixed(1)}px`);
    d.el.style.setProperty(`${pre}o`, op.toFixed(3));
  };

  if (reduce) {
    decals.forEach((d) => setDecal(d, 0.5));
    return;
  }

  let ticking = false;
  const update = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const pmap = new Map();
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const raw = (rect.top + rect.height / 2 - vh / 2) / vh;
      const p = Math.max(-1.2, Math.min(1.2, raw));
      section.style.setProperty("--p", p.toFixed(3));
      pmap.set(section, p);
    });
    decals.forEach((d) => {
      const p = pmap.get(d.el);
      if (p !== undefined) setDecal(d, p);
    });
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
}

function bindDrawer() {
  document.getElementById("drawerClose").addEventListener("click", closeDrawer);
  document.getElementById("drawerBackdrop").addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer();
  });
}

function init() {
  bindDrawer();
  renderStates();
  renderFilters();
  renderTimeline();
  renderPatterns();
  renderPressureGrid();
  renderCoverageTable();
  renderProjects();
  bindSources();
  renderEditStamps();
  setupParallax();

  const shell = document.querySelector(".timeline-shell");
  if (shell) shell.addEventListener("scroll", hideTooltip, { passive: true });
  window.addEventListener("scroll", hideTooltip, { passive: true });
}

init();
