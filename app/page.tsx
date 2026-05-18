"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-stage"
        aria-label="HΞPTRΛI"
      >
        {/* Layer 1 (base): chrome HEPTRA logo, untouched native colors. */}
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

        {/* Layer 2: animated diagonal light sweep, masked to chrome silhouette.
            Two bands stacked: primary diagonal (135°) + perpendicular sparkle (45°) at different speeds. */}
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
