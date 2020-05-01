import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import AppBar from './components/AppBar';
import Splash from './components/Splash';
import SongListView from './components/SongListView';

export default function ({ titles, isLoading,
  onClickSong, onSearch, onClickAddSong, onClickPinSong
}) {
  return (
    <div>
      <AppBar onSearch={onSearch} onClickAddSong={onClickAddSong} />
      <Toolbar />
      { isLoading
        ? <Splash />
        : <SongListView titles={titles} onClickSong={onClickSong} onClickPin={onClickPinSong} /> }
    </div>
  );
}
