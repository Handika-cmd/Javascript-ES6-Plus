import { pesanKopi } from "./second.js";

async function ambilPesanan(nama){
    try{
        const produk = await ambilPesanan(nama);
        console.log("Berhasil: ", produk);
    }catch{
        console.log("Gagal: ", err.message);
    }
}
ambilPesanan();