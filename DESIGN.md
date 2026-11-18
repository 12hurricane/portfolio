---
version: 1.0.0
name: tariq-khattak-portfolio-design-system
description: |
  An editorial engineering portfolio design system built on a warm off-white canvas
  (#F7F6F2), deep charcoal headings (#202A2A), and pine-teal accents (#1C6D60 / #35B6A5).
  The design pairs the intellectual, print-like warmth of Claude with the technical craft
  density of Linear and the typography discipline of Resend. Free of AI-generated marketing
  tropes, 100% WCAG AA/AAA contrast compliant, and anchored by interactive procedural Three.js
  hardware perception modeling.

colors:
  light:
    canvas: "#F7F6F2"
    surface: "#FFFFFF"
    surface-card: "#FFFFFF"
    surface-subtle: "#EFECE6"
    hairline: "#E2DFD7"
    hairline-strong: "#CDC7B9"
    ink: "#202A2A"
    ink-secondary: "#424E4B"
    ink-muted: "#525E5B"
    primary: "#1C6D60"
    primary-hover: "#15554B"
    primary-surface: "#DCECE6"
    grid-line: "rgba(32, 42, 42, 0.06)"
  dark:
    canvas: "#171C20"
    surface: "#20282D"
    surface-card: "#252F34"
    surface-subtle: "#1C2328"
    hairline: "#354147"
    hairline-strong: "#4A5B63"
    ink: "#F1F5F4"
    ink-secondary: "#C4D1CE"
    ink-muted: "#9AA8A5"
    primary: "#35B6A5"
    primary-hover: "#75C9BB"
    primary-surface: "rgba(53, 182, 165, 0.12)"
    grid-line: "rgba(53, 65, 71, 0.25)"

typography:
  display-xl:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "72px"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  display-lg:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  subhead:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body-base:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    maxWidth: "62ch"
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    maxWidth: "58ch"
  caption:
    fontFamily: "Inter, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    maxWidth: "54ch"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.02em"

rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "9999px"

spacing:
  section-gap: "80px"
  block-gap: "32px"
  element-gap: "16px"
  tap-target-min: "44px"

constraints:
  max-line-length: 80
  recommended-line-length: 65
  min-font-size: "12px"
  min-contrast-body: "4.5:1"
  min-contrast-large: "3.0:1"
---

# DESIGN.md — Tariq Khattak Portfolio Design System

> **Contract Authority:** This document serves as the single source of truth for the visual architecture, typography scales, color contracts, and component behaviors of Tariq Khattak's portfolio. All AI coding agents, contributors, and reviewers must strictly adhere to the rules, tokens, and constraints documented herein.

---

## 1. Visual Philosophy & Positioning

The portfolio is designed for an **Early-Career AI Engineer** specializing in Python, Generative AI, Computer Vision, and Backend Engineering.

### Core Tenets:
1. **Editorial Print Warmth Over SaaS Monotony:**  
   The primary canvas is a warm off-white (`#F7F6F2`), evoking premium technical journals and editorial documentation rather than cold stark white (`#FFFFFF`) or generic slate grey.
2. **Systems Reliability Over Prompt Hype:**  
   Every project presentation emphasizes real engineering tradeoffs: latency boundaries, offline edge deployment, deterministic validation rules versus probabilistic models, and hardware constraints.
3. **Genuine Interactive Proof:**  
   Instead of static screenshots or stock renders, the portfolio incorporates live interactive procedural Three.js 3D models (`img2threejs`), verifiable architectural pipelines, and real copy with zero buzzwords.
4. **Information Density with Breathing Room:**  
   Inspired by **Linear** and **Resend**, UI components use high information density (mono labels, architectural metadata, latency metrics) balanced with open, uncontained section dividers.

---

## 2. Color System & Contrast Contracts

### Light Mode (Default)
| Token Name | Hex Code | Purpose | Contrast vs Background |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#F7F6F2` | Page Canvas | Base (1:1) |
| `--bg-secondary` | `#FFFFFF` | Lifted Cards, Modals, Forms | Clean contrast with canvas |
| `--bg-subtle` | `#EFECE6` | Code containers, chip backgrounds | Subtle warmth |
| `--text-primary` | `#202A2A` | Headings, primary titles | **13.8:1** (Passes WCAG AAA) |
| `--text-secondary`| `#424E4B` | Body prose, technical explanations | **8.0:1** (Passes WCAG AAA) |
| `--text-muted` | `#525E5B` | Captions, metadata, mono labels | **6.1:1** (Passes WCAG AA) |
| `--accent-primary`| `#1C6D60` | Primary interactive cues, links, active states | **5.5:1** (Passes WCAG AA) |
| `--accent-surface`| `#DCECE6` | Active tab backgrounds, badge fills | Soft pine wash |
| `--border-color` | `#E2DFD7` | Structural hairlines, dividers | Clear separation |

### Dark Mode (`[data-theme="dark"]`)
| Token Name | Hex Code | Purpose | Contrast vs Dark Canvas |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#171C20` | Obsidian Canvas | Base (1:1) |
| `--bg-secondary` | `#20282D` | Lifted Cards & Drawers | Clean separation |
| `--bg-subtle` | `#1C2328` | Chip containers | Dark contrast |
| `--text-primary` | `#F1F5F4` | Primary text & headings | **14.2:1** (Passes WCAG AAA) |
| `--text-secondary`| `#C4D1CE` | Body prose | **9.6:1** (Passes WCAG AAA) |
| `--text-muted` | `#9AA8A5` | Metadata & labels | **6.3:1** (Passes WCAG AA) |
| `--accent-primary`| `#35B6A5` | Primary teal accent | **7.4:1** (Passes WCAG AA) |
| `--border-color` | `#354147` | Subtle borders | Hairline precision |

---

## 3. Typography Hierarchy & Text Rules

### Font Families
- **Display & Headings:** `Space Grotesk` (`var(--font-space-grotesk)`), a geometric sans with distinctive technical apertures.
- **Body & Prose:** `Inter` (`var(--font-inter)`), neutral, highly legible with `text-wrap: pretty`.
- **Code & Metadata:** System Monospace (`JetBrains Mono`, `ui-monospace`, `monospace`).

### Strict Typographic Scale
```text
Display XL (Hero)    : 72px / leading-[0.98] / tracking-[-0.03em] / font-bold
Display LG (Section) : 36px / leading-[1.15] / tracking-[-0.02em] / font-bold
Headline (Cards)     : 24px / leading-[1.25] / tracking-[-0.01em] / font-bold
Subhead              : 20px / leading-[1.35] / font-medium
Body Base            : 16px / leading-[1.60] / max-w-[62ch]
Body Secondary       : 14px / leading-[1.50] / max-w-[58ch]
Captions & Labels    : 12px / leading-[1.50] / font-mono / max-w-[54ch]
```

### Typographic Invariants:
1. **The 80-Character Rule:** No body or narrative text block may render lines exceeding ~80 characters. Containers must apply `max-w-[58ch]`, `max-w-[62ch]`, or `max-w-prose`.
2. **No Sub-12px Text:** Never use `text-[10px]` or `text-[11px]`. All technical tags, micro-badges, and metadata timestamps must be at least `text-xs` (12px).
3. **No Skipped Heading Levels:** `h1` (Hero) → `h2` (Section Titles) → `h3` (Project / Experience Titles) → `h4` (Subsystems). Never skip from `h2` directly to `h4`.

---

## 4. Component Standards

### A. Procedural 3D Hardware Canvas (`SafeSightModel.tsx`)
- Modeled parametrically via Three.js (no heavy binary GLTF downloads).
- PBR lighting: ambient soft daylight + directional keylight + teal rim fill.
- Smooth mouse/touch orbital controls with inertial damping (`lerp: 0.07`).
- Includes responsive subsystem inspector tabs and camera reset controls.
- Dynamic client loading via `next/dynamic` (`ssr: false`) for static export.

### B. Architectural Comparison Panels
- Two-column divided layout contrasting:
  1. *Probabilistic Language Model Extraction* (Ollama, candidate parsing, untrusted draft boundary).
  2. *Deterministic Rule-Based Validation* (dosage threshold math, contraindication relational table, fixed schedule calculation).
- Replaces generic feature cards with engineering truth.

### C. Buttons & Interactive Targets
- Minimum touch target: **44px × 44px** on all interactive elements (buttons, inputs, theme toggles, links).
- Primary button: Solid teal `#1C6D60` with white text, 8px rounded corners (`rounded-md`), subtle active scale down (`active:scale-[0.98]`).
- Secondary button: Subtle background with hairline border, hover highlight.

### D. Open Architectural Sections Over Nested Card Clutter
- Avoid wrapping entire sections inside heavy border boxes with shadows.
- Use top hairline borders (`border-t border-border-subtle pt-8 pb-12`) with left-to-right grid flow.

---

## 5. Prohibited Anti-Patterns (Slop Prevention Checklist)

The following anti-patterns are strictly prohibited across all code and copy:

| Prohibited Anti-Pattern | Why It Is Banned | Approved Alternative |
| :--- | :--- | :--- |
| **Decorative Pulsing Dots (`animate-pulse`)** | Simulates fake liveness on static data; feels like a generic template. | Solid calm status dot (`w-2 h-2 rounded-full bg-accent-primary`). |
| **AI Buzzword Clichés** | "Passionate about cutting-edge tech", "transforming ideas into reality". | Factual engineering facts, latency figures, dataset metrics, tool names. |
| **Purple / Blue Radial Gradients** | Generic "AI SaaS" signature aesthetic. | Warm off-white canvas with intentional pine-teal accents. |
| **Nested Cards Inside Cards** | Creates visual claustrophobia and visual clutter. | Flat divided columns with hairline structural dividers. |
| **Arbitrary Percentage Skill Bars** | "Python: 95%, React: 88%" is unverifiable and juvenile. | Categorized skill matrices with genuine technology tags and project links. |
| **Text Below 12px (`text-[10px]`)** | Unreadable on mobile and fails accessibility audits. | `text-xs` (12px) with `font-mono`. |
| **Lines Over 80 Characters** | Causes cognitive eye tracking fatigue. | Explicit line capping with `max-w-[58ch]` or `max-w-prose`. |

---

## 6. Automated Quality Verification Gates

Every pull request, build, or agent modification must satisfy two deterministic automated quality gates:

1. **`impeccable detect`:**  
   Run: `& "C:\Users\Tariq\.gemini\config\skills\impeccable\scripts\impeccable.cmd" detect http://127.0.0.1:3000/`  
   **Passing Condition:** Exit code 0, 0 primary anti-patterns.
2. **`copy-lint.mjs`:**  
   Run: `node "C:\Users\Tariq\.gemini\config\skills\design-taste-frontend\scripts\copy-lint.mjs" out/index.html`  
   **Passing Condition:** 0 FAIL, 0 WARN.

---

## 7. Instructions for Coding Agents

When working on this repository:
1. **Always read `DESIGN.md` first** before creating or modifying UI components.
2. **Use existing CSS variables** declared in `globals.css` rather than arbitrary Tailwind hex values.
3. **Respect static export constraints:** Next.js is configured with `output: 'export'`. Never introduce server-only components or Node.js runtime handlers into client bundles.
4. **Preserve the editorial tone:** Keep copy concise, technical, and grounded in real software implementation.
