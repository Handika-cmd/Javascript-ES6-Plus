// const janji = new Promise((resolve, reject) => {
//     resolve("Jadwal berhasil dimuat!");
// });

// janji.then((hasil) => {
//     console.log(hasil);
// });

// // Latihan
// const dataMahasiswa = new Promise((resolve, reject)=>{
//     reject("Data mahasiswa gagal dimuat..");
// });

// dataMahasiswa
//     .catch((error)=>{
//         console.log(error);
//     });

// // ===========================================================================================
// // INGATTTT resolve() menandakan Promise berhasil, sedangkan .catch() hanya menangani kegagalan.
// // =======================================================================================

// // contoh
// const dataJadwal = new Promise((resolve, reject)=>{
//     const berhasil = true;

//     if(berhasil){
//         resolve("Jadwal BERHASIL dimuat");
//     }else{
//         reject("Jadwal GAGAL dimuat");
//     }
// });

// dataJadwal
//     .then((hasil)=>{
//         console.log(hasil);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });


export const tugasKuliah = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const berhasil = false;

        if(berhasil){
            resolve("Tugas kuliah berhasil dimuat");
        }else{
            reject("Tugas kuliah gagal dimuat");
        }
    }, 5000);
});

export {tugas}
 const tugas = new Promise((resolve, reject) => {
    const berhasil = true;

    console.log("Sedang memuat tugas");

    setTimeout(()=>{

        if(berhasil){
            resolve("Tugas berhasil disimpan");
        }else{
            reject("Tugas gagal disimpan");
        }
    }, 2000);
});

export const login = new Promise((resolve, reject)=>{
    const berhasil = false;

    setTimeout(()=>{
        if (berhasil){
            resolve("login berhasil");
        }else{
            reject("login gagal");
        }
    },5000);
});


export const jadwalKuliah = new Promise ((resolve, reject)=>{
    const berhasil = false;

    setTimeout(()=>{
        if(berhasil){
            resolve("Jadwal kuliah berhasil dimuat");
        }else{
            reject("Gagal memuat jadwal kuliah");
        }
    }, 2000);
});