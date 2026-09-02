import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function EducationCard() {
  return (
    <section id="education" className="section" style={{ paddingTop: "2rem" }}>
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
            02
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
            学歴 / Education
          </h2>
        </div>

        <div style={{ display: "grid", gap: "20px" }}>
          {profile.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.2rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {edu.school}
                </h3>
                <span style={{ color: "var(--accent-gold)", fontSize: "0.85rem" }}>{edu.period}</span>
              </div>
              <p style={{ color: "var(--accent-parchment)", marginBottom: "8px" }}>{edu.degree}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{edu.notes}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
