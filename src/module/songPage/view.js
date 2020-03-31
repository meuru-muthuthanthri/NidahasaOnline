import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';
import { isMobile } from 'react-device-detect';
import SongView from './components/SongView';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default ({ showChords, currentSong, title,
  onShowChordToggle, onGoHomePressed }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant={isMobile ? 'h7' : 'h4'} className={classes.title}>{title}</Typography>
          <IconButton color="secondary" aria-label="go back" onClick={onShowChordToggle}>
            { showChords ? <MusicNoteIcon style={{ color: 'white' }} /> : <MusicOffIcon style={{ color: 'white' }} /> }
          </IconButton>
          <IconButton color="secondary" aria-label="go back" onClick={onGoHomePressed}>
            <HomeIcon style={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SongView lyricsSize={isMobile ? '12px' : '20px'} chordSize={isMobile ? '12px' : '20px'} currentSong={currentSong} showChords={showChords} />
    </div>
  );
};
