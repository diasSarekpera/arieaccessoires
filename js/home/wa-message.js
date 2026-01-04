document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const name = card.dataset.name;
        const image = card.dataset.image;

        const message = `Bonjour Arie's accessoire, je suis intéressé le produit "${name}".\nImage: ${image}`;
        const phone = "22954959597";

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    });
});











