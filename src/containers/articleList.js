import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'
import Article from '../components/article';

const ArticleList = ({ searchResults }) => {
  return (
    <ul>
      {searchResults.map(article => <Article article={article} key={uuid()}/>)}
    </ul>
  )
}

const mapStateToProps = store => ({ searchResults: store.searchResults })

export default connect(mapStateToProps)(ArticleList)
