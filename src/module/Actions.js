import songPage from './songPage/actions';
import songList from './songList/actions';
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
};

export const Events = {
  global: globalEvents,
  songPage: songPage.Events,
  songList: songList.Events,
};
