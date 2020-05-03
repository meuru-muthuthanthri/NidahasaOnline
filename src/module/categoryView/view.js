import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { useSnackbar } from 'notistack';

import AppBar from '../songList/components/SearchAppBar';
import SongListView from '../songList/components/SongListView';
import TreeView from './components/TreeView';

export default function ({ titles, categories,
  onClickSong, onSearch, onClickAddSong, onClickPinSong,
}) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div>
      <AppBar onSearch={onSearch} onClickAddSong={onClickAddSong} />
      <Toolbar />
      <TreeView categories={categories} />
    </div>
  );
}
