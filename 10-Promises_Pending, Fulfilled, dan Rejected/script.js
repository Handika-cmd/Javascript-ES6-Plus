const janji = new Promise((resolve, reject) => {
    resolve("Jadwal berhasil dimuat!");
});

janji.then((hasil) => {
    console.log(hasil);
});

// Latihan
const dataMahasiswa = new Promise((resolve, reject) => {
    resolve("Data mahasiswa berhasil dimuat..");
});

dataMahasiswa.then((hasil)=>{
    console.log(hasil);
});

const namaPacar = new Promise((resolve, reject)=>{
    resolve("Ririn Dwi Aryanti");
});

const namaCowoknya = new Promise((resolve, reject)=>{
    resolve("Handika Saputra");
});

namaPacar.then((nama)=>{
    console.log(nama);
});
namaCowoknya.then((nama)=>{
    console.log(nama);
});