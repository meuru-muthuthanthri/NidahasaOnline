import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import AppBar from './components/AppBar';
import Splash from './components/Splash';
import SongListView from './components/SongListView';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    flexGrow: 1,
  },
}));

export default function ({ titles, isLoading,
  onClickSong, onSearch, onClickAddSong, onClickPinSong
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar onSearch={onSearch} onClickAddSong={onClickAddSong} className={classes.appBar} />
      <Toolbar />
      { isLoading
        ? <Splash />
        : <SongListView titles={titles} onClickSong={onClickSong} onClickPin={onClickPinSong} /> }
    </div>
  );
}
