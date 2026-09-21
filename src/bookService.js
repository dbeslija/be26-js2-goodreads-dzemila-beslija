import { getAllBooks, postBook } from './firebaserequests.js';
import { showAllBooks } from "./render.js";

export async function loadBooks() {
    try {
        const books = await getAllBooks();
        showAllBooks(books);
    }
    catch (error) {
        console.log(error);
    }
}

export async function createBook(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const newBook = {
        author: document.querySelector('#author').value,
        title: document.querySelector('#title').value,
        isRead: false,
        score: null,
    };

    try {
        await postBook(newBook);

        form.reset();

        await loadBooks();
    }
    catch (error) {
        console.log(error);
    }
}

