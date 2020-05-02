import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { useSnackbar } from 'notistack';

import AppBar from './components/AppBar';
import Splash from './components/Splash';
import SongListView from './components/SongListView';
import NoResults from '../pinnedSongs/components/NoResults';

export default function ({ titles, isLoading, searchText,
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
      <AppBar searchText={searchText} onSearch={onSearch} onClickAddSong={onClickAddSong} />
      <Toolbar />
      { isLoading
        ? <Splash />
        : titles.length !== 0
          ? <SongListView titles={titles} onClickSong={onClickSong} onClickPin={onClickPin} />
          : <NoResults type="search" />
      }
    </div>
  );
}
