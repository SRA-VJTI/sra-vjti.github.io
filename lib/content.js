import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

// Read content/<name>.md and return its frontmatter as a plain object.
// Body text (if any) is available as `body`.
export function getPage(name) {
  const file = path.join(CONTENT_DIR, `${name}.md`);
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return { ...data, body: content.trim() };
}

// Browser tab title for a page, e.g. "Events — SRA VJTI".
// Reads the page's `title` and the site-wide `suffix` from content/site.md.
export function pageTitle(name) {
  const page = getPage(name);
  const { suffix } = getPage('site');
  return `${page.title} — ${suffix}`;
}
