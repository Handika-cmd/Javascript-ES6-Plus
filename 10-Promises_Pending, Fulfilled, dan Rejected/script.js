const janji = new Promise((resolve, reject) => {
    resolve("Jadwal berhasil dimuat!");
});

janji.then((hasil) => {
    console.log(hasil);
});

// Latihan
const dataMahasiswa = new Promise((resolve, reject)=>{
    reject("Data mahasiswa gagal dimuat..");
});

dataMahasiswa
    .catch((error)=>{
        console.log(error);
    });

// ===========================================================================================
// INGATTTT resolve() menandakan Promise berhasil, sedangkan .catch() hanya menangani kegagalan.
// =======================================================================================

// contoh
const dataJadwal = new Promise((resolve, reject)=>{
    const berhasil = false;

    if(berhasil){
        resolve("Jadwal BERHASIL dimuat");
    }else{
        reject("Jadwal GAGAL dimuat");
    }
});

dataJadwal
    .then((hasil)=>{
        console.log(hasil);
    })
    .catch((error)=>{
        console.log(error);
    });