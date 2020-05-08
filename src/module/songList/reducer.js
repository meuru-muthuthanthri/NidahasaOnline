import { Map } from 'immutable';
import { Events } from '../Actions';
import {filterTitles, moveTitleDown, moveTitleUp, processSongTitles} from '../../Logic/SongManager';

const initialState = Map({
  titles: Map(),
  searchText: null,
});

const reducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Events.songList.DISPLAY_SONG_LIST: {
      return state.set('titles', processSongTitles(payload));
    }
    case Events.songList.ON_SEARCH: {
      return state.set('titles', filterTitles(state.get('titles'), payload))
        .set('searchText', payload);
    }
    case Events.songList.RELOAD_SONG_TITLES:
      return state.set('titles', filterTitles(state.get('titles')));
    case Events.songList.PIN_SONG_CLICKED: {
      const { title, pinned } = payload;
      return state.setIn(['titles', title, 'pinned'], pinned);
    }
    case Events.songList.MOVE_SONG_UP: {
      const { index } = payload;
      return state.set('titles', moveTitleUp(state.get('titles'), index));
    }
    case Events.songList.MOVE_SONG_DOWN: {
      const { index } = payload;
      return state.set('titles', moveTitleDown(state.get('titles'), index));
    }
    default:
      return state;
  }
};

export default reducer;
