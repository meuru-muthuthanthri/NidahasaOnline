import { connect } from 'react-redux';
import { Actions } from '../Actions';
import TabView from './view';

const mapStateToProps = state => {
  const tabView = state.tabView;
  return {
    showNavBar: tabView.get('showNavBar'),
    currentView: tabView.get('currentView'),
  };
};
const mapDispatchToProps = dispatch => ({
  onNavigate: (view) => {
    console.log("##############", view);
    // dispatch(Actions.songPage.onShowChordToggle())
  },
});

const component = connect(mapStateToProps, mapDispatchToProps)(TabView);

export default component;
