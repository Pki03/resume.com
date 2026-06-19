# Graph Report - .  (2026-06-17)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 177 nodes · 224 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.76)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d5df0eac`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 15|Community 15]]

## God Nodes (most connected - your core abstractions)
1. `DesignSystemGenerator` - 11 edges
2. `_search_csv()` - 8 edges
3. `BM25` - 7 edges
4. `search()` - 7 edges
5. `generate_design_system()` - 7 edges
6. `persist_design_system()` - 5 edges
7. `_generate_intelligent_overrides()` - 5 edges
8. `scripts` - 5 edges
9. `blogPosts` - 5 edges
10. `format_page_override_md()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Search Script` --references--> `Master Design System`  [INFERRED]
  skills/ui-ux-pro-max/scripts/search.py → design-system/MASTER.md
- `Robots Exclusion Protocol` --semantically_similar_to--> `Favicon Asset`  [INFERRED] [semantically similar]
  public/robots.txt → public/favicon.svg
- `UI/UX Pro Max Skill` --calls--> `Search Script`  [EXTRACTED]
  .opencode/skills/ui-ux-pro-max/SKILL.md → skills/ui-ux-pro-max/scripts/search.py
- `Search Script` --references--> `UI Reasoning Rules`  [EXTRACTED]
  skills/ui-ux-pro-max/scripts/search.py → ui-reasoning.csv
- `_generate_intelligent_overrides()` --calls--> `search()`  [INFERRED]
  .opencode/skills/ui-ux-pro-max/scripts/design_system.py → .opencode/skills/ui-ux-pro-max/scripts/core.py

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.12
Nodes (13): moreExamples, relatedGuides, BlogPost, blogPosts, CoverLetterExample, coverLetterExamples, resumeExamples, keywords (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (3): schema, body, ../styles/global.css

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (15): BM25, detect_domain(), _load_csv(), Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query, Load CSV and return list of dicts, Core search function using BM25 (+7 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (14): templates, themeColors, Certification, Education, Experience, Language, PersonalInfo, Project (+6 more)

### Community 4 - "Community 4"
Cohesion: 0.17
Nodes (16): _detect_page_type(), format_ascii_box(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system(), _generate_intelligent_overrides(), persist_design_system() (+8 more)

### Community 5 - "Community 5"
Cohesion: 0.16
Nodes (9): DesignSystemGenerator, Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation., Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Execute searches across multiple domains., Find matching reasoning rule for a category. (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (15): dependencies, astro, @astrojs/sitemap, description, devDependencies, tailwindcss, @tailwindcss/vite, name (+7 more)

### Community 7 - "Community 7"
Cohesion: 0.18
Nodes (8): bulletLines, bulletStyles, detected, finalScore, hasColumns, presentOrder, sentenceLines, uniqueVerbs

### Community 8 - "Community 8"
Cohesion: 0.25
Nodes (6): featuresHtml, prosConsHtml, schema, Comparison, comparisons, ../../data/comparisons

### Community 9 - "Community 9"
Cohesion: 0.43
Nodes (5): generatedExamples, r(), slugHash(), manualEntries, ResumeExample

### Community 10 - "Community 10"
Cohesion: 0.40
Nodes (5): Design System Persistence Pattern, UI Reasoning Rules, Master Design System, Search Script, UI/UX Pro Max Skill

## Knowledge Gaps
- **51 isolated node(s):** `name`, `type`, `version`, `description`, `dev` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `search()` connect `Community 2` to `Community 4`, `Community 5`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `DesignSystemGenerator` connect `Community 5` to `Community 4`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `search()` (e.g. with `.generate()` and `._multi_domain_search()`) actually correct?**
  _`search()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `BM25 ranking algorithm for text search`, `Lowercase, split, remove punctuation, filter short words`, `Build BM25 index from documents` to the rest of the system?**
  _77 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.12318840579710146 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09881422924901186 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._