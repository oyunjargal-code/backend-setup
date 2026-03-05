import express from "express";
import fs from "fs";

// const server = express();
// const port = 3000;

// server.use(express.json());

// 🟢 Хялбар
// 1. hello.txt файл үүсгэж "Сайн байна уу!" гэж бич. Дараа нь тэр файлыг уншаад консолд хэвлэ.

// fs.writeFileSync("hello.txt", "Sain bna uu?");

// const content = fs.readFileSync("hello.txt", "utf-8");
// console.log(content);

// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// 2. name.txt файлд өөрийнхөө нэрийг бич. Дараа нь уншаад "Миний нэр: [нэр]" гэж консолд хэвлэ.

// fs.writeFileSync("name.txt", "Oyunjargal");

// const content = fs.readFileSync("name.txt", "utf-8");

// console.log(`Minii ner ${content}`);

// 3. numbers.txt файлд 1-ээс 5 хүртэлх тоог мөр бүрт нэг тоо бич.
// 1
// 2
// 3
// 4
// 5

// let content = "";

// for (let i = 1; i <= 5; i++) {
//   content += i + "\n";
//   console.log(i);
// }
// console.log("Bichej duuslaa");

// fs.writeFileSync("number.txt", content);

// 🟡 Дунд
// 4. counter.txt файлд 0 гэж бич. Программ ажиллах бүрт тоог +1 нэмээд буцааж бич. (Файлыг уншиж тоо авна, нэмнэ, буцааж бичнэ)

fs.writeFileSync("counter.txt", "0");
const readFile = Number(fs.readFileSync("counter.txt", "utf-8"));
console.log(readFile);
