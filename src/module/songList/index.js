import { connect } from 'react-redux';
import { Actions } from '../Actions';
import View from './view';
import { SONG_PAGE } from '../Constants';

const mapStateToProps = state => ({
  showChords: state.songPage.get('showChords'),
});

const mapDispatchToProps = dispatch => ({
  onClickSong: (songName) => {
    dispatch(Actions.songList.navigateToSong(songName));
    Actions.global.navigateTo(SONG_PAGE);
  },
});

const component = connect(mapStateToProps, mapDispatchToProps)(View);

export default component;
