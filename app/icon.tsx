import { ImageResponse } from "next/og";

// Favicon — single Λ mark (Stripe/Vercel-style minimalism).
// Crisp brand cyan glyph on near-black, readable at 16×16 to 32×32.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#00FFD1",
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 900,
          fontSize: 28,
          lineHeight: 1,
        }}
      >
        Λ
      </div>
    ),
    { ...size },
  );
}
