# AGENTS.md — CivicUnity Agent Operational Contract

Read and adhere to this file on every turn. All responses, docs, and code must be in English.

---

## 1. Mandatory Skills & Global MCP

### Active Skills (Always Apply)
- **`using-superpowers`**: Invoke relevant skills before any action; process skills first, implementation skills second.
- **`using-agent-skills`**: Discover and route task workflows by development phase.
- **`ask-matt`**: Select skill flows, architectural maps, and routing across tasks.
- **`wayfinder`**: Map large, foggy efforts as decision tickets when the path forward is unclear.
- **`caveman`**: Terse communication style; keep technical substance, drop filler.
- **`emil-design-eng`**: UI polish, animation decisions, interaction craft, and Before/After review format.
- **`karpathy-guidelines`**: Simplicity first, surgical edits, verify assumptions, no overcomplication.
- **`ui-ux-pro-max`**: Design intelligence, accessibility (WCAG AA), responsive layout, and UX standards.
- **`antislop`**: Enforce anti-slop filters, liveliness dials, and design purpose across UI and copy.

### Global MCP Servers
- **`codegraph`**: Always use first. Call `codegraph_explore` before reading, answering, or editing indexed code. Returns verbatim source, call paths, and blast radius.
- **`codedb`** and **`lexa`**: Available, but use only when explicitly authorized in the current chat.

---

## 2. Core Stack & Architecture Rules

- **Mandatory Stack**: Always use Astro, TypeScript, React, Tailwind CSS, and shadcn/ui.
- **Zero Legacy & Zero Radix**: Never use Radix UI primitives or legacy patterns. Use modern Base UI shadcn components.
- **No `useEffect`**: State must be derived, event-driven, or managed via modern signals/subscriptions (`useSyncExternalStore`).
- **No Comments**: Never generate comments in code. Write self-explanatory code.
- **No Emojis**: Never use emojis in code, UI, or commit messages.
- **No Unnecessary Code**: No stubs, dead code, speculative abstractions, or unused helpers.
- **Zero AI Slop**: Reject `as unknown as Type`, chained casts, runtime `typeof` laundering, and generic AI templates.
- **Selective Islands**: Pure Astro by default. React islands (`client:visible` or `client:load`) only for interactive widgets (dialogs, sheets, accordions, forms).
- **Design Token Fidelity**: Strict 1:1 match with Webflow tokens in `tailwind.config.ts`.
---

## 3. Verification Gate

Run before marking work done:
1. **Oxlint**: `$env:NODE_OPTIONS="--experimental-strip-types"; npx oxlint src`
2. **TypeScript**: Strict type check (`npx tsc --noEmit`).
3. **Clean Code**: Verify zero code comments, zero emojis, and zero unnecessary code in diff.
4. **Runtime/UI**: Verify changed paths and interactions directly.
