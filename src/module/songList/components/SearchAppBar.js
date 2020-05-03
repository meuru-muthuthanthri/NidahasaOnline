import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import QueueRoundedIcon from '@material-ui/icons/QueueRounded';
import { isMobile } from 'react-device-detect';
import BackspaceRoundedIcon from '@material-ui/icons/BackspaceRounded';

import CommonStyles from '../../CommonStyles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    padding: isMobile ? '6px' : '12px',
  },
  iconButton: {
    color: 'white',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 0,
    marginLeft: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 0.5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearSearch: {
    marginLeft: 'auto',
    padding: theme.spacing(0, 0.5),
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '6px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1.5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchAppBar({ searchText, onSearch, onClickAddSong }) {
  const classes = useStyles();
  const styles = CommonStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Nidahasa
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={searchText}
              inputProps={{ 'aria-label': 'search' }}
              onChange={({ target }) => onSearch(target.value)}
            />
            { searchText && searchText.length > 0
              ? <BackspaceRoundedIcon className={classes.clearSearch} onClick={() => onSearch('')} /> : null }
          </div>
          <div>
            <IconButton className={classes.iconButton} onClick={onClickAddSong}>
              <QueueRoundedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
