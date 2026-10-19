import { ambilDataUser } from "./second.js";
// 2. Menggunakan async/await
async function jalankanApp() {
  console.log("Memulai proses...");
  
  try {
    // Menunggu sampai ambilDataUser() selesai
    const dataUser = await ambilDataUser();
    console.log("Data berhasil didapat:", dataUser);
  } catch (error) {
    // Menangkap error jika promise ditolak (reject)
    console.error("Terjadi kesalahan:", error);
  } finally {
    console.log("Proses selesai (baik sukses maupun gagal).");
  }
}

jalankanApp();