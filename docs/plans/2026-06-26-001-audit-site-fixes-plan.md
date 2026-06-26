---
title: "audit: Сайт GAZE Brow Studio — аудит, критические проблемы, план исправлений"
date: 2026-06-26
type: audit
status: draft
target: gaze-beauty.ru
repo: https://github.com/milowqo/brown-studio-gaze
---

# Audit: Сайт GAZE Brow Studio

## Проблема

Сайт gaze-beauty.ru (студия бровей в Сочи) развёрнут на GitHub Pages, но репозиторий https://github.com/milowqo/brown-studio-gaze содержит устаревший код, который не отражает текущее состояние продакшена. В репозитории отсутствуют критически важные файлы, без которых сборка невозможна. Требуется провести аудит структуры, безопасности, работоспособности и оптимизации, а затем синхронизировать репозиторий с продакшеном.

---

## Текущее состояние

| Аспект | Репозиторий (GitHub) | Продакшен (gaze-beauty.ru) |
|--------|---------------------|---------------------------|
| Фреймворк | Vite + React 18 + TypeScript + shadcn/ui | Vite + React (собранный SPA) |
| SEO | ❌ Минимальные мета-теги | ✅ Полные OG, Twitter Card, Schema.org JSON-LD, geo, robots.txt, sitemap.xml |
| Аналитика | ❌ Отсутствует | ✅ GTM, GA4 (G-XXXXXXXXXX — плейсхолдер), Yandex.Metrika |
| Безопасность | ❌ Нет CSP | ✅ CSP meta-тег (с `unsafe-inline`) |
| Dikidi (виджет записи) | ⚠️ Плейсхолдер `ВАШ_ID_DIKIDI` | ✅ Реальный ID `198091`, подключён |
| Изображения | ❌ Директория `src/assets/` отсутствует (импорты есть, файлов нет) | ✅ preview.jpg, favicon.svg, build-хэшированные ассеты |
| Переменные окружения | ❌ Нет `.env.example` | Настроены при сборке |
| OG-изображения | ❌ Ссылаются на lovable.dev | ✅ preview.jpg на собственном домене |

---

## Найденные проблемы

### 🔴 Критические (blocker — без исправления сборка не работает)

1. **Отсутствует `src/assets/`** — В коде импортируются `@/assets/hero-new.jpg`, `work-1.jpg`…`work-6.jpg`, но сама директория не существует. `npm run build` упадёт с ошибкой.
2. **Код репозитория ≠ продакшен** — Все SEO-улучшения (Schema.org, OG, meta-теги, robots.txt, sitemap.xml, Yandex.Metrika, GTM, аналитика) есть на живом сайте, но отсутствуют в исходном коде. Любая сборка из репозитория уничтожит эти улучшения.

### 🟠 Высокие (high — требуют исправления)

3. **Dikidi ID — плейсхолдер** — В `index.html` репозитория указан `ВАШ_ID_DIKIDI`, а на продакшене используется `198091`.
4. **OG/Twitter изображения ведут на lovable.dev** — `og:image` указывает на `https://lovable.dev/opengraph-image-p98pqg.png`. После сборки соцсети будут показывать чужое изображение.
5. **Twitter card указывает на `@Lovable`** — `twitter:site` настроен на Lovable, не на студию.
6. **GA4 — плейсхолдер** — `G-XXXXXXXXXX` не настроен, аналитика Google не работает.
7. **App.css — мусор от Vite-шаблона** — Стили `#root { max-width: 1280px; margin: 0 auto; }` конфликтуют с дизайном. Не используются, но остаются в сборке.

### 🟡 Средние (medium — желательно исправить)

8. **Нет `.env.example`** — Не указано, какие переменные окружения нужны (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`).
9. **Нет `.gitignore` для `dist/`** — Папка сборки должна быть исключена из репозитория.
10. **Supabase `verify_jwt = false`** — Функция `dikidi-booking` отключает проверку JWT. Потенциально небезопасно для публичного доступа.
11. **CSP — только meta-тег** — На GitHub Pages нельзя установить HTTP-заголовки. CSP в meta-теге менее надёжен (не защищает от атак до применения `meta`).
12. **`Access-Control-Allow-Origin: *`** — GitHub Pages устанавливает CORS для всех. Для лендинга это не критично, но избыточно.
13. **src/assets/ полностью отсутствует** — Изображения не хранятся в репозитории. При форке/клоне сайт остаётся без картинок.

### 🔵 Низкие (low — опционально)

14. **Нет HSTS** — GitHub Pages не поддерживает кастомные заголовки, HSTS недоступен.
15. **Нет 404.html для GitHub Pages** — SPA может отдавать 404 на прямых ссылках (хотя на одностраничном сайте это не критично).
16. **Schema.org JSON-LD не в репозитории** — При пересборке будет потерян.

---

## План исправлений

### U1. Синхронизировать `index.html` с продакшеном

**Goal:** Перенести все SEO-улучшения, CSP, аналитику и Schema.org из живого сайта в репозиторий.

**Files:**
- `index.html`

**Approach:**
- Заменить содержимое `index.html` на актуальную версию с продакшена, включая:
  - Content Security Policy
  - Google Tag Manager + GA4 (оставить G-XXXXXXXXXX как плейсхолдер)
  - Yandex.Metrika со счётчиком 105798476
  - Канонический URL и hreflang
  - Open Graph и Twitter Card с `preview.jpg`
  - Geo-теги для Сочи
  - Schema.org JSON-LD (BeautySalon, WebSite, WebPage)
  - Dikidi виджет с правильным ID `198091`
- Убрать `<meta>` OG/Twitter теги, указывающие на lovable.dev
- Убрать `twitter:site @Lovable`
- Убрать `<meta name="author" content="GAZE Brow Studio" />` — он не критичен с Schema.org

### U2. Создать `src/assets/` с изображениями

**Goal:** Восстановить папку с изображениями, чтобы сборка проходила.

**Files:**
- `src/assets/hero-new.jpg`
- `src/assets/work-1.jpg` … `work-6.jpg`

**Approach:**
- Скачать изображения с живого сайта (если они доступны) или предоставить плейсхолдеры
- Либо исправить импорты, если изображения будут загружаться динамически

### U3. Очистить `App.css` от мусора

**Goal:** Удалить неиспользуемые стили Vite-шаблона, которые конфликтуют с дизайном.

**Files:**
- `src/App.css`

**Approach:**
- Удалить `#root { max-width: 1280px; margin: 0 auto; }` — это переопределяет центрирование
- Удалить `.logo`, `.logo:hover`, `@keyframes logo-spin`, `.card`, `.read-the-docs`
- Оставить файл пустым или удалить, если он нигде не импортируется

### U4. Добавить `.env.example` и документировать переменные

**Goal:** Дать разработчикам понять, какие переменные нужны для локального запуска.

**Files:**
- `.env.example`

**Approach:**
- Создать `.env.example` с переменными:
  ```env
  VITE_SUPABASE_URL=your_supabase_url
  VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
  ```

### U5. Добавить `.gitignore`

**Goal:** Исключить артефакты сборки из репозитория.

**Files:**
- `.gitignore`

**Approach:**
- Стандартный `.gitignore` для Node/React/Vite:
  ```
  node_modules/
  dist/
  .env
  .env.local
  ```

### U6. Настроить GA4 (заменить плейсхолдер)

**Goal:** Подключить реальный Google Analytics ID.

**Files:**
- `index.html`

**Approach:**
- Заменить `G-XXXXXXXXXX` на реальный ID GA4
- Заменить плейсхолдерную проверку на реальную инициализацию

### U7. Создать `robots.txt` и `sitemap.xml` в репозитории

**Goal:** Иметь актуальные SEO-файлы в исходниках.

**Files:**
- `public/robots.txt`
- `public/sitemap.xml`

**Approach:**
- Скопировать содержимое с продакшена в `public/`
- Vite автоматически скопирует их в сборку

### U8. Пересобрать и задеплоить

**Goal:** Выпустить актуальную версию сайта из репозитория.

**Files:**
- CI/CD (GitHub Actions) или ручная сборка

**Approach:**
- `npm ci && npm run build`
- Настроить GitHub Pages на ветку `main` с папкой `dist/` (или отдельную ветку `gh-pages`)
- Развернуть собранную версию

---

## Тестовые сценарии

1. **Сборка:** `npm run build` завершается без ошибок
2. **Локальный запуск:** `npm run dev` открывает страницу
3. **SEO-теги:** В HTML присутствуют title, description, OG, Twitter Card, Schema.org
4. **Dikidi:** Виджет записи отображается, кнопка "Записаться" ведёт на dikidi.net/#widget=198091
5. **Аналитика:** Yandex.Metrika инициализирована (можно проверить в консоли `window.ym`)
6. **CSP:** В head присутствует meta-тег Content-Security-Policy
7. **Изображения:** Все работы и hero-изображение отображаются

---

## Дополнительно (Deferred)

- Настроить GitHub Actions для автоматической сборки и деплоя на GitHub Pages
- Заменить `unsafe-inline` в CSP на nonce/hash при возможности
- Рассмотреть Cloudflare поверх GitHub Pages для кастомных заголовков (HSTS, CSP в заголовках)
- Supabase: оценить необходимость функции `dikidi-booking` и её безопасность
