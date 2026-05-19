"use client";

import { motion } from "framer-motion";

/**
 * /v3 — Chrome card variant
 * Same layout as main page, but profile card uses iridescent chrome material
 * (hot pink + gold + cyan) matching the HEPTRA logo's palette. Material unity.
 */
export default function V3Page() {
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
        className="profile-card profile-card-chrome"
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
          <div className="profile-capabilities" aria-label="Capabilities">
            <span className="profile-capability">AI-агенты</span>
            <span className="profile-capability">Боты</span>
            <span className="profile-capability">Лендинги</span>
            <span className="profile-capability">Платформы</span>
            <span className="profile-capability">Автоматизации</span>
            <span className="profile-capability profile-capability-wildcard">+ что угодно</span>
          </div>
          <p className="profile-tagline">Любой продукт под ключ. От идеи к запуску.</p>
        </div>
      </motion.section>

      <div style={{ marginTop: 32, fontSize: 10, color: "#666", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        v3 · Chrome card
      </div>
    </main>
  );
}
