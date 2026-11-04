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
  fr: {
    "nav.home": "Accueil",
    "nav.quests": "Quêtes",

    "home.docTitle": "Page Rain Challenger",

    "intro.title": `Qu'est-ce que Rain Challenger${NBSP}?`,
    "intro.text": `Rain Challenger consiste à effectuer une série de quêtes sous certaines conditions
      dans un temps imparti. Vous aurez le choix entre 5 armes pour chaque quête. Une fois ce
      défi accompli, il vous faudra soumettre pour validation l'ensemble de vos captures d'écran
      dans ce <a href="${DISCORD_SUBMIT}">channel Discord</a> afin d'obtenir vos récompenses.`,

    "rules.title": "Règles",
    "rules.1": `Effectuer toutes les quêtes Challenger dans un temps imparti (voir la
      <a href="./quests.html">page des quêtes</a> ou ce <a href="${DISCORD_QUESTS}">channel Discord</a>).`,
    "rules.2": `Envoyer l'ensemble de vos captures d'écran d'un coup dans ce
      <a href="${DISCORD_SUBMIT}">channel Discord</a>. Doivent être visibles pour chaque quête${NBSP}:
      <b>Chat Log, Equipment Status</b>.`,
    "rules.3": `Pas d'armes Pray, Tower, Zenith, Evolution, Netcafe ou Premium, sauf si les règles de
      certaines quêtes en disent autrement.`,
    "rules.4": `Les équipements de rang inférieur à ceux autorisés sont aussi autorisés.<br>
      (Armes Zenith > Supremacy > Exotic > Rang G)`,
    "rules.5": "Pas de Sigil Zenith.",
    "rules.6": "Pas de Login Boost ni de Halk Potion.",
    "rules.7": "Pas de Rastas ou autre PNJ, sauf si les règles de la quête en disent autrement (Halk autorisé).",
    "rules.8": "Pas de Secret Tech.",
    "rules.9": "Pas de Prayer Gems.",
    "rules.10": "Toutes les quêtes doivent être effectuées en <b>Solo</b> (pas de blue friends).",
    "rules.11": "Toutes les quêtes doivent être effectuées sur le serveur Rain.",
    "rules.12": "Les mods ou autres outils externes sont proscrits.",
    "rules.13": "Toute forme de tricherie résultera en un bannissement à vie.",
    "rules.callout": "<b>Prenez soin de bien lire les règles spécifiques à chaque quête au préalable.</b>",

    "rewards.title": "Récompenses",
    "rewards.1": 'Le titre "Rain Challenger".',
    "rewards.2": "Une arme exclusive.",
    "rewards.3": `100${NBSP}000 Bounty Coins.`,
    "rewards.4": `5${NBSP}% de promotion dans le Weekly Market.`,

    "quests.title": "Quêtes",
    "quests.timeLimits": "Temps imparti",
    "quests.restrictions": "Restrictions",
    "quests.general": "Général",
    "quests.weapons": "Armes",
    "quests.armor": "Armure",
    "quests.skills": "Talents",
    "quests.markHint": `{name}${NBSP}: cliquez pour marquer comme réussi`,

    "weapon.gs": "Grande Épée",
    "weapon.ls": "Épée Longue",
    "weapon.sns": "Épée & Bouclier",
    "weapon.ds": "Doubles Lames",
    "weapon.ham": "Marteau",
    "weapon.hh": "Cor de Chasse",
    "weapon.lan": "Lance",
    "weapon.gl": "Lancecanon",
    "weapon.ton": "Tonfa",
    "weapon.saf": "Morpho-Hache F",
    "weapon.ms": "Magnet Spike",
    "weapon.lbg": "Fusarbalète Léger",
    "weapon.hbg": "Fusarbalète Lourd",
    "weapon.bow": "Arc",

    // Restriction lines from quests_data/*.json (key = exact English text, incl. case variants)
    "restriction.Partnya only allowed for gunners": "Partnya uniquement autorisé pour les artilleurs",
    "restriction.GR Weapon (Exotic, Gou/Supremacy allowed)": "GR Weapon (Exotic, Gou/Supremacy autorisés)",
    "restriction.GR Armor (Exotic, Gou/Supremacy allowed)": "GR Armor (Exotic, Gou/Supremacy autorisés)",
    "restriction.GR armor (Exotic, Gou/Supremacy allowed)": "GR Armor (Exotic, Gou/Supremacy autorisés)",
    "restriction.G cuff only": "G Cuff uniquement.",
    "restriction.Hiden/Tech not allowed": "Hiden/Tech non autorisé",
    "restriction.Solid Determination not allowed": "Solid Determination non autorisé",
    "restriction.Premium and Prayer not allowed": "Premium and Prayer non autorisé",
    "restriction.Premium or Prayer weapons not allowed": "Armes Premium ou Prayer non autorisées.",
    "restriction.Z sigil not allowed": "Z Sigil non autorisé",
    "restriction.Z Sigil not allowed": "Z Sigil non autorisé",
    "restriction.Zenith (Premium allowed)": "Zenith (Premium autorisé)",
    "restriction.Evo/Tower/Netcafe not allowed": "Evo/Tower/Netcafe non autorisées",
    "restriction.Prayer not allowed": "Prayer non autorisé",
    "restriction.Poison MS not allowed": "Poison MS non autorisé",
    "restriction.Any": "Pas de limite.",
    "restriction.Zenith": "Zenith",
    "restriction.Zenith allowed": "Zenith autorisées",
    "restriction.Zenith weapon allowed": "Zenith weapon autorisées",
    "restriction.Premium/Evo/Prayer not allowed": "Premium/Evo/Prayer non autorisées",
    "restriction.Premium/Prayer/Evo/Tower not allowed": "Premium/Prayer/Evo/Tower non autorisées",
    "restriction.Premium/Tower allowed (g-rank only)": "Premium/Tower autorisées (Rang G uniquement)",
    "restriction.Evolution/Prayer not allowed": "Evolution/Prayer non autorisées",
  },
  es: {
    "nav.home": "Inicio",
    "nav.quests": "Misiones",

    "home.docTitle": "Página de Rain Challenger",

    "intro.title": "¿Qué es Rain Challenger?",
    "intro.text": `Rain Challenger consiste en completar una serie de misiones con ciertas condiciones
      dentro de un tiempo límite. Podrás elegir entre 5 armas para cada misión. Una vez superado
      el desafío, deberás enviar para su validación todas tus capturas de pantalla en este
      <a href="${DISCORD_SUBMIT}">canal de Discord</a> para obtener tus recompensas.`,

    "rules.title": "Reglas",
    "rules.1": `Completar todas las misiones Challenger dentro del tiempo límite (ver la
      <a href="./quests.html">página de misiones</a> o este <a href="${DISCORD_QUESTS}">canal de Discord</a>).`,
    "rules.2": `Enviar todas tus capturas de pantalla a la vez en este
      <a href="${DISCORD_SUBMIT}">canal de Discord</a>. Deben verse en cada misión:
      <b>Chat Log, Equipment Status</b>.`,
    "rules.3": `No se permiten armas Pray, Tower, Zenith, Evolution, Netcafe ni Premium, salvo que las
      reglas de alguna misión indiquen lo contrario.`,
    "rules.4": `El equipo de rango inferior al permitido también está permitido.<br>
      (Armas Zenith > Supremacy > Exotic > Rango G)`,
    "rules.5": "Sin Sigil Zenith.",
    "rules.6": "Sin Login Boost ni Halk Potion.",
    "rules.7": "Sin Rastas ni otros PNJ, salvo que las reglas de la misión indiquen lo contrario (Halk permitido).",
    "rules.8": "Sin Secret Tech.",
    "rules.9": "Sin Prayer Gems.",
    "rules.10": "Todas las misiones deben realizarse en <b>Solo</b> (sin blue friends).",
    "rules.11": "Todas las misiones deben realizarse en el servidor Rain.",
    "rules.12": "Los mods y otras herramientas externas están prohibidos.",
    "rules.13": "Cualquier forma de trampa supondrá un baneo permanente.",
    "rules.callout": "<b>Asegúrate de leer bien las reglas específicas de cada misión antes de empezar.</b>",

    "rewards.title": "Recompensas",
    "rewards.1": 'El título "Rain Challenger".',
    "rewards.2": "Un arma exclusiva.",
    "rewards.3": `100${NBSP}000 Bounty Coins.`,
    "rewards.4": `5${NBSP}% de descuento en el Weekly Market.`,

    "quests.title": "Misiones",
    "quests.timeLimits": "Tiempo límite",
    "quests.restrictions": "Restricciones",
    "quests.general": "General",
    "quests.weapons": "Armas",
    "quests.armor": "Armadura",
    "quests.skills": "Habilidades",
    "quests.markHint": "{name}: haz clic para marcar como conseguido",

    "weapon.gs": "Gran espada",
    "weapon.ls": "Espada larga",
    "weapon.sns": "Espada y escudo",
    "weapon.ds": "Espadas dobles",
    "weapon.ham": "Martillo",
    "weapon.hh": "Cornamusa",
    "weapon.lan": "Lanza",
    "weapon.gl": "Lanza pistola",
    "weapon.ton": "Tonfa",
    "weapon.saf": "Hacha espada F",
    "weapon.ms": "Magnet Spike",
    "weapon.lbg": "Ballesta ligera",
    "weapon.hbg": "Ballesta pesada",
    "weapon.bow": "Arco",

    "restriction.Partnya only allowed for gunners": "Partnya solo permitido para artilleros",
    "restriction.GR Weapon (Exotic, Gou/Supremacy allowed)": "GR Weapon (Exotic, Gou/Supremacy permitidos)",
    "restriction.GR Armor (Exotic, Gou/Supremacy allowed)": "GR Armor (Exotic, Gou/Supremacy permitidos)",
    "restriction.GR armor (Exotic, Gou/Supremacy allowed)": "GR Armor (Exotic, Gou/Supremacy permitidos)",
    "restriction.G cuff only": "Solo G Cuff.",
    "restriction.Hiden/Tech not allowed": "Hiden/Tech no permitido",
    "restriction.Solid Determination not allowed": "Solid Determination no permitido",
    "restriction.Premium and Prayer not allowed": "Premium y Prayer no permitidos",
    "restriction.Premium or Prayer weapons not allowed": "Armas Premium o Prayer no permitidas.",
    "restriction.Z sigil not allowed": "Z Sigil no permitido",
    "restriction.Z Sigil not allowed": "Z Sigil no permitido",
    "restriction.Zenith (Premium allowed)": "Zenith (Premium permitido)",
    "restriction.Evo/Tower/Netcafe not allowed": "Evo/Tower/Netcafe no permitidas",
    "restriction.Prayer not allowed": "Prayer no permitido",
    "restriction.Poison MS not allowed": "Poison MS no permitido",
    "restriction.Any": "Sin límite.",
    "restriction.Zenith": "Zenith",
    "restriction.Zenith allowed": "Zenith permitidas",
    "restriction.Zenith weapon allowed": "Armas Zenith permitidas",
    "restriction.Premium/Evo/Prayer not allowed": "Premium/Evo/Prayer no permitidas",
    "restriction.Premium/Prayer/Evo/Tower not allowed": "Premium/Prayer/Evo/Tower no permitidas",
    "restriction.Premium/Tower allowed (g-rank only)": "Premium/Tower permitidas (solo Rango G)",
    "restriction.Evolution/Prayer not allowed": "Evolution/Prayer no permitidas",
  },
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
    "rules.1": `すべてのChallengerクエストを制限時間内にクリアすること（<a href="./quests.html">クエストページ</a>または<a href="${DISCORD_QUESTS}">Discordチャンネル</a>を参照）。`,
    "rules.2": `すべてのスクリーンショットをまとめてこちらの<a href="${DISCORD_SUBMIT}">Discordチャンネル</a>に送信すること。各クエストで<b>Chat Log、装備ステータス</b>が見えている必要があります。`,
    "rules.3": "祈歌、天廊、辿異、進化、ネットカフェ、課金武器は使用禁止（クエストごとのルールで別途記載がある場合を除く）。",
    "rules.4": "許可されている装備より下位の装備も使用可能です。<br>（辿異武器 > 覇種 > 遷悠 > G級）",
    "rules.5": "辿異シジルは使用禁止。",
    "rules.6": "元気のみなもと/ログインブースト不可。",
    "rules.7": "ラスタやその他のNPCは使用禁止（クエストのルールで別途記載がある場合を除く。ホルクは使用可）。",
    "rules.8": "秘伝開眼奥義は使用禁止。",
    "rules.9": "祈珠は使用禁止。",
    "rules.10": "すべてのクエストは<b>ソロ</b>でクリアすること（blue friends禁止）。",
    "rules.11": "すべてのクエストはRainサーバーでクリアすること。",
    "rules.12": "Modや外部ツールの使用は禁止です。",
    "rules.13": "いかなる不正行為も永久BANの対象となります。",
    "rules.callout": "<b>挑戦する前に、各クエスト固有のルールを必ずよく読んでください。</b>",

    "rewards.title": "報酬",
    "rewards.1": "称号「Rain Challenger」",
    "rewards.2": "限定武器1つ",
    "rewards.3": "100,000 Bounty Coins",
    "rewards.4": "Weekly Marketで5%割引",

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

    "restriction.Partnya only allowed for gunners": "パートニャーはガンナーのみ使用可",
    "restriction.GR Weapon (Exotic, Gou/Supremacy allowed)": "G級武器（遷悠、剛種/覇種可）",
    "restriction.GR Armor (Exotic, Gou/Supremacy allowed)": "G級防具（遷悠、剛種/覇種可）",
    "restriction.GR armor (Exotic, Gou/Supremacy allowed)": "G級防具（遷悠、剛種/覇種可）",
    "restriction.G cuff only": "G級カフのみ",
    "restriction.Hiden/Tech not allowed": "秘伝スキル/武器技禁止",
    "restriction.Solid Determination not allowed": "不退ノ構禁止",
    "restriction.Premium and Prayer not allowed": "課金・祈歌禁止",
    "restriction.Premium or Prayer weapons not allowed": "課金・祈歌武器は禁止",
    "restriction.Z sigil not allowed": "辿異シジル禁止",
    "restriction.Z Sigil not allowed": "辿異シジル禁止",
    "restriction.Zenith (Premium allowed)": "辿異（課金可）",
    "restriction.Evo/Tower/Netcafe not allowed": "進化/天廊/ネットカフェ禁止",
    "restriction.Prayer not allowed": "祈歌禁止",
    "restriction.Poison MS not allowed": "毒マグネットスパイク禁止",
    "restriction.Any": "制限なし",
    "restriction.Zenith": "辿異",
    "restriction.Zenith allowed": "辿異可",
    "restriction.Zenith weapon allowed": "辿異武器可",
    "restriction.Premium/Evo/Prayer not allowed": "課金/進化/祈歌禁止",
    "restriction.Premium/Prayer/Evo/Tower not allowed": "課金/祈歌/進化/天廊禁止",
    "restriction.Premium/Tower allowed (g-rank only)": "課金/天廊可（G級のみ）",
    "restriction.Evolution/Prayer not allowed": "進化/祈歌禁止",
  },
  de: {
    "nav.home": "Startseite",
    "nav.quests": "Quests",

    "home.docTitle": "Rain Challenger Seite",

    "intro.title": "Was ist Rain Challenger?",
    "intro.text": `Bei Rain Challenger musst du eine Reihe von Quests unter bestimmten Bedingungen
      innerhalb eines Zeitlimits abschließen. Für jede Quest kannst du zwischen 5 Waffen wählen.
      Hast du die Herausforderung gemeistert, reichst du alle deine Screenshots zur Überprüfung in
      diesem <a href="${DISCORD_SUBMIT}">Discord-Channel</a> ein, um deine Belohnungen zu erhalten.`,

    "rules.title": "Regeln",
    "rules.1": `Alle Challenger-Quests innerhalb des Zeitlimits abschließen (siehe
      <a href="./quests.html">Quest-Seite</a> oder diesen <a href="${DISCORD_QUESTS}">Discord-Channel</a>).`,
    "rules.2": `Alle Screenshots auf einmal in diesem <a href="${DISCORD_SUBMIT}">Discord-Channel</a>
      einreichen. Für jede Quest müssen sichtbar sein: <b>Chat Log, Equipment Status</b>.`,
    "rules.3": `Keine Pray-, Tower-, Zenith-, Evolution-, Netcafe- oder Premium-Waffen, außer die
      Regeln einer Quest erlauben es ausdrücklich.`,
    "rules.4": `Ausrüstung eines niedrigeren Rangs als die erlaubte ist ebenfalls erlaubt.<br>
      (Zenith-Waffen > Supremacy > Exotic > G-Rang)`,
    "rules.5": "Keine Zenith Sigils.",
    "rules.6": "Kein Login Boost und keine Halk Potion.",
    "rules.7": "Keine Rastas oder andere NPCs, außer die Regeln der Quest erlauben es (Halk erlaubt).",
    "rules.8": "Keine Secret Tech.",
    "rules.9": "Keine Prayer Gems.",
    "rules.10": "Alle Quests müssen <b>Solo</b> abgeschlossen werden (keine blue friends).",
    "rules.11": "Alle Quests müssen auf dem Rain-Server abgeschlossen werden.",
    "rules.12": "Mods und andere externe Tools sind verboten.",
    "rules.13": "Jede Form von Cheating führt zu einem permanenten Bann.",
    "rules.callout": "<b>Lies die spezifischen Regeln jeder Quest unbedingt vorher sorgfältig durch.</b>",

    "rewards.title": "Belohnungen",
    "rewards.1": 'Der Titel "Rain Challenger".',
    "rewards.2": "Eine exklusive Waffe.",
    "rewards.3": "100.000 Bounty Coins.",
    "rewards.4": `5${NBSP}% Rabatt im Weekly Market.`,

    "quests.title": "Quests",
    "quests.timeLimits": "Zeitlimit",
    "quests.restrictions": "Einschränkungen",
    "quests.general": "Allgemein",
    "quests.weapons": "Waffen",
    "quests.armor": "Rüstung",
    "quests.skills": "Fertigkeiten",
    "quests.markHint": "{name}: klicken, um als geschafft zu markieren",

    "weapon.gs": "Großschwert",
    "weapon.ls": "Langschwert",
    "weapon.sns": "Schwert und Schild",
    "weapon.ds": "Doppelklingen",
    "weapon.ham": "Hammer",
    "weapon.hh": "Jagdhorn",
    "weapon.lan": "Lanze",
    "weapon.gl": "Gewehrlanze",
    "weapon.ton": "Tonfa",
    "weapon.saf": "Morph-Axt F",
    "weapon.ms": "Magnet Spike",
    "weapon.lbg": "Leichtes Bogengewehr",
    "weapon.hbg": "Schweres Bogengewehr",
    "weapon.bow": "Bogen",

    "restriction.Partnya only allowed for gunners": "Partnya nur für Schützen erlaubt",
    "restriction.GR Weapon (Exotic, Gou/Supremacy allowed)": "GR Weapon (Exotic, Gou/Supremacy erlaubt)",
    "restriction.GR Armor (Exotic, Gou/Supremacy allowed)": "GR Armor (Exotic, Gou/Supremacy erlaubt)",
    "restriction.GR armor (Exotic, Gou/Supremacy allowed)": "GR Armor (Exotic, Gou/Supremacy erlaubt)",
    "restriction.G cuff only": "Nur G Cuff.",
    "restriction.Hiden/Tech not allowed": "Hiden/Tech nicht erlaubt",
    "restriction.Solid Determination not allowed": "Solid Determination nicht erlaubt",
    "restriction.Premium and Prayer not allowed": "Premium und Prayer nicht erlaubt",
    "restriction.Premium or Prayer weapons not allowed": "Premium- oder Prayer-Waffen nicht erlaubt.",
    "restriction.Z sigil not allowed": "Z Sigil nicht erlaubt",
    "restriction.Z Sigil not allowed": "Z Sigil nicht erlaubt",
    "restriction.Zenith (Premium allowed)": "Zenith (Premium erlaubt)",
    "restriction.Evo/Tower/Netcafe not allowed": "Evo/Tower/Netcafe nicht erlaubt",
    "restriction.Prayer not allowed": "Prayer nicht erlaubt",
    "restriction.Poison MS not allowed": "Poison MS nicht erlaubt",
    "restriction.Any": "Keine Einschränkung.",
    "restriction.Zenith": "Zenith",
    "restriction.Zenith allowed": "Zenith erlaubt",
    "restriction.Zenith weapon allowed": "Zenith-Waffen erlaubt",
    "restriction.Premium/Evo/Prayer not allowed": "Premium/Evo/Prayer nicht erlaubt",
    "restriction.Premium/Prayer/Evo/Tower not allowed": "Premium/Prayer/Evo/Tower nicht erlaubt",
    "restriction.Premium/Tower allowed (g-rank only)": "Premium/Tower erlaubt (nur G-Rang)",
    "restriction.Evolution/Prayer not allowed": "Evolution/Prayer nicht erlaubt",
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
}

window.RCI18n = { setLang, translate };
