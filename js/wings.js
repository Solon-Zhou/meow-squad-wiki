/* ============================================
   翅膀升級系統 — 資料與渲染
   ============================================ */

// --- 等級效果 ---
const TIER_EFFECTS = [
  { tier: '初級', icon: '🥉', color: '#98c379', desc: '神器欄位 +1', levels: 'Lv 1-5' },
  { tier: '中級', icon: '🥈', color: '#6ea8fe', desc: '普攻升級三選一，可隨時替換（入場 2 等）', levels: 'Lv 6-10' },
  { tier: '高級', icon: '🥇', color: '#ffa726', desc: '被動升級', levels: 'Lv 11-15' },
  { tier: '史詩', icon: '💎', color: '#c084fc', desc: '被動升級', levels: 'Lv 16-20' },
  { tier: '神話', icon: '👑', color: '#ff4d6a', desc: '普攻升級（詳情待確認）', urOnly: true, levels: 'Lv 21-25' }
];

// --- UR 翅膀升級需求（官方數據）---
const UR_UPGRADES = [
  { tier: '初級', levels: 'Lv 1-5',   upgradeShard: 5,  breakthroughShard: 3,  feather: 0,  featherType: 'ur', requirement: '' },
  { tier: '中級', levels: 'Lv 6-10',  upgradeShard: 8,  breakthroughShard: 10, feather: 1,  featherType: 'ur', requirement: '' },
  { tier: '高級', levels: 'Lv 11-15', upgradeShard: 15, breakthroughShard: 20, feather: 5,  featherType: 'ur', requirement: '角色二星' },
  { tier: '史詩', levels: 'Lv 16-20', upgradeShard: 30, breakthroughShard: 50, feather: 10, featherType: 'ur', requirement: '角色三星' },
  { tier: '神話', levels: 'Lv 21-25', upgradeShard: 60, breakthroughShard: 80, feather: 20, featherType: 'ur', requirement: '角色四星' }
];

// --- SSR 翅膀升級需求（官方數據）---
const SSR_UPGRADES = [
  { tier: '初級', levels: 'Lv 1-5',   upgradeShard: 15, breakthroughShard: 10,  feather: 0,  featherType: 'ssr', requirement: '' },
  { tier: '中級', levels: 'Lv 6-10',  upgradeShard: 25, breakthroughShard: 30,  feather: 5,  featherType: 'ssr', requirement: '' },
  { tier: '高級', levels: 'Lv 11-15', upgradeShard: 40, breakthroughShard: 50,  feather: 15, featherType: 'ssr', requirement: '角色二星' },
  { tier: '史詩', levels: 'Lv 16-20', upgradeShard: 80, breakthroughShard: 100, feather: 30, featherType: 'ssr', requirement: '角色三星' }
];

document.addEventListener('DOMContentLoaded', () => {
  renderTierEffects();
  renderUpgradeTable('ur-table', UR_UPGRADES);
  renderUpgradeTable('ssr-table', SSR_UPGRADES);
});

function renderTierEffects() {
  const grid = document.getElementById('wing-tiers-grid');
  if (!grid) return;

  grid.innerHTML = TIER_EFFECTS.map(t => `
    <div class="wing-tier-card">
      <div class="wing-tier-header">
        <span class="wing-tier-icon">${t.icon}</span>
        <span class="wing-tier-name" style="color: ${t.color};">${t.tier}</span>
        ${t.urOnly ? '<span class="badge badge-ur" style="font-size: 0.65rem;">UR 限定</span>' : ''}
      </div>
      <p class="wing-tier-desc">${t.desc}</p>
    </div>
  `).join('');
}

function renderUpgradeTable(tableId, data) {
  const table = document.getElementById(tableId);
  if (!table) return;

  const levelsPerTier = 5;
  let totalShards = 0;
  let totalFeathers = 0;

  const rows = data.map(row => {
    const tierShards = row.upgradeShard * levelsPerTier + row.breakthroughShard;
    totalShards += tierShards;
    totalFeathers += row.feather;
    const featherBadge = row.featherType === 'ur' ? 'badge-ur' : 'badge-ssr';

    return `
        <tr>
          <td style="font-weight: 700; color: var(--text-primary);">${row.tier}</td>
          <td style="color: var(--text-secondary);">${row.levels}</td>
          <td><span style="font-weight: 600;">${row.upgradeShard}</span> <span style="color: var(--text-muted); font-size: 0.8rem;">×5 = ${row.upgradeShard * levelsPerTier}</span></td>
          <td><span style="color: var(--warning); font-weight: 600;">${row.breakthroughShard}</span></td>
          <td>${row.feather > 0 ? `<span class="badge ${featherBadge}" style="font-size: 0.78rem; padding: 0.2rem 0.5rem;">${row.feather}</span>` : '<span style="color: var(--text-muted);">—</span>'}</td>
          <td><span style="font-weight: 600; color: var(--accent-primary);">${tierShards}</span></td>
          <td>${row.requirement ? `<span style="color: var(--accent-secondary); font-weight: 600;">${row.requirement}</span>` : '<span style="color: var(--text-muted);">—</span>'}</td>
        </tr>`;
  }).join('');

  table.innerHTML = `
    <thead>
      <tr>
        <th>階段</th>
        <th>等級</th>
        <th>升級碎片（每級）</th>
        <th>突破碎片</th>
        <th>突破羽毛</th>
        <th>階段碎片合計</th>
        <th>前置條件</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
      <tr style="border-top: 2px solid var(--border); font-weight: 700;">
        <td colspan="5" style="text-align: right; color: var(--text-primary);">總計</td>
        <td><span style="color: var(--accent-primary);">${totalShards} 碎片</span></td>
        <td><span style="color: var(--warning);">${totalFeathers} 羽毛</span></td>
      </tr>
    </tbody>
  `;
}
