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
    </main>
  );
}
