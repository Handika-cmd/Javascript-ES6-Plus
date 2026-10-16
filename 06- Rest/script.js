// =========================================================================================
// Rest Parameters (...)
const mataKuliah = (...mahasiswa) =>{
    console.log(mahasiswa);
}
mataKuliah("Bahasa Arab", "Bahasa Indonesia", "Bahasa Inggris");

// ============ Latihan
const jumlahNilai = (...nilai) =>{
    console.log(nilai);
};
jumlahNilai(80,90,85);