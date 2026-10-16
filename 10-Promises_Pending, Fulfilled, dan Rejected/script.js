const janji = new Promise((resolve, reject) => {
    resolve("Jadwal berhasil dimuat!");
});

janji.then((hasil) => {
    console.log(hasil);
});