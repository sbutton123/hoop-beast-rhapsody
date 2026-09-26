// scripts/generate-page-html.mjs
//
// Runs after "vite build". The site is a single page app, so by default every
// URL is served the same dist/index.html with the homepage title and canonical.
// This script writes one HTML file per page (dist/programs.html, etc.) with that
// page's own title, description, canonical URL, and social tags, using the
// settings in src/seo-pages.json.
//
// Netlify serves /programs from programs.html automatically, and the existing
// "/* /index.html 200" rule in public/_redirects still handles everything else.
// The page content itself is still rendered by React exactly as before.
//
// No extra packages are needed; this uses only built in Node modules.

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const seo = JSON.parse(readFileSync(join(root, 'src', 'seo-pages.json'), 'utf8'))
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const escapeAttr = value =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

// Replace exactly one match, and fail the build loudly if the tag is missing,
// so a future edit to index.html can never silently break page SEO.
function replaceOnce(html, pattern, replacement, label) {
  const matches = html.match(new RegExp(pattern.source, 'g')) || []
  if (matches.length !== 1) {
    throw new Error(`[generate-page-html] Expected exactly one ${label} in dist/index.html, found ${matches.length}`)
  }
  return html.replace(pattern, replacement)
}

function buildPage(page) {
  const url = page.path === '/' ? `${seo.siteUrl}/` : `${seo.siteUrl}${page.path}`
  const title = escapeAttr(page.title)
  const description = escapeAttr(page.description)
  let html = template

  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, '<title>')
  html = replaceOnce(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`, 'meta description')
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, 'canonical')
  html = replaceOnce(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, 'og:url')
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`, 'og:title')
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`, 'og:description')
  html = replaceOnce(html, /<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${url}" />`, 'twitter:url')
  html = replaceOnce(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`, 'twitter:title')
  html = replaceOnce(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`, 'twitter:description')

  // Keep the hidden Netlify form definition only in the homepage file,
  // so Netlify sees one "contact" form rather than eight copies.
  if (page.file !== 'index.html') {
    html = replaceOnce(html, /\s*<!-- netlify-form:start -->[\s\S]*?<!-- netlify-form:end -->/, '', 'Netlify form block')
  }

  writeFileSync(join(dist, page.file), html)
  console.log(`[generate-page-html] ${page.file.padEnd(16)} ${page.path}`)
}

for (const page of seo.pages) buildPage(page)
