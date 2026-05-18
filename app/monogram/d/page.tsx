"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function MonogramDPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#141414]">
      <div className="relative flex items-center justify-center">
        <div
          className="absolute left-1/2 top-1/2 z-0 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2"
          style={{
            maskImage:
              "radial-gradient(circle, #000 35%, rgba(0,0,0,0.5) 60%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(circle, #000 35%, rgba(0,0,0,0.5) 60%, transparent 85%)",
          }}
        >
          <MeshGradient
            colors={["#00FFD1", "#0a8870", "#062628", "#141414", "#1ad9b0"]}
            distortion={1.0}
            swirl={0.35}
            grainMixer={0.55}
            grainOverlay={0.18}
            speed={0.6}
            scale={1.4}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="280"
          height="280"
          className="relative z-[2]"
          aria-label="HΞ monogram"
        >
          <rect x="20" y="30" width="24" height="140" fill="#ffffff" />
          <rect x="72" y="30" width="24" height="140" fill="#ffffff" />
          <rect x="20" y="88" width="76" height="24" fill="#ffffff" />
          <rect x="116" y="30" width="64" height="20" fill="#ffffff" />
          <rect x="120" y="90" width="56" height="20" fill="#ffffff" />
          <rect x="116" y="150" width="64" height="20" fill="#ffffff" />
        </svg>
      </div>
    </main>
  );
}
