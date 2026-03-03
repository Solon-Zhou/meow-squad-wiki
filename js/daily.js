/* ============================================
   每日任務
   ============================================ */

const DAILY_DATA = [
  { category: '日常', task: '完成 5 場普通關卡', reward: '經驗書 x10', priority: '高' },
  { category: '日常', task: '競技場挑戰 3 次', reward: '競技幣 x50', priority: '高' },
  { category: '日常', task: '公會捐獻 1 次', reward: '公會幣 x30', priority: '高' },
  { category: '日常', task: '完成每日招募 1 次', reward: '招募券碎片 x5', priority: '中' },
  { category: '日常', task: '領取體力 3 次', reward: '體力 x180', priority: '高' },
  { category: '日常', task: '強化裝備 3 次', reward: '金幣 x5000', priority: '中' },
  { category: '日常', task: '完成懸賞任務', reward: '隨機材料', priority: '中' },
  { category: '週常', task: '公會戰參與 5 次', reward: '公會幣 x200', priority: '高' },
  { category: '週常', task: '競技場達到新最高排名', reward: '鑽石 x100', priority: '高' },
  { category: '週常', task: '極限挑戰通關新層', reward: '稀有材料', priority: '高' },
  { category: '週常', task: '翅膀升級 1 次', reward: '翅膀精華 x10', priority: '中' },
  { category: '週常', task: '收集 7 天登入獎勵', reward: '招募券 x1', priority: '低' },
  { category: '活動', task: '完成活動任務（依活動而定）', reward: '活動代幣', priority: '高' },
  { category: '活動', task: '衝刺活動目標', reward: '限定獎勵', priority: '高' },
  { category: '活動', task: '嘉年華兌換', reward: '角色碎片', priority: '中' },
];

function renderDailyTable(filter) {
  const container = document.getElementById('daily-table-container');
  if (!container) return;

  const filtered = filter ? DAILY_DATA.filter(d => d.category === filter) : DAILY_DATA;

  const priorityColor = { '高': 'var(--rarity-ur)', '中': 'var(--warning)', '低': 'var(--text-muted)' };

  container.innerHTML = `
    <div class="data-table-wrapper">
      <table class="data-table">
        <thead>
          <tr>
            <th>分類</th>
            <th>任務內容</th>
            <th>獎勵</th>
            <th>優先度</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(d => `
            <tr>
              <td><span class="badge" style="background:rgba(255,138,101,0.1);color:var(--accent-brand);border:1px solid rgba(255,138,101,0.25);">${d.category}</span></td>
              <td>${d.task}</td>
              <td>${d.reward}</td>
              <td><span style="color:${priorityColor[d.priority]};font-weight:700;">${d.priority}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function initDailyFilters() {
  const bar = document.getElementById('daily-filter-bar');
  if (!bar) return;

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.event-filter-btn');
    if (!btn) return;

    bar.querySelectorAll('.event-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const type = btn.dataset.type;
    renderDailyTable(type || '');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderDailyTable('');
  initDailyFilters();
});
