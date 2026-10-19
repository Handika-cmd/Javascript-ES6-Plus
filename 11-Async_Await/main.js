import { buatKopi} from "./second.js";
// 2. Menggunakan async/await
async function pesanDanMinumKopi(){
    try{
        const hasil = await buatKopi;
        console.log("Berhasil: ", hasil);
    }catch (error){
        console.log("Gagal: ", error)
    }
};

pesanDanMinumKopi();


import { coba } from "./second.js";
async function cobalokal(){
    try{
        const waktu = await coba;
        console.log(waktu);
    }catch(error){
        console.log(error);
    }
}

cobalokal();