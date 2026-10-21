function muatDataMahasiswa(){
    return new Promise((resolve, reject)=>{

        const waktu = 5000;
        const berhasil = true;

        setTimeout(()=>{
            if(berhasil){
                resolve("Data mahasiswa berhasil dimuat");
            }else{
                reject("Data mahasiswa gagal dimuat");
            };
        }, waktu);
    });
}

export{muatDataMahasiswa};

// function ambilNama() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Handika");
//         }, 2000);
//     });
// }
// export{ambilNama};


// async function ambilNilai() {
//     return 100;
// }

// export{ambilNilai};