"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function MonogramAPage() {
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
          className="relative z-[2] h-[280px] w-[280px]"
          aria-label="Monogram H"
        >
          <rect x="30" y="20" width="36" height="160" fill="#ffffff" />
          <rect x="134" y="20" width="36" height="160" fill="#ffffff" />
          <rect x="30" y="82" width="140" height="36" fill="#ffffff" />
        </svg>
      </div>
    </main>
  );
}
