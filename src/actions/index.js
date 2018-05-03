import axios from 'axios';

export const SEARCH_MOVIE = 'SEARCH_MOVIE';

export function search(term) {
    const URL = `http://www.omdbapi.com/?apikey=2905f329&t=${term}`;
    const request = axios.get(URL);
    console.log('Action invoke', URL);
    return {
        type: SEARCH_MOVIE,
        payload: request
    };
}