/* ============================================
   角色頁面 — 真實角色資料
   ============================================ */

const CHARACTERS = [
  {
    id: 'char_83517589',
    name: '超級隊長',
    rarity: 'UR',
    race: '柔須',
    faction: '眩暈',
    position: '前排',
    power: '30k',
    skills: [
      { name: '迴旋飛盾', type: '普攻' },
      { name: '雷盾風暴', type: '天賦' },
      { name: '隊長巨錘', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［推進裝置］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［隊長巨錘］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_n8584262',
    name: '海拉魯克克',
    rarity: 'UR',
    race: '礕石',
    faction: '虛弱',
    position: '前排',
    power: '30k',
    skills: [
      { name: '大師劍氣', type: '普攻' },
      { name: '希卡炸彈', type: '天賦' },
      { name: '克克時間', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［雙重劍氣］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［克克時間］' },
      { level: 40, desc: '解鎖技能特殊選項［時停追擊］' }
    ]
  },
  {
    id: 'char_75317877',
    name: '斯巴達勇士',
    rarity: 'UR',
    race: '刃影',
    faction: '傷口',
    position: '前排',
    power: '30k',
    skills: [
      { name: '木馬衝擊', type: '普攻' },
      { name: '士兵增援', type: '天賦' },
      { name: '鋼鐵馬車', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［木馬撞擊］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［鋼鐵馬車］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_n7475493',
    name: '草帽小隊長',
    rarity: 'UR',
    race: '刃影',
    faction: '擊退',
    position: '前排',
    power: '30k',
    skills: [
      { name: '橡膠手槍', type: '普攻' },
      { name: '橡膠大蛇炮', type: '天賦' },
      { name: '橡膠機關槍', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［左拳猛擊］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［橡膠機關槍］' },
      { level: 40, desc: '解鎖技能特殊選項［破敵連戰］' }
    ]
  },
  {
    id: 'char_n7378898',
    name: '王牌坦克手',
    rarity: 'UR',
    race: '柔須',
    faction: '燃燒',
    position: '前排',
    power: '30k',
    skills: [
      { name: '待確認', type: '普攻' },
      { name: '待確認', type: '天賦' },
      { name: '變換形態', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［燃燒炮彈］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［變換形態］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_53266184',
    name: '黑武士',
    rarity: 'SSR',
    race: '礕石',
    faction: '冰凍',
    position: '前排',
    power: '30k',
    skills: [
      { name: '待確認', type: '普攻' },
      { name: '待確認', type: '天賦' },
      { name: '待確認', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '待確認' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '待確認' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_42227254',
    name: '冰雪公主',
    rarity: 'UR',
    race: '礕石',
    faction: '冰凍',
    position: '後排',
    power: '30k',
    skills: [
      { name: '寒冰轟擊', type: '普攻' },
      { name: '霜輪飛刃', type: '天賦' },
      { name: '霜凍雪域', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［深度凍結］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［霜凍雪域］' },
      { level: 40, desc: '解鎖技能特殊選項［冰凍風暴］' }
    ]
  },
  {
    id: 'char_n4853025',
    name: '暗影俠盜',
    rarity: 'UR',
    race: '刃影',
    faction: '傷口',
    position: '後排',
    power: '30k',
    skills: [
      { name: '蝙蝠飛鏢', type: '普攻' },
      { name: '幻影蝙蝠', type: '天賦' },
      { name: '蝙蝠旋渦', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［飛鏢二連］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［蝙蝠旋渦］' },
      { level: 40, desc: '解鎖技能特殊選項［漩渦尾聲］' }
    ]
  },
  {
    id: 'char_n4008078',
    name: '極影戰神',
    rarity: 'UR',
    race: '柔須',
    faction: '燃燒',
    position: '後排',
    power: '30k',
    skills: [
      { name: '粒子射線', type: '普攻' },
      { name: '高能射線', type: '天賦' },
      { name: '鐳射掃射', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［炙火射線］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［鐳射掃射］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_58179174',
    name: '少女露娜',
    rarity: 'SSR',
    race: '礕石',
    faction: '治療',
    position: '後排',
    power: '30k',
    skills: [
      { name: '待確認', type: '普攻' },
      { name: '待確認', type: '天賦' },
      { name: '待確認', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '待確認' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '待確認' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_n6129926',
    name: '雙槍死神',
    rarity: 'UR',
    race: '刃影',
    faction: '擊退',
    position: '後排',
    power: '30k',
    skills: [
      { name: '待確認', type: '普攻' },
      { name: '待確認', type: '天賦' },
      { name: '死神螺旋', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［彈片分裂］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［死神螺旋］' },
      { level: 40, desc: '解鎖技能特殊選項［蓄勢綻放］' }
    ]
  },
  {
    id: 'char_n1725635',
    name: '歌姬米柚',
    rarity: 'UR',
    race: '柔須',
    faction: '治療',
    position: '後排',
    power: '30k',
    skills: [
      { name: '蔥音庇護', type: '普攻' },
      { name: '二重奏', type: '天賦' },
      { name: '星光舞臺', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［多重甩蔥］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［星光舞臺］' },
      { level: 40, desc: '解鎖技能特殊選項［連軸上演］' }
    ]
  },
  {
    id: 'char_13511954',
    name: '公主莉莉',
    rarity: 'SSR',
    race: '礕石',
    faction: '虛弱',
    position: '後排',
    power: '30k',
    skills: [
      { name: '待確認', type: '普攻' },
      { name: '待確認', type: '天賦' },
      { name: '腐爛蘋果', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［虛弱腐蝕］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［腐爛蘋果］' },
      { level: 40, desc: '解鎖技能特殊選項［蘋果狂熱］' }
    ]
  },
  {
    id: 'char_17276012',
    name: '幻牌魔術師',
    rarity: 'UR',
    race: '柔須',
    faction: '眩暈',
    position: '後排',
    power: '30k',
    skills: [
      { name: '紅黃牌影', type: '普攻' },
      { name: '炫影藍牌', type: '天賦' },
      { name: '幻彩萬象', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［卡牌回收］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［幻彩萬象］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_87693528',
    name: '瘋狂喵女',
    rarity: 'UR',
    race: '刃影',
    faction: '治療',
    position: '後排',
    power: '30k',
    skills: [
      { name: '鏈接貓爪', type: '普攻' },
      { name: '獻祭之爪', type: '天賦' },
      { name: '神盾鏈接', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［自我治療］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［神盾鏈接］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_81290939',
    name: '管家蕾姆',
    rarity: 'SSR',
    race: '柔須',
    faction: '眩暈',
    position: '前排',
    power: '30k',
    skills: [
      { name: '待確認', type: '普攻' },
      { name: '待確認', type: '天賦' },
      { name: '天降重錘', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［震盪戰錘］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［天降重錘］' },
      { level: 40, desc: '解鎖技能特殊選項［震盪重錘］' }
    ]
  },
  {
    id: 'char_n2273684',
    name: '劍豪佐羅',
    rarity: 'SSR',
    race: '刃影',
    faction: '傷口',
    position: '前排',
    power: '30k',
    skills: [
      { name: '撕裂颶風', type: '普攻' },
      { name: '雙生旋風', type: '天賦' },
      { name: '幻象風刃', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［強力旋風］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［幻象風刃］' },
      { level: 40, desc: '解鎖技能特殊選項［颶風強化］' }
    ]
  },
  {
    id: 'char_78853972',
    name: '焰斧衛士',
    rarity: 'SSR',
    race: '柔須',
    faction: '燃燒',
    position: '前排',
    power: '30k',
    skills: [
      { name: '飛旋焰斧', type: '普攻' },
      { name: '陽炎戰斧', type: '天賦' },
      { name: '烈陽神盾', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［燃燒焰斧］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［烈陽神盾］' },
      { level: 40, desc: '解鎖技能特殊選項［炙烤邪惡］' }
    ]
  },
  {
    id: 'char_n8674067',
    name: '嗚嘴玊',
    rarity: 'SSR',
    race: '礕石',
    faction: '冰凍',
    position: '前排',
    power: '30k',
    skills: [
      { name: '待確認', type: '普攻' },
      { name: '待確認', type: '天賦' },
      { name: '喵靈大軍', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［寒冰之力］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［喵靈大軍］' },
      { level: 40, desc: '解鎖技能特殊選項［寒冰喵靈］' }
    ]
  },
  {
    id: 'char_75398953',
    name: '超能龍卷',
    rarity: 'SSR',
    race: '刃影',
    faction: '擊退',
    position: '後排',
    power: '30k',
    skills: [
      { name: '引力擴散', type: '普攻' },
      { name: '重力共鳴', type: '天賦' },
      { name: '念力重輪', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［念力噴發］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［念力重輪］' },
      { level: 40, desc: '解鎖技能特殊選項［念力回收］' }
    ]
  },
  {
    id: 'char_n6635058',
    name: '爆炸藝術家',
    rarity: 'SSR',
    race: '柔須',
    faction: '燃燒',
    position: '後排',
    power: '30k',
    skills: [
      { name: '待確認', type: '普攻' },
      { name: '待確認', type: '天賦' },
      { name: '召喚飛龍', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［爆炸餘燼］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［召喚飛龍］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_n3764350',
    name: '少女小櫻',
    rarity: 'SSR',
    race: '柔須',
    faction: '治療',
    position: '後排',
    power: '30k',
    skills: [
      { name: '天降聖光', type: '普攻' },
      { name: '星光法陣', type: '天賦' },
      { name: '靈光守護', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［強化護盾］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［靈光守護］' },
      { level: 40, desc: '解鎖技能特殊選項［守護祝福］' }
    ]
  },
  {
    id: 'char_63242265',
    name: '賢者鄧利',
    rarity: 'SSR',
    race: '礕石',
    faction: '虛弱',
    position: '後排',
    power: '30k',
    skills: [
      { name: '光束風暴', type: '普攻' },
      { name: '魔光炸裂', type: '天賦' },
      { name: '魔法浪濤', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［緩慢射線］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［魔法浪濤］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_n2172058',
    name: '摩燈貓靈',
    rarity: 'SSR',
    race: '礕石',
    faction: '虛弱',
    position: '前排',
    power: '30k',
    skills: [
      { name: '靈貓自爆', type: '普攻' },
      { name: '靈貓分裂', type: '天賦' },
      { name: '幽靈飛彈', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［靈貓緩速］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［幽靈飛彈］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_n2167031',
    name: '雅典娜',
    rarity: 'SSR',
    race: '礕石',
    faction: '治療',
    position: '後排',
    power: '30k',
    skills: [
      { name: '待確認', type: '普攻' },
      { name: '待確認', type: '天賦' },
      { name: '待確認', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '待確認' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '待確認' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_n4471731',
    name: '精靈月影',
    rarity: 'SSR',
    race: '柔須',
    faction: '眩暈',
    position: '後排',
    power: '30k',
    skills: [
      { name: '月神之矢', type: '普攻' },
      { name: '月之流星', type: '天賦' },
      { name: '精靈之怒', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［月神祝福］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［精靈之怒］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_88694383',
    name: '寒冰弓箭手',
    rarity: 'SSR',
    race: '礕石',
    faction: '冰凍',
    position: '後排',
    power: '30k',
    skills: [
      { name: '寒霜冰箭', type: '普攻' },
      { name: '寒冷冰錐', type: '天賦' },
      { name: '極寒水晶箭', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［霜寒之箭］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［極寒水晶箭］' },
      { level: 40, desc: '待確認' }
    ]
  },
  {
    id: 'char_n9038758',
    name: '水管修理工',
    rarity: 'SSR',
    race: '刃影',
    faction: '擊退',
    position: '前排',
    power: '30k',
    skills: [
      { name: '龜殼飛彈', type: '普攻' },
      { name: '碰碰龜殼', type: '天賦' },
      { name: '天降庫巴', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［帶刺龜殼］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［天降庫巴］' },
      { level: 40, desc: '解鎖技能特殊選項［暴怒庫巴］' }
    ]
  },
  {
    id: 'char_38840823',
    name: '蘇小狸',
    rarity: 'SSR',
    race: '刃影',
    faction: '傷口',
    position: '後排',
    power: '30k',
    skills: [
      { name: '喚狐撕咬', type: '普攻' },
      { name: '狐狸穿心', type: '天賦' },
      { name: '狐影奔襲', type: '技能' }
    ],
    levelUnlocks: [
      { level: 10, desc: '解鎖普攻特殊選項［召喚專精］' },
      { level: 20, desc: '待確認' },
      { level: 30, desc: '解鎖技能［狐影奔襲］' },
      { level: 40, desc: '解鎖技能特殊選項［致傷殘影］' }
    ]
  }
];

// --- 種族 / 派系 配色 ---
const RACE_COLORS = {
  '礕石': { bg: 'rgba(52, 152, 219, 0.15)', color: '#3498db', border: 'rgba(52, 152, 219, 0.3)' },
  '刃影': { bg: 'rgba(231, 76, 60, 0.15)', color: '#e74c3c', border: 'rgba(231, 76, 60, 0.3)' },
  '柔須': { bg: 'rgba(155, 89, 182, 0.15)', color: '#9b59b6', border: 'rgba(155, 89, 182, 0.3)' }
};

const FACTION_COLORS = {
  '冰凍': { bg: 'rgba(91, 192, 235, 0.15)', color: '#5bc0eb', border: 'rgba(91, 192, 235, 0.3)', icon: '❄️' },
  '虛弱': { bg: 'rgba(149, 165, 166, 0.15)', color: '#95a5a6', border: 'rgba(149, 165, 166, 0.3)', icon: '💫' },
  '擊退': { bg: 'rgba(231, 76, 60, 0.15)', color: '#e74c3c', border: 'rgba(231, 76, 60, 0.3)', icon: '💥' },
  '傷口': { bg: 'rgba(192, 57, 43, 0.15)', color: '#c0392b', border: 'rgba(192, 57, 43, 0.3)', icon: '🩸' },
  '眩暈': { bg: 'rgba(155, 89, 182, 0.15)', color: '#9b59b6', border: 'rgba(155, 89, 182, 0.3)', icon: '💫' },
  '燃燒': { bg: 'rgba(230, 126, 34, 0.15)', color: '#e67e22', border: 'rgba(230, 126, 34, 0.3)', icon: '🔥' },
  '治療': { bg: 'rgba(46, 204, 113, 0.15)', color: '#2ecc71', border: 'rgba(46, 204, 113, 0.3)', icon: '💚' }
};

const RACE_ICONS = { '礕石': '🪨', '刃影': '⚔️', '柔須': '🌿' };

document.addEventListener('DOMContentLoaded', () => {
  renderCharacters(CHARACTERS);
  initFilters();
});

function renderCharacters(data) {
  const grid = document.getElementById('characters-grid');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">🔍</div>
        <p>沒有找到符合條件的角色</p>
      </div>`;
    return;
  }

  grid.innerHTML = data.map(char => {
    const raceStyle = RACE_COLORS[char.race] || {};
    const factionStyle = FACTION_COLORS[char.faction] || {};
    const factionIcon = factionStyle.icon || '⭐';
    const rarityClass = char.rarity === 'UR' ? 'rarity-ur' : char.rarity === 'SSR' ? 'rarity-ssr' : '';

    return `
    <div class="card ${rarityClass} animate-in" onclick="toggleDetail('${char.id}')">
      <div class="card-body">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
          <h3 class="card-title">${char.name}</h3>
          <span class="badge badge-${char.rarity.toLowerCase()}">${char.rarity}</span>
        </div>
        <div class="badges">
          <span class="badge" style="background: ${raceStyle.bg}; color: ${raceStyle.color}; border: 1px solid ${raceStyle.border};">${char.race}</span>
          <span class="badge" style="background: ${factionStyle.bg}; color: ${factionStyle.color}; border: 1px solid ${factionStyle.border};">${factionIcon} ${char.faction}</span>
          <span class="badge" style="background: rgba(255,255,255,0.04); color: var(--text-secondary); border: 1px solid var(--border-color);">${char.position}</span>
        </div>
        <div class="detail-panel" id="${char.id}">
          <div class="detail-section-title">🎯 技能組</div>
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
            ${char.skills.map(s => `<span class="skill-tag"><span class="skill-type">${s.type}</span>${s.name}</span>`).join('')}
          </div>
          <div class="detail-section-title" style="margin-top: 1rem;">📖 詞綴</div>
          <div class="unlock-list">
            ${char.levelUnlocks.map(u => `<div class="unlock-item"><span class="unlock-level">${u.level}級</span><span>${u.desc}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  initAnimations();
}

function toggleDetail(id) {
  const panel = document.getElementById(id);
  if (panel) panel.classList.toggle('show');
}

function initFilters() {
  const rarityFilter = document.getElementById('filter-rarity');
  const raceFilter = document.getElementById('filter-race');
  const factionFilter = document.getElementById('filter-faction');
  const searchInput = document.getElementById('filter-search');

  [rarityFilter, raceFilter, factionFilter, searchInput].forEach(el => {
    if (el) el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', applyFilters);
  });
}

function applyFilters() {
  const rarity = document.getElementById('filter-rarity')?.value || '';
  const race = document.getElementById('filter-race')?.value || '';
  const faction = document.getElementById('filter-faction')?.value || '';
  const search = document.getElementById('filter-search')?.value?.toLowerCase() || '';

  const filtered = CHARACTERS.filter(char => {
    if (rarity && char.rarity !== rarity) return false;
    if (race && char.race !== race) return false;
    if (faction && char.faction !== faction) return false;
    if (search && !char.name.includes(search)) return false;
    return true;
  });

  renderCharacters(filtered);
}
