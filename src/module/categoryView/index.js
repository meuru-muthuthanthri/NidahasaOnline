import { connect } from 'react-redux';
import { Actions } from '../Actions';
import View from './view';
import { SONG_PAGE } from '../Constants';
import { readSong } from '../../repository/songRepo';
import { getPinnedTitles, buildCategories } from '../../Logic/SongManager';

const mapStateToProps = state => {
  const originalCategories = state.categoryView.get('categories');
  const titles = state.songList.get('titles');
  const categories = buildCategories(originalCategories, titles);
  return {
    titles: getPinnedTitles(titles),
    categories,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSong: (songName) => {
    dispatch(Actions.songPage.prepareSongLoad(songName));
    readSong(window.db, songName).then(song => dispatch(Actions.songList.navigateToSong(song)));
    Actions.global.navigateTo(SONG_PAGE);
  },
});

const component = connect(mapStateToProps, mapDispatchToProps)(View);

export default component;
