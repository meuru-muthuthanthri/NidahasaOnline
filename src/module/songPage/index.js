import { connect } from 'react-redux';
import { Actions } from '../Actions';
import View from './View';

const mapStateToProps = state => {
  return {
    showChords: state.songPage.get('showChords')
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onShowChordToggle: () => dispatch(Actions.songPage.onShowChordToggle()),
  }
};

const component = connect(mapStateToProps, mapDispatchToProps)(View);

export default component;
