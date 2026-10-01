/* Light/dark toggle. Follows the system setting until the visitor chooses, then
   remembers the choice. Every storage access is guarded, so the toggle still
   works where storage is blocked; it just won't be remembered. */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  if (!btn) return;
  var icon = document.getElementById('themeIcon');
  var label = document.getElementById('themeLabel');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function effective() {
    var set = root.getAttribute('data-theme');
    if (set === 'light' || set === 'dark') return set;
    return mq.matches ? 'dark' : 'light';
  }
  function paint() {
    var t = effective();
    icon.textContent = t === 'dark' ? '☾' : '☀';
    label.textContent = t;
    btn.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' theme');
  }
  btn.addEventListener('click', function () {
    var next = effective() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paint();
  });
  if (mq.addEventListener) mq.addEventListener('change', paint);
  paint();
})();
