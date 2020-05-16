import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { isMobile } from 'react-device-detect'; // remove
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import SearchIcon from '@material-ui/icons/Search';

import SongView from '../songPage/components/SongView';
import { splitTitle } from '../../Logic/SongManager';
import CommonStyles from '../CommonStyles';
import MultiSelectDropDown from './components/MultiSelectDropDown';

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
  body: {
    margin: '1em',
  },
  lyricsInputBox: {
    marginTop: '1em',
    display: 'flex',
  },
  chip: {
    margin: '2px',
  },
  previewBox: {
    display: 'flex',
  },
  centerSection: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default ({ song, title, categories, tags, selectedCategories,
  onLyricsEdit, onTitleEdit, onGoHomePressed, onSaveSong, onModifyTags, setSelectedCategories,
}) => {
  const classes = useStyles();
  const styles = CommonStyles();
  const { title: header, chord, key } = splitTitle(title || '');

  const onEditTags = ({ target: { value } }) => {
    onModifyTags(value.split(',').map(tag => tag.trim()).filter(tag => tag !== ''));
  };
  const chips = tags.map(tag => (
    <Chip icon={<SearchIcon />} label={tag} size="small" disabled className={classes.chip} />
  ));
  const searchTags = tags.join(', ');

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <TextField id="standard-basic" label="Song Title" className={classes.title}
                     value={title}
                     placeholder="Title <SPACE> Chord <SPACE> Beat"
                     onChange={({ target }) => onTitleEdit(target.value)}/>
          <IconButton className={styles.iconButton} color="secondary" aria-label="go back" onClick={onGoHomePressed}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <div className={classes.body}>
        <MultiSelectDropDown text="Select song categories" items={categories} onSelect={setSelectedCategories} selected={selectedCategories} />
        <Input placeholder="Enter comma separated search tags" fullWidth onChange={onEditTags} defaultValue={searchTags}/>
        <div>
          {chips}
        </div>
        <TextField
          id="filled-full-width"
          className={classes.lyricsInputBox}
          label="Song lyrics"
          placeholder="Type here"
          onChange={({ target }) => onLyricsEdit(target.value)}
          helperText="Enter the full song with Chords, without the title"
          multiline
          value={song}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />


        <div className={classes.previewBox}>
          <Typography variant={isMobile ? 'subtitle2' : 'h6'} className={classes.title}>{`Name: ${header}`}</Typography>
          <Typography variant={isMobile ? 'subtitle2' : 'h6'}
                      className={classes.title}>{`Chord: ${chord || 'TBA'}`}</Typography>
          <Typography variant={isMobile ? 'subtitle2' : 'h6'}
                      className={classes.title}>{`Beat: ${key || 'TBA'}`}</Typography>
        </div>
        <SongView
          lyricsSize={isMobile ? '12px' : '20px'}
          chordSize={isMobile ? '12px' : '20px'}
          currentSong={song}
          showChords
        />
        <div className={classes.centerSection}>
          <Slide direction="up" in style={{ transitionDelay: '200ms' }} mountOnEnter unmountOnExit>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              onClick={() => onSaveSong(title, song, tags, selectedCategories)}
            >
              Save and Exit
            </Button>
          </Slide>
        </div>
      </div>
    </div>
  );
};
