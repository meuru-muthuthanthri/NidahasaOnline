import { connect } from 'react-redux';
import { Actions } from '../Actions';
import View from './view';
import { SONG_PAGE } from '../Constants';

const mapStateToProps = state => ({
  titles: state.songList.get('filteredTitles'),
  songs: state.songList.get('songs'),
  singlishMode: state.songList.get('singlishMode'),
  sinhalaSearchText: state.songList.get('sinhalaSearchText'),
});

const mapDispatchToProps = dispatch => ({
  onClickSong: (songName) => {
    dispatch(Actions.songList.navigateToSong(songName));
    Actions.global.navigateTo(SONG_PAGE);
  },
  onSearch: text => dispatch(Actions.songList.onSearch(text)),
  toggleSinlighsMode: () => dispatch(Actions.songList.toggleSinlighsMode()),
});

const component = connect(mapStateToProps, mapDispatchToProps)(View);

export default component;
