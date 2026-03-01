import Image from "next/image";
import type { Post } from "@/types/post";

interface PostHeaderProps {
  post: Post;
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <header style={{ marginBottom: "3rem" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1.5rem 0",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--color-forest)",
            marginBottom: "1rem",
          }}
        >
          {post.category}
        </span>

        <h1
          style={{
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--color-ink)",
            maxWidth: "20ch",
            marginBottom: "1.25rem",
          }}
        >
          {post.title}
        </h1>

        <div
          style={{
            fontSize: "0.9375rem",
            color: "var(--color-ink-muted)",
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            marginBottom: "2.5rem",
          }}
        >
          <span>{post.location}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>{formatDate(post.date)}</span>
        </div>
      </div>

      {post.coverImage && (
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 7",
            overflow: "hidden",
            backgroundColor: "var(--color-forest)",
          }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </header>
  );
}
