export {ambilDataUser};
// 1. Membuat fungsi yang mengembalikan Promise (simulasi ambil data dari server)
const buatKopi = new Promise((resolve, reject)=>{
    let adaKopi = true;

    if(adaKopi){
        resolve("Kopi sudah jadi");
    }else{
        reject("Kopi tidak jadi dibuat");
    }
}, 2000);

buatKopi
    .then((hasil)=>{
        console.log(hasil);
    })
    .reject((error)=>{
        console.log(error);
    });