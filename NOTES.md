# Heptrai — справочный лист

## 🔒 Откат к утверждённому состоянию

### ⭐ Текущая ЗАФИКСИРОВАННАЯ версия: v2.7 — splitform-exact card (19.05.2026)

```bash
cd ~/heptrai
git checkout v2.7-splitform-exact
```

**Tag:** `v2.7-splitform-exact`
**Commit:** `20a8508` — `snapshot: v2.7 — Splitform-exact card params + max transparency`

Что зафиксировано:
- Hero семёрка 800px (золотая середина между splitform и гигантом)
- Карточка точно как у splitform: 370px width, blur(16px), no border, no shadow, radius 16px, padding 8px
- Прозрачность ЕЩЁ выше чем у splitform: bg `rgba(255, 255, 255, 0.025)` (vs их 0.04)
- Pure glass effect — ножка 7 ярко просвечивает
- Аватар AK placeholder gradient 80×80 (фото удалено по решению)
- Скриншот: `_versions/v2.7-splitform-exact.jpeg`

### Предыдущие версии (можно вернуться к любой)

```bash
git tag -l 'v2*'                   # посмотреть все снимки v2 семьи
git checkout v2.6-middle           # семёрка 800px, карточка 300px
git checkout v2.4-mini-glass       # мини glass на гигантской 7
git checkout v2.3-glass            # большая glass карточка
git checkout v1-breathing          # карточка под семёркой, без перекрытия
```

### Альтернативные роуты (живут параллельно)

- `/v1` — breathing (карточка под семёркой)
- `/v2` — splitform-exact glass (= главная)
- `/v3` — chrome card
- `/v4` — frosted ice card

### Если нужно вернуться к старому состоянию (до v2.7)

```bash
cd ~/heptrai
git checkout e7775f9 -- app/globals.css app/page.tsx app/layout.tsx
```

**Commit:** `e7775f9` — `feat(layout): splitform-style 400px column + 560px hero stage`

### Если нужно вернуться к ПРЕДЫДУЩЕМУ состоянию (только утверждённый логотип, до layout-фиксов)

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
