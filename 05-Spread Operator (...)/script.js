// Spreaad Operator Array
const semester1 = ["Fikih", "Akidah Akhlak"];
const semester2 = ["Bahasa Arab", "Ulumul Quran"];

const semuaMataKuliah = [...semester1, ...semester2];  //ini adalaha Spread Operator

const salinan =[...semester1, ...semester2];
salinan.push("Pendidikan Agama Islam")
console.log(semuaMataKuliah);
console.log(salinan);

// ================================================================
// Spread Operator Object
const mahasiswa ={
    nama: "handika",
    jurusan: "PAI"
};
// Gunakan Spread objectnya
const mahasiswaLengkap ={
    ...mahasiswa,
    semester: 3,
    angkatan: 40
};
console.log("Sebelum: ", mahasiswa);
console.log("Sesudah: ", mahasiswaLengkap);