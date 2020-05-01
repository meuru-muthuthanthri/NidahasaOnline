import songPage from './songPage/actions';
import songList from './songList/actions';
import songEditor from './songEditor/actions';
import tabView from './tabView/actions';
import history from '../core/history';

const globalEvents = {
};

const globalActions = {
  navigateTo: (page) => {
    console.log('Navigating to ', page);
    history.push(page);
  },
};

export const Actions = {
  global: globalActions,
  songPage: songPage.Actions,
  songList: songList.Actions,
  songEditor: songEditor.Actions,
  tabView: tabView.Actions,
};

export const Events = {
  global: globalEvents,
  songPage: songPage.Events,
  songList: songList.Events,
  songEditor: songEditor.Events,
  tabView: tabView.Events,
};
