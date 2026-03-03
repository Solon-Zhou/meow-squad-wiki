/* ============================================
   活動紀錄頁面 — 真實活動資料
   ============================================ */

// 活動類型顏色
const EVENT_TYPE_STYLE = {
  '戰令': { bg: 'rgba(139,108,247,0.12)', color: '#7c5cbf', border: 'rgba(139,108,247,0.25)' },
  '招募': { bg: 'rgba(96,165,250,0.1)', color: '#3b82f6', border: 'rgba(96,165,250,0.25)' },
  '衝刺': { bg: 'rgba(251,146,60,0.1)', color: '#ea6c10', border: 'rgba(251,146,60,0.25)' },
  '嘉年華': { bg: 'rgba(244,114,182,0.1)', color: '#db2777', border: 'rgba(244,114,182,0.25)' },
  '新角色': { bg: 'rgba(239,68,68,0.1)', color: '#dc2626', border: 'rgba(239,68,68,0.25)' },
  '充值': { bg: 'rgba(234,179,8,0.1)', color: '#b45309', border: 'rgba(234,179,8,0.25)' },
  '小活動': { bg: 'rgba(20,184,166,0.1)', color: '#0f766e', border: 'rgba(20,184,166,0.25)' },
};


const EVENTS = [
  {
    startDay: 1,
    endDay: 15,
    title: '成長戰令',
    type: '戰令',
    description: '消耗魚罐頭獲得積分，達成目標解鎖豐厚獎勵。',
    details: [
      '滿分：2100 分',
      '持續 15 天',
    ],
    tips: ''
  },
  {
    startDay: 1,
    endDay: 8,
    title: '限時累充',
    type: '充值',
    description: '限時累積儲值，達標可領取額外獎勵。',
    details: [],
    tips: ''
  },
  {
    startDay: 1,
    endDay: 8,
    title: '新手嘉年華',
    type: '嘉年華',
    description: '新手上線專屬嘉年華活動，累積指定頁面操作領取獎勵。（依創角時間計算）',
    details: [
      '持續 8 天',
    ],
    tips: '⚠️ 此活動依據「創角天數」計算，創角第 1 天即開啟。'
  },
  {
    startDay: 6,
    endDay: 8,
    title: '拉霸機活動（搖一搖）',
    type: '小活動',
    description: '拉霸機類型獲取水晶取得積分與獎勵。',
    details: [
      '持續 3 天',
      '満分：3000 分',
      '1 個水晶 → +5 分',
      '2 個水晶 → +15 分',
      '3 個水晶 → +80 分',
      '満分獎品：隨機 UR 英雄核心',
    ],
    tips: ''
  },
  {
    startDay: null,
    endDay: null,
    title: '招募衝刺',
    type: '衝刺',
    description: '透過招募累積積分，達標即可領取獎勵。',
    details: [
      '滿分：35000 分',
      '普通招募 1 次 → +5 分',
      '傳說招募 1 次 → +30 分',
    ],
    tips: ''
  },

  {
    startDay: 8,
    endDay: 13,
    title: '翅膀衝刺',
    type: '衝刺',
    description: '消耗翅膀相關材料獲得積分，衝刺達標領取豐厚回饋。',
    details: [
      '滿分：30000 分，持續 6 天',
      '1 UR 翅膀碎片 → +50 分',
      '1 SSR 翅膀碎片 → +3 分',
      '1 UR 羽毛 → +200 分',
      '1 SSR 羽毛 → +10 分',
    ],
    tips: '⚠️ 翅膀嘉年華約第 9 天開啟，與衝刺會重疊。建議等嘉年華開啟後再消耗材料。❗ 不同伺服器時間可能有落差，請以遊戲內活動日曆為準。'
  },
  {
    startDay: 9,
    endDay: 17,
    title: '翅膀嘉年華',
    type: '嘉年華',
    description: '翅膀嘉年華開啟後進行翅膀衝刺，獲得雙重收益。（依創角時間計算）',
    details: [
      '持續 9 天',
    ],
    tips: '⚠️ 此活動依據「創角天數」計算，創角第 9 天開啟！'
  },
  {
    startDay: 8,
    endDay: null,
    title: '新角色上線 — 王牌坦克手、極影戰神',
    type: '新角色',
    description: '開服第八天新角色正式推出，同步開放角色戰令！',
    details: [
      '新角色：王牌坦克手',
      '新角色：極影戰神',
      '同步開放：角色戰令活動',
    ],
    tips: ''
  },
  {
    startDay: 13,
    endDay: 15,
    title: '動物轉盤',
    type: '小活動',
    description: '轉盤類型小活動，轉動輪盤獲取獎勵。',
    details: [
      '持續 3 天',
    ],
    tips: ''
  },
  {
    startDay: 15,
    endDay: null,
    title: '第二輪成長戰令',
    type: '戰令',
    description: '第二輪成長戰令開啟。',
    details: [],
    tips: ''
  },
  {
    startDay: 15,
    endDay: null,
    title: '核心衝刺',
    type: '衝刺',
    description: '消耗核心獲得積分，衝刺達標領取獎勵。',
    details: [],
    tips: ''
  },
];

document.addEventListener('DOMContentLoaded', () => {
  renderTimeline(EVENTS);
  initFilters();
});

function initFilters() {
  const btns = document.querySelectorAll('.event-filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.getAttribute('data-type');
      const filtered = type ? EVENTS.filter(e => e.type === type) : EVENTS;
      renderTimeline(filtered);
    });
  });
}

function renderTimeline(data) {
  const container = document.getElementById('events-timeline');
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📅</div><p>暫無活動紀錄</p></div>`;
    return;
  }

  container.innerHTML = data.map(event => {
    const typeStyle = EVENT_TYPE_STYLE[event.type] || { bg: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', border: 'rgba(255,255,255,0.1)' };
    const typeBadge = `<span class="badge" style="background:${typeStyle.bg};color:${typeStyle.color};border:1px solid ${typeStyle.border};">${event.type}</span>`;

    let timeStr = '';
    if (event.startDay && event.endDay) {
      timeStr = `開服第 ${event.startDay} 天 ～ 第 ${event.endDay} 天`;
    } else if (event.startDay) {
      timeStr = `開服第 ${event.startDay} 天起`;
    } else {
      timeStr = `時間待補充`;
    }

    const detailsHTML = event.details.length > 0
      ? `<ul class="event-details">
          ${event.details.map(d => `<li>${d}</li>`).join('')}
        </ul>`
      : '';

    const tipsHTML = event.tips
      ? `<div class="event-tip">${event.tips}</div>`
      : '';

    return `
      <div class="timeline-item animate-in">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.4rem;">
          <span class="timeline-date">⏰ ${timeStr}</span>
          ${typeBadge}
        </div>
        <h3 class="timeline-title">${event.title}</h3>
        <p class="timeline-desc">${event.description}</p>
        ${detailsHTML}
        ${tipsHTML}
      </div>`;
  }).join('');

  initAnimations();
}
