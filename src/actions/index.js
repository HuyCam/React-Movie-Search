export const SEARCH_MOVIE = 'SEARCH_MOVIE';

export function search(term) {
    console.log('Action invoke', term);

    return {
        type: SEARCH_MOVIE,
        payload: term
    };
}