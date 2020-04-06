import { splitTitle } from '../SongManager';

test('Splitting title', () => {
  const result = splitTitle('A sample tiltle   E#m     4/4');
  expect(result.title).toBe('A sample tiltle');
  expect(result.chord).toBe('E#m');
  expect(result.key).toBe('4/4');
});

test('Splitting title with - ', () => {
  const result = splitTitle('A sample tiltle - E#m  - 4/4');
  expect(result.title).toBe('A sample tiltle');
  expect(result.chord).toBe('E#m');
  expect(result.key).toBe('4/4');
});
