import { getAllBooks, postBook } from "./firebaserequests.js";
import { showAllBooks } from "./render.js";

const form = document.querySelector('#bookForm');

async function loadBooks() {
    try {
        const books = await getAllBooks();
        showAllBooks(books);
    }
    catch (error) {
        console.log(error);
    }
}

form.addEventListener('submit', async event => {
    event.preventDefault();

    const newBook = {
        author: document.querySelector('#author').value,
        title: document.querySelector('#title').value,
    };

    try {
        await postBook(newBook);

        form.reset();

        await loadBooks();
    }
    catch (error) {
        console.log(error);
    }

});

await loadBooks();
