// function muatDataMahasiswa(){
//     return new Promise((resolve, reject)=>{

//         const waktu = 5000;
//         const berhasil = true;

//         setTimeout(()=>{
//             if(berhasil){
//                 resolve("Data mahasiswa berhasil dimuat");
//             }else{
//                 reject("Data mahasiswa gagal dimuat");
//             };
//         }, waktu);
//     });
// }

// export{muatDataMahasiswa};

// // function ambilNama() {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve("Handika");
// //         }, 2000);
// //     });
// // }
// // export{ambilNama};


// async function ambilNilai() {
//     return 100;
// }

// export{ambilNilai};


// function muatJadwal(){
//     return new Promise((resolve, reject)=>{

//         const selesai = false;
//         setTimeout(()=>{
//             if(selesai){
//                 resolve("Berhasil memuat jadwal");
//             }else{
//                 reject("Gagal memuat jadwal");
//             }
//         }, 2000);
//     });
// }

// export{muatJadwal};

// =========================================
// PROGRAM MENGAMBIL DATA MAHASISWA
// ===================================
function ambilDataMahasiswa(){
    return new Promise((resolve, reject)=>{
        const berhasil = true;

        setTimeout(()=>{
            if(berhasil){
                resolve("Data mahasiswa berhasil dimuat");
            }else{
                reject(new Error("Gagal memuat data mahasiswa"));
            }
        }, 2000)
    })
};

export{ambilDataMahasiswa};

// ===================================
// PROGRAM JADWAL KULIAH
// ===================================
function ambilJadwalKuliah() {
    return new Promise((resolve, reject) => {
        const berhasil = false;

        setTimeout(() => {
            if (berhasil) {
                resolve("Senin, 08.00 - Pemrograman JavaScript");
            } else {
                reject(new Error("Gagal mengambil jadwal kuliah"));
            }
        }, 5000);
    });
}

export { ambilJadwalKuliah };