import { connect } from 'react-redux';
import { Actions } from '../Actions';
import View from './view';
import { SONG_PAGE } from '../Constants';

const mapStateToProps = state => ({
  titles: state.songList.get('filteredTitles'),
  songs: state.songList.get('songs'),
});

const mapDispatchToProps = dispatch => ({
  onClickSong: (songName) => {
    dispatch(Actions.songList.navigateToSong(songName));
    Actions.global.navigateTo(SONG_PAGE);
  },
  onSearch: text => dispatch(Actions.songList.onSearch(text)),
});

const component = connect(mapStateToProps, mapDispatchToProps)(View);

export default component;
