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
    <tbody>${rows}</tbody>
  `;
}

document.addEventListener('DOMContentLoaded', renderStarCostTable);
