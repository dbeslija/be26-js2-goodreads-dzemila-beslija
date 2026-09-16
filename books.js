import { baseURL } from "./firebaserequests.js";
export class Books {
    #id;
    #title;
    #author;
    #isRead;
    #ratings;
    #url

    constructor(id, title, author, isRead, ratings) {
        this.#id = id;
        this.#title = title;
        this.#author = author;
        this.#isRead = isRead;
        this.#ratings = ratings;
        this.#url = `${baseURL}/${this.#id}.json`;
    }

    async patchIsRead() {
        const options = {
            method: 'PATCH',
            body: JSON.stringify({ isRead: !this.#isRead }),
            headers: {
                'Content-type': 'application/json'
            }
        };
        try {
            const response = await fetch(this.#url, options);
            if (!response.ok) {
                throw new Error('Patch failed')
            }
            const data = await response.json()
            return 'Patch succeded!';

        }
        catch (error) {
            throw error;
        }
    }


    async deleteBook() {
        const options = {
            method: 'DELETE',

        };
        try {
            const response = await fetch(this.#url, options);
            if (!response.ok) {
                throw new Error('Delete failed')
            }
            const data = await response.json()
            return 'Book deleted!';

        }
        catch (error) {
            throw error;
        }
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

    getRatings() {
        return this.#ratings;
    }
}