const _ = require('lodash');

exports.process = function(songs) {
  const songList = _.chain(songs)
    .map((song, key) => {
      const splitSong = song.split('\n');
      const title = splitSong.shift();
      if (splitSong[0] === '') {
        splitSong.shift();
      }
      return { song: splitSong.join('\n'), id: key, title };
    })
    .filter(item => item.song !== '')
    .keyBy('id')
    .value();
  return songList;
};
