import { ambilJadwalKuliah } from "./second-level-2.js";

async function tampilkanJadwal(){
    console.log("Sedang memuat....")
    try{
        const hasil = await ambilJadwalKuliah();
        console.log("BERHASIL: ", hasil);
    }catch(error){
        console.log("ERROR: ", error.message);
    }
}

tampilkanJadwal();