/* ======================================================
   BOUTON RETOUR EN HAUT
====================================================== */

const backToTop = document.querySelector('.back-to-top');
const showAfter = 300; // px de scroll avant affichage

window.addEventListener('scroll', () => {
  if (window.scrollY > showAfter) {
    backToTop.classList.add('is-visible');
  } else {
    backToTop.classList.remove('is-visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
