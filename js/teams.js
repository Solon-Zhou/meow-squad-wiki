/* ============================================
   推薦隊伍
   ============================================ */

const TEAMS_DATA = [
  {
    name: '冰凍控制隊',
    type: 'PVE',
    desc: '以冰凍派系為核心，持續控場讓敵人無法行動',
    members: ['凱薩', '芙蕾雅', '奧丁', '月影', '聖光'],
    tip: '優先讓凱薩與芙蕾雅同排，觸發冰凍連鎖效果',
  },
  {
    name: '速攻爆發隊',
    type: 'PVP',
    desc: '搶先手一波帶走對手，適合競技場快速上分',
    members: ['月影', '疾風', '凱薩', '翠羽', '鋼爪'],
    tip: '月影和疾風速度拉滿，第一回合直接秒殺對方後排',
  },
  {
    name: '持久消耗隊',
    type: 'PVE',
    desc: '高坦度 + 回復，適合長期戰鬥如極限挑戰',
    members: ['奧丁', '鋼爪', '聖光', '芙蕾雅', '翠羽'],
    tip: '雙坦 + 雙補配置，搭配芙蕾雅的增傷彌補輸出不足',
  },
  {
    name: '平民過渡隊',
    type: 'PVE',
    desc: '使用低星角色也能穩定推圖，適合前期玩家',
    members: ['石甲', '火花', '翠羽', '聖光', '疾風'],
    tip: '把資源集中在聖光和翠羽，後期換隊時仍然好用',
  },
  {
    name: '燃燒 DoT 隊',
    type: 'PVP',
    desc: '燃燒持續傷害疊加，搭配虛弱增傷效果極佳',
    members: ['火花', '凱薩', '芙蕾雅', '月影', '奧丁'],
    tip: '確保火花先手點燃，再由凱薩觸發引爆效果',
  },
];

function renderTeams() {
  const grid = document.getElementById('teams-grid');
  if (!grid) return;

  grid.innerHTML = TEAMS_DATA.map(team => `
    <div class="card">
      <div class="card-body">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;">
          <div class="card-title">${team.name}</div>
          <span class="badge" style="background:${team.type === 'PVP' ? 'rgba(245,101,101,0.12)' : 'rgba(66,153,225,0.12)'};color:${team.type === 'PVP' ? 'var(--rarity-ur)' : 'var(--rarity-r)'};border:1px solid ${team.type === 'PVP' ? 'rgba(245,101,101,0.25)' : 'rgba(66,153,225,0.25)'};">${team.type}</span>
        </div>
        <div class="card-desc">${team.desc}</div>
        <div style="margin-top:0.75rem;">
          <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:0.3rem;">陣容成員</div>
          <div style="display:flex;gap:0.35rem;flex-wrap:wrap;">
            ${team.members.map(m => `<span class="badge" style="background:rgba(255,138,101,0.1);color:var(--accent-brand);border:1px solid rgba(255,138,101,0.25);">${m}</span>`).join('')}
          </div>
        </div>
        <div class="event-tip" style="margin-top:0.75rem;">💡 ${team.tip}</div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderTeams);
