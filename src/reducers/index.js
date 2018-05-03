import { combineReducers } from 'redux';
import searchData from './reducer-search-data';

const rootReducer = combineReducers({
  movieData: searchData
});

export default rootReducer;
