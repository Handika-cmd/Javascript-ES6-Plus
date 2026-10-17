// import { jadwalKuliah, tugas } from "./script.js";

// tugas
//     .then((hasil)=>{
//         console.log(hasil);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

import { tugasKuliah } from "./script.js";

tugasKuliah
    .then((hasil)=>{
        console.log(hasil);
    })
    .catch((error)=>{
        console.log(error);
    });

import { login } from "./script.js";

login
    .then((hasil)=>{
        console.log(hasil);

        return("Profil Mahasiswa berhasil dimuat")
    })
    .then((hasilProfil)=>{
        console.log(hasilProfil);
    })
    .catch((error)=>{
        console.log(error);
    });

import { jadwalKuliah } from "./script.js";

jadwalKuliah
    .then((hasil)=>{
        console.log(hasil);
    })
    .catch((error)=>{
        console.log(error);
    });