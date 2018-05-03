import { combineReducers } from 'redux';
import searchData from './reducer-search-data';

const rootReducer = combineReducers({
  data: searchData
});

export default rootReducer;
