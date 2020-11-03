import { ADD_SEARCH_TERM } from "../actions/actionType"

  const searchReducer = (state=[], action) => {
    switch(action.type) {
      case ADD_SEARCH_TERM:
        return [...state, action.payload]
      default:
        return state
    }
  }

  export default searchReducer
