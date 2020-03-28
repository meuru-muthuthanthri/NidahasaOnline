import { connect } from 'react-redux';
import { Actions } from '../Actions';
import SongPageView from './view';
import { HOME_SCREEN } from '../Constants';

const mapStateToProps = state => {
  return {
    showChords: state.songPage.get('showChords'),
    currentSong: state.songPage.get('song'),
    title: state.songPage.get('title'),
  };
};
const mapDispatchToProps = dispatch => ({
  onShowChordToggle: () => dispatch(Actions.songPage.onShowChordToggle()),
  onGoHomePressed: () => Actions.global.navigateTo(HOME_SCREEN),
});

const component = connect(mapStateToProps, mapDispatchToProps)(SongPageView);

export default component;
