import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "assets");

const USERNAME = process.env.GITHUB_USERNAME || "kroch228";
const DISPLAY_NAME = process.env.DISPLAY_NAME || "Alexander";
const TOKEN = process.env.GITHUB_TOKEN || "";
const ACCENT = "#2563eb";

const headers = TOKEN
  ? { Authorization: `Bearer ${TOKEN}`, "User-Agent": "profile-hero" }
  : { "User-Agent": "profile-hero" };

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

  return { name: DISPLAY_NAME, publicRepos: user.public_repos || 0, totalStars, contributions, topLangs };
}

function renderSVG(data, mode) {
  const { name, publicRepos, totalStars, contributions, topLangs } = data;
  const isDark = mode === "dark";
  const bg = isDark ? "#0d1117" : "#fafafa";
  const textPrimary = isDark ? "#e6edf3" : "#111827";
  const textSecondary = isDark ? "#8b949e" : "#4b5563";
  const textMuted = isDark ? "#484f58" : "#9ca3af";
  const gridLine = isDark ? "#21262d" : "#e5e7eb";

  const statsItems = [
    contributions > 0 ? `${contributions} contributions` : null,
    `${publicRepos} repos`,
    totalStars > 0 ? `${totalStars} stars` : null,
  ].filter(Boolean).join("  ·  ");

  const langText = topLangs.map(([l]) => l).join("   ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="460" viewBox="0 0 800 460">
  <rect width="800" height="460" fill="${bg}"/>
  <line x1="48" y1="0" x2="48" y2="460" stroke="${gridLine}" stroke-width="0.5"/>
  <line x1="752" y1="0" x2="752" y2="460" stroke="${gridLine}" stroke-width="0.5"/>
  <line x1="0" y1="48" x2="800" y2="48" stroke="${gridLine}" stroke-width="0.5"/>
  <line x1="0" y1="412" x2="800" y2="412" stroke="${gridLine}" stroke-width="0.5"/>

  <text x="48" y="120" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="52" font-weight="700" fill="${textPrimary}" letter-spacing="-1">${name.toUpperCase()}</text>
  <text x="48" y="158" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="16" font-weight="300" fill="${textSecondary}" letter-spacing="2">DEVELOPER × AI</text>

  <rect x="48" y="178" width="56" height="3" fill="${ACCENT}" rx="1.5"/>
  <rect x="48" y="178" width="56" height="3" fill="${ACCENT}" rx="1.5" opacity="0.6">
    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
  </rect>

  <text x="48" y="220" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="13" fill="${textSecondary}" letter-spacing="0.3">Embedding AI into the development workflow.</text>
  <text x="48" y="242" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="13" fill="${textSecondary}" letter-spacing="0.3">Turnkey delivery — plugins, bots, APIs, LLM integrations.</text>
  <text x="48" y="264" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="13" fill="${textSecondary}" letter-spacing="0.3">Questions first, then code. 2-3× faster via AI at every stage.</text>

  <text x="48" y="320" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="11" fill="${textMuted}" letter-spacing="1">${statsItems.toUpperCase()}</text>

  <text x="48" y="360" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="13" fill="${textSecondary}" letter-spacing="0.5">${langText}</text>

  <text x="48" y="438" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="10" fill="${textMuted}" letter-spacing="0.5">auto-generated · updated nightly</text>
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
