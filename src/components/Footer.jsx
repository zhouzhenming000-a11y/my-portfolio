import { Mail, Code, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "4rem 0",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "24px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--accent-gold)",
              textShadow: "0 0 24px var(--accent-gold-dim)",
            }}
          >
            連絡先 / Contact
          </h2>

          <p style={{ color: "var(--text-muted)", maxWidth: "480px" }}>
            Interested in working together? Send a message and I will respond when the time is right.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href={`mailto:${profile.contact.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
                color: "var(--text-primary)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-gold)";
                e.currentTarget.style.color = "var(--accent-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              <Mail size={18} />
              <span>{profile.contact.email}</span>
            </a>
          </div>

          <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
            <a href={profile.contact.github} aria-label="GitHub" style={{ color: "var(--text-muted)" }}>
              <Code size={22} />
            </a>
            <a href={profile.contact.linkedin} aria-label="LinkedIn" style={{ color: "var(--text-muted)" }}>
              <ExternalLink size={22} />
            </a>
          </div>

          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "1rem" }}>
            © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
          </p>
        </div>
      </div>
    </footer>
  );
}
