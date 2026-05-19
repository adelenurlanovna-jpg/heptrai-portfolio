import { ImageResponse } from "next/og";

// Apple touch icon — when user adds the site to iPhone/iPad home screen.
// Larger 180×180, more breathing room, rounded chrome-tinted background.
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
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 900,
          fontSize: 90,
          letterSpacing: "-0.08em",
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
