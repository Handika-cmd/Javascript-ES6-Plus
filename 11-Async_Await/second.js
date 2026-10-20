
// ======================================
// Buat fungsi yang mengembalikan promise
function pesanKopi(namaMenu){
    return new Promise((resolve, reject)=>{
        console.log(`Barista Sedang meracik ${namaMenu}`);
        let waktu = 3000;
        setTimeout(()=>{
            if(namaMenu === "Latte" && waktu < 5000){
                resolve(`Kopi ${namaMenu} hangat siap disajikan.`);
            }else{
                reject(`Maaf kopi ${namaMenu} tidak tersedia saat ini`);
            }
        }, waktu);
    });
}
export {pesanKopi};

// function buatKopi(namaMenu){
//     return new Promise((resolve, reject) => {
//         console.log(`Barista sedang membuat kopi ${namaMenu}`);

//         let waktu = 3000;
//         setTimeout(()=>{
//             if(namaMenu ==="latte" && waktu <5000){
//                 resolve("Kopi hangat")
//             }
//         })
//     })
// }