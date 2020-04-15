import { Map } from 'immutable';
import _ from 'lodash';
import { Events } from '../Actions';
import { filterTitles } from '../../Logic/SongManager';

const initialState = Map({
  songList: null,
  titles: [],
  filteredTitles: [],
  searchText: null,
});

const reducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Events.songList.DISPLAY_SONG_LIST: {
      return state.set('songList', payload).set('filteredTitles', _.keys(payload));
    }
    case Events.songList.ON_SEARCH: {
      const searchText = payload !== '' ? payload : null;
      return state.set('filteredTitles', filterTitles(_.keys(state.get('songList')), payload))
        .set('searchText', searchText);
    }
    case Events.songList.RELOAD_SONG_TITLES:
      return state.set('filteredTitles', _.keys(state.get('songList')));
    default:
      return state;
  }
};

export default reducer;
