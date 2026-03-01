import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "All travel stories and journal entries.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--color-ink)",
          marginBottom: "0.5rem",
        }}
      >
        All posts
      </h1>
      <p
        style={{
          fontSize: "1.0625rem",
          color: "var(--color-ink-muted)",
          marginBottom: "3rem",
        }}
      >
        {posts.length} {posts.length === 1 ? "story" : "stories"} and counting.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
