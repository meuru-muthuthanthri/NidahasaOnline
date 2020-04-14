import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import _ from 'lodash';
import firebase from 'firebase/app';
import 'firebase/database';
import reducer from './module/Reducers';
import history from './core/history';
import Routes from './core/routes';
import { Actions } from './module/Actions';
import { readList } from './repository/songListRepo';

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

window.showState = () => {
  const result = {};
  _.forOwn(store.getState(), (value, key) => {
    result[key] = value.toJS();
  });
  return result;
};
export default App;

const firebaseConfig = {
  apiKey: 'AIzaSyBgfoOAiQkdMTs4SxDbnGi_YQfsVMS2dCo',
  authDomain: 'nidahasa-f5fe4.firebaseapp.com',
  databaseURL: 'https://nidahasa-f5fe4.firebaseio.com',
  projectId: 'nidahasa-f5fe4',
  storageBucket: 'nidahasa-f5fe4.appspot.com',
  messagingSenderId: '1053880677047',
  appId: '1:1053880677047:web:bc6771a691754500b05332',
  measurementId: 'G-MR46NPX8ML',
};
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
window.db = dbRef;

readList(dbRef).then(list => {
  store.dispatch(Actions.songList.displaySongList(list));
});
