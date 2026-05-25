"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { LocaleSwitcher } from "../../../components/LocaleSwitcher";

/* Cycle delays (in seconds) for Damir's animated dialog. */
const D = {
  user1: 0.4,
  typing: 1.4,
  agent1: 3.0,
  agent2: 3.9,
  agent3: 5.8,
};

const QOSVANTA_URL = "https://qosvanta.vercel.app";

export default function DamirPage() {
  const t = useTranslations("damir");
  const locale = useLocale();

  return (
    <>
      <LocaleSwitcher />

      <main className="splitform-main damir-main">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="damir-nav"
        >
          <a href={`/${locale}`} className="damir-back">{t("back")}</a>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="damir-header"
        >
          <h1 className="damir-title">{t("title")}</h1>
          <p className="damir-subtitle">{t("subtitle")}</p>
        </motion.header>

        <motion.aside
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="damir-scope"
        >
          <div className="damir-scope-label">{t("scopeLabel")}</div>
          <p className="damir-scope-text">{t("scopeText")}</p>
          <a
            href={QOSVANTA_URL}
            className="damir-scope-link"
          >
            {t("openQosvanta")}
          </a>
        </motion.aside>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
          className="damir-chat"
          aria-label="Sample dialog"
        >
          <div className="damir-chat-header">
            <div className="damir-chat-avatar">
              <span />
            </div>
            <div className="damir-chat-meta">
              <span className="damir-chat-name">Damir</span>
              <span className="damir-chat-status">
                <span className="damir-chat-pulse" />
                online · QOSVANTA
              </span>
            </div>
          </div>

          <div className="damir-chat-body">
            <div className="damir-bubble damir-bubble-user" style={{ animationDelay: `${D.user1}s` }}>
              {t("dialog.user1")}
            </div>

            <div className="damir-typing" style={{ animationDelay: `${D.typing}s` }}>
              <span className="damir-typing-label">Damir</span>
              <span className="damir-typing-dots">
                <span /><span /><span />
              </span>
              <span className="damir-typing-text">{t("dialog.typing")}</span>
            </div>

            <div className="damir-bubble damir-bubble-agent" style={{ animationDelay: `${D.agent1}s` }}>
              {t("dialog.agent1")}
            </div>

            <div className="damir-bubble damir-bubble-agent" style={{ animationDelay: `${D.agent2}s` }}>
              {t("dialog.agent2").split("\n").map((line, i) => (
                <span key={i} className="damir-bubble-line">{line}</span>
              ))}
            </div>

            <div className="damir-bubble damir-bubble-agent damir-bubble-final" style={{ animationDelay: `${D.agent3}s` }}>
              {t("dialog.agent3")}
            </div>
          </div>
        </motion.section>

        <section className="damir-section">
          <div className="damir-section-label">{t("capabilitiesLabel")}</div>
          <div className="damir-caps">
            <div className="damir-cap">
              <div className="damir-cap-title">{t("capabilities.advise.title")}</div>
              <p className="damir-cap-text">{t("capabilities.advise.text")}</p>
            </div>
            <div className="damir-cap">
              <div className="damir-cap-title">{t("capabilities.qualify.title")}</div>
              <p className="damir-cap-text">{t("capabilities.qualify.text")}</p>
            </div>
            <div className="damir-cap">
              <div className="damir-cap-title">{t("capabilities.route.title")}</div>
              <p className="damir-cap-text">{t("capabilities.route.text")}</p>
            </div>
          </div>
        </section>

        <section className="damir-section">
          <div className="damir-section-label">{t("stackLabel")}</div>
          <p className="damir-stack">{t("stack")}</p>
        </section>

        <section className="damir-note">
          <h3 className="damir-note-title">{t("noteTitle")}</h3>
          <p className="damir-note-text">{t("noteText")}</p>
          <a
            href={QOSVANTA_URL}
            className="damir-cta-button"
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
