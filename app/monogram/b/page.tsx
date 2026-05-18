"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function MonogramBPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#141414] flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          style={{
            width: "640px",
            height: "640px",
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
          aria-label="Monogram 7"
        >
          <rect x="20" y="20" width="160" height="34" fill="#ffffff" />
          <rect x="146" y="54" width="34" height="34" fill="#ffffff" />
          <rect x="120" y="82" width="34" height="34" fill="#ffffff" />
          <rect x="94" y="110" width="34" height="34" fill="#ffffff" />
          <rect x="68" y="138" width="34" height="34" fill="#ffffff" />
          <rect x="42" y="166" width="34" height="14" fill="#ffffff" />
        </svg>
      </div>
    </main>
  );
}
