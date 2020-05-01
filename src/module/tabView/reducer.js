import { Map } from 'immutable';
import { Events } from '../Actions';

const initialState = Map({
  showNavBar: true,
  currentView: 0,
});

const reducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Events.songEditor.NAVIGATE:
    case Events.songList.NAVIGATED_TO_SONG: {
      return state.set('showNavBar', false);
    }
    case Events.songList.NAVIGATE:
    case Events.songList.RELOAD_SONG_TITLES: {
      return state.set('showNavBar', true);
    }
    case Events.tabView.TAB_CHANGED:
      return state.set('currentView', payload);
    default:
      return state;
  }
};

export default reducer;
