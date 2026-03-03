/* ============================================
   資源規劃 — 整合區塊佈局
   ============================================ */

const RESOURCE_SECTIONS = [
  {
    title: '💎 鑽石分配',
    icon: '💎',
    items: [
      { name: '限定招募（60%）', icon: '🎰', desc: '鑽石最主要的用途。建議至少留 240 抽（約 36,000 鑽石）等待 T0 限定角色。' },
      { name: '體力購買（20%）', icon: '⚡', desc: '每日前兩次體力購買性價比最高（50+100 鑽石）。活動期間可多買幾次。' },
      { name: '預留備用（20%）', icon: '🏦', desc: '保留一定數量應對突發的超值禮包或緊急需求。' },
    ]
  },
  {
    title: '📦 材料優先順序',
    icon: '📦',
    items: [
      { name: '角色經驗書', icon: '📗', desc: '優先給主力 5 人使用。不要平均分散在所有角色上，集中養成效率最高。' },
      { name: '裝備強化石', icon: '🔨', desc: '先把主力裝備升到 +10，再考慮其他角色。藍色以下裝備不值得強化太多。' },
      { name: '技能書', icon: '📘', desc: '技能書非常稀缺，只給 T0、T1 角色使用。優先升級主動技能。' },
      { name: '突破素材', icon: '⬆️', desc: '突破能大幅提升角色上限。有素材就突破，不要囤積。' },
    ]
  },
  {
    title: '📅 養成路線建議',
    icon: '📅',
    items: [
      { name: '第 1 週：建立核心', icon: '1️⃣', desc: '專注養成 5 隻核心角色至 25 等，裝備 +5，完成主線至第 4 章。' },
      { name: '第 2 週：拓展陣容', icon: '2️⃣', desc: '開始培養第二梯隊 3-5 隻角色，翅膀升級，挑戰極限關卡。' },
      { name: '第 3-4 週：精煉提升', icon: '3️⃣', desc: '主力隊伍全部突破一次，裝備升到 +10，技能升到 5 級以上。' },
      { name: '長期目標', icon: '🎯', desc: '逐步滿星核心角色，翅膀升到三階以上，競技場穩定前 100 名。' },
    ]
  },
];

function renderResources() {
  const container = document.getElementById('resources-container');
  if (!container) return;

  container.innerHTML = RESOURCE_SECTIONS.map(section => `
    <div class="info-section animate-in">
      <div class="info-section-title">${section.title}</div>
      ${section.items.map(item => `
        <div class="info-item">
          <div class="info-item-header">
            <span class="info-item-icon">${item.icon}</span>
            <span class="info-item-name">${item.name}</span>
          </div>
          <div class="info-item-desc">${item.desc}</div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderResources);
