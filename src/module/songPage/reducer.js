const initialState = {
  showChords: true
};
const reducer =  (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CHORD_TOGGLED':
      return { showChords: !state.showChords};
    default:
      return state;
  }
};

export default reducer;
