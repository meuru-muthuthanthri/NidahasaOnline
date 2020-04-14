import { SONGS } from './Constants';

export const readSong = (db, id) => db.child(SONGS + id).once('value').then(data => data.val());
