const sapa = (nama ="Handika Saputra")=>{ //bagian parameter (nama = "Handika Saputra") adalah default
    console.log(`halo, ${nama}`)
};

sapa("Dika");
sapa();

// ========================================================================
// Latihan
const tampilkanProdi = (prodi = "PAI")=>{
    console.log(`Program Studi: ${prodi}`);
};
tampilkanProdi();
tampilkanProdi("Ekonomi Syariah");