import { createAction } from '../Utils';

const Events = {
  ON_LYRICS_EDIT: 'ON_LYRICS_EDIT',
  ON_TITLE_EDIT: 'ON_TITLE_EDIT',
  NAVIGATE: 'NAVIGATE',
};

const Actions = {
  onLyricsEdit: createAction(Events.ON_LYRICS_EDIT, text => text),
  onTitleEdit: createAction(Events.ON_TITLE_EDIT, text => text),
  navigateToSongEditor: createAction(Events.NAVIGATE, text => text),
};

export default {
  Events,
  Actions,
};
