import fs from "node:fs/promises";
import { Book } from "./types.js";
import { readBooks } from "./read-books.js";

export async function writeBooks(newBook: Book) {
  try {
    const books = await readBooks();
    if (!books) throw new Error("Cannot find file");

    const updateData = [...books, newBook];

    const data = await fs.writeFile("./books.json", JSON.stringify(updateData));

    return data;
  } catch (err) {
    console.log(err);
  }
}
