import { ImageResponse } from "next/og";

export const alt = "HΞPTRΛI — Adele Keutayeva";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const taglines: Record<string, { wordmark: string; tagline: string; sub: string }> = {
  en: {
    wordmark: "HΞPTRΛI",
    tagline: "Any product turnkey.",
    sub: "From idea to launch.",
  },
  ru: {
    wordmark: "HΞPTRΛI",
    tagline: "Любой продукт под ключ.",
    sub: "От идеи к запуску.",
  },
  es: {
    wordmark: "HΞPTRΛI",
    tagline: "Cualquier producto llave en mano.",
    sub: "De la idea al lanzamiento.",
  },
  zh: {
    wordmark: "HΞPTRΛI",
    tagline: "任何产品交钥匙。",
    sub: "从概念到上线。",
  },
};

export default async function OG({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = taglines[locale] ?? taglines.en;

  const [sairaStencil, plexMono] = await Promise.all([
    fetch(
      "https://github.com/google/fonts/raw/main/ofl/sairastencilone/SairaStencilOne-Regular.ttf",
    ).then((r) => r.arrayBuffer()),
    fetch(
      "https://github.com/google/fonts/raw/main/ofl/ibmplexmono/IBMPlexMono-Regular.ttf",
    ).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse at 50% 40%, rgba(255, 90, 200, 0.10) 0%, rgba(0, 200, 255, 0.06) 35%, transparent 70%)",
          color: "#ffffff",
          fontFamily: "IBM Plex Mono",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255, 255, 255, 0.55)",
            letterSpacing: "0.04em",
          }}
        >
          <span>Adele Keutayeva</span>
          <span>Portfolio · 2026</span>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -20,
          }}
        >
          <div
            style={{
              fontFamily: "Saira Stencil",
              fontSize: 220,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              background:
                "linear-gradient(180deg, #ffffff 0%, #d8d8d8 55%, #8a8a8a 100%)",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 2px 0 rgba(0,0,0,0.3)",
            }}
          >
            {copy.wordmark}
          </div>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              fontSize: 30,
              color: "rgba(255, 255, 255, 0.85)",
              letterSpacing: "0.01em",
            }}
          >
            <span>{copy.tagline}</span>
            <span style={{ color: "rgba(255, 255, 255, 0.55)" }}>{copy.sub}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.45)",
            letterSpacing: "0.04em",
          }}
        >
          <span>AI · Bots · Landings · Platforms · Automations</span>
          <span>heptrai.xyz</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Saira Stencil", data: sairaStencil, style: "normal", weight: 400 },
        { name: "IBM Plex Mono", data: plexMono, style: "normal", weight: 400 },
      ],
    },
  );
}
