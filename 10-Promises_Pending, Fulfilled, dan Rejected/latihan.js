import { tugas } from "./script.js";

tugas
    .then((hasil)=>{
        console.log(hasil);
    })
    .catch((error)=>{
        console.log(error);
    });

import { tugasKuliah } from "./script.js";

tugasKuliah
    .then((hasil)=>{
        console.log(hasil);
    })
    .catch((error)=>{
        console.log(error);
    });