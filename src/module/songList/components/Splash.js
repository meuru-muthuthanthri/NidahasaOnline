import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import logo from '../../../logo.png';

const useStyles = makeStyles(() => ({
  splash: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90vh',
    justifyContent: 'center',
  },
  logo: {
    maxWidth: '70%',
  },
  progress: {
    marginTop: '10vh',
  },
}));

export default function Splash() {
  const classes = useStyles();
  return (
    <div className={classes.splash}>
      <img src={logo} className={classes.logo} alt="Logo" />
      <CircularProgress className={classes.progress} />
      <h4>Loading ...</h4>
    </div>
  );

}
