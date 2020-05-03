import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { useSnackbar } from 'notistack';

import AppBar from '../songList/components/SearchAppBar';
import TreeView from './components/TreeView';

export default function ({ categories,
  onClickSong, onSearch, onClickAddSong, onClickPinSong,
}) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div>
      <AppBar onSearch={onSearch} onClickAddSong={onClickAddSong} />
      <Toolbar />
      <TreeView categories={categories} onClickSong={onClickSong} />
    </div>
  );
}
