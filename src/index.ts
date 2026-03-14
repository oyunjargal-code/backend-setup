import express from "express";
import { Request, Response } from "express";
import fs from "fs";
import { request } from "node:http";

const server = express();
const port = 3000;

server.use(express.json());

// Одоо read/write-г эдгээртэй холбоцгооё! 😊
// 🟢 1-р бодлого
// POST /save — Body-гээс name-г авч users.txt файлд нэмж бич. Дараа нь "Хадгалагдлаа!" гэж буцаа.
// Санамж:
// typescriptfs.appendFileSync("users.txt", name + "\n")

server.post("/save", (req: Request, res: Response) => {
  const name = req.body.name;

  fs.appendFileSync("users.txt", name + "\n");

  res.status(200).send("Хадгалагдлаа!");
});

// 🟡 2-р бодлого
// GET /users зам үүсгэ. users.txt файлыг уншаад бүх нэрийг JSON хэлбэрээр буцаа:
// json{
//   "users": ["Bat", "Dorj", "Sarnai"]
// }
// Санамж:
// typescript// файл уншаад мөр бүрийг array болгох
// const content = fs.readFileSync("users.txt", "utf-8")
// const users = content.split("\n")  // мөр бүрийг тусад нь хуваана

server.get("/users", (req: Request, res: Response) => {
  const content = fs.readFileSync("users.txt", "utf-8");

  const users = content.split("\n");

  res.status(200).json({ users: users });
});

// 🔴 3-р бодлого
// DELETE /user зам үүсгэ. Body-гээс name-г авч users.txt-ээс тэр нэрийг устгаад буцааж бич. Дараа нь "Устгагдлаа!" гэж буцаа.
// Санамж:
// typescript// 1. файл унш
// const content = fs.readFileSync("users.txt", "utf-8")

// 2. мөр бүрийг array болго
const users = content.split("\n");

// 3. тэр нэрийг array-гаас хас
const filtered = users.filter((user) => user !== name);

// 4. буцааж файлд бич
fs.writeFileSync("users.txt", filtered.join("\n"));

server.delete("/user", (req: Request, res: Response) => {
  const name = req.body.name;

  const content = fs.readFileSync("users.txt", "utf-8");

  const users = content.split("\n");

  const filtered = users.filter((user) => user !== name);

  fs.writeFileSync("users.txt", filtered.join("\n"));

  res.status(200).json({ message: "Ustgagdlaa", users: filtered });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
