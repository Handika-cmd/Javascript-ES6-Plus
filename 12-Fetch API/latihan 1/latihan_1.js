// async function ambilDataPokemon(...namaPokemon){
    
//     for(const nama of namaPokemon){
//         try{
//             const daftarPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nama}`);
    
            // if(!daftarPokemon.ok){
            //     throw new Error("Gagal mengambil data Pokemon");
            // }
    
//             const data = await daftarPokemon.json();
    
//             console.log("Nama: ", data.name);
//             console.log("Id: ", data.id);
//             console.log("Berat: ", data.weight);
//             console.log("Tinggi: ", data.height);
//             console.log("Kemampuan: ", data.abilities.map((item)=> item.ability.name).join(","));
//         }catch(err){
//             console.log(`Gagal mengambil data pokemon: ${nama}`)
//         }
//     }
//     console.log("Mengambil data pokemon selesai");
// }
// ambilDataPokemon("pikachu", "salahnama123", "bulbasaur");

// async function ambilDataUsers(...namaUser){

//     for (const nama of namaUser){
//         try{
//             const daftarUsers = await fetch(`https://jsonplaceholder.typicode.com/users/${nama}`);

//             if(!daftarUsers.ok){
//                 throw new Error("Gagal mengambil data Users");
//             }

//             const data = await daftarUsers.json();
            
//             console.log("Nama: ", data.name);
//             console.log("Id: ", data.id);
//             console.log("Email: ", data.email);
//         }catch(err){
//             console.log(`Gagal mengambil data user: ${nama}`);
//         }
//     }
// }
// ambilDataUsers(1, "java", 3, 4 , 5)

function tunggu(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    });
};

async function ambilDataUsers(...namaUsers){

    for ( nama of namaUsers){
        console.log("Loading.....")
        await tunggu(2000);
        try{
            const daftarUsers = await fetch(`https://jsonplaceholder.typicode.com/users/${nama}`);
    
            if(!daftarUsers.ok){
                throw new Error("Gagal mengambil data users");
            }
    
            const data = await daftarUsers.json();
    
            console.log("Id: ", data.id);
            console.log("Nama: ", data.name);
            console.log("Email: ", data.email);
            console.log("Phone: ", data.phone)
            console.log("Alamat Lengkap: ", `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`);

        }catch(err){
            console.log(`Gagal mengambil data user: ${nama}`);
        }
    }
    console.log("Programan Mengambil data users BERHASIL");
    console.log("Terima kasih");
    console.log("Sampai jumpa lagi....")
}
ambilDataUsers(1, "java", 3);