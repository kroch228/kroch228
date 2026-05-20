# Live GitHub Profile READMEs — Art & Design Research

> Scout-LP research: 25 verified live profiles grouped by visual style cluster.
> Each profile confirmed via `gh api repos/<user>/<user>/readme` → 200.

---

## 🖥️ Terminal / CLI / Neofetch Style

### [terkelg](https://github.com/terkelg)
Custom SVG-rendered README via `readme.terkel.com` — dynamic theme-aware (light/dark) pixel-perfect typography links. No badges, no stats — pure typographic minimalism served as SVG images. Swiss-design precision.

### [guilyx](https://github.com/guilyx)
YAML code block as self-description (`name: Erwin Lejeune, located_in: Abu Dhabi`). Socialify card header + activity graph. The YAML-as-bio trick gives a terminal/config-file aesthetic without actual CLI emulation.

### [kautukkundan](https://github.com/kautukkundan)
ASCII art computer terminal in a code block with "hit any key to continue" prompt. Tagline rendered as shell-style `$ AGENTIC • TOOL-CALLING • AI SYSTEMS`. Pure monospace brutalism.

---

## 🎮 Interactive / Gamified

### [timburgan](https://github.com/timburgan)
Live community chess game rendered as an 8×8 image grid table. Visitors play by clicking issue links that trigger GitHub Actions to update the board. The README IS the game.

### [HFO4](https://github.com/HFO4)
Playable Pokémon Game Boy emulator embedded in README — D-pad buttons are clickable links that send gamepad input to a cloud server, screenshot refreshes on page reload. Based on their own [gameboy.live](https://github.com/HFO4/gameboy.live) project.

### [JessicaLim8](https://github.com/JessicaLim8)
Community word cloud that updates in real-time via GitHub Issues. Visitors add words through issue templates, Actions regenerate the cloud image. Social/collaborative art piece.

---

## 🐍 Generative / Animated SVG

### [Platane](https://github.com/Platane)
The OG contribution-grid snake animation — SVG snake eats your contribution graph squares. Theme-aware (dark/light via `<picture><source media>`). Clean, single-element README.

### [lowlighter](https://github.com/lowlighter)
Creator of [metrics](https://github.com/lowlighter/metrics) — profile is a living showcase of generated SVG infographics: general stats, media consumption, sponsors, achievements. All rendered as gist-hosted SVGs with float layout. The most technically sophisticated metrics system on GitHub.

### [kyechan99](https://github.com/kyechan99)
Creator of [capsule-render](https://github.com/kyechan99/capsule-render) — dynamic gradient header/footer SVGs generated via Vercel API. Each page refresh produces a new color gradient. The profile itself is a demo of the tool.

---

## 🎨 Retro / Nostalgic Web

### [sindresorhus](https://github.com/sindresorhus)
Geocities-era aesthetic: animated GIF header, "under construction" banner, hit counter, flaming dividers, badge collection, party furby. Deliberate retro-web irony from one of GitHub's most prolific open-sourcerers (2400+ packages).

### [Raymo111](https://github.com/Raymo111)
Animated regex-based intro GIF: `(Raymo(111|nd Li)|https://raymond.li)` — the name IS a regex pattern. Visitor counter badge. Minimal but the intro hook is memorable.

---

## 📊 Dashboard / Stats-Heavy

### [DenverCoder1](https://github.com/DenverCoder1)
Custom header image + typing SVG animation (rotating titles). Creator of readme-typing-svg — the profile is a polished showcase. Custom-drawn social icons, streak stats, pinned repos with custom cards. The "complete package" dashboard.

### [anuraghazra](https://github.com/anuraghazra)
Creator of github-readme-stats — profile uses own tools (stats card + top-langs) in a clean table layout. Custom SVG header banner. Minimal text, maximum signal. 50M+ hits, 50K stars mentioned casually.

### [guilyx](https://github.com/guilyx)
Activity graph + socialify card + wakatime stats workflow. The YAML bio + graph combo creates a "developer dashboard" feel.

---

## 🎀 Kawaii / Playful

### [SP-XD](https://github.com/SP-XD)
Rounded GIF animations (hello coders + dev-working), Spotify now-playing widget, extensive badge collection with custom colors. Playful energy with the animated workspace GIF as centerpiece.

### [moepoi](https://github.com/moepoi)
Anime-themed developer — Bad Apple GitHub readme integration, trophy display, projects focused on anime apps/bots. The "Bad Apple" stats card is a unique cultural reference.

### [thmsgbrt](https://github.com/thmsgbrt)
Slackmoji blob-sunglasses wave, flag emojis for location, rainbow of flat-square tech badges. Clean and friendly — the badge color palette creates visual rhythm without being overwhelming.

---

## 🏗️ Minimalist / Typography-First

### [0xabdulkhalid](https://github.com/0xabdulkhalid)
WebP/PNG banner with `<picture>` fallback, muted color palette (steel blue `#446078` badges), long-form storytelling about CTF→webdev journey. The banner + monochrome badge scheme creates a cohesive brand.

### [saadeghi](https://github.com/saadeghi)
Creator of daisyUI — single centered logo image linking to daisyui.com. Nothing else. The most extreme minimalism: one image, zero text. Confidence through restraint.

### [MikeCodesDotNET](https://github.com/MikeCodesDotNET)
"CEO at Avalonia UI" — two lines. Working on X by day, building Y by night. Maximum information density in minimum space. Anti-README as statement.

---

## 🖼️ Custom Banner / Brand Identity

### [WaylonWalker](https://github.com/WaylonWalker)
Custom illustrated banner, floating latest-story image, hand-drawn social icons. "Boy Scout Rule" philosophy section with Hacktoberfest badge. Personal brand with editorial voice.

### [mokkapps](https://github.com/mokkapps)
Custom header PNG + auto-generated latest blog posts and newsletter issues via GitHub Actions. The README as a living blog/newsletter portal — content updates automatically.

### [Ileriayo](https://github.com/Ileriayo)
Animated header GIF + centered layout with "Whoami" section (samp tag for monospace bio). Clean badge grid for tools. The `<samp>` tag usage gives a terminal-output feel within a polished layout.

---

## 🧪 Hybrid / Unique Concepts

### [codestackr](https://github.com/codestackr)
YouTube subscriber count badge + VS Code theme promotion + light/dark mode social icons (using `#gh-light-mode-only` / `#gh-dark-mode-only` suffix trick). The profile doubles as a marketing funnel.

### [praveenscience](https://github.com/praveenscience)
Custom SVG social icons (hand-crafted, not shields.io), activity graph, open-source project table with live issue/PR counts. The SVG icon set is unique — each platform has a bespoke mini-logo.

---

## Key Techniques Observed

| Technique | Examples |
|-----------|----------|
| `<picture><source media="prefers-color-scheme">` for dark/light | terkelg, Platane, 0xabdulkhalid |
| GitHub Actions auto-updating content | mokkapps, timburgan, JessicaLim8, Platane |
| Custom SVG via external API (Vercel/serverless) | kyechan99, DenverCoder1, terkelg |
| Interactive via GitHub Issues | timburgan, JessicaLim8, HFO4 |
| YAML/code block as bio | guilyx, kautukkundan |
| Retro web GIFs | sindresorhus |
| Single-image minimalism | saadeghi |
| `#gh-light-mode-only` suffix trick | codestackr |
| Floating layout with `align="left/right"` | lowlighter, WaylonWalker |
| ASCII art in fenced code blocks | kautukkundan |
