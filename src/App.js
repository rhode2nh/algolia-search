import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import SearchQueryForm from "./components/searchQueryForm";

function App() {
  return (
    <Provider store={store}>
      <SearchQueryForm />
    </Provider>
    );
}

export default App;
