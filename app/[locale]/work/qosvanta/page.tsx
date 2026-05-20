"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "../../../components/LocaleSwitcher";
import { Link } from "../../../../i18n/navigation";

const LIVE_URL = "https://qosvanta.vercel.app";

export default function QosvantaCase() {
  const t = useTranslations();

  return (
    <>
      <LocaleSwitcher />

      <main className="splitform-main case-main">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="case-nav"
        >
          <Link href="/" className="case-back">{t("case.back")}</Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="case-header"
        >
          <h1 className="case-title">{t("cases.qosvanta.title")}</h1>
          <p className="case-subtitle">{t("cases.qosvanta.subtitle")}</p>
        </motion.header>

        <motion.dl
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="case-meta"
        >
          <div className="case-meta-row">
            <dt>{t("case.meta.year")}</dt>
            <dd>{t("cases.qosvanta.year")}</dd>
          </div>
          <div className="case-meta-row">
            <dt>{t("case.meta.role")}</dt>
            <dd>{t("cases.qosvanta.role")}</dd>
          </div>
          <div className="case-meta-row">
            <dt>{t("case.meta.stack")}</dt>
            <dd>{t("cases.qosvanta.stack")}</dd>
          </div>
          <div className="case-meta-row">
            <dt>{t("case.meta.status")}</dt>
            <dd>{t("cases.qosvanta.status")}</dd>
          </div>
        </motion.dl>

        <motion.a
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="case-cover"
          aria-label={t("case.visitLive")}
        >
          <Image
            src="/work-qosvanta-cover.jpg"
            alt="QOSVANTA — Payment Solutions Marketplace"
            width={1440}
            height={900}
            className="case-cover-img"
            priority
          />
          <span className="case-cover-overlay">{t("case.visitLive")}</span>
        </motion.a>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="case-content"
        >
          <div className="case-section">
            <h2 className="case-section-label">{t("case.sections.overview")}</h2>
            <p className="case-section-text">{t("cases.qosvanta.overview")}</p>
          </div>

          <div className="case-section">
            <h2 className="case-section-label">{t("case.sections.problem")}</h2>
            <p className="case-section-text">{t("cases.qosvanta.problem")}</p>
          </div>

          <div className="case-section">
            <h2 className="case-section-label">{t("case.sections.approach")}</h2>
            <p className="case-section-text">{t("cases.qosvanta.approach")}</p>
          </div>

          <div className="case-section">
            <h2 className="case-section-label">{t("case.sections.outcome")}</h2>
            <p className="case-section-text">{t("cases.qosvanta.outcome")}</p>
          </div>
        </motion.section>

        <motion.aside
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="case-cta"
        >
          <h3 className="case-cta-title">{t("case.ctaTitle")}</h3>
          <p className="case-cta-text">{t("case.ctaText")}</p>
          <a
            href="https://t.me/heptrai"
            target="_blank"
            rel="noopener noreferrer"
            className="case-cta-button"
          >
            {t("case.ctaButton")} ↗
          </a>
        </motion.aside>

        <footer className="page-footer">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.domain")}</span>
        </footer>
      </main>
    </>
  );
}
