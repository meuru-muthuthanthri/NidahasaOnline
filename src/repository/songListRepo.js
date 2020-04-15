import _ from 'lodash';
import { SONG_LIST } from './Constants';

export const readList = db => db.child(SONG_LIST).once('value').then(data => data.val());

// todo Refactor following methods

export const addSongToList = (db, song) => {
  db.child('songList/' + song.id).set({
    title: song.title,
  }, err => {
    console.log("@@@", song.id, err);
  });
};

export const readSongs = db => {
  console.log("############# Reading");
  return db.child('songs').once('value').then(data => {
    console.log("############ Got it", data.val());
    _.forOwn(data.val(), (val, key) => {
      console.log("Processing:", key);
      // addSongToList(db, val);
    })
  });
};

// on song addition
// dbRef.child('songs').on("child_added", snap => {
//   let user = snap.val();
//   // console.log("####@@@@@@@@@@@@@", user);
// });


