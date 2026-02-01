/*RARITIES*/
const RARITIES = {
  Common: { odds: 50, colorClass: "rarity-common" },
  Uncommon: { odds: 25, colorClass: "rarity-uncommon" },
  Rare: { odds: 15, colorClass: "rarity-rare" },
  Epic: { odds: 9, colorClass: "rarity-epic" },
  Legendary: { odds: 1, colorClass: "rarity-legendary" },
};

/*SERIES*/
const SERIES = [
  { name: "Bleach", displayName: "Bleach Cards" },
  { name: "Naruto", displayName: "Naruto Cards" },
  { name: "One Piece", displayName: "One Piece Cards" }
];

/*CARDS*/
const CARDS = {
  /*Bleach*/
  ichigo: { name: "Ichigo", series: "Bleach", pack: "agentofshinigami", rarity: "Common", image: "images/agentofshinigami/ichigo.png", coinsPerSecond: 1, resale: 1},
  yuzu: { name: "Yuzu Kurosaki", series: "Bleach", pack: "agentofshinigami", rarity: "Common", image: "images/agentofshinigami/yuzu.png", coinsPerSecond: 1.2, resale: 1},
  karin: { name: "Karin Kurosaki", series: "Bleach", pack: "agentofshinigami", rarity: "Common", image: "images/agentofshinigami/karin.png", coinsPerSecond: 1.3, resale: 1},
  tatsuki: { name: "Tatsuki", series: "Bleach", pack: "agentofshinigami", rarity: "Uncommon", image: "images/agentofshinigami/tatsuki.png", coinsPerSecond: 1.4, resale: 1},
  keigo: { name: "Keigo", series: "Bleach", pack: "agentofshinigami", rarity: "Uncommon", image: "images/agentofshinigami/keigo.png", coinsPerSecond: 1.5, resale: 1},
  isshin: { name: "Isshin", series: "Bleach", pack: "agentofshinigami", rarity: "Uncommon", image: "images/agentofshinigami/isshin.png", coinsPerSecond: 1.6, resale: 1},
  kaien: { name: "Kaien", series: "Bleach", pack: "agentofshinigami", rarity: "Uncommon", image: "images/agentofshinigami/kaien.png", coinsPerSecond: 1.8, resale: 1},
  chad: { name: "Chad", series: "Bleach", pack: "agentofshinigami", rarity: "Rare", image: "images/agentofshinigami/chad.png", coinsPerSecond: 1.9, resale: 1.5},
  rukia: { name: "Rukia", series: "Bleach", pack: "agentofshinigami", rarity: "Rare", image: "images/agentofshinigami/rukia.png", coinsPerSecond: 2, resale: 2.5},

  /*Naruto*/
  naruto: { name: "Naruto", series: "Naruto", pack: "landOfWaves", rarity: "Common", image: "images/landofwaves/naruto.png", coinsPerSecond: 1.2, resale: 2},
  sakura: { name: "Sakura", series: "Naruto", pack: "landOfWaves", rarity: "Uncommon", image: "images/landofwaves/sakura.png", coinsPerSecond: 1.4, resale: 2},
  konohamaru: { name: "Konohamaru", series: "Naruto", pack: "landOfWaves", rarity: "Uncommon", image: "images/landofwaves/konohamaru.png", coinsPerSecond: 1.6, resale: 2},
  iruka: { name: "Iruka", series: "Naruto", pack: "landOfWaves", rarity: "Uncommon", image: "images/landofwaves/iruka.png", coinsPerSecond: 1.8, resale: 2},
  sasuke: { name: "Sasuke", series: "Naruto", pack: "landOfWaves", rarity: "Rare", image: "images/landofwaves/sasuke.png", coinsPerSecond: 2, resale: 3},
  ebisu: { name: "Ebisu", series: "Naruto", pack: "landOfWaves", rarity: "Rare", image: "images/landofwaves/ebisu.png", coinsPerSecond: 2.2, resale: 3},
  haku: { name: "Haku", series: "Naruto", pack: "landOfWaves", rarity: "Rare", image: "images/landofwaves/haku.png", coinsPerSecond: 2.4, resale: 3},
  hiruzen: { name: "Hiruzen", series: "Naruto", pack: "landOfWaves", rarity: "Epic", image: "images/landofwaves/hiruzen.png", coinsPerSecond: 2.6, resale: 4},
  kakashi: { name: "Kakashi", series: "Naruto", pack: "landOfWaves", rarity: "Epic", image: "images/landofwaves/kakashi.png", coinsPerSecond: 2.8, resale: 4},
  zabuza: { name: "Zabuza", series: "Naruto", pack: "landOfWaves", rarity: "Epic", image: "images/landofwaves/zabuza.png", coinsPerSecond: 3.5, resale: 5},
  
  /*Chunin Exams*/
  kiba: { name: "Kiba", series: "Naruto", pack: "chunninexams", rarity: "Common", image: "images/chunninexams/kiba.png", coinsPerSecond: 2.5, resale: 2},
  ino: { name: "Ino", series: "Naruto", pack: "chunninexams", rarity: "Common", image: "images/chunninexams/ino.png", coinsPerSecond: 2.6, resale: 2},
  tenten: { name: "Tenten", series: "Naruto", pack: "chunninexams", rarity: "Common", image: "images/chunninexams/tenten.png", coinsPerSecond: 2.7, resale: 2},
  kintsuchi: { name: "Kin Tsuchi", series: "Naruto", pack: "chunninexams", rarity: "Common", image: "images/chunninexams/kintsuchi.png", coinsPerSecond: 3.4, resale: 2},
  zaku: { name: "Zaku", series: "Naruto", pack: "chunninexams", rarity: "Common", image: "images/chunninexams/zaku.png", coinsPerSecond: 2.8, resale: 2},
  shino: { name: "Shino", series: "Naruto", pack: "chunninexams", rarity: "Uncommon", image: "images/chunninexams/shino.png", coinsPerSecond: 2.9, resale: 5},
  choji: { name: "Choji", series: "Naruto", pack: "chunninexams", rarity: "Uncommon", image: "images/chunninexams/choji.png", coinsPerSecond: 3, resale: 5},
  shikamaru: { name: "Shikamaru", series: "Naruto", pack: "chunninexams", rarity: "Uncommon", image: "images/chunninexams/shikamaru.png", coinsPerSecond: 3.1, resale: 5},
  hinata: { name: "Hinata", series: "Naruto", pack: "chunninexams", rarity: "Uncommon", image: "images/chunninexams/hinata.png", coinsPerSecond: 3.2, resale: 5},
  temari: { name: "Temari", series: "Naruto", pack: "chunninexams", rarity: "Uncommon", image: "images/chunninexams/temari.png", coinsPerSecond: 3.4, resale: 5},
  kankuro: { name: "Kankuro", series: "Naruto", pack: "chunninexams", rarity: "Rare", image: "images/chunninexams/kankuro.png", coinsPerSecond: 3.5, resale: 8},
  neji: { name: "Neji", series: "Naruto", pack: "chunninexams", rarity: "Rare", image: "images/chunninexams/neji.png", coinsPerSecond: 3.6, resale: 8},
  kabuto: { name: "Kabuto", series: "Naruto", pack: "chunninexams", rarity: "Rare", image: "images/chunninexams/kabuto.png", coinsPerSecond: 3.8, resale: 8},
  rocklee: { name: "Rock Lee", series: "Naruto", pack: "chunninexams", rarity: "Rare", image: "images/chunninexams/rocklee.png", coinsPerSecond: 4, resale: 8},
  orochimaru: { name: "Orochimaru", series: "Naruto", pack: "chunninexams", rarity: "Epic", image: "images/chunninexams/orochimaru.png", coinsPerSecond: 5, resale: 10},
  gaara: { name: "Gaara", series: "Naruto", pack: "chunninexams", rarity: "Legendary", image: "images/chunninexams/gaara.png", coinsPerSecond: 8, resale: 15},
  
  /*One Piece*/
  luffy: { name: "Luffy", series: "One Piece", pack: "romancedawn", rarity: "Common", image: "images/romancedawn/luffy.png", coinsPerSecond: 1.5, resale: 1},
  coby: { name: "Coby", series: "One Piece", pack: "romancedawn", rarity: "Common", image: "images/romancedawn/coby.png", coinsPerSecond: 1.6, resale: 1},
  makino: { name: "Makino", series: "One Piece", pack: "romancedawn", rarity: "Common", image: "images/romancedawn/makino.png", coinsPerSecond: 1.7, resale: 1},
  helmeppo: { name: "Helmeppo", series: "One Piece", pack: "romancedawn", rarity: "Common", image: "images/romancedawn/helmeppo.png", coinsPerSecond: 1.8, resale: 1},
  higuma: { name: "Higuma", series: "One Piece", pack: "romancedawn", rarity: "Common", image: "images/romancedawn/higuma.png", coinsPerSecond: 2, resale: 1},
  zoro: { name: "Zoro", series: "One Piece", pack: "romancedawn", rarity: "Uncommon", image: "images/romancedawn/zoro.png", coinsPerSecond: 2.2, resale: 1.5},
  alvida: { name: "Alvida", series: "One Piece", pack: "romancedawn", rarity: "Uncommon", image: "images/romancedawn/alvida.png", coinsPerSecond: 2.4, resale: 1.5},
  morgan: { name: "Axe-Hand Morgan", series: "One Piece", pack: "romancedawn", rarity: "Uncommon", image: "images/romancedawn/morgan.png", coinsPerSecond: 2.5, resale: 1.5},
  lucky: { name: "Lucky Roux", series: "One Piece", pack: "romancedawn", rarity: "Rare", image: "images/romancedawn/lucky.png", coinsPerSecond: 3, resale: 1.5},
  benn: { name: "Benn Beckman", series: "One Piece", pack: "romancedawn", rarity: "Epic", image: "images/romancedawn/benn.png", coinsPerSecond: 4, resale: 2},
  shanks: { name: "Shanks", series: "One Piece", pack: "romancedawn", rarity: "Legendary", image: "images/romancedawn/shanks.png", coinsPerSecond: 6, resale: 3},

  nami: { name: "Nami", series: "One Piece", pack: "orangetown", rarity: "Common", image: "images/orangetown/nami.png", coinsPerSecond: 4, resale: 10},
  mohji: { name: "Mohji", series: "One Piece", pack: "orangetown", rarity: "Common", image: "images/orangetown/mohji.png", coinsPerSecond: 4.2, resale: 10},
  chouchou: { name: "Chou-chou", series: "One Piece", pack: "orangetown", rarity: "Uncommon", image: "images/orangetown/chouchou.png", coinsPerSecond: 4.5, resale: 15},
  richie: { name: "Richie", series: "One Piece", pack: "orangetown", rarity: "Uncommon", image: "images/orangetown/richie.png", coinsPerSecond: 4.8, resale: 15},
  cabaji: { name: "Cabaji", series: "One Piece", pack: "orangetown", rarity: "Rare", image: "images/orangetown/cabaji.png", coinsPerSecond: 5, resale: 15},
  buggy: { name: "Buggy", series: "One Piece", pack: "orangetown", rarity: "Legendary", image: "images/orangetown/buggy.png", coinsPerSecond: 10, resale: 18},
};

/*PACK GROUPS*/
const PACK_GROUPS = {
  /*Bleach Packs*/
  "Bleach": {enableViewAll: true,image: "series/bleachpack.png", packs:{
   agentofshinigami: {name: "Agent Of The Shinigami", price: 25, cardsPerPack: 3, series: "Bleach", image: "packs/agentofshinigami.png"}}},
  /*Naruto Packs*/
  "Naruto": {enableViewAll: true,image: "series/narutopack.png", packs:{
   landOfWaves: {name: "Land of Waves", price: 50, cardsPerPack: 2, series: "Naruto", image: "packs/landofwaves.png"},
   chunninexams: {name: "Chunnin Exams", price: 250, cardsPerPack: 2, series: "Naruto", image: "packs/chunninexams.png"}}},
   /*One Piece Packs*/
  "One Piece": {enableViewAll: true,image: "series/onepiecepack.png", packs:{
   romancedawn: {name: "Romance Dawn", price: 100, cardsPerPack: 2, series: "One Piece", image: "packs/romancedawn.png"},
   orangetown: {name: "Orange Town", price: 350, cardsPerPack: 1, series: "One Piece", image: "packs/orangetown.png"}}},
};

/* PROGRESSION RULES */
const PROGRESSION_RULES = {
  // Bleach starter
  agentofshinigami: {unlockedByDefault: true},
  
  // Naruto progression
  landOfWaves: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["agentofshinigami"]}, lockText: "Complete Agents Of Shinigami"},
  chunninexams: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["landOfWaves"]}, lockText: "Complete Land of Waves"},

  // One Piece progression
  romancedawn: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["landOfWaves"]}, lockText: "Complete Land Of Waves"},
  orangetown: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["romancedawn"]}, lockText: "Complete Romance Dawn"}
};

/*Max Coins*/
const MAX_COINS = 10000;

//seriesCompletion
//packCompletion

/*PLAYER STATE*/
let coins = 25;
let ownedCards = {};
let selectedCard = null;
let activeSeries = null;
let unlockedPacks = {};

/*Pack Unlock Stuff*/
function initializeUnlocks() {
  Object.entries(PROGRESSION_RULES).forEach(([packKey, rule]) => {
    if (rule.unlockedByDefault) {
      unlockedPacks[packKey] = true;
    } else {
      unlockedPacks[packKey] = unlockedPacks[packKey] ?? false;
    }
  });
}

/*UTILITIES*/

function addCoins(amount) {
  coins += amount;
  if (coins >= MAX_COINS) {coins = MAX_COINS;}

  updateCoins();
}

function getRandomCardForPack(series, packKey) {
  const pool = [];

  Object.entries(CARDS).forEach(([id, card]) => {
    if (card.series === series && card.pack === packKey) {  // <-- check pack too
      const weight = RARITIES[card.rarity].odds;
      for (let i = 0; i < weight; i++) {
        pool.push({ id, ...card });
      }
    }
  });

  if (pool.length === 0) return null; // fallback if no cards match

  return pool[Math.floor(Math.random() * pool.length)];
}

function isPackComplete(packKey) {
  const cardsInPack = Object.entries(CARDS)
    .filter(([_, c]) => c.pack === packKey)
    .map(([id]) => id);

  return cardsInPack.every(id => ownedCards[id]);
}

/*CHECK COMPLETION HELPERS*/
function isSeriesComplete(seriesName) {
  const cardsInSeries = Object.entries(CARDS)
    .filter(([_, c]) => c.series === seriesName)
    .map(([id]) => id);

  return cardsInSeries.every(id => ownedCards[id]);
}

/*Double Check Unlock*/
function checkUnlocks() {
  Object.entries(PROGRESSION_RULES).forEach(([packKey, rule]) => {
    if (unlockedPacks[packKey]) return;

    if (!rule.requires) return;

    let unlocked = false;

    if (rule.requires.type === "packCompletion") {
      unlocked = rule.requires.packs.every(isPackComplete);
    }

    if (rule.requires.type === "seriesCompletion") {
      unlocked = rule.requires.series.every(isSeriesComplete);
    }

    if (unlocked) {
      unlockedPacks[packKey] = true;
    }
  });
}

/*PACK OPENING*/
function openGroupedPack(seriesName, packKey) {
  const pack = PACK_GROUPS[seriesName].packs[packKey];
  if (coins < pack.price) return alert("Not enough coins");

  coins -= pack.price;
  updateCoins();

  const pulls = [];

  for (let i = 0; i < pack.cardsPerPack; i++) {
    const card = getRandomCardForPack(pack.series, packKey);
    if (!card) continue;

    if (ownedCards[card.id]) {
      addCoins(card.resale);
      pulls.push({ ...card, sold: true });
    } else {
      ownedCards[card.id] = card;
      pulls.push({ ...card, sold: false });
    }
  }

  showPullResults(pulls);
  checkUnlocks();
  // Force collection refresh even if user is inside a series
  const prevSeries = activeSeries;
  activeSeries = null;
  renderCollection();
  activeSeries = prevSeries;
  renderCollection();
}

/*PULL RESULTS*/
function showPullResults(pulls) {
  const modal = document.getElementById("pullResults");
  const container = document.getElementById("pullCards");

  container.innerHTML = "";

  pulls.forEach(card => {
    const div = document.createElement("div");
    div.className = `card ${RARITIES[card.rarity].colorClass}`;
    div.innerHTML = `
      <img src="${card.image}">
      <div>${card.name}</div>
      ${card.sold ? `<div class="sold">Sold +${card.resale}</div>` : ""}
    `;
    container.appendChild(div);
  });

  modal.style.display = "flex";
}

/*SHOP*/
function renderShop() {
  const container = document.getElementById("shopList");
  container.innerHTML = "";

  Object.entries(PACK_GROUPS).forEach(([seriesName, group]) => {
    const div = document.createElement("div");
    div.className = "pack";
    div.innerHTML = `
      <div>
        <h3>${seriesName}</h3>
        <p>${Object.keys(group.packs).length} Packs</p>
      </div>
      <img src="${group.image}">
      <button>View All</button>
    `;
    div.querySelector("button").onclick = () => renderShopSeries(seriesName);
    container.appendChild(div);
  });
}

function renderShopSeries(seriesName) {
  const container = document.getElementById("shopList");
  container.innerHTML = "";

  const back = document.createElement("button");
  back.textContent = "Back";
  back.onclick = renderShop;
  container.appendChild(back);

  const group = PACK_GROUPS[seriesName];

  Object.entries(group.packs).forEach(([key, pack]) => {
    const div = document.createElement("div");
    const isUnlocked = unlockedPacks[key];
    div.className = `pack ${!isUnlocked ? "locked-pack" : ""}`;
    div.innerHTML = `
      <div>
        <h3>${pack.name}</h3>
        <p>Cost: ${pack.price} coins</p>
        <p>Drops: ${pack.cardsPerPack}</p>
        <p>Cards: ${Object.values(CARDS).filter(c => c.pack === key && c.series === seriesName).length}</p>
      </div>
      <img src="${pack.image}">
      ${isUnlocked
    ? `<button onclick="openGroupedPack('${seriesName}','${key}')">Buy</button>`
    : `<div class="lock-overlay">${PROGRESSION_RULES[key]?.lockText || "Locked"}</div>`
}
    `;
    container.appendChild(div);
  });
}

/*COLLECTION (FILTER BY PACK)*/
function renderCollection() {
  const grid = document.getElementById("cardGrid");
  const buttons = document.getElementById("seriesButtons");

  grid.innerHTML = "";
  buttons.innerHTML = "";

  if (!activeSeries) {
    SERIES.forEach(series => {
      const btn = document.createElement("button");
      btn.textContent = series.name;
      btn.onclick = () => {
        activeSeries = series.name;
        renderCollection();
      };
      buttons.appendChild(btn);
    });
    return;
  }

  const back = document.createElement("button");
  back.textContent = "Back";
  back.onclick = () => {
    activeSeries = null;
    renderCollection();
  };
  buttons.appendChild(back);

  const group = PACK_GROUPS[activeSeries];

  Object.entries(group.packs).forEach(([packKey, pack]) => {
    const title = document.createElement("h3");
    const totalCards = Object.values(CARDS).filter(c => c.series === activeSeries && c.pack === packKey).length;
    title.innerHTML = `${pack.name} <br><span style="font-size: 12px; color:#aaa;">Drops: ${pack.cardsPerPack} | Cards: ${totalCards}</span>`;
     grid.appendChild(title);

    const section = document.createElement("div");
    section.className = "pack-section";

    Object.entries(CARDS)
  .filter(([_, card]) => card.series === activeSeries && card.pack === packKey)
  .forEach(([id, card]) => {
    const owned = ownedCards[id];
    const div = document.createElement("div");
    div.className = `card ${owned ? RARITIES[card.rarity].colorClass : "locked"}`;
    div.innerHTML = `
      <img src="${card.image}">
      <div>${card.name}</div>
      ${owned ? `<div style="font-size:10px;color:#ffd700;">${card.coinsPerSecond} coins/sec</div>` : ""}
    `;

    // Allow selecting a card if owned
    if (owned) {
   if (selectedCard && selectedCard.name === card.name) {
    div.classList.add("selected");
  }
div.onclick = () => {
  if (selectedCard && selectedCard.name === card.name) {
    selectedCard = null;
    document.getElementById("selectedInfo").textContent =
      "Selected Card: None";

    div.classList.remove("selected");
    return;
  }

  selectedCard = card;
  document.getElementById("selectedInfo").textContent =
    `Selected Card: ${card.name} (${card.coinsPerSecond} coins/sec)`;

  document.querySelectorAll("#cardGrid .card")
    .forEach(c => c.classList.remove("selected"));
  div.classList.add("selected");
  };
}

    section.appendChild(div);
  });

    grid.appendChild(section);
    grid.appendChild(document.createElement("hr"));
  });
}

/*COINS*/
function updateCoins() {
  coins = Math.min(coins, MAX_COINS);

  // Round coins to 1 decimal place
  const rounded = Math.round(coins * 10) / 10;

  // Add commas (1,000 / 10,000 etc.)
  const formatted = rounded.toLocaleString("en-US", {
    minimumFractionDigits: rounded % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 1
  });

  document.getElementById("coins").textContent = `Coins: ${formatted}`;
}

/*MENU / MODAL*/
function showMenu(id) {
  document.querySelectorAll(".menu").forEach(m => m.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function closePullResults() {
  document.getElementById("pullResults").style.display = "none";
}

/*SAVE / LOAD / RESET*/

/* EXPORT SAVE */
function exportSave() {
  const saveData = {
  coins,
  ownedCards,
  selectedCard,
  activeSeries,
  unlockedPacks
};

  const dataStr = JSON.stringify(saveData, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "anicard-save.json";
  a.click();

  URL.revokeObjectURL(url);
}

/* IMPORT BUTTON */
function triggerImport() {
  document.getElementById("importFile").click();
}

/* IMPORT FILE HANDLER */
document.getElementById("importFile").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);

      coins = Math.max(coins, data.coins ?? 50);
      ownedCards = { ...ownedCards, ...data.ownedCards };
      if (data.selectedCard && ownedCards[data.selectedCard.id]) {
        selectedCard = data.selectedCard;
      } else {
        selectedCard = null;
      }

      activeSeries = SERIES.some(s => s.name === data.activeSeries) ? data.activeSeries : null;
      unlockedPacks = { ...unlockedPacks, ...data.unlockedPacks };

      initializeUnlocks();
      checkUnlocks();
      updateCoins();
      renderCollection();
      renderShop();

      alert("Save imported successfully!");
    } catch (err) {
      alert("Invalid save file.");
    }
  };

  reader.readAsText(file);

  event.target.value = "";
});

/* RESET GAME */
function resetGame() {
  if (!confirm("Are you sure you want to reset your game?")) return;

  coins = 50;
  ownedCards = {};
  selectedCard = null;
  activeSeries = null;
  unlockedPacks = {};

  initializeUnlocks();
  updateCoins();
  renderCollection();
  renderShop();
}

// Coins generator
function startCoinGeneration() {
  setInterval(() => {
    if (selectedCard && coins < MAX_COINS) {
      addCoins(selectedCard.coinsPerSecond);
    }
  }, 1000); // every 1000ms = 1 second
}

// Start the coin generator
startCoinGeneration();

/*INIT*/
renderShop();
renderCollection();
updateCoins();
initializeUnlocks();
checkUnlocks();
