import { combineReducers } from 'redux';
import songPage from './songPage/reducer';
import songList from './songList/reducer';

export default combineReducers({
  songPage,
  songList,
});
