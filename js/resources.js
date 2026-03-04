/* ============================================
   資源規劃 — 養成機制與建議
   ============================================ */

const RESOURCE_SECTIONS = [
  {
    title: '⚙️ 核心機制：強制平均升級',
    icon: '⚙️',
    items: [
      { name: '隊伍等級限制', icon: '🔒', desc: '本遊戲採用<strong>強制平均升級</strong>，必須 5 隻角色都達到同一等級門檻，才能繼續往上升級。例如：5 隻都到 10 等後，才能升到 20 等，依此類推。' },
      { name: '滿等上限', icon: '📈', desc: '角色等級上限為 <strong>150 等</strong>。' },
      { name: '實用門檻', icon: '⭐', desc: '角色要好用建議至少<strong>滿二星 + 100 等</strong>，此時戰力和技能效果才會有明顯提升。' },
    ]
  },
  {
    title: '💡 養成建議',
    icon: '💡',
    items: [
      { name: '集中養成 5 隻主力', icon: '🎯', desc: '因為強制平均升級機制，分散養成反而會拖慢進度。優先選定 5 隻主力角色並集中資源。' },
      { name: '優先升星到二星', icon: '⭐', desc: '二星需累計 100 碎片，是角色好用的最低門檻。碎片優先投入主力隊伍。' },
      { name: '等級目標：先衝 100 等', icon: '💯', desc: '100 等是實用基準線，5 隻主力都到 100 等後再考慮往 150 等推進。' },
      { name: '不要過早分散資源', icon: '⚠️', desc: '養第二梯隊之前，確保第一梯隊的 5 隻都已達到二星 + 100 等。' },
    ]
  },
  {
    title: '📊 升等門檻一覽',
    icon: '📊',
    items: [
      { name: 'Lv 1-10', icon: '1️⃣', desc: '無限制，正常升級。' },
      { name: 'Lv 10 → 20', icon: '2️⃣', desc: '需要 5 隻角色都達到 10 等。' },
      { name: 'Lv 20 → 30', icon: '3️⃣', desc: '需要 5 隻角色都達到 20 等。' },
      { name: '依此類推…', icon: '🔄', desc: '每 10 等為一個門檻，5 隻角色必須齊頭並進。' },
      { name: 'Lv 150（滿等）', icon: '🏆', desc: '全隊到達 140 等後方可升至 150 等。' },
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
