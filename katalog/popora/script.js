
/* ===================================
   POPORA — DIGITAL CATALOG
   Edit pengaturan dan produk di sini
=================================== */

const CONFIG = {
  brandName: "POPORA",

  // GANTI dengan nomor WhatsApp bisnismu.
  // Gunakan kode negara 62, tanpa tanda + atau angka 0 di depan.
  whatsapp: "6281234567890",

  currency: "Rp"
};

const PRODUCTS = [
  {
    id: 1,
    name: "Strawberry Cloud",
    category: "Minuman",
    price: 22000,
    label: "BEST SELLER",
    description: "Minuman creamy dengan rasa stroberi yang segar, lembut, dan manisnya pas.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 2,
    name: "Matcha Mood",
    category: "Minuman",
    price: 25000,
    label: "FAN FAVORITE",
    description: "Matcha dengan karakter rasa khas dan tekstur creamy untuk menemani harimu.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 3,
    name: "Iced Coffee Club",
    category: "Minuman",
    price: 18000,
    label: "MUST TRY",
    description: "Kopi dingin yang nikmat dengan perpaduan rasa kopi dan susu yang seimbang.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 4,
    name: "Berry Cheesecake",
    category: "Dessert",
    price: 32000,
    label: "SIGNATURE",
    description: "Cheesecake lembut dengan sentuhan buah beri yang segar dan menggoda.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 5,
    name: "Choco Brownie",
    category: "Dessert",
    price: 20000,
    label: "CHOCOLATE LOVE",
    description: "Brownies cokelat dengan tekstur padat, lembut, dan rasa cokelat yang kaya.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 6,
    name: "Butter Croissant",
    category: "Bakery",
    price: 16000,
    label: "FRESH DAILY",
    description: "Croissant berlapis yang renyah di luar dan lembut di bagian dalam.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85"
  }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const productCount = document.getElementById("productCount");
const emptyState = document.getElementById("emptyState");

const productDialog = document.getElementById("productDialog");
const dialogImage = document.getElementById("dialogImage");
const dialogCategory = document.getElementById("dialogCategory");
const dialogName = document.getElementById("dialogName");
const dialogDescription = document.getElementById("dialogDescription");
const dialogPrice = document.getElementById("dialogPrice");
const dialogOrder = document.getElementById("dialogOrder");

let activeCategory = "Semua";

function formatPrice(price) {
  return CONFIG.currency + " " + price.toLocaleString("id-ID");
}

function getWhatsAppLink(message) {
  const phone = CONFIG.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "Semua" ||
      product.category === activeCategory;

    const searchableText =
      `${product.name} ${product.category} ${product.description}`.toLowerCase();

    const matchesSearch = searchableText.includes(keyword);

    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = filteredProducts.map((product) => `
    <article class="product-card" data-product-id="${product.id}" tabindex="0" role="button" aria-label="Lihat detail ${product.name}">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x700/ffc8d2/272321?text=POPORA';"
        >
        <span class="product-tag">${product.label}</span>
        <button class="quick-view" type="button" data-view="${product.id}" aria-label="Lihat ${product.name}">↗</button>
      </div>
      <div class="product-info">
        <div>
          <h3>${product.name}</h3>
          <p>${product.category} · Made with love</p>
        </div>
        <span class="product-price">${formatPrice(product.price)}</span>
      </div>
    </article>
  `).join("");

  productCount.textContent = String(filteredProducts.length).padStart(2, "0");
  emptyState.hidden = filteredProducts.length !== 0;
}

function openProduct(productId) {
  const product = PRODUCTS.find((item) => item.id === Number(productId));

  if (!product) return;

  dialogImage.src = product.image;
  dialogImage.alt = product.name;
  dialogCategory.textContent = product.category;
  dialogName.textContent = product.name;
  dialogDescription.textContent = product.description;
  dialogPrice.textContent = formatPrice(product.price);

  const message =
    `Halo ${CONFIG.brandName}, saya tertarik memesan ${product.name} (${formatPrice(product.price)}). Mohon informasi lebih lanjut ya.`;

  dialogOrder.href = getWhatsAppLink(message);

  if (typeof productDialog.showModal === "function") {
    productDialog.showModal();
  }
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  categoryFilters.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle("active", filter === button);
  });

  renderProducts();
});

searchInput.addEventListener("input", renderProducts);

productGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-product-id]");

  if (!card) return;

  openProduct(card.dataset.productId);
});

productGrid.addEventListener("keydown", (event) => {
  if (event.target.closest("button")) return;

  if (event.key === "Enter" || event.key === " ") {
    const card = event.target.closest("[data-product-id]");

    if (!card) return;

    event.preventDefault();
    openProduct(card.dataset.productId);
  }
});

document.getElementById("dialogClose").addEventListener("click", () => {
  productDialog.close();
});

productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) {
    productDialog.close();
  }
});

document.getElementById("contactButton").href = getWhatsAppLink(
  `Halo ${CONFIG.brandName}, saya ingin bertanya tentang produk yang tersedia.`
);

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
