import { connect } from 'react-redux';
import { Actions } from '../Actions';
import View from './view';
import { SONG_PAGE } from '../Constants';
import { readSong } from '../../repository/songRepo';

const mapStateToProps = state => ({
  titles: state.songList.get('filteredTitles'),
  singlishMode: state.songList.get('singlishMode'),
  sinhalaSearchText: state.songList.get('sinhalaSearchText'),
});

const mapDispatchToProps = dispatch => ({
  onClickSong: (songName) => {
    readSong(window.db, songName).then(song => dispatch(Actions.songList.navigateToSong(song)));
    Actions.global.navigateTo(SONG_PAGE);
  },
  onSearch: text => dispatch(Actions.songList.onSearch(text)),
  toggleSinlighsMode: () => dispatch(Actions.songList.toggleSinlighsMode()),
});

const component = connect(mapStateToProps, mapDispatchToProps)(View);

export default component;
