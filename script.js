document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = menu.classList.contains('is-open');
    if (isOpen) { closeMenu(); } else { openMenu(); }
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && e.target !== toggle) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
});
