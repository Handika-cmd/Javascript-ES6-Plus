export {ambilDataUser};
// 1. Membuat fungsi yang mengembalikan Promise (simulasi ambil data dari server)
function ambilDataUser(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let berhasil = false;
            if(berhasil){
                resolve("Data berhasil dimuat");
            }else{
                reject("Gagal memuat database");
            }
        }, 2000);
    });
}