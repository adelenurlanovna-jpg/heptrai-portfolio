"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { LocaleSwitcher } from "../../../components/LocaleSwitcher";

/* Cycle delays (in seconds) for the animated chat in the hero.
   Each entry blocks until the prior animation visually settles. */
const D = {
  user1: 0.4,
  typing: 1.4,
  agent1: 3.0,
  agent2: 3.9,
  agent3: 5.6,
};

export default function ArmanPage() {
  const t = useTranslations("arman");
  const locale = useLocale();

  return (
    <>
      <LocaleSwitcher />

      <main className="splitform-main arman-main">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="arman-nav"
        >
          <a href={`/${locale}`} className="arman-back">{t("back")}</a>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="arman-header"
        >
          <h1 className="arman-title">{t("title")}</h1>
          <p className="arman-subtitle">{t("subtitle")}</p>
          <p className="arman-lead">{t("lead")}</p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="arman-chat"
          aria-label="Sample dialog"
        >
          <div className="arman-chat-header">
            <span className="arman-chat-dot" />
            <span className="arman-chat-dot" />
            <span className="arman-chat-dot" />
            <span className="arman-chat-title">Telegram · @adele_keutayeva</span>
          </div>

          <div className="arman-chat-body">
            <div className="arman-bubble arman-bubble-user" style={{ animationDelay: `${D.user1}s` }}>
              {t("dialog.user1")}
            </div>

            <div className="arman-typing" style={{ animationDelay: `${D.typing}s` }}>
              <span className="arman-typing-label">Arman</span>
              <span className="arman-typing-dots">
                <span /><span /><span />
              </span>
              <span className="arman-typing-text">{t("dialog.typing")}</span>
            </div>

            <div className="arman-bubble arman-bubble-agent" style={{ animationDelay: `${D.agent1}s` }}>
              {t("dialog.agent1")}
            </div>

            <div className="arman-bubble arman-bubble-agent" style={{ animationDelay: `${D.agent2}s` }}>
              {t("dialog.agent2").split("\n").map((line, i) => (
                <span key={i} className="arman-bubble-line">{line}</span>
              ))}
            </div>

            <div className="arman-bubble arman-bubble-agent arman-bubble-final" style={{ animationDelay: `${D.agent3}s` }}>
              {t("dialog.agent3")}
            </div>
          </div>
        </motion.section>

        <section className="arman-section">
          <div className="arman-section-label">{t("capabilitiesLabel")}</div>
          <div className="arman-caps">
            <div className="arman-cap">
              <div className="arman-cap-title">{t("capabilities.receive.title")}</div>
              <p className="arman-cap-text">{t("capabilities.receive.text")}</p>
            </div>
            <div className="arman-cap">
              <div className="arman-cap-title">{t("capabilities.execute.title")}</div>
              <p className="arman-cap-text">{t("capabilities.execute.text")}</p>
            </div>
            <div className="arman-cap">
              <div className="arman-cap-title">{t("capabilities.report.title")}</div>
              <p className="arman-cap-text">{t("capabilities.report.text")}</p>
            </div>
          </div>
        </section>

        <section className="arman-section">
          <div className="arman-section-label">{t("stackLabel")}</div>
          <p className="arman-stack">{t("stack")}</p>
        </section>

        <section className="arman-note">
          <h3 className="arman-note-title">{t("noteTitle")}</h3>
          <p className="arman-note-text">{t("noteText")}</p>
          <a
            href="https://t.me/heptrai"
            target="_blank"
            rel="noopener noreferrer"
            className="arman-cta-button"
          >
            {t("ctaButton")} ↗
          </a>
        </section>

        <footer className="page-footer">
          <span>© 2026</span>
          <span>heptrai.xyz</span>
        </footer>
      </main>
    </>
  );
}
