/*RARITIES*/
const RARITIES = {
  Common: { odds: 50, colorClass: "rarity-common" },
  Uncommon: { odds: 25, colorClass: "rarity-uncommon" },
  Rare: { odds: 15, colorClass: "rarity-rare" },
  Epic: { odds: 8, colorClass: "rarity-epic" },
  Legendary: { odds: 1.5, colorClass: "rarity-legendary" },
  Mythic: { odds: 0.5, colorClass: "rarity-mythic" },
};

/*SERIES*/
const SERIES = [
  { name: "Bleach", displayName: "Bleach Cards" },
  { name: "Naruto", displayName: "Naruto Cards" },
  { name: "One Piece", displayName: "One Piece Cards" },
  { name: "Jujutsu Kaisen", displayName: "Jujutsu Kaisen Cards" },
];

/*CARDS*/
const CARDS = {
  /*Bleach*/
  ichigo: { name: "Ichigo", series: "Bleach", pack: "agentofshinigami", rarity: "Common", image: "images/agentofshinigami/ichigo.png", coinsPerSecond: 1, resale: 1},
  orihime: { name: "Orihime", series: "Bleach", pack: "agentofshinigami", rarity: "Common", image: "images/agentofshinigami/orihime.png", coinsPerSecond: 1.1, resale: 1},
  yuzu: { name: "Yuzu Kurosaki", series: "Bleach", pack: "agentofshinigami", rarity: "Common", image: "images/agentofshinigami/yuzu.png", coinsPerSecond: 1.2, resale: 1},
  karin: { name: "Karin Kurosaki", series: "Bleach", pack: "agentofshinigami", rarity: "Common", image: "images/agentofshinigami/karin.png", coinsPerSecond: 1.3, resale: 1},
  tatsuki: { name: "Tatsuki", series: "Bleach", pack: "agentofshinigami", rarity: "Uncommon", image: "images/agentofshinigami/tatsuki.png", coinsPerSecond: 1.4, resale: 1},
  keigo: { name: "Keigo", series: "Bleach", pack: "agentofshinigami", rarity: "Uncommon", image: "images/agentofshinigami/keigo.png", coinsPerSecond: 1.5, resale: 1},
  isshin: { name: "Isshin", series: "Bleach", pack: "agentofshinigami", rarity: "Uncommon", image: "images/agentofshinigami/isshin.png", coinsPerSecond: 1.6, resale: 1},
  kaien: { name: "Kaien", series: "Bleach", pack: "agentofshinigami", rarity: "Uncommon", image: "images/agentofshinigami/kaien.png", coinsPerSecond: 1.8, resale: 1},
  chad: { name: "Chad", series: "Bleach", pack: "agentofshinigami", rarity: "Rare", image: "images/agentofshinigami/chad.png", coinsPerSecond: 1.9, resale: 1.5},
  rukia: { name: "Rukia", series: "Bleach", pack: "agentofshinigami", rarity: "Rare", image: "images/agentofshinigami/rukia.png", coinsPerSecond: 2, resale: 2.5},

  /*Soul Society*/
  kon: { name: "Kon", series: "Bleach", pack: "soulsociety", rarity: "Common", image: "images/soulsociety/kon.png", coinsPerSecond: 5, resale: 12},
  yamada: { name: "Yamada", series: "Bleach", pack: "soulsociety", rarity: "Common", image: "images/soulsociety/yamada.png", coinsPerSecond: 5.2, resale: 12},
  omaeda: { name: "Omaeda", series: "Bleach", pack: "soulsociety", rarity: "Common", image: "images/soulsociety/omaeda.png", coinsPerSecond: 5.4, resale: 12},
  kotetsu: { name: "Kotetsu", series: "Bleach", pack: "soulsociety", rarity: "Common", image: "images/soulsociety/kotetsu.png", coinsPerSecond: 5.6, resale: 12},
  chojiro: { name: "Chojiro", series: "Bleach", pack: "soulsociety", rarity: "Common", image: "images/soulsociety/chojiro.png", coinsPerSecond: 5.8, resale: 12},
  momo: { name: "Momo", series: "Bleach", pack: "soulsociety", rarity: "Common", image: "images/soulsociety/momo.png", coinsPerSecond: 6, resale: 12},
  nanao: { name: "Nanao", series: "Bleach", pack: "soulsociety", rarity: "Common", image: "images/soulsociety/nanao.png", coinsPerSecond: 6.2, resale: 12},
  yachiru: { name: "Yachiru", series: "Bleach", pack: "soulsociety", rarity: "Uncommon", image: "images/soulsociety/yachiru.png", coinsPerSecond: 6.4, resale: 18},
  ayasegawa: { name: "Ayasegawa", series: "Bleach", pack: "soulsociety", rarity: "Uncommon", image: "images/soulsociety/ayasegawa.png", coinsPerSecond: 6.8, resale: 18},
  ganju: { name: "Ganju", series: "Bleach", pack: "soulsociety", rarity: "Uncommon", image: "images/soulsociety/ganju.png", coinsPerSecond: 7, resale: 18},
  kukaku: { name: "Kukaku", series: "Bleach", pack: "soulsociety", rarity: "Uncommon", image: "images/soulsociety/kukaku.png", coinsPerSecond: 7.5, resale: 18},
  shuhei: { name: "Shuhei", series: "Bleach", pack: "soulsociety", rarity: "Uncommon", image: "images/soulsociety/shuhei.png", coinsPerSecond: 8, resale: 18},
  izuru: { name: "Izuru", series: "Bleach", pack: "soulsociety", rarity: "Uncommon", image: "images/soulsociety/izuru.png", coinsPerSecond: 8.2, resale: 18},
  uryu: { name: "Uryu", series: "Bleach", pack: "soulsociety", rarity: "Rare", image: "images/soulsociety/uryu.png", coinsPerSecond: 8.5, resale: 22},
  ikkaku: { name: "Ikkaku", series: "Bleach", pack: "soulsociety", rarity: "Rare", image: "images/soulsociety/ikkaku.png", coinsPerSecond: 8.8, resale: 22},
  soifon: { name: "Soi-Fon", series: "Bleach", pack: "soulsociety", rarity: "Rare", image: "images/soulsociety/soifon.png", coinsPerSecond: 9, resale: 22},
  rangiku: { name: "Rangiku", series: "Bleach", pack: "soulsociety", rarity: "Rare", image: "images/soulsociety/rangiku.png", coinsPerSecond: 9.2, resale: 22},
  mayuri: { name: "Mayuri", series: "Bleach", pack: "soulsociety", rarity: "Rare", image: "images/soulsociety/mayuri.png", coinsPerSecond: 9.4, resale: 22},
  komamura: { name: "Komamura", series: "Bleach", pack: "soulsociety", rarity: "Rare", image: "images/soulsociety/komamura.png", coinsPerSecond: 9.5, resale: 22},
  renji: { name: "Renji", series: "Bleach", pack: "soulsociety", rarity: "Epic", image: "images/soulsociety/renji.png", coinsPerSecond: 10, resale: 25},
  ukitake: { name: "Ukitake", series: "Bleach", pack: "soulsociety", rarity: "Epic", image: "images/soulsociety/ukitake.png", coinsPerSecond: 10.4, resale: 25},
  tosen: { name: "Tosen", series: "Bleach", pack: "soulsociety", rarity: "Epic", image: "images/soulsociety/tosen.png", coinsPerSecond: 10.8, resale: 25},
  unohana: { name: "Unohana", series: "Bleach", pack: "soulsociety", rarity: "Epic", image: "images/soulsociety/unohana.png", coinsPerSecond: 11, resale: 25},
  yoruichi: { name: "Yoruichi", series: "Bleach", pack: "soulsociety", rarity: "Epic", image: "images/soulsociety/yoruichi.png", coinsPerSecond: 11.5, resale: 25},
  byakuya: { name: "Byakuya", series: "Bleach", pack: "soulsociety", rarity: "Epic", image: "images/soulsociety/byakuya.png", coinsPerSecond: 12, resale: 30},
  hitsugaya: { name: "Hitsugaya", series: "Bleach", pack: "soulsociety", rarity: "Legendary", image: "images/soulsociety/hitsugaya.png", coinsPerSecond: 13, resale: 30},
  gin: { name: "Gin", series: "Bleach", pack: "soulsociety", rarity: "Legendary", image: "images/soulsociety/gin.png", coinsPerSecond: 15, resale: 30},
  kisuke: { name: "Kisuke", series: "Bleach", pack: "soulsociety", rarity: "Legendary", image: "images/soulsociety/kisuke.png", coinsPerSecond: 16, resale: 30},
  kenpachi: { name: "Kenpachi", series: "Bleach", pack: "soulsociety", rarity: "Legendary", image: "images/soulsociety/kenpachi.png", coinsPerSecond: 17, resale: 30},
  shunsui: { name: "Shunsui", series: "Bleach", pack: "soulsociety", rarity: "Legendary", image: "images/soulsociety/shunsui.png", coinsPerSecond: 18, resale: 30},
  yamamoto: { name: "Yamamoto", series: "Bleach", pack: "soulsociety", rarity: "Mythic", image: "images/soulsociety/yamamoto.png", coinsPerSecond: 22, resale: 45},
  aizen: { name: "Aizen", series: "Bleach", pack: "soulsociety", rarity: "Mythic", image: "images/soulsociety/aizen.png", coinsPerSecond: 25, resale: 50},

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
  /*Orange Town*/
  nami: { name: "Nami", series: "One Piece", pack: "orangetown", rarity: "Common", image: "images/orangetown/nami.png", coinsPerSecond: 4, resale: 10},
  mohji: { name: "Mohji", series: "One Piece", pack: "orangetown", rarity: "Common", image: "images/orangetown/mohji.png", coinsPerSecond: 4.2, resale: 10},
  chouchou: { name: "Chou-chou", series: "One Piece", pack: "orangetown", rarity: "Uncommon", image: "images/orangetown/chouchou.png", coinsPerSecond: 4.5, resale: 15},
  richie: { name: "Richie", series: "One Piece", pack: "orangetown", rarity: "Uncommon", image: "images/orangetown/richie.png", coinsPerSecond: 4.8, resale: 15},
  cabaji: { name: "Cabaji", series: "One Piece", pack: "orangetown", rarity: "Rare", image: "images/orangetown/cabaji.png", coinsPerSecond: 5, resale: 15},
  buggy: { name: "Buggy", series: "One Piece", pack: "orangetown", rarity: "Legendary", image: "images/orangetown/buggy.png", coinsPerSecond: 10, resale: 18},
  /*Syrup Village*/
  onion: { name: "Onion", series: "One Piece", pack: "syrupvillage", rarity: "Common", image: "images/syrupvillage/onion.png", coinsPerSecond: 4.2, resale: 10},
  pepper: { name: "Pepper", series: "One Piece", pack: "syrupvillage", rarity: "Common", image: "images/syrupvillage/pepper.png", coinsPerSecond: 4.4, resale: 10},
  carrot: { name: "Carrot", series: "One Piece", pack: "syrupvillage", rarity: "Common", image: "images/syrupvillage/carrot.png", coinsPerSecond: 4.6, resale: 10},
  merry: { name: "Merry", series: "One Piece", pack: "syrupvillage", rarity: "Common", image: "images/syrupvillage/merry.png", coinsPerSecond: 4.8, resale: 10},
  kaya: { name: "Kaya", series: "One Piece", pack: "syrupvillage", rarity: "Uncommon", image: "images/syrupvillage/kaya.png", coinsPerSecond: 5, resale: 15},
  usopp: { name: "Usopp", series: "One Piece", pack: "syrupvillage", rarity: "Uncommon", image: "images/syrupvillage/usopp.png", coinsPerSecond: 5.5, resale: 15},
  sham: { name: "Sham", series: "One Piece", pack: "syrupvillage", rarity: "Rare", image: "images/syrupvillage/sham.png", coinsPerSecond: 5.8, resale: 15},
  buchi: { name: "Buchi", series: "One Piece", pack: "syrupvillage", rarity: "Rare", image: "images/syrupvillage/buchi.png", coinsPerSecond: 6, resale: 15},
  jango: { name: "Jango", series: "One Piece", pack: "syrupvillage", rarity: "Rare", image: "images/syrupvillage/jango.png", coinsPerSecond: 8, resale: 20},
  kuro: { name: "Kuro", series: "One Piece", pack: "syrupvillage", rarity: "Epic", image: "images/syrupvillage/kuro.png", coinsPerSecond: 10.5, resale: 25},

  /*Jujutsu Kaisen*/
  ijichi: { name: "Ijichi", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Common", image: "images/jujutsukaisen/ijichi.png", coinsPerSecond: 6, resale: 20},
  misato: { name: "Misato", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Common", image: "images/jujutsukaisen/misato.png", coinsPerSecond: 6.4, resale: 20},
  arata: { name: "Arata", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Common", image: "images/jujutsukaisen/arata.png", coinsPerSecond: 6.8, resale: 20},
  akari: { name: "Akari", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Common", image: "images/jujutsukaisen/akari.png", coinsPerSecond: 7, resale: 20},
  momojjk: { name: "Momo", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Common", image: "images/jujutsukaisen/momojjk.png", coinsPerSecond: 7.4, resale: 20},
  mai: { name: "Mai", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Common", image: "images/jujutsukaisen/mai.png", coinsPerSecond: 7.8, resale: 20},
  amanai: { name: "Amanai", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Common", image: "images/jujutsukaisen/amanai.png", coinsPerSecond: 8, resale: 20},
  mimiko: { name: "Mimiko", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Common", image: "images/jujutsukaisen/mimiko.png", coinsPerSecond: 8.4, resale: 20},
  nanako: { name: "Nanako", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Common", image: "images/jujutsukaisen/nanako.png", coinsPerSecond: 8.8, resale: 20},
  jiro: { name: "Jiro", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Uncommon", image: "images/jujutsukaisen/jiro.png", coinsPerSecond: 9, resale: 30},
  ogami: { name: "Ogami", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Uncommon", image: "images/jujutsukaisen/ogami.png", coinsPerSecond: 9.4, resale: 30},
  juzo: { name: "Juzo", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Uncommon", image: "images/jujutsukaisen/juzo.png", coinsPerSecond: 9.4, resale: 30},
  haruta: { name: "Haruta", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Uncommon", image: "images/jujutsukaisen/haruta.png", coinsPerSecond: 9.8, resale: 30},
  junpei: { name: "Junpei", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Uncommon", image: "images/jujutsukaisen/junpei.png", coinsPerSecond: 10, resale: 30},
  uiui: { name: "Ui-Ui", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Uncommon", image: "images/jujutsukaisen/uiui.png", coinsPerSecond: 10.2, resale: 30},
  koguy: { name: "Ko-Guy", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Uncommon", image: "images/jujutsukaisen/koguy.png", coinsPerSecond: 10.4, resale: 30},
  miwa: { name: "Miwa", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Uncommon", image: "images/jujutsukaisen/miwa.png", coinsPerSecond: 10.5, resale: 30},
  meimei: { name: "Mei Mei", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/meimei.png", coinsPerSecond: 11, resale: 50},
  kamo: { name: "Kamo", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/kamo.png", coinsPerSecond: 11.5, resale: 50},
  utahime: { name: "Utahime", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/utahime.png", coinsPerSecond: 12, resale: 50},
  panda: { name: "Panda", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/panda.png", coinsPerSecond: 12.2, resale: 50},
  inumaki: { name: "Inumaki", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/inumaki.png", coinsPerSecond: 12.4, resale: 50},
  maki: { name: "Maki", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/maki.png", coinsPerSecond: 12.8, resale: 50},
  inojjk: { name: "Ino", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/ino.png", coinsPerSecond: 13, resale: 50},
  shoko: { name: "Shoko", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/shoko.png", coinsPerSecond: 13.2, resale: 50},
  nobara: { name: "Nobara", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/nobara.png", coinsPerSecond: 13.4, resale: 50},
  megumi: { name: "Megumi", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/megumi.png", coinsPerSecond: 13.8, resale: 50},
  itadori: { name: "Itadori", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Rare", image: "images/jujutsukaisen/itadori.png", coinsPerSecond: 14, resale: 50},
  miguel: { name: "Miguel", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Epic", image: "images/jujutsukaisen/miguel.png", coinsPerSecond: 15, resale: 65},
  kusakabe: { name: "Kusakabe", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Epic", image: "images/jujutsukaisen/kusakabe.png", coinsPerSecond: 15.5, resale: 65},
  gakuganji: { name: "Gakuganji", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Epic", image: "images/jujutsukaisen/gakuganji.png", coinsPerSecond: 16, resale: 65},
  yaga: { name: "Yaga", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Epic", image: "images/jujutsukaisen/yaga.png", coinsPerSecond: 16.5, resale: 65},
  hanami: { name: "Hanami", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Epic", image: "images/jujutsukaisen/hanami.png", coinsPerSecond: 17, resale: 65},
  dagon: { name: "Dagon", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Epic", image: "images/jujutsukaisen/dagon.png", coinsPerSecond: 17.5, resale: 65},
  jogo: { name: "Jogo", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Epic", image: "images/jujutsukaisen/jogo.png", coinsPerSecond: 18, resale: 65},
  mahito: { name: "Mahito", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Epic", image: "images/jujutsukaisen/mahito.png", coinsPerSecond: 19, resale: 65},
  mechamaru: { name: "Mechamaru", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Legendary", image: "images/jujutsukaisen/mechamaru.png", coinsPerSecond: 20, resale: 80},
  todo: { name: "Todo", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Legendary", image: "images/jujutsukaisen/todo.png", coinsPerSecond: 20.5, resale: 80},
  naobito: { name: "Naobito", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Legendary", image: "images/jujutsukaisen/naobito.png", coinsPerSecond: 21, resale: 80},
  nanami: { name: "Nanami", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Legendary", image: "images/jujutsukaisen/nanami.png", coinsPerSecond: 21.5, resale: 80},
  yuki: { name: "Yuki", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Legendary", image: "images/jujutsukaisen/yuki.png", coinsPerSecond: 22, resale: 80},
  urame: { name: "Urame", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Legendary", image: "images/jujutsukaisen/urame.png", coinsPerSecond: 22.5, resale: 80},
  kenjaku: { name: "Kenjaku", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Legendary", image: "images/jujutsukaisen/kenjaku.png", coinsPerSecond: 23, resale: 80},
  toji: { name: "Toji", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Mythic", image: "images/jujutsukaisen/toji.png", coinsPerSecond: 28, resale: 250},
  sukuna: { name: "Sukuna", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Mythic", image: "images/jujutsukaisen/sukuna.png", coinsPerSecond: 32, resale: 500},
  gojo: { name: "Gojo", series: "Jujutsu Kaisen", pack: "jujutsukaisen", rarity: "Mythic", image: "images/jujutsukaisen/gojo.png", coinsPerSecond: 40, resale: 1000},
};

/*PACK GROUPS*/
const PACK_GROUPS = {
  /*Bleach Packs*/
  "Bleach": {enableViewAll: true,image: "series/bleachpack.png", packs:{
   agentofshinigami: {name: "Agent Of The Shinigami", price: 25, cardsPerPack: 3, series: "Bleach", image: "packs/agentofshinigami.png"},
   soulsociety: {name: "Soul Society", price: 650, cardsPerPack: 3, series: "Bleach", image: "packs/soulsociety.png"}}},
  /*Naruto Packs*/
  "Naruto": {enableViewAll: true,image: "series/narutopack.png", packs:{
   landOfWaves: {name: "Land of Waves", price: 50, cardsPerPack: 2, series: "Naruto", image: "packs/landofwaves.png"},
   chunninexams: {name: "Chunnin Exams", price: 250, cardsPerPack: 2, series: "Naruto", image: "packs/chunninexams.png"}}},
   /*One Piece Packs*/
  "One Piece": {enableViewAll: true,image: "series/onepiecepack.png", packs:{
   romancedawn: {name: "Romance Dawn", price: 100, cardsPerPack: 2, series: "One Piece", image: "packs/romancedawn.png"},
   orangetown: {name: "Orange Town", price: 350, cardsPerPack: 1, series: "One Piece", image: "packs/orangetown.png"},
   syrupvillage: {name: "Syrup Village", price: 450, cardsPerPack: 2, series: "One Piece", image: "packs/syrupvillage.png"}}},
   /*Jujutsu Kaisen Packs*/
   "Jujutsu Kaisen": {enableViewAll: true,image: "series/jujutsukaisenpack.png", packs:{
   jujutsukaisen: {name: "Season 1+2", price: 1000, cardsPerPack: 5, series: "Jujutsu Kaisen", image: "packs/jjkseason1+2.png"}}},
};

/* PROGRESSION RULES */
const PROGRESSION_RULES = {
  // Bleach starter
  agentofshinigami: {unlockedByDefault: true},
  soulsociety: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["romancedawn", "landOfWaves"]}, lockText: "Complete Romance Dawn and Land Of Waves"},
  
  // Naruto progression
  landOfWaves: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["agentofshinigami"]}, lockText: "Complete Agents Of Shinigami"},
  chunninexams: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["landOfWaves"]}, lockText: "Complete Land of Waves"},

  // One Piece progression
  romancedawn: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["landOfWaves"]}, lockText: "Complete Land Of Waves"},
  orangetown: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["romancedawn"]}, lockText: "Complete Romance Dawn"},
  syrupvillage: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["orangetown"]}, lockText: "Complete Orange Town"},

  // Jujutsu Kaisen progression
  jujutsukaisen: {unlockedByDefault: false, requires: {type: "packCompletion", packs: ["soulsociety", "syrupvillage"]}, lockText: "Complete Soul Society and Syrup Village"}
};

/*Max Coins*/
const MAX_COINS = 20000;

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
