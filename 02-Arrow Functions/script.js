// const hitungTotalMenit = (jam) => {
//          return jam * 60;
// };
// console.log(hitungTotalMenit(3));

// const hitungTotalMenit = (jam) => jam * 60;
// console.log(hitungTotalMenit(3)); 

// // ===================================================================
// // Praktik
// // ==================================================================

// // 1. function biasa dan arrow function ekpresi satu baris
// function kaliDua (angka){
//     return angka * 2;
// }
// console.log(kaliDua(2));
// // Arrow function
// const tambahDua = (a) => a + 2;
// console.log(tambahDua(3));
// // ============================================================

// // 2. hitung luas Function biasa dan Arrow Function
// function hitungLuas(panjang, lebar) {
//     return panjang * lebar;
// }
// Arrow function
// const hitungLuas = (panjang, lebar) => {
//     const hasil = panjang * lebar;
//     return hasil;
// }
// console.log(hitungLuas(20, 20))
// Lebih ringkas
// const hitungLuas = (panjang, lebar) => panjang * lebar;
// console.log(hitungLuas(20, 20));

// const durasiJamKuliah = (jamMulai, JamSelesai) => (JamSelesai-jamMulai) * 60;
// console.log(durasiJamKuliah(8, 10));

const durasiJamKuliah = (jamMulai, jamSelesai) =>{
    durasiJam = jamSelesai - jamMulai;
    return durasiJam
}
console.log(`${durasiJamKuliah(7, 10)} jam`);

const durasiMenitKuliah = (jamMulai, jamSelesai) =>{
    durasiMenit = jamSelesai - jamMulai;
    return durasiMenit * 60;
}
console.log(`${durasiMenitKuliah(8, 10)} menit`)

// ==============================================================================
// CALLBACK 
const namaAku = (callback) => {
    console.log("Handika Saputra");
    callback();
};

namaAku(()=>{
    console.log("Selamat Belajar Javascriptnya");
});


const nilaiTerbaik = (nilai, callback)=>{
    callback(nilai);
};

nilaiTerbaik(90, (angka)=>{
    console.log("Nilai: ", angka);
});

// const tampilkanMataKuliah = (nama, callback) =>{
//     callback(nama);
// };

// tampilkanMataKuliah("Programman Web", (mataKuliah)=>{
//     console.log("Mata Kuliah Ditampilkan: ", mataKuliah);
// });

// const tombol = document.getElementById("tombolJadwal");

// tombol.addEventListener("click", (event) =>{
//     console.log(event.type); 
//     console.log(event.target.id);
// });

const tampilkanJadwal = (namaMataKuliah) =>{
    console.log("Jadwal Mata Kuliah: ", namaMataKuliah);
};

const tombol = document.getElementById("tombolJadwal");

tombol.addEventListener("click", ()=>{
    tampilkanJadwal("Senin, 12 Oktober 2026");
});

// const tampilkanPesan = () => {
//     console.log("Jadwal kuliah dibuka!");
// };

// tombol.addEventListener("click", tampilkanPesan());


const sapaPengguna = () => {
    console.log("Halo, Dika!");
};

tombol.addEventListener("click", sapaPengguna);
console.log("Halaman siap!");

// Membuat fungsi tampilkan Mata kuliah Fikih
const tampilkanFikih = (fikih)=>{
    console.log("Nama Mata Kuliah: ", fikih);
};

const tombol1 = document.getElementById("tombolFikih");

tombol1.addEventListener("click", ()=>{
    tampilkanFikih("Fikih");
});


const tampilkanDika = (dika) =>{
    console.log("Namaku: ", dika);
};

const tombol2 = document.getElementById("tombolFikih");

tombol2.addEventListener("click", ()=>{
    tampilkanDika("DIKA");
});