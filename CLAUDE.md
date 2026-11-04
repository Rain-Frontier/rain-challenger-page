# CLAUDE.md

## Role
User is redesigning this site. Claude's job:
1. Apply the user's new design to the code (HTML/CSS/JS edits).
2. Answer questions about the current design (structure, colors, layout, behavior) accurately, citing `file:line`.

Folders for the redesign:
- `design/` — user's working folder (PSDs, drafts, source PNGs). Not used by the site.
- `assets/index/` — finished assets for the new Home page design. Reference these from CSS/HTML.

Done so far:
- All 3 Home panels use shared class `.frame-panel` (no parchment/leather): feathered 30% black frosted backdrop (`::before`, mask fade), corner ornament `assets/index/navbar.png` (341x128) at half size top-left (background) + mirrored bottom-right (`::after` rotated 180deg), centered h2, light cream text, gold links.
- Two dividers frame each h2: `<div class="panel-divider panel-divider-top">` above (original orientation) and `<div class="panel-divider">` below (flipped upside down via `scaleY(-1)`). Image `assets/index/navbar2.png` (1504x23, left-right symmetric) at half size, centered. Gap to title = `--divider-gap`. Changing navbar2.png width requires updating `width`/`aspect-ratio` in `.panel-divider::before`.
- Rules callout: red box (`#5e2617`), no side bar, text centered; frame = `assets/index/navbar1.1.png` (1700x128) scaled to box width top-left + 180deg copy bottom-right (`::after`); `aspect-ratio: 1700/128` keeps box at least ornament height. `.home` gap is 3rem so backdrops don't overlap.
- Page title h1 (both pages, shared class `.page-header` in `css/style.css`) framed by `assets/index/header.png` (1892x239, two vertical bars) at half size (946x119.5), centered; title left-aligned just inside the left bar, vertically centered. Quests h1 = `.page-header.quests-header` with `zoom: 1.2` (same on-screen size as Home, whose whole content is zoomed) and width capped at `100% / 1.2`; its text is in a `<span data-i18n="quests.title">` so translation doesn't wipe the logo `<img>`. Home keeps its own space below in `home.css`. Space below = 2x visible gap between panel backdrops, computed from `--panel-gap` and `--backdrop-spread` (both on `.home-page`).
- Header logo: `<img class="header-logo">` (`assets/index/rain_logo.png`, 1789x1095 incl. transparent margin) inside the h1, absolutely positioned in % of the header: logo ~100px tall, right edge ~33px inside the right bar. Phones (<=700px): title shrinks to 1.5rem.
- Navbar (both pages, `css/style.css`): 75px tall, sticky (stays at the top while scrolling, `position: sticky; top: 0`, z-index 10), 1px white bottom border; links left (`.nav-links`), language switcher right (`.lang-switcher`: `assets/index/www.png` + current language, dropdown with English, 日本語, Français, Deutsch, Español). Selecting translates the page via `js/i18n.js` and is remembered. Done: French (all static text on both pages + quest card labels). Quest restriction lines are translated by exact English text (`"restriction.<text>"` in `js/i18n.js`) — a new or edited line in `quests_data/*.json` needs a matching entry; weapon names in tooltips via `"weapon.<code>"`. Not translated (by choice): quest names/types, Quests tab title. Spanish (`es`) done by Claude from the user-approved French (not reviewed by a native speaker). Japanese (`ja`) done by Claude (official MHF weapon names; MHF terms in original Japanese where confirmed on Ferias (EN fan site xl3lackout.github.io/MHFZ-Ferias-English-Project vs JP ferias.life.coocan.jp): 辿異=Zenith, 遷悠=Exotic, 剛種=Gou, 祈歌=Prayer, 進化=Evolution, 天廊=Tower, キット=Premium, ネットカフェ, G級, シジル, カフ, 秘伝, 不退ノ構, パートニャー, ホルク, ラスタ; from the site owner: 覇種=Supremacy, 元気のみなもと=Halk Pot, ログインブースト=Login Boost, 課金=Premium (per the bounty guide); from the Rain bounty guide (JP Google Doc 1PudqeBC0PhYS5MSk_1l0njpzwW_O985dR3_F_YvHHR8): G級カフ, 毒マグネットスパイク, 秘伝スキル; 祈珠=Prayer Gems (wikiwiki.jp/nenaiko); 秘伝開眼奥義=Secret Tech and 装備ステータス=Equipment Status (site owner); "Chat Log" kept in English; not reviewed by a native speaker). German (`de`) done by Claude (official German MH weapon names from mein-mmo.de; Tonfa/Magnet Spike in English; game terms in English like fr/es; not reviewed by a native speaker). All 5 languages complete. New translatable text needs a `data-i18n` key + entries in `js/i18n.js`.
- Quest cards (`css/quests.css`): no parchment; frame `assets/index/quest_inter.png` (440x750) for every quest, `quest_durem.png` for Duremudira (JS adds `.quest-card--durem` when `quest_id === "durem"`). Frame is an overlay (`.quest-card::before`, z-index 1) above the quest image; image fills the frame window (x 18-422, y 17-242 of 440x750, sized in % of card width). Frame drawn as a 3-slice `border-image` (top 300px + bottom 110px fixed proportions via cqw, middle stretches) so cards taller than 440:750 (narrow widths, long translations) keep the window aligned. Card min ratio 440/750. Light shadow: `filter: drop-shadow(0 6px 10px rgba(0,0,0,0.45))` on `.quest-card` (follows the frame shape). Changing the frames' window position or size requires updating `.quest-header` / `.quest-image` and the slice values. Section labels (Time Limits, Restrictions) dark red `#6e1410` at 1.125rem; restrictions have no background (no `.leather`), black labels, dark row separators; colored dots by tag. Quest title (type + name) moved from the image into `.quest-body`: centered, black, no background; quest type 1.125rem. Vertical space (all quests, Duremudira included): title starts just under the frame's upper band (band y 253-285 of 750; title top y~292 via `margin-top: calc(50 / 384 * 100cqw)`, cqw = .quest-body content width = 384/440 of card), then Time Limits, Restrictions; text must end above y~715 (bottom of lower band, y 683-715). Tight spacing (h3 margins 0.4rem/0.25rem, time buttons 0.25rem padding + 28px icons, restriction rows 0.1rem 0.4rem padding, list line-height 1.1, no space between lines; label column 5rem = just fits the longest label, German "Fertigkeiten" 77px; French restriction text 0.8rem via `:lang(fr)` (needs `<html lang>`, set by nav.js)) so all quests fit at 3-column desktop width in all 5 languages (all 5 languages end above the band top y 683 / Duremudira's decoration y 692; tightest: Spanish Duremudira y~682, English/Spanish/German Elite Battle 4 y~673). `#quest-container` uses `align-items: flex-start` so a taller card doesn't stretch its row-mates' frames. New/longer restrictions may need re-checking. Duremudira uses the same spacing, except its title is centered between the image (y 243) and "Time Limits" (same y as other cards; `.quest-card--durem` rules at the end of quests.css); its frame's bottom decoration starts at y~692 (English ends y~682). Time-limit buttons: background `assets/index/wp_btn.png` (58x58, stretched 100% 100% to ~59x50, no `.leather`), parchment text, hover = brightness(1.6); achieved state unchanged (green bg + green border + check badge, replaces the image).
- Both pages have `<meta name="color-scheme" content="dark">`: stops the white flash when switching pages (browser canvas is dark before the CSS loads; also dark scrollbars). Don't give `html` a background: it makes the body paint its color over the blurred `body::before` background image.
- Home page content (`<main class="home-page">`) has `zoom: 1.2` (top of `css/home.css`): everything on Home renders 20% bigger, navbar excluded. On-screen sizes = CSS values x1.2 (panels 900px -> 1080px).

Do not invent design changes the user did not ask for. Keep content (rules, quest data, links) unchanged unless told otherwise.

## Project
Static site for the **Rain Challenger** achievement (Monster Hunter Frontier, Rain server). No build step, no framework, no package manager. Plain HTML + CSS + vanilla JS.

```
index.html          Home: intro, rules, rewards (static content)
quests.html         Quests: empty #quest-container filled by js/quests.js
css/style.css       Entry stylesheet: @imports home.css + quests.css, theme tokens (:root), body/bg, navbar, .parchment, .leather
css/home.css        Home layout (.home, .panel, .callout, reward ★ markers)
css/quests.css      Quest card grid, time-limit buttons, restriction rows
js/quests.js        Loads quests_data/*.json, renders cards, tracks progress in localStorage
js/i18n.js          Translations (TRANSLATIONS[lang][key]) applied to [data-i18n] / [data-i18n-title]; English = text in the HTML
js/nav.js           Language switcher in the navbar (both pages); localStorage key `rain-challenger-lang`
quests_data/*.json  One file per quest
assets/             background.webp, favicon.ico, quest_imgs/*.webp, weapon_icons/*.svg
```

## Running locally
`fetch()` of JSON fails on `file://`. Serve the folder:
```
python -m http.server 8000
```
then open http://localhost:8000.

## Hard constraints
- **CSP** in both HTML `<head>`: `default-src 'self'; img-src 'self' data:`. Consequences:
  - No external fonts, CDNs, scripts or stylesheets unless the CSP meta is updated in both pages.
  - No inline `style=""` attributes and no inline `<script>`; set CSS vars via `element.style.setProperty` in JS (see `createQuestCard`).
  - Images only from same origin or `data:` URIs.
- All JSON values must go through `escapeHTML()` before being placed in `innerHTML`.
- Navbar is duplicated in `index.html` and `quests.html`; change both.
- Adding a quest = add JSON in `quests_data/`, image in `assets/quest_imgs/`, and filename to `QUEST_FILES` in `js/quests.js` (order there = display order).

## Current design system
Theme: dark blurred game background + "parchment & leather" panels.

Tokens (`css/style.css` `:root`):
| Token | Value | Use |
|---|---|---|
| `--bg` | `#121318` | page bg fallback |
| `--border` | `#2f3340` | navbar bottom border |
| `--text` / `--text-muted` | `#e6e6eb` / `#9a9cab` | page text, nav links |
| `--radius` | `12px` | parchment panel radius |
| `--parchment` / `--parchment-edge` | `#e8d9b5` / `#a8885a` | panel base / border |
| `--ink` / `--ink-muted` | `#3b2a18` / `#6b5236` | text on parchment, section labels |
| `--leather` | `#4a3624` | dark inset boxes |
| `--gold` | `#e3b260` | accents, links in leather, quest type, focus ring |
| `--tag-allowed/partial/banned` | `#5cd65c` / `#ffa733` / `#ff5c5c` | restriction dots, achieved state |
| `--bg-brightness` / `--bg-blur` | `0.4` / `6px` | background image dim/blur |

Font: `system-ui` stack. No web fonts.

Reusable classes:
- `.parchment` — paper panel: two inline SVG noise layers + inset brown shadow + drop shadow.
- `.leather` — dark brown inset box for high-contrast text on parchment; links gold.

Layout:
- `main` max-width 1400px, centered. Home `.home` max-width 900px, single column, gap 1.5rem.
- Quest cards: flex-wrap, 3 per row → 2 at ≤1250px → 1 at ≤700px; last row centered.
- Card: 16:9 image, title chip overlaid bottom-left (dark translucent, blur), body with "Time Limits" grid and "Restrictions" leather panel.
- Time limits: container query — all weapons in one row at card width ≥360px, else two rows (`--weapons` / `--half` set in JS).
- Restrictions: 2-col grid (label 4.5rem | list), stacks at card width ≤300px. Dot color by tag.

Behavior:
- Time-limit buttons are toggles (`aria-pressed`); achieved = green bg + ✓ badge. Stored in `localStorage` key `rain-challenger-progress` as `{ quest_id: [weapon,...] }`.

## Quest JSON shape
```json
{
  "quest_id": "ab4",
  "quest_type": "<<Interception>>",
  "quest_name": "Advance Battle 4",
  "img_url": "assets/quest_imgs/ab4.webp",
  "time_limits": { "<weapon code>": "8:44.XX" },
  "restrictions": {
    "general": [{ "tag": "allowed|partial|banned", "restriction": "text" }],
    "weapon": [], "armor": [], "skills": []
  }
}
```
Weapon codes (map in `WEAPON_NAMES`, icon = `assets/weapon_icons/<code>.svg`): gs, ls, sns, ds, ham, hh, lan, gl, ton, saf, ms, lbg, hbg, bow.

## Conventions
- Comments explain *why* (see existing CSS/JS comments); keep that style.
- 2-space indent. No new dependencies or build tooling unless user asks.
- Not a git repo — no commits.
