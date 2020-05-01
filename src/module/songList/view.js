import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { useSnackbar } from 'notistack';

import AppBar from './components/AppBar';
import Splash from './components/Splash';
import SongListView from './components/SongListView';

export default function ({ titles, isLoading,
  onClickSong, onSearch, onClickAddSong, onClickPinSong,
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
      { isLoading
        ? <Splash />
        : <SongListView titles={titles} onClickSong={onClickSong} onClickPin={onClickPin} /> }
    </div>
  );
}
