import { SEARCH_MOVIE } from '../actions/index';

export default function(state = null, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
        return {
            data: action.payload
        }
    }

    return state;
}