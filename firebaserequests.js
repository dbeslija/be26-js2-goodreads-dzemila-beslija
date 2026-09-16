export const baseURL = 'https://be26-js2-goodreads-9b45d-default-rtdb.europe-west1.firebasedatabase.app/Book'

export async function postBook(newBook) {
    try {
        const option = {
            method: 'POST',
            body: JSON.stringify({ book: newBook, isRead: false }),
            headers: {
                'Content-type': 'application/json'
            }
        }

        const response = await fetch(baseURL + '.json', option);

        if (!response.ok) {
            throw new Error('Post failed');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}



export async function getAllBooks() {
    try {
        const response = await fetch(baseURL + '.json');

        if (!response.ok) {
            throw new Error('Fetching books failed');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}
