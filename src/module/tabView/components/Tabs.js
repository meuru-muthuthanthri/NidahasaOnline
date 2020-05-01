import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import Slide from '@material-ui/core/Slide';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

import CommonStyles from '../../CommonStyles';

export default function ScrollableTabsButtonForce({ showNavBar, currentView, onNavigate }) {
  const styles = CommonStyles();

  return (
    <div>
      <Slide direction="up" in={showNavBar} mountOnEnter unmountOnExit>
        <AppBar position="fixed" color="default" className={styles.mainNavigatorTabs}>
          <Tabs
            value={currentView}
            onChange={(event, newValue) => onNavigate(newValue)}
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
