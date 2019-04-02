export const SEARCH_MOVIE = 'SEARCH_MOVIE';

export function search(term) {
    console.log('Action invoke', term);

<<<<<<< HEAD
    const URL = `http://www.omdbapi.com/?apikey=2905f329&t=${term}`;
    const request = axios.get(URL);
    console.log('Action invoke', URL);
=======
>>>>>>> parent of 8f7348c... Update Movie Detail
    return {
        type: SEARCH_MOVIE,
        payload: term
    };
}