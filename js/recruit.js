/* ============================================
   招募指南 — 整合區塊佈局
   ============================================ */

const RECRUIT_POOLS = [
  { name: '常駐招募', icon: '🔄', desc: '隨時可抽，包含所有常駐角色。UR 機率 1.5%，SSR 機率 8%。新手前 10 抽保底一隻 SSR。' },
  { name: '限定招募', icon: '⭐', desc: '限時 UP 池，特定 UR 角色機率提升至 0.7%（佔 UR 總機率的一半）。80 抽保底限定 UR。' },
  { name: '友情招募', icon: '💝', desc: '使用友情點招募，主要產出 R 和 SR 角色。每天記得送友情點並領取。' },
];

const RECRUIT_PROBS = [
  { rarity: 'UR', icon: '🔥', prob: '1.5%', pity: '80 抽大保底', note: '限定池 UP 角色佔 0.7%', color: 'var(--rarity-ur)' },
  { rarity: 'SSR', icon: '⭐', prob: '8%', pity: '10 抽小保底', note: '保底至少一隻 SSR 或以上', color: 'var(--rarity-ssr)' },
  { rarity: 'SR', icon: '💜', prob: '40%', pity: '—', note: '最常見的填充角色', color: 'var(--rarity-sr)' },
  { rarity: 'R', icon: '💙', prob: '50.5%', pity: '—', note: '用於合成和突破素材', color: 'var(--rarity-r)' },
];

const RECRUIT_STRATEGIES = [
  { icon: '💎', title: '存鑽等限定', desc: '常駐池的角色遲早會歪到，把鑽石留給限定 UP 角色。一般建議至少存 240 抽（3 輪保底）。' },
  { icon: '🎰', title: '善用保底機制', desc: '如果已經 70+ 抽沒出 UR，不要放棄！繼續抽到保底。半途放棄是最浪費的行為。' },
  { icon: '🏆', title: '優先抽 T0 角色', desc: '參考角色評價頁面，優先把鑽石花在 T0 角色的限定池上。' },
  { icon: '🎫', title: '善用免費招募券', desc: '活動和任務會送招募券，記得在限定池開放時使用。' },
];

function renderRecruit() {
  const container = document.getElementById('recruit-container');
  if (!container) return;

  // 卡池類型 — info-section 列表
  const poolsHTML = `
    <div class="info-section animate-in">
      <div class="info-section-title">🎯 卡池類型</div>
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

  // 機率一覽 — data-table 表格
  const probsHTML = `
    <div class="info-section animate-in">
      <div class="info-section-title">📊 機率一覽</div>
      <div class="prob-table-wrapper">
        <table class="prob-table">
          <thead>
            <tr>
              <th>稀有度</th>
              <th>基礎機率</th>
              <th>保底機制</th>
              <th>備註</th>
            </tr>
          </thead>
          <tbody>
            ${RECRUIT_PROBS.map(p => `
              <tr>
                <td><span class="badge badge-${p.rarity.toLowerCase()}">${p.rarity}</span></td>
                <td><span class="prob-value" style="color:${p.color}">${p.prob}</span></td>
                <td>${p.pity}</td>
                <td>${p.note}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // 抽卡策略 — 提示框
  const stratHTML = `
    <div class="info-section animate-in">
      <div class="info-section-title">💡 抽卡策略</div>
      ${RECRUIT_STRATEGIES.map(s => `
        <div class="strategy-tip">
          <span class="strategy-tip-icon">${s.icon}</span>
          <div><strong>${s.title}</strong> — ${s.desc}</div>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = poolsHTML + probsHTML + stratHTML;
}

document.addEventListener('DOMContentLoaded', renderRecruit);
