
/*
  PETAL & POETRY — FLOWER SHOP & HAMPERS

  Ganti nomor demo dengan nomor WhatsApp toko.
  Format: 6281234567890 (tanpa +, spasi, atau tanda strip).
*/

const WHATSAPP_NUMBER = "6281234567890";

const products = [
  {
    id: 1,
    name: "Blush Rose Bouquet",
    category: "bouquet",
    categoryLabel: "Bouquet",
    price: 185000,
    tag: "BEST SELLER",
    description: "Buket mawar pink dengan wrapping lembut nan romantis.",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "Sweet Tulip Bouquet",
    category: "bouquet",
    categoryLabel: "Bouquet",
    price: 225000,
    tag: "LOVELY PICK",
    description: "Rangkaian tulip cantik untuk momen yang berkesan.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "Classic Red Roses",
    category: "bouquet",
    categoryLabel: "Bouquet",
    price: 250000,
    tag: "",
    description: "Mawar merah klasik untuk menyampaikan rasa sayang.",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "Pastel Garden Box",
    category: "flowerbox",
    categoryLabel: "Flower Box",
    price: 295000,
    tag: "PREMIUM",
    description: "Flower box bernuansa pastel yang elegan dan manis.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name: "Mini Daisy Bouquet",
    category: "bouquet",
    categoryLabel: "Bouquet",
    price: 125000,
    tag: "GIFTABLE",
    description: "Buket daisy sederhana untuk hadiah penuh perhatian.",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    name: "Birthday Gift Hamper",
    category: "hampers",
    categoryLabel: "Hampers",
    price: 275000,
    tag: "GIFT SET",
    description: "Paket hadiah ulang tahun dengan tampilan premium.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    name: "Self-Care Hamper",
    category: "hampers",
    categoryLabel: "Hampers",
    price: 325000,
    tag: "SPECIAL",
    description: "Hampers pilihan untuk memanjakan orang tersayang.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    name: "Romantic Flower Box",
    category: "flowerbox",
    categoryLabel: "Flower Box",
    price: 350000,
    tag: "SIGNATURE",
    description: "Rangkaian premium untuk anniversary dan momen romantis.",
    image: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&w=700&q=80"
  }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resultsCount = document.getElementById("resultsCount");
const emptyResults = document.getElementById("emptyResults");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const toast = document.getElementById("toast");

let selectedCategory = "all";
let cart = {};
let toastTimeout;

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value).replace(/\u00a0/g, " ");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  let filtered = products.filter(product => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.categoryLabel.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  const sortMode = sortSelect.value;

  if (sortMode === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortMode === "high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortMode === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, "id"));
  } else {
    filtered.sort((a, b) => a.id - b.id);
  }

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x700/f2e7df/526c56?text=Flower+%26+Gift';"
        >
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
      </div>
      <div class="product-info">
        <div class="product-category">${product.categoryLabel}</div>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom">
          <span class="product-price">${formatRupiah(product.price)}</span>
          <button class="add-button" type="button" data-add="${product.id}" aria-label="Tambah ${product.name} ke keranjang">+</button>
        </div>
      </div>
    </article>
  `).join("");

  resultsCount.textContent = `Menampilkan ${filtered.length} dari ${products.length} pilihan hadiah`;
  emptyResults.hidden = filtered.length !== 0;
  productGrid.hidden = filtered.length === 0;
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  cart[productId] = (cart[productId] || 0) + 1;
  renderCart();
  showToast(`${product.name} ditambahkan ke keranjang ♡`);
}

function changeQuantity(productId, change) {
  if (!cart[productId]) return;

  cart[productId] += change;

  if (cart[productId] <= 0) {
    delete cart[productId];
  }

  renderCart();
}

function removeFromCart(productId) {
  delete cart[productId];
  renderCart();
  showToast("Produk dihapus dari keranjang.");
}

function renderCart() {
  const entries = Object.entries(cart);
  const totalItems = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const totalPrice = entries.reduce((sum, [id, quantity]) => {
    const product = products.find(item => item.id === Number(id));
    return sum + (product ? product.price * quantity : 0);
  }, 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = formatRupiah(totalPrice);

  if (entries.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <span>❀</span>
        <p>Your basket is waiting.</p>
        <small>Add something lovely to get started.</small>
      </div>`;
    return;
  }

  cartItems.innerHTML = entries.map(([id, quantity]) => {
    const product = products.find(item => item.id === Number(id));
    if (!product) return "";

    return `
      <div class="cart-row">
        <div>
          <div class="cart-product-name">${product.name}</div>
          <span class="cart-product-price">${formatRupiah(product.price * quantity)}</span>
          <button class="remove-item" type="button" data-remove="${product.id}">Hapus</button>
        </div>
        <div class="quantity-controls">
          <button type="button" data-change="${product.id}" data-delta="-1" aria-label="Kurangi jumlah">−</button>
          <span>${quantity}</span>
          <button type="button" data-change="${product.id}" data-delta="1" aria-label="Tambah jumlah">+</button>
        </div>
      </div>`;
  }).join("");
}

// Satu event handler untuk tombol produk dan keranjang.
document.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const changeButton = event.target.closest("[data-change]");
  const removeButton = event.target.closest("[data-remove]");

  if (addButton) {
    addToCart(Number(addButton.dataset.add));
  }

  if (changeButton) {
    changeQuantity(
      Number(changeButton.dataset.change),
      Number(changeButton.dataset.delta)
    );
  }

  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
  }
});

// Filter kategori.
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.filter;

    document.querySelectorAll(".filter").forEach(filter => {
      filter.classList.toggle("active", filter === button);
    });

    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

document.getElementById("resetSearch").addEventListener("click", () => {
  selectedCategory = "all";
  searchInput.value = "";
  sortSelect.value = "featured";

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === "all");
  });

  renderProducts();
});

document.getElementById("clearCart").addEventListener("click", () => {
  cart = {};
  renderCart();
  showToast("Keranjang sudah dikosongkan.");
});

// Checkout: susun ringkasan pesanan dan kirim ke WhatsApp.
document.getElementById("checkoutButton").addEventListener("click", () => {
  const entries = Object.entries(cart);

  if (entries.length === 0) {
    showToast("Keranjang masih kosong. Pilih hadiah favoritmu dulu ya!");
    return;
  }

  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!number || number === "6281234567890") {
    showToast("Ganti nomor WhatsApp demo di script.js sebelum checkout.");
    return;
  }

  const orderLines = entries.map(([id, quantity]) => {
    const product = products.find(item => item.id === Number(id));
    return product
      ? `• ${product.name} x${quantity} — ${formatRupiah(product.price * quantity)}`
      : "";
  }).filter(Boolean);

  const total = entries.reduce((sum, [id, quantity]) => {
    const product = products.find(item => item.id === Number(id));
    return sum + (product ? product.price * quantity : 0);
  }, 0);

  const message = [
    "Halo Petal & Poetry! 🌷",
    "",
    "Saya ingin memesan produk berikut:",
    "",
    ...orderLines,
    "",
    `Estimasi total: ${formatRupiah(total)}`,
    "",
    "Mohon konfirmasi ketersediaan produk, biaya pengiriman, dan cara pembayarannya.",
    "",
    "Terima kasih ♡"
  ].join("\n");

  const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
});

// Menu untuk perangkat mobile.
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Render awal — produk langsung muncul ketika halaman dibuka.
renderProducts();
renderCart();
