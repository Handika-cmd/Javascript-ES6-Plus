// async function ambilDataPokemon(){
//     try{
//         console.log("Sedang mengambil data Pokemon.......")
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/Charizard");

//         if(!response.ok){
//             throw new Error("Gagal mengambil data Pokemon")
//         }

//         const data = await response.json();

//         console.log("Nama Pokemon: ", data.name);
//         console.log("Id: ", data.id);
//         console.log("Tinggi: ", data.height);
//         console.log("Berat: ", data.weight);
//         console.log("Ketahanan: ", data.abilities);

//     }catch(error){
//         console.log("Error: ", error.message);
//     };
// }

// ambilDataPokemon()

// ==================================================================================
// ==================================================================================
// Latihan 1

async function ambilDataPokemon1(...namaPokemon){

    for( const nama of namaPokemon){
        const daftarNamaPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nama}`);

        if(!daftarNamaPokemon.ok){
            throw new Error("Gagal mengambil data pokemon");
        }

        const data = await daftarNamaPokemon.json();

        console.log("Nama: ", data.name);
        console.log("Id: ", data.id);
        console.log("Tinggi: ", data.height);
        console.log("Berat: ", data.weight);
        console.log("Kemampuan: ", data.abilities.map((item)=> item.ability.name).join(", "));
        console.log(`Mengambil data pokemon ${data.name} Selesai.`);
    }
};
ambilDataPokemon1("pikachu", "charmander", "squirtle");

// =================================================================================
// =================================================================================
// Latihan 2: Konsep baru

// const namaPokemon = ["Pikachu", "Charmander", "Squirtle"];
// for (const nama of namaPokemon){
//     console.log(nama);
// }