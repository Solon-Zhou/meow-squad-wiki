/* ============================================
   角色評價 Tier List — 橫向行列佈局
   ============================================ */

const TIER_DATA = [
  {
    tier: 'T0',
    label: '頂級',
    color: '#f56565',
    characters: [
      { name: '凱薩', rarity: 'UR', role: '輸出', note: '全場景最強輸出，優先滿星' },
      { name: '芙蕾雅', rarity: 'UR', role: '輔助', note: '全隊增傷 + 回復，萬用輔助' },
    ]
  },
  {
    tier: 'T1',
    label: '強力',
    color: '#ed8936',
    characters: [
      { name: '奧丁', rarity: 'UR', role: '坦克', note: '最硬前排，搭配任何陣容都穩定' },
      { name: '月影', rarity: 'SSR', role: '輸出', note: '高爆發刺客，PVP 必備' },
      { name: '聖光', rarity: 'SSR', role: '治療', note: '最穩定的補師，新手首選' },
    ]
  },
  {
    tier: 'T2',
    label: '實用',
    color: '#4299e1',
    characters: [
      { name: '鋼爪', rarity: 'SSR', role: '坦克', note: '副坦好用，缺 UR 坦時的替代' },
      { name: '疾風', rarity: 'SSR', role: '輸出', note: '速度型輸出，競技場搶先手' },
      { name: '翠羽', rarity: 'SR', role: '輔助', note: 'SR 最強輔助，平民之友' },
    ]
  },
  {
    tier: 'T3',
    label: '過渡',
    color: '#a0aec0',
    characters: [
      { name: '石甲', rarity: 'SR', role: '坦克', note: '前期好用，後期逐漸被替換' },
      { name: '火花', rarity: 'R', role: '輸出', note: '低星容易滿，新手過渡首選' },
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
