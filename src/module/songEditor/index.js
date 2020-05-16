import { connect } from 'react-redux';
import { Actions } from '../Actions';
import EditSongPageView from './view';
import { HOME_SCREEN } from '../Constants';
import { saveSong } from '../../repository/songRepo';

const mapStateToProps = state => ({
  song: state.songEditor.get('song'),
  title: state.songEditor.get('title'),
  categories: state.categoryView.get('categories'),
  selectedCategories: state.songEditor.get('categories').toArray(),
  tags: state.songEditor.get('searchTags').toArray(),
});

const mapDispatchToProps = dispatch => ({
  onGoHomePressed: () => {
    Actions.global.navigateTo(HOME_SCREEN);
    dispatch(Actions.songList.reloadTitles());
  },
  onLyricsEdit: chord => dispatch(Actions.songEditor.onLyricsEdit(chord)),
  onTitleEdit: chord => dispatch(Actions.songEditor.onTitleEdit(chord)),
  onSaveSong: (title, song, tags, categories) => {
    saveSong(window.db, title, song, tags, categories);
    Actions.global.navigateTo(HOME_SCREEN);
    dispatch(Actions.songList.reloadTitles());
  },
  onModifyTags: tags => dispatch(Actions.songEditor.onModifyTags(tags)),
  setSelectedCategories: cats => dispatch(Actions.songEditor.setSelectedCategories(cats)),
});

const component = connect(mapStateToProps, mapDispatchToProps)(EditSongPageView);

export default component;
