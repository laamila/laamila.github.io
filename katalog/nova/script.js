
/* ===================================
   NOVA MARKET — DIGITAL CATALOG
   Edit brand, nomor WA, dan produk
=================================== */

const CONFIG = {
  brandName: "NOVA",
  whatsapp: "6281234567890", // Ganti dengan nomor WhatsApp pelanggan
  currency: "Rp"
};

const PRODUCTS = [
  {
    id: 1, name: "Everyday Bottle", category: "Lifestyle",
    price: 89000, label: "BEST SELLER",
    description: "Botol minum minimalis untuk menemani aktivitas sehari-hari.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 2, name: "Daily Tote Bag", category: "Fashion",
    price: 75000, label: "POPULAR",
    description: "Tas simpel dan serbaguna untuk aktivitas harian.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 3, name: "Hydra Face Serum", category: "Skincare",
    price: 125000, label: "NEW",
    description: "Serum perawatan wajah dengan tampilan kemasan modern.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 4, name: "Classic Sunglasses", category: "Accessories",
    price: 99000, label: "ESSENTIAL",
    description: "Kacamata bergaya klasik untuk melengkapi penampilan.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 5, name: "Soft Touch Cream", category: "Skincare",
    price: 89000, label: "FAVORITE",
    description: "Krim perawatan kulit dengan tekstur lembut.",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 6, name: "Minimal Wallet", category: "Accessories",
    price: 65000, label: "EVERYDAY",
    description: "Dompet ringkas untuk menyimpan barang esensial.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 7, name: "Ceramic Cup", category: "Lifestyle",
    price: 55000, label: "GOOD PICK",
    description: "Cangkir keramik untuk momen santai di rumah.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 8, name: "Daily Sneakers", category: "Fashion",
    price: 249000, label: "TRENDING",
    description: "Sepatu kasual yang mudah dipadukan dengan berbagai gaya.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 9, name: "Glow Facial Oil", category: "Skincare",
    price: 115000, label: "NOVA PICK",
    description: "Minyak wajah untuk melengkapi rutinitas perawatan kulit.",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 10, name: "Weekend Cap", category: "Fashion",
    price: 79000, label: "CASUAL",
    description: "Topi kasual dengan tampilan simpel dan mudah dipakai.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 11, name: "Studio Backpack", category: "Accessories",
    price: 189000, label: "FUNCTIONAL",
    description: "Ransel praktis untuk bekerja, kuliah, atau bepergian.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 12, name: "Daily Cleanser", category: "Skincare",
    price: 79000, label: "DAILY CARE",
    description: "Pembersih wajah untuk rutinitas perawatan harian.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 13, name: "Travel Tumbler", category: "Lifestyle",
    price: 109000, label: "ON THE GO",
    description: "Tumbler praktis untuk menemani perjalananmu.",
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 14, name: "Everyday Watch", category: "Accessories",
    price: 199000, label: "TIMELESS",
    description: "Jam tangan bergaya minimalis untuk berbagai kesempatan.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 15, name: "Linen Shirt", category: "Fashion",
    price: 159000, label: "EASY STYLE",
    description: "Kemeja bergaya santai untuk tampilan rapi sehari-hari.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 16, name: "Body Lotion", category: "Skincare",
    price: 69000, label: "SOFT SKIN",
    description: "Lotion tubuh untuk menemani perawatan kulit harian.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 17, name: "Desk Organizer", category: "Lifestyle",
    price: 59000, label: "WORKSPACE",
    description: "Organizer meja untuk membuat ruang kerja lebih tertata.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 18, name: "Everyday Earrings", category: "Accessories",
    price: 49000, label: "LITTLE DETAIL",
    description: "Anting simpel untuk sentuhan akhir pada penampilan.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 19, name: "Classic Hoodie", category: "Fashion",
    price: 179000, label: "COMFORT",
    description: "Hoodie kasual untuk gaya santai dan nyaman.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 20, name: "Scented Candle", category: "Lifestyle",
    price: 85000, label: "SLOW MOMENT",
    description: "Lilin aromatik untuk melengkapi suasana santai di rumah.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=85"
  }
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("categoryFilters");
const productCount = document.getElementById("productCount");
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
  return CONFIG.currency + " " + price.toLocaleString("id-ID");
}

function whatsappLink(message) {
  const phone = CONFIG.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();

  const visible = PRODUCTS.filter(product => {
    const categoryMatch =
      activeCategory === "Semua" ||
      product.category === activeCategory;

    const text = [
      product.name,
      product.category,
      product.description,
      product.label
    ].join(" ").toLowerCase();

    return categoryMatch && text.includes(keyword);
  });

  grid.innerHTML = visible.map(product => `
    <article class="product-card"
      data-product-id="${product.id}"
      tabindex="0"
      role="button"
      aria-label="Lihat detail ${product.name}">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x700/e7f0ef/172a46?text=NOVA';">
        <span class="product-tag">${product.label}</span>
        <button class="quick-view" type="button"
          data-view="${product.id}"
          aria-label="Lihat ${product.name}">↗</button>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <span class="product-price">${formatPrice(product.price)}</span>
      </div>
    </article>
  `).join("");

  productCount.textContent = String(visible.length).padStart(2, "0");
  emptyState.hidden = visible.length > 0;
}

function showProduct(id) {
  const product = PRODUCTS.find(item => item.id === Number(id));
  if (!product) return;

  dialogImage.src = product.image;
  dialogImage.alt = product.name;
  dialogCategory.textContent = product.category;
  dialogName.textContent = product.name;
  dialogDescription.textContent = product.description;
  dialogPrice.textContent = formatPrice(product.price);

  dialogOrder.href = whatsappLink(
    `Halo ${CONFIG.brandName}, saya tertarik dengan produk ${product.name} seharga ${formatPrice(product.price)}. Apakah masih tersedia?`
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
  if (card) showProduct(card.dataset.productId);
});

grid.addEventListener("keydown", event => {
  if (event.target.closest("button")) return;

  if (event.key === "Enter" || event.key === " ") {
    const card = event.target.closest("[data-product-id]");
    if (!card) return;

    event.preventDefault();
    showProduct(card.dataset.productId);
  }
});

document.getElementById("dialogClose").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

document.getElementById("contactButton").href = whatsappLink(
  `Halo ${CONFIG.brandName}, saya ingin bertanya tentang produk yang tersedia.`
);

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.setAttribute("aria-expanded", "false");

menuToggle.addEventListener("click", () => {
  const opened = navigation.classList.toggle("open");
  menuToggle.textContent = opened ? "×" : "☰";
  menuToggle.setAttribute("aria-expanded", String(opened));
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
