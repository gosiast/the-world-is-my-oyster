import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostFrontmatter, PostWithContent } from "@/types/post";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return { ...(data as PostFrontmatter), slug };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): PostWithContent {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return { ...(data as PostFrontmatter), slug, content };
}

export function getFeaturedPosts(count: number = 3): Post[] {
  return getAllPosts().slice(0, count);
}
