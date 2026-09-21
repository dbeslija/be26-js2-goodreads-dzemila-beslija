import { createBook, loadBooks } from "./bookService.js";

const form = document.querySelector('#bookForm');
form.addEventListener('submit', createBook);

await loadBooks();