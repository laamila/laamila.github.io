# Birthday Surprise Website ♡

Template website kejutan ulang tahun dengan HTML, CSS, dan JavaScript. Cocok untuk dipersonalisasi per pelanggan dan dipublikasikan di GitHub Pages.

## Isi folder
- `index.html` — struktur website
- `style.css` — desain dan responsif untuk HP
- `script.js` — interaksi dan bagian yang bisa dikustomisasi
- `assets/` — gambar contoh berbentuk SVG. Letakkan musik MP3 di folder ini.

## Cara mengganti nama dan surat
Buka `script.js`, cari bagian `CUSTOMISASI WEBSITE`, lalu ubah:
- `recipientName`: nama penerima
- `senderName`: nama pengirim (opsional; saat ini disiapkan untuk penyesuaian lanjutan)
- `letterText`: isi surat
- `musicTitle` dan `musicSubtitle`: judul musik

## Cara mengganti foto
Ganti file SVG di folder `assets` dengan gambar milik pelanggan. Jika menggunakan JPG/PNG, sesuaikan `src` gambar di `index.html`. Contoh:
`<img src="assets/foto-utama.jpg" alt="Foto kenangan utama" id="mainPhoto">`

File contoh yang digunakan:
- `photo-main.svg`
- `photo-1.svg`
- `photo-2.svg`
- `photo-3.svg`

Pastikan pelanggan memberikan izin untuk penggunaan foto dan gunakan file musik yang boleh digunakan.

## Menambahkan musik
1. Masukkan file musik berformat MP3 ke folder `assets`.
2. Beri nama `birthday-music.mp3`.
3. Karena browser biasanya memblokir autoplay, penerima perlu menekan tombol Putar Musik.

## Publikasikan di GitHub Pages
1. Ekstrak ZIP ini.
2. Buat repository GitHub baru, misalnya `birthday-untuk-nisa`.
3. Unggah isi folder ini ke root repository (jangan unggah folder pembungkusnya saja).
4. Buka **Settings → Pages**.
5. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
7. Tunggu beberapa menit sampai tautan Pages muncul.

## Catatan privasi
GitHub Pages adalah hosting situs statis publik. Siapa pun yang memiliki tautan bisa membuka website. Hindari memuat informasi sensitif dan pastikan pemilik foto setuju fotonya digunakan.
