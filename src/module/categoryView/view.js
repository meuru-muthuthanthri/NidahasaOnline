import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import AppBar from '../songList/components/SearchAppBar';
import TreeView from './components/TreeView';

export default function ({ categories,
  onClickSong, onSearch, onClickAddSong, onClickPinSong,
}) {

  return (
    <div>
      <AppBar onSearch={onSearch} onClickAddSong={onClickAddSong} />
      <Toolbar />
      <TreeView categories={categories} onClickSong={onClickSong} />
    </div>
  );
}
