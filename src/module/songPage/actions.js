const createAction = (type) => (payload) => ({ type, payload});

const Events = {
  'SHOW_CHORD_TOGGLED': 'SHOW_CHORD_TOGGLED'
};

const Actions = {
  onShowChordToggle: createAction(Events.SHOW_CHORD_TOGGLED)
};

export default {
  Events,
  Actions
}

