const janji = new Promise((resolve, reject) => {
    resolve("Jadwal berhasil dimuat!");
});

janji.then((hasil) => {
    console.log(hasil);
});

// Latihan
const dataMahasiswa = new Promise((resolve, reject) => {
    reject("Data mahasiswa gagal dimuat..");
});

dataMahasiswa
    .then((hasil)=>{
        console.log(hasil);
    })
    .catch((error)=>{
        console.log(error);
    });