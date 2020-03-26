import songPage from './songPage/actions'

const createAction = (type) => {
  return (payload) => ({ type, payload})
};

const globalEvents = {
};

const globalActions = {
};

export const Actions = {
  global: globalActions,
  songPage: songPage.Actions,
};

export const Events = {
  global: globalEvents,
  songPage: songPage.Events,
};
