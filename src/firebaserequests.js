export const baseURL = 'https://be26-js2-goodreads-9b45d-default-rtdb.europe-west1.firebasedatabase.app/Book'

export async function postBook(newBook) {
    try {
        const option = {
            method: 'POST',
            body: JSON.stringify(newBook),
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

export async function patchScore(bookUrl, score) {
    const options = {
        method: 'PATCH',
        body: JSON.stringify({ score: score }),
        headers: {
            'Content-type': 'application/json'
        }
    };

    const response = await fetch(bookUrl, options);

    if (!response.ok) {
        throw new Error('Patch failed')
    }

    const data = await response.json()
    return 'Patch succeded!';

}



export async function patchIsRead(bookUrl, newIsRead) {
    const options = {
        method: 'PATCH',
        body: JSON.stringify({ isRead: newIsRead }),
        headers: {
            'Content-type': 'application/json'
        }
    };

    const response = await fetch(bookUrl, options);

    if (!response.ok) {
        throw new Error('Patch failed')
    }

    const data = await response.json()
    return 'Patch succeded!';

}


export async function getAllBooks() {

    const response = await fetch(baseURL + '.json');

    if (!response.ok) {
        throw new Error('Fetching books failed');
    }

    const data = await response.json();
    return data;
}

