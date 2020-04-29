import { connect } from 'react-redux';
import { Actions } from '../Actions';
import View from './view';
import { SONG_EDITOR, SONG_PAGE } from '../Constants';
import { readSong } from '../../repository/songRepo';
import { getFilteredTitles } from '../../Logic/SongManager';

const mapStateToProps = state => ({
  titles: getFilteredTitles(state.songList.get('titles')),
  isLoading: state.songList.get('titles').isEmpty(),
});

const mapDispatchToProps = dispatch => ({
  onClickSong: (songName) => {
    dispatch(Actions.songPage.prepareSongLoad(songName));
    readSong(window.db, songName).then(song => dispatch(Actions.songList.navigateToSong(song)));
    Actions.global.navigateTo(SONG_PAGE);
  },
  onSearch: text => dispatch(Actions.songList.onSearch(text)),
  onClickAddSong: () => {
    dispatch(Actions.songEditor.navigateToSongEditor());
    Actions.global.navigateTo(SONG_EDITOR);
  },
  onClickPinSong: (title, pinned) => dispatch(Actions.songList.onClickPinSong({ title, pinned })),
});

const component = connect(mapStateToProps, mapDispatchToProps)(View);

export default component;
