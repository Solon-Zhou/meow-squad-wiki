/* ============================================
   新手指南 Day 1-15
   ============================================ */

const GUIDE_DATA = [
  {
    day: 'Day 1',
    title: '建立帳號與選角',
    desc: '完成新手教學，領取首抽獎勵。建議刷首抽直到拿到至少一隻 UR 角色。',
    tips: ['完成 1-1 到 1-5 主線', '領取郵件獎勵', '首抽目標：凱薩或芙蕾雅'],
  },
  {
    day: 'Day 2',
    title: '推進主線至 2-5',
    desc: '解鎖競技場和更多日常玩法。優先把主線推到 2-5 以開啟更多功能。',
    tips: ['升級主力隊伍至 15 等', '加入公會', '開始做日常任務'],
  },
  {
    day: 'Day 3',
    title: '加入公會 & 開始日常',
    desc: '公會戰每天有額外獎勵，儘早加入活躍公會。',
    tips: ['完成全部日常任務', '參加公會捐獻', '收集首儲獎勵'],
  },
  {
    day: 'Day 4-5',
    title: '主線推至第 4 章',
    desc: '開始累積資源，裝備升級到 +5。不要分散資源在太多角色上。',
    tips: ['集中養成 5 隻核心角色', '裝備強化至 +5', '完成成就任務領鑽石'],
  },
  {
    day: 'Day 6-7',
    title: '解鎖進階系統',
    desc: '推進至 5-3 附近，為翅膀系統和極限挑戰做準備。',
    tips: ['主力角色升到 25 等', '準備翅膀升級素材', '參加競技場爭取排名獎勵'],
  },
  {
    day: 'Day 8',
    title: '翅膀 & 極限挑戰解鎖',
    desc: '第 8 天解鎖翅膀系統和極限挑戰，戰力會大幅提升。',
    tips: ['優先升級翅膀第一階段', '挑戰極限關卡獲取高級獎勵', '查看翅膀升級頁面了解材料需求'],
  },
  {
    day: 'Day 9-10',
    title: '3v3 競技場開啟',
    desc: '3v3 需要更多角色，開始培養第二梯隊。',
    tips: ['培養 8-10 隻可用角色', '研究 PVP 隊伍搭配', '每天打滿競技場次數'],
  },
  {
    day: 'Day 11-13',
    title: '穩定發育期',
    desc: '持續推主線、做日常、打競技場。等待活動開啟以最大化收益。',
    tips: ['不要浪費鑽石在普通招募上', '存體力等活動', '把翅膀升到二階'],
  },
  {
    day: 'Day 14-15',
    title: '首次大活動 & 總檢視',
    desc: '通常在第 14-15 天會開啟第一個衝刺活動或嘉年華，集中資源衝刺。',
    tips: ['查看活動頁面了解當前活動', '集中資源在活動目標上', '回顧養成進度，調整優先順序'],
  },
];

function renderGuide() {
  const timeline = document.getElementById('guide-timeline');
  if (!timeline) return;

  timeline.innerHTML = GUIDE_DATA.map(item => `
    <div class="timeline-item">
      <div class="timeline-date">${item.day}</div>
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-desc">${item.desc}</div>
      <ul class="event-details">
        ${item.tips.map(tip => `<li>${tip}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderGuide);
