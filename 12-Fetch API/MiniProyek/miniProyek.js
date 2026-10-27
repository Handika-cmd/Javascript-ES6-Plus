const btnMuat = document.getElementById("btnMuat");
const list = document.getElementById("list");
const detail = document.getElementById("detail");
const API = "https://jsonplaceholder.typicode.com";

// ==== 1. ambil semua users ===
async function load(){
    list.innerHTML = "memuat....";

    try{
        const res = await fetch(`${API}/users`);
        if(!res.ok){
            throw new Error("Gagal mengambil..");
        }

        const users = await res.json();
        renderData(users);
    }catch(err){
        list.innerHTML = `Error: ${err.message}`
    }

}