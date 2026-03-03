/* ============================================
   招募指南
   ============================================ */

const RECRUIT_SECTIONS = [
  {
    title: '🎯 卡池類型',
    items: [
      { name: '常駐招募', icon: '🔄', desc: '隨時可抽，包含所有常駐角色。UR 機率 1.5%，SSR 機率 8%。新手前 10 抽保底一隻 SSR。' },
      { name: '限定招募', icon: '⭐', desc: '限時 UP 池，特定 UR 角色機率提升至 0.7%（佔 UR 總機率的一半）。80 抽保底限定 UR。' },
      { name: '友情招募', icon: '💝', desc: '使用友情點招募，主要產出 R 和 SR 角色。每天記得送友情點並領取。' },
    ]
  },
  {
    title: '📊 機率一覽',
    items: [
      { name: 'UR 角色', icon: '🔥', desc: '基礎機率 1.5%，限定池 UP 角色佔 0.7%。80 抽觸發大保底。' },
      { name: 'SSR 角色', icon: '⭐', desc: '基礎機率 8%，10 抽保底至少一隻 SSR 或以上。' },
      { name: 'SR 角色', icon: '💜', desc: '基礎機率 40%，最常見的填充角色。' },
      { name: 'R 角色', icon: '💙', desc: '基礎機率 50.5%，用於合成和突破素材。' },
    ]
  },
  {
    title: '💡 抽卡策略',
    items: [
      { name: '存鑽等限定', icon: '💎', desc: '常駐池的角色遲早會歪到，把鑽石留給限定 UP 角色。一般建議至少存 240 抽（3 輪保底）。' },
      { name: '善用保底機制', icon: '🎰', desc: '如果已經 70+ 抽沒出 UR，不要放棄！繼續抽到保底。半途放棄是最浪費的行為。' },
      { name: '優先抽 T0 角色', icon: '🏆', desc: '參考角色評價頁面，優先把鑽石花在 T0 角色的限定池上。' },
      { name: '善用免費招募券', icon: '🎫', desc: '活動和任務會送招募券，記得在限定池開放時使用。' },
    ]
  },
];

function renderRecruit() {
  const container = document.getElementById('recruit-container');
  if (!container) return;

  container.innerHTML = RECRUIT_SECTIONS.map(section => `
    <div class="wing-section">
      <div class="wing-section-title">${section.title}</div>
      <div class="card-grid">
        ${section.items.map(item => `
          <div class="card">
            <div class="card-body">
              <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;">
                <span style="font-size:1.3rem;">${item.icon}</span>
                <div class="card-title">${item.name}</div>
              </div>
              <div class="card-desc">${item.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderRecruit);
