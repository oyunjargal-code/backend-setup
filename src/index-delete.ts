import express from "express";
import { Request, Response } from "express";

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

server.get("/books/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const query = req.query;
  console.log(query);
  res.send("ok");

  // const foundedbook = books.find((book) => String(book.id) === id);

  // if (!foundedbook) {
  //   res.status(404).send({ message: "not found" });
  //   return;
  // }
  // const { title, author } = req.body;

  // books = books.map((book) => {
  //   if (String(book.id) === id) {
  //     const updatedBooks = {
  //       id: book.id,
  //       title: title,
  //       author: author,
  //     };
  //     return updatedBooks;
  //   } else {
  //     return book;
  //   }
});

// console.log(id);

// res.status(200).send(books);
// });

server.get("/books/:id", (req: Request, res: Response) => {
  const query = req.query;
  const { id } = req.params;
  console.log("query: ", query);
  res.send("ok");
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
