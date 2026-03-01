# The World Is My Oyster

A personal travel blog — built as a side project to explore working with AI-assisted development tools as part of my continuous learning practice.

## Why I built this

I'm a frontend developer working daily with React, TypeScript, and Tailwind. This project was an opportunity to experiment with [Claude Code](https://claude.ai/code) — Anthropic's AI coding CLI — and see how it fits into a real development workflow.

Rather than a tutorial or a throwaway demo, I built something I actually use: a blog where I write about travel. The goal was to make real architectural decisions, follow current best practices, and ship something production-ready — while exploring what AI-assisted development looks like in practice.

Lifelong learning is something I genuinely believe in. This is one expression of that.

## Tech stack

- **[Next.js 16](https://nextjs.org)** — App Router, static site generation
- **TypeScript** — fully typed throughout
- **Tailwind CSS v4** — CSS-first config via `@theme`, no config file
- **MDX** — blog posts as Markdown files with frontmatter metadata
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** — frontmatter parsing
- **[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)** — MDX rendering in React Server Components

## How the blog works

Posts live in `/content/posts/` as `.mdx` files with frontmatter:

```yaml
---
title: "Post Title"
date: "2025-01-20"
location: "Lombok, Indonesia"
category: "Asia"
excerpt: "Short description shown in cards."
coverImage: "/images/posts/filename.jpg"
---
```

Images go in `/public/images/posts/`. Every post is pre-rendered at build time via `generateStaticParams`.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
content/posts/        # MDX blog posts
public/images/posts/  # Cover images and in-post photos
src/
  app/                # Next.js App Router pages
  components/         # Navbar, Footer, ArticleCard, HeroSection etc.
  lib/posts.ts        # Content utilities (read, parse, sort posts)
  types/post.ts       # Shared TypeScript interfaces
```

---

Built by [Gosia Stano](https://malgorzata-stano.netlify.app/) — Frontend Developer
