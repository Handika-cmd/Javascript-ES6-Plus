function ambilJadwalKuliah() {
    return new Promise((resolve, reject) => {
        const berhasil = true;

        setTimeout(() => {
            if (berhasil) {
                resolve("Senin, 08.00 - Pemrograman JavaScript");
            } else {
                reject(new Error("Gagal mengambil jadwal kuliah"));
            }
        }, 2000);
    });
}

export { ambilJadwalKuliah };