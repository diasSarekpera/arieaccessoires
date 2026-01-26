// ========== SELECTEURS ==========
const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-list a');

// ========== FONCTIONS ==========
function openMenu() {
  mobileMenu.classList.add('active');
  burgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; // empêche le scroll derrière le menu
}

function closeMenu() {
  mobileMenu.classList.remove('active');
  burgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = ''; // réactive le scroll
}

// ========== ÉVÉNEMENT BURGER ==========
burgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = burgerBtn.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMenu() : openMenu();
});

// ========== FERMER AU CLIC HORS MENU ==========
document.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('active') &&
    !mobileMenu.contains(e.target) &&
    !burgerBtn.contains(e.target)
  ) {
    closeMenu();
  }
});

// ========== FERMER AU CLIC SUR UN LIEN ==========
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ========== ANIMATION STAGGER ITEMS ==========
mobileLinks.forEach((link, index) => {
  link.style.animationDelay = `${index * 0.08 + 0.05}s`;
});
