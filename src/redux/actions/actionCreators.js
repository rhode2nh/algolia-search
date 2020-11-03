import { ADD_SEARCH_TERM } from './actionType';

function addSearchTerm(data) { return { type: ADD_SEARCH_TERM, payload: data } }

export { addSearchTerm }