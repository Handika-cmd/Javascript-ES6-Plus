import { ambilJadwalDosen } from "./second-latihan-final.js";

async function tampilkanJadwalDosen(){
    try{
        const hasil = await ambilJadwalDosen();
        console.log("BERHASIL: ",hasil);
    }catch(error){
        console.log("GAGAL: ", error.message);
    };
}

tampilkanJadwalDosen();