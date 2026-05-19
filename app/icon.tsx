import { ImageResponse } from "next/og";

// Favicon — "7Λ" mark in Orbitron Black (futuristic geometric sans).
// 7 (hepta — seven) + Λ (Greek capital lambda from HΞPTRΛI).
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          fontSize: 24,
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
