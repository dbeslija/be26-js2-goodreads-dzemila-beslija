import { getAllBooks, postBook } from "./firebaserequests.js";

const form = document.querySelector('form');
form.addEventListener('submit', event =>{
    event.preventDefault();

    const newBook = form.querySelector('input').value;
    postBook(newBook)
    .then(data => console.log(data))
    .catch(error => console.log(data))
    console.log(newBook)
})



getAllBooks()
.then(data => console.log(data))
.catch(error => console.log(error))
//klassen för en bok
//Patcha varje bok isRead
//Radera bok



//Appen
//Hämta alla böcker
//Lägga till en bok
//Rendera alla böcker   