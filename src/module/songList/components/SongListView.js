import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import GridList from '@material-ui/core/GridList';
import { isMobile } from 'react-device-detect';

import Styles from '../../CommonStyles';

const useStyles = makeStyles(() => ({
  songButtonRow: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '20px 30px',
    marginBottom: isMobile ? '2px' : '5px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '&:active': {
      background: '#FF8E53',
    },
  },
  songTitle: {
    fontSize: isMobile ? 14 : 20,
    marginLeft: isMobile ? '10px' : '20px',
  },
  pinIcon: {
    float: 'right',
  },
  gridList: {
    width: '100%',
    bottom: '100px',
  },
}));

export default function SongListView({ titles,
  onClickSong, onClickPin }) {
  const commonStyles = Styles();
  const classes = useStyles();

  const onClickPinBtn = (event, songName, pinned) => {
    event.stopPropagation();
    onClickPin(songName, pinned);
  };

  const songRows = titles.map(({ title, pinned}, index) => {
    return (
      <Slide direction="left" in style={{ transitionDelay: `${index}0ms` }} key={title}>
        <Paper
          color="primary"
          className={classes.songButtonRow}
          onClick={() => onClickSong(title)}
          key={title}
        >
          <label className={classes.songTitle}>{`${index + 1}. ${title}`}</label>
          <IconButton
            className={[commonStyles.iconButton, classes.pinIcon].join(' ')}
            onClick={event => onClickPinBtn(event, title, !pinned)}
          >
            { pinned ? <DeleteSweepIcon/> : <PlaylistAddIcon/> }
          </IconButton>
        </Paper>
      </Slide>
    );
  });

  return (
    <GridList className={classes.gridList} cellHeight={isMobile ? 20 : 40} cols={1}>
      {songRows}
    </GridList>
  );

}
