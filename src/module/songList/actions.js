import { createAction } from '../Utils';

const Events = {
  NAVIGATED_TO_SONG: 'NAVIGATED_TO_SONG',
  ON_SEARCH: 'ON_SEARCH',
  DISPLAY_SONG_LIST: 'DISPLAY_SONG_LIST',
  RELOAD_SONG_TITLES: 'RELOAD_SONG_TITLES',
  PIN_SONG_CLICKED: 'PIN_SONG_CLICKED',
};

const Actions = {
  navigateToSong: createAction(Events.NAVIGATED_TO_SONG, song => song),
  onSearch: createAction(Events.ON_SEARCH),
  reloadTitles: createAction(Events.RELOAD_SONG_TITLES),
  displaySongList: createAction(Events.DISPLAY_SONG_LIST, songList => songList),
  onClickPinSong: createAction(Events.PIN_SONG_CLICKED),
};

export default {
  Events,
  Actions,
};
