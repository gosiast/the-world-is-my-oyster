import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-forest)",
        color: "var(--color-cream)",
        padding: "3rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              marginBottom: "0.375rem",
            }}
          >
            The World Is My Oyster
          </p>
          <p style={{ fontSize: "0.9375rem", opacity: 0.7 }}>
            A travel journal — stories, places, and the art of getting lost.
          </p>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "0.875rem",
              color: "var(--color-cream)",
              textDecoration: "none",
              opacity: 0.75,
            }}
          >
            Home
          </Link>
          <Link
            href="/blog"
            style={{
              fontSize: "0.875rem",
              color: "var(--color-cream)",
              textDecoration: "none",
              opacity: 0.75,
            }}
          >
            Blog
          </Link>
        </nav>

        <p style={{ fontSize: "0.8125rem", opacity: 0.5 }}>
          © {year} The World Is My Oyster. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
