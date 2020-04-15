import { Map } from 'immutable';
import { Events } from '../Actions';

const initialState = Map({
  title: null,
  song: '',
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Events.songEditor.ON_LYRICS_EDIT:
      return state.set('song', payload);
    case Events.songEditor.ON_TITLE_EDIT:
      return state.set('title', payload !== '' ? payload : null);
    default:
      return state;
  }
};

export default reducer;
