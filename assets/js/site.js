/* ============================================================
   Avora Brands, shared chrome + interactions
   Order: helpers, header/footer, renderers, navigation, tabs,
   forms, small behaviours.
   ============================================================ */
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page || '';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const I = {
  arrow: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  wa: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41"/></svg>',
  ig: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  li: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M.5 8.5h4V24h-4zM8.5 8.5h3.8v2.1h.06c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.77 2.65 4.77 6.1V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-4z"/></svg>',
  mail: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  chev: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m6 9 6 6 6-6"/></svg>',
  left: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  phone: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail2: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="m3 7 9 6.5L21 7"/></svg>',
  pin: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  menu: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  x: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 5l14 14M19 5 5 19"/></svg>'
};
window.ICONS = I;

/* ---------- logo ---------- */
window.logoSVG = () => `<span class="brand-lockup">
<img class="brand-mark" src="images/opt/logo-mark-412.webp" alt="" width="412" height="240">
<span class="brand-word" aria-hidden="true"><b>ΛVORΛ</b><i>BRANDS</i></span>
</span>`;

/* ============================================================
   Header, mobile menu, footer
   ============================================================ */
const SERVICES = [
  { href: 'design.html', key: 'design', label: 'Brand & digital', text: 'Logos, websites, apps, social and packaging design' },
  { href: 'print.html', key: 'print', label: 'Print & merch', text: 'Cards, apparel, packaging, signage and gifts' },
  { href: 'growth.html', key: 'growth', label: 'Growth plans', text: 'Monthly posts, reels, shoots and ads' },
  { href: 'kids.html', key: 'kids', label: 'Avora Kids', text: 'Creative kits and personalised gifts for children' }
];
const NAV = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { label: 'Services', key: 'services' },
  { href: 'work.html', label: 'Work', key: 'work' },
  { href: 'about.html', label: 'About', key: 'about' },
  { href: 'blog.html', label: 'Insights', key: 'blog' },
  { href: 'contact.html', label: 'Contact', key: 'contact' }
];
const here = key => page === key ? ' aria-current="page"' : '';
const inServices = SERVICES.some(s => s.key === page);
const startHref = 'contact.html#start';

function header() {
  const links = NAV.map(n => n.key === 'services'
    ? `<li data-menu><button type="button" class="nav-item" id="svcBtn" aria-expanded="false" aria-controls="svcMenu"${inServices ? ' aria-current="true"' : ''}>Services ${I.chev}</button>
        <ul class="submenu" id="svcMenu" aria-labelledby="svcBtn">${SERVICES.map(s => `<li><a href="${s.href}"${here(s.key)}><strong>${s.label}</strong><small>${s.text}</small></a></li>`).join('')}</ul></li>`
    : `<li><a class="nav-item" href="${n.href}"${here(n.key)}>${n.label}</a></li>`).join('');
  return `
  <header class="site-header">
    <div class="container nav">
      <a href="index.html" class="brand" aria-label="Avora Brands, home">${logoSVG()}</a>
      <nav class="nav-main" aria-label="Main"><ul class="nav-links">${links}</ul></nav>
      <div class="nav-cta">
        <a class="btn btn--primary btn--sm" href="${startHref}">Start a project</a>
        <button type="button" class="menu-btn" aria-haspopup="dialog" aria-controls="menu" aria-label="Open menu">${I.menu}</button>
      </div>
    </div>
  </header>
  <dialog class="menu" id="menu" aria-label="Menu">
    <div class="menu-top"><a href="index.html" class="brand" aria-label="Avora Brands, home">${logoSVG()}</a><button type="button" class="menu-close" aria-label="Close menu">${I.x}</button></div>
    <nav aria-label="Mobile">
      <a href="index.html"${here('home')}>Home</a>
      <div class="menu-group"><p id="mSvc">Services</p>${SERVICES.map(s => `<a href="${s.href}"${here(s.key)}>${s.label}</a>`).join('')}</div>
      <a href="work.html"${here('work')}>Work</a>
      <a href="about.html"${here('about')}>About</a>
      <a href="blog.html"${here('blog')}>Insights</a>
      <a href="contact.html"${here('contact')}>Contact</a>
      <a class="menu-sub" href="careers.html"${here('careers')}>Careers</a>
    </nav>
    <div class="menu-foot"><a class="btn btn--primary btn--block" href="${startHref}">Start a project</a>
      <a class="wa-link" href="${wa('Hi Avora Brands!')}" target="_blank" rel="noopener">${I.wa} Continue on WhatsApp</a></div>
  </dialog>`;
}

function footer() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="foot-top">
        <div class="foot-brand">
          <a href="index.html" class="brand" aria-label="Avora Brands, home">${logoSVG()}</a>
          <p>Branding, digital, print and delivery from one team, for growing businesses in Bengaluru, Madanapalle and across India.</p>
          <div class="socials">
            <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram (opens in a new tab)">${I.ig}</a>
            <a href="${SITE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn (opens in a new tab)">${I.li}</a>
          </div>
        </div>
        <nav aria-labelledby="f1"><h2 id="f1">Services</h2><ul>${SERVICES.map(s => `<li><a href="${s.href}">${s.label}</a></li>`).join('')}</ul></nav>
        <nav aria-labelledby="f2"><h2 id="f2">Company</h2><ul>
          <li><a href="work.html">Work</a></li><li><a href="about.html">About</a></li><li><a href="blog.html">Insights</a></li>
          <li><a href="careers.html">Careers</a></li><li><a href="contact.html">Contact</a></li></ul></nav>
        <div><h2>Visit and talk</h2><ul>
          <li>${SITE.address}</li>
          <li>${SITE.hours}</li>
          <li><a href="tel:+${SITE.phoneRaw}">${SITE.phone}</a></li>
          <li><a href="${wa('Hi Avora Brands!')}" target="_blank" rel="noopener">WhatsApp us</a></li>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li></ul>
          ${page === 'blog' ? '' : `<form class="news" data-news novalidate><label for="f-news">Monthly branding and print tips</label>
            <div class="news-row"><input class="input" id="f-news" type="email" required autocomplete="email" placeholder="you@example.com"><button class="btn btn--sm" type="submit">Join</button></div>
            <p class="news-note" role="status" aria-live="polite"></p></form>`}
        </div>
      </div>
      <div class="foot-bottom"><span>© 2026 Avora Brands. All rights reserved.</span><span>Made in Bengaluru and Madanapalle</span></div>
    </div>
  </footer>
  ${page === 'contact' ? '' : `<a class="fab" href="${wa('Hi Avora Brands! I have a question.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp (opens in a new tab)">${I.wa}</a>`}`;
}

$('[data-header]').innerHTML = header();
$('[data-footer]').innerHTML = footer();

/* ============================================================
   Renderers shared by pages
   ============================================================ */
window.renderIcons = (root = document) => $$('i[data-i]', root).forEach(e => e.outerHTML = I[e.dataset.i] || '');
window.renderWaLinks = (root = document) => $$('[data-wa-link]', root).forEach(a => { a.href = wa(a.dataset.waLink); a.target = '_blank'; a.rel = 'noopener'; });

/* case-study card: client, service, short outcome, always-visible action */
window.workCard = (p, { feature = false, heading = 'h3', sizes = '(max-width: 600px) 100vw, (max-width: 860px) 100vw, 400px' } = {}) =>
  `<a class="case-card${feature ? ' case-card--feature' : ''}" href="case.html?p=${p.id}" data-cat="${p.cat}">
    <div class="shot">${pic(p.cover, { alt: `${p.client}: ${CATS[p.cat].toLowerCase()} project`, sizes: feature ? '(max-width: 860px) 100vw, 700px' : sizes, attrs: p.focus ? `style="object-position:${p.focus}"` : '' })}</div>
    <div class="txt"><span class="meta">${p.client} · ${CATS[p.cat]}</span><${heading}>${p.title}</${heading}>
      <p>${p.summary}</p>${feature ? `<p class="result">${p.outcome}</p>` : ''}<span class="go">View case study ${I.arrow}</span></div></a>`;
$$('[data-work]').forEach(el => {
  const list = el.dataset.work.split(',').map(id => PROJECTS.find(p => p.id === id.trim())).filter(Boolean);
  el.innerHTML = list.map(p => workCard(p, { feature: el.hasAttribute('data-feature') })).join('');
});
$$('[data-project-count]').forEach(el => el.textContent = PROJECTS.length);
$$('[data-reviews]').forEach(el => el.innerHTML = REVIEWS.map(r => `<figure class="quote-card"><blockquote>“${r.text}”</blockquote><figcaption><b>${r.name}</b><span>${r.source}</span></figcaption></figure>`).join(''));
$$('[data-team]').forEach(el => el.innerHTML = PEOPLE.map(m => `<article class="team-card">${pic(m.img, { alt: `Portrait of ${m.name}`, sizes: '(max-width: 600px) 112px, (max-width: 1000px) 50vw, 290px' })}<div><h3>${m.name}</h3><p class="title">${m.role}</p><p>${m.about}</p><p class="skills">${m.skills}</p></div></article>`).join(''));
$$('[data-milestones]').forEach(el => el.innerHTML = MILESTONES.map(m => `<li><span class="when">${m.when}</span><div><b>${m.title}</b><span class="d">${m.text}${m.href ? ` <a class="link" href="${m.href}">See the project</a>` : ''}</span></div></li>`).join(''));
$$('[data-logos]').forEach(el => el.innerHTML = CLIENT_LOGOS.map(l => `<li>${pic(l.src, { alt: l.name, sizes: '118px' })}</li>`).join(''));
renderIcons(); renderWaLinks();

/* ============================================================
   Navigation
   ============================================================ */
/* Services menu: click, keyboard, touch and hover */
$$('[data-menu]').forEach(li => {
  const btn = $('button', li), menu = $('.submenu', li), links = $$('a', menu);
  let timer;
  const set = open => { clearTimeout(timer); btn.setAttribute('aria-expanded', open); menu.classList.toggle('is-open', open); };
  const isOpen = () => btn.getAttribute('aria-expanded') === 'true';
  let byHover = false;
  btn.addEventListener('click', () => { if (byHover && isOpen()) { byHover = false; return; } set(!isOpen()); });
  li.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse' && !isOpen()) { byHover = true; set(true); } clearTimeout(timer); });
  li.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') timer = setTimeout(() => { byHover = false; if (!li.contains(document.activeElement) || document.activeElement === btn) set(false); }, 220); });
  li.addEventListener('focusout', e => { if (!li.contains(e.relatedTarget)) set(false); });
  document.addEventListener('click', e => { if (!li.contains(e.target)) set(false); });
  li.addEventListener('keydown', e => {
    const k = links.indexOf(document.activeElement);
    if (e.key === 'Escape' && isOpen()) { set(false); btn.focus(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); if (!isOpen()) set(true); links[Math.min(k + 1, links.length - 1)].focus(); }
    else if (e.key === 'ArrowUp' && k >= 0) { e.preventDefault(); k === 0 ? btn.focus() : links[k - 1].focus(); }
    else if (e.key === 'Home' && k >= 0) { e.preventDefault(); links[0].focus(); }
    else if (e.key === 'End' && k >= 0) { e.preventDefault(); links[links.length - 1].focus(); }
  });
});

/* Keep Tab inside an open dialog */
window.trapTab = dlg => dlg.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const f = $$('a[href], button:not([disabled]), input, select, textarea', dlg).filter(x => x.offsetParent !== null);
  if (!f.length) return;
  if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
  else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
});

/* Mobile menu: a native dialog, so the page behind is inert and closed links are never focusable */
(() => {
  const menu = $('#menu'), btn = $('.menu-btn');
  trapTab(menu);
  btn.addEventListener('click', () => { menu.showModal(); document.documentElement.style.overflow = 'hidden'; $('.menu-close', menu).focus(); });
  $('.menu-close', menu).addEventListener('click', () => menu.close());
  menu.addEventListener('click', e => { if (e.target === menu || e.target.closest('a')) menu.close(); });
  menu.addEventListener('close', () => { document.documentElement.style.overflow = ''; btn.focus(); });
  matchMedia('(min-width: 1041px)').addEventListener('change', e => { if (e.matches && menu.open) menu.close(); });
})();

/* ============================================================
   Tabs: [role=tablist] with [role=tab][aria-controls]
   ============================================================ */
window.initTabs = (list, onChange) => {
  const tabs = $$('[role=tab]', list);
  const select = (tab, focus) => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel && new Set(tabs.map(x => x.getAttribute('aria-controls'))).size > 1) panel.hidden = !on;
    });
    if (focus) { tab.focus({ preventScroll: true }); tab.scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
    onChange?.(tab);
  };
  list.addEventListener('click', e => { const t = e.target.closest('[role=tab]'); if (t) select(t); });
  list.addEventListener('keydown', e => {
    const k = tabs.indexOf(document.activeElement); if (k < 0) return;
    const to = { ArrowRight: k + 1, ArrowDown: k + 1, ArrowLeft: k - 1, ArrowUp: k - 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (to === undefined) return;
    e.preventDefault(); select(tabs[(to + tabs.length) % tabs.length], true);
  });
  return select;
};

/* ============================================================
   Forms
   ============================================================ */
/* Email through Web3Forms. Throws if it was not accepted. */
window.sendEmail = async fields => {
  /* plain form data: no cross-site preflight request, so there is less that can be blocked */
  const body = new FormData();
  Object.entries({ access_key: SITE.web3formsKey, from_name: 'Avora Brands website', ...fields }).forEach(([k, v]) => body.append(k, v));
  const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', keepalive: true, headers: { Accept: 'application/json' }, body });
  const d = await r.json().catch(() => ({}));
  if (!r.ok || d.success !== true) throw new Error(d.message || 'failed');
};

/* Inline validation: message under the field, linked with aria-describedby */
window.checkForm = form => {
  const bad = [];
  $$('[data-check]', form).forEach(f => {
    const v = (f.value || '').trim(), kind = f.dataset.check;
    let msg = '';
    if (f.required && !v) msg = f.dataset.empty || 'Please fill this in.';
    else if (v && kind === 'contact' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) && v.replace(/\D/g, '').length < 10) msg = 'Enter a 10-digit phone number or an email address.';
    else if (v && kind === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = 'Enter an email address like name@example.com.';
    else if (v && kind === 'phone' && v.replace(/\D/g, '').length < 10) msg = 'Enter a 10-digit phone number.';
    else if (v && kind === 'url' && !f.checkValidity()) msg = 'Enter a link, like behance.net/yourname';
    setError(f, msg); if (msg) bad.push(f);
  });
  $$('[data-check-group]', form).forEach(g => {
    const ok = $('input:checked', g), msg = ok ? '' : g.dataset.empty || 'Please choose one.';
    const e = $('.error', g); e.textContent = msg; $$('input', g).forEach(x => x.setAttribute('aria-describedby', e.id));
    if (msg) bad.push($('input', g));
  });
  return bad.sort((a, b) => a.compareDocumentPosition(b) & 4 ? -1 : 1);
};
const setError = (f, msg) => {
  const e = document.getElementById(f.id + '-err'); if (!e) return;
  e.textContent = msg; f.toggleAttribute('aria-invalid', false);
  if (msg) f.setAttribute('aria-invalid', 'true'); else f.removeAttribute('aria-invalid');
};
document.addEventListener('input', e => {
  if (e.target.matches('[data-check][aria-invalid]')) setError(e.target, '');
  const g = e.target.closest?.('[data-check-group]'); if (g) $('.error', g).textContent = '';
});

/* Project enquiry: one click emails the brief to SITE.email's inbox and opens WhatsApp with
   the same message. WhatsApp cannot be sent for the visitor, so they press send there. */
$$('form[data-project-form]').forEach(f => {
  const status = $('.form-status', f), send = $('[type=submit]', f), label = send.textContent;
  const show = (html, ok) => { status.className = 'form-status ' + (ok ? 'is-ok' : 'is-err'); status.innerHTML = html; };
  const clear = () => { status.className = 'form-status'; status.innerHTML = ''; };
  const data = () => Object.fromEntries([...new FormData(f)].filter(([k, v]) => k !== '_honey' && String(v).trim()));
  const message = d => ['New project enquiry from avorabrands.in', ...Object.entries(d).map(([k, v]) => `${k}: ${v}`)].join('\n');
  const valid = () => {
    const bad = checkForm(f);
    if (bad.length) { show(`<b>Please check ${bad.length === 1 ? 'one field' : bad.length + ' fields'}.</b>Nothing has been sent yet.`, false); bad[0].focus(); return false; }
    clear(); return true;
  };

  /* prefill from links such as contact.html?need=Print&about=Letterheads, or from the print list */
  const q = new URLSearchParams(location.search), need = q.get('need'), about = q.get('about');
  if (need) { const r = $$('input[name="Need"]', f).find(x => x.value.toLowerCase() === need.toLowerCase()); if (r) r.checked = true; }
  const details = $('[name="Project"]', f);
  let list = ''; try { list = sessionStorage.getItem('avoraPrintRequest') || ''; } catch (_) {}
  if (q.get('list') && list) details.value = list;
  else if (about) details.value = `I'm interested in: ${about}\n`;

  f.addEventListener('submit', async e => {
    e.preventDefault();
    if (f._honey?.value || !valid()) return;
    const d = data(), isMail = /@/.test(d.Contact), chat = wa(message(d));
    const again = `<a href="${chat}" target="_blank" rel="noopener">send it on WhatsApp</a>`;
    send.disabled = true; send.textContent = 'Sending…';
    /* Start the email first, then open WhatsApp in the same click so browsers do not block it. */
    const mail = sendEmail({ subject: `Project enquiry: ${d.Need}, ${d.Name}`, ...(isMail ? { replyto: d.Contact } : {}), ...d, Page: location.pathname });
    window.open(chat, '_blank', 'noopener');
    try {
      await mail;
      show(`<b>Thanks, ${esc(d.Name.split(' ')[0])}. We’ve got your message.</b>We’ll reply within one working day.`, true);
      f.reset(); send.textContent = 'Sent';
      try { sessionStorage.removeItem('avoraPrintRequest'); } catch (_) {}
      setTimeout(() => { send.disabled = false; send.textContent = label; }, 4000);
    } catch (_) {
      send.disabled = false; send.textContent = label;
      show(`<b>That didn’t send.</b>Try again, or ${again}.`, false);
    }
    status.tabIndex = -1; status.focus();
  });
});

/* Newsletter */
$$('[data-news]').forEach(f => f.addEventListener('submit', async e => {
  e.preventDefault();
  const input = $('input[type=email]', f), btn = $('button', f), note = $('.news-note', f), email = input.value.trim(), label = btn.textContent;
  if (!email || !input.checkValidity()) { note.textContent = 'Enter an email address like name@example.com.'; input.setAttribute('aria-invalid', 'true'); input.focus(); return; }
  input.removeAttribute('aria-invalid'); btn.disabled = true; btn.textContent = 'Sending…';
  try {
    await sendEmail({ subject: 'New newsletter subscriber, Avora Brands', email, Page: location.pathname });
    f.reset(); btn.textContent = 'Joined'; note.textContent = `Thanks, ${email} is on the list.`;
  } catch (_) {
    btn.disabled = false; btn.textContent = label;
    note.innerHTML = `That didn’t go through. Try again, or <a href="${wa('Hi Avora! Please add me to your monthly tips list: ' + email)}" target="_blank" rel="noopener">join on WhatsApp</a>.`;
  }
}));

/* ============================================================
   Small behaviours
   ============================================================ */
/* Email links open the mail app; also offer Gmail and copy for people without one */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="mailto:"]'); if (!a) return;
  const url = new URL(a.href), to = decodeURIComponent(url.pathname), subj = url.searchParams.get('subject') || '', body = url.searchParams.get('body') || '';
  let t = $('.mail-toast');
  if (!t) { t = document.createElement('div'); t.className = 'mail-toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.innerHTML = `<span>No mail app opened?</span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}${subj ? '&su=' + encodeURIComponent(subj) : ''}${body ? '&body=' + encodeURIComponent(body) : ''}" target="_blank" rel="noopener">Open Gmail</a><button type="button" data-copy>Copy address</button><button type="button" data-close>Close</button>`;
  $('[data-copy]', t).onclick = ev => navigator.clipboard?.writeText(to).then(() => { ev.target.textContent = 'Copied'; });
  $('[data-close]', t).onclick = () => t.classList.remove('show');
  t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 12000);
});

/* The floating WhatsApp button steps aside for the closing section and footer */
(() => {
  const fab = $('.fab'); if (!fab) return;
  const seen = new Set();
  const io = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)); update(); }, { threshold: .15 });
  const update = () => fab.classList.toggle('is-away', seen.size > 0 || (innerWidth < 760 && scrollY < 400));
  addEventListener('scroll', update, { passive: true }); update();
  $$('.cta-band, .site-footer').forEach(x => io.observe(x));
})();

/* Entrance reveal */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: .05 });
window.watchReveals = (root = document) => $$('.reveal,.reveal-scale', root).forEach(el => io.observe(el));
watchReveals();

/* Lightbox: openLightbox([src...], index, label) */
window.openLightbox = (list, start, label) => {
  const from = document.activeElement, dlg = document.createElement('dialog');
  dlg.className = 'lb'; dlg.setAttribute('aria-label', `${label} images`);
  dlg.innerHTML = `<button type="button" class="lb-x" aria-label="Close">${I.x}</button>${list.length > 1 ? `<button type="button" class="lb-prev" aria-label="Previous image">${I.left}</button><button type="button" class="lb-next" aria-label="Next image">${I.arrow}</button>` : ''}<div class="lb-img"></div><div class="lb-count" aria-live="polite"></div>`;
  document.body.appendChild(dlg);
  let cur = 0, x = null;
  const show = n => { cur = (n + list.length) % list.length; $('.lb-img', dlg).innerHTML = pic(list[cur], { alt: `${label}, image ${cur + 1}`, sizes: '92vw', eager: true }); $('.lb-count', dlg).textContent = `${cur + 1} of ${list.length}`; };
  show(start); trapTab(dlg); dlg.showModal(); $('.lb-x', dlg).focus(); document.documentElement.style.overflow = 'hidden';
  dlg.addEventListener('click', e => { const b = e.target.closest('button'); if (e.target === dlg || b?.classList.contains('lb-x')) dlg.close(); else if (b?.classList.contains('lb-next')) show(cur + 1); else if (b?.classList.contains('lb-prev')) show(cur - 1); });
  dlg.addEventListener('keydown', e => { if (e.key === 'ArrowRight') show(cur + 1); else if (e.key === 'ArrowLeft') show(cur - 1); });
  dlg.addEventListener('touchstart', e => { x = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener('touchend', e => { if (x === null) return; const d = e.changedTouches[0].clientX - x; x = null; if (Math.abs(d) > 40) show(cur + (d < 0 ? 1 : -1)); });
  dlg.addEventListener('close', () => { document.documentElement.style.overflow = ''; dlg.remove(); from?.focus(); });
};

/* Missing image: neutral block instead of a broken icon */
const markMissing = i => { i.classList.add('img-missing'); i.removeAttribute('srcset'); i.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='; };
document.addEventListener('error', e => { const t = e.target; if (t.tagName === 'IMG' && !t.classList.contains('img-missing')) markMissing(t); }, true);

/* Page metadata for data-driven pages (case studies, articles) */
window.setMeta = ({ title, description, path, image, jsonLd }) => {
  const set = (sel, attr, v) => { const el = $(sel); if (el) el.setAttribute(attr, v); };
  const url = `${SITE.url}/${path}`, abs = image ? `${SITE.url}/${decodeURI(image)}` : '';
  document.title = title;
  set('meta[name=description]', 'content', description);
  set('link[rel=canonical]', 'href', url);
  [['og:title', title], ['og:description', description], ['og:url', url]].forEach(([k, v]) => set(`meta[property="${k}"]`, 'content', v));
  [['twitter:title', title], ['twitter:description', description]].forEach(([k, v]) => set(`meta[name="${k}"]`, 'content', v));
  if (abs) { set('meta[property="og:image"]', 'content', abs); set('meta[name="twitter:image"]', 'content', abs); }
  if (jsonLd) { const s = document.createElement('script'); s.type = 'application/ld+json'; s.textContent = JSON.stringify({ '@context': 'https://schema.org', ...jsonLd }); document.head.appendChild(s); }
};
