
/*
  AUREL ESTATE — PROPERTY & REAL ESTATE
  Ganti nomor WhatsApp demo di bawah dengan nomor agen.
  Format nomor: 6281234567890
*/

const WHATSAPP_NUMBER = "6281234567890";

const properties = [
  {
    id: 1,
    name: "The Grand Residence",
    type: "house",
    typeLabel: "Rumah",
    status: "sale",
    statusLabel: "DIJUAL",
    price: 1850000000,
    priceText: "Rp1,85 Miliar",
    location: "Surabaya, Jawa Timur",
    bedrooms: 4,
    bathrooms: 3,
    land: 180,
    building: 220,
    tag: "FEATURED",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
    description: "Hunian modern dengan fasad elegan, ruang keluarga luas, dan taman yang nyaman. Cocok untuk keluarga yang menginginkan kenyamanan serta akses ke fasilitas perkotaan."
  },
  {
    id: 2,
    name: "Minimalist Family House",
    type: "house",
    typeLabel: "Rumah",
    status: "sale",
    statusLabel: "DIJUAL",
    price: 750000000,
    priceText: "Rp750 Juta",
    location: "Malang, Jawa Timur",
    bedrooms: 3,
    bathrooms: 2,
    land: 120,
    building: 95,
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",
    description: "Rumah bergaya minimalis dengan tata ruang fungsional. Pilihan menarik bagi keluarga muda yang mencari hunian praktis dan nyaman."
  },
  {
    id: 3,
    name: "Skyline Modern Apartment",
    type: "apartment",
    typeLabel: "Apartemen",
    status: "rent",
    statusLabel: "DISEWAKAN",
    price: 6000000,
    priceText: "Rp6 Juta",
    priceUnit: "/ bulan",
    location: "Surabaya, Jawa Timur",
    bedrooms: 2,
    bathrooms: 1,
    land: 0,
    building: 65,
    tag: "CITY LIVING",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    description: "Apartemen dengan interior modern dan suasana terang. Ideal bagi profesional atau pasangan yang membutuhkan hunian praktis di kota."
  },
  {
    id: 4,
    name: "Serene Garden Villa",
    type: "villa",
    typeLabel: "Vila",
    status: "sale",
    statusLabel: "DIJUAL",
    price: 3200000000,
    priceText: "Rp3,2 Miliar",
    location: "Batu, Malang",
    bedrooms: 4,
    bathrooms: 3,
    land: 350,
    building: 240,
    tag: "PREMIUM",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=85",
    description: "Vila dengan konsep modern dan suasana santai. Cocok sebagai rumah keluarga, tempat beristirahat, atau properti liburan."
  },
  {
    id: 5,
    name: "Urban Compact House",
    type: "house",
    typeLabel: "Rumah",
    status: "sale",
    statusLabel: "DIJUAL",
    price: 425000000,
    priceText: "Rp425 Juta",
    location: "Sidoarjo, Jawa Timur",
    bedrooms: 2,
    bathrooms: 1,
    land: 72,
    building: 48,
    tag: "STARTER HOME",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    description: "Hunian compact dengan desain modern dan pemanfaatan ruang yang efisien. Alternatif untuk pembeli rumah pertama."
  },
  {
    id: 6,
    name: "The White Haven",
    type: "house",
    typeLabel: "Rumah",
    status: "rent",
    statusLabel: "DISEWAKAN",
    price: 8500000,
    priceText: "Rp8,5 Juta",
    priceUnit: "/ bulan",
    location: "Surabaya, Jawa Timur",
    bedrooms: 3,
    bathrooms: 2,
    land: 150,
    building: 130,
    tag: "",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    description: "Rumah dengan interior bernuansa netral, pencahayaan alami, dan ruang yang nyaman. Tersedia untuk penyewaan sesuai ketentuan pemilik."
  },
  {
    id: 7,
    name: "Coastal Escape Villa",
    type: "villa",
    typeLabel: "Vila",
    status: "rent",
    statusLabel: "DISEWAKAN",
    price: 1500000,
    priceText: "Rp1,5 Juta",
    priceUnit: "/ malam",
    location: "Bali",
    bedrooms: 2,
    bathrooms: 2,
    land: 200,
    building: 110,
    tag: "HOLIDAY STAY",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    description: "Vila bergaya tropis untuk liburan bersama keluarga atau teman. Tarif, fasilitas, dan ketersediaan perlu dikonfirmasi sebelum pemesanan."
  },
  {
    id: 8,
    name: "Executive City Apartment",
    type: "apartment",
    typeLabel: "Apartemen",
    status: "sale",
    statusLabel: "DIJUAL",
    price: 950000000,
    priceText: "Rp950 Juta",
    location: "Jakarta Selatan",
    bedrooms: 2,
    bathrooms: 1,
    land: 0,
    building: 58,
    tag: "",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    description: "Apartemen dengan desain interior kontemporer untuk gaya hidup urban. Informasi fasilitas gedung dan biaya pengelolaan dapat ditanyakan kepada agen."
  }
];

const propertyGrid = document.getElementById("propertyGrid");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const statusFilter = document.getElementById("statusFilter");
const priceFilter = document.getElementById("priceFilter");
const sortSelect = document.getElementById("sortSelect");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("propertyModal");

let favorites = new Set();
let toastTimeout;

function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(amount).replace(/\u00a0/g, " ");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
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

function getPropertyPrice(property) {
  return property.priceText +
    (property.priceUnit ? ` ${property.priceUnit}` : "");
}

function getFilteredProperties() {
  const term = searchInput.value.trim().toLowerCase();

  let result = properties.filter(property => {
    const searchableText = [
      property.name,
      property.location,
      property.typeLabel,
      property.statusLabel,
      property.description
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(term);
    const matchesType =
      typeFilter.value === "all" ||
      property.type === typeFilter.value;

    const matchesStatus =
      statusFilter.value === "all" ||
      property.status === statusFilter.value;

    // Untuk demo ini, harga sewa bulanan/malam juga disimpan
    // sebagai angka agar bisa difilter. Batas harga sebaiknya
    // digunakan bersama pilihan status yang sesuai.
    const maxPrice = priceFilter.value;
    const matchesPrice =
      maxPrice === "all" ||
      property.price <= Number(maxPrice);

    return matchesSearch && matchesType &&
      matchesStatus && matchesPrice;
  });

  switch (sortSelect.value) {
    case "low":
      result.sort((a, b) => a.price - b.price);
      break;
    case "high":
      result.sort((a, b) => b.price - a.price);
      break;
    case "name":
      result.sort((a, b) => a.name.localeCompare(b.name, "id"));
      break;
    default:
      result.sort((a, b) => a.id - b.id);
  }

  return result;
}

function renderProperties() {
  const filtered = getFilteredProperties();

  propertyGrid.innerHTML = filtered.map(property => `
    <article class="property-card">
      <div class="property-image">
        <img
          src="${property.image}"
          alt="${escapeHTML(property.name)}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/900x600/e9e7e0/172b46?text=Property';"
        >
        <span class="listing-badge ${property.status === "rent" ? "rent" : ""}">
          ${property.statusLabel}
        </span>
        <button
          type="button"
          class="favorite-button ${favorites.has(property.id) ? "active" : ""}"
          data-favorite="${property.id}"
          aria-label="${favorites.has(property.id) ? "Hapus dari favorit" : "Tambah ke favorit"}"
          aria-pressed="${favorites.has(property.id)}"
        >${favorites.has(property.id) ? "♥" : "♡"}</button>
      </div>

      <div class="property-info">
        <div class="property-location">
          <span>⌖</span>
          ${escapeHTML(property.location)}
        </div>

        <h3>${escapeHTML(property.name)}</h3>

        <div class="property-price">
          ${escapeHTML(getPropertyPrice(property))}
        </div>

        <div class="property-specs">
          <span>⌂ ${property.bedrooms} KT</span>
          <span>♧ ${property.bathrooms} KM</span>
          <span>▱ ${property.building} m²</span>
        </div>

        <div class="property-actions">
          <button type="button" class="details-button" data-details="${property.id}">
            View Details
          </button>
          <button type="button" class="inquiry-button" data-inquiry="${property.id}">
            Ask Agent ↗
          </button>
        </div>
      </div>
    </article>
  `).join("");

  resultsCount.textContent =
    `Menampilkan ${filtered.length} dari ${properties.length} properti`;

  emptyState.hidden = filtered.length > 0;
  propertyGrid.hidden = filtered.length === 0;
}

function openWhatsApp(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!number || number === "6281234567890") {
    showToast("Ganti nomor WhatsApp demo di script.js terlebih dahulu.");
    return;
  }

  const url =
    "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

function inquireProperty(propertyId) {
  const property = properties.find(item => item.id === propertyId);
  if (!property) return;

  const message = [
    "Halo AUREL Estate, saya tertarik dengan properti berikut:",
    "",
    `Nama properti: ${property.name}`,
    `Lokasi: ${property.location}`,
    `Status: ${property.statusLabel}`,
    `Harga: ${getPropertyPrice(property)}`,
    "",
    "Apakah properti ini masih tersedia? Saya ingin mendapatkan informasi lebih lanjut.",
    "Terima kasih."
  ].join("\n");

  openWhatsApp(message);
}

function openPropertyDetails(propertyId) {
  const property = properties.find(item => item.id === propertyId);
  if (!property) return;

  document.getElementById("modalImage").src = property.image;
  document.getElementById("modalImage").alt = property.name;
  document.getElementById("modalType").textContent =
    `${property.typeLabel.toUpperCase()} · ${property.statusLabel}`;

  document.getElementById("modalTitle").textContent = property.name;
  document.getElementById("modalPrice").textContent =
    getPropertyPrice(property);
  document.getElementById("modalLocation").textContent =
    `⌖ ${property.location}`;

  const specs = [
    `${property.bedrooms} kamar tidur`,
    `${property.bathrooms} kamar mandi`,
    `${property.building} m² bangunan`
  ];

  if (property.land > 0) {
    specs.push(`${property.land} m² tanah`);
  }

  document.getElementById("modalSpecs").innerHTML =
    specs.map(spec => `<span>${escapeHTML(spec)}</span>`).join("");

  document.getElementById("modalDescription").textContent =
    property.description;

  const contactButton = document.getElementById("modalContact");
  contactButton.onclick = event => {
    event.preventDefault();
    inquireProperty(property.id);
  };

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

propertyGrid.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite]");
  const detailsButton = event.target.closest("[data-details]");
  const inquiryButton = event.target.closest("[data-inquiry]");

  if (favoriteButton) {
    const id = Number(favoriteButton.dataset.favorite);

    if (favorites.has(id)) {
      favorites.delete(id);
      showToast("Properti dihapus dari favorit.");
    } else {
      favorites.add(id);
      showToast("Properti ditambahkan ke favorit ♡");
    }

    renderProperties();
    return;
  }

  if (detailsButton) {
    openPropertyDetails(Number(detailsButton.dataset.details));
    return;
  }

  if (inquiryButton) {
    inquireProperty(Number(inquiryButton.dataset.inquiry));
  }
});

document.getElementById("searchButton").addEventListener("click", () => {
  renderProperties();
  document.getElementById("properties").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") renderProperties();
});

[typeFilter, statusFilter, priceFilter, sortSelect].forEach(element => {
  element.addEventListener("change", renderProperties);
});

document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  typeFilter.value = "all";
  statusFilter.value = "all";
  priceFilter.value = "all";
  sortSelect.value = "featured";
  renderProperties();
});

document.getElementById("modalClose").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

document.getElementById("contactButton").addEventListener("click", event => {
  event.preventDefault();

  openWhatsApp(
    "Halo AUREL Estate, saya ingin berkonsultasi mengenai properti yang tersedia. Mohon informasinya. Terima kasih."
  );
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Tampilkan properti pada saat halaman pertama kali dibuka.
renderProperties();
