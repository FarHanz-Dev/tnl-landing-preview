/* Runs before first paint (kept as a tiny external file so the CSP can stay script-src 'self'). */
try {
  /* 1. Stored light/dark choice, applied now so there is no flash. */
  var t = localStorage.getItem('tnl-theme');
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
} catch (e) {}
try {
  /* 2. The visitor just switched language: hold the page until main.js has put them back at the
        same scroll position (a CSS failsafe shows it after 1.5s if that never happens). */
  var s = sessionStorage.getItem('tnl-lang-scroll');
  if (s && Date.now() - JSON.parse(s).at < 15000) document.documentElement.classList.add('lang-restore');
} catch (e) {}
