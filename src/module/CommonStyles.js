import { makeStyles } from '@material-ui/core/styles';

export const darkGrey = '#181D26';

const background = 'linear-gradient(45deg, #422574 30%, #3e1a99 90%)';
const mainNavigationBarHeight = 48;
const styles = makeStyles(() => ({
  iconButton: {
    padding: '2px',
    color: 'white',
  },
  mainContainer: {
    paddingBottom: mainNavigationBarHeight,
    paddingTop: 4,
    paddingLeft: 4,
    backgroundColor: 'black',
    color: 'white',
  },
  mainNavigatorTabs: {
    top: 'auto',
    bottom: 0,
    background,
    color: 'white',
  },
  appBar: {
    background,
  },
  notifications: {
    top: 'auto',
    bottom: mainNavigationBarHeight,
  },
}));

export default styles;
