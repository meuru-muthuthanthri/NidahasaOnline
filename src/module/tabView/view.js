import React from 'react';
import Paper from '@material-ui/core/Paper';

import CommonStyles from '../CommonStyles';
import Tabs from './components/Tabs';

export default function View(props) {
  const styles = CommonStyles();
  const { children, showNavBar, currentView, onNavigate } = props;
  return (
    <div>
      <Paper square className={styles.mainContainer}>
        {children}
      </Paper>
      <Tabs showNavBar={showNavBar} currentView={currentView} onNavigate={onNavigate} />
    </div>
  );
}
