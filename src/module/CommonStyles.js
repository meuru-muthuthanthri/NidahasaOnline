import { makeStyles } from '@material-ui/core/styles';

const background = 'linear-gradient(45deg, #6200EA 30%, #651FFF 90%)';
const styles = makeStyles(() => ({
  iconButton: {
    padding: '2px',
    color: 'white',
  },
  mainContainer: {
    paddingBottom: 48,
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
}));

export default styles;
