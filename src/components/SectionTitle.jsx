import { motion } from "framer-motion";

export default function SectionTitle({ number, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ marginBottom: "3rem" }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.9rem",
            color: "var(--accent-red)",
            fontWeight: 700,
          }}
        >
          {number}
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
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          style={{
            marginTop: "8px",
            color: "var(--text-muted)",
            fontSize: "0.95rem",
            maxWidth: "600px",
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
