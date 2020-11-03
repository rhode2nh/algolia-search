import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import SearchQueryForm from "./components/searchQueryForm";
import ArticleListComponent from "./containers/articleList";

function App() {
  return (
    <Provider store={store}>
      <SearchQueryForm />
      <ArticleListComponent />
    </Provider>
    );
}

export default App;
