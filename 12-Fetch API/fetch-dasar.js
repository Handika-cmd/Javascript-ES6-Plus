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

async function ambilDataPokemon(){
    try{
        console.log("Mengambil data pokemon......");
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/Charizard");

        if(!response.ok){
            throw new Error("Gagal mengambil data pokemonnya");
        }

        const data = await response.json();

        console.log("Nama: ", data.name);
        console.log("Id: ", data.id);
        console.log("Tinggi: ", data.height);
        console.log("Berat: ", data.weight);
        console.log("Ketahanan: ",data.abilities.map(item => item.ability.name));
    }catch(err){
        console.log("Gagal: ",err.message);
    }
};

ambilDataPokemon();