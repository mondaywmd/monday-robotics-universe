// Explicit URLs keep the selected language across navigation, without redirects.
// Link destinations work without JavaScript; this enhancement also retains anchors.
(() => {
  const update = () => document.querySelectorAll('.language-switch a').forEach(link => {
    const url = new URL(link.href);
    url.hash = window.location.hash;
    link.href = url.href;
  });
  update();
  window.addEventListener('hashchange', update);
})();
