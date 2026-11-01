const QUEST_FILES = [
  'sd8.json',
  'str2.json',
  'eb4.json',
  'psc4.json',
  'em.json',
  'durem.json',
  'str4.json',
  'bf.json',
  'gst.json',
  'nsc2.json',
  'ab4.json',
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

document.addEventListener('DOMContentLoaded', loadQuests)

const basePath = "./quests_data/";

async function loadQuest(filename) {
  try {
    const response = await fetch(basePath + filename);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function loadQuests() {
  // Load the quests
  const quests = await Promise.all(QUEST_FILES.map(loadQuest));
  const validQuests = quests.filter(quest => quest !== null);
  console.log("Loaded quests:", validQuests);

  // Render the quests
  const container = document.getElementById('quest-container');
  validQuests.forEach(quest => {
    const questCard = createQuestCard(quest);
    container.appendChild(questCard);
  })
}

// Text from the JSON goes through this so values like "<<Interception>>" aren't parsed as HTML tags
function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function createQuestCard(quest) {
  const card = document.createElement('article');
  card.className = 'quest-card';
  const weaponCount = Object.keys(quest.time_limits).length;
  card.innerHTML = `
    <div class="quest-header">
      <img src="${quest.img_url}" alt="${escapeHTML(quest.quest_name)}" class="quest-image">
      <div class="quest-title">
        <p class="quest-type">${escapeHTML(quest.quest_type)}</p>
        <h2 class="quest-name">${escapeHTML(quest.quest_name)}</h2>
      </div>
    </div>
    <div class="quest-body">
      <h3>Time Limits</h3>
      <div class="time-limits" style="--weapons: ${weaponCount}; --half: ${Math.ceil(weaponCount / 2)}">
        ${renderTimeLimits(quest)}
      </div>

      ${renderRestrictions(quest.restrictions)}
    </div>
  `
  return card
}

function renderTimeLimits(quest) {
  const iconPath = "./assets/weapon_icons";
  return Object.entries(quest.time_limits).map(([weapon, time]) => {
    const name = WEAPON_NAMES[weapon] ?? weapon;
    return `<div class="weapon-time-limit" title="${name}">
        <img src="${iconPath}/${weapon}.svg" alt="${name}">
        <p>${escapeHTML(time)}</p>
      </div>`
  }).join("");
}

// Empty or missing lists are left out entirely
function renderRestrictions(restrictions = {}) {
  const general = renderRestrictionList("General", restrictions.general);
  const columns = [
    renderRestrictionList("Weapons", restrictions.weapon),
    renderRestrictionList("Armor", restrictions.armor),
    renderRestrictionList("Skills", restrictions.skills)
  ].join("");

  if (!general && !columns) {
    return "";
  }
  return `
    <h3>Restrictions</h3>
    ${general}
    ${columns ? `<div class="restriction-columns">${columns}</div>` : ""}
  `
}

// Tags that have a dot color in quests.css; anything else gets the default dot
const RESTRICTION_TAGS = ["allowed", "partial", "banned"];

function renderRestrictionList(title, items = []) {
  if (items.length === 0) {
    return "";
  }
  const listItems = items.map(item => {
    const tagClass = RESTRICTION_TAGS.includes(item.tag) ? `tag-${item.tag}` : "";
    return `<li class="${tagClass}">${escapeHTML(item.restriction)}</li>`
  }).join("");
  return `<div class="restriction">
      <h4>${title}</h4>
      <ul>${listItems}</ul>
    </div>`
}
