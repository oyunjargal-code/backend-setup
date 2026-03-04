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
  // const { title, author } = req.body;

  res.status(200).send(books);
});

// server.get("/", (req: Request, res: Response) => {
//   res.send("hello");
// });

server.get("/books/:id", (req: Request, res: Response) => {
  const query = req.query;
  const { id } = req.params;
  const path = req.path;
  const result = req.baseUrl;
  console.log(query);
  console.log("id", id);
  console.log("result", result);

  res.status(200).send(books);
});

// server.get("/books/:id", (req: Request, res: Response) => {
//   const { id } = req.params;

//   const book = books.find((book) => String(book.id) === String(id));
//   console.log(book);
//   res.status(200).send(book);
// });

// server.post("/books", (req: Request, res: Response) => {
//   const { title, author } = req.body;

//   const newBookID = books.length + 1;

//   const newBook = { id: newBookID, title, author };

//   books.push(newBook);

//   console.log(books);

//   res.send(books);
// });

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// let books = [
//   {
//     id: 2,
//     title: "Nom1",
//     author: "Bat",
//   },
//   {
//     id: 1,
//     title: "Nom2",
//     author: "Bat",
//   },
// ];

// const updateBookId = 2;

// books = books.map((book) => {
//   if (book.id === updateBookId) {
//     const newBook = {
//       id: updateBookId,
//       title: "Garchig",
//       author: "Derem",
//     };
//     return newBook;
//     // update hiine}
//   } else {
//     //update hiihgui
//     return book;
//   }
// });

// console.log(updatedBooks);
