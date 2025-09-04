
(function(){
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-menu]');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
  });
})();
