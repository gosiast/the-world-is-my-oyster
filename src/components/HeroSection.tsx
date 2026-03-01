import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types/post";

interface HeroSectionProps {
  post: Post;
}

export default function HeroSection({ post }: HeroSectionProps) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "85vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        backgroundColor: "var(--color-forest-dark)",
      }}
    >
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      )}

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(30,58,47,0.85) 0%, rgba(30,58,47,0.3) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
          width: "100%",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "rgba(242,243,247,0.75)",
            marginBottom: "0.75rem",
          }}
        >
          {post.category}
        </span>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--color-cream)",
            maxWidth: "18ch",
            marginBottom: "1.25rem",
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "rgba(242,243,247,0.8)",
            maxWidth: "45ch",
            marginBottom: "2rem",
          }}
        >
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            backgroundColor: "var(--color-amber)",
            color: "var(--color-ink)",
            fontWeight: 600,
            fontSize: "0.9375rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          Read the story →
        </Link>
      </div>
    </section>
  );
}
