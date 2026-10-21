function ambilJadwalDosen(){
    return new Promise((resolve, reject) => {
        const berhasil = false;

        setTimeout(()=>{
            if(berhasil){
                resolve("Jadwal dosen berhasil dimuat");
            }else{
                reject(new Error("Gagal mengambil jadwal dosen."));
            }
        }, 2000);
    });
}

export{ambilJadwalDosen};