"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "../../i18n/navigation";
import { routing } from "../../i18n/routing";
import { useState, useRef, useEffect } from "react";

const FLAGS: Record<string, string> = {
  en: "🇬🇧",
  ru: "🇷🇺",
  es: "🇪🇸",
  zh: "🇨🇳",
};

export function LocaleSwitcher() {
  const t = useTranslations("locale");
  const current = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  function select(locale: string) {
    setOpen(false);
    router.replace(pathname, { locale });
  }

  return (
    <div className="locale-switcher" ref={ref}>
      <button
        type="button"
        className="locale-switcher-button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="locale-switcher-flag" aria-hidden="true">{FLAGS[current]}</span>
        <span className="locale-switcher-code">{current.toUpperCase()}</span>
        <span className="locale-switcher-caret" aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul className="locale-switcher-menu" role="listbox">
          {routing.locales.map((locale) => (
            <li key={locale}>
              <button
                type="button"
                className={`locale-switcher-option ${locale === current ? "is-active" : ""}`}
                onClick={() => select(locale)}
                role="option"
                aria-selected={locale === current}
              >
                <span className="locale-switcher-flag" aria-hidden="true">{FLAGS[locale]}</span>
                <span className="locale-switcher-name">{t(locale as "en" | "ru" | "es" | "zh")}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
