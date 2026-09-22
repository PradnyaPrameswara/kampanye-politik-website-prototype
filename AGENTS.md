# AGENTS.md — CivicUnity AI Agent Operational Contract

> **MANDATORY DIRECTIVE FOR ALL AI AGENTS**:
> You must read, acknowledge, and adhere to this file on EVERY turn and task.
> Always communicate, document, and write code in the **English** language.

---

## 1. Core Operating Principles

1. **Always Consult AGENTS.md**: Before executing tasks, review the constraints, active skills, and verification gates specified herein.
2. **Strict Language Policy**: All responses, file comments, logs, and artifacts must be in **English**.
3. **Zero AI Slop**:
   - **Code Slop**: Strictly reject `as unknown as Type`, chained casts, runtime `typeof` laundering, and untested stubs.
   - **UI Slop**: Strictly reject generic purple gradients, meaningless cards, ungrounded stats, and decorative AI clichés.
   - **Copy Slop**: Write direct, human, evidence-based prose. Avoid hype words (*seamless, revolutionized, robust, powerhouse*).
4. **Architectural Guardrails**:
   - **No `useEffect`**: State must be derived, event-driven, or managed through native browser primitives / signals.
   - **Selective Islands**: Pure Astro by default (Zero client JS). Use React islands (`client:visible` or `client:load`) strictly for interactive widgets (Sheet, Accordion, Dialog, Forms).
   - **Design Fidelity**: Strict 1:1 parity with raw Webflow design tokens defined in `tailwind.config.ts`.

---

## 2. SDLC Skills Workflow (Addy Osmani Suite)

Follow these skill workflows for task phases:

| Phase | Slash Command / Skill | When to Trigger | Objective |
| :--- | :--- | :--- | :--- |
| **Requirements** | `/spec` (`spec-driven-development`) | Starting new feature or change | Define scope, boundaries, and acceptance criteria before coding. |
| **Planning** | `/plan` (`planning-and-task-breakdown`) | Non-trivial multi-file task | Decompose into small, atomic, verifiable steps. |
| **Implementation** | `/build` (`incremental-implementation`) | Writing feature logic | Thin, testable slices. Maintain green build at every step. |
| **Testing** | `/test` (`test-driven-development`) | Modifying or adding behavior | Prove correctness with tests before declaring completion. |
| **Quality Bar** | `/constraints` (`constraint-driven-development`) | Defining project limits | Never weaken linter or type-checker settings. |
| **Review** | `/review` (`code-review-and-quality`) | Before completion/merge | Multi-axis inspection against spec and repo standards. |
| **Simplification** | `/code-simplify` (`code-simplification`) | After code works | Clarity over cleverness; eliminate redundant abstraction. |
| **Performance** | `/webperf` (`performance-optimization`) | Frontend audit | Check bundle sizes, Core Web Vitals, and image optimization. |
| **Shipping** | `/ship` (`shipping-and-launch`) | Production readiness | Pre-flight verification checklist. |

---

## 3. Anti-Slop Enforcement & Linters

### Vendored Oxlint Plugin (`dmmulroy/anti-slop`)
- **Location**: `tools/oxlint/anti-slop/`
- **Config**: `.oxlintrc.json`
- **Mandatory Gate**: Before finishing any coding turn, run:
  ```bash
  $env:NODE_OPTIONS="--experimental-strip-types"; npx oxlint src
  ```
- **Rules Enforced**:
  - `anti-slop/no-chained-type-assertions`
  - `anti-slop/no-known-value-widening`
  - `anti-slop/no-unknown-parameters` / `no-unknown-returns`
  - `anti-slop/require-readable-spacing`
  - `oxc/no-accumulating-spread`

### Behavioral & UI Anti-Slop (`miqdadbadjuber/anti-slop`)
- Consult `.agents/skills/antislop/` for 38 mandatory gates.
- Consult `.agents/skills/antislop-ui/` for visual restraint, contrast, and layout standards.
- Consult `.agents/skills/antislop-copywriting/` for human voice and tone rules.

---

## 4. Token & Communication Optimization (Caveman)

- To conserve context window and reduce token spend without sacrificing technical precision:
  - Invoke `caveman` mode for terse, high-density outputs when executing repetitive tasks or summaries.
  - Use `cavecrew` subagents for isolated file edits and reviews to keep the main agent context clean.
  - Command: `/caveman lite` or `/caveman full`.

---

## 5. Tooling & Intelligence Engines

### Code Intelligence (AST & Graph)
- **`lexa`**: Use for rapid symbol definitions, call hierarchies, and task briefs (`lexa symbol-search`, `lexa brief`).
- **`codedb`**: Use for deep AST indexing and dependency tracing (`codedb_search`, `codedb_deps`).
- **`lsp-ai`**: Local LSP server binary installed at `C:\Users\agung\.local\bin\lsp-ai.exe`.

### Browser Automation & Verification
- **Playwright MCP**: Configured in Antigravity MCP servers.
- Use Playwright MCP or `@playwright/mcp` for browser interaction, accessibility snapshots, and visual regression verification across 4 breakpoints (1440px, 991px, 767px, 479px).

---

## 6. Verification Checklist Before Marking Work Done

- [ ] All code conforms to strict TypeScript (`tsconfig.json`).
- [ ] No `useEffect` or legacy React lifecycles introduced.
- [ ] Anti-slop Oxlint check passes on modified files:
      `$env:NODE_OPTIONS="--experimental-strip-types"; npx oxlint src`
- [ ] Visual styling matches Webflow tokens in `tailwind.config.ts`.
- [ ] Responses and documentation are 100% in English.
