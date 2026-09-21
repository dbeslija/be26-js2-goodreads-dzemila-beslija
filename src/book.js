import { baseURL, patchScore, patchIsRead } from "./firebaserequests.js";
export class Book {
    #id;
    #title;
    #author;
    #isRead;
    #score;
    #url

    constructor(id, title, author, isRead, score) {
        this.#id = id;
        this.#title = title;
        this.#author = author;
        this.#isRead = isRead;
        this.#score = score;
        this.#url = `${baseURL}/${this.#id}.json`;
    }

    
    async toggleIsRead() {
        const isReadToggled = !this.#isRead;
        await patchIsRead(this.#url, isReadToggled);
        this.#isRead = isReadToggled;
    }
    
    
    async setScore(score) {
        const newScore = score
        await patchScore(this.#url, newScore);
        this.#score = newScore;
    }
    
    
    async deleteBook() {
        const options = {
            method: 'DELETE',

        };
        const response = await fetch(this.#url, options);
        if (!response.ok) {
            throw new Error('Delete failed')
        }
        const data = await response.json()
        return 'Book deleted!';

    }

    getId() {
        return this.#id;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    getIsRead() {
        return this.#isRead;
    }

    getScore() {
        return this.#score;
    }
}

