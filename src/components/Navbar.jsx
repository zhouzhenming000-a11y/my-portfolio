import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "var(--accent-gold)",
          letterSpacing: "0.1em",
        }}
      >
        私の名は
      </a>
      <div style={{ display: "flex", gap: "24px" }}>
        {[
          { label: "経歴", href: "#experience" },
          { label: "学歴", href: "#education" },
          { label: "技術", href: "#skills" },
          { label: "連絡", href: "#contact" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
