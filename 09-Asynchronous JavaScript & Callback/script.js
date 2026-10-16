// console.log("Memuat data.........")

// setTimeout(()=>{
//     console.log("DataBerhasil dimuat")
// }, 1000);

// console.log("Data mulai")

// Latihan callback dasar
function tampilkanPesan(callback){
    console.log("Memuat data...");

    setTimeout(()=>{
        callback()
    }, 2000);
};

tampilkanPesan(()=>{
    console.log("data Selesai");
});