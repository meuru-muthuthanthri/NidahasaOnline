import { connect } from 'react-redux';
import { Actions } from '../Actions';
import View from './view';

const mapStateToProps = state => {
  return {
    showChords: state.songPage.get('showChords')
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClickSong: (songName) => {
      dispatch(Actions.songList.navigateToSong(songName));
      Actions.global.navigateTo('songPage');
    },
  }
};

const component = connect(mapStateToProps, mapDispatchToProps)(View);

export default component;

