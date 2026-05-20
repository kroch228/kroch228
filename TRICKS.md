# Tricks Catalogue — Atomic Techniques for GitHub Profile README

Each trick is a single visual/technical element that can be combined with others.

## Legend
- **Tag**: header | background | data-viz | interactive | typography | motion | easter-egg | layout | live-data
- **Rarity**: common (seen in 50%+ profiles) | uncommon (10-50%) | rare (<10%)
- **Effort**: 1 (copy-paste URL) → 5 (custom code + Action)

---

| # | Name | Tag | What it does | Effort | Rarity | Source |
|---|------|-----|-------------|:------:|--------|--------|
| 1 | Capsule-render wave header | header, motion | Animated SVG wave/shark/venom banner via URL params. Supports gradient, fadeIn, custom font. | 1 | common | [kyechan99/capsule-render](https://github.com/kyechan99/capsule-render) |
| 2 | Capsule-render transparent overlay | header | Transparent mode layers text over repo's social preview image | 1 | rare | [capsule-render docs](https://github.com/kyechan99/capsule-render) |
| 3 | Readme-typing-svg | header, motion | Animated typing effect cycling through taglines. Monospace or custom font. | 1 | common | [DenverCoder1/readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg) |
| 4 | Custom animated GIF header | header, motion | Hand-made or screen-recorded GIF as hero banner. Full creative control. | 3 | uncommon | [CyrisXD](https://github.com/CyrisXD/CyrisXD), [Ileriayo](https://github.com/Ileriayo/Ileriayo) |
| 5 | TypeIt + Vue animated hero | header, motion | Interactive typing animation built with Vue.js, rendered as GIF. Regex-style name reveal. | 4 | rare | [Raymo111](https://github.com/Raymo111/Raymo111) |
| 6 | Hand-crafted SVG banner | header, typography | Single custom SVG with embedded fonts, shapes, animations. The profile IS the banner. | 4 | rare | [jh3y](https://github.com/jh3y/jh3y) |
| 7 | Dark/light mode asset swap | layout | `#gh-dark-mode-only` / `#gh-light-mode-only` URL fragments serve different images per theme. | 2 | uncommon | [codestackr](https://github.com/codestackr/codestackr), [orhun](https://github.com/orhun/orhun) |
| 8 | Snake eats contributions | motion, data-viz | SVG animation of snake consuming contribution grid. Generated daily by Action. | 2 | common | [Platane/snk](https://github.com/Platane/snk) |
| 9 | 3D contribution city (Skyline) | data-viz, motion | Isometric 3D city built from contribution data. Multiple color themes. | 2 | uncommon | [yoshi389111/github-profile-3d-contrib](https://github.com/yoshi389111/github-profile-3d-contrib) |
| 10 | GitHub Skyline as GIF | data-viz, motion | Screen-record skyline.github.com rotating 3D graph, embed as GIF. | 3 | rare | [dev.to/github official guide](https://dev.to/github/how-to-create-a-github-profile-readme-jha) |
| 11 | Isometric contribution calendar | data-viz | Full-year isometric calendar via lowlighter/metrics `isocalendar` plugin. | 2 | uncommon | [lowlighter/metrics](https://github.com/lowlighter/metrics) |
| 12 | GitHub stats card (themed) | data-viz | Dynamic commit/star/PR counters. Power: custom hex for every element via URL params. | 1 | common | [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats) |
| 13 | Streak stats | data-viz | Current/longest streak counter with theme support. | 1 | common | [DenverCoder1/github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats) |
| 14 | Profile trophies | data-viz | Dynamic trophy row (commits, stars, PRs). Themeable. | 1 | common | [ryo-ma/github-profile-trophy](https://github.com/ryo-ma/github-profile-trophy) |
| 15 | Activity graph | data-viz | Contribution line chart with area fill. | 1 | common | [Ashutosh00710/github-readme-activity-graph](https://github.com/ashutosh00710/github-readme-activity-graph) |
| 16 | WakaTime ASCII bars | data-viz, typography | Terminal-style bar charts (█░) showing coding time by language/editor/OS. | 2 | uncommon | [anmol098](https://github.com/anmol098/anmol098), [athul/waka-readme](https://github.com/athul/waka-readme) |
| 17 | Spotify now-playing (custom endpoint) | live-data | Self-hosted Vercel/Deno function renders live SVG of current track with album art. | 4 | rare | [natemoo-re](https://github.com/natemoo-re/natemoo-re), [kittinan](https://github.com/kittinan/kittinan) |
| 18 | Spotify now-playing (third-party) | live-data | Pre-built widget from spotify-github-profile or novatorem. | 2 | uncommon | [kittinan/spotify-github-profile](https://github.com/kittinan/spotify-github-profile) |
| 19 | Blog posts auto-pull (RSS) | live-data | GitHub Action pulls latest posts from RSS feed into README. | 2 | uncommon | [gautamkrishnar/blog-post-workflow](https://github.com/gautamkrishnar/blog-post-workflow) |
| 20 | Remote image auto-update | live-data | README references URL on personal site that changes (latest post card, follower mosaic). | 3 | rare | [WaylonWalker](https://github.com/WaylonWalker/WaylonWalker) |
| 21 | Lowlighter/metrics terminal template | typography, data-viz | Entire profile rendered as a fake terminal session with typed commands and live output. | 3 | rare | [lowlighter/metrics](https://github.com/lowlighter/metrics) |
| 22 | Code-as-bio (JS/JSON object) | typography, easter-egg | Bio written as a code block mimicking a data structure. Signals "I think in code." | 1 | uncommon | [anmol098](https://github.com/anmol098/anmol098) |
| 23 | npx business card | interactive, easter-egg | `npx <username>` runs a CLI card in the visitor's terminal. | 3 | rare | [anmol098](https://github.com/anmol098/anmol098), [f/f](https://github.com/f/f) |
| 24 | LinkedIn-parody endorsements via Issues | interactive | Skills listed with avatar thumbnails of endorsers; visitors endorse via issue template. | 4 | rare | [sw-yx](https://github.com/sw-yx/sw-yx) |
| 25 | Interactive games (chess/connect4) | interactive | Issue-driven board games; moves via prefilled issue titles. | 5 | rare | [trinib](https://github.com/trinib/trinib) |
| 26 | Palette discipline | layout | One accent color forced across ALL external services (badges, stats, streak, trophies). Creates cohesion. | 1 | uncommon | [MartinHeinz](https://github.com/MartinHeinz/MartinHeinz), [CyrisXD](https://github.com/CyrisXD/CyrisXD) |
| 27 | Monospace/terminal aesthetic | typography | Code blocks for bio sections; Unicode box-drawing chars; MOTD-style framing. | 2 | uncommon | Direction A (our DESIGN.md), [orhun](https://github.com/orhun/orhun) |
| 28 | Swiss-design typographic poster | typography, header | Custom SVG with Inter/Helvetica, geometric grid, contribution data as abstract color field. Radical restraint. | 5 | rare | Direction E (our DESIGN.md) |
| 29 | Generative SVG via Action | header, live-data | Nightly Action runs script that fetches GitHub API data and renders custom SVG. Unique per profile. | 4 | rare | Direction E, [thmsgbrt](https://github.com/thmsgbrt/thmsgbrt) |
| 30 | Mustache/template-driven rebuild | live-data | README generated from template + data fetcher on cron. Keeps 5+ live feeds fresh. | 4 | rare | [thmsgbrt](https://github.com/thmsgbrt/thmsgbrt), [maximousblk](https://github.com/maximousblk/maximousblk) |
| 31 | OG-image thumbnails as blog cards | live-data, layout | Blog posts shown as clickable rich preview images (fetched from site's OG meta). | 3 | rare | [WaylonWalker](https://github.com/WaylonWalker/WaylonWalker) |
| 32 | Visitor counter styled as context | data-viz | komarev badge with custom label ("players online", "profile views") matching theme. | 1 | common | [komarev/github-profile-views-counter](https://github.com/komarev/github-profile-views-counter) |
| 33 | Stargazer mosaic | data-viz, layout | Live grid of avatar thumbnails of everyone who starred the repo. | 2 | rare | [WaylonWalker](https://github.com/WaylonWalker/WaylonWalker) (via reporoster.com) |
| 34 | Pinned-commit icon stability | layout | Tech icons referenced at a specific commit hash so they never break. | 1 | rare | [CyrisXD](https://github.com/CyrisXD/CyrisXD) |
| 35 | SMIL `<animate>` pulse/fade in SVG | motion | Subtle animation inside committed SVG (opacity pulse, color cycle). Works on GitHub. | 3 | rare | Direction E (our DESIGN.md) |
| 36 | Retro/GeoCities kitsch | header, easter-egg | Under-construction GIFs, badge strips, counter GIFs. Ironic nostalgia as design statement. | 2 | rare | [sindresorhus](https://github.com/sindresorhus/sindresorhus) |
| 37 | Calendly/booking CTA | interactive | Image-as-button linking to scheduling page. Converts profile visitors to meetings. | 1 | rare | [anmol098](https://github.com/anmol098/anmol098) |
| 38 | Mixed badge hierarchy | layout | flat-square for tech, for-the-badge for CTAs. Size difference creates visual weight. | 1 | uncommon | [thmsgbrt](https://github.com/thmsgbrt/thmsgbrt) |
