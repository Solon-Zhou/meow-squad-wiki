/* ============================================
   攻略網站 — 共用佈局邏輯 v2 (Wiki Layout)
   ============================================ */

// 導航結構定義
const NAV_STRUCTURE = [
  {
    section: '主要頁面',
    links: [
      { href: 'index.html', icon: '🏠', label: '首頁' },
    ]
  },
  {
    section: '角色',
    links: [
      { href: 'characters.html', icon: '🧙', label: '角色總覽' },
    ]
  },
  {
    section: '翅膀',
    links: [
      { href: 'wings.html', icon: '🪽', label: '翅膀升級' },
    ]
  },
  {
    section: '遊戲系統',
    links: [
      { href: 'features.html', icon: '🔓', label: '功能解鎖' },
    ]
  },
  {
    section: '活動',
    links: [
      { href: 'events.html', icon: '📅', label: '活動資訊' },
    ]
  }
];

// 右側欄公告資料
const ANNOUNCEMENTS = [
  { label: '更新', text: '翅膀衝刺活動資料已補充' },
  { label: '新增', text: '功能解鎖頁面上線，27項系統整理完成' },
  { label: '提醒', text: '翅膀嘉年華開啟後再消耗翅膀材料，效益最大！' },
];

// 快速資訊
const QUICK_INFO = [
  { label: 'UR 最高等級', value: '25 等' },
  { label: 'SSR 最高等級', value: '20 等' },
  { label: '極限挑戰解鎖', value: '5-3 + 第8天' },
  { label: '翅膀解鎖', value: '5-3 + 第8天' },
  { label: '3v3競技場', value: '2-5 + 第9天' },
];

/* ================================================
   注入函式
   ================================================ */

function createTopNavbar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const allLinks = NAV_STRUCTURE.flatMap(s => s.links);

  return `
    <nav class="top-navbar" id="top-navbar">
      <button class="nav-mobile-toggle" id="mobile-menu-toggle" aria-label="選單">
        <span></span><span></span><span></span>
      </button>
      <a href="index.html" class="top-nav-logo">🐱 喵喵特攻隊</a>
      <div class="top-nav-search">
        <input type="text" id="global-search" placeholder="搜尋功能、角色..." autocomplete="off">
      </div>
      <ul class="top-nav-links">
        ${allLinks.map(link => `
          <li><a href="${link.href}" class="${link.href === currentPage ? 'active' : ''}">${link.icon} ${link.label}</a></li>
        `).join('')}
      </ul>
    </nav>
  `;
}

function createLeftSidebar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const sectionsHTML = NAV_STRUCTURE.map(section => `
    <div class="sidebar-section">
      <div class="sidebar-section-title" onclick="toggleSection(this)">
        <span>${section.section}</span>
        <span class="sidebar-section-arrow">▾</span>
      </div>
      <div class="sidebar-links">
        ${section.links.map(link => `
          <a href="${link.href}" class="sidebar-link ${link.href === currentPage ? 'active' : ''}">
            <span class="sidebar-link-icon">${link.icon}</span>
            <span>${link.label}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');

  return `
    <aside class="wiki-sidebar" id="wiki-sidebar">
      <nav class="sidebar-nav">
        ${sectionsHTML}
      </nav>
    </aside>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
  `;
}

function createRightSidebar() {
  const announcementsHTML = ANNOUNCEMENTS.map(a => `
    <div class="announce-item">
      <span class="announce-badge">${a.label}</span>${a.text}
    </div>
  `).join('');

  const quickInfoHTML = QUICK_INFO.map(q => `
    <div class="right-widget-item">
      <div class="right-widget-label">${q.label}</div>
      <div class="right-widget-value">${q.value}</div>
    </div>
  `).join('');

  return `
    <aside class="wiki-right-sidebar">
      <div class="right-widget">
        <div class="right-widget-title">📢 最新公告</div>
        ${announcementsHTML}
      </div>
      <div class="right-widget">
        <div class="right-widget-title">⚡ 快速資訊</div>
        ${quickInfoHTML}
      </div>
    </aside>
  `;
}

function createFooter() {
  return `
    <footer class="footer" style="margin-left:220px;margin-right:250px;">
      <p>非官方玩家攻略百科 — 本站為粉絲自製，與遊戲官方無關，所有內容僅供參考</p>
    </footer>
  `;
}

/* ================================================
   初始化
   ================================================ */

function injectLayout() {
  // 頂部 navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = createTopNavbar();

  // 左側邊欄
  const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
  if (sidebarPlaceholder) sidebarPlaceholder.outerHTML = createLeftSidebar();

  // 右側邊欄
  const rightPlaceholder = document.getElementById('rightsidebar-placeholder');
  if (rightPlaceholder) rightPlaceholder.outerHTML = createRightSidebar();

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = createFooter();
}

function initMobileMenu() {
  document.addEventListener('click', (e) => {
    const toggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('wiki-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!toggle || !sidebar || !overlay) return;

    if (e.target.closest('#mobile-menu-toggle')) {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    } else if (e.target.closest('#sidebar-overlay')) {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    }
  });
}

function toggleSection(titleEl) {
  const section = titleEl.closest('.sidebar-section');
  section.classList.toggle('collapsed');
}

/* --- 入場動畫 --- */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.card, .timeline-item, .wing-tier-card, .data-table-wrapper').forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  initMobileMenu();
  initAnimations();
});
