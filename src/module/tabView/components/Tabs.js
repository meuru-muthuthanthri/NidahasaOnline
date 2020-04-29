import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import Slide from '@material-ui/core/Slide';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#ffffffd1',
  },
}));

export default function ScrollableTabsButtonForce({ showNavBar, currentView, onNavigate }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slide direction="up" in={showNavBar} mountOnEnter unmountOnExit>
        <AppBar position="fixed" color="default" className={classes.appBar}>
          <Tabs
            value={currentView}
            onChange={(event, newValue) => onNavigate(newValue)}
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
            centered
          >
            <Tab icon={<FormatListNumberedIcon />} />
            <Tab icon={<CategoryOutlinedIcon />} />
            <Tab icon={<PlaylistAddCheckIcon />} />
          </Tabs>
        </AppBar>
      </Slide>
    </div>
  );
}
