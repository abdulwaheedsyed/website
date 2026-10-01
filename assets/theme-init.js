/* Apply a saved theme choice before first paint, so a visitor who picked a theme
   never sees a flash of the other one. Loaded as a blocking script in <head>,
   ahead of the stylesheet. */
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
  } catch (e) { /* storage blocked: the page follows the system setting */ }
})();
