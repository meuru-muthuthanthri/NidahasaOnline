import { connect } from 'react-redux';
import { Actions } from '../Actions';
import SongPageView from './view';
import { HOME_SCREEN, SONG_EDITOR } from '../Constants';

const mapStateToProps = state => {
  const { chord, originalChord, showChords, song, title, songId } = state.songPage.toJS();
  return {
    showChords,
    currentSong: song,
    title,
    chord,
    originalChord,
    songInfo: state.songList.getIn(['titles', songId]),
  };
};
const mapDispatchToProps = dispatch => ({
  onShowChordToggle: () => dispatch(Actions.songPage.onShowChordToggle()),
  onGoHomePressed: () => {
    Actions.global.navigateTo(HOME_SCREEN);
    dispatch(Actions.songList.reloadTitles());
  },
  onTranspose: chord => dispatch(Actions.songPage.onTranspose(chord)),
  onEdit: title => {
    Actions.global.navigateTo(SONG_EDITOR);
    dispatch(Actions.songEditor.onEdit(title));
  },
});

const component = connect(mapStateToProps, mapDispatchToProps)(SongPageView);

export default component;
