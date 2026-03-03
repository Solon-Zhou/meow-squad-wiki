/* ============================================
   角色評價 Tier List
   ============================================ */

const TIER_DATA = [
  {
    tier: 'T0',
    label: '🔥 T0 — 頂級必練',
    color: '#f56565',
    bg: 'rgba(245,101,101,0.08)',
    border: 'rgba(245,101,101,0.25)',
    characters: [
      { name: '凱薩', rarity: 'UR', role: '輸出', note: '全場景最強輸出，優先滿星' },
      { name: '芙蕾雅', rarity: 'UR', role: '輔助', note: '全隊增傷 + 回復，萬用輔助' },
    ]
  },
  {
    tier: 'T1',
    label: '⭐ T1 — 強力推薦',
    color: '#ed8936',
    bg: 'rgba(237,137,54,0.08)',
    border: 'rgba(237,137,54,0.25)',
    characters: [
      { name: '奧丁', rarity: 'UR', role: '坦克', note: '最硬前排，搭配任何陣容都穩定' },
      { name: '月影', rarity: 'SSR', role: '輸出', note: '高爆發刺客，PVP 必備' },
      { name: '聖光', rarity: 'SSR', role: '治療', note: '最穩定的補師，新手首選' },
    ]
  },
  {
    tier: 'T2',
    label: '✅ T2 — 實用角色',
    color: '#4299e1',
    bg: 'rgba(66,153,225,0.08)',
    border: 'rgba(66,153,225,0.25)',
    characters: [
      { name: '鋼爪', rarity: 'SSR', role: '坦克', note: '副坦好用，缺 UR 坦時的替代' },
      { name: '疾風', rarity: 'SSR', role: '輸出', note: '速度型輸出，競技場搶先手' },
      { name: '翠羽', rarity: 'SR', role: '輔助', note: 'SR 最強輔助，平民之友' },
    ]
  },
  {
    tier: 'T3',
    label: '📦 T3 — 過渡 / 特定場景',
    color: '#a0aec0',
    bg: 'rgba(160,174,192,0.08)',
    border: 'rgba(160,174,192,0.25)',
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
    <div class="tier-group" style="border-left:4px solid ${tier.color};padding-left:1rem;">
      <div class="wing-section-title" style="color:${tier.color}">${tier.label}</div>
      <div class="card-grid">
        ${tier.characters.map(ch => {
          const rarityClass = ch.rarity === 'UR' ? 'rarity-ur' : ch.rarity === 'SSR' ? 'rarity-ssr' : '';
          const badgeClass = `badge-${ch.rarity.toLowerCase()}`;
          return `
            <div class="card ${rarityClass}">
              <div class="card-body">
                <div class="card-title">${ch.name}</div>
                <div class="badges">
                  <span class="badge ${badgeClass}">${ch.rarity}</span>
                  <span class="badge" style="background:rgba(113,128,150,0.1);color:var(--text-secondary);border:1px solid var(--border-color);">${ch.role}</span>
                </div>
                <div class="card-desc" style="margin-top:0.5rem;">${ch.note}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderTierList);
