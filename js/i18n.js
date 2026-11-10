// Page translations. Elements marked with data-i18n="key" get their content replaced by
// TRANSLATIONS[lang][key]; English is the text already written in the HTML, so it isn't
// repeated here. A key missing for a language falls back to English.
// data-i18n-title="key" does the same for the title (tooltip) attribute; "{name}" in the
// translation is replaced by the translated weapon name ("weapon.<data-weapon>"), or by the
// element's data-name when there is none.
// Quest restriction lines use their English text as key: "restriction.<English text>".
//
// The values are inserted as HTML (for links and bold text), so they must only ever come from
// this file, never from user input or the quest JSON files.

const DISCORD_SUBMIT = "https://discord.com/channels/937230168223789066/1414057000987267222";
const DISCORD_QUESTS = "https://discord.com/channels/937230168223789066/1414051861174030346";

// Non-breaking space: French before ? : ! and %, French/Spanish in "100 000" and "5 %"
const NBSP = " ";

const TRANSLATIONS = {
  ja: {
    // MHF terms checked against Ferias: the English fan translation
    // (xl3lackout.github.io/MHFZ-Ferias-English-Project) vs the original (ferias.life.coocan.jp).
    // Supremacy (覇種), Halk Pot (元気のみなもと), Login Boost (ログインブースト): given by the site owner.
    // Premium = 課金 (the guide: weapons that required real money: Netcafe, BP evolution, collab…).
    // G級カフ, 毒マグネットスパイク, 秘伝スキル: wording of the Rain bounty guide (Japanese Google Doc).
    // Prayer Gems = 祈珠 (Diva Defense buffs; EN fan wiki effects match wikiwiki.jp/nenaiko 歌姫狩衛戦).
    // Secret Tech = 秘伝開眼奥義, Equipment Status = 装備ステータス: given by the site owner.
    "nav.home": "ホーム",
    "nav.quests": "クエスト",

    "home.docTitle": "Rain Challenger ページ",

    "intro.title": "Rain Challengerとは？",
    // Japanese has no spaces between sentences: keep on one line (a line break would add one)
    "intro.text": `Rain Challengerは、特定の条件のもと、制限時間内に一連のクエストをクリアするチャレンジです。各クエストでは5種類の武器から1つを選んで挑戦できます。すべてのチャレンジを達成したら、報酬を受け取るために、すべてのスクリーンショットをこちらの<a href="${DISCORD_SUBMIT}">Discordチャンネル</a>に提出して確認を受けてください。`,

    "rules.title": "ルール",
    "rules.callout": "<b>挑戦する前に、各クエスト固有のルールを必ずよく読んでください。</b>",

    "rewards.title": "報酬",

    "quests.title": "クエスト",
    "quests.timeLimits": "制限時間",
    "quests.restrictions": "制限",
    "quests.general": "全般",
    "quests.weapons": "武器",
    "quests.armor": "防具",
    "quests.skills": "スキル",
    "quests.markHint": "{name}：クリックで達成済みにする",

    "weapon.gs": "大剣",
    "weapon.ls": "太刀",
    "weapon.sns": "片手剣",
    "weapon.ds": "双剣",
    "weapon.ham": "ハンマー",
    "weapon.hh": "狩猟笛",
    "weapon.lan": "ランス",
    "weapon.gl": "ガンランス",
    "weapon.ton": "穿龍棍",
    "weapon.saf": "スラッシュアックスF",
    "weapon.ms": "マグネットスパイク",
    "weapon.lbg": "ライトボウガン",
    "weapon.hbg": "ヘビィボウガン",
    "weapon.bow": "弓",
  },
};

// English content and tooltips as first seen in the page, to switch back to English
const originalHTML = new WeakMap();
const originalTitle = new WeakMap();
let currentLang = "en";

function translate(root = document) {
  const strings = TRANSLATIONS[currentLang] ?? {};

  root.querySelectorAll("[data-i18n]").forEach(el => {
    if (!originalHTML.has(el)) {
      originalHTML.set(el, el.innerHTML);
    }
    el.innerHTML = strings[el.dataset.i18n] ?? originalHTML.get(el);
  });

  root.querySelectorAll("[data-i18n-title]").forEach(el => {
    if (!originalTitle.has(el)) {
      originalTitle.set(el, el.title);
    }
    const template = strings[el.dataset.i18nTitle];
    el.title = template
      ? template.replace("{name}", strings[`weapon.${el.dataset.weapon}`] ?? el.dataset.name ?? "")
      : originalTitle.get(el);
  });
}

function setLang(lang) {
  currentLang = lang;
  translate();
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang }}))
}

window.RCI18n = { setLang, translate };
