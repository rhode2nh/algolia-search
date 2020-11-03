import { CLEAR_SEARCH_RESULTS, SET_SEARCH_RESULTS } from '../actions/actionType'

const searchResultsReducer = (state=[], action) => {
  switch(action.type) {
    case SET_SEARCH_RESULTS:
      return action.payload
    case CLEAR_SEARCH_RESULTS:
      return []
    default:
      return state
  }
}

export default searchResultsReducer
