import React from 'react';
import './App.css';
import SongPage from './module/songPage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './module/Reducers';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SongPage/>
      </div>
    </Provider>
  );
}

export default App;
