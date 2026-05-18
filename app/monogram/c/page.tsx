"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function MonogramCPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#141414] flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div
          className="absolute z-0"
          style={{
            width: 640,
            height: 640,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
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
          viewBox="0 0 200 200"
          width={280}
          height={280}
          className="relative z-[2]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="100,20 20,170 180,170" fill="#ffffff" />
          <line x1="100" y1="20" x2="60" y2="170" stroke="#141414" strokeWidth="2" />
          <line x1="100" y1="20" x2="100" y2="170" stroke="#141414" strokeWidth="2" />
          <line x1="100" y1="20" x2="140" y2="170" stroke="#141414" strokeWidth="2" />
          <polygon points="30,170 170,170 160,188 40,188" fill="#ffffff" />
        </svg>
      </div>
    </main>
  );
}
