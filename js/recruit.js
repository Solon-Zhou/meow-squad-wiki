/* ============================================
   招募指南 — 基於官方數據
   ============================================ */

const RECRUIT_POOLS = [
  { name: '高級招募', icon: '⭐', desc: '主要招募管道，可獲得 SSR/SR/R 角色與碎片。SSR 整隻機率 0.22%，碎片機率 0.54%（一隻角色 = 10 碎片）。' },
  { name: '傳說招募', icon: '🔥', desc: '限定招募管道，可獲得 UR 角色。詳細機率待補充。' },
];

const RECRUIT_PROBS_ADVANCED = [
  { rarity: 'SSR（整隻）', prob: '0.22%', note: '直接獲得完整角色', color: 'var(--rarity-ssr)' },
  { rarity: 'SSR（碎片）', prob: '0.54%', note: '1 隻角色 = 10 碎片', color: 'var(--rarity-ssr)' },
  { rarity: 'SSR 合計', prob: '10.63%', note: '含整隻 + 碎片', color: 'var(--rarity-ssr)' },
  { rarity: 'SR', prob: '17.80%', note: '', color: 'var(--rarity-sr)' },
  { rarity: 'R', prob: '20.37%', note: '', color: 'var(--rarity-r)' },
  { rarity: 'N', prob: '51.20%', note: '魚餅乾（角色升等）、金幣（公會科技捐獻、個人科技）', color: 'var(--text-muted)' },
];

function renderRecruit() {
  const container = document.getElementById('recruit-container');
  if (!container) return;

  // 卡池類型
  const poolsHTML = `
    <div class="info-section animate-in">
      <div class="info-section-title">🎯 招募類型</div>
      ${RECRUIT_POOLS.map(p => `
        <div class="info-item">
          <div class="info-item-header">
            <span class="info-item-icon">${p.icon}</span>
            <span class="info-item-name">${p.name}</span>
          </div>
          <div class="info-item-desc">${p.desc}</div>
        </div>
      `).join('')}
    </div>
  `;

  // 高級招募機率
  const probsHTML = `
    <div class="info-section animate-in">
      <div class="info-section-title">📊 高級招募機率</div>
      <div class="data-table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>稀有度</th>
              <th>機率</th>
              <th>備註</th>
            </tr>
          </thead>
          <tbody>
            ${RECRUIT_PROBS_ADVANCED.map(p => `
              <tr>
                <td><span style="color:${p.color}; font-weight: 700;">${p.rarity}</span></td>
                <td><span style="color:${p.color}; font-weight: 700; font-size: 1.05rem;">${p.prob}</span></td>
                <td style="color: var(--text-secondary);">${p.note || '—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // N 獎勵說明
  const noteHTML = `
    <div class="info-section animate-in">
      <div class="info-section-title">💡 補充說明</div>
      <div class="info-item">
        <div class="info-item-header">
          <span class="info-item-icon">🐟</span>
          <span class="info-item-name">魚餅乾</span>
        </div>
        <div class="info-item-desc">角色升等主要消耗素材，從 N 級招募獲得。</div>
      </div>
      <div class="info-item">
        <div class="info-item-header">
          <span class="info-item-icon">🪙</span>
          <span class="info-item-name">金幣</span>
        </div>
        <div class="info-item-desc">用於公會科技捐獻、個人科技等級提升。</div>
      </div>
    </div>
  `;

  container.innerHTML = poolsHTML + probsHTML + noteHTML;
}

document.addEventListener('DOMContentLoaded', renderRecruit);
