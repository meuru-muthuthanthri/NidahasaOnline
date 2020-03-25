import React from 'react';
import _ from 'lodash';

const CHORD_REGEX = /\[([^\]]*)\]/g;

export const renderLine = (line = '', id) => {
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

  const chords = chordList.reduce(
    (newLine, chord, index) =>
      newLine.concat(<span className="chords" id={`ch_${id}${index}`}>{chord}</span>)
    , []);

  return (
    <div>
      <div className="chordsLine">{chords}</div>
      <span className="lyrics">{modifiedLine}</span>
    </div>
  );
};

const renderEmptyLine = () => (<div className="emptyLine"><br /><br /></div>);
const renderHeader = title => (<div className="header"><h1>{title}</h1></div>);

export const renderSong = (song = '') => {
  return song
    .split(/\n/g)
    .map((line, index) => {
      if (index === 0 ) return renderHeader(line);
      return line === '' ? renderEmptyLine() : renderLine(line, index)
      }
    );
};

export const getTags = (song = '') =>
  song.split(/\n/g)
    .reduce((tags, line, index) => tags.concat(
      line.split(CHORD_REGEX).map((word, i) => `${index}${i}`)
    ), []);
