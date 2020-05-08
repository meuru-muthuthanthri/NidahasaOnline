import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import GridList from '@material-ui/core/GridList';
import { isMobile } from 'react-device-detect';

import Styles from '../../CommonStyles';
import { darkGrey } from '../../CommonStyles'

const useStyles = makeStyles(() => ({
  songButtonRow: {
    background: darkGrey,
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '20px 30px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: isMobile ? '2px' : '5px',
    '&:active': {
      background: '#FF8E53',
    },
  },
  songTitle: {
    fontSize: isMobile ? 14 : 20,
    marginLeft: isMobile ? '10px' : '20px',
  },
  pinIcon: {
    marginLeft: 'auto',
  },
  gridList: {
    width: '100%',
    bottom: '100px',
  },
}));

export default function SongListView({
  titles, onClickSong, onClickPin, onClickMoveUp, onClickMoveDown, totalHymns = 0
}) {
  const commonStyles = Styles();
  const classes = useStyles();

  const onClickPinBtn = (event, songName, pinned) => {
    event.stopPropagation();
    onClickPin(songName, pinned);
  };

  const onClickMoveUpBtn = (event, index) => {
    event.stopPropagation();
    onClickMoveUp(index);
  };

  const onClickMoveDownBtn = (event, index) => {
    event.stopPropagation();
    onClickMoveDown(index);
  };

  const songRows = titles.map(({ title, pinned, index }) => (
    <Paper
      color="primary"
      className={classes.songButtonRow}
      onClick={() => onClickSong(title)}
      key={title}
    >

      <label className={classes.songTitle}>{`${index}. ${title}`}</label>

      <div className={classes.pinIcon}>
        {index !== 1 &&
        <IconButton
            className={[commonStyles.iconButton].join(' ')}
            onClick={event => onClickMoveUpBtn(event, index)}
        >
          <ArrowUpwardIcon/>
        </IconButton>
        }

        {index !== totalHymns &&
        <IconButton
            className={[commonStyles.iconButton].join(' ')}
            onClick={event => onClickMoveDownBtn(event, index)}
        >
          <ArrowDownwardIcon/>
        </IconButton>
        }

        <IconButton
            className={[commonStyles.iconButton, classes.pinIcon].join(' ')}
            onClick={event => onClickPinBtn(event, title, !pinned)}
        >
          {pinned ? <DeleteSweepIcon /> : <PlaylistAddIcon />}
        </IconButton>
      </div>
    </Paper>
  ));

  return (
    <GridList className={classes.gridList} cellHeight={isMobile ? 20 : 40} cols={1}>
      {songRows}
    </GridList>
  );
}
