import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.9rem",
                color: "var(--accent-red)",
                fontWeight: 700,
              }}
            >
              01
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: "var(--accent-gold)",
                textShadow: "0 0 24px var(--accent-gold-dim)",
                marginBottom: "3rem",
              }}
            >
              経歴 / Experience
            </h2>
          </div>
          <div className="vertical-accent" style={{ fontSize: "0.8rem" }}>
            過去を知る
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "8px",
              top: "8px",
              bottom: "8px",
              width: "1px",
              background: "linear-gradient(180deg, var(--accent-gold), var(--accent-red), transparent)",
            }}
          />

          {profile.experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              style={{
                position: "relative",
                paddingLeft: "40px",
                paddingBottom: "3rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "8px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-primary)",
                  border: "2px solid var(--accent-gold)",
                  boxShadow: "0 0 12px var(--accent-gold-dim)",
                }}
              />

              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  padding: "24px",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.25rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {job.role}
                  </h3>
                  <span style={{ color: "var(--accent-gold)", fontSize: "0.85rem" }}>
                    {job.start} — {job.end}
                  </span>
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "16px" }}>
                  {job.company} · {job.location}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      style={{
                        position: "relative",
                        paddingLeft: "18px",
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "var(--accent-red)",
                        }}
                      >
                        ›
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
