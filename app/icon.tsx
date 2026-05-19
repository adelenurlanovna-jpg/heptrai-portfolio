import { ImageResponse } from "next/og";

// Favicon — "7Λ" mark on transparent background, black text.
// 7 (hepta — seven) + Λ (Greek capital lambda, brand letter from HΞPTRΛI).
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
          background: "transparent",
          color: "#000000",
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 900,
          fontSize: 24,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        7Λ
      </div>
    ),
    { ...size },
  );
}
