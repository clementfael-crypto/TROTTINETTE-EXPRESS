/* =====================================================
TROTTINETTES EXPRESS
Configuration et fonctionnement du site
===================================================== */

/* ================= COORDONNÉES ================= */

const WHATSAPP_NUMBER = “33753012436”;
const CONTACT_EMAIL = “achattrottinette@gmail.com”;

/* ================= PRODUITS ================= */

const products = [

{
    id: 1,
    name: "KuKirin G2",
    brand: "KuKirin",
    price: 250,
    badge: "POPULAIRE",
    icon: "🛴",
    description: "Une trottinette sportive pensée pour les déplacements urbains.",
    specs: [
        ["Moteur", "800 W"],
        ["Autonomie", "Jusqu'à 55 km"],
        ["Vitesse", "45 km/h"],
        ["Catégorie", "Sport"]
    ]
},
{
    id: 2,
    name: "KuKirin G2 Pro",
    brand: "KuKirin",
    price: 350,
    badge: "BEST-SELLER",
    icon: "🛴",
    description: "Un modèle polyvalent combinant confort, puissance et autonomie.",
    specs: [
        ["Moteur", "800 W"],
        ["Autonomie", "Jusqu'à 55 km"],
        ["Vitesse", "45 km/h"],
        ["Catégorie", "Performance"]
    ]
},
{
    id: 3,
    name: "KuKirin G2 Max",
    brand: "KuKirin",
    price: 400,
    badge: "PERFORMANCE",
    icon: "🛴",
    description: "Une version plus puissante pour les amateurs de sensations.",
    specs: [
        ["Moteur", "1000 W"],
        ["Autonomie", "Grande autonomie"],
        ["Vitesse", "Performance"],
        ["Catégorie", "Sport"]
    ]
},
{
    id: 4,
    name: "KuKirin G3",
    brand: "KuKirin",
    price: 450,
    badge: "NOUVEAUTÉ",
    icon: "🛴",
    description: "Un modèle moderne au style agressif et aux performances élevées.",
    specs: [
        ["Moteur", "1200 W"],
        ["Autonomie", "Grande autonomie"],
        ["Vitesse", "Performance"],
        ["Catégorie", "Premium"]
    ]
},
{
    id: 5,
    name: "KuKirin G3 Pro",
    brand: "KuKirin",
    price: 500,
    badge: "PREMIUM",
    icon: "🛴",
    description: "Une trottinette haut de gamme destinée aux passionnés.",
    specs: [
        ["Moteur", "Puissant"],
        ["Autonomie", "Grande autonomie"],
        ["Vitesse", "Haute performance"],
        ["Catégorie", "Premium"]
    ]
},
{
    id: 6,
    name: "KuKirin G4",
    brand: "KuKirin",
    price: 550,
    badge: "PREMIUM",
    icon: "🛴",
    description: "Un modèle puissant au design sportif et moderne.",
    specs: [
        ["Moteur", "Puissant"],
        ["Autonomie", "Grande autonomie"],
        ["Vitesse", "Haute performance"],
        ["Catégorie", "Premium"]
    ]
},
{
    id: 7,
    name: "AUSOM L1",
    brand: "AUSOM",
    price: 0,
    badge: "AUSOM",
    icon: "🛴",
    description: "Trottinette électrique AUSOM au design moderne.",
    specs: [
        ["Moteur", "À définir"],
        ["Autonomie", "À définir"],
        ["Vitesse", "À définir"],
        ["Catégorie", "AUSOM"]
    ]
},
{
    id: 8,
    name: "AUSOM L2",
    brand: "AUSOM",
    price: 0,
    badge: "AUSOM",
    icon: "🛴",
    description: "Un modèle AUSOM pensé pour combiner style et mobilité.",
    specs: [
        ["Moteur", "À définir"],
        ["Autonomie", "À définir"],
        ["Vitesse", "À définir"],
        ["Catégorie", "AUSOM"]
    ]
},
{
    id: 9,
    name: "AUSOM L2 Max",
    brand: "AUSOM",
    price: 0,
    badge: "PREMIUM",
    icon: "🛴",
    description: "Une version premium de la gamme AUSOM.",
    specs: [
        ["Moteur", "À définir"],
        ["Autonomie", "À définir"],
        ["Vitesse", "À définir"],
        ["Catégorie", "Premium"]
    ]
},
{
    id: 10,
    name: "Dualtron Thunder 2",
    brand: "Dualtron",
    price: 0,
    badge: "ICONIQUE",
    icon: "🛴",
    description: "Une trottinette hautes performances de la gamme Dualtron.",
    specs: [
        ["Moteur", "À définir"],
        ["Autonomie", "À définir"],
        ["Vitesse", "À définir"],
        ["Catégorie", "Ultra Premium"]
    ]
}

];

/* ================= VARIABLES ================= */

let currentFilter = “all”;
let cart = [];

const productsGrid = document.getElementById(“productsGrid”);
const noProducts = document.getElementById(“noProducts”);
const cartCount = document.getElementById(“cartCount”);
const cartItems = document.getElementById(“cartItems”);
const cartTotal = document.getElementById(“cartTotal”);

/* ================= AFFICHAGE ================= */

function displayProducts(list = products) {

productsGrid.innerHTML = "";
if (list.length === 0) {
    noProducts.style.display = "block";
    return;
}
noProducts.style.display = "none";
list.forEach(product => {
    const price =
        product.price > 0
            ? `${product.price} €`
            : "Prix sur demande";
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
        <div class="product-image">
            <span>${product.icon}</span>
            <span class="product-badge">
                ${product.badge}
            </span>
            <span class="product-brand">
                ${product.brand}
            </span>
        </div>
        <div class="product-info">
            <h3>
                ${product.name}
            </h3>
            <p class="product-description">
                ${product.description}
            </p>
            <div class="product-specs">
                ${product.specs.map(spec => `
                    <span class="spec">
                        ${spec[0]} : ${spec[1]}
                    </span>
                `).join("")}
            </div>
            <div class="product-bottom">
                <div class="product-price">
                    ${price}
                </div>
                <div class="product-actions">
                    <button
                        class="product-action"
                        onclick="showProduct(${product.id})"
                    >
                        Détails
                    </button>
                    <button
                        class="product-action primary"
                        onclick="addToCart(${product.id})"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
    `;
    productsGrid.appendChild(card);
});

}

/* ================= FILTRES ================= */

document.querySelectorAll(”.filter”).forEach(button => {

button.addEventListener("click", () => {
    document
        .querySelectorAll(".filter")
        .forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    applyFilters();
});

});

function applyFilters() {

const search =
    document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();
let result = [...products];
if (currentFilter !== "all") {
    result = result.filter(
        product => product.brand === currentFilter
    );
}
if (search) {
    result = result.filter(product =>
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
    );
}
displayProducts(result);

}

/* ================= TRI ================= */

document
.getElementById(“sortProducts”)
.addEventListener(“change”, function () {

    let result = [...products];
    if (currentFilter !== "all") {
        result = result.filter(
            product => product.brand === currentFilter
        );
    }
    if (this.value === "price-low") {
        result.sort(
            (a,b) => a.price - b.price
        );
    }
    if (this.value === "price-high") {
        result.sort(
            (a,b) => b.price - a.price
        );
    }
    if (this.value === "name") {
        result.sort(
            (a,b) => a.name.localeCompare(b.name)
        );
    }
    displayProducts(result);
});

/* ================= RECHERCHE ================= */

document
.getElementById(“searchInput”)
.addEventListener(“input”, applyFilters);

/* ================= MENU MOBILE ================= */

const menuButton =
document.getElementById(“menuButton”);

const mobileMenu =
document.getElementById(“mobileMenu”);

menuButton.addEventListener(“click”, () => {

mobileMenu.classList.toggle("active");

});

document
.querySelectorAll(”.mobile-menu a”)
.forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

/* ================= SEARCH PANEL ================= */

const searchPanel =
document.getElementById(“searchPanel”);

document
.getElementById(“openSearch”)
.addEventListener(“click”, () => {

    searchPanel.classList.add("active");
    setTimeout(() => {
        document
            .getElementById("searchInput")
            .focus();
    },200);
});

document
.getElementById(“closeSearch”)
.addEventListener(“click”, () => {

    searchPanel.classList.remove("active");
});

/* ================= MODAL ================= */

const productModal =
document.getElementById(“productModal”);

const modalContent =
document.getElementById(“modalContent”);

function showProduct(id) {

const product =
    products.find(item => item.id === id);
if (!product) return;
const price =
    product.price > 0
        ? `${product.price} €`
        : "Prix sur demande";
modalContent.innerHTML = `
    <div class="modal-product">
        <div class="modal-product-image">
            <span>
                ${product.icon}
            </span>
        </div>
        <div>
            <span class="eyebrow">
                ${product.brand}
            </span>
            <h2>
                ${product.name}
            </h2>
            <p>
                ${product.description}
            </p>
            <div class="modal-spec-list">
                ${product.specs.map(spec => `
                    <div>
                        <span>
                            ${spec[0]}
                        </span>
                        <strong>
                            ${spec[1]}
                        </strong>
                    </div>
                `).join("")}
            </div>
            <h3 style="color:#f5c542;margin-bottom:20px;">
                ${price}
            </h3>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
                <button
                    class="btn btn-primary"
                    onclick="addToCart(${product.id});closeProductModal();"
                >
                    Ajouter au panier
                </button>
                <button
                    class="btn btn-secondary"
                    onclick="orderWhatsApp(${product.id})"
                >
                    💬 Commander
                </button>
            </div>
        </div>
    </div>
`;
productModal.classList.add("active");
document.body.classList.add("no-scroll");

}

function closeProductModal() {

productModal.classList.remove("active");
document.body.classList.remove("no-scroll");

}

document
.getElementById(“closeModal”)
.addEventListener(“click”, closeProductModal);

productModal.addEventListener(“click”, event => {

if (event.target === productModal) {
    closeProductModal();
}

});

/* ================= PANIER ================= */

function addToCart(id) {

const product =
    products.find(item => item.id === id);
if (!product) return;
cart.push(product);
updateCart();
openCartPanel();

}

function removeFromCart(index) {

cart.splice(index,1);
updateCart();

}

function updateCart() {

cartCount.textContent =
    cart.length;
if (cart.length === 0) {
    cartItems.innerHTML = `
        <p class="empty-cart">
            Votre panier est vide.
        </p>
    `;
    cartTotal.textContent = "0 €";
    return;
}
let total = 0;
cartItems.innerHTML = "";
cart.forEach((product,index) => {
    total += product.price || 0;
    const item =
        document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
        <div>
            <h4>
                ${product.name}
            </h4>
            <p>
                ${
                    product.price > 0
                        ? product.price + " €"
                        : "Prix sur demande"
                }
            </p>
        </div>
        <button
            class="remove-cart"
            onclick="removeFromCart(${index})"
        >
            ✕
        </button>
    `;
    cartItems.appendChild(item);
});
cartTotal.textContent =
    `${total} €`;

}

/* ================= PANIER PANEL ================= */

const cartPanel =
document.getElementById(“cartPanel”);

const overlay =
document.getElementById(“overlay”);

function openCartPanel() {

cartPanel.classList.add("active");
overlay.classList.add("active");

}

function closeCartPanel() {

cartPanel.classList.remove("active");
overlay.classList.remove("active");

}

document
.getElementById(“openCart”)
.addEventListener(“click”, openCartPanel);

document
.getElementById(“closeCart”)
.addEventListener(“click”, closeCartPanel);

overlay.addEventListener(
“click”,
closeCartPanel
);

/* ================= WHATSAPP ================= */

function orderWhatsApp(id) {

const product =
    products.find(item => item.id === id);
if (!product) return;
const price =
    product.price > 0
        ? product.price + " €"
        : "Prix sur demande";
const text =
    `Bonjour Trottinettes Express 👋\n\n` +
    `Je suis intéressé(e) par : ${product.name}\n` +
    `Marque : ${product.brand}\n` +
    `Prix : ${price}\n\n` +
    `Pouvez-vous me donner plus d'informations ?`;
window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
    "_blank"
);

}

document
.querySelectorAll(”.whatsapp-link”)
.forEach(link => {

    link.addEventListener("click", event => {
        event.preventDefault();
        const text =
            "Bonjour Trottinettes Express 👋\n\n" +
            "Je souhaite avoir des informations sur vos trottinettes.";
        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
            "_blank"
        );
    });
});

/* ================= PANIER → WHATSAPP ================= */

document
.querySelector(”.whatsapp-cart”)
.addEventListener(“click”, () => {

    if (cart.length === 0) {
        alert("Votre panier est vide.");
        return;
    }
    let text =
        "Bonjour Trottinettes Express 👋\n\n" +
        "Je souhaite commander :\n\n";
    cart.forEach(product => {
        text +=
            `• ${product.name} (${product.brand})\n`;
    });
    text +=
        "\nMerci de me confirmer la disponibilité et les modalités.";
    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
        "_blank"
    );
});

/* ================= FORMULAIRE EMAIL ================= */

document
.getElementById(“contactForm”)
.addEventListener(“submit”, event => {

    event.preventDefault();
    const name =
        document.getElementById("contactName").value;
    const email =
        document.getElementById("contactEmail").value;
    const subject =
        document.getElementById("contactSubject").value ||
        "Demande de contact";
    const message =
        document.getElementById("contactMessage").value;
    const body =
        `Bonjour Trottinettes Express,%0A%0A` +
        `Nom : ${encodeURIComponent(name)}%0A` +
        `Email : ${encodeURIComponent(email)}%0A%0A` +
        `${encodeURIComponent(message)}`;
    window.location.href =
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
});

/* ================= MARQUES ================= */

document
.querySelectorAll(”.brand-card”)
.forEach(card => {

    card.addEventListener("click", () => {
        const brand =
            card.dataset.brand;
        currentFilter = brand;
        document
            .querySelectorAll(".filter")
            .forEach(filter => {
                filter.classList.toggle(
                    "active",
                    filter.dataset.filter === brand
                );
            });
        document
            .getElementById("catalogue")
            .scrollIntoView({
                behavior: "smooth"
            });
        applyFilters();
    });
});

/* ================= DÉMARRAGE ================= */

displayProducts();

updateCart();
