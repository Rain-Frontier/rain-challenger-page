import {md2html, escapeHTML} from "./utils.js"

document.addEventListener("langchange", e => {
  loadRules(e.detail.lang);
  loadRewards(e.detail.lang)
});


async function loadJson(lang, filename) {
  try {
    const response = await fetch(`./data/${lang}/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load rules: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  } 
}

async function loadRules(lang) {
  const rules = await loadJson(lang, "rules.json");
  const container = document.getElementById('rules-container');
  const list = document.createElement('ul')
  const listItems = rules.map(rule => {
    return `<li>${md2html(escapeHTML(rule))}</li>`;
  }).join("\n");

  list.innerHTML = listItems;
  container.replaceChildren(list)
}

async function loadRewards(lang) {
  const rules = await loadJson(lang, "rewards.json");
  const container = document.getElementById('rewards-container');
  const list = document.createElement('ul')
  const listItems = rules.map(reward=> {
    return `<li>${md2html(escapeHTML(reward))}</li>`;
  }).join("\n");

  list.innerHTML = listItems;
  container.replaceChildren(list)
}
