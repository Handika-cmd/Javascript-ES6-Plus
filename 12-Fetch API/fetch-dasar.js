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

async function ambilDataPokemon1(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/Charizard");

        if(!response.ok){
            throw new Error("Gagal mengambil data pokemonnya");
        }

        const data = await response.json();

        console.log("Nama: ", data.name);
        console.log("Id: ", data.id);
        console.log("Tinggi: ", data.height);
        console.log("Berat: ", data.weight);
        console.log("Kemampuan: ",data.abilities.map((item) => item.ability.name));
    }catch(err){
        console.log("Gagal: ",err.message);
    }
};

ambilDataPokemon1();

// =================================================================================
// =================================================================================
// Latihan 2:

async function ambilDataPokemon(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if(!response.ok){
            throw new Error("Gagal mengambil data pokemon");
        }

        const data = await response.json();

        console.log("Nama: ", data.name);
        console.log("Id: ", data.id);
        console.log("Tinggi: ", data.height);
        console.log("Berat: ", data.weight);
        console.log("Kemampuan: ", data.abilities.map((item)=> item.ability.name));
    }catch(err){
        console.log("Gagal: ", err.message)
    }
}

ambilDataPokemon()

async function ambilDataPokemon2(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/Bulbasaur");

        if(!response.ok){
            throw new Error("Gagal mengambil data pokemon");
        }else{
            const data = await response.json();

            console.log("Nama: ", data.name);
            console.log("Id: ", data.id);
            console.log("Tinggi: ", data.height);
            console.log("Berat: ", data.weight);
            console.log("Kemampuan: ", data.abilities.map((item)=>item.ability.name));

        }
    }catch(err){
        console.log("ERROR: ", err.message);
    }
}
ambilDataPokemon2();