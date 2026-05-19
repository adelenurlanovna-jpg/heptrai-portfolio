import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Supported locales
  locales: ["en", "ru", "es", "zh"],

  // Default locale shown at `/` (without prefix)
  defaultLocale: "en",

  // Always prefix the URL with the locale (e.g. /en, /ru)
  // — clear SEO signal per language, no /default-locale ambiguity.
  localePrefix: "always",

  // Don't auto-detect from Accept-Language header.
  // `/` always redirects to defaultLocale (= /en). Visitors can switch via the picker.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
