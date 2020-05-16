import { createAction } from '../Utils';

const Events = {
  ON_LYRICS_EDIT: 'ON_LYRICS_EDIT',
  ON_TITLE_EDIT: 'ON_TITLE_EDIT',
  NAVIGATE: 'NAVIGATE',
  SONG_EDIT: 'SONG_EDIT',
  TAGS_MODIFIED: 'TAGS_MODIFIED',
  SET_SELECTED_CATEGORIES: 'SET_SELECTED_CATEGORIES',
};

const Actions = {
  onLyricsEdit: createAction(Events.ON_LYRICS_EDIT, text => text),
  onTitleEdit: createAction(Events.ON_TITLE_EDIT, text => text),
  navigateToSongEditor: createAction(Events.NAVIGATE, text => text),
  onEdit: createAction(Events.SONG_EDIT),
  onModifyTags: createAction(Events.TAGS_MODIFIED),
  setSelectedCategories: createAction(Events.SET_SELECTED_CATEGORIES),
};

export default {
  Events,
  Actions,
};
