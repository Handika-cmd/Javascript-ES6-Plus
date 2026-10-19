// ==============================================
// Membuat layanan kopi
const buatKopi = new Promise((resolve, reject) => {
    let adaKopi = true; // Coba ubah nanti jadi false
    
    console.log("Barista sedang meracik kopi...");
    
    setTimeout(() => {
    if (adaKopi) {
        resolve("Kopi Latte hangat berhasil dibuat! ");
    } else {
        reject("Maaf, biji kopi habis!");
    }
}, 2000);
});
export {buatKopi};

// ====================================
// coba waktu
const coba = new Promise((resolve, reject)=>{
    const waktu = 1000;
    
    setTimeout(()=>{
        if(waktu < 5000){
            resolve("Berhasil mencoba");
        }else{
            reject("Silahkan coba lagi");
        }
    }, waktu);
});
export{coba};

// ======================================
// Buat fungsi yang mengembalikan promise
function pesanKopi(namaMenu){
    return new Promise((resolve, reject)=>{
        console.log(`Barista Sedang meracik ${namaMenu}`);

        setTimeout(()=>{
            if(namaMenu === "Latte"){
                resolve(`Kopi ${namaMenu} hangat siap disajikan.`);
            }else{
                reject(`Maaf kopi ${namaMenu} tidak tersedia saat ini`);
            }
        }, 2000);
    });
}
export {pesanKopi};