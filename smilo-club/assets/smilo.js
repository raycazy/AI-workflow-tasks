/* Smilo Club theme script, v2 (2026-10-05)
   Behaviour that maps to theme JS: price state for review, mobile menu, announcement
   ticker, plan picker, gallery pager, sticky buy column, sticky add to cart, cart drawer
   (focus trap, inert background, Escape) and cart states.
   Review routes: produkt.html#kurv, #kurv-engang, #kurv-tom; kurv.html, #engang, #tom;
   add ?pris=b to any page for price state B. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Price model (sample values from the copy deck; selling plan prices in the theme) ---------- */
  const STATES = {
    a: { pris_klub: 399, pris_enkelt: 399, fragt_klub: 39, fragt_enkelt: 39 },
    b: { pris_klub: 349, pris_enkelt: 399, fragt_klub: 0, fragt_enkelt: 39 },
  };
  const state = root.dataset.pris === 'b' ? 'b' : 'a';
  const p = STATES[state];
  const dec = (n) => n.toFixed(2).replace('.', ',');
  const V = {
    pris_klub: p.pris_klub,
    pris_enkelt: p.pris_enkelt,
    pr_beh_klub: dec(p.pris_klub / 14),
    pr_beh_enkelt: dec(p.pris_enkelt / 14),
    spar: p.pris_enkelt - p.pris_klub,
    fragt_enkelt: p.fragt_enkelt,
    fragt_klub_txt: p.fragt_klub ? `${p.fragt_klub} kr.` : 'Gratis',
    fragt_saetning: p.fragt_klub ? `Fragt ${p.fragt_klub} kr. pr. pakke.` : 'Fri fragt.',
    total_klub: p.pris_klub + p.fragt_klub,
    total_enkelt: p.pris_enkelt + p.fragt_enkelt,
  };
  $$('[data-v]').forEach((el) => { if (V[el.dataset.v] !== undefined) el.textContent = V[el.dataset.v]; });
  if (state === 'b') {
    $$('a[href]').forEach((a) => {
      const h = a.getAttribute('href');
      if (/^(index|produkt|kurv)\.html/.test(h)) a.setAttribute('href', h.replace(/^([\w]+\.html)/, '$1?pris=b'));
    });
  }

  /* ---------- Mobile menu ---------- */
  const menuBtn = $('.menu-btn');
  const mobileNav = $('#mobilnav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const open = mobileNav.hidden;
      mobileNav.hidden = !open;
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Luk menu' : 'Åbn menu');
    });
  }

  /* ---------- Announcement: two lines rotate on narrow screens (transform only) ---------- */
  const ticker = $('[data-ticker]');
  if (ticker && $$('p', ticker).length > 1 && !reduce) {
    let i = 0;
    setInterval(() => {
      if (window.innerWidth > 600) { ticker.style.transform = ''; return; }
      i = 1 - i;
      ticker.style.transform = `translateY(${i * -50}%)`;
    }, 4500);
  }

  /* ---------- Cart state: klub | engang | tom ---------- */
  function setCartState(s) {
    $$('[data-cart]').forEach((c) => { c.dataset.state = s; });
    const n = s === 'tom' ? 0 : 1;
    $$('[data-cart-count]').forEach((el) => { el.textContent = n; el.hidden = n === 0; });
    $$('[data-cart-antal]').forEach((el) => { el.textContent = n; });
    $$('.cart-link').forEach((a) => a.setAttribute('aria-label', n === 1 ? 'Kurv, 1 vare' : `Kurv, ${n} varer`));
    $$('[data-plan-select]').forEach((sel) => { if (s !== 'tom') sel.value = s; });
    $$('[data-cart-total]').forEach((el) => { el.textContent = s === 'klub' ? V.total_klub : V.total_enkelt; });
  }

  const toastEl = $('#toast');
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-shown');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => toastEl.classList.remove('is-shown'), 2600);
  }

  /* ---------- Drawer ---------- */
  const drawer = $('#kurv');
  const backdrop = $('.drawer-backdrop');
  let lastFocus = null;
  const background = () => $$('body > :not(#kurv):not(.drawer-backdrop):not(#toast):not(script):not(svg)');
  const setInert = (on) => background().forEach((el) => (on ? el.setAttribute('inert', '') : el.removeAttribute('inert')));
  function openDrawer(s, fromRoute) {
    if (!drawer) return;
    setCartState(s);
    lastFocus = document.activeElement;
    setInert(true);
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    root.classList.add('has-drawer');
    if (!fromRoute) setTimeout(() => { const c = $('.drawer__close', drawer); c && c.focus({ preventScroll: true }); }, 60);
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    root.classList.remove('has-drawer');
    setInert(false);
    if (location.hash.startsWith('#kurv')) history.replaceState(null, '', location.pathname + location.search);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  if (drawer) {
    $$('[data-drawer-close]').forEach((b) => b.addEventListener('click', closeDrawer));
    backdrop.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', (e) => {
      if (!drawer.classList.contains('is-open')) return;
      if (e.key === 'Escape') { closeDrawer(); return; }
      if (e.key !== 'Tab') return;
      const f = $$('a[href],button:not([disabled]),select,input,[tabindex]:not([tabindex="-1"])', drawer).filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || !drawer.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (document.activeElement === last || !drawer.contains(document.activeElement))) { e.preventDefault(); first.focus(); }
    });
    $$('[data-cart-open]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); openDrawer(drawer.dataset.state || 'tom'); }));
  }
  $$('[data-remove]').forEach((b) => b.addEventListener('click', () => setCartState('tom')));
  $$('[data-plan-select]').forEach((sel) => sel.addEventListener('change', () => setCartState(sel.value)));
  $$('[data-switch-klub]').forEach((b) => b.addEventListener('click', () => { setCartState('klub'); toast('Du er skiftet til Klubben.'); }));
  $$('.qty__ctrl').forEach((q) => {
    const out = $('output', q);
    q.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      out.textContent = Math.max(1, (parseInt(out.textContent, 10) || 1) + (b.dataset.step === '+' ? 1 : -1));
    });
  });

  /* Review routes */
  function route() {
    const h = location.hash.slice(1);
    if (drawer) {
      if (h === 'kurv') openDrawer('klub', true);
      else if (h === 'kurv-engang') openDrawer('engang', true);
      else if (h === 'kurv-tom') openDrawer('tom', true);
    } else if ($('[data-cart-page]')) {
      setCartState({ engang: 'engang', tom: 'tom' }[h] || 'klub');
    }
  }
  window.addEventListener('hashchange', route);
  route();

  /* ---------- Plan picker (Klubben selling plan, or no plan) ---------- */
  const buy = $('[data-buy]');
  if (buy) {
    const sync = () => {
      const plan = (buy.querySelector('input[name="plan"]:checked') || {}).value || 'klub';
      document.body.dataset.plan = plan;
    };
    buy.addEventListener('change', sync);
    sync();
    buy.addEventListener('submit', (e) => { e.preventDefault(); openDrawer(document.body.dataset.plan === 'enkelt' ? 'engang' : 'klub'); });
    $$('[data-sticky-add]').forEach((b) => b.addEventListener('click', () => openDrawer(document.body.dataset.plan === 'enkelt' ? 'engang' : 'klub')));
  }

  /* ---------- Sticky add to cart ----------
     Shown while the buy button is off screen; hidden while the plan cards are on screen
     and once the footer is in view. Driven by scroll, not an observer (jump scrolls). */
  const bar = $('.sticky-atc');
  const cta = $('#buy-cta');
  const plans = $('[data-plans]');
  const footer = $('.site-footer');
  if (bar && cta) {
    const vis = (r) => r.bottom > 0 && r.top < window.innerHeight;
    const onScroll = () => {
      const ctaOff = !vis(cta.getBoundingClientRect());
      const plansOn = plans ? vis(plans.getBoundingClientRect()) : false;
      const atFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      const show = ctaOff && !plansOn && !atFooter;
      bar.classList.toggle('is-shown', show);
      bar.setAttribute('aria-hidden', String(!show));
      $$('button', bar).forEach((b) => (b.tabIndex = show ? 0 : -1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }

  /* ---------- Buy column: sticks so its bottom edge lands at the viewport bottom (1440) ---------- */
  const col = $('[data-buy-col]');
  if (col) {
    const fit = () => {
      const head = parseInt(getComputedStyle(root).getPropertyValue('--header-h'), 10) || 72;
      col.style.setProperty('--stick', `${Math.min(head + 24, window.innerHeight - col.offsetHeight - 24)}px`);
    };
    window.addEventListener('resize', fit);
    $$('details', col).forEach((d) => d.addEventListener('toggle', fit));
    fit();
  }

  /* ---------- Gallery pager (390 swipe) ---------- */
  const track = $('[data-gallery-track]');
  if (track) {
    const slides = $$('.slide', track);
    const dots = $$('[data-gallery-dots] button');
    const n = $('[data-gallery-n]');
    const update = () => {
      const i = Math.round(track.scrollLeft / Math.max(1, slides[0].offsetWidth + 8));
      const k = Math.max(0, Math.min(slides.length - 1, i));
      if (n) n.textContent = k + 1;
      dots.forEach((d, j) => (j === k ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current')));
    };
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    dots.forEach((d, j) => d.addEventListener('click', () => track.scrollTo({ left: slides[j].offsetLeft - track.offsetLeft, behavior: reduce ? 'auto' : 'smooth' })));
  }

  /* ---------- How to: step swipe pager (390) ---------- */
  $$('[data-swipe]').forEach((box) => {
    const strack = $('[data-swipe-track]', box);
    const items = $$('[data-swipe-item]', box);
    const sdots = $$('[data-swipe-dots] button', box);
    const sn = $('[data-swipe-n]', box);
    if (!strack || !items.length) return;
    const step = () => (items[1] ? items[1].offsetLeft - items[0].offsetLeft : items[0].offsetWidth);
    const update = () => {
      const k = Math.max(0, Math.min(items.length - 1, Math.round(strack.scrollLeft / Math.max(1, step()))));
      if (sn) sn.textContent = k + 1;
      sdots.forEach((d, j) => (j === k ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current')));
    };
    strack.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    sdots.forEach((d, j) => d.addEventListener('click', () => strack.scrollTo({ left: j * step(), behavior: reduce ? 'auto' : 'smooth' })));
  });

  /* ---------- How to animations: play once, then replay on demand (WCAG 2.2.2) ----------
     Each animation plays once (3s) the first time its card comes into view, 380ms after the
     previous one started (all six stop within 5s), and rests on its last frame. Tap, click, hover, focus or "Afspil igen"
     replays it. Reduced motion: no autoplay, no replay; the static key frame stays (CSS). */
  const steps = $$('.hstep');
  if (steps.length && !reduce) {
    let nextStart = 0;
    const play = (svg) => {
      if (!svg || svg.dataset.running === '1') return;
      svg.removeAttribute('data-run');
      void svg.getBoundingClientRect(); // restart the CSS animations
      svg.setAttribute('data-run', '');
      svg.dataset.running = '1';
      setTimeout(() => { svg.dataset.running = '0'; }, 3100);
    };
    const queue = (svg) => {
      const now = performance.now();
      const at = Math.max(now, nextStart);
      nextStart = at + 380; // whole row of six has stopped within 5s (WCAG 2.2.2)
      setTimeout(() => play(svg), at - now);
    };
    if ('IntersectionObserver' in window) {
      const sio = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          sio.unobserve(en.target);
          queue($('svg.loop', en.target));
        });
      }, { threshold: 0.5 });
      steps.forEach((st) => sio.observe(st));
    }
    steps.forEach((st) => {
      const svg = $('svg.loop', st);
      const replay = () => play(svg);
      st.addEventListener('mouseenter', replay);
      st.addEventListener('focusin', replay);
      $('.hstep__stage', st).addEventListener('click', replay);
    });
  }

  /* ---------- Cart page: sticky checkout row on narrow screens ---------- */
  const cbar = $('[data-checkout-bar]');
  const ccta = $('#cart-cta');
  if (cbar && ccta) {
    const onScroll = () => {
      const r = ccta.getBoundingClientRect();
      const empty = $('[data-cart]').dataset.state === 'tom';
      const atFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      const show = !empty && window.innerWidth <= 600 && (r.top > window.innerHeight || r.bottom < 0) && !atFooter;
      cbar.classList.toggle('is-shown', show);
      cbar.setAttribute('aria-hidden', String(!show));
      $$('a', cbar).forEach((a) => (a.tabIndex = show ? 0 : -1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('hashchange', onScroll);
    onScroll();
  }
})();
