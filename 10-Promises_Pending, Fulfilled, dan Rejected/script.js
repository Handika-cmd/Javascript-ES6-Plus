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
    const berhasil = true;

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


const tugasKuliah = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const berhasil = false;

        if(berhasil){
            resolve("Tugas berhasil dimuat");
        }else{
            reject("Tugas gagal dimuat");
        }
    }, 2000);
});

tugasKuliah
    .then((hasil)=>{
        console.log(hasil);
    })
    .catch((error)=>{
        console.log(error);
    });

let count = 0;
const id = setInterval(()=>{
    count ++;
    console.log(`Ke ${count}`);
    if(count === 5) clearInterval(id);
}, 1000)
