import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Tabs from './components/Tabs';

const useStyles = makeStyles(() => ({
  paper: {
    paddingBottom: 72,
    backgroundColor: '#150940',
    color: 'white',
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  const { children, showNavBar, currentView, onNavigate } = props;
  return (
    <div>
      <Paper square className={classes.paper}>
        {children}
      </Paper>
      <Tabs showNavBar={showNavBar} currentView={currentView} onNavigate={onNavigate} />
    </div>
  );
}
