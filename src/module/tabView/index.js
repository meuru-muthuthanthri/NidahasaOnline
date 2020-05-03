import { connect } from 'react-redux';
import { Actions } from '../Actions';
import TabView from './view';
import { CATEGORIES, HOME_SCREEN, PINNED_SONG } from '../Constants';

const mapStateToProps = state => {
  const tabView = state.tabView;
  return {
    showNavBar: tabView.get('showNavBar'),
    currentView: tabView.get('currentView'),
  };
};
const mapDispatchToProps = dispatch => ({
  onNavigate: (view) => {
    switch (view) {
      case 1:
        // Actions.global.navigateTo(CATEGORIES);
        // break;
      case 2:
        Actions.global.navigateTo(PINNED_SONG);
        break;
      case 0:
      default:
        Actions.global.navigateTo(HOME_SCREEN);
    }
    dispatch(Actions.tabView.onChangeTab(view))
  },
});

const component = connect(mapStateToProps, mapDispatchToProps)(TabView);

export default component;
