import { Map } from 'immutable';

const initialState = Map({
  showChords: true
});

const reducer =  (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CHORD_TOGGLED':
      return state.set('showChords', !state.get('showChords'));
    default:
      return state;
  }
};

export default reducer;
