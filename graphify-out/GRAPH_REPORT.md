# Graph Report - portfolio.ronny  (2026-10-19)

## Corpus Check
- 61 files · ~331,365 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .css 2, .example 1, (none) 1)

## Summary
- 271 nodes · 487 edges · 33 communities (17 shown, 16 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `20af4990`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- [id]/case_study/page.jsx
- ProcessSection.jsx
- Ronny Das UI/UX Developer and Project Lead Portfolio
- dependencies
- MotionElement
- app/page.jsx
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
- Ronny Monogram Logo Mark
- Circular Portfolio Monogram Logo
- Q: Check whether the screenshot dependency vulnerabilities exist and plan fixes
- layout.jsx
- usePortfolio
- Q: ux/ui your review of my current portfolio
- Q: Use the ui-ux-pro-max skill to review the current frontend

## God Nodes (most connected - your core abstractions)
1. `usePortfolio()` - 34 edges
2. `MotionElement()` - 25 edges
3. `react` - 21 edges
4. `framer-motion` - 15 edges
5. `CaseStudyDiagram()` - 12 edges
6. `useAnimatedStyles()` - 12 edges
7. `Home()` - 10 edges
8. `MotionSurface()` - 9 edges
9. `HeroArtwork()` - 8 edges
10. `PortfolioDialogs()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Tailwind CSS` --conceptually_related_to--> `CSS3 Logo`  [INFERRED]
  README.md → assets/css.png
- `Home()` --calls--> `ProcessSection()`  [EXTRACTED]
  app/page.jsx → components/portfolio/ProcessSection.jsx
- `NesficCaseStudy()` --calls--> `CaseStudyDiagram()`  [EXTRACTED]
  app/projects/nesfic-2026/case_study/page.jsx → components/portfolio/CaseStudyDiagram.jsx
- `NesficCaseStudy()` --calls--> `ProjectBrowser()`  [EXTRACTED]
  app/projects/nesfic-2026/case_study/page.jsx → components/portfolio/ProjectBrowser.jsx
- `RootLayout()` --calls--> `Navbar()`  [EXTRACTED]
  app/layout.jsx → components/portfolio/Navbar.jsx

## Import Cycles
- None detected.

## Communities (33 total, 16 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.06
Nodes (30): devDependencies, chokidar, dotenv, eslint, eslint-plugin-react, globals, @types/node, @types/react (+22 more)

### Community 1 - "[id]/case_study/page.jsx"
Cohesion: 0.10
Nodes (11): CaseStudyPage(), projectImages, contactMethods, email, linkedinUrl, navItems, projects, skillGroups (+3 more)

### Community 2 - "ProcessSection.jsx"
Cohesion: 0.33
Nodes (8): ProcessSection(), useConnectorGeometry(), box(), update(), useProcessConnectors(), clamp(), statusLabels, useProcessSequence()

### Community 3 - "Ronny Das UI/UX Developer and Project Lead Portfolio"
Cohesion: 0.13
Nodes (15): CSS3 Logo, Next.js App Router, Depth-Aware Motion System, Framer Motion, GPU-Accelerated Animation, Lenis, Lucide React, Next.js (+7 more)

### Community 4 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, framer-motion, lenis, lucide-react, next, postcss, react, react-dom (+2 more)

### Community 5 - "MotionElement"
Cohesion: 0.15
Nodes (16): alt, contentType, size, decisions, metadata, MutualTransferCaseStudy(), screenshots, workflow (+8 more)

### Community 6 - "app/page.jsx"
Cohesion: 0.18
Nodes (15): Home(), metadata, AboutSection(), ContactSection(), Footer(), HeroSection(), ManifestoSection(), MotionSurface() (+7 more)

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

### Community 47 - "Q: Check whether the screenshot dependency vulnerabilities exist and plan fixes"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Check whether the screenshot dependency vulnerabilities exist and plan fixes, Source Nodes

### Community 48 - "layout.jsx"
Cohesion: 0.14
Nodes (14): metadata, RootLayout(), viewport, Navbar(), DialogTop(), PortfolioDialogs(), PortfolioProvider(), readPreference() (+6 more)

### Community 49 - "usePortfolio"
Cohesion: 0.15
Nodes (16): HeroArtwork(), heroStates, heroSupporting, interfaceState, LayoutElement(), ease, PortfolioContext, usePortfolio() (+8 more)

### Community 50 - "Q: ux/ui your review of my current portfolio"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: ux/ui your review of my current portfolio, Source Nodes

### Community 51 - "Q: Use the ui-ux-pro-max skill to review the current frontend"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Use the ui-ux-pro-max skill to review the current frontend, Source Nodes

## Knowledge Gaps
- **107 isolated node(s):** `metadata`, `viewport`, `alt`, `size`, `contentType` (+102 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 133 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Work-memory lessons

**Preferred sources** — corroborated by past sessions; start here.
- `case_study/page.jsx` (2× useful, score=0.79435369)
- `HeroSection.jsx` (2× useful, score=0.79435369) _(code changed — re-verify)_
- `Navbar.jsx` (2× useful, score=0.79435369)
- `ProjectsSection.jsx` (2× useful, score=0.79435369) _(code changed — re-verify)_

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `usePortfolio` to `package.json`, `[id]/case_study/page.jsx`, `ProcessSection.jsx`, `app/page.jsx`, `CaseStudyDiagram.jsx`, `layout.jsx`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._
- **Why does `next` connect `MotionElement` to `package.json`, `[id]/case_study/page.jsx`, `app/page.jsx`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Why does `framer-motion` connect `usePortfolio` to `package.json`, `[id]/case_study/page.jsx`, `ProcessSection.jsx`, `CaseStudyDiagram.jsx`, `layout.jsx`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **What connects `metadata`, `viewport`, `alt` to the rest of the system?**
  _107 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.062388591800356503 - nodes in this community are weakly interconnected._
- **Should `[id]/case_study/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1038961038961039 - nodes in this community are weakly interconnected._
- **Should `Ronny Das UI/UX Developer and Project Lead Portfolio` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._