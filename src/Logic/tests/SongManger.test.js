import { splitTitle, filterTitles } from '../SongManager';

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

describe('filterTitles', () => {
  it('Simple filteration', () => {
    const titles = ['hello', 'age', 'aaah'];
    const result = filterTitles(titles, 'el');
    console.log(result);
    expect(result).toStrictEqual(['hello']);
  });

  it('Case sensitivity', () => {
    const titles = ['Hello', 'age', 'aaah'];
    const result = filterTitles(titles, 'he');
    console.log(result);
    expect(result).toStrictEqual(['Hello']);
  });

  it('Sinhala', () => {
    const titles = ['Ada', 'aaah', 'මම', 'අත්තික්කා ඵල නැතත්'];
    const result = filterTitles(titles, 'a', "අ");
    console.log(result);
    expect(result).toStrictEqual(['Ada', 'aaah', 'අත්තික්කා ඵල නැතත්']);
  });
});
``
