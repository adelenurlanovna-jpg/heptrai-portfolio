"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "../components/LocaleSwitcher";

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <LocaleSwitcher />

      <main className="splitform-main">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-stage"
          aria-label="HΞPTRΛI"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/heptra-hero-hd.png"
            srcSet="/heptra-hero-hd@2x.png 1x, /heptra-hero-hd.png 2x"
            alt="HΞPTRΛI — Heptra logo"
            width={2448}
            height={1386}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="hero-img-base"
          />
          <div className="hero-light-sweep" aria-hidden="true">
            <div className="hero-light-sweep-band" />
            <div className="hero-light-sparkle-band" />
          </div>
          <div className="hero-grain" aria-hidden="true" />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="profile-card"
          aria-label="Profile"
        >
          <div className="profile-avatar" aria-hidden="true">
            <Image
              src="/avatar-256.png"
              alt=""
              width={160}
              height={160}
              priority
              className="profile-avatar-img"
            />
          </div>

          <div className="profile-body">
            <div className="profile-header">
              <h1 className="profile-name">{t("profile.name")}</h1>
              <span className="profile-handle">{t("profile.handle")}</span>
            </div>

            <div className="profile-capabilities" aria-label="Capabilities">
              <span className="profile-capability">{t("pills.aiAgents")}</span>
              <span className="profile-capability">{t("pills.bots")}</span>
              <span className="profile-capability">{t("pills.landings")}</span>
              <span className="profile-capability">{t("pills.platforms")}</span>
              <span className="profile-capability">{t("pills.automations")}</span>
              <span className="profile-capability profile-capability-wildcard">{t("pills.wildcard")}</span>
            </div>

            <p className="profile-tagline">{t("tagline")}</p>
          </div>
        </motion.section>

        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="social-row"
          aria-label="Social links"
        >
          <a href="https://heptrai.xyz" className="social-icon" aria-label={t("social.website")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
          <a href="https://x.com/heptrai" className="social-icon" aria-label={t("social.twitter")}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://t.me/heptrai" className="social-icon" aria-label={t("social.telegram")}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/adelya-keutayeva-1202673a7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={t("social.linkedin")}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a
            href="https://github.com/adelenurlanovna-jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={t("social.github")}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.27-.01-.99-.02-1.95-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.26 5.69.42.36.79 1.07.79 2.16 0 1.56-.02 2.81-.02 3.19 0 .31.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
        </motion.nav>

        <motion.a
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          href="https://t.me/heptrai_channel"
          className="tg-cta"
        >
          {t("tgCta")}
          <svg className="tg-cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </motion.a>

        <div className="section-label">{t("sections.studio")}</div>
        <a href="https://heptrai.xyz/studio" className="entity-card">
          <div className="entity-icon" aria-hidden="true">Λ</div>
          <div className="entity-body">
            <h3 className="entity-title">{t("studio.title")}</h3>
            <p className="entity-subtitle">{t("studio.subtitle")}</p>
          </div>
          <svg className="entity-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>

        <div className="section-label">{t("sections.projects")}</div>
        <a
          href="https://qosvanta.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="entity-card"
        >
          <div className="entity-icon entity-icon-image" aria-hidden="true">
            <Image
              src="/project-qosvanta.png"
              alt=""
              width={96}
              height={96}
            />
          </div>
          <div className="entity-body">
            <h3 className="entity-title">{t("projects.qosvanta.title")}</h3>
            <p className="entity-subtitle">{t("projects.qosvanta.subtitle")}</p>
          </div>
          <svg className="entity-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
        <a href="#project-1" className="entity-card">
          <div className="entity-icon" aria-hidden="true">LP</div>
          <div className="entity-body">
            <h3 className="entity-title">{t("projects.landingProtocol.title")}</h3>
            <p className="entity-subtitle">{t("projects.landingProtocol.subtitle")}</p>
          </div>
          <svg className="entity-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
        <a href="#project-3" className="entity-card">
          <div className="entity-icon entity-icon-alt-2" aria-hidden="true">O</div>
          <div className="entity-body">
            <h3 className="entity-title">{t("projects.onyx.title")}</h3>
            <p className="entity-subtitle">{t("projects.onyx.subtitle")}</p>
          </div>
          <svg className="entity-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>

        <footer className="page-footer">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.domain")}</span>
        </footer>
      </main>
    </>
  );
}
