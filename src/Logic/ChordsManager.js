import React from 'react';
import _ from 'lodash';

const CHORD_REGEX = /\[([^\]]*)\]/g;

export const renderLine = (line = '', id, withChords, lyricsSize, chordSize) => {
  const split = line.split(CHORD_REGEX);
  const wordList = split
    .filter((val, index) => index % 2 === 0)
    .map((word, index) => ((word === '' && index !== 0) ? ' . . . ' : `${word}`));

  const chordList = split.filter((val, index) => index % 2 === 1);

  const modifiedLine = wordList.reduce(
    (elements, word, index) => elements
      .concat(<span id={`${id}${index}`} />)
      .concat(_.startsWith(word, ' ') ? <span>&nbsp;</span> : '')
      .concat(<span>{word}</span>),
    [wordList.shift()],
  );

  const chords = withChords ? chordList.reduce(
    (newLine, chord, index) => newLine
      .concat(<span style={{ fontSize: chordSize }} className="chords" id={`ch_${id}${index}`}>{chord}</span>),
    [],
  ) : null;

  return (
    <div>
      { !_.isEmpty(chords) ? <div style={{ paddingBottom: chordSize }} className="chordsLine">{chords}</div> : null }
      <span style={{ fontSize: lyricsSize }} className="lyrics">{modifiedLine}</span>
    </div>
  );
};

const renderEmptyLine = () => (<div className="emptyLine"><br /><br /></div>);

export const renderSong = (song = '', withChords = true, lyricsSize, chordSize) => {
  return song
    .split(/\n/g)
    .map((line, index) => (line === '' ? renderEmptyLine() : renderLine(line, index, withChords, lyricsSize, chordSize)));
};

export const getTags = (song = '') =>
  song.split(/\n/g)
    .reduce((tags, line, index) => tags.concat(
      line.split(CHORD_REGEX).map((word, i) => `${index}${i}`)
    ), []);
