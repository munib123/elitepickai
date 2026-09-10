/**
 * Post-build prerender: write real HTML for each route so a crawler, or anyone
 * without JavaScript, receives content and the correct head.
 *
 * The bug this replaces: the old script performed exactly one substitution per
 * route, swapping the empty root div for that route's body, and never touched the
 * head. All 26 generated files therefore carried index.html's head verbatim, so
 * every URL on the site served the homepage's <title> and
 * <link rel="canonical" href="https://elitepickai.com/">. Google consolidated the
 * lot into the homepage, which is why 30 URLs behaved like one. react-helmet-async
 * did set the right tags, but only in a browser, and only after the bundle ran.
 *
 * Two rules keep that from coming back:
 *
 *   1. seo.config.json is the single source of truth. This script and the page
 *      components both read it, so the prerendered head and the client-rendered
 *      head cannot disagree.
 *   2. replaceOnce() throws unless a pattern matches exactly once. The original
 *      defect survived because a failed String.replace is indistinguishable from a
 *      successful one: it silently returns the input. Now a moved tag fails the
 *      build. This also fixes the old script's non-idempotence, where a second run
 *      without an intervening `vite build` found no root div, no-oped, and wrote
 *      the homepage body into every route while printing a green tick for each.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

const seo = JSON.parse(readFileSync(join(root, 'seo.config.json'), 'utf-8'));
const { baseUrl, siteName, ogImage } = seo;

const templatePath = join(distDir, 'index.html');
if (!existsSync(templatePath)) {
  console.error('prerender: dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}
const template = readFileSync(templatePath, 'utf-8');

/** & first, or it double-escapes what it just wrote. */
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Substitute exactly one match, or fail the build saying which pattern broke. */
function replaceOnce(html, pattern, out) {
  const flags = pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g';
  const matches = html.match(new RegExp(pattern.source, flags));
  const n = matches ? matches.length : 0;
  if (n !== 1) {
    throw new Error(
      `prerender: expected exactly 1 match for ${pattern} but found ${n}. ` +
        'index.html and this script have drifted; fix the pattern rather than shipping a stale head.'
    );
  }
  return html.replace(pattern, () => out);
}

const personId = `${baseUrl}/#person`;

const PERSON = {
  '@type': 'Person',
  '@id': personId,
  name: 'Muneeb Shafiq',
  jobTitle: 'AI Engineer',
  url: 'https://www.muneebshafiq.me',
  email: 'mailto:muneebzehel@gmail.com',
  worksFor: { '@type': 'Organization', name: 'Symufolk' },
  address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' },
  sameAs: [
    'https://github.com/munib123',
    'https://www.linkedin.com/in/muneebshafiq-ai/',
    'https://www.fiverr.com/muneebisfast',
    'https://www.muneebshafiq.me',
  ],
};

/** The JSON-LD graph for each route. Person is shared by @id, never restated twice. */
function graphFor(path) {
  if (path === '/') {
    return [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name: siteName,
        inLanguage: 'en',
        publisher: { '@id': personId },
      },
      PERSON,
    ];
  }
  if (path === '/about') {
    return [
      {
        '@type': 'ProfilePage',
        '@id': `${baseUrl}/about#profilepage`,
        url: `${baseUrl}/about`,
        mainEntity: PERSON,
      },
    ];
  }
  return [
    {
      '@type': 'ContactPage',
      '@id': `${baseUrl}/contact#contactpage`,
      url: `${baseUrl}/contact`,
      name: `Contact ${siteName}`,
      mainEntity: { '@id': personId },
    },
    PERSON,
  ];
}

/* ── Body content per route, for crawlers and no-JS visitors ───────────────── */

const shell = (heading, lead, sections) => `
      <main>
        <h1>${esc(heading)}</h1>
        <p>${esc(lead)}</p>
        ${sections}
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="https://www.muneebshafiq.me">Case studies</a>
        </nav>
      </main>`;

const BODIES = {
  '/': shell(
    'Data and AI work, built by one engineer.',
    'ElitePick AI is the independent practice of Muneeb Shafiq, AI Engineer at Symufolk. Dashboards and the data plumbing under them, retrieval systems that cite their sources, and automation that runs without supervision. Remote from Lahore, UTC+5.',
    `<h2>What I take on</h2>
        <ul>
          <li>Dashboards and reporting, in Power BI, with the cleaning and modelling underneath.</li>
          <li>Retrieval and document question answering, grounded so the answer cites its source.</li>
          <li>Automation and multi-agent pipelines, with scoped permissions and human approval gates.</li>
        </ul>
        <h2>Where to check the work</h2>
        <ul>
          <li><a href="https://www.fiverr.com/muneebisfast">Client work: 8 clients across 5 countries, rated 4.9/5 on Fiverr</a></li>
          <li><a href="https://www.muneebshafiq.me/projects">Case studies, written up end to end</a></li>
          <li><a href="https://github.com/munib123">Public code on GitHub</a></li>
        </ul>`
  ),
  '/about': shell(
    'Muneeb Shafiq, AI Engineer.',
    'I work at Symufolk on the agent pipeline behind the Puffo AI platform: nine agents, folder-scoped writes, human approval gates between phases, and an append-only audit log. Remote from Lahore, on LLM automation that has to clear a security or compliance review before it ships.',
    `<h2>Client work</h2>
        <p>8 clients across 5 countries, rated 4.9/5. The reviews belong to the people who wrote them, so they stay on <a href="https://www.fiverr.com/muneebisfast">the Fiverr profile</a> under their own names rather than being reproduced here.</p>
        <h2>Certifications</h2>
        <p>Ten certifications from DeepLearning.AI and Stanford, HackerRank, Microsoft and IBM. Nine link to the issuer's own verification page; the tenth says plainly that no verification link was issued.</p>`
  ),
  '/contact': shell(
    'Get in touch',
    'Tell me what the data is and what you need out of it. I reply within one business day. I work from Lahore, Pakistan, UTC+5.',
    `<h2>Direct</h2>
        <ul>
          <li>Email: <a href="mailto:muneebzehel@gmail.com">muneebzehel@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/muneebshafiq-ai/">LinkedIn</a></li>
        </ul>`
  ),
};

/* ── Write ─────────────────────────────────────────────────────────────────── */

const routes = Object.keys(seo.routes);
const missing = routes.filter((r) => !(r in BODIES));
if (missing.length) {
  console.error(`prerender: seo.config.json has routes with no body: ${missing.join(', ')}`);
  process.exit(1);
}

let written = 0;
for (const path of routes) {
  const meta = seo.routes[path];
  const canonical = path === '/' ? `${baseUrl}/` : `${baseUrl}${path}`;
  const image = `${baseUrl}${ogImage}`;
  const title = esc(meta.title);
  const description = esc(meta.description);

  let html = template;

  // Head. Each pattern anchors on the whole tag, never on its text: the origin
  // alone appears more than twenty times in this file.
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = replaceOnce(
    html,
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${description}" />`
  );
  html = replaceOnce(
    html,
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = replaceOnce(
    html,
    /<meta property="og:type"[^>]*>/,
    `<meta property="og:type" content="${meta.ogType}" />`
  );
  html = replaceOnce(
    html,
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${title}" />`
  );
  html = replaceOnce(
    html,
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${description}" />`
  );
  html = replaceOnce(
    html,
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = replaceOnce(
    html,
    /<meta name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = replaceOnce(
    html,
    /<meta name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${description}" />`
  );
  html = replaceOnce(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graphFor(path),
    })}</script>`
  );

  // Body.
  html = replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${BODIES[path]}</div>`);

  const outPath =
    path === '/' ? join(distDir, 'index.html') : join(distDir, path.slice(1), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`  prerendered ${path.padEnd(10)} -> ${canonical}`);
  written += 1;
}

console.log(`\nprerender: ${written} page(s), each with its own title and self-canonical.`);
