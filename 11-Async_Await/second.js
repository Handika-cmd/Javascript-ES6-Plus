export {buatKopi};

const buatKopi = new Promise((resolve, reject) => {
  let adaKopi = true; // Coba ubah nanti jadi false

  console.log("Barista sedang meracik kopi...");

  setTimeout(() => {
    if (adaKopi) {
      resolve("Kopi Latte hangat berhasil dibuat! ");
    } else {
      reject("Maaf, biji kopi habis!");
    }
  }, 2000);
});