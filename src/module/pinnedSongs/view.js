import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { useSnackbar } from 'notistack';

import AppBar from '../songList/components/SearchAppBar';
import NoResults from './components/NoResults';
import SongListView from '../songList/components/SongListView';

export default function ({ titles,
  onClickSong, onSearch, onClickAddSong, onClickPinSong, onClickMoveUp, onClickMoveDown
}) {
  const { enqueueSnackbar } = useSnackbar();

  const onClickPin = (songName, pinned) => {
    const variant = pinned ? 'success' : 'warning';
    const msg = `${songName} is ${!pinned ? 'un' : ''}pinned`;
    enqueueSnackbar(msg, { variant });
    onClickPinSong(songName, pinned);
  };
  return (
    <div>
      <AppBar onSearch={onSearch} onClickAddSong={onClickAddSong} />
      <Toolbar />
      { titles.length === 0
        ? <NoResults />
        : <SongListView titles={titles} onClickSong={onClickSong} onClickPin={onClickPin} onClickMoveUp={onClickMoveUp} onClickMoveDown={onClickMoveDown} totalHymns={titles.length}/> }
    </div>
  );
}
