import { connect } from 'react-redux';
import { Actions } from '../Actions';
import SongPageView from './view';
import { HOME_SCREEN } from '../Constants';

const mapStateToProps = state => {
  const { chord, originalChord, showChords, song, title } = state.songPage.toJS();
  return {
    showChords,
    currentSong: song,
    title,
    chord,
    originalChord,
  };
};
const mapDispatchToProps = dispatch => ({
  onShowChordToggle: () => dispatch(Actions.songPage.onShowChordToggle()),
  onGoHomePressed: () => {
    Actions.global.navigateTo(HOME_SCREEN);
    dispatch(Actions.songList.reloadTitles());
  },
  onTranspose: chord => dispatch(Actions.songPage.onTranspose(chord)),
});

const component = connect(mapStateToProps, mapDispatchToProps)(SongPageView);

export default component;
