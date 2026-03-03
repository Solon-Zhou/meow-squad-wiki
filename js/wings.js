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

// --- UR 翅膀升級需求 ---
const UR_UPGRADES = [
  { tier: '初級', levels: 'Lv 1-5', shards: '3', feather: '—', featherType: '', requirement: '' },
  { tier: '中級', levels: 'Lv 6-10', shards: '10', feather: '1 UR 羽毛', featherType: 'ur', requirement: '' },
  { tier: '高級', levels: 'Lv 11-15', shards: '20', feather: '5 UR 羽毛', featherType: 'ur', requirement: '角色二星' },
  { tier: '史詩', levels: 'Lv 16-20', shards: '50', feather: '10 UR 羽毛', featherType: 'ur', requirement: '角色三星' },
  { tier: '神話', levels: 'Lv 21-25', shards: '❓', feather: '❓ UR 羽毛', featherType: 'ur', requirement: '角色四星' }
];

// --- SSR 翅膀升級需求 ---
const SSR_UPGRADES = [
  { tier: '初級', levels: 'Lv 1-5', shards: '❓', feather: '—', featherType: '', requirement: '' },
  { tier: '中級', levels: 'Lv 6-10', shards: '30', feather: '5 SSR 羽毛', featherType: 'ssr', requirement: '' },
  { tier: '高級', levels: 'Lv 11-15', shards: '50', feather: '15 SSR 羽毛', featherType: 'ssr', requirement: '角色二星' },
  { tier: '史詩', levels: 'Lv 16-20', shards: '100', feather: '30 SSR 羽毛', featherType: 'ssr', requirement: '角色三星' }
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

  table.innerHTML = `
    <thead>
      <tr>
        <th>階段</th>
        <th>等級範圍</th>
        <th>角色翅膀碎片</th>
        <th>羽毛需求</th>
        <th>前置條件</th>
      </tr>
    </thead>
    <tbody>
      ${data.map(row => {
    const isUnknown = row.shards === '❓';
    const featherBadge = row.featherType === 'ur'
      ? 'badge-ur' : row.featherType === 'ssr'
        ? 'badge-ssr' : '';

    return `
        <tr>
          <td style="font-weight: 700; color: var(--text-primary);">${row.tier}</td>
          <td style="color: var(--text-secondary);">${row.levels}</td>
          <td>${isUnknown ? '<span style="color: var(--text-muted);">❓ 未知</span>' : `<span style="color: var(--warning); font-weight: 600;">${row.shards}</span>`}</td>
          <td>${row.feather === '—' ? '<span style="color: var(--text-muted);">—</span>' : featherBadge ? `<span class="badge ${featherBadge}" style="font-size: 0.78rem; padding: 0.2rem 0.5rem;">${row.feather}</span>` : `<span style="color: var(--text-muted);">${row.feather}</span>`}</td>
          <td>${row.requirement ? `<span style="color: var(--accent-secondary); font-weight: 600;">${row.requirement}</span>` : '<span style="color: var(--text-muted);">—</span>'}</td>
        </tr>`;
  }).join('')}
    </tbody>
  `;
}
