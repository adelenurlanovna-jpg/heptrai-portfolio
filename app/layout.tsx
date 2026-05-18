import type { Metadata } from "next";
import { IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ibmPlex = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HΞPTRΛI — Adele Keutayeva",
  description: "AI · Web · Vibecoding — личный сайт Adele Keutayeva, основательницы Heptrai.",
  openGraph: {
    title: "HΞPTRΛI",
    description: "AI · Web · Vibecoding",
    url: "https://heptrai.xyz",
    siteName: "Heptrai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${ibmPlex.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        {/* Preload the hero PNG. Both <img> and mask-image use this URL —
            preloading prevents the "logo jumps" flash on first paint while
            the browser is still fetching the asset for the CSS masks. */}
        <link
          rel="preload"
          as="image"
          href="/heptra-hero-hd.png"
          fetchPriority="high"
        />
        <link rel="preload" as="image" href="/heptra-hero-hd@2x.png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
