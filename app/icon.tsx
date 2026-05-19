import { ImageResponse } from "next/og";

// Default Next.js favicon — appears in browser tab, bookmarks, history.
// HΛI monogram: H white, Λ cyan #00FFD1, I white. Dark background.
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
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: "-0.06em",
          lineHeight: 1,
          color: "#ffffff",
        }}
      >
        <span>H</span>
        <span style={{ color: "#00FFD1" }}>Λ</span>
        <span>I</span>
      </div>
    ),
    { ...size },
  );
}
