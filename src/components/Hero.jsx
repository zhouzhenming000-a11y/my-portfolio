import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ position: "relative" }}
      >
        <p
          style={{
            color: "var(--accent-red)",
            fontSize: "0.8rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          — 人間以上、死神未満 —
        </p>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "var(--text-primary)",
            marginBottom: "1.5rem",
          }}
        >
          {profile.name}
        </h1>

        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1rem, 2vw, 1.4rem)",
            color: "var(--accent-gold)",
            letterSpacing: "0.15em",
            marginBottom: "2rem",
          }}
        >
          {profile.tagline}
        </p>

        <p
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            color: "var(--text-muted)",
            fontSize: "1rem",
            lineHeight: 1.8,
          }}
        >
          {profile.summary}
        </p>
      </motion.div>

      <motion.a
        href="#experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "40px",
          color: "var(--text-muted)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
        }}
      >
        <span>SCROLL</span>
        <ChevronDown size={20} />
      </motion.a>

      <div
        className="vertical-accent"
        style={{
          position: "absolute",
          right: "24px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        新しい世界の神
      </div>
    </section>
  );
}
