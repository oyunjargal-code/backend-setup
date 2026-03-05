import fs from "node:fs/promises";
import { Book } from "./types.js";

export async function readBooks() {
  try {
    const data = await fs.readFile("./books.json", { encoding: "utf8" });

    const books: Book[] = JSON.parse(data);

    return books;
  } catch (err) {
    console.error(err);
  }
}
