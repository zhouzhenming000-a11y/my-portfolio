import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function SkillsGrid() {
  const categories = Object.entries(profile.skills);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div style={{ marginBottom: "3rem" }}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.9rem",
              color: "var(--accent-red)",
              fontWeight: 700,
            }}
          >
            03
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "var(--accent-gold)",
              textShadow: "0 0 24px var(--accent-gold-dim)",
            }}
          >
            技術 / Skills
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1rem",
                  color: "var(--accent-red)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {items.map((skill) => {
                  const name = typeof skill === "string" ? skill : skill.name;
                  const url = typeof skill === "string" ? null : skill.url;
                  const baseStyle = {
                    padding: "6px 14px",
                    borderRadius: "999px",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontSize: "0.85rem",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                    display: "inline-block",
                    cursor: url ? "pointer" : "default",
                  };
                  const hoverIn = (e) => {
                    e.currentTarget.style.borderColor = "var(--accent-gold)";
                    e.currentTarget.style.color = "var(--accent-gold)";
                  };
                  const hoverOut = (e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  };

                  return url ? (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={baseStyle}
                      onMouseEnter={hoverIn}
                      onMouseLeave={hoverOut}
                    >
                      {name}
                    </a>
                  ) : (
                    <span
                      key={name}
                      style={baseStyle}
                      onMouseEnter={hoverIn}
                      onMouseLeave={hoverOut}
                    >
                      {name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
