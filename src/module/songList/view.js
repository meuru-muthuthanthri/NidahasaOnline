import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
import { isMobile } from 'react-device-detect';
import AppBar from './components/AppBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
  gridList: {
    width: '100%',
  },
  button: {
    padding: '30px',
  },
  bRoot: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '20px 30px',
    marginBottom: isMobile ? '2px' : '5px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    fontSize: isMobile ? 12 : 20,
    justifyContent: 'left',
    marginLeft: isMobile ? '10px' : '20px',
  },
}));

export default function ({ titles,
  onClickSong, onSearch, onClickAddSong,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar onSearch={onSearch}
              onClickAddSong={onClickAddSong}
      />
      <div className={classes.offset}>.</div>
      <GridList className={classes.gridList} cellHeight={isMobile ? 20 : 40} cols={1}>
        { titles.map((songName, index) => (
          <Button variant="contained" color="primary" classes={{
            root: classes.bRoot, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }} onClick={() => onClickSong(songName)} key={songName}
          >
            {`${index + 1}. ${songName}`}
          </Button>
        ))}
      </GridList>
    </div>
  );
}
