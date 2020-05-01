import { createAction } from '../Utils';

const Events = {
  TAB_CHANGED: 'TAB_CHANGED',
};

const Actions = {
  onChangeTab: createAction(Events.TAB_CHANGED, tabIndex => tabIndex),
};

export default {
  Events,
  Actions,
};
