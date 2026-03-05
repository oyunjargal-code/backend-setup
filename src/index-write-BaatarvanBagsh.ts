import express from "express";
import { Request, Response } from "express";
import { readBooks } from "./utils/read-books.js";
import { writeBooks } from "./utils/write-books.js";

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
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
