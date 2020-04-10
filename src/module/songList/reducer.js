import { Map } from 'immutable';
import { Events } from '../Actions';
import { filterTitles } from '../../Logic/SongManager';

const initialState = Map({
  titles: [],
  filteredTitles: [],
  songs: {},
});

const reducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Events.songList.LOAD_SONGS: {
      const { titles, songs } = payload;
      return state.set('titles', titles).set('songs', songs).set('filteredTitles', titles);
    }
    case Events.songList.ON_SEARCH: {
      return state.set('filteredTitles', filterTitles(state.get('titles'), payload));
    }
    case Events.songList.RELOAD_SONG_TITLES:
      return state.set('filteredTitles', state.get('titles'));
    default:
      return state;
  }
};

export default reducer;
