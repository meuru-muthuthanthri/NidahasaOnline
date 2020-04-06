import { createAction } from '../Utils';

const Events = {
  SHOW_CHORD_TOGGLED: 'SHOW_CHORD_TOGGLED',
  ON_TRANSPOSE: 'ON_TRANSPOSE',
};

const Actions = {
  onShowChordToggle: createAction(Events.SHOW_CHORD_TOGGLED),
  onTranspose: createAction(Events.ON_TRANSPOSE),
};

export default {
  Events,
  Actions,
};
