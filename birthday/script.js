/* =========================================================
   CUSTOMISASI WEBSITE - EDIT BAGIAN INI UNTUK SETIAP PESANAN
   ========================================================= */
const birthdayConfig = {
  recipientName: "Sayang", // Ganti dengan nama penerima
  senderName: "Dari Aku",  // Nama pengirim (opsional)
  letterTitle: "Surat Untukmu",
  letterText: `Selamat ulang tahun, sayang! ♡

Terima kasih sudah menjadi bagian dari cerita hidupku. Aku harap kamu selalu diberi kesehatan, ketenangan, dan banyak alasan untuk tersenyum.

Semoga semua hal baik yang sedang kamu usahakan perlahan menemukan jalannya. Jangan lupa bangga pada dirimu sendiri, ya. Kamu sudah berjalan sejauh ini dan itu berarti banyak.

Terima kasih untuk semua tawa, cerita, dan momen sederhana yang terasa istimewa karena ada kamu.

Semoga hari ini membuatmu merasa disayangi, karena kamu memang pantas mendapatkan banyak cinta.

Happy birthday! Semoga bahagia selalu. ♡`,
  musicTitle: "Lagu Spesial Kita",
  musicSubtitle: "Untuk kamu ♡"
};
/* ========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const modal = $("#messageModal");
const toast = $("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function openModal(title, message, kicker = "a little note") {
  $("#modalTitle").textContent = title;
  $("#modalMessage").textContent = message;
  $("#modalKicker").textContent = kicker;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$$("[data-close]").forEach(button => button.addEventListener("click", closeModal));
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });

$("#recipientName").textContent = birthdayConfig.recipientName;
$("#closingName").textContent = birthdayConfig.recipientName;
$("#trackTitle").textContent = birthdayConfig.musicTitle;
$("#trackSubtitle").textContent = birthdayConfig.musicSubtitle;
$("#footerYear").textContent = `© ${new Date().getFullYear()} · Made with love`;
$("#readLetterBtn").addEventListener("click", () => openModal(birthdayConfig.letterTitle, birthdayConfig.letterText, "dibuka khusus untukmu ♡"));

$("#surpriseBtn").addEventListener("click", () => {
  openModal(`Happy Birthday, ${birthdayConfig.recipientName}! ♡`,
    `Hari ini adalah tentang kamu. Semoga kamu merasa dicintai, dihargai, dan dikelilingi hal-hal baik. Terima kasih sudah menjadi dirimu sendiri. Selamat ulang tahun! ♡`,
    "surprise unlocked ✨");
  launchConfetti();
});
$("#galleryBtn").addEventListener("click", () => {
  openModal("Setiap foto punya cerita ♡", "Ganti gambar contoh dengan foto kenangan kalian sendiri. Kamu bisa menambahkan caption yang punya arti khusus untuk penerima.", "memory lane");
});

$$(".reason-card").forEach(card => {
  card.addEventListener("click", () => {
    openModal(card.querySelector("strong").textContent, card.dataset.message, "12 hal yang membuatmu spesial");
    card.classList.add("opened");
  });
});

const music = $("#birthdayMusic");
const musicToggle = $("#musicToggle");
const musicStatus = $("#musicStatus");
const record = $(".record");
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.textContent = "Ⅱ";
      musicToggle.setAttribute("aria-label", "Jeda musik");
      musicStatus.textContent = "Sedang diputar ♡";
      record.classList.add("playing");
    } catch (error) {
      musicStatus.textContent = "Tambahkan assets/birthday-music.mp3";
      showToast("Tambahkan file musik MP3 ke folder assets terlebih dahulu.");
    }
  } else {
    music.pause();
    musicToggle.textContent = "▶";
    musicToggle.setAttribute("aria-label", "Putar musik");
    musicStatus.textContent = "Musik dijeda";
    record.classList.remove("playing");
  }
});
music.addEventListener("ended", () => {
  musicToggle.textContent = "▶";
  musicStatus.textContent = "Musik selesai";
  record.classList.remove("playing");
});

const menuToggle = $("#menuToggle");
const nav = $("#mainNav");
menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
});
$$("nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Confetti sederhana tanpa library eksternal.
function launchConfetti() {
  const canvas = $("#confettiCanvas");
  const ctx = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.scale(ratio, ratio);
  const colors = ["#e9788b", "#f5b7be", "#f5d9a7", "#aab79a", "#fff7f0"];
  const pieces = Array.from({length: 110}, () => ({
    x: Math.random() * window.innerWidth,
    y: -20 - Math.random() * window.innerHeight * .5,
    size: 4 + Math.random() * 6,
    speed: 2 + Math.random() * 4,
    drift: (Math.random() - .5) * 2,
    rotation: Math.random() * 6,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    pieces.forEach(p => {
      p.y += p.speed; p.x += p.drift; p.rotation += .04;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rotation);
      ctx.fillStyle = p.color; ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * .65);
      ctx.restore();
    });
    frame++;
    if (frame < 150) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
  draw();
}

// Hati kecil yang melayang sesekali.
const heartsContainer = $(".floating-hearts");
function addFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > .5 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 16}px`;
  heart.style.animationDuration = `${8 + Math.random() * 7}s`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 16000);
}
for (let i = 0; i < 7; i++) setTimeout(addFloatingHeart, i * 700);
setInterval(addFloatingHeart, 2600);
