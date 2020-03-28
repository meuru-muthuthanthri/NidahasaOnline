import Songs from './Songs/Songs'

export const read = () => {
  // var vs = require('./Songs/Andura Madin.txt');

  console.log("##############", JSON.stringify(Songs));

  return Songs;
};
