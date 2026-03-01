import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "var(--color-cream)",
        borderBottom: "1px solid rgba(55,84,109,0.12)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--color-forest)",
            textDecoration: "none",
          }}
        >
          The World Is My Oyster
        </Link>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            listStyle: "none",
          }}
        >
          <li>
            <Link
              href="/"
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-ink)",
                textDecoration: "none",
                opacity: 0.8,
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-ink)",
                textDecoration: "none",
                opacity: 0.8,
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-ink)",
                textDecoration: "none",
                opacity: 0.8,
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                backgroundColor: "var(--color-amber)",
                color: "var(--color-ink)",
                textDecoration: "none",
                padding: "0.5rem 1.125rem",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              All posts →
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
