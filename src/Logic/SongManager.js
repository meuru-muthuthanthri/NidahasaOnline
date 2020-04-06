export const splitTitle = (str = '') => {
  const strList = str.split(/(\s+)/).filter(str => str.trim().length > 0 && str !== '-');
  const key = strList.pop();
  const chord = strList.pop();
  const title = strList.join(' ').trim();
  return { title, chord, key };
};
