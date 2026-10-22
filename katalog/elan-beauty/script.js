
/*
  ÉLAN BEAUTY STUDIO
  Ganti nomor WhatsApp di bawah dengan nomor bisnis kamu.
  Format: kode negara + nomor, tanpa tanda +, spasi, atau strip.
  Contoh nomor Indonesia: 6281234567890
*/

const WHATSAPP_NUMBER = "6281234567890";

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const bookingForm = document.getElementById("bookingForm");
const serviceChoice = document.getElementById("serviceChoice");
const bookingDate = document.getElementById("bookingDate");
const whatsappLink = document.getElementById("whatsappLink");

// Set tahun secara otomatis.
document.getElementById("year").textContent = new Date().getFullYear();

// Tanggal booking tidak boleh di masa lalu.
const today = new Date();
const localToday = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0")
].join("-");
bookingDate.min = localToday;

// Menu mobile.
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

// Filter layanan.
const filterButtons = document.querySelectorAll(".filter");
const serviceCards = document.querySelectorAll(".service-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    serviceCards.forEach(card => {
      const matches =
        selectedFilter === "all" ||
        card.dataset.category === selectedFilter;

      card.hidden = !matches;
    });
  });
});

// Tombol booking pada setiap kartu layanan.
document.querySelectorAll(".book-service").forEach(button => {
  button.addEventListener("click", () => {
    serviceChoice.value = button.dataset.service;
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Susun pesan dan buka WhatsApp setelah formulir valid.
bookingForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!bookingForm.reportValidity()) return;

  const formData = new FormData(bookingForm);
  const name = formData.get("name").trim();
  const phone = formData.get("phone").trim();
  const service = formData.get("service");
  const date = formData.get("date");
  const time = formData.get("time");
  const notes = formData.get("notes").trim();

  const formattedDate = new Date(date + "T12:00:00").toLocaleDateString(
    "id-ID",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const message = [
    "Halo Élan Beauty Studio! 💗",
    "",
    "Saya ingin mengajukan booking appointment.",
    "",
    "Nama: " + name,
    "Nomor WhatsApp: " + phone,
    "Layanan: " + service,
    "Tanggal: " + formattedDate,
    "Waktu pilihan: " + time,
    "Catatan: " + (notes || "-"),
    "",
    "Mohon informasi ketersediaan jadwalnya. Terima kasih!"
  ].join("\n");

  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!number || number === "6281234567890") {
    alert(
      "Ini masih nomor demo. Silakan ganti WHATSAPP_NUMBER di script.js dengan nomor WhatsApp bisnis yang benar sebelum menerima pesanan."
    );
    return;
  }

  const whatsappURL =
    "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

// Tombol WhatsApp mengarah ke chat bisnis.
whatsappLink.addEventListener("click", event => {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!number || number === "6281234567890") {
    event.preventDefault();
    alert("Ganti nomor demo pada variabel WHATSAPP_NUMBER di script.js terlebih dahulu.");
    return;
  }

  whatsappLink.href = "https://wa.me/" + number;
});

whatsappLink.href = "#booking";
