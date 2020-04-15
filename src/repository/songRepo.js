import { SONGS, SONG_LIST } from './Constants';
import { splitTitle } from '../Logic/SongManager';

export const readSong = (db, id) => db.child(SONGS + id).once('value').then(data => data.val());

export const saveSong = (db, title, song) => {
  const { title: id, chord, key } = splitTitle(title);
  return db.child(SONGS + id).set({ id, song, title })
    .then(() => db.child(`${SONG_LIST}/${id}`)
      .set({ title, chord, key }));
};

// write data example
// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('songs/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
