import { ImageResponse } from "next/og";

// Apple touch icon — "7Λ" mark on transparent background, black text.
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
          background: "transparent",
          color: "#000000",
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 900,
          fontSize: 130,
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
