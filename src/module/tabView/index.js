import { connect } from 'react-redux';
import { Actions } from '../Actions';
import TabView from './view';

const mapStateToProps = state => {
  return {
    showNavBar: state.tabView.get('showNavBar'),
  };
};
const mapDispatchToProps = dispatch => ({
  // onShowChordToggle: () => dispatch(Actions.songPage.onShowChordToggle()),
});

const component = connect(mapStateToProps, mapDispatchToProps)(TabView);

export default component;
