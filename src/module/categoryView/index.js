import { connect } from 'react-redux';
import { Actions } from '../Actions';
import View from './view';
import { SONG_EDITOR, SONG_PAGE } from '../Constants';
import { readSong } from '../../repository/songRepo';
import { getPinnedTitles } from '../../Logic/SongManager';

const mapStateToProps = state => {
  const categories = [
    { category: 'මනස්ථාපනයේ ගී', order: 1, id: 'rep' },
    { category: 'මෙනෙහි කිරීමේ ගී', order: 2, id: 'med' },
    { category: 'බලය අයැදීමේ ගී', order: 3, id: 'pow' },
    { category: 'දේව සුරක්ෂිතභවයේ ගී', order: 4, id: 'pro' },
    { category: 'අයිතිය දීමේ ගී', order: 5, id: 'sur' },
    { category: 'ප්‍රශංසාවේ ගී', order: 6, id: 'pra' },
    { category: 'නමස්කාරයේ ගී', order: 7, id: 'wor' },
    { category: 'දේව ආදරයේ ගී', order: 8, id: 'lov' },
    { category: 'ශුද්ධාත්ම ගී', order: 9, id: 'spi' },
    { category: 'සුවයේ ගී', order: 10, id: 'hea' },
    { category: 'දිව්‍ය සත්ප්‍රසාදීය ගී', order: 11, id: 'euc' },
    { category: 'දිව්‍ය යාගයන්හි ගැයෙන ගී', order: 12, id: 'mas' },
    { category: 'දෙව් මවුන්ට ගී', order: 13, id: 'mar' },
    { category: 'කැඳවීම පිළිබඳ ගී', order: 14, id: 'voc' },
    { category: 'Action Songs', order: 15, id: 'act' },
  ];
  return {
    titles: getPinnedTitles(state.songList.get('titles')),
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
