import express from "express";
import { Request, Response } from "express";
import { todo } from "node:test";
import { readBooks } from "./utils/read-books.js";
import { Book } from "./utils/types.js";
import { isDataView } from "node:util/types";

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

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
