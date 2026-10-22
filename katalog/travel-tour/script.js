
/*
  JOURNEY — TRAVEL & TOUR ORGANIZER

  Ganti nomor WhatsApp di bawah dengan nomor admin travel.
  Contoh format: 6281234567890
*/

const WHATSAPP_NUMBER = "6281234567890";

const trips = [
  {
    id: 1,
    name: "Bali Tropical Escape",
    destination: "Bali, Indonesia",
    category: "beach",
    categoryLabel: "Beach & Island",
    price: 1850000,
    duration: 3,
    tag: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
    description: "Nikmati pantai tropis, pemandangan indah, dan suasana Bali dalam perjalanan singkat yang menyenangkan.",
    itinerary: [
      "Hari 1: Kedatangan, check-in, dan menikmati sunset.",
      "Hari 2: Wisata pantai dan eksplorasi destinasi pilihan.",
      "Hari 3: Sarapan, waktu bebas, dan perjalanan pulang."
    ],
    includes: "Contoh fasilitas: transportasi lokal, pemandu, dan itinerary. Tiket, hotel, makan, serta biaya tambahan harus dikonfirmasi."
  },
  {
    id: 2,
    name: "Bromo Sunrise Adventure",
    destination: "Bromo, Jawa Timur",
    category: "nature",
    categoryLabel: "Nature & Adventure",
    price: 850000,
    duration: 2,
    tag: "ADVENTURE",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    description: "Rasakan petualangan menuju kawasan pegunungan dan nikmati suasana pagi yang menakjubkan.",
    itinerary: [
      "Hari 1: Keberangkatan dan persiapan perjalanan.",
      "Hari 2: Perjalanan sunrise, eksplorasi kawasan, lalu kembali."
    ],
    includes: "Contoh fasilitas: transportasi wisata dan pendamping perjalanan. Jeep, tiket masuk, penginapan, dan perlengkapan perlu dikonfirmasi."
  },
  {
    id: 3,
    name: "Yogyakarta Heritage Trip",
    destination: "Yogyakarta",
    category: "culture",
    categoryLabel: "Culture & City",
    price: 1250000,
    duration: 3,
    tag: "CULTURE",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=900&q=85",
    description: "Jelajahi kekayaan budaya Jawa, wisata sejarah, kuliner lokal, dan sudut kota yang penuh cerita.",
    itinerary: [
      "Hari 1: Kedatangan dan wisata pusat kota.",
      "Hari 2: Kunjungan destinasi budaya dan wisata kuliner.",
      "Hari 3: Belanja oleh-oleh dan perjalanan pulang."
    ],
    includes: "Contoh fasilitas: itinerary dan transportasi lokal. Tiket destinasi, hotel, makan, serta biaya lainnya dikonfirmasi sebelum pemesanan."
  },
  {
    id: 4,
    name: "Romantic Bali Honeymoon",
    destination: "Bali, Indonesia",
    category: "honeymoon",
    categoryLabel: "Honeymoon",
    price: 4250000,
    duration: 4,
    tag: "FOR TWO",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=85",
    description: "Waktu berkualitas untuk dua orang dengan suasana romantis, pilihan destinasi cantik, dan itinerary yang lebih santai.",
    itinerary: [
      "Hari 1: Kedatangan dan waktu berdua.",
      "Hari 2: Eksplorasi destinasi romantis.",
      "Hari 3: Aktivitas pilihan dan waktu santai.",
      "Hari 4: Sarapan dan perjalanan pulang."
    ],
    includes: "Contoh konsep paket honeymoon. Hotel, dekorasi romantis, transportasi, tiket, dan makan harus dikonfirmasi sesuai paket final."
  },
  {
    id: 5,
    name: "Lombok Island Discovery",
    destination: "Lombok, Nusa Tenggara Barat",
    category: "beach",
    categoryLabel: "Beach & Island",
    price: 2350000,
    duration: 3,
    tag: "ISLAND LIFE",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    description: "Temukan pesona pulau dengan panorama laut, pantai berpasir, dan pengalaman liburan tropis.",
    itinerary: [
      "Hari 1: Kedatangan dan orientasi destinasi.",
      "Hari 2: Eksplorasi pantai dan wisata alam.",
      "Hari 3: Waktu bebas dan perjalanan pulang."
    ],
    includes: "Contoh fasilitas: itinerary dan transportasi lokal. Tiket kapal atau pesawat, penginapan, tiket wisata, dan makan dikonfirmasi terpisah."
  },
  {
    id: 6,
    name: "Ubud Nature Retreat",
    destination: "Ubud, Bali",
    category: "nature",
    categoryLabel: "Nature & Adventure",
    price: 1650000,
    duration: 3,
    tag: "SLOW LIVING",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",
    description: "Perjalanan santai dengan inspirasi alam hijau, suasana pedesaan, dan waktu untuk menikmati liburan tanpa terburu-buru.",
    itinerary: [
      "Hari 1: Check-in dan menikmati suasana Ubud.",
      "Hari 2: Wisata alam dan eksplorasi area sekitar.",
      "Hari 3: Sarapan, waktu bebas, dan check-out."
    ],
    includes: "Contoh fasilitas: itinerary dan rekomendasi destinasi. Penginapan, transportasi, tiket, dan aktivitas berbayar perlu dikonfirmasi."
  },
  {
    id: 7,
    name: "Jakarta City Explorer",
    destination: "Jakarta, Indonesia",
    category: "culture",
    categoryLabel: "Culture & City",
    price: 650000,
    duration: 2,
    tag: "CITY BREAK",
    image: "https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?auto=format&fit=crop&w=900&q=85",
    description: "Nikmati suasana kota, tempat bersejarah, kuliner, dan destinasi urban dalam liburan singkat.",
    itinerary: [
      "Hari 1: Wisata kota dan tempat bersejarah.",
      "Hari 2: Kuliner, eksplorasi pilihan, dan kembali."
    ],
    includes: "Contoh fasilitas: rencana perjalanan. Transportasi antarkota, hotel, tiket, dan konsumsi disesuaikan dengan pilihan peserta."
  },
  {
    id: 8,
    name: "Bali Honeymoon Hideaway",
    destination: "Bali, Indonesia",
    category: "honeymoon",
    categoryLabel: "Honeymoon",
    price: 5500000,
    duration: 5,
    tag: "PREMIUM",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85",
    description: "Pilihan perjalanan honeymoon dengan waktu lebih panjang untuk menikmati destinasi, suasana romantis, dan aktivitas sesuai keinginan.",
    itinerary: [
      "Hari 1: Kedatangan dan waktu beristirahat.",
      "Hari 2: Eksplorasi pantai dan destinasi pilihan.",
      "Hari 3: Aktivitas romantis sesuai kesepakatan.",
      "Hari 4: Waktu santai dan wisata tambahan.",
      "Hari 5: Sarapan, check-out, dan perjalanan pulang."
    ],
    includes: "Contoh konsep paket premium. Hotel, transportasi, aktivitas romantis, tiket, dan makan harus dikonfirmasi dalam penawaran resmi."
  }
];

const packageGrid = document.getElementById("packageGrid");
const destinationSearch = document.getElementById("destinationSearch");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("packageModal");

let selectedCategory = "all";
let selectedTripId = null;
let toastTimeout;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function rupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value).replace(/\u00a0/g, " ");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function getFilteredTrips() {
  const query = destinationSearch.value.trim().toLowerCase();

  let result = trips.filter(trip => {
    const searchable = [
      trip.name,
      trip.destination,
      trip.categoryLabel,
      trip.description
    ].join(" ").toLowerCase();

    const matchesQuery = searchable.includes(query);
    const matchesCategory =
      selectedCategory === "all" ||
      trip.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  switch (sortSelect.value) {
    case "low":
      result.sort((a, b) => a.price - b.price);
      break;
    case "high":
      result.sort((a, b) => b.price - a.price);
      break;
    case "duration":
      result.sort((a, b) => a.duration - b.duration);
      break;
    default:
      result.sort((a, b) => a.id - b.id);
  }

  return result;
}

function renderTrips() {
  const filtered = getFilteredTrips();

  packageGrid.innerHTML = filtered.map(trip => `
    <article class="package-card">
      <div class="package-image">
        <img
          src="${trip.image}"
          alt="${escapeHTML(trip.name)}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/900x600/e5f0e9/123c3a?text=Travel+Package';"
        >
        <span class="package-tag">${escapeHTML(trip.tag)}</span>
        <span class="package-type">${escapeHTML(trip.categoryLabel)}</span>
      </div>

      <div class="package-info">
        <div class="package-location">⌖ ${escapeHTML(trip.destination)}</div>
        <h3>${escapeHTML(trip.name)}</h3>
        <p class="package-description">${escapeHTML(trip.description)}</p>

        <div class="package-meta">
          <span>◷ ${trip.duration} hari</span>
          <span>✳ ${escapeHTML(trip.categoryLabel)}</span>
        </div>

        <div class="package-bottom">
          <div class="package-price">
            ${rupiah(trip.price)}
            <small>per orang · harga demo</small>
          </div>
          <button
            type="button"
            class="package-details"
            data-details="${trip.id}"
          >View Details ↗</button>
        </div>
      </div>
    </article>
  `).join("");

  resultsCount.textContent =
    `Menampilkan ${filtered.length} dari ${trips.length} paket wisata`;

  packageGrid.hidden = filtered.length === 0;
  emptyState.hidden = filtered.length !== 0;
}

function selectCategory(category) {
  selectedCategory = category;
  categoryFilter.value = category;

  document.querySelectorAll(".filter-pill").forEach(button => {
    const active = button.dataset.category === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderTrips();
}

function resetFilters() {
  destinationSearch.value = "";
  sortSelect.value = "featured";
  selectCategory("all");
  renderTrips();
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

function bookTrip(tripId) {
  const trip = trips.find(item => item.id === tripId);
  if (!trip) return;

  const message = [
    "Halo JOURNEY Travel! Saya tertarik dengan paket wisata berikut.",
    "",
    `Paket: ${trip.name}`,
    `Destinasi: ${trip.destination}`,
    `Kategori: ${trip.categoryLabel}`,
    `Durasi: ${trip.duration} hari`,
    `Harga demo: ${rupiah(trip.price)} per orang`,
    "",
    "Mohon informasi harga resmi, tanggal keberangkatan, ketersediaan, fasilitas, dan total biaya.",
    "",
    "Nama:",
    "Tanggal perjalanan:",
    "Jumlah peserta:"
  ].join("\n");

  openWhatsApp(message);
}

function openTripDetails(tripId) {
  const trip = trips.find(item => item.id === tripId);
  if (!trip) return;

  selectedTripId = trip.id;

  document.getElementById("modalImage").src = trip.image;
  document.getElementById("modalImage").alt = trip.name;
  document.getElementById("modalCategory").textContent =
    trip.categoryLabel.toUpperCase();

  document.getElementById("modalTitle").textContent = trip.name;
  document.getElementById("modalLocation").textContent =
    `⌖ ${trip.destination}`;

  document.getElementById("modalPrice").textContent =
    `${rupiah(trip.price)} / orang`;

  document.getElementById("modalSpecs").innerHTML = [
    `${trip.duration} hari perjalanan`,
    trip.categoryLabel,
    "Harga demo"
  ].map(item => `<span>${escapeHTML(item)}</span>`).join("");

  document.getElementById("modalDescription").textContent =
    trip.description;

  document.getElementById("modalItinerary").innerHTML =
    trip.itinerary.map(item =>
      `<li>${escapeHTML(item)}</li>`
    ).join("");

  document.getElementById("modalIncludes").textContent =
    trip.includes;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  selectedTripId = null;
}

packageGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-details]");
  if (!button) return;

  openTripDetails(Number(button.dataset.details));
});

document.getElementById("modalClose").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

document.getElementById("modalBook").addEventListener("click", () => {
  if (selectedTripId !== null) {
    bookTrip(selectedTripId);
  }
});

document.getElementById("findTripButton").addEventListener("click", () => {
  renderTrips();
  document.getElementById("packages").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

destinationSearch.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    renderTrips();
    document.getElementById("packages").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

categoryFilter.addEventListener("change", () => {
  selectCategory(categoryFilter.value);
});

sortSelect.addEventListener("change", renderTrips);

document.querySelectorAll(".filter-pill").forEach(button => {
  button.addEventListener("click", () => {
    selectCategory(button.dataset.category);
  });
});

document.getElementById("resetFilters").addEventListener("click", resetFilters);

document.querySelectorAll("[data-destination]").forEach(link => {
  link.addEventListener("click", () => {
    const destination = link.dataset.destination;
    destinationSearch.value = destination;

    // Jika destinasi tidak memiliki nama yang sama dengan paket,
    // gunakan kata kunci yang sesuai dengan data paket demo.
    if (destination === "Bromo") {
      destinationSearch.value = "Bromo";
      selectCategory("nature");
    } else {
      selectCategory("all");
    }

    renderTrips();
  });
});

document.getElementById("contactButton").addEventListener("click", event => {
  event.preventDefault();

  openWhatsApp([
    "Halo JOURNEY Travel!",
    "Saya ingin berkonsultasi dan merencanakan perjalanan.",
    "",
    "Destinasi impian:",
    "Tanggal perjalanan:",
    "Jumlah peserta:",
    "Perkiraan budget:",
    "",
    "Mohon bantuannya untuk rekomendasi paket wisata. Terima kasih."
  ].join("\n"));
});

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

// Render katalog pada saat website pertama kali dibuka.
renderTrips();
