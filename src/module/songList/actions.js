import { createAction } from '../Utils';
import { read } from '../../repository/SongReader';

const Events = {
  'NAVIGATED_TO_SONG': 'NAVIGATED_TO_SONG'
};

const Actions = {
  navigateToSong: createAction(Events.NAVIGATED_TO_SONG, (songName) => {
    return read()[songName];
  })
};

export default {
  Events,
  Actions
}

