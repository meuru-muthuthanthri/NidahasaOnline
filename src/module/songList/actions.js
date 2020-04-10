import { createAction } from '../Utils';
import { getSongs } from '../../repository/SongReader';
import { processSongs } from '../../Logic/SongManager';

const Events = {
  NAVIGATED_TO_SONG: 'NAVIGATED_TO_SONG',
  ON_SEARCH: 'ON_SEARCH',
  LOAD_SONGS: 'LOAD_SONGS',
  RELOAD_SONG_TITLES: 'RELOAD_SONG_TITLES',
};

const Actions = {
  navigateToSong: createAction(Events.NAVIGATED_TO_SONG, song => song),
  onSearch: createAction(Events.ON_SEARCH),
  reloadTitles: createAction(Events.RELOAD_SONG_TITLES),
  loadSongs: createAction(Events.LOAD_SONGS, () => processSongs(getSongs())),
};

export default {
  Events,
  Actions,
};
