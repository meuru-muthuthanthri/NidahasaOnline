import { createAction } from '../Utils';

const Events = {
  SHOW_CHORD_TOGGLED: 'SHOW_CHORD_TOGGLED',
  ON_TRANSPOSE: 'ON_TRANSPOSE',
  PREPARE_SONG_LOAD: 'PREPARE_SONG_LOAD',
};

const Actions = {
  onShowChordToggle: createAction(Events.SHOW_CHORD_TOGGLED),
  onTranspose: createAction(Events.ON_TRANSPOSE),
  prepareSongLoad: createAction(Events.PREPARE_SONG_LOAD),
};

export default {
  Events,
  Actions,
};
