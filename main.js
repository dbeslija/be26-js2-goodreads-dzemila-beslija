import { getAllBooks, postBook } from "./firebaserequests.js";
import { showAllBooks } from "./render.js";

const form = document.querySelector('#bookForm');
const bookList = document.querySelector('#bookList');
const isReadCheckBox = document.querySelector('#isRead');
const ratingInput = document.querySelector('#rating');


isReadCheckBox.addEventListener('change', () => {
    ratingInput.disabled = !isReadCheckBox.checked;
    if (!isReadCheckBox.checked) {
        ratingInput.value = ''
    }
}
)

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
        isRead: isReadCheckBox.checked,
        rating: isReadCheckBox.checked ? Number(ratingInput.value) : null
    };

    try {
        await postBook(newBook);

        form.reset();
        ratingInput.disabled = true;

        await loadBooks();
    }
    catch (error) {
        console.log(error);
    }

});

loadBooks();




/*
const newBook = {
    title: "Harry Potter och de vises sten",
    author: "J.K. Rowling",
    isRead: true,
    rating: 5
};

console.log(newBook);
*/






//klassen för en bok
//Patcha varje bok isRead
//Radera bok



//Appen
//Hämta alla böcker
//Lägga till en bok
//Rendera alla böcker   