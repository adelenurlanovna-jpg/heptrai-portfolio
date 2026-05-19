import { ImageResponse } from "next/og";

// Apple touch icon — "7AI" mark on transparent background.
// iOS will composite it onto the user's chosen home screen wallpaper.
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
          color: "#00FFD1",
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 900,
          fontSize: 90,
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
