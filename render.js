import { Books } from './books.js';

export function createBookCard(book) {
    const cardDiv = document.createElement('div');
    const bookTitle = document.createElement('p');
    const authorP = document.createElement('p');
    const readP = document.createElement('p');
    const ratingP = document.createElement('p');
    const delBtn = document.createElement('button');

    cardDiv.append(bookTitle, authorP, readP, ratingP, delBtn);

    bookTitle.innerText = book.getTitle();
    authorP.innerText = `By: ${book.getAuthor()}`;
    readP.innerText = book.getIsRead() ? 'Read' : 'Want to Read';
    

    if(book.getRating() !==null){
        ratingP.innerText= `Rate it: ${book.getRating()}/5`;

    }
    delBtn.innerText = 'Remove book';

    return cardDiv;
}

export function showAllBooks(books) {
    const bookList = document.querySelector('#bookList');

    bookList.innerHTML = '';

    for (const id in books) {
        const bookData = books[id];

        const book = new Books(
            id,
            bookData.title,
            bookData.author,
            bookData.isRead,
            bookData.rating
        );

        const card = createBookCard(book);

        bookList.append(card);
    }
}
