setTimeout(()=>{
    console.log("Data berhasil dimuat");
}, 2000);


function unduhData(url, callback) {
  console.log(`Memulai unduh dari ${url}...`);
  setTimeout(() => {
    const data = { id: 1, nama: "Produk A" };
    callback(data);  // panggil callback dengan hasil
  }, 2000);
}

unduhData("https://api.example.com/produk", (hasil) => {
  console.log("Unduh selesai:", hasil);
});