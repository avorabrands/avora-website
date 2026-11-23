/* ============================================================
   Avora Brands, shared chrome + interactions
   ============================================================ */
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page || '';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- logo ---------- */
let logoN = 0;
window.logoSVG = () => {
  const k = 'lg' + (logoN++);
  /* Real Avora mark from avorabrands.in + live-text wordmark (gold "BRANDS") */
  return `<span class="brand-lockup" role="img" aria-label="Avora Brands">
<img class="brand-mark" src="images/logo-mark.png" alt="" width="412" height="240">
<span class="brand-word" aria-hidden="true"><b>ΛVORΛ</b><i>BRANDS</i></span>
</span>`;
};

const I = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  li: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M.5 8.5h4V24h-4zM8.5 8.5h3.8v2.1h.06c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.77 2.65 4.77 6.1V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-4z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  chev: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m6 9 6 6 6-6"/></svg>',
  left: '<svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="m3 7 9 6.5L21 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.6 7.6"/><circle cx="11" cy="11" r="2"/></svg>',
  printer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/><path d="M18 12h.01"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c.4 4.6 2.4 7.6 6 9-3.6 1.4-5.6 4.4-6 9-.4-4.6-2.4-7.6-6-9 3.6-1.4 5.6-4.4 6-9z"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 10-10c0 2.8-2.2 4-4 4h-2a2 2 0 0 0-1.5 3.3A1.6 1.6 0 0 1 12 22z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10.5" cy="7" r="1.2"/><circle cx="15.5" cy="7.5" r="1.2"/></svg>',
};
window.ICONS = I;

/* ---------- announcement + header ---------- */
const NAV = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { label: 'Services', key: 'services', mega: true },
  { href: 'work.html', label: 'Work', key: 'work' },
  { href: 'about.html', label: 'About', key: 'about' },
  { href: 'blog.html', label: 'Insights', key: 'blog' },
  { href: 'careers.html', label: 'Careers', key: 'careers' },
  { href: 'contact.html', label: 'Contact', key: 'contact' }
];
const darkTop = document.body.classList.contains('dark-top');

function header() {
  const links = NAV.map(n => n.mega
    ? `<li><button aria-haspopup="true" ${['design', 'print', 'growth', 'kids'].includes(page) ? 'aria-current="page"' : ''}>Services ${I.chev}</button>
        <div class="mega" role="menu">
          <a href="design.html"><span class="ic">${I.pen}</span><span><strong>Design Studio</strong><small>Branding, websites, apps, social & packaging design</small></span></a>
          <a href="print.html"><span class="ic gold">${I.printer}</span><span><strong>Print & Merch</strong><small>Visiting cards, apparel, packaging, signage, delivered</small></span></a>
          <a href="growth.html"><span class="ic">${I.spark}</span><span><strong>Growth Plans</strong><small>Monthly posts, reels, shoots & ads to grow your business</small></span></a>
          <a href="kids.html"><span class="ic kids">${I.palette}</span><span><strong>Avora Kids <em class="new-tag">New</em></strong><small>Creative kits, folk art & gifts made from kids' imagination</small></span></a>
        </div></li>`
    : `<li><a href="${n.href}" class="${n.cls || ''}" ${page === n.key ? 'aria-current="page"' : ''}>${n.label}</a></li>`).join('');
  return `
  <header class="site-header ${darkTop ? 'on-dark-top' : ''}">
    <div class="container nav">
      <a href="index.html" class="brand" aria-label="Avora Brands home">${logoSVG()}</a>
      <nav aria-label="Main"><ul class="nav-links">${links}</ul></nav>
      <div class="nav-cta">
        <a class="btn btn--gold btn--sm" href="contact.html">Get a quote ${I.arrow}</a>
        <button class="menu-btn" aria-label="Open menu" aria-expanded="false"><span></span></button>
      </div>
    </div>
  </header>
  <div class="drawer" aria-hidden="true">
    <div class="drawer-top"><a href="index.html" class="brand">${logoSVG()}</a><button class="drawer-close" aria-label="Close menu">✕</button></div>
    <nav>
      <a href="index.html">Home</a>
      <a href="design.html">Design Studio</a>
      <a href="print.html">Print & Merch</a>
      <a href="growth.html">Growth Plans</a>
      <a href="kids.html">Avora Kids <small>NEW</small></a>
      <a href="work.html">Work</a>
      <a href="about.html">About</a>
      <a href="blog.html">Insights</a>
      <a href="careers.html">Careers</a>
      <a href="contact.html">Contact</a>
    </nav>
    <div class="btn-row"><a class="btn btn--wa" href="${wa('Hi Avora Brands!')}" target="_blank" rel="noopener">${I.wa} WhatsApp</a><a class="btn btn--gold" href="contact.html">Get a quote</a></div>
  </div>`;
}

function footer() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="foot-top">
        <div class="foot-brand">
          <a href="index.html" class="brand" style="height:44px">${logoSVG()}</a>
          <p>Design, print and delivery under one roof, for startups and growing businesses in Bengaluru, Madanapalle and across India.</p>
          <div class="socials">
            <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>
            <a href="${SITE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${I.li}</a>
            <a href="${wa('Hi Avora Brands!')}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>
            <a href="mailto:${SITE.email}" aria-label="Email">${I.mail}</a>
          </div>
        </div>
        <div><h5>Services</h5><ul>
          <li><a href="design.html#branding">Branding & Identity</a></li><li><a href="design.html#website">Website Design</a></li>
          <li><a href="design.html#app">Mobile App Design</a></li><li><a href="design.html#social">Social Media Design</a></li>
          <li><a href="print.html">Print & Merch</a></li><li><a href="growth.html">Growth Plans</a></li><li><a href="kids.html">Avora Kids</a></li></ul></div>
        <div><h5>Company</h5><ul>
          <li><a href="work.html">Our Work</a></li><li><a href="about.html">About Us</a></li><li><a href="blog.html">Insights</a></li>
          <li><a href="careers.html">Careers</a></li><li><a href="contact.html">Contact</a></li></ul></div>
        <div><h5>Visit & talk</h5><ul>
          <li>${SITE.address}</li>
          <li><a href="tel:+${SITE.phoneRaw}">${SITE.phone}</a></li>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li>${SITE.hours}</li></ul>
          <form class="news" data-news aria-label="Newsletter"><input type="email" required placeholder="Email for monthly tips" aria-label="Email"><button class="btn btn--gold btn--sm" type="submit">Join</button></form>
        </div>
      </div>
      <div class="giant" aria-hidden="true">avora brands</div>
      <div class="foot-bottom"><span>© 2026 Avora Brands. All rights reserved.</span><span>Made with <span style="color:#E2475B" aria-label="love">♥</span> in Bengaluru &amp; Madanapalle</span></div>
    </div>
  </footer>
  <div class="fabs" aria-label="Contact us">
    <a class="fab fab-call" href="tel:+${SITE.phoneRaw}" aria-label="Call us"><span class="fab-tip">Call us</span>${I.phone}</a>
    <a class="fab fab-wa" href="${wa('Hi Avora Brands! I have a question.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><span class="fab-tip">WhatsApp</span>${I.wa}</a>
  </div>`;
}

$('[data-header]')?.insertAdjacentHTML('afterbegin', header());
$('[data-footer]')?.insertAdjacentHTML('afterbegin', footer());

/* ---------- small renderers shared by pages ---------- */
window.renderIcons = (root = document) => $$('i[data-i]', root).forEach(e => e.outerHTML = I[e.dataset.i] || '');
window.renderWaLinks = (root = document) => $$('[data-wa-link]', root).forEach(a => { a.href = wa(a.dataset.waLink); a.target = '_blank'; a.rel = 'noopener'; });
window.workCard = (p, i = 0) => `<a class="work-card reveal" style="--d:${(i % 3) * .08}s" href="case.html?p=${p.id}" data-cat="${p.cat}">
  <div class="media"><img src="${p.cover}" alt="${p.client}, ${p.title}" loading="lazy"><span class="chip">${CATS[p.cat]}</span><span class="go">${I.arrow}</span></div>
  <h3>${p.client}</h3><p>${p.summary}</p><span class="outcome">✦ ${p.outcome}</span></a>`;
const FEATURED = ['tiara', 'veluguvani', 'cashalert-brand', 'bhaktitv', 'localservice-web', 'picxel-app', 'swagat'];
$$('[data-work]').forEach(el => {
  const list = el.dataset.work === 'featured' ? FEATURED.map(id => PROJECTS.find(p => p.id === id)) : PROJECTS;
  el.innerHTML = list.map(workCard).join('');
});
$$('[data-reviews]').forEach(el => el.innerHTML = REVIEWS.map((r, i) => `<figure class="review ${i === 0 ? 'big' : ''} reveal" style="--d:${i * .08}s">
  <span class="stars-5">★★★★★</span><blockquote>“${r.text}”</blockquote>
  <figcaption class="who"><span class="av" style="background:${r.color}">${r.name[0]}</span><span><b>${r.name}</b><small>Google review</small></span></figcaption></figure>`).join(''));
$$('[data-faces]').forEach(el => { const all = [...TEAM.cofounders, ...TEAM.team]; el.innerHTML = all.slice(0, 4).map(m => `<img src="${m.img}" alt="${m.name}" title="${m.name}, ${m.role}" loading="lazy">`).join('') + (all.length > 4 ? `<a class="face-more" href="about.html" aria-label="Meet ${all.length - 4} more team members">${all.length - 4}+</a>` : ''); });
renderIcons(); renderWaLinks();

/* header state */
const hdr = $('.site-header'), mcta = $('.m-cta');
const onScroll = () => {
  const y = scrollY;
  hdr?.classList.toggle('is-scrolled', y > 30);
  mcta?.classList.toggle('show', y > 500);
};
addEventListener('scroll', onScroll, { passive: true }); onScroll();

/* drawer */
const drawer = $('.drawer'), mb = $('.menu-btn');
const setDrawer = (o) => { drawer.classList.toggle('open', o); drawer.setAttribute('aria-hidden', !o); mb.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; };
mb?.addEventListener('click', () => setDrawer(true));
$('.drawer-close')?.addEventListener('click', () => setDrawer(false));
addEventListener('keydown', e => { if (e.key === 'Escape' && drawer?.classList.contains('open')) setDrawer(false); });

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
const watchReveals = (root = document) => $$('.reveal,.reveal-scale,.process,[data-count]', root).forEach(el => io.observe(el));
window.watchReveals = watchReveals;
addEventListener('load', () => document.documentElement.classList.add('loaded'));
setTimeout(() => document.documentElement.classList.add('loaded'), 1200);

/* ---------- counters ---------- */
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now(), dur = reduce ? 1 : 1400;
  const step = t => { const p = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3))); el.textContent = v + suf; if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}), { threshold: .4 });
$$('[data-count]').forEach(el => cio.observe(el));

/* ---------- cursor spotlight on cards ---------- */
document.addEventListener('pointermove', e => {
  const c = e.target.closest?.('.spotlight'); if (!c) return;
  const r = c.getBoundingClientRect(); c.style.setProperty('--x', (e.clientX - r.left) + 'px'); c.style.setProperty('--y', (e.clientY - r.top) + 'px');
});

/* ---------- magnetic buttons (desktop) ---------- */
if (matchMedia('(hover:hover) and (pointer:fine)').matches && !reduce) {
  $$('[data-magnetic]').forEach(b => {
    b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .28}px)`; });
    b.addEventListener('pointerleave', () => b.style.transform = '');
  });
}

/* ---------- tabs with sliding pill ---------- */
$$('[data-tabs]').forEach(t => {
  const btns = $$('button', t), pill = $('.pill', t);
  const go = (b) => {
    btns.forEach(x => x.setAttribute('aria-selected', x === b));
    pill.style.left = b.offsetLeft + 'px'; pill.style.width = b.offsetWidth + 'px';
    $$(`[data-panel-group="${t.dataset.tabs}"]`).forEach(p => p.classList.toggle('active', p.id === b.dataset.target));
  };
  btns.forEach(b => b.addEventListener('click', () => go(b)));
  requestAnimationFrame(() => go(btns.find(b => b.getAttribute('aria-selected') === 'true') || btns[0]));
  addEventListener('resize', () => go(btns.find(b => b.getAttribute('aria-selected') === 'true')));
});

/* ---------- drag-to-scroll rows ---------- */
$$('[data-scroller]').forEach(s => {
  let down = false, sx = 0, sl = 0, moved = false;
  s.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = s.scrollLeft; });
  addEventListener('pointerup', () => { down = false; s.classList.remove('dragging'); });
  s.addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) { moved = true; s.classList.add('dragging'); } s.scrollLeft = sl - dx; });
  s.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
  const nav = $(`[data-scroller-nav="${s.id}"]`);
  if (nav) { const [p, n] = $$('button', nav); const w = () => s.querySelector('.work-card')?.offsetWidth + 22 || 400; p.onclick = () => s.scrollBy({ left: -w(), behavior: 'smooth' }); n.onclick = () => s.scrollBy({ left: w(), behavior: 'smooth' }); }
});

/* ---------- forms → WhatsApp (no backend needed) ---------- */
$$('form[data-wa]').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  if (!f.reportValidity()) return;
  const fd = new FormData(f), lines = [f.dataset.wa];
  for (const k of new Set(fd.keys())) { const v = fd.getAll(k).map(String).filter(s => s.trim()).join(', '); if (v) lines.push(`${k}: ${v}`); }
  window.open(wa(lines.join('\n')), '_blank', 'noopener');
  const ok = $('.form-ok', f); if (ok) { ok.style.display = 'block'; }
}));
/* ---------- Newsletter: real welcome email via FormSubmit ---------- */
$$('[data-news]').forEach(f => f.addEventListener('submit', async e => {
  e.preventDefault();
  const input = f.querySelector('input[type=email]'), btn = f.querySelector('button'), email = input.value.trim();
  if (!input.checkValidity()) { input.reportValidity(); return; }
  btn.disabled = true; btn.textContent = 'Sending…';
  const note = (html, ok) => { let n = f.nextElementSibling; if (!n || !n.classList.contains('news-note')) { n = document.createElement('p'); f.after(n); } n.className = 'news-note ' + (ok ? 'ok' : 'err'); n.innerHTML = html; };
  try {
    const r = await fetch('https://formsubmit.co/ajax/' + SITE.newsletterInbox, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        email, _subject: 'New newsletter subscriber, Avora Brands', _template: 'box', _captcha: 'false',
        _autoresponse: "Hi there,\n\nThanks for joining the Avora Brands list! Once a month we'll send you practical branding, print and design tips for growing businesses, no spam, ever.\n\nNeed something designed or printed sooner? Just reply to this email or WhatsApp us on " + SITE.phone + ".\n\nWarm wishes,\nTeam Avora Brands\n" + SITE.address
      })
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok || String(d.success) === 'false') throw new Error(d.message || 'failed');
    f.innerHTML = '<span class="news-ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>You\'re in! Check your inbox for a welcome email.</span>';
    note('Sent to <b>' + email.replace(/[<>&"]/g, '') + '</b>. Not there? Check Promotions or Spam.', true);
  } catch (err) {
    btn.disabled = false; btn.textContent = 'Join';
    note('Couldn\'t subscribe right now. Please try again, or <a href="' + wa('Hi Avora! Please add me to your monthly tips list: ' + email) + '" target="_blank" rel="noopener">join on WhatsApp</a>.', false);
  }
}));

/* ---------- email links: open mail app, and always offer copy + Gmail fallback ---------- */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="mailto:"]'); if (!a) return;
  const url = new URL(a.href), to = decodeURIComponent(url.pathname), subj = url.searchParams.get('subject') || '';
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}${subj ? '&su=' + encodeURIComponent(subj) : ''}`;
  let t = document.querySelector('.mail-toast');
  if (!t) { t = document.createElement('div'); t.className = 'mail-toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.innerHTML = `<span class="mt-ic">${I.mail}</span><span><b>${to}</b><small>No mail app opened? Use Gmail or copy the address.</small></span><a href="${gmail}" target="_blank" rel="noopener">Open Gmail</a><button type="button" aria-label="Close">✕</button>`;
  t.querySelector('button').onclick = () => t.classList.remove('show');
  try { navigator.clipboard.writeText(to).then(() => { t.querySelector('small').textContent = 'Address copied. No mail app opened? Use Gmail.'; }, () => {}); } catch (_) {}
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 7000);
});

/* ---------- custom dropdowns: open below the field, in the site's style ---------- */
(() => {
  const chev = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  const tick = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  let openDd = null;
  const close = dd => { if (!dd) return; dd.classList.remove('open', 'up'); dd.querySelector('.dd-btn').setAttribute('aria-expanded', 'false'); if (openDd === dd) openDd = null; };
  window.enhanceSelects = (root = document) => $$('select.select, select.input', root).forEach((sel, n) => {
    if (sel.closest('.dd')) return;
    const id = sel.id || 'dd' + n + Math.random().toString(36).slice(2, 6);
    const dd = document.createElement('div'); dd.className = 'dd';
    sel.parentNode.insertBefore(dd, sel); dd.appendChild(sel); sel.classList.add('dd-native'); sel.tabIndex = -1; sel.setAttribute('aria-hidden', 'true');
    const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'dd-btn';
    btn.setAttribute('aria-haspopup', 'listbox'); btn.setAttribute('aria-expanded', 'false');
    const lab = document.querySelector(`label[for="${sel.id}"]`); if (lab) { lab.htmlFor = id + '-btn'; btn.id = id + '-btn'; }
    const menu = document.createElement('ul'); menu.className = 'dd-menu'; menu.setAttribute('role', 'listbox'); menu.id = id + '-list'; btn.setAttribute('aria-controls', menu.id);
    dd.append(btn, menu);
    const build = () => {
      menu.innerHTML = [...sel.options].map((o, i) => `<li role="option" tabindex="-1" data-i="${i}" aria-selected="${o.selected}" class="dd-opt${o.selected ? ' on' : ''}"><span>${o.textContent}</span><i>${tick}</i></li>`).join('');
      btn.innerHTML = `<span>${sel.options[sel.selectedIndex]?.textContent || ''}</span><b>${chev}</b>`;
    };
    const opts = () => [...menu.children];
    const pick = i => { sel.selectedIndex = i; sel.dispatchEvent(new Event('input', { bubbles: true })); sel.dispatchEvent(new Event('change', { bubbles: true })); build(); close(dd); btn.focus(); };
    const open = () => {
      if (openDd && openDd !== dd) close(openDd);
      dd.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); openDd = dd;
      const r = btn.getBoundingClientRect(), need = Math.min(menu.scrollHeight, 280) + 16;
      dd.classList.toggle('up', innerHeight - r.bottom < need && r.top > need);
      (opts()[sel.selectedIndex] || opts()[0])?.focus({ preventScroll: true });
    };
    build();
    sel.addEventListener('change', build);
    btn.addEventListener('click', () => dd.classList.contains('open') ? close(dd) : open());
    btn.addEventListener('keydown', e => { if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); open(); } });
    menu.addEventListener('click', e => { const li = e.target.closest('.dd-opt'); if (li) pick(+li.dataset.i); });
    menu.addEventListener('keydown', e => {
      const list = opts(), k = list.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); list[Math.min(k + 1, list.length - 1)].focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); list[Math.max(k - 1, 0)].focus(); }
      else if (e.key === 'Home') { e.preventDefault(); list[0].focus(); }
      else if (e.key === 'End') { e.preventDefault(); list[list.length - 1].focus(); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (k >= 0) pick(k); }
      else if (e.key === 'Escape') { e.preventDefault(); close(dd); btn.focus(); }
      else if (e.key === 'Tab') close(dd);
    });
    sel.form?.addEventListener('reset', () => setTimeout(build));
    sel.addEventListener('invalid', () => { dd.classList.add('bad'); btn.focus(); });
    sel.addEventListener('change', () => dd.classList.remove('bad'));
  });
  document.addEventListener('click', e => { if (openDd && !openDd.contains(e.target)) close(openDd); });
  enhanceSelects();
})();

/* ---------- split headline ---------- */
$$('[data-split]').forEach(h => {
  h.innerHTML = h.innerHTML.split('<br>').map((l, i) => `<span class="split-line"><span style="--d:${.1 + i * .12}s">${l}</span></span>`).join('');
});

/* ---------- logos marquee ---------- */
$$('[data-logos]').forEach(m => {
  const items = CLIENT_LOGOS.map(l => `<div class="logo-item"><img src="${l.src}" alt="${l.name}" loading="lazy"></div>`).join('');
  m.innerHTML = `<div class="marquee-track">${items}${items.replace(/alt="[^"]*"/g, 'alt="" aria-hidden="true"')}</div>`;
});

/* ---------- FAQ: one open at a time ---------- */
$$('.faq').forEach(f => $$('details', f).forEach(d => d.addEventListener('toggle', () => { if (d.open) $$('details', f).forEach(o => o !== d && (o.open = false)); })));

watchReveals();

/* ---------- Missing image fallback: show a branded placeholder instead of a broken icon ---------- */
const markMissing = img => { img.classList.add('img-missing'); img.removeAttribute('srcset'); img.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='; };
document.addEventListener('error', e => { const t = e.target; if (t.tagName === 'IMG' && !t.classList.contains('img-missing')) markMissing(t); }, true);
document.querySelectorAll('img').forEach(i => { if (i.complete && i.naturalWidth === 0 && i.getAttribute('src')) markMissing(i); });

/* ---------- Product thumbnail switcher ---------- */
document.querySelectorAll('.m-thumbs').forEach(t => t.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  const main = t.parentElement.querySelector(':scope > img');
  t.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
  main.style.opacity = 0; setTimeout(() => { main.src = b.dataset.src; main.style.opacity = 1; }, 180);
}));

/* ---------- Before / after slider ---------- */
document.querySelectorAll('[data-vs]').forEach(v => {
  const r = v.querySelector('.vs-range');
  const set = () => v.style.setProperty('--pos', r.value + '%');
  r.addEventListener('input', set); set();
  // gentle hint animation the first time it scrolls into view
  const io2 = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    io2.disconnect(); let t = 0; const seq = [50, 70, 30, 50];
    const step = () => { if (t >= seq.length) return; const from = +r.value, to = seq[t++], t0 = performance.now();
      const tick = now => { const k = Math.min(1, (now - t0) / 600); r.value = from + (to - from) * (1 - Math.pow(1 - k, 3)); set(); if (k < 1) requestAnimationFrame(tick); else setTimeout(step, 150); };
      requestAnimationFrame(tick); };
    setTimeout(step, 500);
  }), { threshold: .5 });
  io2.observe(v);
});
