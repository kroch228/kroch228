# GitHub Profile README — Design Directions

Three distinct concepts tailored to Alexander's bio: Java-primary dev, AI-augmented workflow, Minecraft plugin/bot builder, kwork freelancer.

---

## Direction A: "Minecraft Server MOTD"

**Pitch:** Your profile looks like a Minecraft server's Message of the Day — monospace terminal aesthetic, MiniMessage-style coloured text (rendered as an SVG screenshot), contribution snake slithering across the bottom, and a "player stats" panel showing your GitHub numbers. Visitors feel like they just joined your server.

**Layout mock:**
```
┌─────────────────────────────────────────────────────────┐
│  ╔══════════════════════════════════════════════════╗    │
│  ║  [MOTD-style SVG: gradient text]                ║    │
│  ║  > Alexander's Dev Server                       ║    │
│  ║  > Java · AI · Plugins · Bots                   ║    │
│  ╚══════════════════════════════════════════════════╝    │
│                                                         │
│  ## /about                                              │
│  ```                                                    │
│  > Developer embedding AI into the workflow             │
│  > 2-3x faster delivery · questions before code         │
│  > Stack: Java, Python, JS/TS, PHP, SQL                 │
│  ```                                                    │
│                                                         │
│  ## /stats                                              │
│  [ GitHub Stats Card (dracula theme) ]                  │
│  [ Streak Stats Card ]                                  │
│  [ Top Languages Card ]                                 │
│                                                         │
│  ## /services                                           │
│  ⛏ Minecraft Plugins (Paper/Spigot/Bukkit)             │
│  🤖 Telegram / Discord / VK Bots                       │
│  🔗 REST APIs & Automation                             │
│  🧠 LLM Integrations (OpenAI / Claude)                 │
│                                                         │
│  ## /trophies                                           │
│  [ github-profile-trophy row ]                          │
│                                                         │
│  ─── [ Snake animation SVG ] ───                        │
│                                                         │
│  [ Visitor counter badge ]                              │
└─────────────────────────────────────────────────────────┘
```

**Features/Actions:**
- Custom MOTD-style SVG header (hand-crafted or capsule-render `type=rect` with monospace font)
- github-readme-stats (Dracula theme) — stats + top-langs + streak
- github-profile-trophy (single row, `no-frame`, Dracula)
- Platane/snk snake animation (daily cron Action)
- komarev visitor counter
- Monospace `code blocks` for bio sections

**Effort:** 2-3 hours (snake Action + custom SVG header are the main work)

**Why it fits:** Alexander builds Minecraft plugins — this theme instantly signals that identity. The terminal/MOTD aesthetic is distinctive and rarely seen, making it memorable for potential clients on kwork.

---

## Direction B: "AI-Augmented Workshop"

**Pitch:** A living dashboard that updates itself nightly via GitHub Actions. A custom Action pulls your latest commits, generates a one-liner summary via an LLM, and renders it into a dynamic SVG "latest build" panel. Combined with lowlighter/metrics panels and a 3D contribution graph, the profile itself demonstrates your AI-integration skills.

**Layout mock:**
```
┌─────────────────────────────────────────────────────────┐
│  [ capsule-render: wave, gradient purple→blue ]         │
│  [ typing-svg: "Building with AI · Shipping faster" ]   │
│                                                         │
│  ## 🧠 Latest from the workshop                        │
│  ┌─────────────────────────────────────────────┐        │
│  │ 🤖 AI-generated summary of last 7 days:     │        │
│  │ "Shipped auth refactor for TG bot,           │        │
│  │  optimized Paper plugin event handling"      │        │
│  │                          — updated nightly   │        │
│  └─────────────────────────────────────────────┘        │
│                                                         │
│  ## 📊 Metrics                                         │
│  [ lowlighter/metrics: languages, achievements,         │
│    isometric calendar, habits ]                         │
│                                                         │
│  ## 🏗️ 3D Contributions                                │
│  [ github-profile-3d-contrib: night-rainbow ]           │
│                                                         │
│  ## 🛠️ Stack & Services                                │
│  [ shields.io badge grid: Java, Python, JS/TS,         │
│    Paper API, Telegram Bot API, OpenAI, Claude ]        │
│                                                         │
│  ## 📬 Hire me                                         │
│  [ kwork link ] [ Telegram link ]                       │
│                                                         │
│  [ capsule-render: footer wave ]                        │
└─────────────────────────────────────────────────────────┘
```

**Features/Actions:**
- capsule-render header + footer (wave, gradient)
- readme-typing-svg tagline
- **Custom GitHub Action** (Python script): fetches last 7 days of commits via GitHub API, sends to Claude/OpenAI for a 1-sentence summary, writes into README between markers
- lowlighter/metrics (languages + achievements + isometric calendar)
- yoshi389111/github-profile-3d-contrib (night-rainbow variant)
- shields.io badge grid for tech stack
- Visitor counter

**Effort:** 4-5 hours (custom LLM Action is the main investment; metrics config takes time)

**Why it fits:** The profile itself is a portfolio piece — it demonstrates AI integration in a real workflow. Clients see that Alexander doesn't just talk about AI-augmented development, his GitHub profile literally runs on it.

---

## Direction C: "Bilingual Dev Card"

**Pitch:** A clean, professional two-section profile (EN on top, RU in a collapsible `<details>` block) with a polished capsule-render header, typing-svg tagline, stats cards in Tokyo Night theme, and a Holopin/trophy row. Optimized for kwork clients (RU) and international visibility (EN). No gimmicks — just a well-designed card that loads fast and reads well.

**Layout mock:**
```
┌─────────────────────────────────────────────────────────┐
│  [ capsule-render: type=waving, color=0:1a1b27,100:     │
│    70a5fd, text="Alexander", desc="Developer ×  AI" ]   │
│                                                         │
│  [ typing-svg: "Java · Plugins · Bots · AI · REST" ]   │
│                                                         │
│  ## About                                               │
│  Developer with experience embedding AI into the        │
│  workflow. I build Minecraft plugins, Telegram/Discord   │
│  bots, REST APIs, and LLM integrations.                 │
│  2-3x faster delivery. Questions before code.           │
│                                                         │
│  ## Tech Stack                                          │
│  [ Two-column HTML table:                               │
│    Left: Languages (Java, Python, JS/TS, PHP, SQL)      │
│    Right: Domains (Paper API, TG Bot, Discord,          │
│           OpenAI, Claude, Automation) ]                  │
│                                                         │
│  ## GitHub Stats                                        │
│  [ Stats card | Streak card ]  (Tokyo Night theme)      │
│  [ Top Languages card ]                                 │
│                                                         │
│  ## Trophies                                            │
│  [ github-profile-trophy, tokyo-night, no-frame ]       │
│                                                         │
│  ## Contact                                             │
│  [ kwork badge ] [ Telegram badge ] [ Email badge ]     │
│                                                         │
│  <details><summary>🇷🇺 На русском</summary>            │
│    (Full RU translation of the above)                   │
│  </details>                                             │
│                                                         │
│  [ Visitor counter ]                                    │
│  [ capsule-render: footer waving ]                      │
└─────────────────────────────────────────────────────────┘
```

**Features/Actions:**
- capsule-render header + footer (waving, custom gradient matching Tokyo Night)
- readme-typing-svg (cycling stack keywords)
- github-readme-stats: stats + streak + top-langs (all Tokyo Night theme)
- github-profile-trophy (tokyo-night, `no-frame`, `no-bg`)
- shields.io badges for contact/social
- `<details>` block for RU translation
- komarev visitor counter
- No GitHub Actions needed (fully static except hosted card services)

**Effort:** 1.5-2 hours (no Actions, just markdown + hosted services)

**Why it fits:** Professional, fast to ship, bilingual for kwork audience. The Tokyo Night consistency makes it look designed rather than assembled. The `<details>` RU block shows attention to audience without cluttering the page. Lowest maintenance of the three options.

---

## Comparison

| Aspect | A: Minecraft MOTD | B: AI Workshop | C: Bilingual Card |
|--------|:-:|:-:|:-:|
| Wow-factor | ★★★★ | ★★★★★ | ★★★ |
| Effort | 2-3h | 4-5h | 1.5-2h |
| Maintenance | Low (snake cron) | Medium (LLM Action) | None |
| Signals identity | Plugin builder | AI-augmented dev | Professional freelancer |
| Client appeal (kwork) | Niche (MC community) | Impressive but complex | Broad, bilingual |
| Uniqueness | High (rare aesthetic) | Very high (LLM-powered) | Medium (polished standard) |

---
---

## Round 2 — Premium Directions

> Goal: beat A/B/C on visual impact and cohesion. Not more badges — more *design*.

---

### Direction D: "Terminal Session"

**Formula:** Your profile IS a terminal window — lowlighter/metrics `terminal` template renders the entire page as a single fake shell session with typed commands and live output.

**Moodboard:**
1. Full-page monochrome terminal SVG (green-on-black or amber-on-black)
2. Commands like `$ whoami`, `$ cat skills.txt`, `$ git log --oneline` with real data as output
3. Blinking cursor animation (CSS-in-SVG via SMIL `<animate>`)
4. Isometric contribution calendar as `$ contrib --3d` output
5. Snake animation below the terminal as "screensaver mode"

**Layout mock:**
```
┌─ alexander@dev ~ ──────────────────────────────────────────────┐
│                                                                 │
│  $ whoami                                                       │
│  Alexander — developer embedding AI into the workflow           │
│  Java · Python · TS · PHP | plugins, bots, APIs, LLM           │
│                                                                 │
│  $ mass-stack --list                                            │
│  ██████████████░░░░ Java        42%                             │
│  ████████░░░░░░░░░░ Python      28%                             │
│  █████░░░░░░░░░░░░░ TypeScript  18%                             │
│  ███░░░░░░░░░░░░░░░ PHP/SQL     12%                             │
│                                                                 │
│  $ services                                                     │
│  ⛏  minecraft-plugins   Paper/Spigot/Bukkit                     │
│  🤖  bots                Telegram, Discord, VK                   │
│  🌐  web                 REST APIs, microservices                │
│  🧠  ai                  OpenAI/Claude integrations              │
│                                                                 │
│  $ git log --oneline -5                                         │
│  [live: last 5 commits from GitHub API]                         │
│                                                                 │
│  $ uptime                                                       │
│  [streak stats] days active, [total commits] contributions      │
│                                                                 │
│  $ contrib --3d                                                 │
│  [isometric contribution calendar SVG]                          │
│                                                                 │
│  █ cursor blinks                                                │
└─────────────────────────────────────────────────────────────────┘

─── [ Snake screensaver ] ───
```

**How it beats A/B/C:**
- A was "MOTD-like" but still used standard cards/badges. D is a *single cohesive SVG* — the entire profile is one rendered terminal, not markdown with cards bolted on.
- Zero badge soup. Zero generic stats cards. The data is there but presented as command output.
- lowlighter/metrics `terminal` template does the heavy lifting; custom config adds the personality.

**Effort:** 3-4h (metrics config + snake + 3D contrib action)

---

### Direction E: "Generative Poster"

**Formula:** A single hand-crafted SVG hero (generated nightly by a custom Action) that combines contribution data + bio into a typographic poster — like a museum exhibition card or Swiss-design print. Below it: nothing but a 3-line bio and contact links.

**Moodboard:**
1. Large SVG poster (600×800): bold Helvetica/Inter typography, geometric grid, contribution heatmap as abstract color field
2. Name set in 72pt, role in 18pt, stack keywords scattered at angles like a Bauhaus composition
3. Subtle animation: one element fades or pulses (SMIL `<animate>` — works on GitHub)
4. Dark/light variants via `#gh-dark-mode-only` swap
5. Below the poster: 2 lines of text + 3 shield badges (Telegram, Email, kwork). That's it.

**Layout mock:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │                                                 │    │
│  │   A L E X A N D E R                             │    │
│  │                                                 │    │
│  │        developer × AI                           │    │
│  │                                                 │    │
│  │   ┌──────────────────────────────┐              │    │
│  │   │ ░░▒▒▓▓██ contribution heat  │              │    │
│  │   │ ░░▒▒▓▓██ as abstract field  │              │    │
│  │   └──────────────────────────────┘              │    │
│  │                                                 │    │
│  │   Java  Python  TypeScript                      │    │
│  │     plugins · bots · APIs · LLM                 │    │
│  │                                                 │    │
│  │   ▸ 847 contributions this year                 │    │
│  │   ▸ 12 repos · 3 languages                     │    │
│  │                                                 │    │
│  │              — updated nightly —                │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
│  Turnkey projects · 2-3x faster via AI                  │
│  Проекты под ключ · в 2-3 раза быстрее через AI        │
│                                                         │
│  [ Telegram ] [ Email ] [ kwork ]                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**How it beats A/B/C:**
- Radical restraint: one visual, three lines, three badges. Looks like a gallery piece, not a developer resume.
- The poster itself is data-driven (contribution count, languages, streak) but presented as *typography and color*, not as a dashboard widget.
- Dark/light swap makes it feel native to any viewer's GitHub theme.
- Custom Action (Python/Node script generating SVG) = unique, nobody else has this exact visual.

**Effort:** 5-6h (custom SVG generator Action is the main investment; but result is one-of-a-kind)

---

### Direction F: "Living Dashboard" — lowlighter/metrics full-page

**Formula:** lowlighter/metrics with 6-8 plugins rendered as a cohesive multi-panel infographic. No markdown text at all — the entire README is embedded SVG panels arranged in a grid. The profile looks like a Grafana dashboard for a human.

**Moodboard:**
1. Header panel: intro + avatar + bio (metrics `introduction` plugin)
2. Isometric calendar (full year, `isocalendar` plugin)
3. Language breakdown with indepth analysis (`languages` plugin, indepth mode)
4. Achievements row (`achievements` plugin, compact)
5. Coding habits chart (`habits` plugin — hours/days heatmap)
6. Recent activity feed (`activity` plugin)
7. Skyline 3D city (`skyline` plugin) — the showstopper
8. All panels share one color scheme (custom CSS injection via metrics config)

**Layout mock:**
```
┌─────────────────────────────────────────────────────────┐
│  ┌─────────────────────┐  ┌──────────────────────────┐  │
│  │  [Avatar]           │  │  Alexander               │  │
│  │  metrics:intro      │  │  Developer × AI          │  │
│  │                     │  │  Java · Python · TS      │  │
│  └─────────────────────┘  └──────────────────────────┘  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │  ░░▒▒▓▓██░░▒▒▓▓██░░▒▒▓▓██░░▒▒▓▓██░░▒▒▓▓██     │   │
│  │  Isometric contribution calendar (full year)     │   │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
│  ┌────────────────────┐  ┌───────────────────────────┐  │
│  │  Languages          │  │  Achievements             │  │
│  │  ██ Java 42%        │  │  🏆🏆🏆🏆🏆              │  │
│  │  ██ Python 28%      │  │  Commits · Stars · PRs    │  │
│  │  ██ TS 18%          │  │                           │  │
│  └────────────────────┘  └───────────────────────────┘  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │  ╱╲╱╲  3D Skyline City  ╱╲╱╲╱╲╱╲               │   │
│  │  ████████████████████████████████████            │   │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
│  ┌────────────────────┐  ┌───────────────────────────┐  │
│  │  Habits heatmap     │  │  Recent activity          │  │
│  │  Mon ░▒▓█           │  │  • pushed to repo X       │  │
│  │  Tue ░▒▓            │  │  • opened PR on Y         │  │
│  │  Wed ░▒▓█           │  │  • created repo Z         │  │
│  └────────────────────┘  └───────────────────────────┘  │
│                                                         │
│  [ Telegram ] [ kwork ] [ views: N ]                    │
└─────────────────────────────────────────────────────────┘
```

**How it beats A/B/C:**
- Zero markdown, zero manual content — the entire page is auto-generated infographic SVGs.
- Skyline 3D city is the single most visually impressive element available in the GitHub README ecosystem.
- Updates itself daily via Action — always fresh, zero maintenance after setup.
- Looks like nothing else on GitHub because most people use 1-2 metrics plugins; using 6-8 in a designed grid is rare.

**Effort:** 4-5h (metrics config is verbose but well-documented; no custom code needed)

---

## >>> RECOMMENDED: Direction E — "Generative Poster"

**Why:**
1. It's genuinely unique — a custom SVG generator means nobody else has this exact profile. D and F use existing tools (impressive but reproducible); E is one-of-a-kind.
2. Radical restraint signals confidence and taste — the opposite of badge-soup profiles. It says "I'm a craftsman" without saying it.
3. The poster is data-driven (live contribution stats) so it has a pulse, but presents data as *design* rather than as a dashboard. This hits the "красивее чем всё что было" bar because it's art, not assembly.

Runner-up: Direction D ("Terminal Session") if the user prefers the hacker/CLI identity over the designer/poster identity.

---
---

## Round 3 — Synthesized Ideal

### Codename: "Forge"

**One-line formula:** A custom generative SVG hero (Swiss-poster typography + live contribution heatmap) sits above a terminal-aesthetic bio block, flanked by dark/light-aware stats in a single disciplined palette, with a snake animation as the closing kinetic element — all auto-refreshed nightly by one GitHub Action.

---

### Included Tricks (8 elements)

| # | Trick (from TRICKS.md) | Role in composition | Why included |
|---|---|---|---|
| 1 | **#29 Generative SVG via Action** | Hero visual — top of page, full-width | One-of-a-kind; nobody else has this exact poster. Makes the profile an art piece, not a template. |
| 2 | **#28 Swiss-design typographic poster** | Visual language of the hero SVG | Inter font, geometric grid, accent bar with SMIL pulse. Signals taste and restraint. |
| 3 | **#35 SMIL `<animate>` pulse** | Subtle motion in hero SVG | The only animation in the hero — a pulsing accent bar. Draws the eye without being noisy. |
| 4 | **#7 Dark/light mode asset swap** | Hero has two variants (dark bg / light bg) | Profile looks native in any GitHub theme. Craft detail most skip. |
| 5 | **#27 Monospace/terminal aesthetic** | Bio section below hero | Code-block bio with `>` prefixed lines. Signals "I live in the terminal" — fits Java/plugin builder identity. |
| 6 | **#26 Palette discipline** | All stats/badges share one accent color | One blue accent (#2563eb) across hero, stats card, streak, badges. Creates cohesion from disparate services. |
| 7 | **#8 Snake eats contributions** | Closing kinetic element | The most-shared single visual in the ecosystem. Provides motion at the bottom, balancing the static poster at top. Dark/light variants via `<picture>`. |
| 8 | **#12 GitHub stats card (themed)** | Single compact stats row | One stats card + top-langs side-by-side. Minimal — just enough data to show activity. Themed to match palette. |

### Why these 8 work together (cohesion argument)

1. **Visual hierarchy is clear:** Hero poster (large, typographic, unique) → terminal bio (medium, text-forward) → stats row (small, data) → snake (wide, kinetic). Eye flows top-to-bottom with decreasing density.
2. **Motion is rationed:** Only two animated elements (SMIL pulse in hero, snake at bottom). Everything else is static. This makes the motion meaningful, not decorative noise.
3. **Palette is locked:** One accent color (#2563eb blue) appears in hero bar, stats card icons, badge backgrounds, and snake highlight. Dark backgrounds (#0d1117 GitHub dark / #fafafa light) for hero variants. No color chaos.
4. **Identity is layered:** The poster says "designer who codes." The terminal bio says "coder who ships." The snake says "active contributor." The stats confirm it with numbers. Each element adds a facet without repeating.
5. **Maintenance is minimal:** One Action generates hero SVG + snake SVG nightly. Stats/streak are hosted services (zero maintenance). Bio is static text (update when stack changes). Total moving parts: 1 workflow file.
6. **Nothing is generic:** The hero is custom-generated (unique). The terminal bio is hand-written (personal). The snake is common but earned its place as the best kinetic closer available. Stats cards are common but disciplined theming makes them feel intentional.

---

### Layout Mock

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  [HERO SVG — dark variant / light variant via <picture>]  │  │
│  │                                                           │  │
│  │   A L E X A N D E R                                       │  │
│  │   developer × AI                                          │  │
│  │   ━━━━━━━━ (pulsing accent bar)                           │  │
│  │                                                           │  │
│  │   Embedding AI into the dev workflow.                     │  │
│  │   Turnkey delivery — plugins, bots, APIs, LLM.            │  │
│  │   Questions first, then code. 2-3× faster.               │  │
│  │                                                           │  │
│  │   142 contributions · 4 repos · Python, Rust             │  │
│  │   Java  Python  TypeScript  PHP  SQL                      │  │
│  │                                                           │  │
│  │                    — updated nightly —                     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ```                                                            │
│  > Stack: Java · Python · TS · PHP · SQL                        │
│  > Builds: Minecraft plugins · TG/Discord bots · REST APIs      │
│  > AI: OpenAI / Claude integrations at every stage              │
│  > Mode: questions → code · no scope creep · 2-3× via AI       │
│  ```                                                            │
│                                                                 │
│  ┌──────────────────────┐  ┌─────────────────────────────────┐  │
│  │  GitHub Stats Card   │  │  Top Languages (compact)        │  │
│  │  (themed #2563eb)    │  │  (themed #2563eb)               │  │
│  └──────────────────────┘  └─────────────────────────────────┘  │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  [Snake animation — dark/light via <picture>]             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ```                                                            │
│  > Open to turnkey gigs — plugins, bots, APIs, AI              │
│  > Открыт к проектам под ключ                                  │
│  ```                                                            │
│                                                                 │
│  [ Telegram badge ]  [ Kwork badge ]  [ Email badge ]           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Technical Dependencies

| Component | Implementation | Secrets needed |
|---|---|---|
| Hero SVG (dark + light) | Node.js script in `generator/`, fetches GitHub API + GraphQL | `GITHUB_TOKEN` (default) |
| Snake SVG (dark + light) | Platane/snk@v3 Action | `GITHUB_TOKEN` (default) |
| Stats card + top-langs | anuraghazra/github-readme-stats (hosted) | None |
| Badges (Telegram, Kwork, Email) | shields.io (hosted) | None |
| Workflow | Single `.github/workflows/profile.yml` with 2 jobs: generate-poster + generate-snake | — |

---

### Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Google Fonts `@import` in SVG may not render on GitHub | Hero text falls back to system sans-serif | Use `font-family: Inter, -apple-system, Helvetica, Arial, sans-serif` — graceful degradation |
| SMIL `<animate>` support | Works on github.com (tested). Does NOT animate in GitHub mobile app — static fallback is fine | Accent bar is visible even without animation |
| Snake SVG broken until first Action run | Broken image for ~2 min after initial push | Trigger workflow_dispatch immediately after push |
| GraphQL contributions query needs token | Returns 0 without auth | Default `GITHUB_TOKEN` in Actions has read access to own contributions |
| Mobile rendering of wide SVG | Hero may be small on phones | Set `width="100%"` + `viewBox` — SVG scales responsively |
| Dark/light `<picture>` element | Requires viewer's browser to support `prefers-color-scheme` media query | Fallback `<img>` shows dark variant (majority of GitHub users use dark mode) |

---

### >>> This is the FINAL synthesized direction. Not A, B, C, D, E, or F — it's "Forge": the best atomic tricks assembled into one cohesive profile.

---

## Round 3 — FINAL: Shipped Composite

**Codename:** Forge
**Shipped:** 2026-05-20
**Commit:** c2411af "final composite profile readme"

**Formula:** Custom generative SVG poster (Swiss typography, dark/light, SMIL pulse) → terminal bio block → palette-disciplined stats row → snake animation → bilingual CTA + 3 badges.

**Included tricks (8):**
1. Generative SVG via Action (#29) — `generator/index.js`
2. Swiss-design typographic poster (#28) — Inter font, grid lines, accent bar
3. SMIL animate pulse (#35) — accent bar opacity animation
4. Dark/light mode swap (#7) — `<picture>` element with `prefers-color-scheme`
5. Monospace/terminal bio (#27) — code block with `>` prefixes
6. Palette discipline (#26) — #2563eb across hero, stats, badges
7. Snake eats contributions (#8) — Platane/snk dark/light variants
8. GitHub stats card themed (#12) — stats + top-langs, 0d1117 bg, 2563eb accent

**Cohesion:** Visual hierarchy top→bottom (poster→bio→stats→snake), rationed motion (2 elements only), locked single-accent palette, layered identity (designer + coder + contributor + freelancer).

**Workflow:** Single `.github/workflows/profile.yml` — 2 jobs (hero + snake), daily cron 03:00 UTC + workflow_dispatch.

---

## Round 4 — Own Vision: "Foundry"

### Metaphor

Alexander's profile is a **foundry** — a dark workshop where raw commits are smelted into shipped products. Molten amber light (#f59e0b) glows against dark steel (#0f1419). The hero SVG is an anvil-shaped data panel where contribution stats glow like heated metal. Everything signals: "I take raw ideas and forge them into working software."

### Tone of Voice

Industrial-warm. Not cold-corporate, not playful-kawaii. The voice of a craftsman who works with fire — confident, direct, slightly poetic. Monospace text reads like forge logs. The amber accent is the only color — everything else is steel-grey or near-black.

### Palette

| Token | Hex | Role |
|-------|-----|------|
| amber (accent) | #f59e0b | All highlights, bars, links, badge bg |
| ember (glow) | #fbbf24 | SMIL animation glow state |
| steel-dark (bg) | #0f1419 | Hero bg (dark mode) |
| steel-light (bg) | #f8f9fa | Hero bg (light mode) |
| text-primary-dark | #e6edf3 | Main text on dark |
| text-primary-light | #1c1917 | Main text on light |
| text-muted-dark | #6b7280 | Secondary text on dark |
| text-muted-light | #6b7280 | Secondary text on light |
| grid-dark | #1e2530 | Geometric lines on dark |
| grid-light | #e5e7eb | Geometric lines on light |

### Tricks (7 elements)

| # | Trick | Source | Role in Foundry |
|---|-------|--------|-----------------|
| 1 | Generative SVG via Action (#29) | TRICKS.md:43, articles-x.md:§9 | Hero — anvil-shaped data panel with live stats, generated nightly |
| 2 | SMIL animate glow (#35) | TRICKS.md:49 | Amber accent bar pulses like cooling metal |
| 3 | Dark/light mode swap (#7) | TRICKS.md:21, youtube.md:4 | Two hero variants — dark forge / light blueprint |
| 4 | Monospace/terminal aesthetic (#27) | TRICKS.md:41 | Bio as "forge log" — monospace with `▸` prefixes |
| 5 | Palette discipline (#26) | TRICKS.md:39 | Single amber accent across all elements |
| 6 | Snake eats contributions (#8) | TRICKS.md:22, youtube.md:3 | Closing kinetic element — amber-tinted via custom palette |
| 7 | GitHub stats card themed (#12) | TRICKS.md:26, youtube.md:7 | Stats row — transparent bg, amber accent, no border |

### What changed from Forge

| Forge element | Foundry decision | Why |
|---|---|---|
| Swiss-poster (#2563eb blue) | → Industrial amber (#f59e0b) | Blue is safe/corporate. Amber is distinctive — signals craft, warmth, fire. Fewer profiles use warm palettes. |
| Inter font, Bauhaus grid | → Monospace (JetBrains Mono feel), industrial grid | Reinforces "workshop" metaphor. More aligned with terminal-native developer identity. |
| "DEVELOPER × AI" subtitle | → "forging software with AI" | Active verb, not passive label. Matches the foundry metaphor. |
| Contribution count as small text | → "Heat bars" — visual bars showing language distribution | Data as visual element, not just numbers. Bars look like glowing ingots. |
| Static description lines | → Shorter, punchier — 2 lines max | Forge doesn't explain. It shows. |

### Why it fits Alexander

1. **Java + Minecraft plugins** — Minecraft itself has a crafting/smelting system. The foundry metaphor resonates with his primary audience.
2. **AI-in-the-loop** — "forging with AI" positions AI as a tool in the workshop, not the product itself.
3. **Kwork freelancer** — amber/gold signals premium craft. Dark background = professional, not playful.
4. **"Questions first, code second"** — the forge log bio format naturally reads as a process: input → output.

### Layout Mock

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  [HERO SVG — dark steel / light blueprint via <picture>]  │  │
│  │                                                           │  │
│  │   ▌ A L E X A N D E R                                    │  │
│  │   ▌ forging software with AI                             │  │
│  │                                                           │  │
│  │   ━━━━━━━━ (amber bar, pulsing glow)                     │  │
│  │                                                           │  │
│  │   Turnkey delivery: plugins · bots · APIs · LLM          │  │
│  │   Questions first. Code second. 2-3× faster.             │  │
│  │                                                           │  │
│  │   ████░░ Java    ███░░░ Python   ██░░░░ TypeScript       │  │
│  │                                                           │  │
│  │   ▸ 142 contributions  ▸ 12 repos  ▸ 3 stars            │  │
│  │                                                           │  │
│  │                    — updated nightly —                    │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ```                                                            │
│  ▸ stack    Java · Python · TypeScript · PHP · SQL              │
│  ▸ builds   Minecraft plugins · TG/Discord bots · REST APIs    │
│  ▸ ai       OpenAI / Claude — embeddings, agents, tool-use     │
│  ▸ mode     questions → architecture → code → ship             │
│  ```                                                            │
│                                                                 │
│  ┌──────────────────────┐  ┌─────────────────────────────────┐  │
│  │  GitHub Stats Card   │  │  Top Languages (compact)        │  │
│  │  (amber on dark)     │  │  (amber on dark)               │  │
│  └──────────────────────┘  └─────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  [Snake animation — amber palette, dark/light]            │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ```                                                            │
│  ▸ open to turnkey gigs — plugins, bots, APIs, AI              │
│  ▸ открыт к проектам под ключ                                  │
│  ```                                                            │
│                                                                 │
│  [ Telegram badge ]  [ Kwork badge ]  [ Email badge ]           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## ~~Round 4 — Max-Beauty Pass~~ (superseded by "Foundry" above)

> Goal: evaluate 10+ candidates from the R3 research corpus, accept 0–5 that strictly reinforce the Forge aesthetic. Cohesion rule: every new trick MUST satisfy ≥1 of (a) reinforces blue-Swiss #2563eb aesthetic, (b) adds genuine "liveness" via auto-updates, (c) demonstrates Alexander's AI/automation skill.

### Candidates Evaluated

| # | Candidate | Source | Cohesion Verdict | Accept/Reject | Reason |
|---|-----------|--------|-----------------|:---:|--------|
| 1 | Streak Stats (#13) | TRICKS.md:27, youtube.md:7 | (b) liveness — shows current streak | **REJECT** | Adds a 3rd card to the stats row, breaking the balanced 2-column layout. Trophy-style gold/fire icons clash with monochrome Swiss restraint. Visual noise outweighs data value. |
| 2 | Activity Graph (#15) | TRICKS.md:29, youtube.md:10 | (b) liveness | **REJECT** | Area-fill line chart is visually loud and dashboard-like — antithetical to Swiss-poster minimalism. Competes with snake for "contribution visualization" role already filled. |
| 3 | Typing SVG (#3) | TRICKS.md:17, youtube.md:1 | (a) can be themed blue | **REJECT** | Introduces a 3rd animated element (hero pulse + snake + typing = too much motion). Conflicts with the static typographic authority of the custom hero SVG. The hero already communicates identity — typing SVG would be redundant text. |
| 4 | Profile Trophies (#14) | TRICKS.md:28, youtube.md:9 | None | **REJECT** | Gold/silver/bronze trophy icons are inherently multi-color — impossible to force into #2563eb monochrome palette. Adds a "gamification" tone that contradicts Swiss restraint. |
| 5 | Visitor Counter (#32) | TRICKS.md:46, reddit-hn.md:§tools | (b) liveness | **REJECT** | HN consensus: "mostly just useless clutter." A single badge at the bottom adds no design value and breaks the clean badge trio (Telegram/Kwork/Email). The profile already signals activity via auto-updated hero stats + snake. |
| 6 | 3D Contribution City (#9) | TRICKS.md:23, articles-x.md:4 | (b) liveness | **REJECT** | Isometric 3D city is visually heavy and colorful — clashes with flat Swiss geometry. Competes directly with snake animation for the "contribution visualization" slot. Two contribution visualizations = redundant. |
| 7 | Isometric Calendar (#11) | TRICKS.md:25, articles-x.md:3 | (b) liveness | **REJECT** | Same problem as #6 — another contribution visualization alongside snake. Also: lowlighter/metrics SVGs have their own styling that doesn't match the locked palette without heavy CSS override. |
| 8 | Capsule-Render Header (#1) | TRICKS.md:14, youtube.md:2 | (a) can be themed | **REJECT** | Generic wave/gradient header would REPLACE the custom generative SVG hero — the single most unique element of Forge. Downgrade, not upgrade. |
| 9 | WakaTime Stats (#16) | TRICKS.md:30, youtube.md:12 | (b) liveness, (c) automation | **SKIP** | Requires WakaTime API key — a user-side credential we don't have. Per constraints: skip unless implementable with public-only data. Cannot implement. |
| 10 | Spotify Now Playing (#17/#18) | TRICKS.md:31-32, youtube.md:6 | (b) liveness | **SKIP** | Requires Spotify OAuth refresh token — user-side credential. Per constraints: skip. |
| 11 | Blog Post Auto-Pull (#19) | TRICKS.md:33, articles-x.md:5 | (b) liveness, (c) automation | **REJECT** | Alexander doesn't maintain a blog or RSS feed. No data source to pull from. Would show empty section or require creating content infrastructure outside scope. |
| 12 | Tech Stack Icons Grid | youtube.md:8, live-profiles.md:§codestackr | (a) can be themed | **REJECT** | Colored devicon SVGs (Java orange, Python blue/yellow, Docker blue) break palette discipline. Monochrome variants exist but look lifeless. The terminal bio block already lists the stack in text — icons would be redundant information in a less controlled visual form. |
| 13 | Shadcn-Style Badges (shieldcn) | reddit-hn.md:8 | (a) modern aesthetic | **REJECT** | Replaces shields.io badges with shadcn-style ones. Marginal visual improvement — current flat-square badges already match the Swiss-minimal tone. New dependency on a 2026-era project with unknown longevity. Risk > reward. |
| 14 | npx Business Card (#23) | TRICKS.md:37 | (c) demonstrates skill | **REJECT** | Invisible in the README itself — only works if visitor runs `npx` in their terminal. Zero visual impact on the profile page. Doesn't reinforce any of the 3 cohesion criteria in a way visitors actually see. |

### Decision: 0 new tricks

**Forge is already at its optimal point.** The profile achieves:

1. **Uniqueness** — custom generative SVG hero that no other profile has.
2. **Liveness** — nightly auto-update of hero stats + daily snake regeneration.
3. **Cohesion** — single accent color, rationed motion (exactly 2), clear visual hierarchy.
4. **Identity** — Swiss-poster says "designer who codes," terminal bio says "coder who ships," snake says "active contributor," stats confirm with numbers.
5. **Restraint** — the most powerful signal in the current ecosystem where badge-soup is the norm.

Every candidate evaluated either:
- Breaks palette discipline (trophies, 3D city, tech icons, capsule-render)
- Adds redundant information (activity graph, isometric calendar = another contribution viz)
- Introduces visual noise that dilutes the Swiss-minimal aesthetic (streak stats, typing SVG)
- Requires credentials we don't have (WakaTime, Spotify)
- Has no data source (blog posts)
- Is invisible to visitors (npx card)

**The strongest argument for adding nothing:** HN's golden rule — "Please just use text and limit yourself to one or two relevant images." Forge uses exactly: 1 hero image, 2 stats cards, 1 snake animation. Adding anything pushes past the threshold where restraint becomes clutter.

**Shipped:** No code changes. Round 4 = documented validation that Forge is complete.
