import fs from "node:fs/promises";
import { Book } from "./types.js";

export async function deleteBooks(id: number): Promise<Book[] | null> {
  try {
  } catch (err) {
    console.error(err);
    return null;
  }
}
