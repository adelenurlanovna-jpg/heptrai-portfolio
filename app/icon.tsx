import { ImageResponse } from "next/og";

// Favicon — "7AI" mark on transparent background (no black square).
// Adapts to whatever browser tab color renders behind it.
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
          color: "#00FFD1",
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 900,
          fontSize: 16,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        7AI
      </div>
    ),
    { ...size },
  );
}
