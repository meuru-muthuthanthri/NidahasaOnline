import { process } from '../SongProcessor';

test('renders learn react link', () => {
  const songObj = {
    song1: 'Bambalela  G  4/4\n\n[G]Bambalela [C]Bambalela\nhi',
    song2: '',
    song3: 'Bambalela  G  4/4',
    song4: 'Title\nHello',
  };
  const result = process(songObj);
  expect(result.song1.id).toBe('song1');
  expect(result.song1.title).toBe('Bambalela  G  4/4');
  expect(result.song1.song).toBe('[G]Bambalela [C]Bambalela\nhi');

  expect(result.song2).toBe();
  expect(result.song3).toBe();
  expect(result.song4.song).toBe('Hello');


});
