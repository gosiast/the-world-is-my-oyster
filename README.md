# The World Is My Oyster

A personal travel blog built as a professional development project. The goal is to learn modern web development practices by building something real — a site I actually use and write for.

## About this project

This codebase was built entirely using [Claude Code](https://claude.ai/code), Anthropic's AI coding tool. I used it to design the architecture, write the components, set up the content system, and make decisions about tooling — following current best practices throughout.

It's a deliberate learning exercise: rather than following a tutorial, I built a production-ready project from scratch, making real decisions along the way.

## Tech stack

- **[Next.js 16](https://nextjs.org)** — App Router, static generation
- **TypeScript** — fully typed throughout
- **Tailwind CSS v4** — design tokens via `@theme`, no config file
- **MDX** — blog posts written in Markdown with frontmatter
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** — frontmatter parsing
- **[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)** — MDX rendering in React Server Components

## How the blog works

Posts live in `/content/posts/` as `.mdx` files. Each post has frontmatter:

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

Images go in `/public/images/posts/`. The site rebuilds statically — every post is pre-rendered at build time.

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
