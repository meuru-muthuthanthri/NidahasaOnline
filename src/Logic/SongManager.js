import { fromJS } from 'immutable';

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
