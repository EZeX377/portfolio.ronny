# Graph Report - portfolio.ronny  (2026-11-02)

## Corpus Check
- 61 files · ~331,493 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .css 2, .example 1, (none) 1)

## Summary
- 277 nodes · 498 edges · 34 communities (18 shown, 16 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1a6315e4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- [id]/case_study/page.jsx
- ProcessSection.jsx
- Ronny Das UI/UX Developer and Project Lead Portfolio
- react
- nesfic-2026/case_study/page.jsx
- usePortfolio
- Tailwind CSS Logo
- Graphify Knowledge Graph Workflow
- Ronny Das Circular RD Monogram
- EAP MIS Portal Project
- CaseStudyDiagram.jsx
- Adobe Photoshop Logo
- compilerOptions
- Q: next to implement?
- Cartesian Grid Background
- next.config.mjs
- ADHD-Friendly Actionable Responses
- Bootstrap Logo
- Figma Logo
- HTML5 Logo
- Portrait of a Man with Glasses
- Dark Browser Mockup Frame
- dependencies
- Ronny Monogram Logo Mark
- Circular Portfolio Monogram Logo
- Q: Check whether the screenshot dependency vulnerabilities exist and plan fixes
- PortfolioProvider.jsx
- useHeroInterface.js
- Q: ux/ui your review of my current portfolio
- Q: Use the ui-ux-pro-max skill to review the current frontend

## God Nodes (most connected - your core abstractions)
1. `usePortfolio()` - 34 edges
2. `MotionElement()` - 25 edges
3. `react` - 20 edges
4. `framer-motion` - 14 edges
5. `next` - 13 edges
6. `CaseStudyDiagram()` - 12 edges
7. `useAnimatedStyles()` - 12 edges
8. `Home()` - 10 edges
9. `MotionSurface()` - 9 edges
10. `HeroArtwork()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Tailwind CSS` --conceptually_related_to--> `CSS3 Logo`  [INFERRED]
  README.md → assets/css.png
- `Home()` --calls--> `ProcessSection()`  [EXTRACTED]
  app/page.jsx → components/portfolio/ProcessSection.jsx
- `MutualTransferCaseStudy()` --calls--> `MotionElement()`  [EXTRACTED]
  app/projects/mutual-transfer-portal/case_study/page.jsx → components/portfolio/MotionElement.jsx
- `NesficCaseStudy()` --calls--> `CaseStudyDiagram()`  [EXTRACTED]
  app/projects/nesfic-2026/case_study/page.jsx → components/portfolio/CaseStudyDiagram.jsx
- `NesficCaseStudy()` --calls--> `MotionElement()`  [EXTRACTED]
  app/projects/nesfic-2026/case_study/page.jsx → components/portfolio/MotionElement.jsx

## Import Cycles
- None detected.

## Communities (34 total, 16 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.06
Nodes (30): devDependencies, chokidar, dotenv, eslint, eslint-plugin-react, globals, @types/node, @types/react (+22 more)

### Community 1 - "[id]/case_study/page.jsx"
Cohesion: 0.12
Nodes (10): CaseStudyPage(), projectImages, contactMethods, email, linkedinUrl, navItems, projects, skillGroups (+2 more)

### Community 2 - "ProcessSection.jsx"
Cohesion: 0.30
Nodes (8): ProcessSection(), useConnectorGeometry(), box(), update(), useProcessConnectors(), clamp(), statusLabels, useProcessSequence()

### Community 3 - "Ronny Das UI/UX Developer and Project Lead Portfolio"
Cohesion: 0.13
Nodes (15): CSS3 Logo, Next.js App Router, Depth-Aware Motion System, Framer Motion, GPU-Accelerated Animation, Lenis, Lucide React, Next.js (+7 more)

### Community 4 - "react"
Cohesion: 0.22
Nodes (7): DialogTop(), PortfolioDialogs(), ProjectBrowser(), closeOnBackdrop(), useNativeDialog(), lucide-react, react

### Community 5 - "nesfic-2026/case_study/page.jsx"
Cohesion: 0.13
Nodes (15): alt, contentType, size, decisions, metadata, MutualTransferCaseStudy(), screenshots, workflow (+7 more)

### Community 6 - "usePortfolio"
Cohesion: 0.13
Nodes (27): Home(), metadata, AboutSection(), ContactSection(), Footer(), HeroArtwork(), HeroSection(), LayoutElement() (+19 more)

### Community 8 - "Graphify Knowledge Graph Workflow"
Cohesion: 0.33
Nodes (6): graphify explain, Project Knowledge Graph, graphify path, graphify query, graphify update, Graphify Knowledge Graph Workflow

### Community 10 - "EAP MIS Portal Project"
Cohesion: 0.67
Nodes (4): EAP MIS Portal Project, Ronny Das Portfolio Page, EAP MIS Portal Project, Ronny Das Portfolio Page

### Community 11 - "CaseStudyDiagram.jsx"
Cohesion: 0.24
Nodes (16): CaseStudyDiagram(), EditedField(), EntryIllustration(), LaunchSteps(), OngoingSteps(), Piece(), PublicState(), PublishingBranch() (+8 more)

### Community 13 - "compilerOptions"
Cohesion: 0.50
Nodes (3): compilerOptions, baseUrl, paths

### Community 14 - "Q: next to implement?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: next to implement?, Source Nodes

### Community 23 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, framer-motion, lenis, lucide-react, next, postcss, react, react-dom (+2 more)

### Community 47 - "Q: Check whether the screenshot dependency vulnerabilities exist and plan fixes"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Check whether the screenshot dependency vulnerabilities exist and plan fixes, Source Nodes

### Community 48 - "PortfolioProvider.jsx"
Cohesion: 0.14
Nodes (14): bodyFont, displayFont, metadata, RootLayout(), viewport, DeferredPortfolioDialogs(), PortfolioDialogs, Navbar() (+6 more)

### Community 49 - "useHeroInterface.js"
Cohesion: 0.60
Nodes (3): heroStates, heroSupporting, interfaceState

### Community 50 - "Q: ux/ui your review of my current portfolio"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: ux/ui your review of my current portfolio, Source Nodes

### Community 51 - "Q: Use the ui-ux-pro-max skill to review the current frontend"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Use the ui-ux-pro-max skill to review the current frontend, Source Nodes

## Knowledge Gaps
- **110 isolated node(s):** `bodyFont`, `displayFont`, `metadata`, `viewport`, `alt` (+105 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 136 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Work-memory lessons

**Preferred sources** — corroborated by past sessions; start here.
- `case_study/page.jsx` (2× useful, score=0.79435369)
- `HeroSection.jsx` (2× useful, score=0.79435369) _(code changed — re-verify)_
- `Navbar.jsx` (2× useful, score=0.79435369)
- `ProjectsSection.jsx` (2× useful, score=0.79435369) _(code changed — re-verify)_

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `nesfic-2026/case_study/page.jsx` to `package.json`, `[id]/case_study/page.jsx`, `react`, `usePortfolio`, `PortfolioProvider.jsx`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `package.json`, `[id]/case_study/page.jsx`, `ProcessSection.jsx`, `nesfic-2026/case_study/page.jsx`, `usePortfolio`, `CaseStudyDiagram.jsx`, `PortfolioProvider.jsx`, `useHeroInterface.js`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Why does `usePortfolio()` connect `usePortfolio` to `ProcessSection.jsx`, `react`, `nesfic-2026/case_study/page.jsx`, `CaseStudyDiagram.jsx`, `PortfolioProvider.jsx`, `useHeroInterface.js`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **What connects `bodyFont`, `displayFont`, `metadata` to the rest of the system?**
  _110 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.062388591800356503 - nodes in this community are weakly interconnected._
- **Should `[id]/case_study/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12280701754385964 - nodes in this community are weakly interconnected._
- **Should `Ronny Das UI/UX Developer and Project Lead Portfolio` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._