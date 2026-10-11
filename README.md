 <div align="center">

  <img src="https://miro.medium.com/1*WSXKXYSzzMsQYiiipkH1Aw.jpeg" width="290" alt="JavaScript Logo" />

# JavaScript ES6+

**Modern JavaScript Learning Repository**

Mempelajari fitur modern JavaScript, memahami cara kerjanya, dan menerapkannya dalam pengembangan website interaktif.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square\&logo=javascript\&logoColor=000000)
![Learning](https://img.shields.io/badge/Status-Learning-2563EB?style=flat-square)
![Platform](https://img.shields.io/badge/Platform-Web-0F172A?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-64748B?style=flat-square)

</div>

---

## About This Repository

Repository ini merupakan catatan belajar JavaScript ES6+ yang berisi materi, contoh kode, latihan, eksperimen, dan mini project.

Fokus pembelajaran tidak hanya pada menghafal sintaks, tetapi juga memahami bagaimana JavaScript bekerja dan bagaimana fitur-fiturnya digunakan dalam pengembangan aplikasi web.

Setiap materi disusun agar bisa dipelajari secara bertahap, mulai dari konsep dasar hingga fitur JavaScript modern yang digunakan dalam proyek nyata.

## Learning Objectives

* Memahami sintaks dan fitur modern JavaScript.
* Menulis kode yang lebih terstruktur dan mudah dibaca.
* Memahami manipulasi data menggunakan Object dan Array.
* Membuat halaman web interaktif menggunakan DOM dan Events.
* Mengelola data menggunakan Web Storage dan JSON.
* Memahami asynchronous JavaScript dan komunikasi dengan API.
* Membangun fondasi untuk React, Node.js, dan Full Stack Development.

## Technology Stack

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="42" alt="JavaScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="42" alt="HTML5" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="42" alt="CSS3" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="42" alt="Git" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="42" alt="Visual Studio Code" />
</p>

| Technology       | Usage                           |
| ---------------- | ------------------------------- |
| JavaScript ES6+  | Bahasa pemrograman utama        |
| HTML5            | Struktur halaman web            |
| CSS3             | Styling dan tampilan            |
| Git & GitHub     | Version control dan dokumentasi |
| VS Code / Cursor | Code editor                     |

## Learning Roadmap

Materi dikelompokkan berdasarkan topik agar mudah ditelusuri dan dikembangkan seiring progres belajar.

| No. | Topic                   | Main Concepts                      | Status      |
| --: | ----------------------- | ---------------------------------- | ----------- |
|  01 | Variables & Data Types  | `let`, `const`, primitive types    | In Progress |
|  02 | Operators & Expressions | Arithmetic, comparison, logical    | Planned     |
|  03 | Conditional Statements  | `if`, `else`, `switch`             | Planned     |
|  04 | Loops                   | `for`, `while`, iteration          | Planned     |
|  05 | Functions & Scope       | Function, arrow function, scope    | In Progress |
|  06 | Arrays                  | Array operations and methods       | In Progress |
|  07 | Objects                 | Properties, methods, destructuring | In Progress |
|  08 | Modern Array Methods    | `map()`, `filter()`, `reduce()`    | Planned     |
|  09 | ES6+ Features           | Template literals, spread, rest    | Planned     |
|  10 | DOM Selection           | Selecting and traversing elements  | Planned     |
|  11 | DOM Manipulation        | Content, attributes, styles        | Planned     |
|  12 | Events                  | Event listeners and event objects  | Planned     |
|  13 | Web Storage             | `localStorage`, `sessionStorage`   | Planned     |
|  14 | JSON                    | `stringify()`, `parse()`           | In Progress |
|  15 | Fetch API               | HTTP requests and API data         | Planned     |
|  16 | Asynchronous JavaScript | Promise, `async`, `await`          | Planned     |
|  17 | Error Handling          | `try`, `catch`, debugging          | Planned     |
|  18 | Modules                 | `import`, `export`                 | Planned     |
|  19 | Mini Projects           | Combining learned concepts         | Planned     |
|  20 | Final Project           | Complete interactive application   | Planned     |

> Status pada tabel merupakan penanda yang bisa diperbarui sesuai progres belajar.

## Repository Structure

Contoh struktur folder yang dapat digunakan:

```text
Belajar-JavaScript/
|
├── README.md
|
├── 01-variables/
│   ├── index.html
│   ├── script.js
│   └── README.md
|
├── 02-data-types/
│   ├── index.html
│   ├── script.js
│   └── README.md
|
├── 03-conditionals/
│   ├── index.html
│   ├── script.js
│   └── README.md
|
├── 04-loops/
│   ├── index.html
│   ├── script.js
│   └── README.md
|
├── 05-functions/
│   ├── index.html
│   ├── script.js
│   └── README.md
|
├── ...
|
└── projects/
    ├── mini-project-01/
    └── final-project/
```

Nama dan jumlah folder dapat disesuaikan dengan materi yang benar-benar sudah dibuat.

## How I Learn

Setiap topik dipelajari melalui beberapa tahap:

1. **Understand** — memahami konsep dan kegunaan materi.
2. **Explore** — mencoba contoh kode secara langsung.
3. **Practice** — menyelesaikan latihan berdasarkan materi.
4. **Build** — menerapkan konsep dalam mini project.
5. **Review** — mencatat pemahaman, kesalahan, dan hal yang perlu dipelajari kembali.

## Example: Modern JavaScript

Contoh penggunaan `const`, arrow function, template literals, dan array method.

```javascript
const products = [
    { name: "Laptop", price: 7500000 },
    { name: "Mouse", price: 150000 },
    { name: "Keyboard", price: 350000 }
];

const affordableProducts = products.filter(
    product => product.price < 1000000
);

affordableProducts.forEach(product => {
    console.log(`${product.name}: Rp${product.price}`);
});
```

Contoh ini menunjukkan bagaimana fitur JavaScript modern dapat digunakan bersama untuk mengolah dan menampilkan data.

## Progress Tracker

Gunakan checklist berikut untuk memantau proses belajar.

* [ ] JavaScript Fundamentals
* [ ] Functions and Scope
* [ ] Arrays and Objects
* [ ] ES6+ Syntax
* [ ] DOM and Events
* [ ] Web Storage and JSON
* [ ] Fetch API
* [ ] Asynchronous JavaScript
* [ ] Modules and Error Handling
* [ ] Mini Projects
* [ ] Final Project

## Learning Log

Catatan perkembangan belajar akan diperbarui seiring materi dan latihan yang diselesaikan.

| Date | Topic                   | What I Learned | Next Step                 |
| ---- | ----------------------- | -------------- | ------------------------- |
| —    | JavaScript Fundamentals | —              | Continue practice         |
| —    | Arrays & Objects        | —              | Explore modern methods    |
| —    | JSON                    | —              | Practice with Web Storage |

## Projects

Bagian ini dapat diisi dengan proyek yang dibuat selama pembelajaran.

| Project         | Concepts                     | Status  |
| --------------- | ---------------------------- | ------- |
| Counter App     | DOM, Events                  | Planned |
| Login Form      | Forms, Conditions            | Planned |
| Theme Switcher  | DOM, Web Storage             | Planned |
| Product Catalog | Arrays, Objects, DOM         | Planned |
| Final Project   | Multiple JavaScript concepts | Planned |

## References

* [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [JavaScript.info](https://javascript.info/)
* [ECMAScript Specification](https://tc39.es/ecma262/)

## Author

**Handika Saputra**

Learning JavaScript, building modern websites, and developing practical projects as part of my journey toward Full Stack Development.

---

<div align="center">

**Learn the concepts. Practice the code. Build something useful.**

<sub>Continuously learning and improving, one concept at a time.</sub>

</div>
