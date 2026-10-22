
/* ==========================================
   NOIRÉ FINE DINING — TERRACOTTA EDITION
   ========================================== */

// GANTI dengan nomor WhatsApp restoran.
// Gunakan kode negara 62, tanpa tanda + atau spasi.
const WHATSAPP_NUMBER = "6281234567890";

const dishes = [
  {
    id: 1,
    name: "Wagyu Tenderloin",
    category: "Main Course",
    price: 285000,
    tag: "BEST SELLER",
    description: "Premium tenderloin, silky potato purée, and seasonal vegetables.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    name: "Pan-Seared Salmon",
    category: "Main Course",
    price: 195000,
    tag: "NEW",
    description: "Golden-crusted salmon with lemon butter sauce and fresh herbs.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    name: "Truffle Mushroom Soup",
    category: "Starters",
    price: 85000,
    tag: "POPULAR",
    description: "Velvety wild mushroom soup finished with aromatic truffle oil.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    name: "Burrata Heirloom",
    category: "Starters",
    price: 98000,
    tag: "FRESH",
    description: "Creamy burrata, heirloom tomatoes, basil, and balsamic glaze.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    name: "Lobster Linguine",
    category: "Main Course",
    price: 245000,
    tag: "CHEF'S PICK",
    description: "Linguine, tender lobster, cherry tomatoes, and garlic butter.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    name: "Herb Roasted Chicken",
    category: "Main Course",
    price: 165000,
    tag: "CLASSIC",
    description: "Roasted chicken, garden herbs, creamy mash, and natural jus.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 7,
    name: "Chocolate Fondant",
    category: "Dessert",
    price: 75000,
    tag: "MUST TRY",
    description: "Warm chocolate cake with a molten center and vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 8,
    name: "Crème Brûlée",
    category: "Dessert",
    price: 68000,
    tag: "FRENCH CLASSIC",
    description: "Silky vanilla custard with a delicate caramelized sugar crust.",
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 9,
    name: "Noiré Signature Mocktail",
    category: "Beverages",
    price: 58000,
    tag: "SIGNATURE",
    description: "A refreshing citrus and botanical blend finished with sparkling water.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 10,
    name: "Artisan Coffee",
    category: "Beverages",
    price: 42000,
    tag: "FRESHLY BREWED",
    description: "Specialty coffee, carefully extracted for a smooth, rich finish.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
  }
];

const $ = id => document.getElementById(id);

let activeCategory = "All";
let activeDishId = null;
let cart = {};

// FORMAT HARGA
function rupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function getDish(id) {
  return dishes.find(dish => dish.id === Number(id));
}

// MENCARI DAN MENGURUTKAN MENU
function getFilteredDishes() {
  const keyword = $("searchInput").value.trim().toLowerCase();

  let result = dishes.filter(dish => {
    const matchesCategory =
      activeCategory === "All" ||
      dish.category === activeCategory;

    const searchableText = [
      dish.name,
      dish.category,
      dish.description,
      dish.tag
    ].join(" ").toLowerCase();

    return matchesCategory && searchableText.includes(keyword);
  });

  const sort = $("sortSelect").value;

  if (sort === "low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    result.sort((a, b) => b.price - a.price);
  } else if (sort === "az") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}

// MENAMPILKAN KARTU MENU
function renderMenu() {
  const items = getFilteredDishes();

  $("productCount").textContent =
    `${items.length} curated selection${items.length === 1 ? "" : "s"}`;

  $("emptyState").hidden = items.length > 0;

  $("productGrid").innerHTML = items.map(dish => `
    <article class="menu-card">
      <div class="dish-image-wrap">
        <img
          class="dish-image"
          src="${dish.image}"
          alt="${dish.name}"
          loading="lazy"
        >
        <span class="dish-tag">${dish.tag}</span>
        <button
          class="dish-add"
          data-add="${dish.id}"
          aria-label="Tambah ${dish.name} ke keranjang"
        >+</button>
      </div>

      <div class="dish-info">
        <span class="dish-category">${dish.category}</span>
        <h3 class="dish-title">${dish.name}</h3>
        <p class="dish-description">${dish.description}</p>

        <div class="dish-bottom">
          <span class="dish-price">${rupiah(dish.price)}</span>
          <button class="details-button" data-details="${dish.id}">
            VIEW DETAILS ↗
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// KERANJANG
function addToCart(id) {
  const dish = getDish(id);
  if (!dish) return;

  cart[dish.id] = (cart[dish.id] || 0) + 1;
  renderCart();
}

function changeQuantity(id, amount) {
  if (!cart[id]) return;

  cart[id] += amount;

  if (cart[id] <= 0) {
    delete cart[id];
  }

  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  renderCart();
}

function clearCart() {
  cart = {};
  renderCart();
}

function getCartCount() {
  return Object.values(cart).reduce((sum, quantity) => {
    return sum + quantity;
  }, 0);
}

function getCartTotal() {
  return Object.entries(cart).reduce((total, [id, quantity]) => {
    const dish = getDish(id);
    return total + (dish ? dish.price * quantity : 0);
  }, 0);
}

function renderCart() {
  const entries = Object.entries(cart);
  const count = getCartCount();

  $("cartCount").textContent = count;
  $("mobileCartCount").textContent = count;
  $("bagTotal").textContent = rupiah(getCartTotal());

  if (entries.length === 0) {
    $("bagItems").innerHTML = `
      <div class="cart-empty">
        <span>♧</span>
        <p>Your selection is empty.</p>
        <small>Add a dish to get started.</small>
      </div>
    `;
  } else {
    $("bagItems").innerHTML = entries.map(([id, quantity]) => {
      const dish = getDish(id);
      if (!dish) return "";

      return `
        <article class="cart-item">
          <img src="${dish.image}" alt="${dish.name}">

          <div>
            <h4 class="cart-item-name">${dish.name}</h4>
            <div class="cart-item-price">${rupiah(dish.price)}</div>

            <div class="quantity-controls">
              <button data-minus="${id}" aria-label="Kurangi jumlah">−</button>
              <span>${quantity}</span>
              <button data-plus="${id}" aria-label="Tambah jumlah">+</button>
            </div>
          </div>

          <div class="cart-item-end">
            <strong>${rupiah(dish.price * quantity)}</strong>
            <button
              class="remove-item"
              data-remove="${id}"
              aria-label="Hapus ${dish.name}"
            >×</button>
          </div>
        </article>
      `;
    }).join("");
  }

  $("checkoutButton").disabled = entries.length === 0;
}

// POPUP DETAIL MENU
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

// WHATSAPP
function openWhatsApp(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!number || number === "6281234567890") {
    alert(
      "Silakan ganti WHATSAPP_NUMBER di script.js dengan nomor WhatsApp restoran terlebih dahulu."
    );
    return;
  }

  const url =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

function createOrderMessage() {
  const lines = Object.entries(cart).map(([id, quantity]) => {
    const dish = getDish(id);
    return `${dish.name} x${quantity} = ${rupiah(dish.price * quantity)}`;
  });

  return [
    "Halo NOIRÉ, saya ingin memesan menu berikut:",
    "",
    ...lines,
    "",
    `Total sementara: ${rupiah(getCartTotal())}`,
    "",
    "Nama pelanggan:",
    "Layanan: Dine-in / Takeaway",
    "Waktu pesanan:",
    "",
    "Mohon konfirmasi ketersediaan dan total akhir pesanan. Terima kasih."
  ].join("\n");
}

// RESERVASI
function openReservation() {
  const dateInput = $("guestDate");
  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  dateInput.min = localToday;

  $("reservationDialog").showModal();
}

function createReservationMessage() {
  return [
    "Halo NOIRÉ, saya ingin melakukan reservasi meja.",
    "",
    `Nama: ${$("guestName").value.trim()}`,
    `Tanggal: ${$("guestDate").value}`,
    `Jam: ${$("guestTime").value} WIB`,
    `Jumlah tamu: ${$("guestCount").value}`,
    `Permintaan khusus: ${$("guestRequest").value.trim() || "-"}`,
    "",
    "Mohon konfirmasi ketersediaan meja. Terima kasih."
  ].join("\n");
}

// EVENT: FILTER KATEGORI
$("categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".filter").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderMenu();
});

// EVENT: SEARCH DAN SORT
$("searchInput").addEventListener("input", renderMenu);
$("sortSelect").addEventListener("change", renderMenu);

// EVENT: TAMBAH MENU DAN DETAIL
$("productGrid").addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const detailButton = event.target.closest("[data-details]");

  if (addButton) {
    addToCart(addButton.dataset.add);
  }

  if (detailButton) {
    openDetails(detailButton.dataset.details);
  }
});

// EVENT: POPUP DETAIL
$("dialogClose").addEventListener("click", () => {
  closeDialog($("productDialog"));
});

$("productDialog").addEventListener("click", event => {
  if (event.target === $("productDialog")) {
    closeDialog($("productDialog"));
  }
});

$("addToBagButton").addEventListener("click", () => {
  if (activeDishId !== null) {
    addToCart(activeDishId);
  }

  closeDialog($("productDialog"));
});

// EVENT: KERANJANG
function showCart() {
  $("bagItems").scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

  if (window.matchMedia("(max-width: 760px)").matches) {
    $("bagItems").focus?.();
  }
}

$("mobileCart").addEventListener("click", () => {
  document.querySelector(".cart-panel").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

$("bagItems").addEventListener("click", event => {
  const minus = event.target.closest("[data-minus]");
  const plus = event.target.closest("[data-plus]");
  const remove = event.target.closest("[data-remove]");

  if (minus) changeQuantity(minus.dataset.minus, -1);
  if (plus) changeQuantity(plus.dataset.plus, 1);
  if (remove) removeFromCart(remove.dataset.remove);
});

$("clearCart").addEventListener("click", clearCart);

$("checkoutButton").addEventListener("click", () => {
  if (getCartCount() === 0) return;
  openWhatsApp(createOrderMessage());
});

// EVENT: RESERVASI
$("navReserve").addEventListener("click", openReservation);
$("reserveButton").addEventListener("click", openReservation);

$("reservationClose").addEventListener("click", () => {
  closeDialog($("reservationDialog"));
});

$("reservationDialog").addEventListener("click", event => {
  if (event.target === $("reservationDialog")) {
    closeDialog($("reservationDialog"));
  }
});

$("reservationForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!$("reservationForm").reportValidity()) return;

  openWhatsApp(createReservationMessage());
});

// EVENT: RESET FILTER
$("clearFilters").addEventListener("click", () => {
  activeCategory = "All";
  $("searchInput").value = "";
  $("sortSelect").value = "featured";

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === "All"
    );
  });

  renderMenu();
});

// NAVIGASI MOBILE
$("menuToggle").addEventListener("click", () => {
  const nav = $("navigation");
  const isOpen = nav.classList.toggle("open");

  $("menuToggle").textContent = isOpen ? "×" : "☰";
  $("menuToggle").setAttribute("aria-expanded", String(isOpen));
});

$("navigation").querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    $("navigation").classList.remove("open");
    $("menuToggle").textContent = "☰";
    $("menuToggle").setAttribute("aria-expanded", "false");
  });
});

// TAHUN FOOTER
$("year").textContent = new Date().getFullYear();

// JALANKAN SAAT HALAMAN DIBUKA
renderMenu();
renderCart();

