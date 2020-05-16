import { Map } from 'immutable';
import { Events } from '../Actions';
import { splitTitle } from '../../Logic/SongManager';

const initialState = Map({
  showChords: true,
  title: '',
  song: '',
  chord: 'C',
  originalChord: 'C',
  songId: '',
});

const reducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case Events.songPage.SHOW_CHORD_TOGGLED:
      return state.set('showChords', !state.get('showChords'));
    case Events.songList.NAVIGATED_TO_SONG: {
      const { title: titleStr, song } = payload;
      const { title, key, chord } = splitTitle(titleStr);
      return state.set('song', song)
        .set('title', `${title} - ${key}`)
        .set('chord', chord)
        .set('originalChord', chord);
    }
    case Events.songPage.PREPARE_SONG_LOAD: {
      return state.set('song', '').set('title', payload).set('chord', null).set('songId', payload);
    }
    case Events.songPage.ON_TRANSPOSE:
      return state.set('chord', payload);
    default:
      return state;
  }
};

export default reducer;
