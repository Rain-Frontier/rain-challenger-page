// Language switcher in the top bar (shared by every page).
// Picking a language translates the page through js/i18n.js (loaded before this file);
// languages without translations show the English text. The choice is remembered in this browser.

export const LANG_KEY = "rain-challenger-lang";
export const DEFAULT_LANG = "en";

export function loadLang() {
  try {
    return localStorage.getItem(LANG_KEY) ?? DEFAULT_LANG; } catch {
    // Storage blocked: fall back to the default every time
    return DEFAULT_LANG;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // Storage blocked: the choice just won't be remembered
  }
}

function initLangSwitcher() {
  const button = document.querySelector(".lang-button");
  const menu = document.getElementById("lang-menu");
  if (!button || !menu) {
    return;
  }
  const options = [...menu.querySelectorAll("button[data-lang]")];

  function applyLang(lang) {
    const option = options.find(o => o.dataset.lang === lang) ?? options[0];
    button.querySelector(".lang-current").textContent = option.textContent;
    document.documentElement.lang = option.dataset.lang;
    options.forEach(o => o.setAttribute("aria-current", o === option));
    window.RCI18n?.setLang(option.dataset.lang);
  }

  function setOpen(open) {
    menu.hidden = !open;
    button.setAttribute("aria-expanded", open);
  }

  button.addEventListener("click", () => setOpen(menu.hidden));

  menu.addEventListener("click", event => {
    const option = event.target.closest("button[data-lang]");
    if (option) {
      applyLang(option.dataset.lang);
      saveLang(option.dataset.lang);
      setOpen(false);
      button.focus();
    }
  });

  // Close on a click anywhere else, or on Escape
  document.addEventListener("click", event => {
    if (!event.target.closest(".lang-switcher")) {
      setOpen(false);
    }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !menu.hidden) {
      setOpen(false);
      button.focus();
    }
  });

  applyLang(loadLang());
}

document.addEventListener("DOMContentLoaded", initLangSwitcher);
