const QUEST_FILES = [
  'sd8.json',
  'str2.json',
  'eb4.json'
]

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

function createQuestCard(quest) {
  const card = document.createElement('div');
  card.className = 'quest-card';
  card.innerHTML = `
    <h1> ${quest.quest_name} </h1>
  `
  return card
}
