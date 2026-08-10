/* =========================================
TROTTINETTES EXPRESS
========================================= */

const WHATSAPP = “33753012436”;

/* =========================================
PRODUITS KUKIRIN
========================================= */

const kukirin = [

{
    name: "KuKirin G2",
    price: "250 €",
    description: "Trottinette électrique sportive et polyvalente.",
    specs: ["800 W", "Jusqu'à 45 km/h", "Grande autonomie"]
},
{
    name: "KuKirin G2 Pro",
    price: "350 €",
    description: "Modèle performant pour les déplacements urbains.",
    specs: ["800 W", "Performance", "Autonomie élevée"]
},
{
    name: "KuKirin G2 Max",
    price: "400 €",
    description: "Version plus puissante de la gamme G2.",
    specs: ["1000 W", "Grande autonomie", "Sport"]
},
{
    name: "KuKirin G2 Master",
    price: "380 €",
    description: "Modèle hautes performances de la série G2.",
    specs: ["Performance", "Double moteur", "Premium"]
},
{
    name: "KuKirin G3",
    price: "450 €",
    description: "Trottinette sportive au design moderne.",
    specs: ["Puissance élevée", "Sport", "Grande autonomie"]
},
{
    name: "KuKirin G3 Pro",
    price: "500 €",
    description: "Version premium de la gamme G3.",
    specs: ["Haute performance", "Premium", "Sport"]
},
{
    name: "KuKirin G4",
    price: "550 €",
    description: "Trottinette puissante destinée aux passionnés.",
    specs: ["Haute puissance", "Performance", "Premium"]
},
{
    name: "KuKirin G4 Max",
    price: "Prix sur demande",
    description: "Modèle hautes performances de la gamme KuKirin.",
    specs: ["Très haute performance", "Grande autonomie", "Premium"]
},
{
    name: "KuKirin A1",
    price: "Prix sur demande",
    description: "Modèle pratique et polyvalent.",
    specs: ["Urbain", "Confort", "Électrique"]
},
{
    name: "KuKirin S1 Max",
    price: "Prix sur demande",
    description: "Modèle compact pour les déplacements quotidiens.",
    specs: ["Compact", "Urbain", "Pratique"]
},
{
    name: "KuKirin X1",
    price: "Prix sur demande",
    description: "Modèle au format original et sportif.",
    specs: ["Sport", "Design", "Performance"]
}

];

/* =========================================
PRODUITS AUSOM
========================================= */

const ausom = [

{
    name: "AUSOM L1",
    price: "Prix sur demande",
    description: "Trottinette AUSOM moderne et polyvalente.",
    specs: ["Performance", "Confort", "Design"]
},
{
    name: "AUSOM L2",
    price: "Prix sur demande",
    description: "Modèle de la gamme L2.",
    specs: ["Performance", "Autonomie", "Design"]
},
{
    name: "AUSOM L2 Max",
    price: "Prix sur demande",
    description: "Version Max de la gamme L2.",
    specs: ["Performance", "Grande autonomie", "Premium"]
},
{
    name: "AUSOM Gosoul 2",
    price: "Prix sur demande",
    description: "Trottinette de la gamme Gosoul.",
    specs: ["Performance", "Confort", "Design"]
},
{
    name: "AUSOM Gosoul 2 Pro",
    price: "Prix sur demande",
    description: "Version Pro de la Gosoul 2.",
    specs: ["Performance", "Premium", "Autonomie"]
},
{
    name: "AUSOM K20",
    price: "Prix sur demande",
    description: "Modèle performant de la gamme AUSOM.",
    specs: ["Performance", "Design", "Autonomie"]
},
{
    name: "AUSOM K20 Pro",
    price: "Prix sur demande",
    description: "Version Pro de la gamme K20.",
    specs: ["Premium", "Performance", "Autonomie"]
}

];

/* =========================================
PRODUITS DUALTRON
========================================= */

const dualtron = [

{
    name: "Dualtron Thunder 2",
    price: "Prix sur demande",
    description: "Modèle emblématique hautes performances.",
    specs: ["Ultra performance", "Premium", "Grande autonomie"]
},
{
    name: "Dualtron Victor",
    price: "Prix sur demande",
    description: "Modèle sportif de la gamme Dualtron.",
    specs: ["Performance", "Sport", "Premium"]
},
{
    name: "Dualtron Victor Limited",
    price: "Prix sur demande",
    description: "Version Limited haut de gamme.",
    specs: ["Premium", "Performance", "Limited"]
},
{
    name: "Dualtron Togo",
    price: "Prix sur demande",
    description: "Modèle compact et moderne.",
    specs: ["Urbain", "Confort", "Design"]
},
{
    name: "Dualtron Togo Limited",
    price: "Prix sur demande",
    description: "Version Limited du Togo.",
    specs: ["Premium", "Urbain", "Limited"]
},
{
    name: "Dualtron Dolphin",
    price: "Prix sur demande",
    description: "Modèle moderne de la gamme Dualtron.",
    specs: ["Performance", "Design", "Urbain"]
},
{
    name: "Dualtron Thunder 3",
    price: "Prix sur demande",
    description: "Nouvelle génération de la série Thunder.",
    specs: ["Très haute performance", "Premium", "Sport"]
}

];

/* =========================================
CRÉATION DES CARTES
========================================= */

function createProductCard(product, brand) {

const card = document.createElement("article");
card.className = "product-card";
card.innerHTML = `
    <div class="product-photo">
        <span class="product-badge">
            ${brand}
        </span>
    </div>
    <div class="product-info">
        <span class="product-brand">
            ${brand}
        </span>
        <h3>
            ${product.name}
        </h3>
        <p class="product-description">
            ${product.description}
        </p>
        <div class="product-specs">
            ${product.specs.map(spec => `
                <span>${spec}</span>
            `).join("")}
        </div>
        <div class="product-bottom">
            <strong class="price">
                ${product.price}
            </strong>
            <button
                class="buy-button"
                onclick="buyOnWhatsApp('${product.name}', '${brand}', '${product.price}')"
            >
                ACHETER
            </button>
        </div>
    </div>
`;
return card;

}

/* =========================================
AFFICHAGE
========================================= */

function displayProducts(list, containerId, brand) {

const container =
    document.getElementById(containerId);
if (!container) return;
container.innerHTML = "";
list.forEach(product => {
    container.appendChild(
        createProductCard(product, brand)
    );
});

}

displayProducts(
kukirin,
“kukirinProducts”,
“KuKirin”
);

displayProducts(
ausom,
“ausomProducts”,
“AUSOM”
);

displayProducts(
dualtron,
“dualtronProducts”,
“Dualtron”
);

/* =========================================
ACHAT WHATSAPP
========================================= */

function buyOnWhatsApp(name, brand, price) {

const message =
    `Bonjour Trottinettes Express 👋\n\n` +
    `Je souhaite acheter la trottinette suivante :\n\n` +
    `🛴 Modèle : ${name}\n` +
    `🏷️ Marque : ${brand}\n` +
    `💰 Prix affiché : ${price}\n\n` +
    `Pouvez-vous me confirmer sa disponibilité et les modalités de commande ?`;
const url =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
window.open(url, "_blank");

}

/* =========================================
MENU MOBILE
========================================= */

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

/* =========================================
ANIMATION DES CARTES
========================================= */

const observer =
new IntersectionObserver(
entries => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.08
    }
);

document
.querySelectorAll(”.product-card, .brand-card”)
.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity .6s ease, transform .6s ease";
    observer.observe(card);
});
