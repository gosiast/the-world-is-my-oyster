import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import type { Post } from "@/types/post";

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "5rem 1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: "2.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--color-ink)",
          }}
        >
          From the journal
        </h2>

        <Link
          href="/blog"
          style={{
            fontSize: "0.875rem",
            color: "var(--color-forest)",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          View all articles →
        </Link>
      </div>

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
