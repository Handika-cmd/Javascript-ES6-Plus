Latihan LEVEL 1 — Tantangan mandiri

buat sendiri program untuk memuat data mahasiswa.

Ketentuannya:
1. Buat fungsi ambilDataMahasiswa() yang mengembalikan Promise.
2. Gunakan setTimeout() selama 2 detik.
3. Gunakan resolve("Data mahasiswa berhasil dimuat") jika berhasil.
4. Gunakan reject(new Error("Gagal memuat data mahasiswa")) jika gagal.
5. Buat fungsi async bernama tampilkanDataMahasiswa().
6. Gunakan await dan try...catch.
7. Tampilkan hasil sukses atau pesan error.

<!-- ============================================================================================== -->
<!-- ============================================================================================== -->

Latihan LEVEL 2 - Jadwal kuliah dengan kondisi berbeda
Sekarang kita tingkatkan sedikit kesulitannya. Kamu tidak perlu membuat proyek baru; cukup gunakan kode latihan yang sudah ada.

Misalnya, aplikasi perlu mengambil jadwal dan menampilkan pesan berbeda sesuai hasilnya.

Tugas kamu:
1. Ubah second.js sehingga ketika berhasil, Promise mengembalikan teks "Jadwal hari Senin berhasil dimuat".
2. Di main.js, tampilkan pesan "Memuat jadwal kuliah..." sebelum menjalankan await.
3. Jika berhasil, tampilkan hasil dari Promise.
4. Jika gagal, tampilkan pesan error menggunakan catch.