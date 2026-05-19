"use client";

import { motion } from "framer-motion";

/**
 * Page layout matches splitform exactly:
 * - main: 400px wide centered column, padding 0 15px
 * - hero-stage: 428×478 container, wider than the column on both sides
 *   - overflow:hidden clips the logo at top (it extends -68px above)
 *   - z-index -1 so future profile card sits in front
 * - logo: PNG sized to fill the 428px width, native aspect ratio preserved
 */
export default function Home() {
  return (
    <main className="splitform-main">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-stage"
        aria-label="HΞPTRΛI"
      >
        {/* Layer 1 (base): chrome HEPTRA logo. */}
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

        {/* Layer 2: animated diagonal light sweep, masked to chrome silhouette. */}
        <div className="hero-light-sweep" aria-hidden="true">
          <div className="hero-light-sweep-band" />
          <div className="hero-light-sparkle-band" />
        </div>

        {/* Layer 3: subtle grain noise overlay, also masked to silhouette. */}
        <div className="hero-grain" aria-hidden="true" />
      </motion.div>

      {/* ── Profile card (Apple Vision Pro liquid glass) ── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="profile-card"
        aria-label="Profile"
      >
        {/* Avatar — placeholder gradient + initials. Swap for your photo later. */}
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
            <span className="profile-capability profile-capability-wildcard">ваш продукт под ключ</span>
          </div>

          <p className="profile-tagline">Любой продукт под ключ. От идеи к запуску.</p>
        </div>
      </motion.section>
    </main>
  );
}
