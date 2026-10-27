async function testAbort(){
    const controlle = new AbortController();
    setTimeout(()=>controlle.abort(), 1000);

    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {signal: controlle.signal});
        const data = await res.json();
        console.log("Berhasil: ", data.length);
    }catch(err){
        if(err.name === "AbortError") console.log("Batalkan");
        else console.log(err);
    }
}
testAbort();