
const buatKopi = new Promise((resolve, reject) => {
    let adaKopi = false; // Coba ubah nanti jadi false
    
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



const coba = new Promise((resolve, reject)=>{
    const waktu = 3000;
    
    if(waktu < 5000){
        resolve("Berhasil mencoba");
    }else{
        reject("Silahkan coba lagi");
    }
});
export{coba};