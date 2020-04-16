import { connect } from 'react-redux';
import { Actions } from '../Actions';
import View from './view';
import { SONG_EDITOR, SONG_PAGE } from '../Constants';
import { readSong } from '../../repository/songRepo';

const mapStateToProps = state => ({
  titles: state.songList.get('filteredTitles'),
  isLoading: state.songList.get('songList') === null,
});

const mapDispatchToProps = dispatch => ({
  onClickSong: (songName) => {
    console.log("###############");
    dispatch(Actions.songPage.prepareSongLoad(songName));
    readSong(window.db, songName).then(song => dispatch(Actions.songList.navigateToSong(song)));
    Actions.global.navigateTo(SONG_PAGE);
  },
  onSearch: text => dispatch(Actions.songList.onSearch(text)),
  onClickAddSong: () => {
    dispatch(Actions.songEditor.navigateToSongEditor());
    Actions.global.navigateTo(SONG_EDITOR);
  },
});

const component = connect(mapStateToProps, mapDispatchToProps)(View);

export default component;
