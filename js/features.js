/* ============================================
   功能解鎖 — 資料與邏輯
   ============================================ */

const FEATURES_DATA = [
    { name: '任務', stage: '1-1', days: 0, note: '初始解鎖', chapter: 1 },
    { name: '英雄', stage: '1-1', days: 0, note: '初始解鎖', chapter: 1 },
    { name: '招募', stage: '1-2', days: 0, note: '', chapter: 1 },
    { name: '罐頭工廠', stage: '1-2', days: 0, note: '', chapter: 1 },
    { name: '科技', stage: '1-3', days: 0, note: '', chapter: 1 },
    { name: '巡邏', stage: '1-3', days: 0, note: '', chapter: 1 },
    { name: '商城', stage: '2-1', days: 0, note: '', chapter: 2 },
    { name: '家園', stage: '2-1', days: 0, note: '', chapter: 2 },
    { name: '貴族', stage: '2-1', days: 0, note: '', chapter: 2 },
    { name: '兌換商店', stage: '2-1', days: 0, note: '', chapter: 2 },
    { name: '排行榜', stage: '2-1', days: 0, note: '', chapter: 2 },
    { name: '活動', stage: '2-2', days: 0, note: '', chapter: 2 },
    { name: '無人機', stage: '2-3', days: 2, note: '', chapter: 2 },
    { name: '合作突圍', stage: '2-3', days: 2, note: '', chapter: 2 },
    { name: '公會首領', stage: '2-4', days: 0, note: '', chapter: 2 },
    { name: '公會', stage: '2-4', days: 2, note: '', chapter: 2 },
    { name: '天空之塔', stage: '2-5', days: 0, note: '', chapter: 2 },
    { name: '3v3競技場', stage: '2-5', days: 9, note: '', chapter: 2 },
    { name: '貿易', stage: '3-5', days: 3, note: '', chapter: 3 },
    { name: '喵王試煉', stage: '4-1', days: 4, note: '', chapter: 4 },
    { name: '訓練營', stage: '4-3', days: 0, note: '', chapter: 4 },
    { name: '榮譽大廳', stage: '5-1', days: 0, note: '', chapter: 5 },
    { name: '極限挑戰', stage: '5-3', days: 8, note: '', chapter: 5 },
    { name: '翅膀', stage: '5-3', days: 8, note: '', chapter: 5 },
    { name: '翅膀樂園', stage: '5-3', days: 8, note: '', chapter: 5 },
    { name: '星際探險', stage: '6-5', days: 45, note: '', chapter: 6 },
    { name: '城際運輸', stage: '7-5', days: 30, note: '', chapter: 7 }
];

let currentSort = { key: 'stage', dir: 'asc' };

document.addEventListener('DOMContentLoaded', () => {
    renderTable(FEATURES_DATA);
    initFilters();
    initSorting();
});

function renderTable(data) {
    const tbody = document.getElementById('features-tbody');
    const emptyState = document.getElementById('empty-state');
    if (!tbody) return;

    if (data.length === 0) {
        tbody.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    // 排序資料
    const sorted = [...data].sort((a, b) => {
        let valA = a[currentSort.key];
        let valB = b[currentSort.key];

        // 特殊處理關卡字串 (e.g., 2-4 vs 1-10)
        if (currentSort.key === 'stage') {
            const [cA, sA] = valA.split('-').map(Number);
            const [cB, sB] = valB.split('-').map(Number);
            if (cA !== cB) return currentSort.dir === 'asc' ? cA - cB : cB - cA;
            return currentSort.dir === 'asc' ? sA - sB : sB - sA;
        }

        if (valA < valB) return currentSort.dir === 'asc' ? -1 : 1;
        if (valA > valB) return currentSort.dir === 'asc' ? 1 : -1;
        return 0;
    });

    tbody.innerHTML = sorted.map(row => `
    <tr>
      <td style="font-weight: 700; color: var(--text-primary);"><span style="margin-right: 0.5rem;">🔹</span>${row.name}</td>
      <td style="color: var(--accent-secondary); font-weight: 600;">通關 ${row.stage}</td>
      <td>${row.days === 0 ? '<span style="color: var(--text-muted);">無限制</span>' : `<span style="color: var(--warning); font-weight: 600;">第 ${row.days} 天</span>`}</td>
      <td style="font-size: 0.85rem; color: var(--text-muted);">${row.note || '—'}</td>
    </tr>
  `).join('');
}

function initFilters() {
    const categoryFilter = document.getElementById('filter-category');
    const searchInput = document.getElementById('filter-search');

    const handler = () => {
        const chapter = categoryFilter.value;
        const search = searchInput.value.toLowerCase();

        const filtered = FEATURES_DATA.filter(item => {
            const matchChapter = !chapter || (chapter === '6' ? item.chapter >= 6 : item.chapter === Number(chapter));
            const matchSearch = !search || item.name.toLowerCase().includes(search);
            return matchChapter && matchSearch;
        });

        renderTable(filtered);
    };

    categoryFilter.addEventListener('change', handler);
    searchInput.addEventListener('input', handler);
}

function initSorting() {
    const headers = document.querySelectorAll('.data-table th[data-key]');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const key = header.getAttribute('data-key');
            if (currentSort.key === key) {
                currentSort.dir = currentSort.dir === 'asc' ? 'desc' : 'asc';
            } else {
                currentSort.key = key;
                currentSort.dir = 'asc';
            }

            // 更新樣式
            headers.forEach(h => h.classList.remove('sorted'));
            header.classList.add('sorted');

            const chapter = document.getElementById('filter-category').value;
            const search = document.getElementById('filter-search').value.toLowerCase();
            const filtered = FEATURES_DATA.filter(item => {
                const matchChapter = !chapter || (chapter === '6' ? item.chapter >= 6 : item.chapter === Number(chapter));
                const matchSearch = !search || item.name.toLowerCase().includes(search);
                return matchChapter && matchSearch;
            });

            renderTable(filtered);
        });
    });

    // 預設高亮解鎖關卡排序
    document.querySelector('.data-table th[data-key="stage"]').classList.add('sorted');
}
