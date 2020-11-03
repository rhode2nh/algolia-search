import React, { useState } from 'react'
import { connect } from 'react-redux'
import {addSearchTerm, fetchSearchResults} from "../redux/actions/actionCreators";


const SearchQueryForm = ({ addSearchTerm, fetchSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event, searchTerm) => {
    event.preventDefault()
    addSearchTerm(searchTerm)
    fetchSearchResults(searchTerm)
  }

  return (
    <React.Fragment>
      <form onSubmit={(event) => handleSubmit(event, searchTerm)}>
        <label>
          Search Articles:
          <input onChange={e => setSearchTerm(e.target.value)}
                 type="text"
          />
        </label>
        <input type="submit"
               value="Submit"
        />
      </form>
      {/*<ul>*/}
      {/*  <>{searchData.map(entry => {*/}
      {/*    return <li>{entry.title}</li>*/}
      {/*  })}</>*/}
      {/*</ul>*/}
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addSearchTerm: searchTerm => dispatch(addSearchTerm(searchTerm)),
    fetchSearchResults: results => dispatch(fetchSearchResults(results))
  }
}


export default connect(null, mapDispatchToProps)(SearchQueryForm)