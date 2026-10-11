 <div align="center">

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="85" alt="JavaScript Logo" />

# Hari 2 — Arrow Functions

**Modern JavaScript (ES6+)**

Mengenal cara menulis function dengan sintaks yang lebih ringkas dan memahami perbedaannya dengan regular function.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square\&logo=javascript\&logoColor=000000)
![Topic](https://img.shields.io/badge/Topic-Arrow_Functions-2563EB?style=flat-square)
![Level](https://img.shields.io/badge/Level-Beginner-16A34A?style=flat-square)

</div>

---

## Learning Objectives

Setelah mempelajari materi ini, saya diharapkan mampu:

* Memahami pengertian Arrow Function.
* Menulis Arrow Function menggunakan sintaks `=>`.
* Mengubah regular function menjadi Arrow Function.
* Menggunakan parameter dan return value.
* Memahami implicit return.
* Mengenali perbedaan dasar Arrow Function dan regular function.
* Menggunakan Arrow Function pada `map()`, `filter()`, dan `forEach()`.

## 1. What Is an Arrow Function?

Arrow Function adalah cara menulis function yang diperkenalkan pada ECMAScript 2015 (ES6).

Dibandingkan regular function, sintaksnya lebih ringkas sehingga sering digunakan untuk callback dan pengolahan data.

Regular function:

```javascript
function greet() {
    return "Hello, JavaScript!";
}

console.log(greet());
```

Arrow Function:

```javascript
const greet = () => {
    return "Hello, JavaScript!";
};

console.log(greet());
```

Keduanya menghasilkan:

```text
Hello, JavaScript!
```

Perbedaannya terletak pada sintaks penulisannya.

## 2. Basic Syntax

Bentuk dasar Arrow Function:

```javascript
const functionName = (parameters) => {
    // code to execute
};
```

Keterangan:

| Syntax         | Fungsi                                   |
| -------------- | ---------------------------------------- |
| `const`        | Menyimpan function dalam sebuah variabel |
| `functionName` | Nama variabel yang menyimpan function    |
| `parameters`   | Data masukan untuk function              |
| `=>`           | Arrow Function syntax                    |
| `{}`           | Menampung blok kode function             |

Contoh:

```javascript
const sayHello = () => {
    console.log("Hello!");
};

sayHello();
```

Output:

```text
Hello!
```

## 3. Arrow Function Without Parameters

Jika function tidak membutuhkan parameter, gunakan tanda kurung kosong `()`.

```javascript
const showMessage = () => {
    console.log("Welcome to my website!");
};

showMessage();
```

Contoh lain:

```javascript
const getYear = () => {
    return 2026;
};

console.log(getYear());
```

Output:

```text
2026
```

## 4. Arrow Function With One Parameter

Jika hanya memiliki satu parameter, tanda kurung pada parameter boleh dihilangkan.

Menggunakan tanda kurung:

```javascript
const greet = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet("Dika"));
```

Tanpa tanda kurung:

```javascript
const greet = name => {
    return `Hello, ${name}!`;
};

console.log(greet("Dika"));
```

Output:

```text
Hello, Dika!
```

Keduanya valid. Untuk konsistensi dan kemudahan membaca, tanda kurung tetap bisa digunakan.

## 5. Arrow Function With Multiple Parameters

Jika memiliki dua parameter atau lebih, gunakan tanda kurung.

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 5));
```

Output:

```text
15
```

Contoh penerapan:

```javascript
const calculateTotal = (price, quantity) => {
    return price * quantity;
};

console.log(calculateTotal(15000, 3));
```

Output:

```text
45000
```

Pada contoh tersebut, function menerima harga dan jumlah barang, lalu mengembalikan total harganya.

## 6. Explicit Return

**Explicit return** berarti menuliskan kata kunci `return` secara langsung.

```javascript
const square = number => {
    return number * number;
};

console.log(square(5));
```

Output:

```text
25
```

Alurnya:

1. Function menerima nilai `5`.
2. Parameter `number` berisi `5`.
3. Function menghitung `number * number`.
4. `return` mengembalikan hasil `25`.

## 7. Implicit Return

Arrow Function dapat mengembalikan hasil secara otomatis jika isi function hanya berupa satu ekspresi dan ditulis tanpa blok `{}`.

Contoh:

```javascript
const square = number => number * number;

console.log(square(5));
```

Output:

```text
25
```

Contoh perbandingan:

```javascript
// Explicit return
const add = (a, b) => {
    return a + b;
};

// Implicit return
const addShort = (a, b) => a + b;

console.log(add(10, 5));
console.log(addShort(10, 5));
```

Output:

```text
15
15
```

Perhatikan bahwa implicit return tidak menggunakan `{}` untuk membungkus isi function.

Jika menggunakan `{}`, kamu perlu menulis `return` ketika ingin mengembalikan nilai.

## 8. Returning an Object

Jika ingin mengembalikan object menggunakan implicit return, bungkus object dengan tanda kurung `()`.

```javascript
const createUser = (name, age) => ({
    name: name,
    age: age
});

console.log(createUser("Dika", 22));
```

Output:

```javascript
{
    name: "Dika",
    age: 22
}
```

Tanda kurung tersebut membantu JavaScript mengenali bahwa ekspresi yang dikembalikan adalah sebuah object.

## 9. Arrow Functions in Array Methods

Arrow Function sering digunakan sebagai callback dalam Array Methods.

### forEach()

Menjalankan function untuk setiap elemen array.

```javascript
const names = ["Dika", "Ririn", "Budi"];

names.forEach(name => {
    console.log(name);
});
```

### map()

Menghasilkan array baru berdasarkan hasil pemrosesan setiap elemen.

```javascript
const prices = [10000, 20000, 30000];

const updatedPrices = prices.map(price => price * 2);

console.log(updatedPrices);
```

Output:

```text
[20000, 40000, 60000]
```

### filter()

Menghasilkan array baru yang hanya berisi elemen yang memenuhi kondisi.

```javascript
const ages = [15, 18, 22, 16, 25];

const adults = ages.filter(age => age >= 18);

console.log(adults);
```

Output:

```text
[18, 22, 25]
```

Ketiga contoh ini memperlihatkan bagaimana Arrow Function membuat callback lebih ringkas.

## 10. Regular Function vs Arrow Function

| Regular Function                                                      | Arrow Function                                         |
| --------------------------------------------------------------------- | ------------------------------------------------------ |
| Menggunakan `function`                                                | Menggunakan `=>`                                       |
| Bisa memiliki nama function secara langsung                           | Sering disimpan dalam variabel                         |
| Memiliki `this` sendiri, bergantung pada cara pemanggilan             | Tidak memiliki `this` sendiri                          |
| Bisa digunakan sebagai constructor dengan `new`, jika memenuhi syarat | Tidak dapat digunakan sebagai constructor              |
| Cocok untuk berbagai bentuk function                                  | Sering digunakan untuk callback dan function sederhana |

Contoh regular function:

```javascript
function multiply(a, b) {
    return a * b;
}
```

Contoh Arrow Function:

```javascript
const multiply = (a, b) => a * b;
```

Keduanya bisa menghasilkan perhitungan yang sama. Namun, keduanya **tidak selalu bisa saling menggantikan**, terutama terkait `this`, `arguments`, dan penggunaan sebagai constructor.

## 11. Important Notes

Hal-hal yang perlu diperhatikan:

* Arrow Function tetap dipanggil menggunakan `()`.
* Parameter menentukan data yang diterima function.
* `return` digunakan untuk mengembalikan nilai secara eksplisit.
* Implicit return berlaku untuk satu ekspresi tanpa blok `{}`.
* Arrow Function tidak mempunyai `this` sendiri.
* Arrow Function tidak dapat digunakan dengan `new`.
* Jangan mengubah semua regular function menjadi Arrow Function tanpa memahami konteksnya.

## 12. Practice

Buat file `script.js`, lalu kerjakan latihan berikut.

### Practice 1 — Greeting

Buat Arrow Function bernama `greet` yang menerima parameter `name` dan mengembalikan pesan sapaan.

Contoh hasil:

```text
Hello, Dika!
```

### Practice 2 — Addition

Buat Arrow Function bernama `add` yang menerima dua angka dan mengembalikan hasil penjumlahannya.

```javascript
console.log(add(10, 20));
// 30
```

### Practice 3 — Even or Odd

Buat Arrow Function bernama `isEven` yang menerima angka dan mengembalikan `true` jika genap serta `false` jika ganjil.

```javascript
console.log(isEven(4));
// true

console.log(isEven(7));
// false
```

### Practice 4 — Product Discount

Buat Arrow Function bernama `calculateDiscount` yang menerima `price` dan `discount`, lalu mengembalikan harga setelah diskon.

Contoh:

```javascript
console.log(calculateDiscount(100000, 20));
// 80000
```

### Practice 5 — Array Methods

Gunakan Arrow Function bersama `map()` untuk mengalikan semua angka dengan `2`.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Expected output:
// [2, 4, 6, 8, 10]
```

## 13. Mini Challenge — Product Catalog

Buat daftar produk sederhana menggunakan Array dan Arrow Function.

```javascript
const products = [
    { name: "Laptop", price: 7500000 },
    { name: "Mouse", price: 150000 },
    { name: "Keyboard", price: 350000 },
    { name: "Monitor", price: 1800000 }
];
```

Tugas:

* Buat function `getProductNames` untuk mengambil nama semua produk.
* Buat function `getAffordableProducts` untuk mengambil produk dengan harga di bawah Rp1.000.000.
* Buat function `calculatePriceWithTax` untuk menghitung harga setelah ditambah pajak 11%.
* Gunakan Arrow Function dan Array Methods jika sesuai.
* Tampilkan hasilnya menggunakan `console.log()`.

## 14. Cheat Sheet

| Kebutuhan            | Sintaks                                    |
| -------------------- | ------------------------------------------ |
| Tanpa parameter      | `() => expression`                         |
| Satu parameter       | `name => expression`                       |
| Banyak parameter     | `(a, b) => expression`                     |
| Dengan blok kode     | `(a, b) => { return a + b; }`              |
| Implicit return      | `(a, b) => a + b`                          |
| Mengembalikan object | `(name) => ({ name: name })`               |
| Callback `forEach()` | `array.forEach(item => console.log(item))` |
| Callback `map()`     | `array.map(item => item * 2)`              |
| Callback `filter()`  | `array.filter(item => item > 10)`          |

## 15. Learning Checklist

* [ ] Memahami pengertian Arrow Function.
* [ ] Memahami sintaks `=>`.
* [ ] Membuat Arrow Function tanpa parameter.
* [ ] Membuat Arrow Function dengan satu parameter.
* [ ] Membuat Arrow Function dengan beberapa parameter.
* [ ] Memahami explicit return.
* [ ] Memahami implicit return.
* [ ] Mengembalikan object dari Arrow Function.
* [ ] Menggunakan Arrow Function dalam Array Methods.
* [ ] Memahami perbedaan dasar dengan regular function.
* [ ] Menyelesaikan mini challenge Product Catalog.

## 16. Learning Log

**Hari 2 — Arrow Functions**

## **Yang Saya Pahami**

## **Hal yang Masih Membingungkan**

## **Kesalahan yang Saya Temukan**

## **Kesimpulan**

---

<div align="center">

**Next Topic: Template Literals**

<sub>JavaScript ES6+ — Learn, Practice, Build.</sub>

</div>
