import { Books } from './books.js';

export function createBookCard(book) {
    const cardDiv = document.createElement('div');
    const bookTitle = document.createElement('p');
    const authorP = document.createElement('p');
    const readP = document.createElement('p');
    const scoreP = document.createElement('p');
    const delBtn = document.createElement('button');

    cardDiv.append(bookTitle, authorP, readP, scoreP, delBtn);

    bookTitle.innerText = book.getTitle();
    authorP.innerText = `By: ${book.getAuthor()}`;
    readP.innerText = book.getIsRead() ? 'Read' : 'Want to Read';

    scoreP.innerText = book.getScore() !== undefined
        ? '⭐'.repeat(book.getScore())
        : 'Not rated';

    delBtn.innerText = 'Remove book';

    delBtn.addEventListener('click', async () => {
        try {
            await book.deleteBook();
            cardDiv.remove();
        }
        catch (error) {
            console.log(error);
        }
    });

    return cardDiv;
}

export function showAllBooks(books) {
    const bookList = document.querySelector('#bookList');

    bookList.innerHTML = '';

    if (!books) {
        bookList.innerHTML = '<p>No books yet!</p>';
        return;
    }


    for (const id in books) {
        const bookData = books[id];

        const book = new Books(
            id,
            bookData.title,
            bookData.author,
            bookData.isRead,
            bookData.score,
        );

        const card = createBookCard(book);

        bookList.append(card);
    }
}
