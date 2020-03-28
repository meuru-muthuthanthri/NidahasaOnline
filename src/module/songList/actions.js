import { createAction } from '../Utils';
import { getSongs } from '../../repository/SongReader';

const Events = {
  NAVIGATED_TO_SONG: 'NAVIGATED_TO_SONG',
};

const Actions = {
  navigateToSong: createAction(Events.NAVIGATED_TO_SONG, (songName) => {
    console.log(getSongs()[songName]);
    return getSongs()[songName];
  }),
};

export default {
  Events,
  Actions,
};
