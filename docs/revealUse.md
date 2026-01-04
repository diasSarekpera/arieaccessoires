Parfait. Là on fait un **système propre, réutilisable, pro**, que tu pourras utiliser **sur tout ton site**, sans dépendance, sans libs, sans bidouille.

Je te donne :

1. **le CSS universel**
2. **le JS universel (IntersectionObserver)**
3. **comment l’utiliser concrètement** (cartes, sections, directions)
4. **bonnes pratiques** (pour éviter bugs & perf)

---

# 1️⃣ CSS — animations réutilisables (UNE FOIS POUR TOUT LE SITE)

👉 À mettre dans ton CSS global (ex: `animations.css` ou à la fin de ton main CSS)

```css
/* =========================
   ANIMATIONS – REUSABLE
   ========================= */

/* état initial commun */
[data-animate] {
  opacity: 0;
  will-change: transform, opacity;
}

/* ----- directions ----- */

/* bas → haut */
.animate-up {
  transform: translateY(40px);
}

/* gauche → droite */
.animate-left {
  transform: translateX(-40px);
}

/* droite → gauche */
.animate-right {
  transform: translateX(40px);
}

/* fade simple */
.animate-fade {
  transform: none;
}

/* ----- état visible ----- */
.animate-in {
  opacity: 1;
  transform: translate(0, 0);
  transition:
    opacity 0.8s cubic-bezier(.4,0,.2,1),
    transform 0.8s cubic-bezier(.4,0,.2,1);
}

/* =========================
   STAGGER (délai automatique)
   ========================= */
[data-stagger] {
  transition-delay: calc(var(--stagger-index) * var(--stagger-delay, 120ms));
}
```

---

# 2️⃣ JS — moteur d’animation viewport (clean & réutilisable)

👉 À mettre dans un fichier `reveal.js` ou dans un `<script>` global

```js
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
```

---

# 3️⃣ COMMENT L’UTILISER (EXEMPLES CONCRETS)

---

## ✅ A. Animation d’une SECTION entière (bas → haut)

```html
<section class="categories" data-animate class="animate-up">
```

➡️ Résultat :
La section entre **du bas vers le haut** quand elle arrive dans le viewport.

---

## ✅ B. Animation stagger des CARTES (grille catégories)

### HTML

```html
<article class="category-card animate-up"
         data-animate
         data-stagger="1">
</article>

<article class="category-card animate-up"
         data-animate
         data-stagger="2">
</article>

<article class="category-card animate-up"
         data-animate
         data-stagger="3">
</article>

<article class="category-card animate-up"
         data-animate
         data-stagger="4">
</article>
```

➡️ Résultat :
Les cartes apparaissent **une par une**, avec un délai fluide.

---

## ✅ C. Section qui entre de gauche → droite

```html
<section class="about animate-left" data-animate>
```

---

## ✅ D. Section qui entre de droite → gauche

```html
<section class="hero-stats animate-right" data-animate>
```

---

## ✅ E. Animation simple (fade only)

```html
<div class="section-header animate-fade" data-animate>
```

---

# 4️⃣ ASTUCE PRO — Stagger AUTOMATIQUE (optionnel)

Si tu veux éviter de mettre `data-stagger="1"`, `2`, `3` à la main :

### JS (option bonus)

```js
document.querySelectorAll("[data-stagger-group]").forEach(group => {
  [...group.children].forEach((child, index) => {
    child.setAttribute("data-animate", "");
    child.setAttribute("data-stagger", index);
  });
});
```

### HTML

```html
<div class="categories-grid" data-stagger-group>
  <article class="category-card animate-up"></article>
  <article class="category-card animate-up"></article>
  <article class="category-card animate-up"></article>
</div>
```

🔥 Ultra clean.

---

# 5️⃣ BONNES PRATIQUES (IMPORTANT)

✔ utilise **transform + opacity seulement** (GPU safe)
✔ observe puis `unobserve()` (perf)
✔ pas d’animation sur `top`, `left`, `filter`
✔ pas de JS au scroll → IntersectionObserver only

---

## 🏁 RÉSUMÉ

Tu as maintenant :

* un **système universel**
* propre
* moderne
* réutilisable
* scalable sur tout ton site

👉 Si tu veux, prochaine étape possible :

* version **mobile-specific**
* easing premium personnalisé
* animation inverse au scroll
* ou coupling avec ton hero

Dis-moi.
