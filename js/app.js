/* 渲染 54 页内容 + 导航交互 */
(function () {
  const book = document.getElementById('book');
  const tocList = document.getElementById('tocList');
  const tocDrawer = document.getElementById('tocDrawer');
  const tocScrim = document.getElementById('tocScrim');
  const pageIndicator = document.getElementById('pageIndicator');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');

  const ORANGE_STAR = '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 1.6 13.9 9.3 20.9 5.1 15.9 11.4 23.6 13.3 15.9 14.9 20.9 21.2 13.9 17 12 24 10.1 17 3.1 21.2 8.1 14.9 0.4 13.3 8.1 11.4 3.1 5.1 10.1 9.3Z" fill="#D97757"/></svg>';

  // ---------- 渲染页面 ----------
  const frag = document.createDocumentFragment();
  PAGES.forEach((pg, i) => {
    const sec = document.createElement('section');
    sec.className = 'page' + (pg.cls ? ' ' + pg.cls : '');
    if (pg.style) sec.style.cssText = pg.style;
    sec.id = 'p' + (i + 1);
    sec.dataset.title = pg.toc || '';
    const inner = document.createElement('div');
    if (pg.full) {
      inner.className = 'cover-inner';
    } else if (pg.dividerInner) {
      inner.className = 'divider-inner';
    } else {
      inner.className = 'page-inner';
    }
    inner.innerHTML = pg.html;
    sec.appendChild(inner);
    if (pg.footer) {
      const f = document.createElement('footer');
      f.className = 'page-footer';
      f.innerHTML = '<span>' + pg.footer + '</span><span class="pf-num">' + (i + 1) + '</span>';
      sec.appendChild(f);
    }
    frag.appendChild(sec);
  });
  book.appendChild(frag);

  const pages = Array.from(document.querySelectorAll('.page'));

  // ---------- 目录 ----------
  const tocItems = PAGES.map((pg, i) => ({ i, pg })).filter(x => x.pg.toc);
  tocItems.forEach(({ i, pg }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'toc-item';
    a.href = '#p' + (i + 1);
    a.dataset.idx = i;
    a.innerHTML =
      '<span class="toc-num">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<span class="toc-text"><span class="toc-name">' + pg.toc + '</span>' +
      (pg.tocSub ? '<span class="toc-sub">' + pg.tocSub + '</span>' : '') +
      '</span>';
    a.addEventListener('click', (e) => {
      e.preventDefault();
      closeToc();
      gotoPage(i, true);
    });
    li.appendChild(a);
    tocList.appendChild(li);
  });

  function openToc() {
    tocDrawer.classList.add('open');
    tocDrawer.setAttribute('aria-hidden', 'false');
    tocScrim.hidden = false;
  }
  function closeToc() {
    tocDrawer.classList.remove('open');
    tocDrawer.setAttribute('aria-hidden', 'true');
    tocScrim.hidden = true;
  }
  document.getElementById('btnToc').addEventListener('click', openToc);
  document.getElementById('tocClose').addEventListener('click', closeToc);
  tocScrim.addEventListener('click', closeToc);

  // ---------- 当前页跟踪 ----------
  let current = 0;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        current = pages.indexOf(en.target);
        pageIndicator.textContent = (current + 1) + ' / ' + pages.length;
        document.querySelectorAll('.toc-item').forEach(el => {
          el.classList.toggle('active', Number(el.dataset.idx) === current);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
  pages.forEach(p => io.observe(p));

  // ---------- 跳页 ----------
  function gotoPage(i, flash) {
    i = Math.max(0, Math.min(pages.length - 1, i));
    const el = pages[i];
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (flash) {
      el.classList.remove('flash');
      void el.offsetWidth;
      el.classList.add('flash');
      setTimeout(() => el.classList.remove('flash'), 1700);
    }
  }
  btnPrev.addEventListener('click', () => gotoPage(current - 1));
  btnNext.addEventListener('click', () => gotoPage(current + 1));
  document.getElementById('btnPrint').addEventListener('click', () => window.print());

  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'j') {
      e.preventDefault(); gotoPage(current - 1);
    } else if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === 'k') {
      e.preventDefault(); gotoPage(current + 1);
    } else if (e.key === 'Escape') {
      closeToc();
    }
  });
})();
