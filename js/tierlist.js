/* ============================================
   角色評價 Tier List — 基於角色總覽真實資料
   ============================================ */

const TIER_DATA = [
  {
    tier: 'T0',
    label: '頂級',
    color: '#f56565',
    characters: [
      { name: '冰雪公主', rarity: 'UR', role: '礕石 · 冰凍 · 後排', note: '範圍冰控 + 高傷，霜凍雪域覆蓋面廣' },
      { name: '歌姬米柚', rarity: 'UR', role: '柔須 · 治療 · 後排', note: '唯一 UR 治療後排，星光舞臺全隊回復' },
      { name: '海拉魯克克', rarity: 'UR', role: '礕石 · 虛弱 · 前排', note: '前排虛弱控制，克克時間搭配時停追擊' },
    ]
  },
  {
    tier: 'T1',
    label: '強力',
    color: '#ed8936',
    characters: [
      { name: '草帽小隊長', rarity: 'UR', role: '刃影 · 擊退 · 前排', note: '前排擊退，橡膠機關槍 + 破敵連戰' },
      { name: '暗影俠盜', rarity: 'UR', role: '刃影 · 傷口 · 後排', note: '後排傷口輸出，蝙蝠旋渦 + 漩渦尾聲' },
      { name: '超級隊長', rarity: 'UR', role: '柔須 · 眩暈 · 前排', note: '前排眩暈坦，雷盾風暴群控' },
      { name: '雙槍死神', rarity: 'UR', role: '刃影 · 擊退 · 後排', note: '後排擊退，死神螺旋 + 蓄勢綻放' },
      { name: '斯巴達勇士', rarity: 'UR', role: '刃影 · 傷口 · 前排', note: '前排傷口，士兵增援 + 鋼鐵馬車' },
    ]
  },
  {
    tier: 'T2',
    label: '實用',
    color: '#4299e1',
    characters: [
      { name: '幻牌魔術師', rarity: 'UR', role: '柔須 · 眩暈 · 後排', note: '後排眩暈控制，幻彩萬象範圍技' },
      { name: '極影戰神', rarity: 'UR', role: '柔須 · 燃燒 · 後排', note: '後排燃燒輸出，鐳射掃射' },
      { name: '瘋狂喵女', rarity: 'UR', role: '刃影 · 治療 · 後排', note: '兼具治療與輸出，神盾鏈接保護隊友' },
      { name: '王牌坦克手', rarity: 'UR', role: '柔須 · 燃燒 · 前排', note: '前排燃燒坦，可變換形態' },
      { name: '管家蕾姆', rarity: 'SSR', role: '柔須 · 眩暈 · 前排', note: '天降重錘眩暈控制，SSR 前排首選之一' },
      { name: '劍豪佐羅', rarity: 'SSR', role: '刃影 · 傷口 · 前排', note: '幻象風刃 + 颶風強化，高傷前排' },
      { name: '少女小櫻', rarity: 'SSR', role: '柔須 · 治療 · 後排', note: '靈光守護 + 守護祝福，穩定補師' },
      { name: '超能龍卷', rarity: 'SSR', role: '刃影 · 擊退 · 後排', note: '念力重輪 + 念力回收，擊退兼回復' },
      { name: '水管修理工', rarity: 'SSR', role: '刃影 · 擊退 · 前排', note: '天降庫巴 + 暴怒庫巴，控場前排' },
      { name: '焰斧衛士', rarity: 'SSR', role: '柔須 · 燃燒 · 前排', note: '烈陽神盾 + 炙烤邪惡，燃燒坦克' },
      { name: '蘇小狸', rarity: 'SSR', role: '刃影 · 傷口 · 後排', note: '狐影奔襲 + 致傷殘影，持續傷口' },
      { name: '公主莉莉', rarity: 'SSR', role: '礕石 · 虛弱 · 後排', note: '腐爛蘋果 + 蘋果狂熱，虛弱減益' },
    ]
  },
  {
    tier: 'T3',
    label: '堪用',
    color: '#a0aec0',
    characters: [
      { name: '嗚嘴玊', rarity: 'SSR', role: '礕石 · 冰凍 · 前排', note: '喵靈大軍 + 寒冰喵靈' },
      { name: '黑武士', rarity: 'SSR', role: '礕石 · 冰凍 · 前排', note: '技能待確認' },
      { name: '寒冰弓箭手', rarity: 'SSR', role: '礕石 · 冰凍 · 後排', note: '極寒水晶箭，冰凍遠程' },
      { name: '賢者鄧利', rarity: 'SSR', role: '礕石 · 虛弱 · 後排', note: '魔法浪濤 + 緩慢射線' },
      { name: '精靈月影', rarity: 'SSR', role: '柔須 · 眩暈 · 後排', note: '精靈之怒，月神之矢遠程眩暈' },
      { name: '摩燈貓靈', rarity: 'SSR', role: '礕石 · 虛弱 · 前排', note: '幽靈飛彈 + 靈貓緩速' },
      { name: '爆炸藝術家', rarity: 'SSR', role: '柔須 · 燃燒 · 後排', note: '召喚飛龍，範圍燃燒' },
      { name: '少女露娜', rarity: 'SSR', role: '礕石 · 治療 · 後排', note: '技能待確認' },
      { name: '雅典娜', rarity: 'SSR', role: '礕石 · 治療 · 後排', note: '技能待確認' },
    ]
  },
];

function renderTierList() {
  const container = document.getElementById('tierlist-container');
  if (!container) return;

  container.innerHTML = TIER_DATA.map(tier => `
    <div class="tier-row animate-in">
      <div class="tier-label" style="background:${tier.color}">
        <span>${tier.tier}</span>
        <span class="tier-label-sub">${tier.label}</span>
      </div>
      <div class="tier-chars">
        ${tier.characters.map(ch => {
          const badgeClass = `badge-${ch.rarity.toLowerCase()}`;
          return `
            <div class="tier-char">
              <span class="tier-char-name">${ch.name}</span>
              <span class="badge ${badgeClass}">${ch.rarity}</span>
              <span class="tier-char-role">${ch.role}</span>
              <span class="tier-char-note">${ch.note}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderTierList);
