// import express from "express";
// import fs from "fs";

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

// fs.writeFileSync("counter.txt", "0");
// const readFile = Number(fs.readFileSync("counter.txt", "utf-8"));
// console.log(readFile);
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
import express from "express";
import { Request, Response } from "express";
import { readBooks } from "./utils/read-books.js";
import { writeBooks } from "./utils/write-books.js";
import { deleteBooks } from "./utils/delete-books.js";

const server = express();
const port = 3000;

server.use(express.json());

server.get("/books", async (req: Request, res: Response) => {
  const books = await readBooks();

  if (!books) {
    return res.status(500).json({ message: "failed", books: [] });
  }

  res.status(200).json({ message: "success", books });
});

server.get("/books/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const books = await readBooks();

  if (!books) {
    return res.status(500).json({ message: "failed", books: [] });
  }

  const book = books.find((book) => String(book.id) === id);

  if (!book) {
    return res.status(500).json({ message: "book not found", book: null });
  }

  res.status(200).json({ message: "success", book });
});

server.post("/books", async (req: Request, res: Response) => {
  const { title, author } = req.body;

  const books = await readBooks();

  if (!books) {
    return res.send("failed");
  }
  const newBook = {
    id: new Date().getTime(),
    title,
    author,
  };

  const updatedBooks = [...books, newBook];
  await writeBooks(updatedBooks);

  res.status(200).json(updatedBooks);
});

server.delete("/books", async (req: Request, res: Response) => {
  const { title, author } = req.body;

  const books = await deleteBooks();

  if (!books) {
    return res.send("failed");
  }
  const newBook = {
    id: new Date().getTime(),
    title,
    author,
  };

  const updatedBooks = [...books, newBook];
  await writeBooks(updatedBooks);

  res.status(200).json(updatedBooks);
});

// server.put("/books", async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const { title, author } = req.body;
// });

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
