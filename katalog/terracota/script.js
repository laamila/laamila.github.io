
const CONFIG = {
  brandName: "TERRA",
  whatsapp: "6281234567890" // Ganti dengan nomor WhatsApp tujuan
};

const PRODUCTS = [
  {
    id: 1, name: "Clay Ceramic Vase", category: "Home",
    price: 89000, label: "BEST SELLER",
    description: "Vas keramik bernuansa earthy untuk menghadirkan sentuhan hangat pada sudut ruangan.",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 2, name: "Linen Everyday Tote", category: "Fashion",
    price: 79000, label: "EVERYDAY",
    description: "Tas simpel untuk menemani aktivitas harian dengan gaya natural.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 3, name: "Amber Glow Candle", category: "Lifestyle",
    price: 95000, label: "TERRA PICK",
    description: "Lilin dekoratif untuk menciptakan suasana santai dan nyaman di rumah.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 4, name: "Botanical Face Serum", category: "Beauty",
    price: 129000, label: "NEW",
    description: "Serum perawatan wajah untuk melengkapi rutinitas skincare harian.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 5, name: "Sculptural Coffee Cup", category: "Home",
    price: 59000, label: "SMALL JOY",
    description: "Cangkir dengan tampilan minimalis untuk ritual kopi atau teh sehari-hari.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 6, name: "Soft Knit Cardigan", category: "Fashion",
    price: 179000, label: "COMFORT",
    description: "Cardigan kasual yang mudah dipadukan untuk tampilan santai.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 7, name: "Daily Hand Cream", category: "Beauty",
    price: 49000, label: "DAILY CARE",
    description: "Krim tangan untuk melengkapi perawatan kulit dalam aktivitas harian.",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 8, name: "Natural Wood Tray", category: "Home",
    price: 109000, label: "NATURAL",
    description: "Nampan dekoratif untuk menata aksesori, minuman, atau barang kecil.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 9, name: "Everyday Sunglasses", category: "Lifestyle",
    price: 99000, label: "SUN DAYS",
    description: "Kacamata bergaya klasik untuk melengkapi penampilan sehari-hari.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 10, name: "Relaxed Cotton Shirt", category: "Fashion",
    price: 149000, label: "EASY LIVING",
    description: "Kemeja kasual dengan tampilan bersih dan mudah dipadukan.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=85"
  }
];

const $ = id => document.getElementById(id);
const grid = $("productGrid");
const search = $("searchInput");
const filters = $("categoryFilters");
const sortSelect = $("sortSelect");
const productDialog = $("productDialog");
const bagDialog = $("bagDialog");

let activeCategory = "Semua";
let favorites = new Set();
let bag = {};

function money(value) {
  return "Rp" + value.toLocaleString("id-ID");
}

function waLink(message) {
  const phone = CONFIG.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function getVisibleProducts() {
  const keyword = search.value.trim().toLowerCase();

  let result = PRODUCTS.filter(product => {
    const categoryMatch =
      activeCategory === "Semua" ||
      product.category === activeCategory;

    const text = [
      product.name, product.category,
      product.description, product.label
    ].join(" ").toLowerCase();

    return categoryMatch && text.includes(keyword);
  });

  if (sortSelect.value === "low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high") {
    result.sort((a, b) => b.price - a.price);
  } else if (sortSelect.value === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}

function renderProducts() {
  const products = getVisibleProducts();

  grid.innerHTML = products.map(product => `
    <article class="product-card" data-product="${product.id}" tabindex="0" role="button" aria-label="Detail ${product.name}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x700/f5ebdd/35483b?text=TERRA';">
        <span class="product-label">${product.label}</span>
        <div class="product-actions">
          <button type="button" data-fav="${product.id}" class="${favorites.has(product.id) ? "saved" : ""}" aria-label="Favoritkan ${product.name}">${favorites.has(product.id) ? "♥" : "♡"}</button>
        </div>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>
          <button class="product-add" type="button" data-add="${product.id}" aria-label="Tambah ${product.name} ke keranjang">+</button>
        </div>
      </div>
    </article>
  `).join("");

  $("productCount").textContent = products.length;
  $("emptyState").hidden = products.length > 0;
  $("favoriteCount").textContent = favorites.size;
  $("cartCount").textContent = Object.values(bag).reduce((sum, qty) => sum + qty, 0);
}

function showProduct(id) {
  const product = PRODUCTS.find(item => item.id === Number(id));
  if (!product) return;

  $("dialogImage").src = product.image;
  $("dialogImage").alt = product.name;
  $("dialogCategory").textContent = product.category;
  $("dialogName").textContent = product.name;
  $("dialogDescription").textContent = product.description;
  $("dialogPrice").textContent = money(product.price);

  const favButton = $("dialogFavoriteButton");
  favButton.textContent = favorites.has(product.id)
    ? "♥ Saved to favorites"
    : "♡ Save to favorites";

  $("addToBagButton").onclick = () => {
    addToBag(product.id);
    productDialog.close();
  };

  favButton.onclick = () => {
    toggleFavorite(product.id);
    favButton.textContent = favorites.has(product.id)
      ? "♥ Saved to favorites"
      : "♡ Save to favorites";
  };

  productDialog.showModal();
}

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);

  renderProducts();
}

function addToBag(id) {
  bag[id] = (bag[id] || 0) + 1;
  renderProducts();
}

function changeQuantity(id, amount) {
  bag[id] = (bag[id] || 0) + amount;
  if (bag[id] <= 0) delete bag[id];
  renderBag();
  renderProducts();
}

function renderBag() {
  const entries = Object.entries(bag);

  if (entries.length === 0) {
    $("bagItems").innerHTML =
      '<p class="bag-empty">Your bag is waiting for something lovely. ♡</p>';
  } else {
    $("bagItems").innerHTML = entries.map(([id, qty]) => {
      const product = PRODUCTS.find(item => item.id === Number(id));
      return `
        <div class="bag-row">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <h3>${product.name}</h3>
            <p>${money(product.price * qty)}</p>
            <div class="quantity-controls">
              <button type="button" data-minus="${id}" aria-label="Kurangi jumlah">−</button>
              <span>${qty}</span>
              <button type="button" data-plus="${id}" aria-label="Tambah jumlah">+</button>
            </div>
          </div>
          <button type="button" class="remove-item" data-remove="${id}" aria-label="Hapus produk">×</button>
        </div>
      `;
    }).join("");
  }

  const total = entries.reduce((sum, [id, qty]) => {
    const product = PRODUCTS.find(item => item.id === Number(id));
    return sum + product.price * qty;
  }, 0);

  $("bagTotal").textContent = money(total);
}

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  filters.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("active", chip === button);
  });
  renderProducts();
});

search.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

$("clearFilters").addEventListener("click", () => {
  activeCategory = "Semua";
  search.value = "";
  sortSelect.value = "featured";
  filters.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.category === "Semua");
  });
  renderProducts();
});

grid.addEventListener("click", event => {
  const fav = event.target.closest("[data-fav]");
  const add = event.target.closest("[data-add]");
  const card = event.target.closest("[data-product]");

  if (fav) {
    event.stopPropagation();
    toggleFavorite(Number(fav.dataset.fav));
    return;
  }

  if (add) {
    event.stopPropagation();
    addToBag(Number(add.dataset.add));
    return;
  }

  if (card) showProduct(card.dataset.product);
});

grid.addEventListener("keydown", event => {
  if (event.target.closest("button")) return;

  if (event.key === "Enter" || event.key === " ") {
    const card = event.target.closest("[data-product]");
    if (!card) return;
    event.preventDefault();
    showProduct(card.dataset.product);
  }
});

$("dialogClose").addEventListener("click", () => productDialog.close());
productDialog.addEventListener("click", event => {
  if (event.target === productDialog) productDialog.close();
});

$("cartToggle").addEventListener("click", () => {
  renderBag();
  bagDialog.showModal();
});

$("bagClose").addEventListener("click", () => bagDialog.close());
bagDialog.addEventListener("click", event => {
  if (event.target === bagDialog) bagDialog.close();
});

$("bagItems").addEventListener("click", event => {
  const plus = event.target.closest("[data-plus]");
  const minus = event.target.closest("[data-minus]");
  const remove = event.target.closest("[data-remove]");

  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
  if (minus) changeQuantity(Number(minus.dataset.minus), -1);

  if (remove) {
    delete bag[remove.dataset.remove];
    renderBag();
    renderProducts();
  }
});

function checkoutMessage() {
  const entries = Object.entries(bag);
  if (!entries.length) {
    return `Halo ${CONFIG.brandName}, saya ingin bertanya tentang koleksi produk yang tersedia.`;
  }

  const lines = entries.map(([id, qty]) => {
    const product = PRODUCTS.find(item => item.id === Number(id));
    return `• ${product.name} x${qty} — ${money(product.price * qty)}`;
  });

  const total = entries.reduce((sum, [id, qty]) => {
    return sum + PRODUCTS.find(item => item.id === Number(id)).price * qty;
  }, 0);

  return `Halo ${CONFIG.brandName}, saya ingin memesan:\n\n${lines.join("\n")}\n\nTotal sementara: ${money(total)}\nMohon konfirmasi ketersediaan dan detail pemesanan.`;
}

$("bagCheckout").addEventListener("click", () => {
  window.open(waLink(checkoutMessage()), "_blank", "noopener");
});

$("checkoutButton").addEventListener("click", () => {
  window.open(waLink(checkoutMessage()), "_blank", "noopener");
});

$("newsletterButton").href = waLink(
  `Halo ${CONFIG.brandName}, saya ingin mengetahui lebih lanjut tentang koleksi produk.`
);

$("favoritesToggle").addEventListener("click", () => {
  activeCategory = "Semua";
  search.value = "";
  sortSelect.value = "featured";
  filters.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.category === "Semua");
  });

  if (favorites.size === 0) {
    alert("Belum ada produk favorit. Klik ikon ♡ pada produk untuk menyimpannya.");
    return;
  }

  grid.innerHTML = PRODUCTS.filter(product => favorites.has(product.id))
    .map(product => `
      <article class="product-card" data-product="${product.id}" tabindex="0" role="button">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
          <span class="product-label">YOUR FAVORITE</span>
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <div class="product-bottom">
            <span class="product-price">${money(product.price)}</span>
            <button class="product-add" type="button" data-add="${product.id}">+</button>
          </div>
        </div>
      </article>
    `).join("");

  $("productCount").textContent = favorites.size;
  $("emptyState").hidden = true;
  $("collection").scrollIntoView({ behavior: "smooth" });
});

const menuToggle = $("menuToggle");
const navigation = $("navigation");

menuToggle.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuToggle.textContent = open ? "×" : "☰";
  menuToggle.setAttribute("aria-expanded", String(open));
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

$("year").textContent = new Date().getFullYear();
renderProducts();
