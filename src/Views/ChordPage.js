import React from 'react';
import { renderSong, getTags } from '../Logic/ChordsManager';
import { read } from '../repository/SongReader';
const song = read();
// const song = ' [A] මට [F]දරන්න බෑ[Am][F] ජේසුනී ඔබෙ[Gm] ආදරේ';

class ChordPage extends React.Component {
  componentDidMount() {
    getTags(song).forEach(val => {
      const chordElement = document.getElementById(`ch_${val}`);
      if (chordElement) {
        chordElement.style.left = `${document.getElementById(val).offsetLeft}px`;
      }
    });
  }

  render() {
    return (
      <div>
        {renderSong(song)}
      </div>
    );
  }
}

export { ChordPage };
