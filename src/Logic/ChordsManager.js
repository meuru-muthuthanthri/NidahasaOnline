import React from 'react';
import _ from 'lodash';

const CHORD_REGEX = /\[([^\]]*)\]/g;

export const renderLine = (line = '', id, withChords) => {
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
      .concat(<span className="chords" id={`ch_${id}${index}`}>{chord}</span>),
    [],
  ) : null;

  return (
    <div>
      { !_.isEmpty(chords) ? <div className="chordsLine">{chords}</div> : null }
      <span className="lyrics">{modifiedLine}</span>
    </div>
  );
};

const renderEmptyLine = () => (<div className="emptyLine"><br /><br /></div>);
const renderHeader = title => (<div className="header"><h1>{title}</h1></div>);

export const renderSong = (song = '', withChords = true) => {
  return song
    .split(/\n/g)
    .map((line, index) => {
      if (index === 0 ) return renderHeader(line);
      return line === '' ? renderEmptyLine() : renderLine(line, index, withChords)
      }
    );
};

export const getTags = (song = '') =>
  song.split(/\n/g)
    .reduce((tags, line, index) => tags.concat(
      line.split(CHORD_REGEX).map((word, i) => `${index}${i}`)
    ), []);
