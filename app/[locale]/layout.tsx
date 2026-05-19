import type { Metadata } from "next";
import { IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";

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
  description: "AI · Web · Vibecoding — Heptrai. Solo product studio. Any product turnkey, from idea to launch.",
  openGraph: {
    title: "HΞPTRΛI",
    description: "AI · Web · Vibecoding",
    url: "https://heptrai.xyz",
    siteName: "Heptrai",
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
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
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
