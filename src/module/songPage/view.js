import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';
import { isMobile } from 'react-device-detect';
import SongView from './components/SongView';
import ChordDialog from './components/ChordDialog';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(1),
    backgroundColor: '#150940',
    color: 'white',
    padding: '2px',
    textTransform: 'none',
  },
  title: {
    flexGrow: 1,
  },
  iconButton: {
    padding: '2px',
    color: 'white',
  },
}));

export default ({ showChords, currentSong, title, chord, originalChord,
  onShowChordToggle, onGoHomePressed, onTranspose }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <ChordDialog original={originalChord} selected={chord} onSelect={onTranspose} />
          <Typography variant={isMobile ? 'subtitle1' : 'h4'} className={classes.title}>{title}</Typography>
          <IconButton className={classes.iconButton} aria-label="go back" onClick={onShowChordToggle}>
            { !showChords ? <MusicNoteIcon /> : <MusicOffIcon /> }
          </IconButton>
          <IconButton className={classes.iconButton} color="secondary" aria-label="go back" onClick={onGoHomePressed}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <SongView lyricsSize={isMobile ? '12px' : '20px'} chordSize={isMobile ? '12px' : '20px'}
                chord={chord} originalChord={originalChord}
                currentSong={currentSong} showChords={showChords} />
    </div>
  );
};
