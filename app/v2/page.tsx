"use client";

import { motion } from "framer-motion";

/**
 * /v2 — Mini glass watermark (same as current main page)
 * Smaller card overlaps the 7's leg, chrome shows through the glass.
 */
export default function V2Page() {
  return (
    <main className="splitform-main">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-stage"
        aria-label="HΞPTRΛI"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/heptra-hero-hd.png"
          srcSet="/heptra-hero-hd@2x.png 1x, /heptra-hero-hd.png 2x"
          alt="HΞPTRΛI — Heptra logo"
          width={2448}
          height={1386}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="hero-img-base"
        />
        <div className="hero-light-sweep" aria-hidden="true">
          <div className="hero-light-sweep-band" />
          <div className="hero-light-sparkle-band" />
        </div>
        <div className="hero-grain" aria-hidden="true" />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="profile-card"
        aria-label="Profile"
      >
        <div className="profile-avatar" aria-hidden="true">
          <span className="profile-avatar-initials">AK</span>
        </div>
        <div className="profile-body">
          <div className="profile-header">
            <h1 className="profile-name">Adele</h1>
            <span className="profile-handle">HΞPTRΛI</span>
          </div>
          <span className="profile-tag">AI, Web3 &amp; Vibecoding</span>
          <p className="profile-bio">
            Делаем полный цикл запуска продуктов в Web3, AI и тех. направлениях
          </p>
        </div>
      </motion.section>

      <div style={{ marginTop: 32, fontSize: 10, color: "#666", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        v2 · Mini glass (current main)
      </div>
    </main>
  );
}
