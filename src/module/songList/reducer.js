import { Map } from 'immutable';
import { Events } from '../Actions';
import { filterTitles } from '../../Logic/SongManager';
import { translate } from '../../Logic/SinglishTranslator';

const initialState = Map({
  titles: [],
  filteredTitles: [],
  songs: {},
  singlishMode: true,
  sinhalaSearchText: null,
  searchText: null,
});

const reducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Events.songList.LOAD_SONGS: {
      const { titles, songs } = payload;
      return state.set('titles', titles).set('songs', songs).set('filteredTitles', titles);
    }
    case Events.songList.ON_SEARCH: {
      const searchText = payload !== '' ? payload : null;
      const sinhalaText = searchText && state.get('singlishMode') ? translate(payload) : null;
      return state.set('filteredTitles', filterTitles(state.get('titles'), payload, sinhalaText))
        .set('sinhalaSearchText', sinhalaText)
        .set('serachText', searchText);
    }
    case Events.songList.RELOAD_SONG_TITLES:
      return state.set('filteredTitles', state.get('titles'));
    case Events.songList.TOGGLE_SINGLISH_MODE:
      return state.set('singlishMode', !state.get('singlishMode'));
    default:
      return state;
  }
};

export default reducer;
