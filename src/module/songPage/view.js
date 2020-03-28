import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import HomeIcon from '@material-ui/icons/Home';
import SongView from './components/SongView';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

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
          <Typography variant="h4" className={classes.title}>{title}</Typography>
          <IconButton color="secondary" aria-label="go back" onClick={onShowChordToggle}>
            { showChords ? <MusicNoteIcon style={{ color: 'white' }} /> : <MusicOffIcon style={{ color: 'white' }} /> }
          </IconButton>
          <IconButton color="secondary" aria-label="go back" onClick={onGoHomePressed}>
            <HomeIcon style={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SongView currentSong={currentSong} showChords={showChords} />
    </div>
  );
};
