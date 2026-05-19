import { ImageResponse } from "next/og";

// Apple touch icon — "7Λ" in Orbitron Black, transparent bg, black text.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fontData = await fetch(
    "https://github.com/google/fonts/raw/main/ofl/sairastencilone/SairaStencilOne-Regular.ttf",
  ).then((res) => res.arrayBuffer());

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
          fontFamily: "Saira Stencil",
          fontSize: 140,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        7Λ
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Saira Stencil", data: fontData, style: "normal", weight: 400 },
      ],
    },
  );
}
