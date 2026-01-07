/* =========================
   VIEWPORT REVEAL SYSTEM
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // appliquer l'animation
        el.classList.add("animate-in");

        // stopper l'observation (perf)
        observer.unobserve(el);
      });
    },
    {
      threshold: 0.2
    }
  );

  animatedElements.forEach((el, index) => {
    // gestion du stagger
    if (el.hasAttribute("data-stagger")) {
      el.style.setProperty("--stagger-index", el.dataset.stagger);
    }

    observer.observe(el);
  });
});





