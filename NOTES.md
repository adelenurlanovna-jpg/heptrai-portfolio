# Heptrai — справочный лист

## 🔒 Откат к утверждённому состоянию логотипа

Если что-то сломается или захочется вернуться к финальной версии лого (утверждена 18.05.2026):

```bash
cd ~/heptrai
git checkout 9b1e060 -- app/globals.css app/page.tsx app/layout.tsx
```

**Commit:** `9b1e060` — `feat(hero): approved Heptra logo composition`

Что в этом коммите:
- Chrome HEPTRA + 7 на прозрачном фоне, HD
- 3-цветная волна (pink → gold → cyan), 3.6s
- Counter-sparkle 6s
- Soft grain noise
- Warm-gold drop-shadow halo
- glowBurst pulse

Посмотреть полный список изменений:
```bash
git show 9b1e060 --stat
```

---

## 🎨 Бренд за минуту

| | |
|---|---|
| **Имя** | Heptrai · читается «хептра-ай» |
| **Wordmark** | `HΞPTRΛI` (Xi + Lambda в греческом) |
| **Концепт** | hepta (7 по-греч.) + AI |
| **Палитра логотипа** | cyan + pink (хром) + gold (волна-акцент) |
| **Фон страницы** | `#0a0a0a` (тёплый чёрный) |
| **Шрифты** | IBM Plex Mono + JetBrains Mono |

### Файлы логотипа
- `public/heptra-hero-hd.png` — 2448×1386 для Retina
- `public/heptra-hero-hd@2x.png` — 1632×924
- Бэкап оригинала: `~/Мое портфолио./logo-concepts/source/_originals/`

---

## 🌐 Домены (планируется купить)

- **Primary:** `heptrai.xyz` (free, ~$2-15/год) — splitform-style
- **Защитный:** `heptrai.com` (~$10-15/год) с 301 redirect
- Также свободны: `heptrai.ai`, `heptrai.io`

---

## 💻 Dev-окружение

```bash
cd ~/heptrai
npm run dev          # запуск dev-сервера
```

Открывается на: **http://localhost:3001** (порт 3000 занят QOSVANTA)

### Альтернативные страницы для просмотра
- `/` — главная (утверждённый логотип)
- `/color` — индекс цветовых вариантов
- `/color/magenta` — magenta-вариант
- `/color/sapphire` — sapphire-вариант
- `/color/violet` — violet-вариант

---

## 🔑 Ключи API (отдельно в `.env.local` — не в git)

`GEMINI_API_KEY` — для design skill / генерации логотипов через Nano Banana.
Сохранён в `~/heptrai/.env.local`. Если потеряется — взять заново на https://aistudio.google.com/apikey

---

## 📋 TODO дальше (следующие шаги)

- [ ] Контент под логотипом: имя «Adele Keutayeva» + tagline
- [ ] Glassmorphism-карточка профиля (370×176) с био
- [ ] Pill-кнопка Telegram канал
- [ ] Секция «Моя студия» с app-icon
- [ ] Секция «Проекты и кейсы» (Landing Protocol, QOSVANTA, ONYX, Real Estate, Skin Aggregator)
- [ ] Socials (X, Telegram, LinkedIn)
- [ ] Покупка `heptrai.xyz` и `heptrai.com`
- [ ] Деплой на Vercel
- [ ] Аналитика (Plausible)

---

## 🧱 Стек

- Next.js 16 (App Router) + TypeScript
- React 19
- Tailwind v4
- Framer Motion
- Paper Shaders (@paper-design/shaders-react) — установлен, в текущей версии не используется (можно вернуть для атмосферного фона позже)

---

## 📚 План разработки

Полный план хранится в:
```
~/.claude/plans/https-zerobrand-xyz-splitf0rm-utm-source-stateless-journal.md
```
