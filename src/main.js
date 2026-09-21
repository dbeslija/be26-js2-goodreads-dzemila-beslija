import { createBook, loadBooks } from "./bookservice.js";

const form = document.querySelector('#bookForm');
form.addEventListener('submit', createBook);

await loadBooks();