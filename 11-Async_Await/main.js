// import { muatDataMahasiswa } from "./second.js";

// async function tampilkanDatamahasiswa(){
    
//     try{
//         const hasil = await muatDataMahasiswa();
//         console.log("BERHASIL: ", hasil)
//     }catch(error){
//         console.log("ERROR: ", error);
//     }
// }

// tampilkanDatamahasiswa();

// import { ambilNama } from "./second.js";
// async function tampilkanNama() {
//     const nama = await ambilNama();

//     console.log("Halo, " + nama);
// }

// tampilkanNama();

// import { ambilNilai } from "./second.js";
// async function tampilkanNilai() {
//     const nilai = await ambilNilai();

//     console.log(nilai + 50);
// }
// tampilkanNilai();

// async function ambilNilai() {
//     return 100;
// }

// console.log(ambilNilai());

import { muatJadwal } from "./second.js";

async function menampilkanJadwal(){
    try{
        const hasil = await muatJadwal();
        console.log("BERHASIL: ",hasil);
    }catch(error){
        console.log("ERROR: ", error);
    };
};

menampilkanJadwal();