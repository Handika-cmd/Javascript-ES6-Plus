async function ambilDataPokemon(...namaPokemon){
    
    for(const nama of namaPokemon){
        try{
            const daftarPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nama}`);
    
            if(!daftarPokemon.ok){
                throw new Error("Gagal mengambil data Pokemon");
            }
    
            const data = await daftarPokemon.json();
    
            console.log("Nama: ", data.name);
            console.log("Id: ", data.id);
            console.log("Berat: ", data.weight);
            console.log("Tinggi: ", data.height);
            console.log("Kemampuan: ", data.abilities.map((item)=> item.ability.name).join(","));
        }catch(err){
            console.log(`Gagal mengambil data pokemon: ${nama}`)
        }
    }
    console.log("Mengambil data pokemon selesai");
}
ambilDataPokemon("pikachu", "salahnama123", "bulbasaur");

async function ambilDataUsers(...namaUser){

    for (const nama of namaUser){
        try{
            const daftarUsers = await fetch("https://jsonplaceholder.typicode.com/users")
        }
    }
}