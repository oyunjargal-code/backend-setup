import express from "express";
import { Request, Response } from "express";
import { title } from "node:process";

let books = [
  {
    id: 2,
    title: "Nom1",
    author: "Bat",
  },
  {
    id: 1,
    title: "Nom2",
    author: "Bat",
  },
];

const server = express();
const port = 3000;

server.use(express.json());

server.put("/books/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const { title, author } = req.body;

  books = books.map((book) => {
    if (String(book.id) === id) {
      const updatedBooks = {
        id: book.id,
        title: title,
        author: author,
      };
      return updatedBooks;
    } else {
      return book;
    }
  });

  console.log(id);

  res.status(200).send(books);
});

server.get("/books", (req: Request, res: Response) => {
  res.status(200).send(books);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
