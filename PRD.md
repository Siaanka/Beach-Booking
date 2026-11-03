# Product Requirements Document (PRD)

## Camp & Beach Booking — Platform Reservasi Wisata Alam Kabupaten Tanggamus

MVP

Web responsif

Booking online

Bayar di lokasi

Versi dokumen: 1.0 (Draft) · Status: Draf kebutuhan produk · Wilayah awal: Kabupaten Tanggamus, Lampung

## Ringkasan produk

Camp & Beach Booking adalah platform berbasis web responsif yang membantu wisatawan menemukan destinasi wisata alam, melakukan reservasi, memilih fasilitas tambahan, dan memperoleh tiket digital. Di sisi lain, pengelola destinasi dapat mengelola informasi wisata, jadwal, kuota pengunjung, pemesanan, serta laporan transaksi melalui dashboard.

MVP menggunakan model reservasi online dengan pembayaran langsung di lokasi. Karena itu, sistem perlu membedakan reservasi yang berhasil dibuat, tiket yang telah divalidasi, pembayaran yang benar-benar diterima, dan transaksi yang masuk ke laporan pendapatan.

Produk juga dirancang untuk mendukung transparansi penerimaan. Namun, tidak semua transaksi wisata merupakan Pendapatan Asli Daerah (PAD). Pencatatan harus mengikuti pihak penerima yang sah, status kepemilikan atau pengelolaan destinasi, serta dasar hukum pungutan yang berlaku.

### Ringkasan keputusan produk

| Area                        | Keputusan yang telah disepakati                                            |
| --------------------------- | -------------------------------------------------------------------------- |
| Pengguna utama              | Wisatawan, pengelola destinasi, admin platform                             |
| Platform                    | Web responsif untuk ponsel dan komputer                                    |
| Reservasi                   | Pemesanan dilakukan secara online                                          |
| Pembayaran                  | Dilakukan langsung di lokasi                                               |
| Fitur MVP                   | Katalog, booking, kuota, QR tiket, dashboard, laporan, fasilitas dan paket |
| Kriteria keberhasilan utama | Booking berhasil, kuota akurat, tiket dapat diverifikasi                   |
| Lokasi pilot                | Belum ditentukan                                                           |
| Teknologi dan infrastruktur | Belum ditentukan                                                           |

## 1. Problem Statement

### 1.1 Masalah utama wisatawan

Wisatawan yang ingin berkunjung ke pantai, berkemah, atau mendaki gunung mungkin harus mencari informasi dari berbagai sumber. Informasi harga, fasilitas, jadwal, kapasitas, dan prosedur pemesanan belum tentu tersedia dalam format yang seragam.

Dampak yang perlu diatasi:

- Kesulitan membandingkan destinasi dan fasilitas.
- Ketidakpastian mengenai ketersediaan kuota.
- Risiko datang saat lokasi penuh atau sedang ditutup.
- Kesulitan menyimpan bukti reservasi dan menunjukkan tiket saat kedatangan.
- Kurangnya kejelasan mengenai harga tiket dan layanan tambahan.

### 1.2 Masalah pengelola destinasi

Pengelola destinasi dapat memiliki prosedur operasional berbeda-beda. Tanpa pencatatan terpusat, proses pemesanan berpotensi bergantung pada pesan pribadi, telepon, buku catatan, atau spreadsheet.

Permasalahan yang perlu divalidasi:

- Reservasi ganda pada tanggal atau slot yang sama.
- Kesulitan mengontrol kuota camping, tiket masuk, dan pendakian.
- Informasi fasilitas serta harga tidak diperbarui secara konsisten.
- Kesulitan memeriksa status reservasi dan tiket saat check-in.
- Laporan jumlah pengunjung, transaksi, dan penerimaan tidak tersusun secara konsisten.

### 1.3 Masalah pencatatan reservasi, kuota, dan transaksi

Sistem harus memisahkan tiga proses yang saling berkaitan, tetapi memiliki status berbeda:

1. Reservasi: apakah permintaan kunjungan telah tercatat dan dikonfirmasi.
2. Kapasitas: apakah kuota telah dialokasikan, digunakan, dilepaskan, atau dikoreksi.
3. Pembayaran dan penerimaan: apakah uang benar-benar diterima, oleh siapa, untuk transaksi apa, dan apakah sudah direkonsiliasi.

Pemisahan ini penting karena booking yang dikonfirmasi belum tentu sudah dibayar. Demikian pula, tiket yang valid belum tentu berarti pengunjung telah melakukan check-in.

### 1.4 Dampak terhadap wisata dan potensi penerimaan daerah

Jika implementasi berjalan baik, sistem berpotensi membantu:

- Mempermudah akses informasi dan reservasi wisata.
- Meningkatkan keteraturan pengelolaan kuota dan kunjungan.
- Mengurangi kesalahan pencatatan serta mempermudah pemeriksaan transaksi.
- Memberikan data operasional yang lebih baik untuk evaluasi destinasi.
- Mendukung pengawasan penerimaan yang menjadi hak pemerintah daerah, apabila destinasi, kewenangan, dan pungutannya memang memenuhi ketentuan.

Peningkatan PAD tidak boleh disimpulkan hanya dari kenaikan jumlah booking atau omzet. Penerimaan pemerintah harus diidentifikasi dan diverifikasi secara terpisah dari pendapatan swasta serta dampak ekonomi tidak langsung.

### 1.5 Bukti dan asumsi yang perlu divalidasi

| Jenis            | Pernyataan                                                    | Cara validasi                                      |
| ---------------- | ------------------------------------------------------------- | -------------------------------------------------- |
| Asumsi           | Informasi destinasi tersebar di berbagai kanal                | Wawancara wisatawan dan audit kanal informasi      |
| Asumsi           | Pengelola membutuhkan pencatatan kuota yang lebih terstruktur | Observasi proses reservasi dan wawancara pengelola |
| Asumsi           | Pencatatan manual dapat menimbulkan kesalahan                 | Audit sampel catatan booking dan transaksi         |
| Asumsi           | Tiket QR dapat mempercepat pemeriksaan masuk                  | Uji waktu check-in sebelum dan sesudah penggunaan  |
| Perlu dibuktikan | Platform meningkatkan jumlah booking                          | Bandingkan data sebelum dan sesudah pilot          |
| Perlu dibuktikan | Platform membantu meningkatkan PAD                            | Rekonsiliasi penerimaan yang sah dengan data resmi |

Belum tersedia data baseline dalam keputusan produk saat ini. Semua pernyataan di atas merupakan hipotesis produk, bukan klaim bahwa seluruh destinasi Tanggamus sudah mengalami masalah tersebut.

## 2. Target User dan Dua Persona

### Persona 1 — Wisatawan

[Tiketnya Gratis! Yakin Gak Mau ke Pantai Damas? Panorama Eksotis Tersembunyi di Trenggalek, Sunsetnya Itu Loh! - Pikiran Rakyat Surabaya](https://images.openai.com/static-rsc-4/nwaZuKae9oFfr-ilDWTVz3svt-WaRnUWz2CvIQN3IhjQ6-qZr94nxozvadpbzk0NEajyeDygny6C0MPOWz3oltBrJCyml7ll4-kVPOXBVPFL_z5efmIVixGg6HQ7OHmZATvkwl3y-ccifymsDKf_dJgxfR95fw2KQgLumghIkH4?purpose=inline)

### Wisatawan mandiri

Usia dan profil demografis: asumsi untuk riset awal

Merencanakan perjalanan bersama teman atau keluarga, menggunakan ponsel untuk mencari destinasi, dan ingin mengetahui ketersediaan sebelum berangkat.

Tujuan

- Menemukan pantai, lokasi camping, atau jalur pendakian yang sesuai.
- Mengetahui harga, fasilitas, jadwal, dan kuota.
- Memesan tiket atau fasilitas tambahan.
- Memperoleh bukti reservasi yang mudah ditunjukkan.

Kebutuhan

- Halaman destinasi yang informatif.
- Formulir pemesanan sederhana.
- Kode booking dan tiket digital.
- Informasi jelas tentang pembayaran di lokasi.

Hambatan

- Informasi harga dan jadwal tidak konsisten.
- Kuota tidak diketahui sebelum perjalanan.
- Sinyal internet dapat terbatas di destinasi.

Perilaku penggunaan

- Membuka platform melalui browser ponsel.
- Membandingkan beberapa destinasi.
- Menyimpan kode booking untuk ditunjukkan saat kedatangan.

### Persona 2 — Pengelola destinasi

[Pendakian Prau via Patak Banteng: Jarak Tempuh, Lokasi, dan Fasilitas](https://images.openai.com/static-rsc-4/ah0-kBA3azH-pMZWEDn5gKgrx4GbAYwbphRx1pcZHOIAWRdXT7GIRGJx2HMUnjbkGgX79gaZkodqrzx-3aOSVXn7MsqGFCjudcfep_Cwb3gPjwK4wGb80GRbIW2yRjEs2wmKk0EJPu4a75WU1zW1uoMpF4weBPKU6WQWJ51cvBw?purpose=inline)

### Pengelola operasional

Mewakili pengelola pemerintah, komunitas, kawasan, atau swasta sesuai kewenangan

Bertanggung jawab atas informasi destinasi, kapasitas kunjungan, reservasi, layanan tambahan, dan pencatatan transaksi di lokasi.

Tujuan

- Mengatur ketersediaan dan batas kapasitas.
- Memantau reservasi yang akan datang.
- Memvalidasi tiket dan mencatat pengunjung yang hadir.
- Melihat ringkasan transaksi dan laporan operasional.

Kebutuhan

- Dashboard dengan ringkasan booking dan kuota.
- Pengelolaan harga, fasilitas, dan slot kunjungan.
- Validasi QR serta pencatatan pembayaran di lokasi.
- Riwayat perubahan dan laporan yang dapat ditelusuri.

Hambatan

- Koneksi internet tidak selalu stabil.
- Petugas lapangan dapat memiliki kemampuan digital berbeda.
- Harga, kapasitas, dan tata cara pungutan bisa berbeda antar destinasi.

Perilaku penggunaan

- Mengelola data sebelum periode kunjungan.
- Memeriksa reservasi saat pengunjung datang.
- Mencatat penerimaan dan melakukan rekonsiliasi setelah operasional.

Catatan: Kedua persona di atas merupakan hipotesis awal untuk membantu desain UI/UX. Keduanya harus diuji melalui wawancara dengan pengguna nyata sebelum dijadikan profil final.

## 3. Goals dan Non-goals

### 3.1 Product goals

G-01 — Memudahkan penemuan destinasi

Wisatawan dapat mencari destinasi, melihat fasilitas, memahami harga, dan mengetahui ketersediaan dari satu platform.

G-02 — Membuat reservasi terkontrol

Booking terhubung dengan tanggal, slot kunjungan, kuota, jumlah pengunjung, dan layanan tambahan yang dipilih.

G-03 — Memastikan tiket dapat diverifikasi

Tiket digital memiliki kode unik dan tidak dapat digunakan berulang kali untuk check-in yang sama.

G-04 — Mempermudah operasional pengelola

Pengelola dapat mengatur destinasi, kuota, fasilitas, reservasi, dan melihat laporan yang relevan dengan kewenangannya.

G-05 — Mendukung transparansi transaksi

Sistem menyimpan nilai transaksi, status pembayaran, pihak penerima, serta jejak perubahan untuk mempermudah rekonsiliasi.

### 3.2 Non-goals MVP

Hal-hal berikut sengaja tidak menjadi kebutuhan wajib pada peluncuran pertama:

- Aplikasi Android atau iOS native.
- Pembayaran online melalui payment gateway.
- Pengembalian dana otomatis.
- Integrasi otomatis dengan sistem keuangan pemerintah.
- Penetapan atau pemungutan retribusi baru oleh platform.
- Perhitungan PAD otomatis tanpa data kewenangan dan dasar pungutan yang tervalidasi.
- Rekomendasi wisata berbasis AI.
- Sistem navigasi pendakian, pelacakan GPS, atau pemantauan keselamatan real-time.
- Marketplace terbuka bagi seluruh pelaku usaha tanpa proses persetujuan.
- Program loyalitas, poin, dan sistem ulasan kompleks.

Fitur tersebut dapat dipertimbangkan pada tahap berikutnya setelah kebutuhan, kesiapan operasional, dan manfaatnya terbukti.

### 3.3 Batasan PAD dan penerimaan usaha

Sistem wajib membedakan setidaknya:

| Jenis penerimaan                                  | Perlakuan sistem                                                                     |
| ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Pungutan yang sah menjadi hak pemerintah daerah   | Dicatat sebagai penerimaan pemerintah daerah sesuai dasar dan mekanisme yang berlaku |
| Pembayaran tiket atau jasa milik pengelola swasta | Dicatat sebagai penerimaan usaha atau pengelola yang berhak                          |
| Sewa fasilitas milik pihak lain                   | Dicatat berdasarkan pihak penerima dan kesepakatan pengelolaan                       |
| Penjualan paket atau produk UMKM                  | Dicatat sebagai transaksi komersial pelaku usaha                                     |
| Belanja wisatawan di luar platform                | Tidak dihitung sebagai penerimaan platform atau PAD hanya berdasarkan perkiraan      |

Sistem menyediakan pemisahan data dan pelaporan, tetapi tidak menggantikan proses penetapan kewenangan, pembukuan resmi, atau pelaporan keuangan pemerintah.

## 4. User Stories

Prioritas menggunakan metode MoSCoW:

- Must: wajib untuk MVP.
- Should: penting, tetapi bisa ditunda jika tidak menghalangi alur utama.
- Could: fitur tambahan.
- Won't now: tidak dikembangkan pada MVP.

### 4.1 Wisatawan

| ID     | User story                                                                                                                 | Prioritas |
| ------ | -------------------------------------------------------------------------------------------------------------------------- | --------- |
| US-001 | Sebagai wisatawan, saya ingin melihat daftar destinasi agar dapat menemukan tempat yang sesuai.                            | Must      |
| US-002 | Sebagai wisatawan, saya ingin melihat detail destinasi, fasilitas, dan harga agar dapat merencanakan kunjungan.            | Must      |
| US-003 | Sebagai wisatawan, saya ingin melihat kalender ketersediaan agar tidak memesan jadwal yang penuh.                          | Must      |
| US-004 | Sebagai wisatawan, saya ingin memilih tiket, jumlah pengunjung, dan tanggal agar dapat melakukan reservasi.                | Must      |
| US-005 | Sebagai wisatawan, saya ingin memilih fasilitas sewa atau paket tambahan agar kebutuhan perjalanan dapat dipesan bersama.  | Must      |
| US-006 | Sebagai wisatawan, saya ingin menerima kode booking dan tiket digital agar dapat menunjukkan bukti reservasi.              | Must      |
| US-007 | Sebagai wisatawan, saya ingin melihat status reservasi dan petunjuk pembayaran di lokasi agar memahami langkah berikutnya. | Must      |
| US-008 | Sebagai wisatawan, saya ingin membatalkan booking sesuai kebijakan agar dapat menangani perubahan rencana.                 | Should    |
| US-009 | Sebagai wisatawan, saya ingin menerima pengingat melalui email atau WhatsApp agar tidak melewatkan jadwal.                 | Could     |

### 4.2 Pengelola destinasi

| ID     | User story                                                                                                                     | Prioritas |
| ------ | ------------------------------------------------------------------------------------------------------------------------------ | --------- |
| US-010 | Sebagai pengelola, saya ingin mengelola profil destinasi agar informasi yang dilihat wisatawan tetap akurat.                   | Must      |
| US-011 | Sebagai pengelola, saya ingin mengatur jadwal dan kuota agar jumlah pemesanan tidak melebihi kapasitas.                        | Must      |
| US-012 | Sebagai pengelola, saya ingin mengatur harga tiket, fasilitas, dan paket agar wisatawan memperoleh informasi biaya yang jelas. | Must      |
| US-013 | Sebagai pengelola, saya ingin melihat daftar booking berdasarkan tanggal dan status agar dapat mempersiapkan operasional.      | Must      |
| US-014 | Sebagai petugas, saya ingin memvalidasi QR tiket agar tiket yang sama tidak digunakan berulang kali.                           | Must      |
| US-015 | Sebagai pengelola, saya ingin mencatat pembayaran di lokasi agar transaksi yang diterima masuk ke laporan.                     | Must      |
| US-016 | Sebagai pengelola, saya ingin melihat laporan booking, kunjungan, dan penerimaan agar dapat mengevaluasi operasional.          | Must      |
| US-017 | Sebagai pengelola, saya ingin melihat riwayat perubahan data penting agar kesalahan dapat ditelusuri.                          | Should    |
| US-018 | Sebagai pengelola, saya ingin menutup sementara jadwal saat kondisi tidak aman agar reservasi baru tidak diterima.             | Must      |

### 4.3 Administrator platform

| ID     | User story                                                                                                                           | Prioritas |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| US-019 | Sebagai admin, saya ingin mengelola akun dan peran agar akses sesuai kewenangan.                                                     | Must      |
| US-020 | Sebagai admin, saya ingin memverifikasi dan mengaktifkan destinasi agar katalog tidak memuat lokasi yang belum disetujui.            | Must      |
| US-021 | Sebagai admin, saya ingin mengelola penugasan pengelola pada destinasi agar data tidak dapat diubah oleh pihak yang tidak berwenang. | Must      |
| US-022 | Sebagai admin, saya ingin melihat ringkasan aktivitas platform agar dapat mengawasi operasional.                                     | Should    |
| US-023 | Sebagai admin, saya ingin memeriksa laporan yang bermasalah agar selisih pencatatan dapat ditindaklanjuti.                           | Should    |

## 5. Daftar Fitur: MVP, V2, dan Nanti

### 5.1 MVP — wajib untuk peluncuran awal

| Modul            | Fitur                                                | Hasil yang diharapkan                        |
| ---------------- | ---------------------------------------------------- | -------------------------------------------- |
| Katalog          | Daftar dan pencarian destinasi                       | Wisatawan menemukan destinasi aktif          |
| Detail destinasi | Foto, deskripsi, lokasi, fasilitas, harga, aturan    | Informasi wisata tersedia secara terstruktur |
| Ketersediaan     | Kalender, slot, kuota dan penutupan jadwal           | Ketersediaan dapat diperiksa sebelum booking |
| Reservasi        | Formulir, ringkasan harga, konfirmasi booking        | Booking tercatat dengan kode unik            |
| Tiket digital    | QR code dan kode tiket                               | Tiket dapat diverifikasi petugas             |
| Fasilitas        | Penyewaan fasilitas dan paket wisata                 | Layanan tambahan tercatat pada booking       |
| Dashboard        | Pengelolaan destinasi, harga, jadwal, booking        | Pengelola memiliki kontrol operasional       |
| Check-in         | Validasi tiket dan status penggunaan                 | Penggunaan tiket tercatat                    |
| Pembayaran       | Pencatatan pembayaran di lokasi                      | Status pembayaran terpisah dari booking      |
| Laporan          | Rekap booking, pembayaran, kunjungan, dan penerimaan | Data dapat ditelusuri berdasarkan periode    |
| Admin platform   | Akun, peran, destinasi, dan penugasan pengelola      | Tata kelola platform terkontrol              |

Batas MVP: tidak membutuhkan payment gateway. Pembayaran dilakukan di lokasi dan dicatat oleh petugas berwenang. Wisatawan harus memperoleh penjelasan bahwa booking tidak otomatis berarti pembayaran sudah lunas.

### 5.2 V2 — setelah MVP tervalidasi

- Pembayaran online melalui penyedia pembayaran yang sesuai.
- Proses pembatalan dan pengembalian dana yang lebih otomatis.
- Notifikasi WhatsApp atau email.
- Rekonsiliasi transaksi dan setoran dengan alur persetujuan.
- Pengelolaan banyak destinasi oleh satu organisasi.
- Ekspor laporan terstruktur dan penyaringan berdasarkan jenis penerimaan.
- Dukungan check-in terbatas ketika koneksi internet terputus.
- Integrasi dengan sistem resmi yang telah disetujui dan tersedia.

### 5.3 Nanti — pengembangan jangka panjang

- Aplikasi mobile native.
- Sistem rekomendasi destinasi berbasis preferensi.
- Program loyalitas dan promosi tersegmentasi.
- Integrasi dengan sistem reservasi nasional atau platform mitra.
- Analitik permintaan musiman dan perencanaan kapasitas.
- Pemantauan keselamatan wisata dan integrasi informasi cuaca.
- Dasbor analitik lintas destinasi dan analisis dampak ekonomi.
- Integrasi ke sistem keuangan pemerintah, jika terdapat kebutuhan, dasar kewenangan, dan antarmuka resmi.

Pengembangan V2 dan Nanti tidak boleh menunda peluncuran fitur inti yang sudah disepakati.

## 6. Functional Requirements Detail untuk MVP

Semua requirement berikut adalah spesifikasi usulan yang menerjemahkan keputusan produk menjadi perilaku sistem. Aturan yang belum disepakati secara bisnis ditandai sebagai pertanyaan terbuka pada Bagian 10.

### 6.1 FR-001 — Katalog destinasi

Must

Tujuan: menampilkan destinasi yang telah disetujui dan aktif.

- Aktor: wisatawan, admin platform.
- Prasyarat: destinasi memiliki data minimum dan status publikasi aktif.
- Input: kata kunci pencarian, jenis destinasi, dan filter yang tersedia.
- Output: daftar destinasi beserta ringkasan informasi.

Alur utama

1. Wisatawan membuka halaman katalog.
2. Sistem menampilkan destinasi aktif.
3. Wisatawan mencari atau memilih jenis destinasi.
4. Sistem menampilkan hasil yang cocok.
5. Wisatawan membuka halaman detail.

Aturan bisnis dan validasi

- Destinasi dengan status draft, ditolak, atau tidak aktif tidak ditampilkan pada katalog publik.
- Jenis destinasi dapat berupa pantai, camping, pendakian, atau kombinasi.
- Harga ditampilkan berdasarkan tarif yang berlaku dan waktu kunjungan yang relevan.
- Informasi yang belum tersedia tidak boleh ditampilkan sebagai fakta.

Acceptance criteria

- Given destinasi berstatus aktif, when wisatawan membuka katalog, then destinasi muncul.
- Given destinasi berstatus nonaktif, when katalog dibuka, then destinasi tidak muncul.
- Given pencarian tidak menemukan hasil, then sistem menampilkan pesan yang jelas dan opsi menghapus filter.

Kondisi gagal: jika data gagal dimuat, sistem menampilkan pesan bahwa katalog belum dapat diakses dan menyediakan tombol coba lagi.

### 6.2 FR-002 — Detail destinasi dan harga

Must

Tujuan: menyediakan informasi yang cukup sebelum wisatawan memesan.

- Aktor: wisatawan.
- Prasyarat: destinasi aktif.
- Input: destinasi yang dipilih dan tanggal kunjungan bila diperlukan.
- Output: deskripsi, foto, lokasi, fasilitas, aturan kunjungan, tarif, dan ketersediaan.

Alur utama

1. Wisatawan membuka detail destinasi.
2. Sistem menampilkan informasi umum dan fasilitas.
3. Wisatawan melihat harga tiket serta layanan tambahan.
4. Sistem menyediakan akses ke kalender ketersediaan dan formulir booking.

Aturan bisnis

- Tarif harus memiliki mata uang, satuan harga, periode berlaku, dan status aktif.
- Satuan harga harus jelas, misalnya per orang, per malam, per tenda, atau per unit.
- Harga yang ditampilkan harus sesuai dengan jadwal yang dipilih.
- Harga pada booking yang sudah dibuat menjadi snapshot transaksi dan tidak berubah ketika tarif baru diterapkan.

Acceptance criteria

- Informasi destinasi dan fasilitas yang tersedia dapat ditampilkan.
- Harga setiap item memiliki satuan yang jelas.
- Jika tarif belum ditetapkan, sistem tidak boleh mengizinkan booking berbayar untuk item tersebut.

Kondisi gagal: bila tarif atau informasi penting belum tersedia, sistem menjelaskan bahwa pemesanan belum dapat dilakukan.

### 6.3 FR-003 — Kalender ketersediaan dan kuota

Must

Tujuan: mengontrol kapasitas berdasarkan destinasi, tanggal, slot, dan jenis layanan.

- Aktor: wisatawan, pengelola.
- Prasyarat: destinasi memiliki jadwal dan kapasitas yang telah dikonfigurasi.
- Input: tanggal kunjungan, slot waktu atau malam, jenis layanan, jumlah pengunjung.
- Output: kapasitas total, kapasitas terpakai, dan sisa kapasitas.

Alur utama

1. Pengelola menetapkan jadwal dan kapasitas.
2. Wisatawan memilih tanggal dan layanan.
3. Sistem menghitung kapasitas yang masih dapat dipesan.
4. Wisatawan memilih jumlah yang diinginkan.
5. Sistem memvalidasi ulang ketersediaan saat booking disimpan.

Aturan bisnis

- Kapasitas tidak boleh negatif.
- Kapasitas terpakai harus memperhitungkan booking yang sudah mengalokasikan kuota sesuai aturan reservasi.
- Tiket masuk, slot camping, dan pendakian dapat memakai jenis kapasitas berbeda.
- Fasilitas sewa menggunakan kuota unit, bukan selalu kuota pengunjung.
- Jadwal yang ditutup tidak menerima booking baru.
- Pemeriksaan kuota dan alokasi harus dilakukan secara atomik untuk mencegah pemesanan berlebih.

Acceptance criteria

- Jika kapasitas tersisa cukup, sistem mengizinkan booking.
- Jika kapasitas kurang, sistem menolak booking dan menampilkan jumlah maksimum yang tersedia.
- Jika dua permintaan bersamaan memperebutkan kuota terakhir, hanya permintaan yang lolos transaksi alokasi yang berhasil.
- Perubahan kapasitas tidak boleh membuat kapasitas yang sudah terpakai menjadi terlampaui tanpa penanganan eksplisit.

Kondisi gagal: jika ketersediaan tidak dapat diperiksa, sistem tidak boleh mengonfirmasi booking secara spekulatif.

### 6.4 FR-004 — Pemesanan wisata

Must

Tujuan: membuat reservasi dengan informasi wisatawan, tanggal, kuota, dan rincian harga yang dapat ditelusuri.

- Aktor: wisatawan.
- Prasyarat: destinasi aktif, jadwal tersedia, dan tarif valid.
- Input: nama pemesan, kontak, tanggal, jumlah pengunjung, pilihan tiket, serta layanan tambahan.
- Output: kode booking, ringkasan biaya, status booking, dan instruksi pembayaran di lokasi.

Alur utama

1. Wisatawan memilih destinasi.
2. Wisatawan menentukan tanggal dan jumlah pengunjung.
3. Wisatawan memilih tiket atau layanan tambahan.
4. Sistem menampilkan ringkasan harga.
5. Wisatawan mengisi data pemesan dan menyetujui ketentuan.
6. Sistem memvalidasi data, tarif, jadwal, dan kuota.
7. Sistem membuat booking beserta item dan alokasi kapasitas dalam transaksi yang konsisten.
8. Sistem menghasilkan kode booking dan tiket digital apabila booking telah memenuhi aturan penerbitan tiket.
9. Sistem menampilkan instruksi pembayaran di lokasi.

Aturan bisnis

- Booking memiliki ID internal dan kode referensi yang unik.
- Jumlah pengunjung dan kuantitas setiap item harus berupa bilangan bulat positif.
- Sistem menghitung ulang total biaya di server, bukan mempercayai nilai total dari browser.
- Booking menyimpan snapshot harga, nama item, kuantitas, dan aturan yang berlaku saat pemesanan.
- Status pembayaran awal adalah `UNPAID`.
- Status booking dan status pembayaran disimpan terpisah.
- Pembuatan booking dan alokasi kuota harus berhasil bersama-sama atau dibatalkan bersama-sama.
- Kebutuhan akun wisatawan belum ditentukan; rancangan awal dapat menggunakan pemesanan tanpa akun dengan verifikasi kontak yang proporsional.

Acceptance criteria

- Booking valid menghasilkan kode unik dan ringkasan transaksi.
- Booking tidak valid tidak mengalokasikan kuota.
- Refresh atau pengiriman ulang permintaan yang sama tidak membuat booking ganda apabila menggunakan idempotency key.
- Total biaya pada ringkasan sesuai dengan item dan tarif yang disimpan.
- Wisatawan memperoleh informasi bahwa pembayaran dilakukan di lokasi.

Kondisi gagal: jika kuota berubah menjadi penuh sebelum transaksi tersimpan, sistem menolak booking dan meminta wisatawan memilih jumlah atau jadwal lain.

### 6.5 FR-005 — Fasilitas sewa dan paket wisata

Must

Tujuan: memungkinkan fasilitas dan paket ditambahkan ke reservasi.

- Aktor: wisatawan, pengelola.
- Prasyarat: fasilitas atau paket aktif dan tersedia pada jadwal yang dipilih.
- Input: jenis fasilitas, jumlah unit, durasi, atau paket.
- Output: item tambahan pada booking dan rincian harganya.

Alur utama

1. Pengelola membuat data fasilitas atau paket.
2. Pengelola menetapkan tarif dan kapasitas jika terbatas.
3. Wisatawan memilih fasilitas saat booking.
4. Sistem memeriksa ketersediaan dan menghitung biaya.
5. Item tambahan tersimpan bersama booking.

Aturan bisnis

- Fasilitas dapat memiliki kapasitas berupa jumlah unit.
- Paket dapat terdiri dari beberapa layanan, tetapi rincian komponen dan harga harus jelas.
- Sistem tidak mengalokasikan unit yang tidak tersedia.
- Setiap item mencatat pihak penyedia atau penerima yang berhak.
- Perubahan tarif tidak mengubah booking yang telah dikonfirmasi.

Acceptance criteria

- Item tambahan yang aktif dan tersedia dapat dipesan.
- Item yang tidak tersedia tidak dapat ditambahkan.
- Total booking mencakup biaya item tambahan secara benar.
- Laporan dapat membedakan tiket, sewa fasilitas, dan paket wisata.

Kondisi gagal: jika fasilitas habis sebelum booking tersimpan, sistem meminta wisatawan mengubah pilihan tanpa menghilangkan item lain yang masih valid.

### 6.6 FR-006 — Konfirmasi booking dan tiket digital

Must

Tujuan: memberikan bukti reservasi yang dapat diperiksa petugas.

- Aktor: wisatawan, pengelola, petugas check-in.
- Prasyarat: booking memenuhi kebijakan konfirmasi dan penerbitan tiket.
- Input: kode booking atau token QR.
- Output: bukti reservasi dan status tiket.

Alur utama

1. Sistem menyelesaikan transaksi booking.
2. Sistem menerbitkan kode booking dan tiket sesuai kebijakan.
3. Wisatawan membuka halaman konfirmasi.
4. Petugas memindai QR atau memasukkan kode tiket.
5. Sistem menampilkan status validasi yang aman untuk petugas.

Aturan bisnis

- QR berisi token acak atau token bertanda tangan, bukan data pribadi lengkap.
- Token harus sulit ditebak dan dapat dicabut jika tiket dibatalkan.
- Tiket memiliki status tersendiri, misalnya `VALID`, `USED`, `CANCELLED`, atau `EXPIRED`.
- QR yang sama tidak boleh menghasilkan dua check-in sukses untuk penggunaan yang sama.
- Penerbitan tiket tidak berarti pembayaran sudah lunas.
- Jika booking berisi beberapa pengunjung, kebijakan satu QR untuk seluruh booking atau satu QR per pengunjung masih perlu ditetapkan.

Acceptance criteria

- Tiket valid menampilkan status reservasi dan jadwal yang sesuai.
- Tiket yang telah digunakan ditolak pada percobaan penggunaan berikutnya.
- Tiket yang dibatalkan tidak dapat digunakan.
- Petugas tidak dapat melihat informasi pribadi yang tidak dibutuhkan.

Kondisi gagal: jika kode tidak dikenal, sistem menampilkan pesan “Tiket tidak ditemukan”. Jika koneksi terputus, validasi online tidak boleh dilaporkan berhasil tanpa konfirmasi server.

### 6.7 FR-007 — Dashboard pengelola

Must

Tujuan: menyediakan satu tempat untuk mengelola destinasi, jadwal, fasilitas, dan booking.

- Aktor: pengelola destinasi.
- Prasyarat: akun aktif dan memiliki penugasan pada destinasi.
- Input: perubahan profil, tarif, jadwal, kapasitas, fasilitas, dan status operasional.
- Output: data destinasi yang diperbarui serta ringkasan operasional.

Alur utama

1. Pengelola masuk ke dashboard.
2. Sistem hanya menampilkan destinasi yang menjadi kewenangannya.
3. Pengelola mengubah data yang diizinkan.
4. Sistem memvalidasi perubahan.
5. Sistem menyimpan perubahan dan mencatat audit untuk perubahan penting.

Aturan bisnis

- Pengelola tidak boleh mengubah destinasi pihak lain.
- Perubahan tarif memiliki waktu mulai berlaku.
- Penutupan jadwal tidak menghapus booking lama.
- Perubahan kapasitas yang berdampak pada booking aktif memerlukan prosedur penanganan.
- Pengelola tidak boleh menghapus jejak transaksi yang telah tercatat.

Acceptance criteria

- Akun pengelola hanya dapat mengakses destinasi yang ditugaskan.
- Perubahan valid tersimpan dan terlihat pada tampilan yang relevan.
- Tarif baru tidak mengubah snapshot harga booking lama.
- Jadwal yang ditutup tidak menerima booking baru.

Kondisi gagal: jika pengguna tidak berwenang, sistem menolak tindakan dan tidak mengubah data.

### 6.8 FR-008 — Pencatatan pembayaran di lokasi

Must

Tujuan: mencatat pembayaran yang benar-benar diterima tanpa mengasumsikan semua booking telah dibayar.

- Aktor: petugas kasir atau pengelola yang diberi izin.
- Prasyarat: booking dapat ditemukan dan pembayaran belum dinyatakan lunas.
- Input: booking, jumlah diterima, metode pembayaran, waktu, dan petugas pencatat.
- Output: catatan pembayaran dan perubahan status pembayaran.

Alur utama

1. Petugas mencari booking.
2. Sistem menampilkan total tagihan dan jumlah yang sudah dibayar.
3. Petugas menerima pembayaran di lokasi.
4. Petugas memasukkan jumlah dan metode pembayaran.
5. Sistem memvalidasi nilai dan menyimpan catatan transaksi.
6. Sistem memperbarui status pembayaran berdasarkan jumlah yang telah diterima.

Aturan bisnis

- Pembayaran hanya dicatat setelah uang benar-benar diterima.
- Status pembayaran dapat berupa `UNPAID`, `PARTIALLY_PAID`, `PAID`, atau `REFUNDED`.
- Jumlah pembayaran tidak boleh negatif.
- Pembayaran ganda tidak boleh dibuat hanya karena tombol ditekan dua kali.
- Pembayaran yang telah tercatat tidak boleh dihapus; koreksi dilakukan melalui pembalikan atau penyesuaian yang dapat diaudit.
- Metode pembayaran awal dapat berupa tunai atau metode lain yang disetujui pengelola.
- Identitas pihak penerima harus mengikuti penugasan dan aturan destinasi.

Acceptance criteria

- Booking belum dibayar tetap berstatus `UNPAID`.
- Pembayaran penuh mengubah status menjadi `PAID`.
- Pembayaran parsial, jika diizinkan, tidak dinyatakan lunas.
- Petugas tanpa izin tidak dapat mencatat atau mengoreksi pembayaran.
- Setiap pembayaran memiliki referensi unik dan jejak petugas pencatat.

Kondisi gagal: jika transaksi gagal tersimpan, sistem tidak boleh menampilkan status lunas berdasarkan input lokal saja.

### 6.9 FR-009 — Check-in dan validasi tiket

Must

Tujuan: memastikan tiket yang digunakan sesuai jadwal dan belum dipakai.

- Aktor: petugas check-in.
- Prasyarat: akun petugas aktif, tiket terdaftar, dan jadwal memenuhi ketentuan check-in.
- Input: QR atau kode tiket.
- Output: hasil validasi dan catatan check-in.

Alur utama

1. Petugas membuka halaman validasi.
2. Petugas memindai QR atau memasukkan kode.
3. Sistem memeriksa tiket, booking, jadwal, dan status penggunaan.
4. Jika valid, petugas mengonfirmasi check-in.
5. Sistem mencatat waktu, petugas, dan tiket yang digunakan.

Aturan bisnis

- Check-in harus memeriksa status tiket dan reservasi di server.
- Tiket yang sudah digunakan ditolak, kecuali kebijakan penggunaan sebagian memang disepakati dan diterapkan.
- Check-in tidak otomatis mengubah status pembayaran.
- Check-in dan perubahan status tiket harus berlangsung secara atomik.
- Kebijakan check-in lebih awal atau terlambat belum ditentukan.

Acceptance criteria

- Tiket valid dapat digunakan sesuai aturan jadwal.
- Percobaan check-in kedua untuk tiket yang sama ditolak.
- Petugas menerima alasan penolakan yang jelas.
- Setiap check-in sukses tercatat dalam riwayat.

Kondisi gagal: jika koneksi terputus, sistem meminta petugas mencoba kembali atau menggunakan prosedur manual yang ditetapkan. Validasi offline belum termasuk MVP.

### 6.10 FR-010 — Laporan transaksi dan pendapatan

Must

Tujuan: menyediakan laporan yang membedakan booking, pembayaran, kunjungan, dan pihak penerima.

- Aktor: pengelola, admin platform sesuai kewenangan.
- Prasyarat: data transaksi tersedia.
- Input: periode, destinasi, status booking, status pembayaran, dan kategori transaksi.
- Output: rekap serta rincian transaksi.

Alur utama

1. Pengguna membuka menu laporan.
2. Pengguna memilih periode dan filter.
3. Sistem menghitung jumlah booking, nilai transaksi, pembayaran, dan kunjungan.
4. Pengguna membuka rincian jika diperlukan.
5. Sistem menampilkan total berdasarkan kategori dan pihak penerima.

Aturan bisnis

- Total nilai booking tidak sama dengan total pembayaran yang diterima.
- Booking yang belum dibayar tidak boleh dimasukkan ke total kas diterima.
- Transaksi yang dibatalkan tetap dapat ditelusuri.
- Penerimaan pemerintah, penerimaan pengelola, dan transaksi pelaku usaha harus dibedakan.
- Pengembalian dana dan koreksi dicatat sebagai transaksi terpisah yang terkait dengan transaksi awal.
- Periode laporan harus menggunakan definisi tanggal yang jelas, misalnya waktu pembayaran diterima atau waktu booking dibuat.
- Angka PAD hanya dapat ditampilkan sebagai penerimaan terverifikasi jika klasifikasi, kewenangan, dan datanya mendukung.

Acceptance criteria

- Filter periode menghasilkan transaksi sesuai rentang yang dipilih.
- Total pembayaran sama dengan jumlah catatan pembayaran yang relevan setelah memperhitungkan koreksi dan pengembalian dana.
- Booking yang belum dibayar tidak dihitung sebagai penerimaan kas.
- Pengguna tidak dapat melihat laporan di luar kewenangannya.
- Transaksi yang sudah tercatat tidak hilang dari jejak audit.

Kondisi gagal: jika perhitungan laporan gagal, sistem tidak menampilkan nilai parsial seolah-olah sudah final.

### 6.11 FR-011 — Administrator dan kontrol akses

Must

Tujuan: menjaga keabsahan data destinasi serta membatasi tindakan berdasarkan peran.

- Aktor: admin platform, pengelola, petugas.
- Prasyarat: akun terdaftar dan aktif.
- Input: data akun, peran, status destinasi, dan penugasan pengelola.
- Output: akses yang sesuai dengan kewenangan.

Alur utama

1. Admin membuat atau mengaktifkan akun.
2. Admin menetapkan peran dan penugasan.
3. Pengelola mengajukan atau memperbarui data destinasi.
4. Admin memeriksa data dan menyetujui atau menolak publikasi.
5. Sistem menyimpan keputusan dan riwayat perubahan.

Aturan bisnis

- Hak akses diperiksa di backend untuk setiap tindakan penting.
- Pengelola hanya dapat mengakses destinasi yang ditugaskan.
- Petugas check-in tidak otomatis memperoleh hak mengubah harga atau laporan keuangan.
- Admin platform tidak otomatis memiliki kewenangan menetapkan pungutan atau mengubah hak penerimaan.
- Penugasan pengelola harus memiliki periode aktif atau status yang jelas.

Acceptance criteria

- Pengguna tanpa izin tidak dapat membaca atau mengubah data terlindungi.
- Destinasi belum disetujui tidak dipublikasikan.
- Perubahan peran dan penugasan tercatat dalam audit.
- Akun nonaktif tidak dapat melakukan tindakan operasional.

Kondisi gagal: sistem mengembalikan penolakan akses tanpa membocorkan data sensitif.

### 6.12 FR-012 — Penutupan destinasi dan jadwal

Must

Tujuan: mencegah reservasi baru ketika destinasi tidak dapat menerima pengunjung.

- Aktor: pengelola berwenang dan admin sesuai kebijakan.
- Prasyarat: destinasi atau jadwal tersedia untuk dikelola.
- Input: status penutupan, periode, alasan, dan petugas.
- Output: jadwal tidak tersedia untuk booking baru dan informasi penutupan.

Alur utama

1. Pengelola menerima informasi penutupan atau kondisi tidak aman.
2. Pengelola memilih destinasi atau jadwal terkait.
3. Pengelola memasukkan periode dan alasan.
4. Sistem memblokir booking baru untuk jadwal tersebut.
5. Sistem menampilkan booking terdampak kepada petugas berwenang.
6. Pengelola menindaklanjuti booking yang sudah ada sesuai kebijakan pembatalan atau penjadwalan ulang.

Aturan bisnis

- Penutupan tidak menghapus reservasi yang telah dibuat.
- Sistem tidak boleh menjanjikan refund otomatis karena mekanismenya belum ditentukan.
- Informasi penutupan harus ditampilkan pada halaman destinasi.
- Perubahan status memiliki catatan waktu dan pelaku tindakan.

Acceptance criteria

- Jadwal tertutup tidak dapat dipesan.
- Booking lama tetap tersedia untuk penanganan.
- Sistem menampilkan jumlah booking yang terdampak.
- Pembukaan kembali jadwal memerlukan tindakan pengguna berwenang.

Kondisi gagal: jika penutupan gagal tersimpan, sistem menampilkan status kesalahan dan tidak mengklaim bahwa jadwal telah diblokir.

### 6.13 Persyaratan nonfungsional MVP

| ID      | Kategori      | Persyaratan                                                                                                     |
| ------- | ------------- | --------------------------------------------------------------------------------------------------------------- |
| NFR-001 | Responsif     | Antarmuka dapat digunakan pada ponsel dan komputer tanpa kehilangan fungsi utama                                |
| NFR-002 | Keamanan      | Menggunakan HTTPS, autentikasi aman untuk akun operasional, dan pemeriksaan izin di backend                     |
| NFR-003 | Privasi       | Mengumpulkan data pribadi seminimal mungkin dan membatasi akses berdasarkan kebutuhan kerja                     |
| NFR-004 | Konsistensi   | Alokasi kuota, pembuatan booking, dan check-in memakai operasi atomik                                           |
| NFR-005 | Audit         | Perubahan penting pada harga, kapasitas, status booking, pembayaran, dan check-in dapat ditelusuri              |
| NFR-006 | Aksesibilitas | Formulir memiliki label jelas, pesan kesalahan mudah dipahami, dan navigasi dapat digunakan dengan keyboard     |
| NFR-007 | Kinerja       | Target waktu respons dan kapasitas pengguna harus ditetapkan setelah perkiraan beban dan infrastruktur tersedia |
| NFR-008 | Pemulihan     | Backup, pemulihan data, dan prosedur insiden harus ditetapkan sebelum produksi                                  |
| NFR-009 | Integritas    | Kode booking, kode pembayaran, dan identitas tiket tidak boleh ambigu atau mudah ditebak                        |
| NFR-010 | Kepatuhan     | Pengelolaan data pribadi dan catatan transaksi harus mengikuti ketentuan yang berlaku                           |

Angka target kinerja, retensi data, RPO/RTO, dan kapasitas pengguna masih menjadi keputusan teknis terbuka.

## 7. Sketsa Data Model

Model data berikut merupakan rancangan awal untuk mendukung booking, pengelolaan kuota, tiket digital, dan laporan. Tipe data ditulis secara netral agar dapat disesuaikan dengan database yang dipilih.

### 7.1 Entitas inti

Keterangan tipe: UUID = identifier unik; VARCHAR = teks pendek; TEXT = teks panjang; INTEGER = bilangan bulat; DECIMAL = nilai numerik presisi; BOOLEAN = ya/tidak; DATE = tanggal; TIMESTAMP = waktu; JSON = data terstruktur jika diperlukan.

### Users

Menyimpan akun wisatawan dan pengguna operasional jika akun diperlukan.

| Field         | Tipe              | Keterangan                   |
| ------------- | ----------------- | ---------------------------- |
| user_id       | UUID, PK          | Identitas akun               |
| full_name     | VARCHAR           | Nama pengguna                |
| email         | VARCHAR, nullable | Email jika digunakan         |
| phone         | VARCHAR, nullable | Nomor kontak                 |
| password_hash | VARCHAR, nullable | Hash sandi, bukan sandi asli |
| status        | VARCHAR           | ACTIVE / INACTIVE            |
| created_at    | TIMESTAMP         | Waktu dibuat                 |
| updated_at    | TIMESTAMP         | Waktu diperbarui             |

### Roles dan UserRoles

| Field     | Tipe            | Keterangan                         |
| --------- | --------------- | ---------------------------------- |
| role_id   | UUID, PK        | Identitas peran                    |
| role_name | VARCHAR, unique | ADMIN / MANAGER / STAFF / CUSTOMER |
| user_id   | UUID, FK        | Relasi ke Users                    |
| role_id   | UUID, FK        | Relasi ke Roles                    |

UserRoles menggunakan pasangan user_id dan role_id sebagai primary key komposit atau memiliki ID tersendiri dengan constraint unik.

### Destinations

| Field                | Tipe               | Keterangan                                                     |
| -------------------- | ------------------ | -------------------------------------------------------------- |
| destination_id       | UUID, PK           | Identitas destinasi                                            |
| name                 | VARCHAR            | Nama destinasi                                                 |
| slug                 | VARCHAR, unique    | URL ramah pengguna                                             |
| category             | VARCHAR            | BEACH / CAMPING / HIKING / OTHER                               |
| description          | TEXT               | Deskripsi                                                      |
| address              | TEXT               | Alamat atau petunjuk lokasi                                    |
| latitude / longitude | DECIMAL, nullable  | Koordinat jika tersedia                                        |
| manager_entity_id    | UUID, FK, nullable | Referensi organisasi pengelola jika model organisasi digunakan |
| status               | VARCHAR            | DRAFT / PENDING / ACTIVE / INACTIVE                            |
| created_at           | TIMESTAMP          | Waktu dibuat                                                   |

### DestinationManagers

| Field                    | Tipe                | Keterangan                |
| ------------------------ | ------------------- | ------------------------- |
| assignment_id            | UUID, PK            | Identitas penugasan       |
| destination_id           | UUID, FK            | Destinasi yang dikelola   |
| user_id                  | UUID, FK            | Pengelola yang ditugaskan |
| permission_level         | VARCHAR             | Hak pengelolaan           |
| valid_from / valid_until | TIMESTAMP, nullable | Masa berlaku penugasan    |
| status                   | VARCHAR             | ACTIVE / INACTIVE         |

Jika satu organisasi memiliki banyak pegawai, model Organizations dapat ditambahkan agar hak pengelolaan tidak bergantung pada satu akun saja.

### Facilities

| Field          | Tipe              | Keterangan                                       |
| -------------- | ----------------- | ------------------------------------------------ |
| facility_id    | UUID, PK          | Identitas fasilitas                              |
| destination_id | UUID, FK          | Destinasi terkait                                |
| name           | VARCHAR           | Nama fasilitas                                   |
| facility_type  | VARCHAR           | GAZEBO / TENT_SITE / EQUIPMENT / PACKAGE / OTHER |
| description    | TEXT              | Deskripsi                                        |
| capacity_unit  | VARCHAR           | UNIT / PERSON / NIGHT / OTHER                    |
| total_quantity | INTEGER, nullable | Jumlah unit tersedia                             |
| status         | VARCHAR           | ACTIVE / INACTIVE                                |

### PricingRules

| Field                    | Tipe               | Keterangan                                  |
| ------------------------ | ------------------ | ------------------------------------------- |
| pricing_rule_id          | UUID, PK           | Identitas tarif                             |
| destination_id           | UUID, FK           | Destinasi                                   |
| facility_id              | UUID, FK, nullable | Item terkait jika tarif fasilitas           |
| item_type                | VARCHAR            | ENTRY / CAMPING / HIKING / RENTAL / PACKAGE |
| unit_price               | DECIMAL            | Harga per satuan                            |
| currency                 | VARCHAR            | Kode mata uang, misalnya IDR                |
| unit_label               | VARCHAR            | Satuan harga                                |
| valid_from / valid_until | TIMESTAMP          | Masa berlaku                                |
| status                   | VARCHAR            | ACTIVE / INACTIVE                           |

Aturan tarif khusus, pajak, pungutan, dan komponen harga dapat memerlukan tabel terpisah setelah aturan bisnis disepakati.

### BookingSlots / Availability

| Field             | Tipe               | Keterangan                        |
| ----------------- | ------------------ | --------------------------------- |
| slot_id           | UUID, PK           | Identitas slot                    |
| destination_id    | UUID, FK           | Destinasi                         |
| facility_id       | UUID, FK, nullable | Fasilitas jika kuota per unit     |
| start_at / end_at | TIMESTAMP          | Waktu mulai dan akhir             |
| capacity_total    | INTEGER            | Kapasitas total                   |
| capacity_reserved | INTEGER            | Kuota teralokasi                  |
| status            | VARCHAR            | OPEN / CLOSED                     |
| version           | INTEGER            | Opsional untuk kontrol konkurensi |

Constraint: capacity_total tidak negatif dan capacity_reserved tidak boleh melampaui capacity_total.

### Bookings

| Field                   | Tipe               | Keterangan            |
| ----------------------- | ------------------ | --------------------- |
| booking_id              | UUID, PK           | Identitas booking     |
| booking_code            | VARCHAR, unique    | Kode referensi        |
| user_id                 | UUID, FK, nullable | Akun pemesan jika ada |
| destination_id          | UUID, FK           | Destinasi             |
| contact_name            | VARCHAR            | Nama pemesan          |
| contact_phone           | VARCHAR            | Kontak pemesan        |
| booking_status          | VARCHAR            | Status reservasi      |
| payment_status          | VARCHAR            | Status pembayaran     |
| visit_start / visit_end | TIMESTAMP          | Jadwal kunjungan      |
| subtotal / total_amount | DECIMAL            | Nilai transaksi       |
| currency                | VARCHAR            | Mata uang             |
| created_at              | TIMESTAMP          | Waktu booking dibuat  |

### BookingItems

| Field               | Tipe               | Keterangan                   |
| ------------------- | ------------------ | ---------------------------- |
| booking_item_id     | UUID, PK           | Identitas item               |
| booking_id          | UUID, FK           | Booking terkait              |
| facility_id         | UUID, FK, nullable | Referensi item katalog       |
| slot_id             | UUID, FK, nullable | Slot yang dipilih            |
| item_name_snapshot  | VARCHAR            | Nama item saat booking       |
| unit_price_snapshot | DECIMAL            | Harga saat booking           |
| quantity            | INTEGER            | Jumlah item                  |
| line_total          | DECIMAL            | Total item                   |
| provider_party_id   | UUID, FK, nullable | Pihak penerima atau penyedia |

Snapshot menjaga riwayat transaksi tetap benar ketika nama item atau harga katalog berubah.

### Payments

| Field             | Tipe               | Keterangan                         |
| ----------------- | ------------------ | ---------------------------------- |
| payment_id        | UUID, PK           | Identitas pembayaran               |
| booking_id        | UUID, FK           | Booking terkait                    |
| payment_reference | VARCHAR, unique    | Referensi pembayaran               |
| amount            | DECIMAL            | Nilai pembayaran                   |
| method            | VARCHAR            | CASH / OTHER                       |
| status            | VARCHAR            | RECORDED / REVERSED / REFUNDED     |
| received_by       | UUID, FK           | Petugas pencatat                   |
| received_at       | TIMESTAMP          | Waktu penerimaan                   |
| reversal_of       | UUID, FK, nullable | Referensi transaksi yang dikoreksi |

### DigitalTickets

| Field                    | Tipe            | Keterangan                         |
| ------------------------ | --------------- | ---------------------------------- |
| ticket_id                | UUID, PK        | Identitas tiket                    |
| booking_id               | UUID, FK        | Booking terkait                    |
| ticket_token_hash        | VARCHAR, unique | Hash token QR                      |
| ticket_status            | VARCHAR         | VALID / USED / CANCELLED / EXPIRED |
| valid_from / valid_until | TIMESTAMP       | Masa berlaku                       |
| created_at               | TIMESTAMP       | Waktu diterbitkan                  |

### CheckIns

| Field            | Tipe              | Keterangan           |
| ---------------- | ----------------- | -------------------- |
| checkin_id       | UUID, PK          | Identitas check-in   |
| ticket_id        | UUID, FK          | Tiket yang diperiksa |
| checked_by       | UUID, FK          | Petugas              |
| checked_at       | TIMESTAMP         | Waktu check-in       |
| result           | VARCHAR           | SUCCESS / REJECTED   |
| rejection_reason | VARCHAR, nullable | Alasan penolakan     |

Gunakan constraint yang sesuai agar satu tiket tidak memiliki lebih dari satu check-in sukses, kecuali model penggunaan sebagian secara eksplisit mendukungnya.

### RevenueTransactions

| Field                  | Tipe               | Keterangan                               |
| ---------------------- | ------------------ | ---------------------------------------- |
| revenue_transaction_id | UUID, PK           | Identitas pencatatan                     |
| payment_id             | UUID, FK, nullable | Pembayaran terkait                       |
| booking_id             | UUID, FK, nullable | Booking terkait                          |
| recipient_party_id     | UUID, FK           | Pihak penerima                           |
| revenue_type           | VARCHAR            | Kategori penerimaan                      |
| amount                 | DECIMAL            | Nilai yang dialokasikan                  |
| legal_basis_reference  | VARCHAR, nullable  | Referensi dasar kewenangan atau pungutan |
| reconciliation_status  | VARCHAR            | PENDING / MATCHED / DISPUTED             |
| recorded_at            | TIMESTAMP          | Waktu pencatatan                         |

Model penerimaan di atas adalah sketsa. Pencatatan setoran, kewajiban, pengembalian dana, dan transaksi akuntansi mungkin membutuhkan entitas tambahan. Referensi dasar hukum bukan pengganti verifikasi oleh pihak berwenang.

### 7.2 Entitas tambahan yang direkomendasikan

Untuk kebutuhan implementasi yang lebih kuat, tambahkan entitas berikut:

| Entitas                      | Fungsi                                                                        |
| ---------------------------- | ----------------------------------------------------------------------------- |
| Organizations                | Mewakili instansi, kelompok masyarakat, pengelola kawasan, atau badan usaha   |
| BookingStatusHistory         | Mencatat perubahan status reservasi                                           |
| AuditLogs                    | Menyimpan aktor, tindakan, waktu, dan perubahan data penting                  |
| IdempotencyKeys              | Mencegah pembuatan transaksi ganda akibat permintaan berulang                 |
| Refunds / PaymentAdjustments | Menyimpan pengembalian dana atau koreksi transaksi jika dibutuhkan            |
| SlotAllocations              | Melacak pemakaian kapasitas per booking dan item                              |
| DestinationClosures          | Menyimpan periode penutupan, alasan, dan booking terdampak                    |
| RevenueRecipients            | Mendefinisikan pihak penerima dan kategori penerimaan                         |
| PricingComponents            | Memisahkan komponen harga jika tarif terdiri dari beberapa pungutan atau jasa |

### 7.3 Relasi antartabel

\#chatgpt-mermaid-\_r_em\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_em\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_em\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_em\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_em\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_em\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_em\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_em\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_em\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_em\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_em\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_em\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_em\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_em\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_em\_ p{margin:0;}#chatgpt-mermaid-\_r_em\_ .entityBox{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_em\_ .relationshipLabelBox{fill:rgb(243, 243, 243);opacity:0.7;background-color:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_em\_ .relationshipLabelBox rect{opacity:0.5;}#chatgpt-mermaid-\_r_em\_ .labelBkg{background-color:rgba(243, 243, 243, 0.5);}#chatgpt-mermaid-\_r_em\_ .edgeLabel{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_em\_ .edgeLabel .label rect{fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_em\_ .edgeLabel .label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_em\_ .edgeLabel .label{fill:rgb(83, 154, 248);font-size:14px;}#chatgpt-mermaid-\_r_em\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_em\_ .edge-pattern-dashed{stroke-dasharray:8,8;}#chatgpt-mermaid-\_r_em\_ .node rect,#chatgpt-mermaid-\_r_em\_ .node circle,#chatgpt-mermaid-\_r_em\_ .node ellipse,#chatgpt-mermaid-\_r_em\_ .node polygon{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_em\_ .relationshipLine{stroke:rgb(143, 143, 143);stroke-width:1px;fill:none;}#chatgpt-mermaid-\_r_em\_ .marker{fill:none!important;stroke:rgb(143, 143, 143)!important;stroke-width:1;}#chatgpt-mermaid-\_r_em\_ [data-look=neo].labelBkg{background-color:rgba(243, 243, 243, 0.5);}#chatgpt-mermaid-\_r_em\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_em\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_em\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_em\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_em\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_em\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_em\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_em\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_em\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_em\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_em\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_em\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_em\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_em\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_em\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_em\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_em\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_em\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}USERSUSER_ROLESROLESDESTINATION_MANAGERSDESTINATIONSFACILITIESPRICING_RULESBOOKING_SLOTSBOOKINGSBOOKING_ITEMSPAYMENTSDIGITAL_TICKETSCHECK_INSREVENUE_TRANSACTIONShasassignedmanagesassignedoffersdefinesschedulescreatesreceivescontainsselectedallocatespaid_byissuescheckedrecordsrelates

Catatan desain database

- Gunakan foreign key untuk menjaga referensi antartabel.
- Gunakan constraint unik untuk kode booking, referensi pembayaran, dan token tiket.
- Gunakan transaksi database dan penguncian yang tepat saat alokasi kuota.
- Gunakan decimal dengan presisi yang sesuai untuk nilai uang, bukan floating point.
- Simpan waktu secara konsisten; zona waktu tampilan mengikuti lokasi destinasi.
- Terapkan penghapusan logis untuk data operasional penting, dan hindari menghapus riwayat keuangan.
- Tentukan kebijakan retensi serta penghapusan data pribadi sebelum produksi.

## 8. Edge Cases dan Failure States

| ID     | Skenario                                                            | Perilaku sistem yang diharapkan                                                                              | Tindakan pemulihan                                                                |
| ------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| EC-001 | Dua pengguna memesan kuota terakhir bersamaan                       | Transaksi alokasi kapasitas harus atomik; hanya booking yang berhasil mengalokasikan kuota yang dikonfirmasi | Pengguna yang kalah memilih jumlah atau jadwal lain                               |
| EC-002 | Kuota penuh                                                         | Booking ditolak dan kapasitas terbaru ditampilkan                                                            | Pilih jadwal lain                                                                 |
| EC-003 | Jadwal tidak tersedia                                               | Sistem menolak pemesanan untuk slot tertutup atau tidak valid                                                | Kembali ke kalender                                                               |
| EC-004 | Pembayaran gagal dicatat                                            | Status tidak berubah menjadi lunas jika penyimpanan transaksi gagal                                          | Petugas memeriksa catatan transaksi sebelum mencoba lagi                          |
| EC-005 | Pembayaran tertunda                                                 | Status tetap belum lunas atau dalam status menunggu sesuai mekanisme pencatatan                              | Verifikasi penerimaan aktual sebelum memperbarui status                           |
| EC-006 | Pembayaran tercatat dua kali                                        | Referensi unik dan idempotensi mencegah duplikasi akibat permintaan berulang                                 | Periksa riwayat dan lakukan pembalikan terkontrol jika ada transaksi ganda        |
| EC-007 | Pembatalan booking                                                  | Status berubah sesuai kebijakan; kuota dilepas hanya ketika pembatalan efektif                               | Tampilkan instruksi dan catat alasan pembatalan                                   |
| EC-008 | Pengembalian dana                                                   | Catat refund sebagai transaksi terkait, bukan menghapus pembayaran awal                                      | Verifikasi nominal dan persetujuan pihak berwenang                                |
| EC-009 | QR tidak valid                                                      | Check-in ditolak dan alasan ditampilkan tanpa membocorkan data pribadi                                       | Periksa kode booking melalui kanal petugas yang sah                               |
| EC-010 | QR digunakan berulang kali                                          | Check-in kedua ditolak                                                                                       | Periksa riwayat check-in jika pengunjung mengajukan keberatan                     |
| EC-011 | Harga berubah setelah booking                                       | Booking lama tetap menggunakan snapshot harga saat pemesanan                                                 | Tarif baru berlaku untuk booking berikutnya sesuai masa berlaku                   |
| EC-012 | Kapasitas dikurangi setelah booking dibuat                          | Sistem mencegah pengurangan yang membuat kapasitas terpakai melampaui batas tanpa prosedur penanganan        | Tinjau booking terdampak dan tentukan penyelesaian oleh pengelola                 |
| EC-013 | Destinasi ditutup karena cuaca atau keselamatan                     | Booking baru diblokir untuk jadwal terdampak                                                                 | Hubungi pemesan melalui kanal yang tersedia dan tindak lanjuti sesuai kebijakan   |
| EC-014 | Internet terputus saat check-in                                     | Status check-in tidak dianggap sukses sebelum server mengonfirmasi                                           | Coba kembali atau gunakan prosedur manual yang terdokumentasi                     |
| EC-015 | Pengguna mengakses booking milik orang lain                         | Backend menolak akses berdasarkan kepemilikan, peran, dan penugasan                                          | Catat aktivitas mencurigakan sesuai kebijakan keamanan                            |
| EC-016 | Penerimaan tidak cocok dengan transaksi atau setoran                | Laporan menandai selisih sebagai belum cocok atau disengketakan                                              | Lakukan rekonsiliasi dan catat koreksi dengan jejak audit                         |
| EC-017 | Booking berhasil dibuat, tetapi tiket gagal diterbitkan             | Sistem menjaga status booking dan kuota secara konsisten serta menandai proses yang perlu diperbaiki         | Proses ulang penerbitan tiket secara idempoten atau lakukan pembatalan terkontrol |
| EC-018 | Petugas salah mencatat pembayaran                                   | Sistem tidak mengizinkan penghapusan diam-diam atas transaksi tercatat                                       | Lakukan koreksi atau pembalikan dengan otorisasi dan audit                        |
| EC-019 | Pengelola mencoba mengubah destinasi milik pihak lain               | Permintaan ditolak di backend                                                                                | Admin memeriksa penugasan jika diperlukan                                         |
| EC-020 | Pengguna mengirim permintaan booking berulang karena koneksi lambat | Idempotency key mencegah pembuatan booking ganda untuk permintaan yang sama                                  | Sistem mengembalikan hasil transaksi yang sudah ada                               |

### 8.1 Kebijakan status yang disarankan

Agar pengembangan backend konsisten, status tiap objek harus terpisah.

Status booking

`PENDING` → `CONFIRMED` → `COMPLETED`

Status alternatif: `CANCELLED`, `REJECTED`, dan `EXPIRED`.

Transisi yang tersedia harus ditentukan berdasarkan kebijakan reservasi. Karena pembayaran dilakukan di lokasi, status `CONFIRMED` tidak berarti `PAID`.

Status pembayaran

`UNPAID` → `PARTIALLY_PAID` → `PAID`

Status tambahan: `REFUNDED`, `REVERSED`, atau `DISPUTED` bila relevan. Pembayaran parsial dan refund masih membutuhkan keputusan kebijakan bisnis.

Status tiket

`VALID` → `USED`

Status alternatif: `CANCELLED`, `EXPIRED`.

Perubahan status tiket harus memeriksa booking dan jadwal terkait.

Status rekonsiliasi

`PENDING` → `MATCHED`

Status alternatif: `DISPUTED`.

Status ini menunjukkan apakah data pencatatan cocok dengan bukti penerimaan atau setoran yang relevan, bukan sekadar apakah booking telah dibayar.

### 8.2 Keamanan dan keselamatan wisatawan

Persyaratan minimum sebelum produksi:

- Akses operasional menggunakan autentikasi yang aman.
- Data kontak hanya dapat diakses oleh pihak yang membutuhkan.
- QR tidak memuat nama lengkap, nomor telepon, atau informasi sensitif dalam bentuk terbuka.
- Sistem mencatat tindakan penting tanpa menyimpan sandi atau token rahasia dalam log.
- Penutupan akibat kondisi tidak aman harus dapat dilakukan oleh pihak yang berwenang.
- Informasi keselamatan, aturan kunjungan, dan perlengkapan wajib ditampilkan untuk destinasi yang membutuhkannya.
- Sistem tidak menjamin suatu jalur pendakian aman hanya karena jadwal tersedia.

## 9. Success Metrics

Metrik berikut mengukur keberhasilan produk tanpa mengasumsikan nilai awal atau menjanjikan kenaikan pendapatan tertentu.

### 9.1 Metrik utama

| Metrik                              | Definisi dan rumus                                                                                             | Sumber data                          |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Booking berhasil                    | Jumlah booking yang mencapai status konfirmasi dalam periode tertentu                                          | Bookings                             |
| Conversion rate                     | Jumlah booking terkonfirmasi ÷ sesi halaman destinasi yang relevan × 100%                                      | Analitik web dan Bookings            |
| Tingkat pembatalan                  | Booking yang dibatalkan ÷ booking yang telah dikonfirmasi × 100%                                               | Bookings dan riwayat status          |
| Akurasi kuota                       | Jumlah slot yang tidak mengalami ketidaksesuaian kapasitas ÷ seluruh slot yang diaudit × 100%                  | BookingSlots dan SlotAllocations     |
| Tingkat keberhasilan validasi tiket | Percobaan validasi yang menghasilkan keputusan benar ÷ seluruh percobaan validasi yang dapat dievaluasi × 100% | DigitalTickets dan CheckIns          |
| Waktu rata-rata check-in            | Total durasi proses check-in ÷ jumlah check-in yang berhasil diukur                                            | Log check-in atau observasi lapangan |

### 9.2 Metrik transaksi dan transparansi

| Metrik                                | Definisi dan rumus                                                                                                                  | Interpretasi                                                               |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Persentase pembayaran tere konsiliasi | Transaksi pembayaran yang cocok dengan bukti penerimaan ÷ transaksi yang wajib direkonsiliasi × 100%                                | Mengukur keterlacakan transaksi                                            |
| Selisih pencatatan dan setoran        | Nilai tercatat dikurangi nilai setoran atau penerimaan yang terverifikasi                                                           | Selisih harus dapat dijelaskan, bukan otomatis dianggap sebagai kehilangan |
| Kelengkapan data penerimaan           | Transaksi yang memiliki pihak penerima, kategori, nilai, dan referensi pendukung yang diwajibkan ÷ seluruh transaksi terkait × 100% | Mengukur kesiapan audit                                                    |
| Booking tanpa pembayaran yang jelas   | Booking yang sudah mencapai tahap operasional tetapi status pembayarannya tidak dapat ditentukan                                    | Menunjukkan masalah proses pencatatan                                      |
| Penerimaan pemerintah terverifikasi   | Total penerimaan yang sah menjadi hak pemerintah daerah dan telah diverifikasi                                                      | Digunakan hanya jika data dan kewenangannya tersedia                       |

### 9.3 Definisi operasional yang harus disepakati

Untuk mencegah perbedaan interpretasi antara pengembang dan pengelola:

- Booking berhasil: booking yang telah memenuhi aturan konfirmasi dan memiliki alokasi kuota yang sah.
- Kunjungan berhasil: pengunjung yang benar-benar melakukan check-in, bukan hanya memiliki booking.
- Pembayaran berhasil: pembayaran yang benar-benar diterima dan dicatat oleh pihak yang berwenang.
- Penerimaan terverifikasi: penerimaan yang dapat ditelusuri ke transaksi dan bukti penerimaan yang relevan.
- PAD: hanya penerimaan yang secara sah menjadi hak pemerintah daerah, bukan seluruh nilai transaksi platform.

### 9.4 Target awal dan evaluasi

Target angka belum ditetapkan karena belum tersedia baseline dan lokasi pilot.

Setelah pilot dipilih, tim perlu:

1. Mengukur kondisi awal proses reservasi, kuota, check-in, dan pencatatan penerimaan.
2. Menetapkan target per metrik bersama pemilik produk dan pengelola.
3. Menguji sistem pada periode operasional yang representatif.
4. Membandingkan hasil dengan baseline menggunakan definisi dan rentang waktu yang konsisten.
5. Memisahkan dampak software dari perubahan musim wisata, cuaca, harga, promosi, dan faktor eksternal lainnya.

Peningkatan PAD baru dapat dinilai jika tersedia data penerimaan resmi yang relevan serta dasar perbandingan yang memadai.

## 10. Open Questions

Pertanyaan terbuka berikut perlu ditindaklanjuti sebelum pengembangan dimulai. Saya membaginya berdasarkan dampaknya terhadap MVP agar tim tidak harus mengambil semua keputusan sekaligus.

### 10.1 Menghambat pengembangan MVP

P0

OQ-01 — Siapa yang berwenang mengelola destinasi?

Perlu ditentukan siapa yang dapat mengajukan, memverifikasi, menyetujui, dan mengelola setiap destinasi. Apakah pengelola merupakan individu, organisasi, instansi pemerintah, kelompok masyarakat, atau badan usaha?

Dampak: struktur akun, penugasan, hak akses, dan persetujuan destinasi.

P0

OQ-02 — Apakah booking langsung dikonfirmasi?

Apakah booking langsung terkonfirmasi ketika kuota tersedia, atau harus disetujui pengelola terlebih dahulu?

Dampak: status booking, alokasi kuota, penerbitan tiket, dan pembatalan otomatis.

P0

OQ-03 — Bagaimana aturan pembayaran di lokasi?

Apakah pembayaran harus lunas sebelum check-in, boleh dibayar sebagian, atau dilakukan setelah layanan diterima? Siapa yang berhak mencatat pembayaran?

Dampak: validasi tiket, status pembayaran, prosedur kasir, dan laporan.

P0

OQ-04 — Bagaimana aturan kuota setiap layanan?

Apakah kuota dihitung per orang, kendaraan, tenda, unit fasilitas, atau per slot waktu? Apakah booking berlaku untuk satu hari, beberapa hari, atau beberapa malam?

Dampak: skema database, algoritma kapasitas, harga, dan validasi pemesanan.

P0

OQ-05 — Bagaimana proses pembatalan dan penanganan penutupan?

Perlu ditentukan siapa yang boleh membatalkan, kapan kuota dilepas, dan bagaimana penanganan booking ketika destinasi ditutup karena cuaca atau keselamatan.

Dampak: transisi status, kapasitas, dan prosedur operasional.

P0

OQ-06 — Destinasi mana yang menjadi lokasi pilot?

Pilih destinasi yang memiliki pengelola bersedia berpartisipasi, data harga dan kapasitas yang tersedia, serta prosedur check-in yang dapat diuji.

Dampak: konfigurasi awal, pengujian, dan kriteria penerimaan pengguna.

### 10.2 Dapat diputuskan setelah rancangan awal

| ID    | Pertanyaan                                             | Keputusan yang diperlukan                                           |
| ----- | ------------------------------------------------------ | ------------------------------------------------------------------- |
| OQ-07 | Apakah wisatawan wajib membuat akun?                   | Booking tanpa akun, akun opsional, atau akun wajib                  |
| OQ-08 | Bagaimana tiket QR diterbitkan?                        | Satu QR per booking atau satu QR per pengunjung                     |
| OQ-09 | Bagaimana refund diproses?                             | Ketentuan, pihak yang menyetujui, dan mekanisme pencatatan          |
| OQ-10 | Siapa yang menerima uang?                              | Pihak penerima, metode penyetoran, dan mekanisme pertanggungjawaban |
| OQ-11 | Apakah transaksi dapat dibagi antar pihak?             | Aturan pembagian dan pencatatan setiap komponen penerimaan          |
| OQ-12 | Bagaimana pengelola memverifikasi harga dan fasilitas? | Prosedur persetujuan dan perubahan tarif                            |
| OQ-13 | Apakah dibutuhkan integrasi pemerintah?                | Sistem tujuan, kewenangan, dan ketersediaan API                     |
| OQ-14 | Teknologi apa yang digunakan?                          | Bahasa pemrograman, framework, database, hosting, dan anggaran      |
| OQ-15 | Berapa beban penggunaan yang ditargetkan?              | Estimasi pengguna, transaksi serentak, dan target kinerja           |
| OQ-16 | Bagaimana retensi data dan backup?                     | Durasi penyimpanan, jadwal backup, dan prosedur pemulihan           |

### 10.3 Batasan penting untuk keputusan PAD

Sebelum modul pelaporan penerimaan dipakai sebagai dasar pelaporan resmi, perlu dipastikan:

- Status dan pihak yang berwenang mengelola setiap destinasi.
- Dasar kewenangan untuk setiap jenis pungutan.
- Pihak yang secara sah berhak menerima uang.
- Bukti penerimaan dan mekanisme rekonsiliasi yang berlaku.
- Pemisahan antara penerimaan pemerintah, penerimaan usaha, dan transaksi pihak ketiga.

Untuk MVP, sistem dapat menyediakan pencatatan dan kategori penerimaan. Penetapan bahwa suatu nilai merupakan PAD tetap memerlukan validasi pihak berwenang.

## 11. Backlog Pengembangan dan Definition of Done

Bagian ini menerjemahkan PRD menjadi kelompok pekerjaan yang dapat digunakan untuk perencanaan sprint.

### 11.1 Urutan backlog

Sprint kelompok A — Fondasi sistem

Prasyarat: OQ-01 dan keputusan teknologi awal.

- Skema database dan migrasi.
- Autentikasi serta role-based access control.
- CRUD destinasi dan fasilitas.
- Penugasan pengelola.
- Audit perubahan penting.

Sprint kelompok B — Katalog dan kapasitas

Prasyarat: aturan kuota dan tarif disepakati.

- Katalog publik dan detail destinasi.
- Kalender ketersediaan.
- Konfigurasi kapasitas.
- Harga dan masa berlaku tarif.
- Penutupan jadwal.

Sprint kelompok C — Booking dan tiket

Prasyarat: aturan konfirmasi booking disepakati.

- Formulir reservasi.
- Validasi dan alokasi kuota atomik.
- Item booking dan snapshot harga.
- Kode booking dan QR tiket.
- Halaman konfirmasi.

Sprint kelompok D — Operasional dan transaksi

Prasyarat: prosedur check-in dan pencatatan pembayaran disepakati.

- Daftar booking pengelola.
- Validasi QR.
- Pencatatan check-in.
- Pencatatan pembayaran di lokasi.
- Status dan riwayat transaksi.

Sprint kelompok E — Laporan dan pengujian

Prasyarat: definisi laporan dan kategori penerimaan disepakati.

- Dashboard operasional.
- Laporan booking, pembayaran, dan kunjungan.
- Klasifikasi penerimaan.
- Pengujian keamanan dan konkurensi.
- UAT dengan pengelola pilot.

Urutan ini adalah usulan dependensi, bukan komitmen jumlah sprint atau estimasi durasi. Jadwal implementasi baru dapat ditentukan setelah ukuran tim, teknologi, dan kompleksitas integrasi diketahui.

### 11.2 Definition of Done

Fitur dianggap selesai apabila:

- Implementasi sesuai acceptance criteria pada requirement terkait.
- Validasi dilakukan di backend, bukan hanya pada antarmuka.
- Hak akses dan kepemilikan data telah diuji.
- Kondisi gagal dan pesan kesalahan sudah ditangani.
- Pengujian unit dan integrasi yang relevan lulus.
- Perubahan database memiliki migrasi yang dapat dijalankan.
- Transaksi booking dan kuota telah diuji untuk kondisi bersamaan.
- Perubahan status pembayaran dan check-in dapat diaudit.
- UI responsif dan formulir memiliki label yang jelas.
- Dokumentasi dan instruksi operasional diperbarui.

### 11.3 Kriteria penerimaan MVP secara keseluruhan

MVP siap diuji coba apabila semua kondisi berikut terpenuhi:

1. Wisatawan dapat menemukan destinasi aktif dan melihat informasi serta harga yang tersedia.
2. Wisatawan dapat melakukan booking dengan tanggal, kuota, dan item yang valid.
3. Sistem menolak pemesanan yang melebihi kapasitas, termasuk saat permintaan berlangsung bersamaan.
4. Booking menghasilkan kode referensi dan tiket digital sesuai aturan yang disepakati.
5. Petugas dapat memvalidasi tiket dan mencegah check-in ganda.
6. Pengelola dapat mengelola jadwal, fasilitas, harga, dan daftar booking sesuai hak aksesnya.
7. Pembayaran di lokasi dapat dicatat tanpa menyamakan status booking dengan status pembayaran.
8. Laporan menampilkan jumlah booking, pembayaran, kunjungan, dan kategori penerimaan secara terpisah.
9. Admin platform dapat mengelola akun, penugasan, dan persetujuan destinasi.
10. Pengujian keamanan, konsistensi kuota, dan UAT pilot lulus sesuai kriteria yang disepakati.

## 12. Penutup dan rekomendasi implementasi

Camp & Beach Booking sebaiknya dimulai sebagai platform reservasi web yang berfokus pada ketersediaan, booking, tiket digital, dan operasional pengelola. Pencatatan pembayaran di lokasi menjadi bagian penting karena transaksi tidak terjadi melalui payment gateway pada MVP.

Rekomendasi urutan prioritas adalah:

1. Selesaikan keputusan operasional yang menghambat booking dan pengelolaan kuota.
2. Tentukan destinasi pilot dan pihak pengelola yang bersedia menguji sistem.
3. Bangun katalog, fasilitas, tarif, kalender, dan reservasi.
4. Implementasikan validasi QR serta pencatatan pembayaran dan check-in.
5. Lengkapi dashboard dan laporan transaksi dengan jejak audit.
6. Uji sistem dengan skenario kapasitas penuh, permintaan serentak, pembatalan, dan ketidaksesuaian transaksi.
7. Evaluasi metrik pilot sebelum memperluas cakupan destinasi.

Prinsip utama produk: keberhasilan bukan sekadar banyaknya booking, tetapi tersedianya proses reservasi yang dapat diandalkan, kapasitas yang terkendali, tiket yang dapat diverifikasi, dan transaksi yang dapat dipertanggungjawabkan.

PRD ini dapat dijadikan dasar awal untuk menyusun desain UI/UX, ERD database, kontrak API, backlog pengembangan, dan test case. Sebelum implementasi final, keputusan P0 serta aturan operasional yang belum ditentukan perlu disepakati bersama pemilik produk dan pengelola destinasi.