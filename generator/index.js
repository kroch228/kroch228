import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "assets");

const USERNAME = process.env.GITHUB_USERNAME || "kroch228";
const DISPLAY_NAME = process.env.DISPLAY_NAME || "Alexander";
const TOKEN = process.env.GITHUB_TOKEN || "";
const ACCENT = "#f59e0b";
const EMBER = "#fbbf24";

const headers = TOKEN
  ? { Authorization: `Bearer ${TOKEN}`, "User-Agent": "profile-foundry" }
  : { "User-Agent": "profile-foundry" };

async function fetchData() {
  const userRes = await fetch(`https://api.github.com/users/${USERNAME}`, { headers });
  const user = await userRes.json();

  const reposRes = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
    { headers }
  );
  const repos = await reposRes.json();

  const languages = {};
  for (const repo of repos) {
    if (repo.language) languages[repo.language] = (languages[repo.language] || 0) + 1;
  }
  const topLangs = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
  const maxLangCount = topLangs.length > 0 ? topLangs[0][1] : 1;

  let contributions = 0;
  if (TOKEN) {
    try {
      const query = `query{user(login:"${USERNAME}"){contributionsCollection{contributionCalendar{totalContributions}}}}`;
      const gqlRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const gql = await gqlRes.json();
      contributions = gql?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
    } catch {}
  }

  return { name: DISPLAY_NAME, publicRepos: user.public_repos || 0, totalStars, contributions, topLangs, maxLangCount };
}

function renderHeatBars(topLangs, maxLangCount, mode) {
  const isDark = mode === "dark";
  const barBg = isDark ? "#1e2530" : "#e5e7eb";
  const textColor = isDark ? "#6b7280" : "#6b7280";
  const barWidth = 120;

  return topLangs.map(([lang, count], i) => {
    const y = 270 + i * 28;
    const filled = Math.round((count / maxLangCount) * barWidth);
    return `
  <text x="48" y="${y + 12}" font-family="'JetBrains Mono', 'Fira Code', monospace" font-size="11" fill="${textColor}">${lang.padEnd(12)}</text>
  <rect x="160" y="${y}" width="${barWidth}" height="14" fill="${barBg}" rx="2"/>
  <rect x="160" y="${y}" width="${filled}" height="14" fill="${ACCENT}" rx="2" opacity="0.85"/>`;
  }).join("\n");
}

function renderSVG(data, mode) {
  const { name, publicRepos, totalStars, contributions, topLangs, maxLangCount } = data;
  const isDark = mode === "dark";
  const bg = isDark ? "#0f1419" : "#f8f9fa";
  const textPrimary = isDark ? "#e6edf3" : "#1c1917";
  const textSecondary = isDark ? "#9ca3af" : "#4b5563";
  const textMuted = isDark ? "#6b7280" : "#9ca3af";
  const gridLine = isDark ? "#1e2530" : "#e5e7eb";

  const statsItems = [
    contributions > 0 ? `▸ ${contributions} contributions` : null,
    `▸ ${publicRepos} repos`,
    totalStars > 0 ? `▸ ${totalStars} stars` : null,
  ].filter(Boolean).join("   ");

  const heatBars = renderHeatBars(topLangs, maxLangCount, mode);
  const svgHeight = 460 + (topLangs.length > 3 ? (topLangs.length - 3) * 28 : 0);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="${svgHeight}" viewBox="0 0 800 ${svgHeight}" preserveAspectRatio="xMidYMid meet">
  <rect width="800" height="${svgHeight}" fill="${bg}"/>

  <line x1="40" y1="0" x2="40" y2="${svgHeight}" stroke="${gridLine}" stroke-width="0.5"/>
  <line x1="760" y1="0" x2="760" y2="${svgHeight}" stroke="${gridLine}" stroke-width="0.5"/>
  <line x1="0" y1="40" x2="800" y2="40" stroke="${gridLine}" stroke-width="0.5"/>
  <line x1="0" y1="${svgHeight - 40}" x2="800" y2="${svgHeight - 40}" stroke="${gridLine}" stroke-width="0.5"/>

  <rect x="48" y="72" width="4" height="52" fill="${ACCENT}" rx="2"/>

  <text x="64" y="100" font-family="'JetBrains Mono', 'Fira Code', monospace" font-size="36" font-weight="700" fill="${textPrimary}" letter-spacing="4">${name.toUpperCase()}</text>
  <text x="64" y="124" font-family="'JetBrains Mono', 'Fira Code', monospace" font-size="13" font-weight="400" fill="${textSecondary}" letter-spacing="1">forging software with AI</text>

  <rect x="48" y="148" width="80" height="3" fill="${ACCENT}" rx="1.5">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
  </rect>
  <rect x="48" y="148" width="80" height="3" fill="${EMBER}" rx="1.5" opacity="0">
    <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite"/>
  </rect>

  <text x="48" y="185" font-family="'JetBrains Mono', 'Fira Code', monospace" font-size="12" fill="${textSecondary}">Turnkey delivery: plugins · bots · APIs · LLM integrations</text>
  <text x="48" y="207" font-family="'JetBrains Mono', 'Fira Code', monospace" font-size="12" fill="${textSecondary}">Questions first. Code second. 2-3× faster.</text>

  <text x="48" y="245" font-family="'JetBrains Mono', 'Fira Code', monospace" font-size="10" fill="${textMuted}" letter-spacing="0.5">MATERIALS</text>
${heatBars}

  <text x="48" y="${svgHeight - 70}" font-family="'JetBrains Mono', 'Fira Code', monospace" font-size="11" fill="${textMuted}">${statsItems}</text>

  <text x="48" y="${svgHeight - 48}" font-family="'JetBrains Mono', 'Fira Code', monospace" font-size="9" fill="${textMuted}" letter-spacing="0.5">auto-generated · updated nightly</text>
</svg>`;
}

async function main() {
  console.log(`Fetching data for ${USERNAME}...`);
  const data = await fetchData();
  console.log(`  repos: ${data.publicRepos}, stars: ${data.totalStars}, contributions: ${data.contributions}`);
  console.log(`  languages: ${data.topLangs.map(([l]) => l).join(", ")}`);

  mkdirSync(ASSETS_DIR, { recursive: true });

  for (const mode of ["dark", "light"]) {
    const svg = renderSVG(data, mode);
    const path = join(ASSETS_DIR, `hero-${mode}.svg`);
    writeFileSync(path, svg, "utf-8");
    console.log(`Written: ${path}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
