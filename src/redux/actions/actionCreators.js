import { ADD_SEARCH_TERM, SET_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from './actionType';

function addSearchTerm(data) { return { type: ADD_SEARCH_TERM, payload: data } }

function setSearchResults(data) { return { type: SET_SEARCH_RESULTS, payload: data } }

function clearSearchResults() { return { type: CLEAR_SEARCH_RESULTS } }

function fetchSearchResults(searchTerm) {
  const searchUrl = "http://hn.algolia.com/api/v1/search?query="
  return dispatch => {
    dispatch(clearSearchResults())
    fetch(searchUrl + searchTerm)
      .then(resp => resp.json())
      .then(data => {
        dispatch(setSearchResults(data.hits))
      })
      .catch(error => alert(error))
  }
}

export { addSearchTerm, fetchSearchResults }