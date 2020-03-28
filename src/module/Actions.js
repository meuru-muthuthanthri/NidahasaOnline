import songPage from './songPage/actions';
import songList from './songList/actions';
import history from '../services/history';

const globalEvents = {
};

const globalActions = {
  navigateTo: (screen) => {
    console.log("@@@@@@@@@", screen);
    history.push('/page')
  }
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
