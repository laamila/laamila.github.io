
const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp restoran

const dishes = [
  {
    id: 1, name: "Wagyu Tenderloin",
    category: "Main Course", price: 285000, tag: "CHEF'S SIGNATURE",
    description: "Premium tenderloin, silky potato purée, seasonal vegetables, and rich red wine jus.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2, name: "Pan-Seared Salmon",
    category: "Main Course", price: 195000, tag: "SIGNATURE",
    description: "Golden-crusted salmon with lemon butter sauce, asparagus, and fresh garden herbs.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3, name: "Truffle Mushroom Soup",
    category: "Starters", price: 85000, tag: "HOUSE FAVORITE",
    description: "Velvety wild mushroom soup finished with aromatic truffle oil and toasted brioche.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4, name: "Burrata Heirloom",
    category: "Starters", price: 98000, tag: "FRESH & LIGHT",
    description: "Creamy burrata, ripe tomatoes, basil leaves, and a delicate aged balsamic dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5, name: "Lobster Linguine",
    category: "Main Course", price: 245000, tag: "CHEF'S SIGNATURE",
    description: "Hand-finished linguine with tender lobster, cherry tomatoes, and fragrant garlic butter.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6, name: "Herb Roasted Chicken",
    category: "Main Course", price: 165000, tag: "CLASSIC",
    description: "Slow-roasted chicken with fragrant garden herbs, creamy mash, and natural jus.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 7, name: "Chocolate Fondant",
    category: "Dessert", price: 75000, tag: "MUST TRY",
    description: "Warm dark chocolate cake with a molten center, vanilla ice cream, and cocoa dust.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 8, name: "Crème Brûlée",
    category: "Dessert", price: 68000, tag: "FRENCH CLASSIC",
    description: "Silky vanilla custard beneath a delicate, caramelized sugar crust.",
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 9, name: "Noiré Signature Mocktail",
    category: "Beverages", price: 58000, tag: "HOUSE SIGNATURE",
    description: "A refreshing blend of citrus, botanicals, and sparkling water, beautifully finished.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 10, name: "Artisan Coffee",
    category: "Beverages", price: 42000, tag: "FRESHLY BREWED",
    description: "Aromatic specialty coffee, carefully extracted for a smooth and memorable finish.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
  }
];

const $ = (id) => document.getElementById(id);

let activeCategory = "All";
let activeDishId = null;
let cart = {};

function rupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(amount);
}

function getDish(id) {
  return dishes.find(dish => dish.id === Number(id));
}

function getFilteredDishes() {
  const keyword = $("searchInput").value.trim().toLowerCase();

  let result = dishes.filter(dish => {
    const matchesCategory =
      activeCategory === "All" || dish.category === activeCategory;

    const matchesSearch =
      dish.name.toLowerCase().includes(keyword) ||
      dish.category.toLowerCase().includes(keyword) ||
      dish.description.toLowerCase().includes(keyword);

    return matchesCategory && matchesSearch;
  });

  const sort = $("sortSelect").value;
  if (sort === "low") result.sort((a, b) => a.price - b.price);
  if (sort === "high") result.sort((a, b) => b.price - a.price);

  return result;
}

function renderMenu() {
  const items = getFilteredDishes();

  $("productCount").textContent =
    `${items.length} curated selection${items.length === 1 ? "" : "s"}`;

  $("emptyState").hidden = items.length !== 0;

  $("productGrid").innerHTML = items.map(dish => `
    <article class="menu-card">
      <div class="dish-image-wrap">
        <img class="dish-image"
          src="${dish.image}"
          alt="${dish.name}"
          loading="lazy">
        <span class="dish-tag">${dish.tag}</span>
        <button class="dish-add" data-add="${dish.id}"
          aria-label="Tambah ${dish.name} ke pesanan">+</button>
      </div>
      <div class="dish-info">
        <span class="dish-category">${dish.category}</span>
        <div class="dish-title-row">
          <h3 class="dish-title">${dish.name}</h3>
          <span class="dish-price">${rupiah(dish.price)}</span>
        </div>
        <p class="dish-description">${dish.description}</p>
        <button class="dish-details" data-details="${dish.id}">
          VIEW DETAILS ↗
        </button>
      </div>
    </article>
  `).join("");
}

function updateCartCount() {
  const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  $("cartCount").textContent = count;
}

function addToCart(id) {
  const dish = getDish(id);
  if (!dish) return;

  cart[dish.id] = (cart[dish.id] || 0) + 1;
  updateCartCount();
  renderCart();
}

function changeQuantity(id, amount) {
  if (!cart[id]) return;

  cart[id] += amount;
  if (cart[id] <= 0) delete cart[id];

  updateCartCount();
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  updateCartCount();
  renderCart();
}

function cartTotal() {
  return Object.entries(cart).reduce((total, [id, quantity]) => {
    const dish = getDish(id);
    return total + (dish ? dish.price * quantity : 0);
  }, 0);
}

function renderCart() {
  const entries = Object.entries(cart);

  if (entries.length === 0) {
    $("bagItems").innerHTML = `
      <div class="bag-empty">
        <p>Your selection is currently empty.</p>
        <p>Explore our menu and choose your favorites.</p>
      </div>
    `;
  } else {
    $("bagItems").innerHTML = entries.map(([id, quantity]) => {
      const dish = getDish(id);
      if (!dish) return "";

      return `
        <div class="bag-item">
          <img src="${dish.image}" alt="${dish.name}">
          <div>
            <h3>${dish.name}</h3>
            <p>${rupiah(dish.price)} / item</p>
            <div class="quantity-controls">
              <button data-minus="${id}" aria-label="Kurangi jumlah">−</button>
              <span>${quantity}</span>
              <button data-plus="${id}" aria-label="Tambah jumlah">+</button>
            </div>
          </div>
          <div class="bag-item-end">
            <strong>${rupiah(dish.price * quantity)}</strong>
            <button class="remove-item" data-remove="${id}">Remove</button>
          </div>
        </div>
      `;
    }).join("");
  }

  $("bagTotal").textContent = rupiah(cartTotal());
  $("checkoutButton").disabled = entries.length === 0;
  $("checkoutButton").style.opacity = entries.length === 0 ? ".45" : "1";
}

function openDetails(id) {
  const dish = getDish(id);
  if (!dish) return;

  activeDishId = dish.id;
  $("dialogImage").src = dish.image;
  $("dialogImage").alt = dish.name;
  $("dialogCategory").textContent = dish.category;
  $("dialogName").textContent = dish.name;
  $("dialogDescription").textContent = dish.description;
  $("dialogPrice").textContent = rupiah(dish.price);

  $("productDialog").showModal();
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function reservationMessage() {
  return [
    "Halo NOIRÉ, saya ingin melakukan reservasi meja.",
    "",
    "Nama:",
    "Tanggal reservasi:",
    "Jam:",
    "Jumlah tamu:",
    "Permintaan khusus (jika ada):",
    "",
    "Mohon informasi ketersediaan meja. Terima kasih."
  ].join("\n");
}

function checkoutMessage() {
  const lines = Object.entries(cart).map(([id, quantity]) => {
    const dish = getDish(id);
    return `${dish.name} x${quantity} — ${rupiah(dish.price * quantity)}`;
  });

  return [
    "Halo NOIRÉ, saya ingin menanyakan pesanan berikut:",
    "",
    ...lines,
    "",
    `Estimasi total: ${rupiah(cartTotal())}`,
    "",
    "Nama:",
    "Metode layanan: Dine-in / Takeaway",
    "Waktu yang diinginkan:",
    "",
    "Mohon konfirmasi ketersediaan dan total akhir. Terima kasih."
  ].join("\n");
}

// Filter kategori
$("categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".filter").forEach(filter => {
    filter.classList.toggle("active", filter === button);
  });

  renderMenu();
});

// Pencarian dan pengurutan
$("searchInput").addEventListener("input", renderMenu);
$("sortSelect").addEventListener("change", renderMenu);

// Klik kartu menu
$("productGrid").addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const detailButton = event.target.closest("[data-details]");

  if (addButton) addToCart(addButton.dataset.add);
  if (detailButton) openDetails(detailButton.dataset.details);
});

// Tambahkan menu dari popup
$("addToBagButton").addEventListener("click", () => {
  if (activeDishId !== null) addToCart(activeDishId);
  closeDialog($("productDialog"));
});

// Popup detail
$("dialogClose").addEventListener("click", () => closeDialog($("productDialog")));
$("productDialog").addEventListener("click", event => {
  if (event.target === $("productDialog")) closeDialog($("productDialog"));
});

// Keranjang
$("cartToggle").addEventListener("click", () => {
  renderCart();
  $("bagDialog").showModal();
});

$("bagClose").addEventListener("click", () => closeDialog($("bagDialog")));

$("bagItems").addEventListener("click", event => {
  const minus = event.target.closest("[data-minus]");
  const plus = event.target.closest("[data-plus]");
  const remove = event.target.closest("[data-remove]");

  if (minus) changeQuantity(minus.dataset.minus, -1);
  if (plus) changeQuantity(plus.dataset.plus, 1);
  if (remove) removeFromCart(remove.dataset.remove);
});

$("checkoutButton").addEventListener("click", () => {
  if (Object.keys(cart).length === 0) return;
  openWhatsApp(checkoutMessage());
});

// Reservasi
$("reserveButton").addEventListener("click", () => {
  openWhatsApp(reservationMessage());
});

$("bannerReserve").addEventListener("click", () => {
  openWhatsApp(reservationMessage());
});

// Reset filter
$("clearFilters").addEventListener("click", () => {
  activeCategory = "All";
  $("searchInput").value = "";
  $("sortSelect").value = "featured";

  document.querySelectorAll(".filter").forEach(filter => {
    filter.classList.toggle("active", filter.dataset.category === "All");
  });

  renderMenu();
});

// Navigasi mobile
$("menuToggle").addEventListener("click", () => {
  const nav = $("navigation");
  nav.classList.toggle("open");
  $("menuToggle").textContent = nav.classList.contains("open") ? "×" : "☰";
});

$("navigation").querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    $("navigation").classList.remove("open");
    $("menuToggle").textContent = "☰";
  });
});

// Tutup popup dengan tombol Escape akan ditangani oleh dialog bawaan browser
$("year").textContent = new Date().getFullYear();

renderMenu();
renderCart();
