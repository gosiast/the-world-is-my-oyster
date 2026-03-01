import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types/post";

interface ArticleCardProps {
  post: Post;
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article>
      <Link
        href={`/blog/${post.slug}`}
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        <div
          style={{
            position: "relative",
            aspectRatio: "4 / 3",
            overflow: "hidden",
            borderRadius: "var(--radius-card)",
            backgroundColor: "var(--color-forest)",
            marginBottom: "1rem",
          }}
        >
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(135deg, var(--color-forest) 0%, var(--color-forest-dark) 100%)`,
              }}
            />
          )}
        </div>

        <div>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-forest)",
              marginBottom: "0.5rem",
            }}
          >
            {post.category}
          </span>

          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
              lineHeight: 1.3,
              color: "var(--color-ink)",
              marginBottom: "0.5rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.title}
          </h2>

          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.5,
              color: "var(--color-ink-muted)",
              marginBottom: "0.75rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.excerpt}
          </p>

          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-ink-muted)",
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <span>{post.location}</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
