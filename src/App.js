import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import _ from 'lodash';
import reducer from './module/Reducers';
import history from './core/history';
import Routes from './core/routes';
import { Actions } from './module/Actions';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}
store.dispatch(Actions.songList.loadSongs());

window.showState = () => {
  const result = {};
  _.forOwn(store.getState(), (value, key) => {
    result[key] = value.toJS();
  });
  return result;
};
export default App;
