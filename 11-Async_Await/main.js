import { buatKopi} from "./second.js";
// 2. Menggunakan async/await
buatKopi
  .then((hasil) => {
    // Dijalankan jika resolve (sukses)
    console.log("Berhasil:", hasil);
  })
  .catch((error) => {
    // Dijalankan jika reject (gagal)
    console.log("Gagal:", error);
  });