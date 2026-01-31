// ======================================================
// MENU MOBILE — JS PREMIUM
// ======================================================

const burgerBtn = document.querySelector('.burger-btn');
const overlay = document.querySelector('.menu-overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-list li');

// ============================
// OUVRIR / FERMER MENU
// ============================
function openMenu() {
  document.body.classList.add('menu-open');
  burgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';

  // animation stagger des liens
  mobileLinks.forEach((li, index) => {
    li.style.transitionDelay = `${index * 0.1}s`;
  });
}

function closeMenu() {
  document.body.classList.remove('menu-open');
  burgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// ============================
// Toggle burger
// ============================
burgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
});

// ============================
// Overlay → fermer
// ============================
overlay.addEventListener('click', closeMenu);

// ============================
// Clic sur lien → fermer
// ============================
mobileLinks.forEach(li => {
  li.addEventListener('click', closeMenu);
});

// ============================
// FERMER MENU AU SCROLL
// ============================
window.addEventListener('scroll', () => {
  if (document.body.classList.contains('menu-open')) {
    closeMenu();
  }
});

// ============================
// ACCESSIBILITÉ CLAVIER
// ============================
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && document.body.classList.contains('menu-open')) {
    closeMenu();
  }
});

// ============================
// SWIPE MOBILE — GLISSER POUR FERMER
// ============================
let touchStartX = 0;
let touchEndX = 0;

mobileMenu.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

mobileMenu.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) { // swipe gauche
    closeMenu();
  }
});
