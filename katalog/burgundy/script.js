
/* ROUGE — PRODUCT CATALOG */

const CONFIG = {
  brandName: "ROUGE",
  whatsapp: "6281234567890" // Ganti dengan nomor WhatsApp tujuan
};

const PRODUCTS = [
  {
    id: 1,
    name: "Velvet Bloom Perfume",
    category: "Beauty",
    price: 159000,
    label: "BEST SELLER",
    description: "Parfum dengan karakter elegan untuk melengkapi momen spesial maupun aktivitas harian.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 2,
    name: "Rose Glow Serum",
    category: "Beauty",
    price: 125000,
    label: "ROUGE PICK",
    description: "Serum perawatan wajah untuk melengkapi rutinitas skincare harian.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 3,
    name: "Satin Evening Bag",
    category: "Fashion",
    price: 189000,
    label: "ELEGANT",
    description: "Tas bergaya feminin untuk acara formal, pesta, dan momen istimewa.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 4,
    name: "Golden Hour Earrings",
    category: "Accessories",
    price: 79000,
    label: "FAVORITE",
    description: "Aksesori dengan sentuhan elegan untuk mempermanis penampilan.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 5,
    name: "Silk Touch Scarf",
    category: "Fashion",
    price: 99000,
    label: "TIMELESS",
    description: "Scarf dengan tampilan anggun yang mudah dipadukan dengan berbagai outfit.",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 6,
    name: "Blush Compact",
    category: "Beauty",
    price: 89000,
    label: "NEW EDIT",
    description: "Produk makeup praktis untuk menciptakan tampilan segar sehari-hari.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 7,
    name: "Classic Gold Watch",
    category: "Accessories",
    price: 225000,
    label: "CLASSIC",
    description: "Jam tangan dengan desain klasik untuk gaya yang rapi dan berkelas.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 8,
    name: "Ceramic Aroma Candle",
    category: "Lifestyle",
    price: 95000,
    label: "SLOW LIVING",
    description: "Lilin aromatik untuk menghadirkan suasana nyaman dan santai di rumah.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 9,
    name: "Signature Tote",
    category: "Fashion",
    price: 139000,
    label: "EVERYDAY",
    description: "Tas serbaguna dengan tampilan simpel untuk menemani keseharian.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 10,
    name: "Rose Gold Jewelry Box",
    category: "Lifestyle",
    price: 119000,
    label: "GIFT IDEA",
    description: "Kotak penyimpanan aksesori untuk menjaga koleksi kecil tetap tertata.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=85"
  }
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("categoryFilters");
const count = document.getElementById("productCount");
const emptyState = document.getElementById("emptyState");

const dialog = document.getElementById("productDialog");
const dialogImage = document.getElementById("dialogImage");
const dialogCategory = document.getElementById("dialogCategory");
const dialogName = document.getElementById("dialogName");
const dialogDescription = document.getElementById("dialogDescription");
const dialogPrice = document.getElementById("dialogPrice");
const dialogOrder = document.getElementById("dialogOrder");

let activeCategory = "Semua";

function formatPrice(price) {
  return "Rp" + price.toLocaleString("id-ID");
}

function makeWhatsAppLink(message) {
  const phone = CONFIG.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filtered = PRODUCTS.filter(product => {
    const matchesCategory =
      activeCategory === "Semua" ||
      product.category === activeCategory;

    const searchableText = [
      product.name,
      product.category,
      product.description,
      product.label
    ].join(" ").toLowerCase();

    return matchesCategory && searchableText.includes(keyword);
  });

  grid.innerHTML = filtered.map(product => `
    <article
      class="product-card"
      data-product-id="${product.id}"
      tabindex="0"
      role="button"
      aria-label="Lihat detail ${product.name}">

      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x700/f7efe5/681f35?text=ROUGE';">

        <span class="product-tag">${product.label}</span>

        <button
          class="quick-view"
          type="button"
          data-view="${product.id}"
          aria-label="Lihat detail ${product.name}">↗</button>
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <span class="product-price">${formatPrice(product.price)}</span>
      </div>
    </article>
  `).join("");

  count.textContent = String(filtered.length).padStart(2, "0");
  emptyState.hidden = filtered.length > 0;
}

function openProduct(id) {
  const product = PRODUCTS.find(item => item.id === Number(id));
  if (!product) return;

  dialogImage.src = product.image;
  dialogImage.alt = product.name;
  dialogCategory.textContent = product.category;
  dialogName.textContent = product.name;
  dialogDescription.textContent = product.description;
  dialogPrice.textContent = formatPrice(product.price);

  dialogOrder.href = makeWhatsAppLink(
    `Halo ${CONFIG.brandName}, saya tertarik dengan ${product.name} seharga ${formatPrice(product.price)}. Apakah produk ini masih tersedia?`
  );

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  }
}

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  filters.querySelectorAll(".filter").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderProducts();
});

searchInput.addEventListener("input", renderProducts);

grid.addEventListener("click", event => {
  const card = event.target.closest("[data-product-id]");
  if (card) openProduct(card.dataset.productId);
});

grid.addEventListener("keydown", event => {
  if (event.target.closest("button")) return;

  if (event.key === "Enter" || event.key === " ") {
    const card = event.target.closest("[data-product-id]");
    if (!card) return;

    event.preventDefault();
    openProduct(card.dataset.productId);
  }
});

document.getElementById("dialogClose").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

document.getElementById("contactButton").href = makeWhatsAppLink(
  `Halo ${CONFIG.brandName}, saya ingin bertanya tentang koleksi produk yang tersedia.`
);

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.textContent = isOpen ? "×" : "☰";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
