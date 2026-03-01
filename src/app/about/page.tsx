import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Hi, I'm Gosia — former English teacher turned frontend developer, currently based in Barcelona.",
};

const countries = ["Poland", "Italy", "Spain", "Malta", "UK"];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--color-cream)", minHeight: "100vh" }}>

      {/* Hero */}
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "5rem 1.5rem 3rem",
        }}
      >
        <p
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--color-forest)",
            marginBottom: "1.25rem",
          }}
        >
          About
        </p>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--color-ink)",
            marginBottom: "2rem",
          }}
        >
          Hi, I&apos;m Gosia.
        </h1>

        <div style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "var(--color-ink)" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Short for Małgorzata — Polish by origin, Barcelona by choice, and everywhere else by curiosity.
            I&apos;ve lived and worked across six countries and somehow that number keeps growing.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            I spent years teaching English around the world — Italy, Spain, Malta, the UK — before making the leap
            into frontend development in 2022. No CS degree, no bootcamp. Just a lot of persistence, late nights, and
            a firm belief that it&apos;s never too late to change direction.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Today I&apos;m a frontend developer working with React, TypeScript, Next.js, and Tailwind. I&apos;ve contributed to
            DeFi platforms, compliance tooling, and internal developer tools. But this blog isn&apos;t about that.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            This blog is about the other thing I&apos;ve always done: move. Explore. Show up somewhere new and figure it out.
          </p>
          <p>
            I&apos;ve always lived by the phrase{" "}
            <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>
              &ldquo;the world is your oyster&rdquo;
            </em>
            {" "}— and I genuinely mean it. I write here about the places I go, the things I notice, and what travel
            gives you that nothing else quite does.
          </p>
        </div>
      </section>

      {/* Countries */}
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "2rem 1.5rem",
          borderTop: "1px solid rgba(55,84,109,0.12)",
        }}
      >
        <p
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--color-forest)",
            marginBottom: "1.25rem",
          }}
        >
          Lived in
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
          {countries.map((country) => (
            <span
              key={country}
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                backgroundColor: "var(--color-surface)",
                color: "var(--color-ink)",
                border: "1px solid rgba(55,84,109,0.2)",
                borderRadius: "999px",
                padding: "0.375rem 1rem",
              }}
            >
              {country}
            </span>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "2rem 1.5rem",
          borderTop: "1px solid rgba(55,84,109,0.12)",
        }}
      >
        <p
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--color-forest)",
            marginBottom: "1.25rem",
          }}
        >
          Languages
        </p>
        <p style={{ fontSize: "1rem", color: "var(--color-ink)", lineHeight: 1.6 }}>
          Polish · English · Spanish · Italian · Portuguese (learning)
        </p>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "3rem 1.5rem 6rem",
          borderTop: "1px solid rgba(55,84,109,0.12)",
        }}
      >
        <p style={{ fontSize: "1rem", color: "var(--color-ink-muted)", marginBottom: "1.5rem" }}>
          Want to read about where I&apos;ve been?
        </p>
        <Link
          href="/blog"
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
          Read the blog →
        </Link>
      </section>

    </div>
  );
}
