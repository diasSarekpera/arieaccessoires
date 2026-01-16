const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');

function openMenu() {
  mobileMenu.classList.add('active');
  burgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('active');
  burgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

burgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = burgerBtn.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMenu() : openMenu();
});

/* Clic hors menu */
document.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('active') &&
    !mobileMenu.contains(e.target) &&
    !burgerBtn.contains(e.target)
  ) {
    closeMenu();
  }
});

/* Clic sur un lien */
document.querySelectorAll('.mobile-nav-list a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
