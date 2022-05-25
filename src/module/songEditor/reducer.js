import { Map, List } from 'immutable';
import { Events } from '../Actions';

const initialState = Map({
  title: null,
  song: '',
  searchTags: List(),
  categories: List(),
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Events.songEditor.NAVIGATE:
      return initialState;
    case Events.songEditor.ON_LYRICS_EDIT:
      return state.set('song', payload);
    case Events.songEditor.ON_TITLE_EDIT:
      return state.set('title', payload !== '' ? payload : null);
    case Events.songEditor.TAGS_MODIFIED:
      return state.set('searchTags', List(payload));
    case Events.songEditor.SET_SELECTED_CATEGORIES:
      return state.set('categories', List(payload));
    case Events.songEditor.SONG_EDIT: {
      const { currentSong, songInfo } = payload;
      return state
        .set('song', currentSong)
        .set('title', songInfo.get('title'))
        .set('searchTags', List(songInfo.get('ref')))
        .set('categories', List(songInfo.get('categories')));
    }
    default:
      return state;
  }
};

export default reducer;
