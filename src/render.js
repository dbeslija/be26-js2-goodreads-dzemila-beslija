import { Book } from './book.js';

export function showAllBooks(firebaseBookObject) {
    const bookList = document.querySelector('#bookList');
    bookList.innerHTML = '';

    if (!firebaseBookObject) {
        bookList.innerHTML = '<p>No books yet!</p>';
        return;
    }

    for (const id in firebaseBookObject) {
        const bookData = firebaseBookObject[id];

        const book = new Book(
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

function createBookCard(book) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('book-card');

    const bookTitle = document.createElement('p');
    bookTitle.innerText = book.getTitle();

    const authorP = document.createElement('p');
    authorP.innerText = `By: ${book.getAuthor()}`;

    const isReadLabel = document.createElement('label');
    isReadLabel.textContent = "Read";
    const isReadCheckbox = document.createElement('input');
    isReadCheckbox.type = "checkbox";
    isReadCheckbox.checked = book.getIsRead();
    isReadCheckbox.id = `isRead${book.getId()}`
    isReadLabel.htmlFor = isReadCheckbox.id;

    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');

    renderRatingStars(book, scoreContainer);

    scoreContainer.addEventListener('click', async (event) => {
        const score = event.target.dataset.score;
        await updateBookScore(book, scoreContainer, score);
    });

    isReadCheckbox.addEventListener('change', async () => {
        try {
            await book.toggleIsRead();
            renderRatingStars(book, scoreContainer);
        }
        catch (error) {
            console.log(error);
        }
    });

    const delBtn = document.createElement('button');
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

    cardDiv.append(bookTitle, authorP, isReadLabel, isReadCheckbox, scoreContainer, delBtn);

    return cardDiv;
}

function renderRatingStars(book, scoreContainer) {
    scoreContainer.innerHTML = '';
    if (!book.getIsRead()) {
        return;
    }

    const score = book.getScore();

    for (let starNumber = 1; starNumber <= 5; starNumber++) {
        const scoreDiv = document.createElement('div');

        scoreDiv.innerText = '★';
        scoreDiv.dataset.score = starNumber;

        if (starNumber <= score) {
            scoreDiv.classList.add('rated');
        } else {
            scoreDiv.classList.add('unrated');
        }

        scoreContainer.appendChild(scoreDiv);
    }
}

async function updateBookScore(book, scoreContainer, score) {
    if (!score) {
        return;
    }

    try {
        await book.setScore(score);
        renderRatingStars(book, scoreContainer);
    } catch (error) {
        console.log(error);
    }
}
