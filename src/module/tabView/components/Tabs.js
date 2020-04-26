import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import Slide from '@material-ui/core/Slide';

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

export default function ScrollableTabsButtonForce({ showNavBar }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.log("############", newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Slide direction="up" in={showNavBar} mountOnEnter unmountOnExit>
        <AppBar position="fixed" color="default" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
            centered
          >
            <Tab icon={<FormatListNumberedIcon />} />
            <Tab icon={<CategoryOutlinedIcon />} />
            <Tab icon={<PinDropOutlinedIcon />} />
          </Tabs>
        </AppBar>
      </Slide>
    </div>
  );
}
