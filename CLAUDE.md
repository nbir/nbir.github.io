# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev       # local dev server at http://localhost:3000
pnpm next build    # static export to ./out (used by CI)
```

No lint or test scripts are configured.

## Deployment

- Push to `develop` for preview deploys; push to `main` for production.
- Squash all commits before merging into `main`.
- GitHub Actions (`.github/workflows/nextjs.yaml`) builds via `pnpm next build` and deploys to GitHub Pages from `./out`.
- The site is exported as fully static (`output: 'export'` in `next.config.js`), so no server-side features work.

## Architecture

Next.js App Router site with Tailwind CSS v4 and MDX content. There is no database or CMS — all content lives as `.mdx` files on disk.

### Content model

Two categories of posts, both stored as MDX with YAML frontmatter:

| Category | Directory | Frontmatter |
|---|---|---|
| Written posts | `app/blog/posts/` | `title`, `publishedAt`, `summary` |
| External posts | `app/blog/external-posts/` | same + `url` (external link) |

`app/blog/utils.ts` reads both directories at build time (`getBlogPosts()` / `getExternalPosts()`). The slug is derived from the filename.

### Routing

- `/` — home page, renders `<BlogPosts />` (combined, date-sorted list)
- `/blog/` — redirects to `/`
- `/blog/[slug]` — renders a written post via `CustomMDX`; external posts are never routed here (they link out directly from the list)
- `/rss/route.ts` — RSS feed
- `app/sitemap.ts` — only written posts are included in the sitemap; `baseUrl` is `https://nibir.me`

### Key component behaviour

`app/components/posts.tsx` merges both post lists, sorts by `publishedAt` descending, and renders each entry differently: external posts (those with a `url` field) open in a new tab with an arrow icon; written posts link to `/blog/[slug]`.

### Adding content

- **New written post**: add `app/blog/posts/<slug>.mdx` with frontmatter `title`, `publishedAt` (YYYY-MM-DD), `summary`.
- **New external post**: add `app/blog/external-posts/<slug>.mdx` with the same frontmatter plus `url`.
