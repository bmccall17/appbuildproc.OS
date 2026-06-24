# Satellite Repository Research Export

## Instructions for the Local Agent

You are producing a **research export** for two repositories on this machine. The output will be consumed by another agent conducting a cross-project analysis of Brett's application-building process. Your job is archaeological — extract dated evidence of how each project evolved, not summarize what it does today.

**Produce one export per repository.** Save each as a markdown file in the repo root named `_research_export.md`.

Run this for **both** of the following repositories:
1. **Submission Cockpit** (located in `/career` or wherever the submission cockpit project lives — search for it if needed)
2. **KintsugiBlackjack** (locate this repo on the machine)

---

## What to Extract

For each repository, produce a single markdown document with the following sections. Use evidence, not memory. If a section has no evidence, say so explicitly — that gap is itself useful data.

### Section 1: Repository Identity

```
Project Name:
Local Path:
Remote URL: (from `git remote -v`)
Creation Date: (earliest commit date from `git log --reverse --format="%ai %s" | head -1`)
Latest Commit: (from `git log -1 --format="%ai %s"`)
Total Commits: (from `git rev-list --count HEAD`)
Branch Count: (from `git branch -a | wc -l`)
Tag Count: (from `git tag | wc -l`)
```

### Section 2: Tech Stack Snapshot

Determine from `package.json`, config files, and imports:
- Language(s) and framework(s)
- Database / persistence layer
- Deployment target(s) (Vercel, Render, PartyKit, etc.)
- Authentication method (if any)
- Key dependencies (list the top 10-15 most significant from package.json)

### Section 3: Chronological Git Archaeology

Run the following and include the **full output**:

```bash
# First 20 commits (the birth of the project)
git log --reverse --format="%ai | %s" | head -20

# Last 20 commits (the current frontier)
git log --format="%ai | %s" | head -20

# All commits that mention key lifecycle words (run individually)
for word in deploy auth admin database db migration test analytics monitor security ci docker env config ADR decision refactor breaking release ship launch MVP prototype scaffold init; do
  echo "--- $word ---"
  git log --all --grep="$word" --format="%ai | %s" 2>/dev/null
done
```

### Section 4: File Structure Snapshot

Run and include:
```bash
# Top-level structure
find . -maxdepth 1 -not -name "node_modules" -not -name ".git" -not -name ".next" -not -name "dist" | sort

# Key directories (2 levels deep, excluding noise)
find . -maxdepth 2 -type d -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/.next/*" -not -path "*/dist/*" | sort
```

### Section 5: Evidence of Key Lifecycle Milestones

For each of the following, find the **earliest dated evidence** (commit, file creation, config addition). If no evidence exists, say "No evidence found."

| Milestone | Evidence to Look For |
|-----------|---------------------|
| **Idea / Problem Recognition** | README origin, any notes/docs, earliest planning files |
| **First Working Prototype** | First commit with runnable code, first `dev` script |
| **Repository Creation** | First commit date |
| **First Deployment** | Deployment configs (vercel.json, Dockerfile, render.yaml, partykit.json), CI/CD workflows, deploy-related commits |
| **Persistence / Database** | Schema files, migration dirs, ORM config, .env vars referencing DB |
| **Authentication** | Auth libraries in package.json, auth routes, session/token code |
| **External API Integration** | API keys in .env.example, SDK imports, webhook handlers |
| **ADRs / Decision Docs** | Any docs/, devnotes/, ADR files, decision logs |
| **Admin / Operational Tooling** | Admin routes, dashboard pages, internal tools, inspection endpoints |
| **Testing** | Test files, test config (jest, vitest, playwright), test scripts in package.json |
| **Analytics / Monitoring / Logging** | Analytics libraries, logging setup, error reporting (Sentry, etc.) |
| **Social / Public Presentation** | Open Graph meta tags, favicons, social preview images, landing pages |
| **Security Hardening** | Rate limiting, input validation, CORS config, helmet, CSP headers |
| **CI/CD** | GitHub Actions workflows, deployment scripts |
| **Documentation** | README evolution, API docs, user guides, onboarding docs |

For each milestone found, provide:
- **Date** (commit date or file timestamp)
- **Evidence** (commit hash + message, or file path)
- **Confidence** (High = direct dated evidence / Medium = reasonable inference / Low = uncertain)

### Section 6: Decision Reversals and Direction Changes

Look for evidence of:
- Major refactors (commits mentioning "refactor", "rewrite", "migrate", "replace")
- Dependency swaps (e.g., switching databases, frameworks, deployment targets)
- Abandoned features (directories that appear and later disappear, or get quarantined)
- Any ADR or decision document that reverses a prior decision

### Section 7: README History

```bash
# Show how the README evolved over time
git log --follow --format="%ai | %s" -- README.md
```

### Section 8: Package.json History (Dependency Evolution)

```bash
# Show when package.json changed
git log --follow --format="%ai | %s" -- package.json

# Show the current dependency list
cat package.json | grep -A 200 '"dependencies"' | head -60
```

### Section 9: Project Narrative (Agent's Interpretation)

After extracting all of the above, write a **2-3 paragraph narrative** summarizing:
- What this project appears to be and who it's for
- How it evolved based on the commit history (not the current state)
- What lifecycle phases are visible in the evidence
- What appears to be missing or notably late-arriving
- Any evidence of the developer recognizing a phase transition (e.g., moving from prototype to product, adding operational tooling after a problem occurred)

**Label your interpretations.** Use:
- **[Observed]** for facts directly supported by evidence
- **[Inferred]** for reasonable interpretations
- **[Gap]** for missing evidence that would be expected

---

## Output Format

Save each export as `_research_export.md` in the repository root. The file should be self-contained — another agent reading it cold should be able to reconstruct the project's development history without access to the repository itself.

**Do both repos. Start with whichever one you find first.**
