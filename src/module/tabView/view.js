import React from 'react';
import Paper from '@material-ui/core/Paper';
import { SnackbarProvider } from 'notistack';

import CommonStyles from '../CommonStyles';
import Tabs from './components/Tabs';

export default function View(props) {
  const styles = CommonStyles();
  const { children, showNavBar, currentView, onNavigate } = props;
  return (
    <SnackbarProvider maxSnack={3} dense autoHideDuration={2000} anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }} className={styles.notifications}
    >
      <Paper square className={styles.mainContainer}>
        {children}
      </Paper>
      <Tabs showNavBar={showNavBar} currentView={currentView} onNavigate={onNavigate} />
    </SnackbarProvider>
  );
}
