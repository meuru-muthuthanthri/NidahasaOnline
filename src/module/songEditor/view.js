import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { isMobile } from 'react-device-detect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';
import SongView from '../songPage/components/SongView';
import { splitTitle } from '../../Logic/SongManager';

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
  inputBox: {
    backgroundColor: '#fcfcfb',
    display: 'flex',
    margin: '10px',
  },
  buttonSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default ({ song, title,
  onLyricsEdit, onTitleEdit, onGoHomePressed, onSaveSong }) => {
  const classes = useStyles();
  const { title: header, chord, key } = splitTitle(title || '');
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <TextField id="standard-basic" label="Song Title" className={classes.title} onChange={({ target }) => onTitleEdit(target.value)} />
          <IconButton className={classes.iconButton} color="secondary" aria-label="go back" onClick={onGoHomePressed}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <TextField
        id="filled-full-width"
        className={classes.inputBox}
        label="Song lyrics"
        placeholder="Type here"
        onChange={({ target }) => onLyricsEdit(target.value)}
        helperText="Enter the full song with Chords"
        multiline
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
      />
      <div>
        <Typography variant={isMobile ? 'subtitle1' : 'h4'} className={classes.title}>{`Name: ${header}`}</Typography>
        <Typography variant={isMobile ? 'subtitle2' : 'h6'} className={classes.title}>{`Chord:${chord}`}</Typography>
        <Typography variant={isMobile ? 'subtitle2' : 'h6'} className={classes.title}>{`Key: ${key}`}</Typography>
      </div>
      <SongView
        lyricsSize={isMobile ? '12px' : '20px'}
        chordSize={isMobile ? '12px' : '20px'}
        currentSong={song}
        showChords={true}
      />
      <div className={classes.buttonSection}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          onClick={() => onSaveSong(title, song)}
        >
          Save and Exit
        </Button>
      </div>
    </div>
  );
};
