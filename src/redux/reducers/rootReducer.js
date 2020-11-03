import { combineReducers } from 'redux';
import searchTermReducer from "./searchTermReducer";
import searchResultsReducer from "./searchResultsReducer";

const rootReducer = combineReducers({
  searchTerms: searchTermReducer,
  searchResults: searchResultsReducer
})

export default rootReducer
