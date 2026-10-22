
// ==========================================
// MAISON — DIGITAL CATALOG
// Edit bagian CONFIG dan PRODUCTS untuk
// menyesuaikan website dengan pelanggan.
// ==========================================

const CONFIG = {
  brandName: "MAISON",

  // Ganti dengan nomor WhatsApp pemilik bisnis.
  // Format: kode negara + nomor, tanpa +, spasi,
  // tanda kurung, atau tanda hubung.
  whatsappNumber: "6281234567890",

  currency: "IDR",
  locale: "id-ID"
};

// Ganti produk, harga, deskripsi, dan foto
// sesuai katalog milik pelanggan.
const PRODUCTS = [
  {
    id: 1,
    name: "Signature Latte",
    category: "Coffee",
    price: 28000,
    tag: "BESTSELLER",
    description: "A silky espresso blend with smooth milk and a delicate finish.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 2,
    name: "Classic Americano",
    category: "Coffee",
    price: 22000,
    tag: "CLASSIC",
    description: "Bold espresso meets hot water for a clean, balanced cup.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 3,
    name: "Matcha Cloud",
    category: "Non-Coffee",
    price: 32000,
    tag: "FAVOURITE",
    description: "Earthy Japanese-style matcha with a creamy, velvety texture.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 4,
    name: "Vanilla Milk",
    category: "Non-Coffee",
    price: 26000,
    tag: "ALL TIME",
    description: "A comforting blend of fresh milk and gentle vanilla notes.",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 5,
    name: "Butter Croissant",
    category: "Pastry",
    price: 24000,
    tag: "FRESH DAILY",
    description: "Golden, flaky layers with a rich buttery aroma.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 6,
    name: "Classic Cheesecake",
    category: "Pastry",
    price: 35000,
    tag: "HOUSE SPECIAL",
    description: "A smooth, creamy cheesecake with a delicate biscuit base.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85"
  }
];

// ==========================================
// ELEMENTS
// ==========================================

const productGrid = document.getElementById("productGrid");
const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

const productDialog = document.getElementById("productDialog");
const dialogContent = document.getElementById("dialogContent");
const dialogClose = document.getElementById("dialogClose");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

let activeCategory = "All";

// ==========================================
// HELPERS
// ==========================================

function formatPrice(price) {
  return new Intl.NumberFormat(CONFIG.locale, {
    style: "currency",
    currency: CONFIG.currency,
    maximumFractionDigits: 0
  }).format(price);
}

function getWhatsAppLink(message) {
  const number = CONFIG.whatsappNumber.replace(/\D/g, "");

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getProduct(id) {
  return PRODUCTS.find(product => product.id === Number(id));
}

// ==========================================
// PRODUCT CARDS
// ==========================================

function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const searchableText = [
      product.name,
      product.category,
      product.description,
      product.tag
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(keyword);

    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = filteredProducts.map(product => `
    <article class="product-card">
      <div
        class="product-image-wrap"
        role="button"
        tabindex="0"
        data-detail="${product.id}"
        aria-label="Lihat detail ${escapeHTML(product.name)}"
      >
        <img
          class="product-image"
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
        >
        <span class="product-tag">${escapeHTML(product.tag)}</span>
        <button
          class="quick-view"
          type="button"
          data-detail="${product.id}"
        >
          QUICK VIEW ↗
        </button>
      </div>

      <div class="product-info">
        <p class="product-category">
          ${escapeHTML(product.category)}
        </p>

        <div class="product-title-row">
          <h3 class="product-title">
            ${escapeHTML(product.name)}
          </h3>
          <span class="product-price">
            ${formatPrice(product.price)}
          </span>
        </div>

        <p class="product-description">
          ${escapeHTML(product.description)}
        </p>

        <a
          class="product-order"
          href="${getWhatsAppLink(
            `Halo ${CONFIG.brandName}, saya ingin bertanya tentang ${product.name} seharga ${formatPrice(product.price)}.`
          )}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ASK ABOUT THIS ITEM ↗
        </a>
      </div>
    </article>
  `).join("");

  resultCount.textContent =
    `${filteredProducts.length} item${filteredProducts.length === 1 ? "" : "s"} in the collection`;

  emptyState.hidden = filteredProducts.length !== 0;
}

// ==========================================
// CATEGORY FILTER
// ==========================================

categoryList.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  categoryList.querySelectorAll(".category-btn").forEach(item => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });

  renderProducts();
});

searchInput.addEventListener("input", renderProducts);

// ==========================================
// PRODUCT DETAIL DIALOG
// ==========================================

function openProductDetail(id) {
  const product = getProduct(id);

  if (!product) return;

  dialogContent.innerHTML = `
    <img
      class="dialog-image"
      src="${escapeHTML(product.image)}"
      alt="${escapeHTML(product.name)}"
    >

    <div class="dialog-copy">
      <p class="eyebrow">
        ${escapeHTML(product.category)} / ${escapeHTML(product.tag)}
      </p>

      <h2 id="dialogName">${escapeHTML(product.name)}</h2>

      <p class="dialog-price">${formatPrice(product.price)}</p>

      <p>${escapeHTML(product.description)}</p>

      <a
        class="button button-dark"
        href="${getWhatsAppLink(
          `Halo ${CONFIG.brandName}, saya tertarik dengan ${product.name} (${formatPrice(product.price)}). Apakah produk ini tersedia?`
        )}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ask via WhatsApp ↗
      </a>
    </div>
  `;

  if (typeof productDialog.showModal === "function") {
    productDialog.showModal();
  }
}

productGrid.addEventListener("click", event => {
  const detailButton = event.target.closest("[data-detail]");

  if (detailButton) {
    openProductDetail(detailButton.dataset.detail);
  }
});

productGrid.addEventListener("keydown", event => {
  if (
    event.target.matches(".product-image-wrap") &&
    (event.key === "Enter" || event.key === " ")
  ) {
    event.preventDefault();
    openProductDetail(event.target.dataset.detail);
  }
});

dialogClose.addEventListener("click", () => {
  productDialog.close();
});

productDialog.addEventListener("click", event => {
  if (event.target === productDialog) {
    productDialog.close();
  }
});

// ==========================================
// MOBILE NAVIGATION
// ==========================================

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup navigasi" : "Buka navigasi"
  );

  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
    menuToggle.textContent = "☰";
  });
});

// ==========================================
// CONTACT & FOOTER
// ==========================================

document.getElementById("contactButton").href = getWhatsAppLink(
  `Halo ${CONFIG.brandName}, saya ingin mengetahui lebih lanjut tentang produk Anda.`
);

document.getElementById("year").textContent = new Date().getFullYear();

// ==========================================
// INITIALIZE
// ==========================================

renderProducts();
