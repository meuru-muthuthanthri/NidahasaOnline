import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './module/Reducers';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './core/routes';

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
window.store = () => store.getState();
export default App;
