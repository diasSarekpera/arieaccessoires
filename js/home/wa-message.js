document.querySelectorAll('.product-whatsapp').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // empêche le lien #

        const card = button.closest('.product-card');

        const name = card.dataset.name;
        const image = card.dataset.image;
        const price = card.dataset.price;

        const message = `Bonjour Arie's accessoire
Je suis intéressé par le produit :
${name}
Prix : ${price}
Image : ${image}`;

        const phone = "22954959597";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    });
});
