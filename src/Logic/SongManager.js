import {fromJS, OrderedMap} from 'immutable';
import _ from 'lodash';

export const splitTitle = (str = '') => {
  const strList = str.split(/(\s+)/).filter(str => str.trim().length > 0 && str !== '-');
  const key = strList.pop();
  const chord = strList.pop();
  const title = strList.join(' ').trim();
  return { title, chord, key };
};

export const filterTitles = (titles, text = '') => {
  const trimmedText = text.trim();
  return titles.map((val, key) => val.set('filteredOut', !key.toLowerCase().includes(trimmedText.toLowerCase())));
};

export const moveTitleUp = (titles, index = 0) => {
  return moveItem(titles, index - 1, index - 2)
};

export const moveTitleDown = (titles, index = 0) => {
  return moveItem(titles, index - 1, index)
};

function moveItem(titles, old_index, new_index) {
  let arr = titles.toArray();

  if (new_index < 0) {
    return titles
  } else {
    let movedElem = arr[old_index];
    arr[old_index] = arr[new_index];
    arr[new_index] = movedElem;

    let index = 1;
    return new OrderedMap(arr)
        .map(val => val.set('index', index++));
  }
};

const getTitles = (titles, filterFn) => titles
  .filter(filterFn)
  .map((val, title) => ({ title, pinned: !!val.get('pinned'), index: val.get('index') }))
  .toList()
  .toArray();

export const getFilteredTitles = (titles) => getTitles(titles, val => !val.get('filteredOut'));
export const getPinnedTitles = (titles) => getTitles(titles, val => !!val.get('pinned'));

export const processSongTitles = payload => {
  let index = 1;
  return fromJS(payload)
    .sortBy(val => val.get('title'))
    .map(val => val.set('index', index++));
};

export const buildCategories = (categories, titles) => {
  const updatedCategories = _.keyBy(categories.map(cat => ({ ...cat, titles: [] })), 'id');
  titles.forEach((title, name) => {
    title.get('categories').forEach(cat => {
      updatedCategories[cat].titles.push(name);
    });
  });
  return _.values(updatedCategories);
};
