import _ from 'lodash';

export const splitTitle = (str = '') => {
  const strList = str.split(/(\s+)/).filter(str => str.trim().length > 0 && str !== '-');
  const key = strList.pop();
  const chord = strList.pop();
  const title = strList.join(' ').trim();
  return { title, chord, key };
};

export const processSongs = (songs) => ({ songs, titles: _.keys(songs) });

export const filterTitles = (titles, text, sinhalaText) => {
  return titles.filter(
    title => {
      return title.toLowerCase().includes(text.toLowerCase()) || (sinhalaText && title.includes(sinhalaText))
    }
  );
};
