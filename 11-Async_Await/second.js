export {ambilDataUser};
// 1. Membuat fungsi yang mengembalikan Promise (simulasi ambil data dari server)
function ambilDataUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sukses = false; // Coba ubah ke false untuk melihat penanganan error
      if (sukses) {
        resolve({ id: 1, nama: "Budi Santoso", role: "Frontend Developer" });
      } else {
        reject("Gagal terhubung ke database!");
      }
    }, 2000); // Simulasi delay 2 detik
  });
}