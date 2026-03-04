/* ============================================
   角色養成資源 — 升星碎片成本
   ============================================ */

const STAR_COST_DATA = [
  { from: 0, to: 1, perStage: 5,  stages: 5, formula: '5 × 5',                     total: 25 },
  { from: 1, to: 2, perStage: 15, stages: 5, formula: '15 × 5',                    total: 75 },
  { from: 2, to: 3, perStage: 30, stages: 5, formula: '30 × 5',                    total: 150 },
  { from: 3, to: 4, perStage: 60, stages: 5, formula: '60 × 5',                    total: 300 },
  { from: 4, to: 5, perStage: null, stages: 5, formula: '80+100+120+140+160', total: 600 },
];

const STAR_CUMULATIVE_DATA = [
  { star: 1, cumulative: 25 },
  { star: 2, cumulative: 100 },
  { star: 3, cumulative: 250 },
  { star: 4, cumulative: 550 },
  { star: 5, cumulative: 1150 },
];

function renderStarCostTable() {
  const table = document.getElementById('star-cost-table');
  if (!table) return;

  let cumulative = 0;
  const rows = STAR_COST_DATA.map(row => {
    cumulative += row.total;
    return `
    <tr>
      <td style="font-weight: 700; color: var(--text-primary);">${'⭐'.repeat(row.from)} ➔ ${'⭐'.repeat(row.to)}</td>
      <td style="color: var(--text-secondary);">${row.formula}</td>
      <td><span style="color: var(--warning); font-weight: 700; font-size: 1.05rem;">${row.total}</span> 片</td>
      <td><span style="color: var(--accent-primary); font-weight: 700; font-size: 1.05rem;">${cumulative}</span> 片</td>
    </tr>`;
  }).join('');

  table.innerHTML = `
    <thead>
      <tr>
        <th>升星階段</th>
        <th>計算方式</th>
        <th>碎片需求</th>
        <th>累計碎片</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
      <tr style="border-top: 2px solid var(--border); font-weight: 700;">
        <td colspan="3" style="text-align: right; color: var(--text-primary);">0 ➔ 5 星總計</td>
        <td><span style="color: var(--accent-primary); font-size: 1.1rem;">1150</span> 片</td>
      </tr>
    </tbody>
  `;
}

function renderCumulativeTable() {
  const table = document.getElementById('star-cumulative-table');
  if (!table) return;

  const maxCumulative = STAR_CUMULATIVE_DATA[STAR_CUMULATIVE_DATA.length - 1].cumulative;

  const rows = STAR_CUMULATIVE_DATA.map(row => {
    const pct = Math.round(row.cumulative / maxCumulative * 100);
    return `
    <tr>
      <td style="font-weight: 700; color: var(--text-primary);">升滿 ${'⭐'.repeat(row.star)}</td>
      <td><span style="color: var(--accent-primary); font-weight: 700; font-size: 1.05rem;">${row.cumulative}</span> 片</td>
      <td style="width: 40%;">
        <div style="background: var(--bg-tertiary); border-radius: 4px; overflow: hidden; height: 20px;">
          <div style="background: linear-gradient(90deg, var(--accent-primary), var(--warning)); width: ${pct}%; height: 100%; border-radius: 4px; transition: width 0.6s;"></div>
        </div>
      </td>
    </tr>`;
  }).join('');

  table.innerHTML = `
    <thead>
      <tr>
        <th>目標</th>
        <th>累計碎片</th>
        <th>進度</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderStarCostTable();
  renderCumulativeTable();
});
