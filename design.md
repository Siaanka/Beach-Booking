---
name: camp-beach-ui-design
description: Panduan desain UI/UX untuk aplikasi Terra & Tide Camp & Beach berdasarkan kode HTML dan Tailwind yang diberikan. Gunakan saat membuat, memperbaiki, atau memperluas antarmuka wisatawan, petugas lapangan/kasir, dan pengelola.
---

# Skill Desain UI/UX — Terra & Tide Camp & Beach

## Tujuan

Gunakan panduan ini untuk mempertahankan gaya visual, pola interaksi, dan struktur antarmuka dari desain Camp & Beach yang diberikan. Produk berfokus pada penemuan destinasi camping/pantai, pengecekan kuota kavling, reservasi, tiket digital, check-in, pembayaran di lokasi, serta pemantauan operasional.

Panduan ini diturunkan dari kode HTML, konfigurasi Tailwind, komponen, dan komentar yang tersedia pada sumber. Detail yang belum ditunjukkan oleh kode tidak boleh dianggap sebagai fitur yang sudah diterapkan.

## Identitas visual

Nama merek yang tampil pada antarmuka adalah **Terra & Tide**, dengan keterangan **Camp & Beach**. Nuansa desain harus terasa alami, tenang, bersih, praktis, dan tepercaya; gunakan inspirasi warna hutan, laut, pasir, serta cahaya matahari tanpa membuat tampilan terlalu ramai.

### Tipografi

Gunakan **Plus Jakarta Sans** untuk seluruh antarmuka. Hirarki tipografi:

- **Display:** 3rem, line-height 3.5rem, weight 800, letter-spacing -0.03em.
- **Headline besar:** 2rem/2.5rem, weight 700, letter-spacing -0.02em.
- **Headline mobile besar:** 1.625rem/2.125rem, weight 700.
- **Headline medium:** 1.375rem/1.75rem, weight 700.
- **Headline kecil:** 1.125rem/1.5rem, weight 600.
- **Body besar:** 1.125rem/1.75rem, weight 400.
- **Body medium:** 1rem/1.5rem, weight 400.
- **Body kecil:** 0.875rem/1.375rem, weight 400.
- **Label:** gunakan ukuran 0.6875rem–0.875rem dengan bobot 600–700. Label kecil dapat memakai letter-spacing 0.04em.

Hindari mencampur terlalu banyak jenis font. Label status boleh tegas, tetapi teks informasi utama tetap mudah dibaca.

## Palet warna

Gunakan token warna berikut sebagai acuan utama. Utamakan token semantik daripada menetapkan warna secara acak.

| Token | Nilai | Peran desain |
|---|---|---|
| `primary` | `#003629` | Hijau hutan gelap; teks dan aksi utama |
| `primary-container` | `#1B4D3E` | Tombol utama alternatif dan elemen aktif |
| `primary-fixed` | `#BAEED9` | Status positif berlatar lembut |
| `primary-fixed-dim` | `#9ED1BD` | Variasi hijau lembut |
| `surface` | `#F9F9FF` | Latar halaman |
| `surface-container-lowest` | `#FFFFFF` | Kartu dan panel utama |
| `surface-container-low` | `#F0F3FF` | Bidang input dan panel sekunder |
| `surface-container` | `#E7EEFF` | Panel dan kontrol bertingkat |
| `surface-container-high` | `#DEE8FF` | Hover dan elemen sekunder |
| `surface-container-highest` | `#D8E3FB` | Latar kontrol sekunder |
| `on-surface` | `#111C2D` | Teks utama |
| `on-surface-variant` | `#404945` | Teks sekunder |
| `outline` | `#707974` | Garis dan ikon netral |
| `outline-variant` | `#C0C9C3` | Garis pemisah halus |
| `secondary` | `#904D00` | Aksen amber/cokelat untuk perhatian |
| `secondary-container` | `#FE932C` | Aksi aksen dan indikator perhatian |
| `secondary-fixed` | `#FFDCC3` | Latar peringatan lembut |
| `tertiary` | `#00324F` | Aksen biru laut |
| `error` | `#BA1A1A` | Kesalahan, kuota penuh, atau status gagal |
| `error-container` | `#FFDAD6` | Latar kesalahan lembut |

**Catatan implementasi:** kode sumber mendefinisikan `secondary-fixed` sebagai `#ffdcc3`. Gunakan nilai sumber yang valid: `#FF DCC3` tanpa spasi, yaitu `#FFDCC3`; nilai pada kode sumber adalah `#ffdcc3`.

Gunakan hijau untuk ketersediaan/status berhasil, amber untuk kuota menipis atau tindakan yang perlu diperhatikan, dan merah untuk penuh, ditolak, atau gagal. Jangan mengandalkan warna saja; sertakan label teks dan/atau ikon.

## Bentuk, jarak, dan permukaan

- Radius dasar: `0.25rem`; radius `lg`: `0.5rem`; radius `xl`: `0.75rem`; bentuk penuh untuk chip dan badge.
- Jarak yang umum: `0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2rem`, dan `3rem`.
- Gunakan padding halaman sekitar `1rem` pada tampilan mobile.
- Kartu memakai latar putih, radius sekitar `0.75rem`, dan bayangan lembut.
- Panel sekunder memakai `surface-container-low`.
- Hindari border tebal. Gunakan bayangan tipis, pemisah lembut, dan kontras yang cukup.
- Ikon menggunakan **Material Symbols Outlined**; ukuran umum 16–24 px.
- Foto destinasi harus menonjol, menggunakan `object-fit: cover`, dengan rasio gambar unggulan sekitar 16:10.
- Header dan navigasi bawah dapat memakai latar transparan dengan efek blur, seperti `bg-surface/85` dan `backdrop-blur-xl`.
- Perhatikan area aman perangkat dengan `env(safe-area-inset-top)` dan `env(safe-area-inset-bottom)`.

## Responsivitas dan pola navigasi

Desain sumber berorientasi mobile. Prioritaskan pengalaman satu tangan dan informasi penting yang cepat terlihat.

- Header tetap berada di bagian atas dan berisi logo, nama merek, notifikasi, dan akses profil.
- Navigasi bawah tetap berada di bagian bawah pada antarmuka wisatawan. Item yang ditampilkan: **Eksplor**, **Tiket Saya**, **Aktivitas / Kasir**, dan **Profil & Peran**.
- Gunakan chip horizontal yang bisa digulir untuk kategori destinasi.
- Hindari membuat halaman melebar melebihi viewport. Kartu, label, dan judul panjang perlu penanganan overflow yang baik.
- Pada desktop, pertahankan hierarki dan komponen yang sama, lalu gunakan ruang tambahan untuk memperlebar konten secara proporsional; jangan sekadar memperbesar semua elemen.
- Sembunyikan scrollbar visual bila diperlukan, tetapi jangan menghilangkan kemampuan menggulir.

## Peran dan layar yang terlihat pada kode

### Wisatawan — Eksplorasi, katalog, dan kuota

Halaman katalog memuat:

- Sapaan/konteks “Eksplorasi Alam Nusantara” dan status “Wisatawan Aktif”.
- Judul utama “Temukan Spot Camping & Pantai Impian”.
- Pencarian destinasi atau area camping.
- Pemilihan tanggal kedatangan dan tombol filter.
- Chip kategori: Semua, Tepi Pantai (Beach), Taman Hutan Pinus, Tepi Danau, dan Family Friendly.
- Kartu destinasi unggulan dengan foto, peringatan sisa kuota, rating dan jumlah ulasan, lokasi, nama destinasi, fasilitas, harga tiket, serta harga sewa kavling.
- Informasi pembayaran di lokasi menggunakan tunai atau QRIS; reservasi mengamankan kuota sampai pukul 17.00 WIB sesuai teks sumber.
- Tombol ajakan “Booking Kavling Sekarang”.
- Kalender ketersediaan tujuh hari dengan jumlah sisa kavling dan legenda status.
- Rekomendasi destinasi lain dalam format daftar, indikator kuota, rating, harga, dan tombol detail/jadwal.
- Tombol cepat “Cek Ketersediaan Cepat”.

Aturan desain:
- Informasi tanggal, harga, sisa kuota, dan status harus mudah dipindai.
- Status kuota penuh harus terlihat jelas dan aksi booking pada slot penuh harus dinonaktifkan.
- Tampilkan harga dengan satuan eksplisit, misalnya `/ orang` atau `/ malam`.
- Jangan menampilkan angka kuota atau harga contoh sebagai data real-time tanpa sumber data aplikasi.

### Wisatawan — Tiket saya dan QR check-in

Halaman tiket mencakup:

- Banner informasi bahwa area dapat minim sinyal dan tiket perlu disimpan offline atau di-screenshot.
- Tab **Tiket Aktif** dan **Riwayat & Batal**.
- Kartu e-pass dengan foto destinasi, kode booking, nama dan lokasi destinasi.
- Badge status tiket dan status pembayaran.
- Informasi tanggal/jam masuk, lokasi kavling, serta jumlah tamu.
- Area QR code dengan kode booking dan instruksi untuk petugas.
- Ringkasan tagihan yang harus dibayar di loket.
- Tombol tindakan terkait check-in dan tiket.
- Tampilan status khusus untuk tiket kedaluwarsa/digunakan, reservasi dibatalkan, serta keadaan riwayat kosong.

Aturan desain:
- QR code harus berkontras tinggi, berukuran cukup besar, dan tidak tertutup elemen dekoratif.
- Kode booking perlu ditampilkan dalam teks selain representasi QR.
- Pisahkan status tiket dari status pembayaran agar tidak menimbulkan kebingungan.
- Sediakan keadaan kosong, gagal, dibatalkan, kedaluwarsa, dan telah digunakan.
- Tampilan QR pada kode sumber adalah representasi visual; jangan menganggapnya sebagai QR valid untuk verifikasi produksi tanpa implementasi generator dan validasi yang sesungguhnya.

### Petugas lapangan — Scanner dan check-in

Bagian operasional petugas meliputi:

- Konteks operasional dan pemilih tampilan/peran.
- Area pemindai dengan bingkai bidik, penanda sudut, garis pemindaian, serta kontrol flash dan kamera depan/belakang.
- Input manual kode booking sebagai alternatif.
- Kartu hasil pemindaian yang berhasil.
- Tombol konfirmasi tindakan.
- Pesan kesalahan untuk tiket yang sudah digunakan dan tiket yang belum dibayar di kasir.

Aturan desain:
- Gunakan kontras tinggi agar mudah dibaca di luar ruangan.
- Tombol penting harus cukup besar untuk disentuh cepat.
- Tampilkan hasil scan secara eksplisit: berhasil, sudah digunakan, belum bayar, atau tidak valid.
- Jangan mengandalkan animasi sebagai satu-satunya tanda proses pemindaian.
- Jika akses kamera atau jaringan gagal, tampilkan pesan yang jelas dan sediakan input manual jika sesuai.

### Petugas kasir — Pembayaran di lokasi

Bagian kasir meliputi:

- Ringkasan penerimaan uang hari ini.
- Form input tamu atau referensi booking.
- Rincian tagihan.
- Pemilihan metode pembayaran.
- Perhitungan uang kembalian ketika metode tunai dipilih.
- Aksi konfirmasi pembayaran dan pencetakan struk.
- Pemberitahuan mode pencatatan offline.
- Riwayat transaksi terbaru dan notifikasi sukses yang dapat ditutup.

Aturan desain:
- Rincian tagihan, total, jumlah uang diterima, dan kembalian harus mudah dibedakan.
- Perhitungan uang kembalian harus diperbarui dari input yang benar-benar diberikan pengguna.
- Konfirmasi pembayaran perlu menunjukkan hasil yang tegas agar tidak terjadi transaksi ganda.
- Tampilkan status offline dengan jelas dan jangan mengklaim transaksi telah tersinkronisasi sebelum proses sinkronisasi berhasil.
- Sediakan umpan balik sukses, gagal, dan proses berlangsung.

### Pengelola — Dashboard operasional

Dashboard pengelola berisi:

- Pemilih destinasi dan peran.
- Peringatan kondisi offline atau kesalahan.
- Metrik kuota dan kapasitas.
- Indikator kapasitas dengan peringatan saat mendekati batas.
- Ringkasan jumlah check-in dan penerimaan kasir.
- Kontrol penutupan jadwal secara paksa.
- Pengaturan batas harian.
- Kartu visual destinasi.

Aturan desain:
- Letakkan metrik operasional utama di bagian atas.
- Gunakan indikator kapasitas yang mudah dipahami dan disertai angka.
- Tindakan berdampak besar seperti menutup jadwal harus dibedakan dari kontrol biasa dan perlu konfirmasi.
- Perubahan batas kuota harus menampilkan nilai saat ini dan nilai yang akan diterapkan.

### Area admin/pengelolaan dengan akses terbatas

Kode juga menunjukkan area yang diberi label **Admin Platform Section (Restricted / Elevated Privileges)**, termasuk:

- Daftar persetujuan yang menunggu.
- Penugasan staf dan penjaga gerbang.
- Daftar staf.
- Log audit keamanan dan transaksi.
- Badge pembatasan hak akses.

Aturan desain:
- Tampilkan fitur berhak istimewa hanya kepada peran yang memiliki izin.
- Gunakan badge izin/akses untuk memperjelas batas kewenangan.
- Log audit perlu menyajikan informasi yang mudah ditelusuri, misalnya aktor, tindakan, waktu, dan hasil jika data tersebut tersedia.
- Jangan menganggap setiap elemen yang ditampilkan sebagai implementasi backend yang sudah berfungsi; kode yang diberikan terutama menunjukkan rancangan antarmuka.

## Komponen dan pola UI yang harus konsisten

### Tombol

- **Primary:** latar `primary` atau `primary-container`, teks putih, radius sedang, tinggi sekitar 44–48 px.
- **Secondary:** latar permukaan bertingkat dengan teks utama.
- **Accent:** amber untuk tindakan sekunder yang menonjol atau pemeriksaan cepat.
- **Disabled:** kontras lebih rendah tetapi label tetap terbaca; jangan hanya mengandalkan perubahan warna.
- Sertakan ikon bila mempercepat pemahaman, tanpa memenuhi tombol dengan dekorasi.

### Kartu destinasi

Urutan informasi yang disarankan: foto dan badge kuota → rating → lokasi → nama → fasilitas → rincian harga → kebijakan pembayaran → tombol aksi.

### Status dan badge

Gunakan label singkat dan konsisten. Contoh status yang terlihat pada rancangan: `Tersedia`, `Sisa Sedikit`, `PENUH`, `TIKET SIAP CHECK-IN`, `MENUNGGU BAYAR DI LOKASI`, `BAYAR LOKASI`, serta status kesalahan.

### Kalender kuota

- Tampilkan tujuh hari sebagai sel tanggal yang ringkas.
- Setiap sel berisi hari, tanggal, indikator warna, dan jumlah kuota atau label `PENUH`.
- Legenda harus menjelaskan status hijau, amber, dan merah.
- Hari terpilih perlu memiliki pembeda visual tambahan, bukan hanya warna.

### Notifikasi dan pesan sistem

- Peringatan penting menggunakan panel lembut dengan ikon dan judul.
- Pesan dapat ditutup bila sifatnya informatif dan tidak wajib dibaca.
- Pesan error harus menjelaskan masalah dan langkah berikutnya jika tersedia.
- Toast sukses tidak boleh menggantikan status transaksi permanen pada halaman.

## Interaksi dan perilaku

Saat membangun implementasi nyata, pastikan kontrol antarmuka tidak sekadar dekoratif:

- Pencarian menyaring daftar destinasi.
- Filter kategori dan tanggal memengaruhi hasil.
- Kalender memperlihatkan ketersediaan sesuai tanggal yang dipilih.
- Destinasi penuh tidak dapat dipesan.
- Tab tiket berpindah antara tiket aktif dan riwayat.
- QR/check-in memvalidasi booking dan mencegah penggunaan tiket dua kali.
- Input manual dapat digunakan bila scanner tidak tersedia.
- Pilihan metode pembayaran mengatur field yang relevan.
- Kalkulasi total dan kembalian harus akurat.
- Kontrol tutup jadwal dan batas kuota harus menyimpan perubahan melalui sistem yang berwenang.
- Akses fitur pengelola dan admin harus dikendalikan oleh otorisasi backend, bukan hanya dengan menyembunyikan elemen frontend.
- Kondisi loading, berhasil, kosong, error, offline, penuh, dan disabled perlu dirancang secara konsisten.

## Aksesibilitas dan penggunaan di lapangan

- Gunakan teks dengan kontras yang memadai.
- Beri label yang jelas pada tombol ikon, misalnya `aria-label`.
- Pastikan semua kontrol dapat digunakan dengan keyboard bila relevan.
- Jangan memakai warna sebagai satu-satunya penanda status.
- Sediakan ukuran target sentuh yang nyaman, terutama untuk check-in dan kasir.
- Gunakan teks bahasa Indonesia yang ringkas dan konsisten.
- Pertahankan keterbacaan di bawah sinar matahari dan pada layar ponsel.
- Hindari animasi yang mengganggu atau yang menjadi satu-satunya umpan balik.

## Aturan implementasi teknis dari kode sumber

- HTML menggunakan `lang="id"` dan viewport mobile dengan dukungan safe area.
- Styling memanfaatkan Tailwind CSS melalui CDN dan konfigurasi tema khusus.
- Font utama dimuat dari Google Fonts: Plus Jakarta Sans.
- Ikon dimuat melalui Google Fonts Material Symbols Outlined.
- Tema Tailwind menggunakan `darkMode: "class"`, tetapi rancangan yang ditampilkan menggunakan palet terang. Jangan mengklaim dark mode sudah selesai hanya karena konfigurasinya tersedia.
- Gunakan token warna, tipografi, radius, dan spacing secara konsisten.
- Hindari menyalin data contoh seperti tanggal, harga, jumlah kuota, rating, dan kode booking sebagai data produksi.
- Validasi input, autentikasi, otorisasi, penyimpanan transaksi, QR code, dan sinkronisasi offline membutuhkan implementasi aplikasi terpisah; tampilan HTML saja tidak menjaminnya.

## Alur kerja saat menggunakan skill ini

1. Identifikasi layar dan peran yang sedang dibuat: wisatawan, petugas check-in, kasir, pengelola, atau area admin terbatas.
2. Pertahankan struktur informasi dan token desain yang dijelaskan dalam dokumen ini.
3. Prioritaskan keterbacaan informasi operasional: tanggal, kuota, status, total pembayaran, dan kode booking.
4. Buat komponen dengan pola visual konsisten, responsif, dan dapat digunakan dengan sentuhan.
5. Rancang semua state penting, termasuk kosong, penuh, error, offline, sukses, dan disabled.
6. Pastikan setiap tombol dan kontrol memiliki perilaku nyata yang sesuai.
7. Periksa aksesibilitas, izin peran, serta validitas data sebelum menganggap fitur siap produksi.

## Instruksi singkat untuk AI desain/pengembang

> Rancang dan implementasikan antarmuka Terra & Tide Camp & Beach dengan mengikuti `camp-beach-ui-design`. Gunakan Plus Jakarta Sans, palet hijau hutan–amber–biru laut, latar terang, kartu bersudut membulat, bayangan halus, ikon Material Symbols Outlined, dan pendekatan mobile-first. Pertahankan pola layar wisatawan (katalog, kalender kuota, tiket QR), petugas (scanner/check-in dan kasir), pengelola (metrik kuota dan operasional), serta area admin terbatas (persetujuan, penugasan staf, dan audit log). Buat status dan interaksi yang jelas untuk kondisi tersedia, kuota menipis, penuh, belum bayar, berhasil, gagal, dan offline. Jangan menganggap data contoh sebagai data real-time atau tampilan sebagai bukti bahwa backend sudah berjalan. Terapkan autentikasi, otorisasi, validasi, dan penyimpanan data secara nyata pada lapisan aplikasi.
