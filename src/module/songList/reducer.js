import { Map } from 'immutable';
import _ from 'lodash';
import { Events } from '../Actions';
import { filterTitles } from '../../Logic/SongManager';
import { translate } from '../../Logic/SinglishTranslator';

const initialState = Map({
  songList: null,
  titles: [],
  filteredTitles: [],
  singlishMode: true,
  sinhalaSearchText: null,
  searchText: null,
});

const reducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Events.songList.DISPLAY_SONG_LIST: {
      return state.set('songList', payload).set('filteredTitles', _.keys(payload));
    }
    case Events.songList.ON_SEARCH: {
      const searchText = payload !== '' ? payload : null;
      const sinhalaText = searchText && state.get('singlishMode') ? translate(payload) : null;
      return state.set('filteredTitles', filterTitles(_.keys(state.get('songList')), payload, sinhalaText))
        .set('sinhalaSearchText', sinhalaText)
        .set('searchText', searchText);
    }
    case Events.songList.RELOAD_SONG_TITLES:
      return state.set('filteredTitles', _.keys(state.get('songList')));
    case Events.songList.TOGGLE_SINGLISH_MODE:
      return state.set('singlishMode', !state.get('singlishMode'));
    default:
      return state;
  }
};

export default reducer;
