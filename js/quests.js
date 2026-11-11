import {escapeHTML, md2html, merge } from "./utils.js"

const QUEST_FILES = [
  'sd8.json',
  'str2.json',
  'str4.json',
  'em.json',
  'gst.json',
  'bf.json',
  'nsc2.json',
  'eb4.json',
  'ab4.json',
  'psc4.json',
  'durem.json',
]

const WEAPON_NAMES = {
  gs: "Great Sword",
  ls: "Long Sword",
  sns: "Sword and Shield",
  ds: "Dual Swords",
  ham: "Hammer",
  hh: "Hunting Horn",
  lan: "Lance",
  gl: "Gunlance",
  ton: "Tonfa",
  saf: "Switch Axe F",
  ms: "Magnet Spike",
  lbg: "Light Bowgun",
  hbg: "Heavy Bowgun",
  bow: "Bow"
}

// Tags that have a dot color in quests.css; anything else gets the default dot
const RESTRICTION_TAGS = ["allowed", "partial", "banned"];

const iconPath = "./assets/weapon_icons/";

document.addEventListener("langchange", e => {
  loadQuests(e.detail.lang);
})

async function loadQuest(filename, lang) {
  const basePath = "./data/en/quests/"
  var path = `./data/${lang}/quests/`;
  try {
    const base = await fetch(basePath + filename);
    if (!base.ok) {
      throw new Error(`Failed to load ${filename}: ${response.status}`);
    }

    if (lang === "en") return await base.json()

    const overlay = await fetch(path + filename);
    if (!overlay.ok) {
      throw new Error(`Failed to load ${filename}: ${response.status}`)
    }
    return merge(await base.json(), await overlay.json() ?? {});
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Completed time limits are stored in this browser only, as { quest_id: [weapon, ...] }
const PROGRESS_KEY = "rain-challenger-progress";

function loadProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(PROGRESS_KEY));
    // Keep only well-formed entries so edited or corrupted data can't break the page
    return Object.fromEntries(
      Object.entries(stored ?? {}).filter(([, weapons]) => Array.isArray(weapons))
    );
  } catch {
    // Storage blocked or data corrupted: start with nothing completed
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // Storage blocked (e.g. some private modes): marks just won't persist
  }
}

const progress = loadProgress();

function isCompleted(questId, weapon) {
  return progress[questId]?.includes(weapon) ?? false;
}

function toggleCompleted(questId, weapon) {
  const completed = new Set(progress[questId]);
  const done = !completed.delete(weapon);
  if (done) {
    completed.add(weapon);
  }

  if (completed.size === 0) {
    delete progress[questId];
  } else {
    progress[questId] = [...completed];
  }
  saveProgress();
  return done;
}

const questContainer = document.getElementById('quest-container');
questContainer.addEventListener('click', event => {
  const button = event.target.closest('.weapon-time-limit');
  if (button) {
    const done = toggleCompleted(button.dataset.quest, button.dataset.weapon);
    button.setAttribute('aria-pressed', done);
  }
})

async function loadQuests(lang) {
  const quests = await Promise.all(QUEST_FILES.map( filename => {
    return loadQuest(filename, lang);
  }));

  questContainer.replaceChildren();
  quests
    .filter(quest => quest !== null)
    .forEach(quest => {
      questContainer.appendChild(createQuestCard(quest));
    });

  // Cards are created after the language was applied: translate their labels now (js/i18n.js)
  window.RCI18n?.translate(questContainer);
}


function createQuestCard(quest) {
  const card = document.createElement('article');
  // Card frame image (css/quests.css): Duremudira has its own, every other quest the default
  card.className = quest.quest_id === 'durem' ? 'quest-card quest-card--durem' : 'quest-card';
  card.innerHTML = `
    <div class="quest-header">
      <img src="${escapeHTML(quest.img_url)}" alt="${escapeHTML(quest.quest_name)}" class="quest-image">
    </div>
    <div class="quest-body">
      <div class="quest-title">
        <p class="quest-type">${md2html(escapeHTML(quest.quest_type))}</p>
        <h2 class="quest-name">${md2html(escapeHTML(quest.quest_name))}</h2>
      </div>
      <h3 data-i18n="quests.timeLimits">Time Limits</h3>
      <div class="time-limits">
        ${renderTimeLimits(quest)}
      </div>

      ${renderRestrictions(quest.restrictions)}
    </div>
  `

  // Set via JS rather than a style="" attribute, which the page's Content Security Policy blocks
  const weaponCount = Object.keys(quest.time_limits).length;
  const timeLimits = card.querySelector('.time-limits');
  timeLimits.style.setProperty('--weapons', weaponCount);
  timeLimits.style.setProperty('--half', Math.ceil(weaponCount / 2));
  return card
}

function renderTimeLimits(quest) {
  return Object.entries(quest.time_limits).map(([weapon, time]) => {
    const name = escapeHTML(WEAPON_NAMES[weapon] ?? weapon);
    return `<button type="button" class="weapon-time-limit"
        data-quest="${md2html(escapeHTML(quest.quest_id))}" data-weapon="${escapeHTML(weapon)}"
        aria-pressed="${isCompleted(quest.quest_id, weapon)}"
        data-i18n-title="quests.markHint" data-name="${name}"
        title="${name}: click to mark as achieved">
        <img src="${iconPath}${escapeHTML(weapon)}.svg" alt="${name}">
        <span class="time">${md2html(escapeHTML(time))}</span>
      </button>`
  }).join("");
}

// Empty or missing lists are left out entirely
function renderRestrictions(restrictions = {}) {
  const rows = [
    renderRestrictionList("General", "quests.general", restrictions.general),
    renderRestrictionList("Weapons", "quests.weapons",  restrictions.weapon),
    renderRestrictionList("Armor", "quests.armor",  restrictions.armor),
    renderRestrictionList("Skills", "quests.skills",  restrictions.skills)
  ].join("");

  if (!rows) {
    return "";
  }
  return `
    <h3 data-i18n="quests.restrictions">Restrictions</h3>
    <div class="restrictions">${rows}</div>
  `
}

function renderRestrictionList(title, i18nKey, items = []) {
  if (items.length === 0) {
    return "";
  }
  const listItems = items.map(item => {
    const tagClass = RESTRICTION_TAGS.includes(item.tag) ? `tag-${item.tag}` : "";
    // The English text itself is the translation key (js/i18n.js, "restriction.<text>")
    const text = md2html(escapeHTML(item.restriction));
    return `<li class="${tagClass}">${text}</li>`
  }).join("");
  return `<div class="restriction">
      <h4 data-i18n=${i18nKey}>${title}</h4>
      <ul>${listItems}</ul>
    </div>`
}
