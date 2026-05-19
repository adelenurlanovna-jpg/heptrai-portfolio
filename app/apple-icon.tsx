import { ImageResponse } from "next/og";

// Apple touch icon — single Λ mark on a subtle chrome-tinted gradient.
// Larger 180×180 — same design language as the 32×32 favicon, just more room.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1a0a14 0%, #0a0a0a 50%, #001a16 100%)",
          color: "#00FFD1",
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 900,
          fontSize: 140,
          lineHeight: 1,
        }}
      >
        Λ
      </div>
    ),
    { ...size },
  );
}
