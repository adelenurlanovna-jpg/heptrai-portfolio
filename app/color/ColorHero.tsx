"use client";

import { motion } from "framer-motion";

export type ColorHeroProps = {
  /** Brand name to show under the logo */
  name: string;
  /** Hex of the tint color applied to chrome (e.g. "#FF006E") */
  tint: string;
  /** Hex of the warm halo glow around the logo */
  halo: string;
  /** Hex of the light sweep peak (usually white-leaning) */
  sweepPeak: string;
  /** Hex of the light sweep mid (warm shoulder of peak) */
  sweepMid: string;
};

/**
 * Hero composition shared by all /color/* variants:
 *
 *   [0] chrome logo PNG
 *   [1] tint overlay (mix-blend-mode: color) — replaces hue, keeps metallic shine
 *   [2] diagonal light sweep band — masked to chrome silhouette
 *   [3] subtle grain — masked to silhouette
 *
 * Every layer above [0] inherits the chrome silhouette via mask-image
 * so it stays within the logo shape — no rectangular halos.
 */
export default function ColorHero({
  name,
  tint,
  halo,
  sweepPeak,
  sweepMid,
}: ColorHeroProps) {
  // Build the gradient inline so each variant gets distinctly colored sweep
  const sweepGradient = `linear-gradient(
    135deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0) 36%,
    ${sweepMid} 44%,
    ${sweepPeak} 50%,
    ${sweepMid} 56%,
    rgba(255,255,255,0) 64%,
    rgba(255,255,255,0) 100%
  )`;

  // Tint overlay uses mix-blend-mode: color → preserves luminosity (metallic shine)
  // but replaces hue with the chosen brand color.

  // Halo is just a warm rgba drop-shadow stack at the variant's color
  const haloFilter = `
    drop-shadow(0 0 10px ${halo}66)
    drop-shadow(0 0 30px ${halo}40)
    drop-shadow(0 0 80px ${halo}22)
  `;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="hero-stage"
        aria-label={name}
      >
        {/* Layer 0 — chrome base */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/heptra-hero-hd.png"
          srcSet="/heptra-hero-hd@2x.png 1x, /heptra-hero-hd.png 2x"
          alt={name}
          className="color-hero-base"
          style={{ filter: haloFilter }}
        />

        {/* Layer 1 — color tint over chrome */}
        <div
          className="color-hero-tint"
          aria-hidden="true"
          style={{ backgroundColor: tint }}
        />

        {/* Layer 2 — animated diagonal light sweep */}
        <div className="color-hero-sweep" aria-hidden="true">
          <div
            className="color-hero-sweep-band"
            style={{ background: sweepGradient }}
          />
        </div>

        {/* Layer 3 — grain */}
        <div className="color-hero-grain" aria-hidden="true" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 font-mono text-[11px] uppercase tracking-[0.2em] text-meta"
      >
        {name} · {tint.toUpperCase()}
      </motion.p>
    </main>
  );
}
